import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const AUDIENCE_GUIDANCE: Record<string, string> = {
  "Executive leadership":
    "Write for a C-suite audience. Be concise, strategic, and metrics-oriented. Focus on impact, timeline, resource implications, and what decisions you need from them. Skip operational details they will delegate.",
  "Operational team":
    "Write for the team that will execute this. Be practical, specific, and action-oriented. Include timeline, responsibilities, what changes in their day-to-day, and what they should do first.",
  "Client or customer":
    "Write for an external client or customer. Be reassuring, benefit-focused, and professional. Emphasize what improves for them, what stays the same, and what (if anything) they need to do.",
  "Legal or compliance":
    "Write for legal or compliance stakeholders. Be precise, risk-aware, and process-focused. Flag anything that needs review, approval, or documentation. Note regulatory or contractual considerations.",
  "Sales or marketing":
    "Write for sales or marketing teams. Be opportunity-focused and concrete. Emphasize the customer-facing story, positioning implications, competitive advantages, and talking points they can use immediately.",
};

export async function POST(request: NextRequest) {
  try {
    const { role, initiative, audiences } = await request.json();

    if (!role?.trim() || !initiative?.trim() || !Array.isArray(audiences) || audiences.length === 0) {
      return NextResponse.json(
        { error: "Please provide your role, initiative, and at least one audience." },
        { status: 400 }
      );
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured. Add ANTHROPIC_API_KEY to .env.local." },
        { status: 500 }
      );
    }

    const client = new Anthropic({ apiKey });

    const documents = await Promise.all(
      audiences.map(async (audience: string) => {
        const guidance =
          AUDIENCE_GUIDANCE[audience] ||
          "Tailor the communication appropriately for this audience.";

        const message = await client.messages.create({
          model: "claude-sonnet-4-5-20250514",
          max_tokens: 1024,
          system: [
            "You are a skilled communications writer. You write clear, specific, and well-structured stakeholder communications.",
            "",
            guidance,
            "",
            "Write a briefing document of 300-400 words. Use markdown formatting: a clear subject line as an H2 heading, then body text with subheadings, bullets, and bold where appropriate.",
            "Be specific and concrete using the details provided. Do not be generic.",
          ].join("\n"),
          messages: [
            {
              role: "user",
              content: `My role: ${role}\n\nThe initiative: ${initiative}\n\nWrite a tailored briefing document for: ${audience}`,
            },
          ],
        });

        const text =
          message.content[0].type === "text" ? message.content[0].text : "";

        return { audience, markdown: text };
      })
    );

    return NextResponse.json({ documents });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Generation failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const AUDIENCES = [
  "Executive leadership",
  "Operational team",
  "Client or customer",
  "Legal or compliance",
  "Sales or marketing",
];

interface GeneratedDocument {
  audience: string;
  markdown: string;
}

export default function GeneratorPage() {
  const [role, setRole] = useState("");
  const [initiative, setInitiative] = useState("");
  const [selectedAudiences, setSelectedAudiences] = useState<string[]>([]);
  const [documents, setDocuments] = useState<GeneratedDocument[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function toggleAudience(audience: string) {
    setSelectedAudiences((prev) =>
      prev.includes(audience)
        ? prev.filter((a) => a !== audience)
        : [...prev, audience]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!role.trim() || !initiative.trim() || selectedAudiences.length === 0) return;

    setLoading(true);
    setError("");
    setDocuments([]);

    try {
      const res = await fetch("/api/generator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role, initiative, audiences: selectedAudiences }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Generation failed");
      }

      const data = await res.json();
      setDocuments(data.documents);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  const canSubmit = role.trim() && initiative.trim() && selectedAudiences.length > 0;

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-2xl font-semibold tracking-tight text-[#1a1a2e]">
          Stakeholder brief generator
        </h1>
        <p className="mt-2 text-sm text-[#1a1a2e]/60">
          Describe your role and initiative. Pick who needs to hear about it. Get a tailored document for each audience.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Role */}
        <div>
          <label htmlFor="role" className="mb-1.5 block text-sm font-medium text-[#1a1a2e]">
            Your role
          </label>
          <input
            id="role"
            type="text"
            placeholder="e.g., VP of Operations"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full rounded-lg border border-black/10 bg-white px-3.5 py-2.5 text-sm text-[#1a1a2e] placeholder:text-[#1a1a2e]/30 focus:border-[#6366f1] focus:outline-none focus:ring-2 focus:ring-[#6366f1]/20"
          />
        </div>

        {/* Initiative */}
        <div>
          <label htmlFor="initiative" className="mb-1.5 block text-sm font-medium text-[#1a1a2e]">
            The initiative
          </label>
          <textarea
            id="initiative"
            rows={4}
            placeholder="e.g., Rolling out a new vendor management process next quarter to consolidate our three existing procurement workflows into one..."
            value={initiative}
            onChange={(e) => setInitiative(e.target.value)}
            className="w-full rounded-lg border border-black/10 bg-white px-3.5 py-2.5 text-sm text-[#1a1a2e] placeholder:text-[#1a1a2e]/30 focus:border-[#6366f1] focus:outline-none focus:ring-2 focus:ring-[#6366f1]/20"
          />
        </div>

        {/* Audience selection */}
        <div>
          <label className="mb-2 block text-sm font-medium text-[#1a1a2e]">
            Who do you need to communicate this to?
          </label>
          <div className="flex flex-wrap gap-2">
            {AUDIENCES.map((audience) => {
              const selected = selectedAudiences.includes(audience);
              return (
                <button
                  key={audience}
                  type="button"
                  onClick={() => toggleAudience(audience)}
                  className={`rounded-full border px-4 py-2 text-sm transition-all ${
                    selected
                      ? "border-[#6366f1] bg-[#6366f1] text-white"
                      : "border-black/10 bg-white text-[#1a1a2e]/70 hover:border-black/20 hover:text-[#1a1a2e]"
                  }`}
                >
                  {selected && (
                    <span className="mr-1.5">✓</span>
                  )}
                  {audience}
                </button>
              );
            })}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!canSubmit || loading}
          className="rounded-lg bg-[#6366f1] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#5558e6] disabled:cursor-not-allowed disabled:opacity-40"
        >
          {loading ? "Generating..." : "Generate documents"}
        </button>
      </form>

      {/* Error */}
      {error && (
        <div className="mt-8 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="mt-12 flex flex-col items-center gap-3 py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#6366f1]/20 border-t-[#6366f1]" />
          <p className="text-sm text-[#1a1a2e]/50">
            Generating {selectedAudiences.length} document{selectedAudiences.length !== 1 ? "s" : ""}...
          </p>
        </div>
      )}

      {/* Results */}
      {documents.length > 0 && (
        <div className="mt-12 space-y-6">
          <h2 className="text-lg font-semibold text-[#1a1a2e]">
            Generated documents
          </h2>
          <div className="space-y-5">
            {documents.map((doc) => (
              <div
                key={doc.audience}
                className="rounded-xl border border-black/[0.06] bg-white p-6 shadow-sm"
              >
                <div className="mb-4 inline-block rounded-full bg-[#6366f1]/10 px-3 py-1 text-xs font-medium text-[#6366f1]">
                  {doc.audience}
                </div>
                <div className="prose-sm max-w-none text-[#1a1a2e]/80 [&_h1]:mb-3 [&_h1]:text-base [&_h1]:font-semibold [&_h1]:text-[#1a1a2e] [&_h2]:mb-2 [&_h2]:mt-4 [&_h2]:text-sm [&_h2]:font-semibold [&_h2]:text-[#1a1a2e] [&_h3]:mb-1 [&_h3]:mt-3 [&_h3]:text-sm [&_h3]:font-medium [&_h3]:text-[#1a1a2e] [&_li]:mb-1 [&_ol]:my-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mb-2 [&_p]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-[#1a1a2e] [&_ul]:my-2 [&_ul]:list-disc [&_ul]:pl-5">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {doc.markdown}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

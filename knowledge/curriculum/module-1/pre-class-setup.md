# Before Sunday — ~25 minutes of setup

Sunday morning is 75 minutes of hands-on work where each of you builds a small webapp — a role-aware document generator that writes the stakeholder updates you'd otherwise spend your Monday morning on. To pull that off in 75 minutes, we need the Claude desktop app installed on your laptop, with a Next.js project already scaffolded, before you walk in.

**Total time: about 25 minutes, most of which is you clicking "approve" while Claude does the work.** Please do this Friday night or Saturday — not Sunday at 10am. If you hit a wall, text me. I'd rather debug your install on Saturday than eat the first 15 minutes of the session.

I'm not asking you to become a developer. I'm asking you to click "approve" a few times.

**When:** Sunday 2026-04-12, 10:30am – 11:45am CT
**Where:** 1 West Superior, Chicago IL

---

## 1. Sign up for Claude Pro ($20, cancellable) — 3 min

Go to **claude.ai/upgrade**[^1]. Create a free account if you don't have one, then upgrade to Pro. $20 for the month, cancel any time.

I'm not asking you to commit to a subscription — I'm asking you to be in the room with me on the same tier. Claude Pro includes **Claude Code**, which is the tool we'll use to build your webapp during the session. Without Pro, you'd be watching me drive instead of driving yourself.

If you already have Pro, you're done with this step.

If you can't expense it and you want to cancel Monday, go ahead — I owe you $20 I'll probably turn into coffee.

**Already paying for ChatGPT Plus or Pro?** If you'd rather not double up on AI subscriptions, we can work with what you've got — install **OpenAI Codex** on your laptop instead. It's OpenAI's equivalent of Claude Code and works the same way in the session: you describe what you want, it does the work, you click approve. Grab it from **github.com/openai/codex**[^5]. Text me by Saturday night so we can do a quick setup check together before Sunday — the prompts I'll hand you on Sunday work on either tool, but I want to confirm yours is running end-to-end so you're not the only one fighting a different UI in the room. If you go the Codex route, you can skip steps 2 and 3 below and use the OpenAI docs for your install instead.

---

## 2. Download the Claude desktop app — 5–10 min

This is the app we'll use for the whole build phase. It runs Claude Code in a point-and-click interface, so you won't touch a terminal or write a line of code. You describe what you want, Claude does it, you click "approve."

**Download:** **claude.ai/download**[^2]

- **Mac:** download the macOS version, open the .dmg, drag Claude into Applications
- **Windows:** download the Windows installer, run it

Once installed, open the app and sign in with the same Claude account you upgraded to Pro in step 1.

**Windows users only, one extra step:** before you click the Code tab, install **Git for Windows** from **git-scm.com/downloads/win**[^3]. Run the installer with all defaults. The Code tab on Windows won't work without it. Mac users skip this entirely; Git is already on your Mac.

**Confirm it's working:** at the top of the app window you should see tabs including **Code**. Click **Code**. If the tab is missing or says "upgrade," double-check you're on Pro (not the free tier) and restart the app.

---

## 3. Let Claude Code set up your project — ~10 min

This is where Claude does the technical setup. You'll pick a folder, paste one prompt, and click "approve" a few times. When it's done, you'll have a real Next.js webapp on your laptop, running at localhost:3000, ready for Sunday.

**Steps:**

1. Open the Claude desktop app and click the **Code** tab
2. Click **Select folder** and pick your Desktop (or make a new folder called `unlock` on your Desktop and pick that)
3. Paste this exact prompt into the chat and hit Enter:

> *Please set me up for a workshop. Detect what OS I'm on. If Node.js isn't installed, install it using nvm on Mac or fnm on Windows — user-space installers that don't need admin rights. Then create a new Next.js project called "unlock-demo" in the folder I've selected, using TypeScript and Tailwind with all defaults. Start the dev server and confirm localhost:3000 is running. Explain each step in plain English — I'm not technical — and ask me to approve each command before running it. If something fails, stop and tell me what went wrong in plain English.*

4. Claude will walk you through each step and ask you to approve each command. Click **approve** when it asks. Read what it says in plain English if you're curious, or just click through if you're not.

**What "done" looks like:** Claude tells you the dev server is running at localhost:3000 and you can see the Next.js welcome page in the preview pane (a black page with "Get started by editing..."). When you see that, close the app. You're done until Sunday.

If something goes sideways (Claude stops on a failed command, you hit a weird IT permissions prompt), screenshot it and text me. Don't spend 45 minutes trying to fix it yourself. That's what I'm here for.

---

## 4. Show up with one real initiative in your head — 5 min (can do in the shower)

Sunday you'll feed the webapp you build a **real thing from your actual work**. Something you're in the middle of that you need to communicate about to more than one group of people. Come with one of these in mind:

- A new project or initiative you're kicking off
- A decision you need to roll out to different teams
- A launch or change you're prepping for
- A pitch or proposal that has to land differently for different audiences

The test is simple: is there something on your plate right now where you'd have to write three or four different versions of the same message for different stakeholders (exec team, your own team, a client, legal, sales)? That's the thing. Bring it.

It doesn't have to be polished. You'll be typing a sentence or two into a form, not uploading a strategy doc. No confidential details required. A paragraph of context from your head is enough.

One initiative is enough. Don't overthink it.

(See also: the starter prompt you'll paste on Sunday lives in `runs/2026-04-12-beta/starters.md` in the curriculum repo — I'll have it on the projector, you won't need to chase it down.)

---

## A note on Claude Pro usage

Claude Pro has a rolling 5-hour usage window that's shared across chat and Claude Code. **Don't burn your quota chatting with Claude on Sunday morning before the workshop.** Save it for the build phase. If you spend an hour chatting with Claude at 8am, you'll have less to work with at 10:30am.

---

## What to bring Sunday

- Your laptop, charged
- Your laptop's charger (you will forget it)
- Whatever you'd normally bring to a Sunday brunch thing. I'll have food and coffee.

**Personal vs. work laptop: use whichever is easier for you.** A personal laptop will run everything we need on Sunday without issue. If you'd rather bring your work laptop because that's where your actual work lives, that's fine too, but check your company's IT and software install policy first. Some firms block new app installs or outbound developer tools, and the last thing I want is you getting flagged by IT because you installed Node on a locked-down machine. **If in doubt, bring your personal laptop.** You won't miss anything.

## What NOT to stress about

- **You do not need to upload any confidential files.** Ever. I'll show you how to give Claude a paragraph of context instead of a document.
- **You do not need any pre-reading.** Show up curious. We start building immediately.
- **You do not need any coding experience.** Zero. Claude Code is designed so you describe what you want in plain English and it writes the code for you. You will not type a line of code on Sunday. You will type instructions and watch a webapp appear.
- **You do not need to understand Node.js.** Claude Code installed it for you because the webapp needs it under the hood, the same way your car needs an engine you never look at.

## If you hit a wall on setup

Text me. I'd rather fix it tonight than lose the first 10 minutes of Sunday to "hold on, my install isn't working."

Curious about Claude Code before Sunday? The official docs are at **docs.claude.com/en/docs/claude-code**[^4], but you don't need to read them. Everything you need, we'll cover in the room.

See you Sunday.

— Shubham

[^1]: https://claude.ai/upgrade
[^2]: https://claude.ai/download
[^3]: https://git-scm.com/downloads/win
[^4]: https://docs.claude.com/en/docs/claude-code
[^5]: https://github.com/openai/codex

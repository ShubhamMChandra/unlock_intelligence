# Before Sunday — 25 minutes of setup

Sunday morning is 75 minutes of hands-on work where each of you builds a small webapp that scrapes a website and produces a competitive intel brief. That means a bit more setup than a normal workshop — we need Node.js and the Claude desktop app installed on your laptop before you walk in.

**Total time: about 25 minutes.** Please do this tonight or Saturday morning, not Sunday at 10am. If you hit a wall, text me — I'd rather debug your install on Saturday than eat the first 15 minutes of the session.

**When:** Sunday 2026-04-12, 10:30am – 11:45am CT
**Where:** 1 West Superior, Chicago IL

---

## 1. Sign up for Claude Pro ($20, cancellable) — 3 min

Go to **[claude.ai/upgrade](https://claude.ai/upgrade)**. Create a free account if you don't have one, then upgrade to Pro. $20 for the month, cancel any time.

I'm not asking you to commit to a subscription — I'm asking you to be in the room with me on the same tier. Claude Pro includes **Claude Code**, which is the tool we'll use to build your webapp during the session. Without Pro, you'd be watching me drive instead of driving yourself.

If you already have Pro, you're done with this step.

If you can't expense it and you want to cancel Monday, go ahead — I owe you $20 I'll probably turn into coffee.

---

## 2. Install Node.js — 5 min

Node.js is the thing that lets your webapp run on your laptop. Claude Code uses it to scaffold and start your project during the build phase.

**Download:** **[nodejs.org/en/download](https://nodejs.org/en/download)**

- On the download page, pick the **LTS** version (not "Current")
- **Mac:** click the macOS installer (.pkg), run it, click through
- **Windows:** click the Windows installer (.msi), run it, click through with default options

**Verify it worked:** open Terminal on Mac or PowerShell on Windows, type `node --version`, and hit Enter. You should see something like `v24.14.1`. If you see that, you're done. Don't worry about what it means — you'll never touch the terminal again on Sunday.

---

## 3. Install the Claude desktop app — 5 min

This is the app we'll use for the whole build phase. It runs Claude Code in a point-and-click interface — no terminal, no code editor, no command line.

**Download:** **[claude.com/download](https://claude.com/download)**

- **Mac:** download the macOS version, open the .dmg, drag Claude into Applications
- **Windows:** download the Windows installer, run it

Once installed, open the app and sign in with the same Claude account you upgraded to Pro in step 1.

**Confirm it's working:** at the top of the app window, you should see three tabs: **Chat / Cowork / Code**. Click **Code**. If you don't see the Code tab, the app needs an update — go to the app menu and check for updates, then restart it.

---

## 4. Quick smoke test — 3 min

Let's make sure Claude Code actually works on your laptop before Sunday. This catches any permission or sign-in issue while you still have time to fix it.

- Open the Claude desktop app
- Click the **Code** tab
- Paste this exact prompt and hit Enter:

> *Make a new folder on my Desktop called `unlock-test` and put a file called `hello.txt` inside it with the text "ready for sunday".*

- Claude will ask for permission to make file changes — say yes
- Check your Desktop. There should be a new folder called `unlock-test` with `hello.txt` inside

**If this works, you're ready.** If it doesn't, text me by Saturday night. We'll figure it out together before Sunday.

You can delete the test folder after — it's just a sanity check.

---

## 5. Show up with one task in your head — 5 min (can do in the shower)

Show up with one task in your head. Something you do every week, or every other week, that you would happily never do again.

It doesn't have to be impressive. It doesn't have to be AI-shaped. It doesn't have to be work — it can be household admin or something personal you've been dreading. The more annoying it is, the better the lesson works.

If you have a reference file for that task — a sample doc, a template, an email thread — toss it on your laptop. Totally optional, but it gives Claude more to work with.

One task is enough. Don't overthink it.

---

## A note on Claude Pro usage

Claude Pro has a rolling 5-hour usage window that's shared across chat and Claude Code. **Don't burn your quota chatting with Claude on Sunday morning before the workshop.** Save it for the build phase. If you spend an hour chatting with Claude at 8am, you'll have less to work with at 10:30am.

---

## What to bring Sunday

- Your laptop, charged
- Your laptop's charger (you will forget it)
- Whatever you'd normally bring to a Sunday brunch thing. I'll have food and coffee.

## What NOT to stress about

- **You do not need to upload any confidential files.** Ever. I'll show you how to give Claude a paragraph of context instead of a document.
- **You do not need any pre-reading.** Show up curious. We start building immediately.
- **You do not need any coding experience.** Zero. Claude Code is designed so you describe what you want in plain English and it writes the code for you. You will not type a line of code on Sunday. You will type instructions and watch a webapp appear.
- **You do not need to understand Node.js.** You installed it because the webapp needs it under the hood, the same way your car needs an engine you never look at.

## If you hit a wall on setup

Text me. I'd rather fix it tonight than lose the first 10 minutes of Sunday to "hold on, my install isn't working."

Curious about Claude Code before Sunday? The official docs are at **[docs.claude.com/en/docs/claude-code](https://docs.claude.com/en/docs/claude-code)** — but you don't need to read them. Everything you need, we'll cover in the room.

See you Sunday.

— Shubham

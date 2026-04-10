# AI Coding Tools Workshop — Full Curriculum

---

# Module 1: Before You Start

## Welcome to the Workshop

This is a hands-on guide to using AI coding tools *well*. Not a list of features, not a hype reel, and not a debate about whether they're a fad. By the end you should be able to sit down at a project, pick the right tool, and get something real shipped — with the same instincts a senior teammate would bring.

**The honest pitch:** AI tools won't turn a junior into a staff engineer. But used well, they remove the parts of the job that don't deserve your attention — boilerplate, scaffolding, repetitive refactors, finding that one file you read three weeks ago — and give you back the parts that do.

That payoff only shows up if you understand what these tools actually *are*. Which is why we start one layer deeper than most tutorials: with the model itself.

### Who this is for

You don't need to be senior. You don't need a machine learning background. You do need to be writing code for real reasons — fixing bugs, building features, shipping things people use. The workshop assumes you already know a programming language and have used a terminal. Everything else, we'll build.

If you're a tech lead trying to decide what to put in your team's hands, the Tool Deep Dives module is the one to bookmark. If you're skeptical because last year's autocomplete underwhelmed you — fair. The Foundations module is where we'll show you what changed.

**Built for:**

- **Working developers** — Anyone shipping code who wants AI as a teammate, not a toy.
- **New to AI tooling** — No prior experience required. We start from first principles.
- **Tech leads** — Folks who need to evaluate Claude Code, OpenCode, or Copilot for a team.
- **The skeptical** — You've tried autocomplete, were unimpressed, and want to know if anything has changed.

### What you'll walk away with

Six things, in roughly this order: a working mental model of how the underlying language model behaves, the "agentic loop" that turns a chatbot into something that can edit your codebase, the prompting habits that separate fluent users from frustrated ones, the safety knobs that keep you out of trouble, the extension points (MCP servers, hooks, subagents) that the docs barely mention, and a clear way to choose between tools instead of cargo-culting whatever your timeline recommends.

None of these are theoretical. Every section ends with something you can try in the next ten minutes.

- **A mental model** — How LLMs and agents actually work — no magic, no jargon.
- **Hands-on fluency** — Three tools, deeply: Claude Code, OpenCode, Copilot.
- **Better prompts** — Stop describing keystrokes. Start describing destinations.
- **Safer defaults** — Permissions, verification, and the habits that prevent disasters.
- **Extensibility** — MCP servers, hooks, subagents — the layer most people skip.
- **A way to choose** — Match the tool to where you already work, not the other way around.

### How to use this workshop

The lessons are designed to be read top to bottom. Each one assumes the one before it. You *can* jump around — nothing will break — but the early lessons install the vocabulary the later ones rely on.

The right column is not decoration. It's a second channel: animations, comparisons, terminal recordings. When the words on the left feel abstract, the visuals on the right are usually doing the heavy lifting. Pause and look at them.

And please — open a terminal while you read. Install one tool. Run it on a real project, even a throwaway one. The single biggest predictor of getting value from this workshop is whether you actually touch the tools as you go.

**How to use this workshop (steps):**

1. **Read top to bottom** — Each lesson builds on the last. Skipping ahead skips the why.
2. **Watch the right column** — Visuals on the right reinforce — and sometimes contradict — the words on the left.
3. **Try things as you go** — Open a terminal. Install one tool. Break it on purpose. Theory sticks when you touch it.
4. **Come back to Reference** — The last module is a cheatsheet. You'll use it more than the lessons.

### One small pact before we start

The most common failure mode with AI coding tools isn't that they're bad. It's that people use them like a faster version of Stack Overflow: paste a snippet, copy a snippet, distrust everything, declare it overhyped after a week.

This workshop asks for one thing: while you're here, treat the tool like a **junior teammate**, not a search engine. Brief it. Let it work. Read its diff. Verify the result. If it makes a mistake, correct it the way you'd correct a person — not by giving up and reaching for the keyboard.

Do that, and the rest of the workshop will land. With that out of the way: let's talk about what an LLM actually is.

**The trap vs. The shift:**

- **The trap** — Treating AI tools like a faster autocomplete. Pasting snippets back and forth, not trusting anything, then declaring it overhyped after a week.
- **The shift** — Treating AI tools like a junior teammate. Briefing them, letting them work, verifying the result. Reaching for them by reflex when a task is well-defined.

*The whole workshop is about closing the gap between these two modes.*

---

## Grown, Not Crafted

The most important thing to understand about modern AI is that nobody sat down and wrote the logic that makes it work. Unlike traditional software, where a developer writes explicit rules and control flow, an AI model is produced by a mathematical optimisation process. Engineers design the process and the structure, but the actual intelligence emerges from trillions of automated adjustments.

Think of a **bonsai**. A bonsai artist doesn't carve a tree from a block of wood. They plant a seed, control the soil and the light, and prune the branches that grow the wrong way. The final shape is theirs — but every cell of the tree was grown by the tree itself. Hold this image in your head. We'll come back to it.

### Everything starts as numbers

Before an AI can do anything with text, it needs to convert words into numbers. Each word (or word fragment, called a "token") gets mapped to a numerical representation. So a phrase like "Once upon a time" becomes a sequence of numbers that the model can do arithmetic on. This is the input, and everything the model does from here is pure maths.

### Billions of adjustable dials

The model itself is essentially a massive collection of numbers, called weights, stored in slots called parameters. A frontier model today has anywhere from hundreds of billions to (depending on whose numbers you trust) low trillions of them. At the start of training, they're effectively random. Each one is like an unlabelled dial on an impossibly large mixing desk: individually meaningless, but collectively they determine everything the model can do.

### Architecture: the wiring diagram

The architecture defines how inputs get combined with those weights. It's the fixed set of mathematical operations (multiply this, add that, zero out negatives, repeat) that transforms an input sequence into an output prediction. Think of it as the circuit board: engineers design the wiring, but the signal that flows through it is entirely determined by the weights. The architecture is large and repetitive. Modern models stack over a hundred near-identical layers, each containing "attention heads" that allow different parts of the input to influence each other.

### Gradient descent: learning by correction

Here's where the magic happens. The model makes a prediction, say, what letter comes next in "Once upon a ti." Initially it's random garbage. But because of how the architecture is designed, engineers can calculate exactly how much each individual weight contributed to the wrong answer. That calculation is called the gradient. Then every single weight gets nudged slightly in the direction that would have made the answer less wrong. This is gradient descent: billions of tiny corrections, repeated across trillions of words, over weeks or months of compute. No human ever looks at the numbers. The whole thing is automated.

Remember the bonsai? Gradient descent is the pruning shears. Billions of tiny snips, each one guided by where the branch is growing wrong. No artist could place the cuts by hand. The shape emerges from the rule that governs them.

### What comes out: the base model

After training, you have a large language model, a specific configuration of trillions of weights that, when you feed text in and run the maths, produces surprisingly coherent continuations. Feed it "the capital of France is" and it'll predict "Paris." Feed it the opening of a story and it'll continue the narrative. This is the base model. It can predict text, but it hasn't been taught to be helpful yet.

### Fine-tuning: from predictor to assistant

To turn a base model into something like ChatGPT, engineers run another round of gradient descent, this time on examples formatted as conversations. "User: What is X? Assistant: X is Y." The model already knows most of these facts from pre-training. The point of this phase is to teach it the role: respond helpfully, don't be rude, follow instructions. This is also where safety training happens: reinforcing corporate-appropriate behaviour using human ratings (or increasingly, ratings from other AIs).

### The DNA problem

Here's the uncomfortable part. After all that training, nobody understands why the resulting model works. The weights aren't secret. You could inspect every single one. Reading them is like opening a compiled binary in a hex editor: every byte is right there, none of it tells you what the program does. Biologists know far more about how DNA becomes a trait than AI researchers know about how a weight becomes a behaviour, and biologists have had decades more practice.

This is also why you can't look at the bonsai and predict where the next branch will grow. The shape so far is visible. The mechanism that produced it isn't.

### Prediction forces world-modelling

You might assume that a model trained only to predict text can only parrot back what it's seen. That's wrong. Consider a medical report: "Following injection of 0.3mg epinephrine, the patient..." The doctor just wrote what happened. To predict what the doctor wrote, the model has to learn how epinephrine actually interacts with a human body — heart rate, blood pressure, airway dilation, the works. Prediction at scale forces the model to build internal representations of reality, not just language patterns. This is likely why LLMs sometimes outperform doctors at diagnosis: they've implicitly learned disease mechanics from millions of case descriptions.

### Reasoning models: thinking out loud

Beyond pure prediction, modern training also uses "chain-of-thought": the model gets multiple attempts at a problem (say, a maths question), thinking out loud in each one. Whichever attempt reaches the right answer has its reasoning reinforced by gradient descent. This pushes models toward strategies no human ever taught them, and potentially toward thoughts no human has had. The model isn't reciting a textbook. It's finding its own path.

### Alien minds

LLMs are not just "text in, text out." They're genuinely different cognitive architectures. Here's a concrete example: in transformer models, every internal computation has to be anchored to a specific token position. Researchers found that in some models, the period at the end of a sentence does critical work. It's where the model "collects its thoughts" about the whole sentence. Remove the period, and comprehension measurably drops. Human brains don't work like this at all.

The internal architecture of a model is as foreign to you as assembly is to a JavaScript developer, even though both produce the same observable behaviour. Training a model to produce human-sounding language doesn't make its internals human-like, any more than an actor who perfectly mimics a drunk person is actually drunk.

### The punchline

So what does all this mean for you as an engineer working with AI? These systems are powerful, useful, and increasingly capable, but they are not designed artefacts whose internals we understand. They're grown. Their behaviour emerges from an optimisation process over trillions of data points. When they work well, we often can't explain exactly why. When they fail, we often can't predict exactly how.

**You're a bonsai artist, not a mechanic.** You shape the environment — the prompt, the context, the tools available, the verification steps — and the behaviour that emerges is yours to evaluate, not yours to dictate. Your engineering practices need to account for that. Tests, reviews, guardrails, and humility do most of the work. The rest of this workshop is about how to be a good gardener.

With that out of the way: let's look at the tools you'll actually use.

---

# Module 2: Foundations

## The Tool Landscape

You wouldn't hire a roofer to fix your plumbing. Both are contractors and both are skilled, but the requirements of the job demand the right tools and knowledge.

**AI coding tools work in a similar way.** Three dominate the space, and they share an engine under the hood. The difference isn't capability. It's where you already spend your time — terminal, IDE, or somewhere in between.

Think of this lesson as three overlapping paths up the same mountain. Each path gets you to the top. You just need to understand enough to choose the right path for you.

### Claude Code

That interface on the right? That's *everything*. No GUI. No editor plugin. You type `claude` in any project directory and start talking. It reads `src/auth.ts`, edits it, runs `npm test`, and verifies the output — all without leaving the shell.

Claude-only models mean the deepest Anthropic integration. If your terminal is already open in another pane right now, this is the contractor who shows up speaking your language.

### OpenCode: The open alternative

What if you want the agentic loop but refuse to be locked to one provider?

Same terminal-native approach, but the key difference jumps out: **75+ model providers**. Bring your own API keys, run local models, own every byte of data. The agentic capabilities — file editing, shell commands, tool use — are identical to Claude Code's.

OpenCode is fully open source. If your team treats vendor independence like a load-bearing wall, this is the contractor who works with whatever materials you supply.

### GitHub Copilot: The IDE native

**Copilot doesn't ask you to leave your editor. It moves in.**

Inline completions appear as you type. The Chat panel handles bigger requests. Agent mode gives it the same agentic loop — reading files, running commands, verifying changes — right inside VS Code. Notice the deep GitHub integration: it reads your PRs, issues, and repo context natively.

If you can't remember the last time you opened a standalone terminal, Copilot is the contractor who already has keys to your building.

### Where they converge

Scan the comparison table. The checkmarks are nearly identical — MCP servers, agentic mode, custom instructions. All three tools have them. The overlap is large and growing every month.

So what actually separates them? Two rows: **Interface** and **Models**. Where the tool lives and what ecosystem it plugs into. Everything else is converging fast.

This is why "which tool is best?" is the wrong question. The right question is: where do you already work?

**Side-by-Side Comparison:**

|  | Claude Code | OpenCode | Copilot |
|---|---|---|---|
| Interface | Terminal / CLI | TUI / CLI | IDE-native |
| Models | Claude only | 75+ providers | Multi-model |
| Agentic Mode | Yes | Yes | Yes |
| MCP Servers | Yes | Yes | Yes |
| Inline Completions | No | No | Yes |
| Open Source | No | Yes | No |
| GitHub Integration | Partial | Partial | Yes |

**Shared Capabilities:**
- MCP Servers — Extend with external tools
- Agentic Mode — Read, edit, run, verify
- Custom Instructions — Project-level rules
- Code Review — Analyze diffs and PRs
- Context Management — Control what the AI sees
- Session Persistence — Resume past conversations

### The real tradeoff

A terminal developer forced into an IDE is a plumber handed a roofing nail gun. They'll figure it out — but the friction compounds. Not in minutes. In weeks of slower output and quiet frustration.

The left side shows that mismatch. The right side shows the alternative: the tool disappears into your flow, and you think about the problem instead of the interface.

**The right tool is the one you forget you're using.**

> **Wrong match:** Picking a tool that fights your workflow. Terminal user forced into an IDE. IDE lover stuck in a TUI. Friction compounds into frustration.

> **Right match:** Picking for where you actually spend your time. The tool disappears into your flow. You think about the problem, not the tool.

### Choosing your stack

Start with one question: where do you already spend your time — terminal or IDE? That single answer narrows the field to two tools or one.

Then layer. Most productive developers use **two or more tools** together: Copilot for inline completions while coding, Claude Code for complex multi-file tasks from the terminal. You don't hire one contractor for an entire renovation. You hire the right ones for each job.

You don't choose one forever. You choose where to start this week.

**Decision Framework:**
1. **Where do you code?** — Terminal, IDE, or both?
2. **What ecosystem?** — Locked in, open source, or flexible?
3. **Combine for coverage** — Most devs use 2+ tools together.

### Code-along: install and first run

Reading about a tool you haven't touched is a recipe for vague intuitions. Stop here for ten minutes and run the exercise on the right in a real project. The rest of the workshop will land much harder once you've seen the agent actually read your own files.

We're using Claude Code as the example because the install is a single command, but the same shape works for OpenCode (`npm i -g opencode-ai`) or Copilot (install the VS Code extension). Pick whichever one matches where you already spend your time.

One rule: ask a question about *your* codebase, not a generic "hello." The whole point is to feel the moment when the agent reads a file you wrote and tells you something true about it.

**Exercise: Install & first run** (~10 minutes)
Needs: A terminal and a real project (anything with code)

1. Install Claude Code globally with npm.
   ```
   npm install -g @anthropic-ai/claude-code
   ```
2. Open your project and start the agent.
   ```
   cd ~/your-project
   claude
   ```
3. Sign in when prompted (browser opens to authenticate).
4. Ask one open question — no pressure to be clever.
   ```
   > how does the auth flow work in this codebase?
   ```

**Checkpoint:** Claude reads several real files in your project and writes a coherent paragraph about how auth actually works. Not a generic explanation — a project-specific one with file paths.

**Recovery:** Auth fails: re-run the login command claude prints in the terminal. No files referenced: try a more specific question that names a folder, e.g. 'how does src/auth/ work?'

---

## How AI Coding Tools Work

The terminal on the right is fixing a bug. No copy-paste, no switching windows. It reads the error, finds the file, edits the code, and runs the tests — all in one sequence. You didn't touch the keyboard after the first prompt.

**That's the shift.** You stop being an operator and start being a delegator. Like handing your laptop to a senior developer and describing the problem instead of dictating keystrokes.

This lesson shows you what happens inside that handoff.

### The mental shift

Imagine two ways of getting help. In the first, you text an expert: "How do I fix this auth bug?" They text back advice. You do the typing. In the second, you hand them your laptop. They browse your files, open your terminal, and fix it themselves — checking with you before anything risky.

The animation shows that transition from advice to action. A chatbot is the text message. An AI coding tool is the laptop handoff.

Once you internalize this, you'll never write a prompt the same way again.

### The agentic loop

Every AI coding tool — Claude Code, OpenCode, Copilot — runs the same pattern under the hood. You wouldn't dictate keystrokes to a senior developer. You'd describe the problem and let them drive.

That's what an **agent** is: software that perceives its environment, makes decisions, and takes action. Not generating text for you to paste. Actually doing things in your codebase, the way a pair programmer would.

The agentic loop runs *on top of* the LLM you met in "Grown, Not Crafted." The model is the brain; the loop is the body. The brain decides what to do next; the body reads files, runs commands, sees the output. Without the loop, the brain just talks. Without the brain, the body has no idea what to reach for.

The next four sections break down exactly what happens inside that loop.

### Phase 1: Read

Think of this as the agent's **eyes**. Before touching anything, it reads `src/auth.ts`, greps for related imports, checks `git log`, pulls in the error message. It's building a mental model of what exists before making a single change.

A surgeon doesn't cut before looking at the scan. Skip this phase and the agent hallucinates — confidently editing files it hasn't read.

That's why context management (the next lesson) matters more than anything else you'll learn here.

### Phase 2: Think

What needs to change? What's the safest path? Are there edge cases the tests don't cover?

This is the agent's **memory** at work — connecting dots between the error message, source code, and expected behavior to form a plan. The reasoning step is invisible in the UI, but it's where the model spends most of its tokens.

Better input context means better reasoning. Feed it noise, get a noise plan back.

### Phase 3: Act

**This is the step that separates an agent from a chatbot.**

The agent has **hands** now. It edits `src/auth.ts:45`, runs `npm test`, creates a branch. It modifies your codebase directly instead of suggesting what you should change. Every action gets logged — you'll learn to control which ones need your approval in the Permissions lesson.

A chatbot writes you a letter. An agent picks up the wrench.

### Phase 4: Verify

Did the fix actually work? The agent doesn't assume — it checks.

It runs the test suite, reads the output, compares against expectations. If tests fail, it loops back to Read with the new error — rethinks, tries a different approach, verifies again. This is the agent's **ears**, listening to the outside world for confirmation.

A chatbot gives you one shot. An agent iterates until the tests pass.

### The full cycle

Read, Think, Act, Verify — then repeat. Sound familiar?

This is exactly what *you* do when you debug: read the error, reason about the cause, make a change, test it. The agent runs the same loop — just faster and without losing focus between steps. It doesn't check Slack mid-debug.

Every AI coding tool is this loop with different packaging around it. Once you see the pattern, you see it everywhere.

### Built-in tools: the five senses

An agent without tools is a brain in a jar. These five built-in tools are its senses: **Read** (eyes on your files), **Search** (memory across the codebase), **Edit** (hands to change code), **Bash** (voice to run commands), and **Web** (ears to the outside world).

The agent picks which senses to chain based on your request. Ask it to "fix the failing test in `auth.test.ts`" and it might use all five in a single loop.

These are just the starting set. MCP servers let you add databases, APIs, and custom tooling — but that's a later lesson.

### Same loop, three interfaces

Three cards, three homes, one engine.

**Claude Code** — your terminal. Type natural language, the agent acts in your project directory. **OpenCode** — beautiful TUI, open source, any LLM provider. **Copilot** — lives inside VS Code with Chat and Agent modes. The interface changes. The Read-Think-Act-Verify engine underneath does not.

Choosing between them is a topic for the Tool Landscape lesson. Here, just notice the shared skeleton.

### Why this changes your prompts

Here's the payoff. Stop asking "write me a function." Start asking "fix the failing test in `auth.test.ts`."

When you understand the loop, you give the agent a *goal* instead of a script. It figures out which files to read, what to change, and how to verify — because that's what the loop is built to do. You describe the destination; the senior dev picks the route.

The rest of this workshop teaches you to feed the loop better context, set the right permissions, and write prompts that let the agent do its best work.

### Code-along: watch the loop run

Reading about Read, Think, Act, Verify is one thing. Watching it happen in your own terminal is another. The exercise on the right takes about twelve minutes and uses a deliberately broken test as the seed.

The trick is to start in **plan mode**. Plan mode is read-only: the agent can look at files and propose a fix, but cannot edit. You get to see Phase 1 (Read) and Phase 2 (Think) without any code changing. When you approve the plan, you switch to default mode and watch Phase 3 (Act) and Phase 4 (Verify) play out.

If the first attempt fails, don't intervene. Watch the agent loop back to Read with the new error. This is the moment where the loop becomes obvious — and where most people stop being surprised by what these tools can do.

**Exercise: Watch the loop run** (~12 minutes)
Needs: Claude Code (or OpenCode), a project with a failing test

1. Pick a small failing test, or create one by breaking a single line in a passing test.
2. Start the agent in plan mode so you can see the reasoning before any edits land.
   ```
   > /plan
   > the test in src/auth/auth.test.ts is failing — investigate and propose a fix
   ```
3. Read the plan. Notice how it cites file paths and the actual error message — that's Phase 1 (Read) and Phase 2 (Think).
4. Approve the plan and switch back to default mode. Watch Phase 3 (Act): the agent edits, runs the test, reports the result.
5. If the test still fails, watch it loop back: Read, Think, Act, Verify, but with new information each pass.

**Checkpoint:** The test goes green, and you can point to the moment in the transcript where each of the four phases happened. Bonus: count how many full loops it took.

**Recovery:** Agent edits straight to the file without showing a plan: you're probably not in plan mode. Type /plan first. Agent can't find the test: name the file path explicitly in the prompt.

---

## Understanding Context

Picture an exam room. You get a desk. Every reference sheet, every cheat sheet, every scrap of notes you bring has to fit on that desk. Pile on too much and sheets start sliding off the edge. Once they fall, you can't retrieve them mid-exam.

**That desk is how AI coding tools work.** Everything the model knows — your files, your conversation, your instructions — has to fit in a fixed context window. Not prompt engineering, not tool selection. Context management is the single most important skill you can develop.

It's also the soil the bonsai from lesson 2 grows in. The model is fixed; the context is the only thing about it that you actually control. What you put in decides what grows out. When the desk is organized, the AI is brilliant. When it overflows, the AI falls apart — silently.

### The desk in action

Click "Add a large file." The percentage climbs. Files, conversation history, tool definitions, system instructions — all of it sits on the same surface. The desk has a fixed size. When you pile on more, older items get pushed off the edge without warning.

Now click "Compact." That's `/compact` summarizing your conversation to reclaim space. Notice something unsettling: the AI never says "I forgot." It just gives worse answers.

Context eviction isn't forgetting. It's amnesia. The AI doesn't get fuzzy — it sharp-cuts, like a coworker who blinked and forgot the last meeting entirely.

### What fills the desk

Not everything costs the same. Small configs and short prompts are cheap. A 2,000-line source file is expensive. But the sneakiest cost? **Conversation length.**

Each exchange adds your message *and* the AI's response. Twenty back-and-forth exchanges can consume more context than the code you're working on. You're filling the desk with chitchat instead of reference sheets.

The "Full Test Output" card is the trap nobody expects — a failing test suite dumps thousands of lines into context, shoving your instructions off the edge.

**Context Costs:**
- Small Config File — Cheap
- Short Prompt — Cheap
- Grep Results — Cheap
- 2,000-Line File — Expensive
- Full Test Output — Very expensive
- 20 Exchanges — Compounds

### When context breaks

What happens when the agent can't see your original instructions anymore?

The left side shows it: the AI forgets rules you gave three messages ago, repeats work it already did, gives generic responses that ignore your project's conventions in `.eslintrc` or `CLAUDE.md`. You've written a beautiful, detailed prompt — and mailed it to the wrong address, because the context holding it has been evicted.

The fix is almost always the same: **start a new session.** A fresh desk with clear instructions outperforms a long, cluttered conversation every time. It feels wasteful. It isn't.

> **Exhausted session:** Forgets earlier instructions. Repeats work already done. Responses become generic and vague. The AI feels broken.

> **Fresh session:** Follows your patterns precisely. Matches project conventions. Gives specific, grounded responses. The AI feels sharp.

### Four strategies

This is the playbook that separates productive users from frustrated ones.

New task? New session — don't carry baggage from the last exam into this one. Quality degrading mid-task? Run `/compact` to summarize and reclaim space. Need to explore a large codebase? Spawn a subagent — it gets its own desk and reports back a summary, keeping your main desk clean.

The fourth strategy is the most underused: put rules in `CLAUDE.md` or `.github/copilot-instructions.md`. These files load fresh every session. They're the reference sheets bolted to the desk — context that never slides off.

**Management Strategies:**
1. **Start fresh between tasks** — New task, new session. Don't carry baggage.
2. **Compact when degrading** — Use /compact to summarize and reclaim space.
3. **Send research to subagents** — Offload exploration to keep your main session clean.
4. **Put rules on the wall** — CLAUDE.md and instruction files survive every session.

### The rules

Four cards, four non-negotiables.

A great prompt in an exhausted session loses to a mediocre prompt in a fresh one. Treat context like money — every file read, every tool call, every exchange has a cost. Subagents give you parallel desks at no cost to your main session. And instruction files survive everything: when context resets, your rules don't.

Start building your `CLAUDE.md` today. It's the highest-leverage file in your project — the one reference sheet that's always on the desk.

**Key Rules:**
- Context Is #1 Skill — Everything else follows from this
- Manage Like Money — Every token has a cost
- Subagents = Free Desks — Parallel context at no cost
- Instruction Files Survive — Rules persist across sessions

---

## Permissions & Safety

**An AI coding tool can run any shell command on your machine.**

That sentence should sit with you for a moment. Every tool gives you a permission dial. Learning to set it correctly is the difference between a productive assistant and an incident report. Think of it like hiring a contractor: you wouldn't hand them the master key on day one.

This lesson teaches you to build trust the same way — gradually, with gates.

### Real damage, real fast

A team shipped a fix on Friday. The agent ran `git push --force` to main because no one had configured permission gates. They spent Saturday restoring from backup.

The right side shows the same tool with guardrails: checkpoints before destructive actions, review gates on shell commands, scoped permissions per tool. Same power, every mistake recoverable.

None of those developers were careless. The tool did exactly what it was *allowed* to do. The default is "yes" unless you say otherwise.

> **No guardrails:** Wrong directory rm -rf. Silent force-push to main. Dropped a production table. One bad command, no confirmation step.

> **With guardrails:** Checkpoints before destructive actions. Review gates on shell commands. Scoped permissions per tool. Mistakes become recoverable.

### The permission spectrum

Click each permission level. The spectrum isn't good-to-bad — it's a trust dial. Plan Mode is read-only: the AI explains what it *would* do but touches nothing. Default Mode asks before every edit and command. Auto modes let the AI decide what needs approval — risky actions still get flagged.

Notice how the same `npm run build` behaves differently at each level. That's the control surface you're learning to operate.

Day 1 you watch the contractor work. Week 2 they work independently but check before knocking down walls. Month 3 they have keys — but know which rooms are off-limits.

### Building trust gradually

Would you give a new hire `sudo` access on day one?

Day 1: Plan Mode — watch what the AI would do, learn its patterns and blind spots. Day 3: Default Mode — approve each action, but notice how rarely you actually reject. Week 3: Auto Mode — the classifier handles routine actions, you review only what gets flagged. You're not removing guardrails. You're moving them outward as trust earns it.

The permission level you land on isn't permanent. Ratchet up for familiar repos, dial back for unfamiliar codebases.

**Building Trust:**
1. **Day 1 — Plan Mode** — Read only. Watch what the AI would do.
2. **Day 3 — Default Mode** — Approve each edit and command individually.
3. **Week 3 — Auto Mode** — Let the classifier decide. Review only flagged actions.

### How each tool handles it

Same concept, very different controls across the three panels.

Claude Code: press Shift+Tab to cycle through six modes — Plan, Default, Accept Edits, Auto, Full Auto, and custom profiles. OpenCode: per-tool rules declared in config — allow file reads, ask before edits, deny dangerous commands. Copilot: IDE acceptance model — Tab for inline suggestions, explicit Apply for chat changes, PR review as a second gate.

Different surfaces, same principle: you set the trust boundary, the tool enforces it. The contractor works in your house, but the alarm system is yours to configure.

**Tool-specific controls:**

- **Claude Code — 6 Permission Modes:** Shift+Tab cycles through Plan, Default, Accept Edits, Auto, Full Auto, and custom profiles. Granular control per session.
- **OpenCode — Allow / Ask / Deny:** Per-tool permission rules. Allow file reads, ask before edits, deny dangerous commands. Fine-grained and declarative.
- **Copilot — IDE + PR Gates:** Accept or reject inline suggestions. Chat changes require explicit apply. PR review adds a second layer before merge.

### Rules to code by

Four non-negotiables.

Start restrictive and open up — it's easy to grant permission, hard to undo damage. Always run `git commit` before starting a task so you have a clean state to return to. File edits are reversible, but shell commands often aren't — that's why every tool gates commands more strictly than file writes.

Never bypass permissions in production. Full Auto is for local development only. Not "just this once." Not on a Friday afternoon. Not ever.

**Safety Rules:**
- Start Restrictive — Open up as trust builds
- Commit First — Always commit before starting a task
- Edits Are Reversible — File changes can be undone
- Never Bypass in Prod — Full auto is for local dev only

---

# Module 3: Productivity

## Effective Prompting

You wouldn't call a plumber and say "fix the water." You'd say the kitchen sink is dripping when the faucet is closed, it's the pipe under the cabinet, and please don't replace the whole faucet. That's a work order. A good prompt is the same thing.

The vague prompt on the right gives the agent nothing — no file, no symptom, no way to know when the job is done. The specific one is a complete work order. Same task, wildly different outcomes.

Remember from "Grown, Not Crafted": under the hood, the model is predicting text. **Your prompt is the first few words of the text it's predicting.** Make those words count, and the prediction has somewhere specific to go. Make them vague, and you get vague continuations.

Four elements separate the two. Master them and you stop filing incomplete work orders for good.

### The CICV work order

Hover over the blue underline — that's **Context**, the "where" on the work order. Green is **Intent**, the "what." Orange is **Constraints**, the "don't touch." Purple is **Verification**, the "how I'll check your work."

Click any legend pill to isolate one element and dim the rest. Below the prompt, the gray dashed box shows what the same task looks like without any of these signals. That's the "fix the water" version.

A one-line typo fix might only need Intent. A multi-file refactor needs all four. The bigger the job, the more complete the work order.

### A flashlight in a dark warehouse

Without context, the agent walks into your codebase like a dark warehouse — groping along every shelf, reading labels it doesn't need. The prompt on the right hands it a flashlight: `src/auth/`, token refresh, `@src/auth/refresh.ts`. Three details that illuminate exactly the shelf it needs.

Every file you name is a file the agent doesn't waste tokens discovering on its own. Use `@`-mentions in tools that support them, or just spell the path out.

Precise context also prevents a sneaky failure mode: the agent finding a similar-looking function in the wrong module and "fixing" code that was never broken. Point the flashlight. Don't hand over the whole warehouse map.

> **Scoping Context**
> ```
> Check the auth flow in src/auth/,
> especially token refresh.
>
> Use @src/auth/refresh.ts for reference.
> ```

### Guardrails, not a cage

Think of constraints as guardrails on a mountain road. They don't slow you down — they keep you from going over the edge. The first two lines in this prompt are intent: reproduce the timeout, fix the root cause. The last three are guardrails: no new deps, follow `orders.ts` patterns, keep the public API stable.

Together they form a corridor wide enough for the agent to choose its own approach, narrow enough to stop it from pulling in a new library when your codebase already has bcrypt wired up.

Without guardrails, the agent optimizes for "working code." With them, it optimizes for code that belongs in *your* project. One element remains — the one that closes the loop.

> **Intent + Constraints**
> ```
> Reproduce the session timeout failure
> and fix the root cause.
>
> Don't add new dependencies.
> Follow the existing pattern in orders.ts.
> Keep the public API unchanged.
> ```

### The difference between "I think I fixed it" and "here's proof"

Without verification, you are the only feedback loop. Every line reviewed by eye. Every edge case caught by gut feeling. That's the "I think I fixed it" side on the right.

Add five words — "Run the tests after" — and the agent runs `npm test`, sees failures, and iterates on its own before you ever open the diff. That's proof, not hope.

Verification is the highest-leverage element on any work order. The next lesson builds an entire workflow around it: Explore, Plan, Build.

### When to put the tool down

The flip side of every productivity guide is the part nobody likes to write: the tool isn't always the right answer. A great work order is wasted on the wrong job. Four cases where the right move is to close the chat and write it yourself.

**Security-critical paths.** Auth, crypto, payment, anything where a subtle bug becomes a vulnerability. The AI is excellent at fluent code; fluent code is exactly the kind of code that hides plausible-sounding bugs from a tired reviewer. If a human wouldn't merge it without three other humans looking, don't let an agent decide it on its own.

**Novel algorithms with no training data.** Research code, domain-specific logic, hardware drivers — anywhere the model is guessing instead of recalling. You'll get plausible-looking nonsense, which is harder to debug than obvious nonsense.

**When verification costs more than writing.** If the task is a four-line bash script, the round trip of prompting, reading the diff, and convincing yourself it's correct takes longer than just typing the four lines. Reach for the agent when the task has enough surface area to make the handshake worthwhile.

**Regulated or audited code.** Finance, healthcare, government workloads with traceability or governance requirements may have explicit policies about AI-generated code. If you're shipping at a place like that, check the policy *before* you ship the diff, not after.

None of these are "AI is bad." They're all "know which jobs deserve a human first." The fluent users of these tools are the ones who are quickest to walk away when the situation calls for it.

> **When to put the tool down:**
> - **Security-critical code** — Auth, crypto, payment paths. Anywhere a subtle bug becomes a vulnerability. Humans review first; AI assists, never decides.
> - **Truly novel algorithms** — Research code or domain-specific logic the model has never seen. Without examples in training data, you get plausible-looking nonsense.
> - **Verification > writing time** — A four-line bash script you could write in 30 seconds. Reading the AI version and confirming it carefully takes longer than just typing it.
> - **Regulated / audited code** — Financial, healthcare, government code with traceability requirements. AI-generated code may need extra governance — check your team's policy first.

### Code-along: bad prompt vs good prompt

**Time:** ~10 minutes
**Needs:** Any AI coding tool, a project with at least one TypeScript or Python file

**Steps:**

1. Pick a real (small) bug or task in your project. Write down what success looks like in one sentence.
2. Run the vague version first. Note the time and token count when it finishes.
   ```
   > fix the bug
   ```
3. Reset the session, then run the work-order version of the same task.
   ```
   > /clear
   > In src/orders/cart.ts, the running total drops the
   > tax line when an item is removed. Fix the root cause,
   > add a regression test, and run npm test after.
   ```
4. Compare: number of tool calls, files touched, whether the test passed, and how confident you feel about the diff.

**Checkpoint:** The two transcripts feel different — not just at the answer, but at every step. The work-order version probably touched fewer files and got to a verified result first try.

**Recovery:** Both transcripts look identical: your task may be too small for the difference to show. Try again with a multi-file task. Token counts not visible: most CLIs print them at session end with /cost or /usage.

---

## Explore, Plan, Build

You wouldn't pour concrete before reading the soil report. You wouldn't frame walls without blueprints. Yet developers hand an AI agent a task and say "build it" — skipping the equivalent of the site survey and the architect.

**The most expensive code is code that solves the wrong problem fast.** "Build first" means 200 lines against the wrong library, in the wrong folder, ignoring every convention your team follows. "Plan first" means two minutes of reading before a single character is written.

AI coding is construction, not improvisation. Three phases keep it that way.

### Read the soil report

Click **Explore**. The terminal runs `grep -r "authenticate" src/` — three hits across three files. Then it reads `src/auth/login.ts` and immediately spots the bug: comparing a hash to plaintext.

No edits happened. This is the site survey. The agent is in read-only mode, building a map of your code — where the auth logic lives, how tests are structured, what the actual problem is. A contractor who skips this step digs the foundation in the wrong place.

With the survey done, the agent can draw blueprints instead of guessing. Click **Plan** to see them.

> **Phase 1: Explore**
> 1. Switch to Plan mode — read-only, no edits
> 2. Read relevant files — understand the landscape
> 3. Understand existing patterns — naming, structure, style
> 4. Report back — summarize what you found

### Blueprints are cheap. Demolition is not.

The prompt on the right asks the agent to propose a plan before writing code — which files change, what the approach is, whether there are dependency implications. Four numbered steps, each tied to a real file.

You can scan this in ten seconds and catch a wrong turn. Crossing out a line on a blueprint costs nothing. Tearing down a half-built wall costs everything.

Once the blueprint looks right, you give the green light. Now — and only now — the agent has earned the right to pick up a hammer.

> **Phase 2: Plan**
> ```
> Based on what you just read,
> what files need to change to add
> Google OAuth?
>
> Propose a plan before writing any code.
> ```

### Build to spec, not from scratch

Three instructions, one sentence each: implement, write tests, run the suite. The agent already surveyed the site and has approved blueprints — it doesn't need hand-holding.

Click **Build** on the interactive panel to see the result. Three green checkmarks. `npm test` passes: 3/3. The fix uses `bcrypt.compare()` because the agent discovered that pattern during Explore — not because you told it to.

No wrong library. No wrong directory. No surprises. When the contractor reads the plans, the building passes inspection.

> **Phase 3: Build**
> ```
> Implement the OAuth flow from your plan.
> Write tests for the callback handler.
> Run the suite after.
> ```

### One rhythm, every project

Explore, Plan, Build, Commit. The four-step cycle on the right ends with a commit that is clean, tested, and consistent with the rest of your codebase. Use it for anything bigger than a one-line fix.

Over time this rhythm becomes second nature. You stop treating the agent as an improvising jazz musician and start treating it as a general contractor who reads the soil report before pouring concrete.

But even the best blueprints burn out if context fills up. The next lesson teaches you how to keep sessions sharp when the work order gets long.

> **The Full Cycle**
> 1. Explore — read the codebase
> 2. Plan — propose an approach
> 3. Build — implement with reviewed plan
> 4. Commit — ship it

### Code-along: the three-phase fix

**Time:** ~15 minutes
**Needs:** Claude Code or OpenCode, a real bug or small feature in your project

**Steps:**

1. Pick a bug or feature that touches at least two files. Don't pick something trivial — the value of the workflow shows up at medium complexity.
2. Switch to plan mode. The agent can read but not edit.
   ```
   > /plan
   ```
3. Brief the explore phase — give it the symptom and the rough area, but no solution.
   ```
   > the cart total is wrong when an item is removed.
   > investigate src/orders/ and propose a fix
   ```
4. Read the plan critically. Push back on anything that smells wrong. Ask for an alternative if needed.
5. Once the plan is good, leave plan mode and tell the agent to build it.
   ```
   > /default
   > implement the plan you just proposed.
   > add a regression test and run npm test after.
   ```

**Checkpoint:** The diff matches the plan you reviewed — no surprises, no extra files touched, tests green. You should feel that you reviewed five lines of plan instead of fifty lines of code.

**Recovery:** Plan is too vague: ask the agent to list specific file paths and the exact changes. Plan is wrong: don't implement it — say "that would break X, propose a different approach" and re-plan.

---

## Context Management

Imagine packing for a flight with a strict weight limit. Every file the agent reads, every tool call, every abandoned approach goes into that suitcase. When it's full, something gets left on the curb — your conventions, your constraints, your earlier decisions.

**A bloated context window doesn't crash. It forgets.** The agent starts re-reading files it already saw, suggesting approaches you already rejected, misspelling types it used correctly ten minutes ago.

### Your entire wardrobe vs. three outfits

Toggle to **Bloated Context**. Six items stacked in red — full file dumps, redundant re-reads, a 40-turn conversation. That's packing your entire wardrobe. The usage bar reads 100% full, with older items being thrown out at the airport.

Now toggle to **Lean Context**. Same trip, four items, all green. Targeted `grep` results instead of `cat` dumps, compacted conversation, 21% used. That's packing exactly three outfits. The tactic pills at the bottom are the four habits that got you here.

When output quality drops mid-session, you don't have a model problem. You have a luggage problem.

### Vacuum-seal or start with a fresh bag

`/compact` is vacuum-sealing: it summarizes everything so far and frees space without losing progress. Claude Code gives you `/clear` and `/compact`. OpenCode uses `/new`. Copilot resets by starting a new chat thread.

Full clear is a fresh empty bag — use it when switching between unrelated tasks. One task per session, always. `/compact` is for mid-task, when the bag is getting heavy but you're not done yet.

But what about tasks that require reading dozens of files just to understand the problem? You can't fit a library into a carry-on. That's where subagents come in.

> **Tool comparison:**
>
> | Tool | Command | Notes |
> |------|---------|-------|
> | Claude Code | `/clear  /compact` | /clear resets the session entirely. /compact summarizes and compresses context. |
> | OpenCode | `/new  /clear` | /new or /clear starts a fresh session with clean context. |
> | GitHub Copilot | *(new thread)* | Start a new chat thread when context gets stale. Each thread is a separate session. |

### Send a research assistant to the library

"Research inline" means dumping 50 files into your suitcase and wondering why the agent can't find your socks anymore. Every response after the research gets worse because the window is stuffed with files you no longer need.

A subagent is a research assistant who works in a separate room. It reads whatever it needs — the entire shelf if necessary — distills the findings, and slides a one-page brief under your door. Your main session never sees the noise.

The brief goes into your bag. The hundred source files don't. One last tactic makes every session smarter before it even starts.

### The luggage has a price tag

Every item you put in the suitcase costs money. Tokens are billed in both directions: the prompt you send *and* the response that comes back. Most people only feel this when the monthly bill arrives.

Two cost traps catch nearly everyone. First, **long sessions compound quadratically**: the agent re-sends the entire conversation history on every turn, so a 40-turn chat is dramatically more expensive than four 10-turn chats. Second, **using a frontier model for trivial work**: if the task is "rename this variable across the file," reach for Haiku, not Opus. Save the expensive model for tasks that actually need its reasoning.

`/compact` at 60% used isn't just about quality — it's cheaper than carrying that extra weight on every subsequent turn. Treat token spend like you treat AWS spend: keep an eye on it before the bill is the alarm.

> **What context actually costs:**
> - **Tokens are billed** — Both ways. Every file you load and every word the model writes lands on the invoice.
> - **Long sessions compound** — A 40-turn chat re-sends the whole history each turn. Cost grows quadratically, not linearly.
> - **Cheap model for grunt work** — Use Haiku/Sonnet for refactors and lookups. Save Opus for the hard reasoning.
> - **/compact early** — Compacting at 60% used costs less than letting the window fill to 100% and waste tokens on bloat.

### The employee handbook

Every company has one. Every new hire reads it on day one. It doesn't matter who the hire is or when they start — the handbook is always current and always read first. That's what `CLAUDE.md` is for Claude Code, `AGENTS.md` for OpenCode, and `.github/copilot-instructions.md` for Copilot.

Put your naming conventions, preferred libraries, file structure rules, and common mistakes in that file. The agent reads it at session start and follows it without being asked. Free context that shapes every response before you type a word.

Lean sessions, subagent research, aggressive clearing, and a solid handbook. Context management is the invisible skill that makes everything else in this course work better.

> **Tool comparison:**
>
> | Tool | File | Notes |
> |------|------|-------|
> | Claude Code | `CLAUDE.md` | Loaded automatically every session. Project-level rules, style guides, and conventions. |
> | OpenCode | `AGENTS.md` | Uses AGENTS.md or falls back to CLAUDE.md. Same concept, different file name. |
> | GitHub Copilot | `.github/copilot-instructions.md` | Repository-level instructions loaded into every Copilot chat session. |

---

## Verification-Driven Development

Reading 200 lines of AI-generated code on faith is like signing a contract without reading it. Maybe it's fine. Maybe you just agreed to give away your car.

Remember: the model is grown, not crafted. You can't inspect its reasoning. You can't prove it understood the spec. The only thing you can inspect is the *output*, and the only honest way to inspect output at scale is with executable checks. **Tests are the only way to verify what a grown system actually does.**

Verification flips the entire relationship. Define "correct" up front, and the agent iterates until it gets there. Your job shifts from reading code line-by-line to reviewing a handful of test definitions. The finish line exists before the race starts.

### Define the finish line before you start running

On the left: "Review 200 lines" — reading code on faith, hoping to catch edge cases with tired eyes. On the right: "Review 20 lines of tests" — assertions that define correctness, with the agent iterating until green. Which one would you bet on at 6 PM on a Friday?

Ask the agent to write tests before implementation. The tests become the spec — what the feature does, which edge cases matter, what failure looks like. Once you approve those 20 lines, the agent is free to write whatever implementation satisfies them.

This is the single biggest productivity lever in AI-assisted development. But tests alone have a blind spot.

### Airport security for your code

Think of verification layers as airport security. Tests are the metal detector — they catch the obvious weapons. The linter is the bag scanner — it catches things you didn't think to check. The type checker is the passport control — it verifies your identity matches your ticket. Remove any one layer and something slips through.

Click **"What tests miss"** on the right. Tests still pass. Linter still passes. But `tsc --noEmit` catches it: `src/auth.ts:12` returns a string where a number is expected. A green test suite almost shipped a type mismatch to production.

Each layer catches a different class of threat. Stack them all, and nothing gets on the plane.

### Red, green, done

The prompt on the right asks the agent to write tests for a `RateLimiter` class — 10 requests per minute per user, 429 after the limit, reset after the window. Then: run them (they should fail), and implement until they pass.

Notice what the prompt does *not* say: no data structures, no algorithms, no internal state. It defines behavior, not blueprints. The agent chooses its own approach as long as every assertion holds.

You own the spec. The agent owns the code. That division is the whole philosophy in three words.

> **Tests-First Prompt**
> ```
> Write tests for a RateLimiter class:
> - Allows 10 requests per minute per user
> - Returns 429 after limit exceeded
> - Resets after the window expires
>
> Run the tests (they should fail),
> then implement RateLimiter to make them pass.
> ```

### Three checkpoints, one sentence

Metal detector, bag scanner, passport control, security camera. Tests catch logic errors. Linters catch style drift. Type checkers catch interface mismatches. Screenshots catch UI regressions. Four gates the agent must clear before you ever see the diff.

Add this to the end of any prompt: "After editing, run `npm test`, then `eslint .`, then `tsc --noEmit`." Three commands, one sentence. The agent iterates through all three before it comes back to you.

With stacked verification, the agent stops being a code generator you have to babysit and starts being a collaborator that proves its own output is correct. No more signing contracts on faith.

> **Stacking Verification:**
> - **Tests** — Catch logic errors
> - **Linters** — Catch style issues
> - **Type checkers** — Catch interface mismatches
> - **Screenshots** — Catch UI regressions

---

# Module 4: Tool Deep Dives

## Claude Code Mastery

Claude Code is Anthropic's terminal-first coding agent. No editor plugins, no browser tabs — just your shell and a direct line to Claude.

It reads your project, makes edits, runs commands, and verifies its own work. You describe what you want; it figures out how to get there.

### The agentic loop

Every Claude Code interaction follows the same cycle: **Read -> Think -> Act -> Verify**. Then it loops back.

Failed test? It reads the error, re-analyzes, tries a different fix, and runs the test again. This loop continues until the task succeeds or it asks for help.

Understanding this loop is the key to effective prompting. Give the agent enough context to *read* well, and the rest follows.

### Permission modes

Press **Shift+Tab** to cycle through six permission levels. Start in Default mode — the agent asks before every edit and command.

As trust builds, move to **Accept Edits** for faster iteration. **Auto** mode lets an AI classifier decide what needs approval.

**DontAsk** is for CI pipelines with explicit allow rules. **Bypass** disables all checks — only use it inside disposable containers.

**Permission Modes reference:**

```
Plan        -> Read-only exploration
Default     -> Asks before edits & commands
Accept Edits -> Auto-approves file changes
Auto        -> AI classifier decides
DontAsk     -> Explicit allow rules only (CI)
Bypass      -> No checks (containers only)
```

### CLAUDE.md — project memory

CLAUDE.md is a Markdown file at your project root that Claude reads on every session. It's persistent memory — build commands, style rules, architectural decisions.

Put the stuff you'd tell a new teammate on their first day. What framework? How to run tests? What naming conventions? Claude follows it every time.

You can also have `~/.claude/CLAUDE.md` for global preferences that apply across all projects.

**Example CLAUDE.md:**

```markdown
# Project
Next.js 14 app with Prisma ORM

# Commands
- npm run dev — start dev server
- npm test — run vitest

# Style
- Use camelCase for variables
- Prefer named exports
- Tests go in __tests__/ directories
```

### Subagents for delegation

Claude Code can spawn lightweight subagents for parallel work. **Explore** is fast and read-only — perfect for searching the codebase without burning tokens.

**Plan** subagents do research and analysis. **General** subagents get full tool access for complex subtasks.

This means the main agent can delegate "find all usages of this API" to Explore while it focuses on the actual fix.

**Built-in Subagents:**

- **Explore** — Fast, read-only, Haiku-powered
- **Plan** — Research for planning
- **General** — Full tool access for complex tasks

### Git integration

Claude Code understands git natively. Ask it to commit and it writes semantic commit messages. Ask it to create a PR and it handles the branch, push, and description.

The `/batch` command splits work across parallel git worktrees — multiple tasks running simultaneously, each in its own branch.

Combined with headless mode (`claude -p "task"`), you can script Claude Code into CI pipelines, pre-commit hooks, and automation workflows.

---

## OpenCode Essentials

OpenCode is a fully open-source AI coding agent with a beautiful terminal UI. Same agentic capabilities as the proprietary tools — file editing, shell commands, tool use — but with complete freedom over your model provider.

It works with 75+ providers including Anthropic, OpenAI, Google, and local models via Ollama. Your keys, your models, your data.

### The terminal UI

OpenCode's TUI is designed for developers who want a richer interface than a raw prompt but don't want to leave the terminal.

The main area shows the agent conversation. A bottom input bar takes your prompts. Side indicators show which agent is active and what tools are in use.

It's keyboard-driven, fast, and stays out of your way. Think of it as the best of both worlds between a CLI and a GUI.

### Provider flexibility

OpenCode supports any provider compatible with the AI SDK. Anthropic, OpenAI, Google, Groq, Mistral, local models — switch between them with a config change.

This means you can use Claude for complex tasks, GPT for quick iterations, and a local model when you're offline or want zero data sharing.

No single vendor owns your workflow. If a provider raises prices or degrades quality, you switch — not rewrite.

**Supported Providers:**

- **Anthropic** — Claude models
- **OpenAI** — GPT models
- **Google** — Gemini models
- **Local** — Ollama & LM Studio
- **Zen** — Curated defaults
- **Custom** — Any AI SDK provider

### Agent system

OpenCode has four built-in agents. **Build** is the default — full tool access for making changes. **Plan** is read-only for analysis without risk.

Tag **@general** for multi-step delegation or **@explore** for fast codebase search. Each agent has different permissions and costs.

Pick the lightest agent that can handle the job. Don't use Build for a question that Explore can answer.

**Agent System overview:**

1. **Build** — Default, full tool access
2. **Plan** — Read-only analysis
3. **@general** — Multi-step delegation
4. **@explore** — Fast codebase search

### Zen mode

The hardest part of any multi-provider tool is setup. Zen mode eliminates that friction entirely.

Run `/connect`, sign in, and you get curated, benchmarked model defaults immediately. No API key hunting. No JSON config files. No trial-and-error testing.

You can always override later. Zen mode is the fast path from install to productive.

**Before (Manual config):** Research providers, get API keys, configure JSON, test models.

**After (Zen mode):** /connect, sign in, curated benchmarked models, start coding.

### When to choose OpenCode

Choose OpenCode when vendor independence matters. When you want to own your tools, switch models freely, and never worry about a provider pulling the rug.

It's also the right choice when you need specific model capabilities — a local model for sensitive code, a frontier model for complex reasoning, a fast model for quick edits.

The tradeoff: you manage your own config. The reward: complete control.

**Choose OpenCode When:**

- **Open source matters** — Full source available
- **Model flexibility needed** — Switch providers freely
- **Full control required** — Own your config and data
- **No vendor lock-in** — Bring your own keys

---

## GitHub Copilot Mastery

GitHub Copilot started as inline autocomplete. It's now a full agentic coding platform — from ghost text suggestions to autonomous agents that implement entire issues.

It lives inside your IDE, so there's zero context switching. The AI is woven into every part of the editing experience.

### Inline completions

The foundation of Copilot: gray ghost text that appears as you type. Press **Tab** to accept, **Esc** to dismiss, or keep typing to refine.

**Next Edit Suggestions** go further — Copilot predicts where you'll edit next based on your recent changes and jumps the cursor there.

These completions are fastest when your code has good naming and clear patterns. The model reads your context; clean code generates clean suggestions.

### Chat mode

Open the Chat panel with **Cmd+Shift+I** for longer conversations. Ask questions about code, brainstorm approaches, or get explanations.

Scope your questions for better answers. `@workspace` gives Copilot your entire project context. `#file` focuses on a specific file.

Chat mode is for thinking. Agent mode is for doing. Know when to use each.

### Agent mode

Agent mode gives Copilot the full agentic loop inside VS Code. Describe a goal in natural language and it selects files, makes edits, runs terminal commands, and iterates.

It works across multiple files and can run your build and test commands to verify changes. The iteration loop continues until the task passes or it needs your input.

Start with small, well-scoped tasks. As you build trust, increase the scope.

**Agent Mode Workflow:**

1. Describe the goal — Natural language prompt
2. Agent selects files — Reads relevant context
3. Makes edits autonomously — Across multiple files
4. Runs terminal commands — Build, test, lint
5. Iterates until done — Self-correcting loop

### The coding agent

The coding agent runs asynchronously on GitHub's infrastructure. Assign an issue to **@copilot** and it creates a branch, implements the change, and opens a draft PR.

It works while you sleep. Review the PR like you would from any teammate — approve, request changes, or close it.

Best for well-defined issues with clear acceptance criteria. Vague issues produce vague PRs.

**Before (Manual PR workflow):** Write code, test, create branch, push, open PR.

**After (Coding agent):** Assign issue to @copilot, it creates branch, implements, opens draft PR.

### Spaces and code review

**Spaces** let you curate bundles of context — docs, specs, design files — so Copilot's answers are grounded in your team's actual knowledge, not just the codebase.

**Code review** works like adding a reviewer to a PR. Copilot analyzes the diff, flags issues, suggests improvements, and explains complex changes.

Combined with auto-generated PR summaries and built-in CodeQL security scanning, Copilot covers the full lifecycle from writing code to shipping it.

**Spaces & Code Review features:**

- **Spaces** — Curated context bundles for grounded answers
- **Code Review** — Request review from Copilot like a teammate
- **PR Summaries** — Auto-generated PR descriptions
- **Security** — CodeQL scanning built in

---

# Module 5: Advanced

## Hooks & Automation

Picture an assembly line. Parts move down the belt, and at specific stations, a mechanical arm inspects each one — no matter who's managing the floor, no matter the time of day.

**That's exactly what hooks are.** The agent decides what to build. Hooks are the quality gates bolted to the line itself — your code, running every time, unconditionally.

AI judgment picks the task. Mechanical certainty enforces the rules. That split is the foundation of everything in this lesson.

### The hook lifecycle

Four stations on the assembly line, four moments where your code can intervene. PreToolUse fires before the agent touches anything — the first inspection gate.

PreToolUse and PostToolUse bracket every single tool call. Exit code 2 on PreToolUse rejects the part off the belt entirely. PostToolUse is where you run formatters and linters on whatever just changed.

Stop and Notification cover the gaps between tool calls. Stop fires when the agent finishes responding — ideal for auto-commits. Notification fires when it needs a human decision.

### Auto-formatting: the essential hook

Three lines of JSON. Every file the agent edits gets auto-formatted. The matcher targets Edit and Write; the command runs `npx prettier --write $FILE_PATH`.

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "npx prettier --write $FILE_PATH"
          }
        ]
      }
    ]
  }
}
```

Swap `prettier` for your own formatter mentally. The `$FILE_PATH` variable resolves to whichever file the agent just touched, so the right tool always hits the right target.

Why does this beat a prompt instruction? Because the agent can't forget, skip, or creatively reinterpret a mechanical gate. The inspection arm doesn't have opinions — it just runs.

### Blocking dangerous actions

What if the agent tries to edit your `.env` file? Think of this hook as a bouncer at the door. It checks the ID — the file path — and `.env` gets turned away. So does `package-lock.json` and anything inside `.git/`.

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "echo $FILE_PATH | grep -qE '(\\.env|package-lock\\.json|\\.git/)' && exit 2 || exit 0"
          }
        ]
      }
    ]
  }
}
```

The exit codes are simple: `exit 2` means "blocked," `exit 0` means "you're in." The agent receives a rejection notice and adjusts its plan automatically.

Three lines of config turned a potential disaster into a non-event. A CLAUDE.md instruction can be misinterpreted. An exit code 2 physically prevents the tool call from executing — no negotiation, no edge cases.

### Headless mode: AI in CI

The factory running the night shift. Same quality gates, no foreman on the floor. The command `claude -p "Run tests and fix failures" --allowedTools "Bash,Read,Edit"` runs the agent in your CI pipeline with zero human interaction.

> **Headless Mode**
> Run without a human. CI pipelines, automated migrations, scheduled maintenance. Hooks still fire.
>
> `claude -p "Run tests and fix failures" --allowedTools "Bash,Read,Edit"`

The `--allowedTools` flag restricts which tools the agent can reach. Combine that with your PreToolUse blocking hooks, and you get a tightly scoped agent that cannot wander into dangerous territory.

Every hook you built in this lesson fires identically in headless mode. Formatting, blocking, notifications — the mechanical arms don't care whether a human is watching. That is how you build reliable AI automation.

---

## Project Configuration

Imagine a new hire starting every morning with total amnesia. Package manager? Forgotten. Test command? Gone. Off-limits directories? Never heard of them.

**That's every agent session without configuration.** The "Before" panel shows the repetition tax. The "After" panel shows what one file changes: zero ramp-up, conventions loaded before you type a single prompt.

That file is CLAUDE.md — the employee handbook your agent reads on day one of every session.

### CLAUDE.md: the employee handbook

Every new hire reads the handbook on day one. Always current, always read first. The handbook doesn't care who the hire is — it applies to everyone.

```markdown
# MyApp

## Build & Test
- Package manager: pnpm
- Dev: pnpm dev
- Test: pnpm vitest run
- Lint: pnpm eslint . --fix

## Style Rules
- Functional components only
- Prefer named exports
- Use path aliases (@/...)

## Off-limits
- Never edit migrations/
- Never modify .env.production
```

This example packs build commands, style rules, and off-limits directories into under 20 lines. Notice the boundary at the bottom: `Never edit migrations/`. The agent internalizes that rule before your first prompt lands.

Keep the handbook lean. Every line competes for context window space. Commands and conventions that prevent mistakes belong here; explanatory prose does not.

### Configuration across tools

Three tools, three config files — but the concept is identical. Claude Code reads CLAUDE.md. OpenCode reads AGENTS.md, falling back to CLAUDE.md if none exists. Copilot reads `.github/copilot-instructions.md`.

| Tool | Config File |
|------|-------------|
| **Claude Code** | CLAUDE.md at project root. Scoped rules in .claude/rules/ for file-pattern-specific guidance. |
| **OpenCode** | AGENTS.md at project root. Falls back to CLAUDE.md if no AGENTS.md exists. |
| **GitHub Copilot** | .github/copilot-instructions.md for repo-wide rules. Agent-specific files in .github/agents/. |

That fallback is a free win: a single CLAUDE.md serves two tools with zero extra work. If your team also uses Copilot, add its config under `.github/` — or skip it until someone actually needs it.

Root configs handle the broad strokes. The real leverage comes from scoped rules — department-specific policies for different parts of the codebase.

### The config hierarchy

Think of Russian nesting dolls. The outermost doll is your system config — the broadest defaults. Inside that sits user config, then project, then session. The smallest doll always wins.

**Which File for Which Tool:**

| File | Tool |
|------|------|
| CLAUDE.md | Claude Code |
| AGENTS.md | OpenCode |
| copilot-instructions.md | Copilot |
| .claude/rules/ | Scoped rules |
| opencode.json | OC config |
| .github/agents/ | Copilot agents |

`.claude/rules/tests.md` lives inside the project layer. That scoped rule only fires when the agent touches test files — like a department policy that applies to engineering but not marketing. Same company, different context.

Most teams need exactly one CLAUDE.md and one or two scoped rules. Start there. Add layers only when the root config starts feeling crowded.

### Strategy: less is more

The best CLAUDE.md files are under 200 lines. Step 1: run `/init` to generate a starting point. Step 2: add the human context the agent cannot infer on its own.

**Configuration Strategy:**

1. **Run /init** — to generate a starting point
2. **Add human context** — why decisions were made
3. **Keep under 200 lines** — lean beats comprehensive
4. **Scope detailed rules** — to specific file patterns
5. **Commit the file** — to share with your team

Why the line limit? Every line of CLAUDE.md competes for context window space. A bloated handbook pushes useful conversation history out of the window, making the agent worse at the task you actually care about.

Include the *why* behind decisions — why you chose that ORM, why migrations are off-limits, why the legacy folder uses a different pattern. Then commit the file so every "new hire" benefits from day one.

---

## MCP & External Tools

Your agent can read files and run commands. But your bugs live in Sentry, your data lives in Postgres, and your designs live in Figma. How does the agent reach them?

Think of power adapters for international travel. Your laptop has one plug type. Each country has a different outlet. You don't rewire the laptop — you carry the right adapter.

**MCP is that adapter.** One protocol, many services. Sentry, Postgres, Figma — each gets its own server that translates the agent's requests into API calls and returns structured data.

### The copy-paste tax

Without MCP, you are the middleware. Open Sentry, copy the stack trace, paste it into the agent. Open the DB client, copy query results, paste again. You're a human clipboard shuttling data between tabs.

- **Without MCP (Before):** Open Sentry, copy stack trace, paste into agent. Open DB client, copy query results, paste again. Repeat forever.
- **With MCP (After):** Agent queries Sentry and your database directly. No tab switching. No copy-paste. One conversation.

The "With MCP" side tells a different story. The agent calls Sentry and your database directly and gets structured JSON back — not screenshots, not truncated pastes. The entire investigation stays in one unbroken thread.

Structured data means better answers. The agent parses JSON fields, not OCR artifacts. Setting up that connection takes about three commands.

### Setting up MCP servers

Two flavors, one command. The first example adds a remote HTTP server (Notion). The second adds a local stdio server (Sentry) with an environment variable for the auth token.

```bash
# Remote HTTP server
claude mcp add --transport http \
  notion https://mcp.notion.com/mcp

# Local server with env vars
claude mcp add --transport stdio \
  --env SENTRY_TOKEN=xxx sentry \
  -- npx -y @sentry/mcp-server

# Share with team via .mcp.json
claude mcp list
```

Notice `--env SENTRY_TOKEN=xxx`. Secrets stay in your local environment, never in committed config. Run `claude mcp list` afterward to confirm the agent sees the server's tools.

Commit `.mcp.json` to share server configs with your team — each developer supplies their own tokens locally. One adapter config, many machines.

### Popular servers

Which copy-paste pain do you want to kill first? Context7 gives the agent up-to-date library docs. Sentry lets it investigate errors without leaving your terminal. PostgreSQL lets it query your data directly.

**Popular MCP Servers:**

| Server | Description |
|--------|-------------|
| Context7 | Library docs |
| Sentry | Error monitoring |
| PostgreSQL | Database queries |
| GitHub | Issues & PRs |
| Figma | Design files |
| Stripe | Payments |

Pick the adapter that matches your biggest friction. You can always wire up more later — each one is a single `claude mcp add` command.

More adapters means more power — and more risk surface. The final section covers how to connect with confidence.

### Scoping and security

You wouldn't install a random npm package without reading it. MCP servers deserve the same scrutiny — they're code running on your machine with access to your credentials.

Servers run at three scope levels: local (your machine only), project (shared via `.mcp.json`), and user (your global config). Audit what tools each server exposes, limit permissions where possible, and never hardcode secrets in committed config files.

Start with one adapter this week. Pick your biggest copy-paste bottleneck, wire it up with `claude mcp add`, and watch the tab-switching disappear.

---

## Skills & Workflows

Your agent has cooking ability. It can chop, saute, plate. But without a recipe, it improvises — and improvisation means different results every time.

**Skills are the recipes.** The "Before" panel shows the cost of improvisation: explaining the deploy process from scratch, again. The "After" panel shows what a recipe changes: type `/deploy` and every step runs the same way, every time.

A skill is a markdown file. You write the recipe once. The agent follows it forever.

### Anatomy of a skill

Each rule on the left produces the behavior on the right. "Run tests after every edit" maps directly to the npm test output. That one-to-one mapping is what makes recipes predictable.

A skill lives in `.claude/skills/` as a markdown file with YAML frontmatter. `$ARGUMENTS` gets replaced with whatever you type after the slash command, so `/fix-issue 423` becomes "Fix GitHub issue 423."

```markdown
---
name: fix-issue
description: Fix a GitHub issue by number
disable-model-invocation: true
---

Fix GitHub issue $ARGUMENTS.

1. Read the issue with `gh issue view $ARGUMENTS`
2. Search the codebase for relevant files
3. Implement the fix and write tests
4. Create a commit
```

Set `disable-model-invocation: true` to make the skill fully deterministic — no improvisation, just your exact steps. But some recipes call for ingredients that change daily.

### Dynamic context injection

What if the recipe calls for "today's produce" — not yesterday's leftovers? The `` !`gh pr diff` `` syntax executes a shell command at invocation time. Its output gets injected into the prompt before the agent sees it.

```markdown
---
name: pr-summary
description: Summarize the current PR
context: fork
---

PR diff: !`gh pr diff`
Changed files: !`gh pr diff --name-only`

Summarize this pull request concisely.
```

When you invoke `/pr-summary`, the agent receives the live PR diff, the list of changed files, and the instruction to summarize — all fresh, all in one prompt.

`context: fork` in the frontmatter runs the skill in an isolated session so the injected data doesn't pollute your main conversation. Fresh ingredients, clean kitchen.

### Skills across tools

Write a recipe once, serve it in two kitchens. Claude Code and OpenCode share the same directory (`.claude/skills/`) and the same SKILL.md format — zero duplication needed.

| Tool | Skills Location | Invocation |
|------|----------------|------------|
| **Claude Code** | .claude/skills/SKILL.md files. Invoke with /skill-name. Supports $ARGUMENTS and shell injection. |
| **OpenCode** | Reads .claude/skills/ for compatibility. Same SKILL.md format works across both tools. |
| **GitHub Copilot** | .github/copilot/prompts/*.md files. Reference with #prompt-name in chat. |

Copilot takes a different path: `.github/copilot/prompts/*.md`. Same concept, different invocation — you reference prompts with `#prompt-name` in chat instead of a slash command.

Single-tool team? Pick one directory and move on. Multi-tool team? Duplicate only the recipes that matter most. Not every workflow deserves to become a skill, though.

### When to create a skill

Not every dish needs a written recipe. The first signal is repetition: if you've given the same instructions three or more times, write it down.

**When to Create a Skill:**

1. **Same instructions 3+ times** — repetition is the signal
2. **Multiple steps** — workflows that need ordering
3. **Needs live data** — shell injection pulls fresh context
4. **Team should share it** — commit the recipe to the repo

The third signal matters most — "needs live data." If the workflow requires fresh context at runtime (a PR diff, a log tail, a deploy status), a skill with shell injection handles it cleanly. A prompt you retype each time cannot.

One last distinction: skills are individual dishes. CLAUDE.md rules are the restaurant's house rules — "always wash hands, always plate on white china." Start with one recipe this week. Layer in dynamic context and team-shared skills as you go.

---

## Subagents & Parallelization

You're a tech lead. A massive refactor lands on your desk. Do you read every file yourself, slowly drowning in context — or do you break it into three tasks and hand each to a different engineer?

**Subagents are those engineers.** The "Before" panel shows what happens when one agent does everything: 50 files of context, responses degrading with every page. The "After" panel shows delegation: isolated context, clean summary returned.

Your main session never sees the noise. The engineers report back when the work is done.

### Built-in subagents

Three engineer types ship out of the box. Explore uses a fast, cheap model for read-only search — the intern who can research but not commit. Plan does structured thinking without taking action. General gets full tool access for any task.

| Tool | Subagents |
|------|-----------|
| **Claude Code** | Explore (Haiku, read-only, fast search), Plan (structured thinking), General (full tool access, any task). |
| **OpenCode** | @general (full tool access), @explore (fast codebase search). Same delegation concept. |
| **GitHub Copilot** | Agent mode delegates internally. Custom agents in .github/agents/ for specialized roles. |

OpenCode mirrors the pattern with `@general` and `@explore`. Copilot delegates internally and lets you define custom agents under `.github/agents/`.

The agent spawns these automatically, but you can nudge it: "use a subagent to research the auth patterns, then come back with a summary." For tighter control, build a custom subagent with explicit constraints.

### Custom subagents

Constraints are what make delegation safe. This security reviewer only gets Read, Grep, and Glob — it literally cannot edit code or run shell commands. Separate desks, separate permissions.

```markdown
---
name: security-reviewer
description: Reviews code for vulnerabilities
tools: Read, Grep, Glob
model: sonnet
---

Analyze code for SQL injection, XSS,
hardcoded secrets, and missing validation.
Rate each finding by severity.
```

The `model: sonnet` field assigns a faster, cheaper model. A documentation writer that only needs Read and Write costs a fraction of a general agent. Match the capability to the task.

Custom subagents really shine when you run several in parallel — three engineers, three tasks, three branches, no conflicts.

### Parallel work with worktrees

Each engineer gets their own desk. They can't rifle through each other's papers. In practice, that means each subagent works in its own git worktree — a separate directory, a separate branch, zero file conflicts.

**Parallel With Worktrees:**

1. **Agent creates git worktree** — isolated copy of the repo
2. **Spawns subagent** — in the worktree directory
3. **Multiple features progress** — simultaneously, no conflicts
4. **Each opens its own PR** — independent review cycles
5. **No file conflicts** — separate working directories

Three subagents cycle through reading, editing, done. When each finishes, it opens its own PR. Three features progress simultaneously without stepping on each other.

The merge step at the bottom is where you, the tech lead, review and integrate. The main agent stays lean. Each PR gets an independent review cycle. Context isolation is the reason it all works.

### When to delegate

You wouldn't delegate a two-minute task to someone who needs a five-minute briefing. Delegation has real overhead — context setup, result merging, no shared memory.

**When to Delegate:**

| Task | Action |
|------|--------|
| Exploratory research | Delegate |
| Independent tasks | Delegate |
| Parallelizable work | Delegate |
| Needs conversation context | Keep inline |
| Interactive back-and-forth | Keep inline |
| Immediate follow-up | Keep inline |

The rule of thumb: if you would say "go research this and come back with a summary," delegate. If you would say "help me think through this," keep it on your own desk.

---

# Module 6: Reference

## Claude Code Cheatsheet

Quick reference for Claude Code's slash commands, shortcuts, and CLI flags. Keep this open while you work — and if you just installed it for the first time, run the sixty-second check below before you go any further.

**If anything below is unfamiliar**, the rest of the workshop walks through it in detail. This page is the lookup, not the explanation.

### Sixty-second sanity check

**Time:** ~60 seconds
**Needs:** Node 18+, a terminal, an Anthropic account

1. Install Claude Code globally with npm.
   ```
   npm install -g @anthropic-ai/claude-code
   ```
2. Open your project and start a session.
   ```
   cd ~/your-project
   claude
   ```
3. Sign in when the browser opens.
4. Ask one question about your codebase.
   ```
   > what does this project do?
   ```

**Checkpoint:** Claude reads several files in your project and writes a project-specific summary — naming directories you actually have, not generic descriptions.

**Recovery:** Auth fails: re-run the printed login command. Generic answer: try a more specific question that names a folder, e.g. 'how does src/auth/ work?'

### Slash commands

| Command | What it does |
|---------|-------------|
| `/init` | Create CLAUDE.md with project context |
| `/clear` | Wipe conversation, start fresh |
| `/compact` | Summarize context to free tokens |
| `/model` | Switch between Opus, Sonnet, Haiku |
| `/diff` | Review pending file changes |
| `/plan` | Enter plan mode (read-only) |
| `/memory` | Open CLAUDE.md for editing |
| `/skills` | List installed skill commands |

### Keyboard shortcuts

These work in the interactive REPL. Learn the top three and you'll navigate sessions twice as fast.

| Keys | Action |
|------|--------|
| `Shift+Tab` | Cycle through permission modes |
| `Esc Esc` | Undo to last checkpoint (rewind) |
| `Ctrl+G` | Open the current plan in your editor |
| `Option+P` | Quick-switch model |
| `Ctrl+B` | Send current task to background |
| `Ctrl+C` | Cancel the current generation |

### Permission modes

Six levels from read-only to fully autonomous. Press **Shift+Tab** to cycle, or start with `--permission-mode`.

- **Plan** — Read-only. No edits, no commands.
- **Default** — Asks before every edit and command.
- **Accept Edits** — Auto-approves file changes, asks for commands.
- **Auto** — AI classifier decides what needs approval.
- **DontAsk** — Uses explicit allow rules. Designed for CI.
- **Bypass** — No safety checks. Containers only.

| Mode | File Reads | File Edits | Shell Cmds |
|------|-----------|-----------|-----------|
| Plan | Yes | No | No |
| Default | Yes | Ask | Ask |
| Accept Edits | Yes | Yes | Ask |
| Auto | Yes | AI decides | AI decides |
| DontAsk | Yes | Yes | Yes |
| Bypass | Yes | Yes | Yes |

**Tip:** Start in Default, escalate to Accept Edits once you trust the session's direction.

### CLI flags

Claude Code's CLI accepts flags for scripting and automation.

| Flag | Purpose |
|------|---------|
| `-c` | Continue the most recent session |
| `-p "query"` | Print mode — single response, no REPL |
| `--model` | Choose model (opus, sonnet, haiku) |
| `--permission-mode` | Set initial permission level |
| `--allowedTools` | Restrict available tools (comma-separated) |
| `--max-turns` | Limit agentic loop iterations |

```bash
claude                    # Interactive session
claude "fix the test"     # Start with prompt
claude -c                 # Continue last session
claude -p "query"         # Print mode (non-interactive)
--model opus              # Use specific model
--permission-mode plan    # Start in plan mode
--allowedTools Bash,Read  # Restrict tools
--max-turns 10            # Limit agentic turns
```

Combine `-p` with `--max-turns` for predictable CI jobs.

### Prompt patterns

Effective prompts follow a pattern. Here are the six you'll use most:

- **Explore** — Ask how something works. Great for onboarding.
- **Fix** — Point at a failing test or error. Be specific.
- **Refactor** — Name the pattern you want. The agent handles the rest.
- **Plan** — Add "don't code yet" to get a plan first.
- **Commit** — Let Claude write semantic commit messages.
- **Subagent** — Delegate investigation to lightweight subagents.

```
# Explore
"How does the auth system work?"

# Fix
"Fix the failing test in auth.test.ts"

# Refactor
"Refactor UserService to use the repository pattern"

# Plan
"Plan how to add Google OAuth, don't code yet"

# Commit
"Commit these changes with a descriptive message"

# Subagent
"Use subagents to investigate the billing module"
```

The key insight: *be specific about the goal, flexible about the method.*

---

## OpenCode Cheatsheet

Quick reference for OpenCode's TUI commands, keybinds, and configuration. If you just installed it for the first time, run the sixty-second check below before you go any further.

OpenCode supports 75+ providers — the only setup that matters is `/connect`. After that, the TUI behaves the same regardless of which model you picked.

### Sixty-second sanity check

**Time:** ~60 seconds
**Needs:** Node 18+, an API key for any supported provider

1. Install OpenCode globally with npm.
   ```
   npm install -g opencode-ai
   ```
2. Open your project and start the TUI.
   ```
   cd ~/your-project
   opencode
   ```
3. Run /connect to wire up a provider, paste your API key when prompted.
   ```
   > /connect
   ```
4. Ask one question about your codebase.
   ```
   > what does this project do?
   ```

**Checkpoint:** OpenCode reads several files and writes a project-specific summary in the TUI. The bottom status bar shows your model and token usage.

**Recovery:** Provider not connecting: double-check the env var name in opencode.json. Generic answer: name a specific folder in the question, e.g. 'how does src/auth/ work?'

### TUI commands

| Command | What it does |
|---------|-------------|
| `/init` | Initialize project with AGENTS.md |
| `/new` | Start a fresh session, clear history |
| `/undo` | Revert the last file change |
| `/redo` | Restore a reverted change |
| `/share` | Generate a shareable session link |
| `/connect` | Configure an AI provider |
| `/help` | Show all available commands |
| `/clear` | Clear current context |

### Keybinds

OpenCode uses a **Leader key** pattern (Ctrl+X by default). Press Leader, then the action key.

| Keys | Action |
|------|--------|
| `Tab` | Switch between agents |
| `@` | Reference a file in your prompt |
| `!` | Run an inline shell command |
| `Leader+C` | Compact the conversation context |
| `Leader+L` | Open the session picker |
| `Leader+M` | Switch to a different model |
| `F2` | Change model (alternative) |
| `Leader+D` | Toggle diff view for changes |

### Configuration

OpenCode uses `opencode.json` at the project root. It controls the provider, model, and instruction files.

- **provider** — Set the default provider and model. Supports 75+ providers.
- **instructions** — Array of Markdown files loaded as system context (like CLAUDE.md).

The instructions array is powerful: point it at your coding conventions, architecture docs, or team standards. They're loaded every session.

```json
{
  "provider": {
    "default": "anthropic",
    "anthropic": {
      "model": "claude-sonnet-4-6"
    }
  },
  "instructions": [
    "AGENTS.md",
    "docs/CONVENTIONS.md"
  ]
}
```

### Permissions

OpenCode uses pattern-based permission rules in `opencode.json`. Each tool type (bash, edit, read) has its own rules.

- **"allow"** — Automatically approved, no prompt.
- **"ask"** — Requires your confirmation each time.
- **"deny"** — Blocked entirely, agent can't use it.

Bash commands use glob patterns for fine-grained control. Allow `git *` and `npm *` while blocking `rm *`. The wildcard `*` sets the default for unmatched commands.

```json
{
  "permission": {
    "bash": {
      "*": "ask",
      "git *": "allow",
      "npm *": "allow",
      "rm *": "deny"
    },
    "edit": "allow",
    "read": "allow"
  }
}
```

### Custom agents

Define specialized agents as Markdown files with YAML frontmatter. Each agent gets its own model, tools, and system prompt.

- **name** — How you'll reference the agent (Tab to switch).
- **model** — Can differ from your default model.
- **tools** — Restrict to only what the agent needs.

Use a `reviewer` agent with read-only tools for code review. Use a `writer` agent with full access for implementation. Switch between them with Tab.

```markdown
---
name: reviewer
description: Code review specialist
model: claude-sonnet-4-6
tools:
  - read
  - grep
  - glob
---

Review code for clarity, bugs, and
performance issues.
Suggest improvements with examples.
```

---

## GitHub Copilot Cheatsheet

Quick reference for Copilot's inline completions, chat features, and modes. If you've never used Copilot before, run the sixty-second check below before you read the rest.

Copilot has three distinct modes — inline completions, Chat, and Agent. The keyboard shortcuts and prompts that work in one don't always work in another; this page covers all three.

### Sixty-second sanity check

**Time:** ~60 seconds
**Needs:** VS Code, a GitHub account with Copilot access

1. Install the GitHub Copilot extension from the VS Code marketplace.
2. Sign in via the GitHub icon in the activity bar — confirms your subscription.
3. Open any TypeScript file and start typing a function signature.
   ```
   function calculateTax(
   ```
4. Watch for the ghosted gray text — that's an inline suggestion. Press Tab to accept.
5. Open the Chat panel (Control+Cmd+I on macOS) and ask a question about your project.
   ```
   @workspace what does this project do?
   ```

**Checkpoint:** You see ghosted suggestions while typing AND get a project-specific answer in the Chat panel that mentions actual files from your workspace.

**Recovery:** No suggestions appearing: check the Copilot status icon at the bottom-right of VS Code, sign in if needed. Generic Chat answer: prefix with @workspace so Copilot indexes your project first.

### Inline suggestions

| Shortcut | Action |
|----------|--------|
| `Tab` | Accept the current suggestion |
| `Esc` | Dismiss the suggestion |
| `Alt+]` / `Alt+[` | Cycle through alternatives |
| `Cmd+→` | Accept one word at a time |
| `Alt+Enter` | Show all available suggestions |
| `Ctrl+Enter` | Open the Completions Panel |

**Tip:** Use `Cmd+→` to accept word-by-word when you want the start of a suggestion but not the end.

### Chat commands & participants

Type these in the Copilot Chat panel. Commands start with `/`, participants with `@`, and variables with `#`.

| Command | Purpose |
|---------|---------|
| `/explain` | Explain selected code or a concept |
| `/fix` | Suggest a fix for problems in selection |
| `/tests` | Generate test cases for the selection |
| `/new` | Scaffold a new file or project |
| `@workspace` | Include full project as context |
| `@terminal` | Include recent terminal output |
| `#file` | Reference a specific file by name |
| `#selection` | Reference the current editor selection |

### Edit, Agent, and Coding Agent

Copilot has three distinct modes, each with different levels of autonomy:

- **Edit Mode** — You select the files. Copilot suggests changes within them. No commands, no side effects.
- **Agent Mode** — Copilot picks files, runs terminal commands, and iterates. You approve each step.
- **Coding Agent** — Fully async. Runs in the cloud, creates branches, opens PRs. Assign it an issue and walk away.

| Mode | You Pick Files | Runs Commands | Creates PRs | Works Async |
|------|---------------|--------------|------------|------------|
| Edit Mode | Yes | No | No | No |
| Agent Mode | No | Yes | No | No |
| Coding Agent | No | Yes | Yes | Yes |

Start with Edit Mode for precision work. Use Agent Mode for multi-file tasks. Reserve Coding Agent for well-defined issues with clear acceptance criteria.

### Custom instructions

Create `.github/copilot-instructions.md` in your repo. Copilot reads it on every interaction — like CLAUDE.md or AGENTS.md but for Copilot.

- Define your tech stack so suggestions match your framework.
- Set style rules so generated code follows team conventions.
- List constraints that every suggestion should respect.

You can also set user-level instructions in VS Code settings under `github.copilot.chat.codeGeneration.instructions`.

```markdown
# Project
Next.js 14 app with TypeScript

# Style
- Use functional components
- Prefer named exports
- Test with vitest

# Constraints
- No default exports in components/
- Keep bundle size under 200KB
- All API routes need auth middleware
```

### Plans & pricing

Copilot's free tier gives limited completions and chat. Paid tiers unlock full features:

- **Free** — Limited completions and chat. Good for trying it out.
- **Pro ($10/mo)** — Unlimited completions, chat, and Agent Mode.
- **Pro+ ($39/mo)** — Everything in Pro plus Coding Agent and premium models.
- **Business ($19/seat)** — Organization management, policy controls, audit logs.
- **Enterprise ($39/seat)** — Everything in Business plus fine-tuned models and knowledge bases.

| Plan | Completions | Chat | Agent Mode | Coding Agent |
|------|------------|------|-----------|-------------|
| Free | Limited | Limited | No | No |
| Pro ($10/mo) | Yes | Yes | Yes | Limited |
| Pro+ ($39/mo) | Yes | Yes | Yes | Yes |
| Business ($19/seat) | Yes | Yes | Yes | Yes |
| Enterprise ($39/seat) | Yes | Yes | Yes | Yes |

For individual use, Pro is the sweet spot. Teams should start with Business.

---

## Tool Comparison

Side-by-side reference for Claude Code, OpenCode, and GitHub Copilot. Use this to pick the right tool — or the right combination.

### At a glance

| Tool | Type | Strength |
|------|------|----------|
| **Claude Code** | Terminal CLI | Deep agentic autonomy, Anthropic models |
| **OpenCode** | Terminal TUI | 75+ providers, open source, custom agents |
| **Copilot** | IDE extension | Inline completions, GitHub-native workflow |

### Interface support

Each tool lives in a different part of your workflow:

- **Claude Code** — Terminal-first. Also works as a VS Code extension. No JetBrains or web UI.
- **OpenCode** — Terminal TUI with a rich panel layout. No IDE extensions.
- **Copilot** — Broadest reach: VS Code, JetBrains, Neovim, web, and mobile. Only tool with inline completions.

| Feature | Claude Code | OpenCode | Copilot |
|---------|------------|---------|---------|
| Terminal | Yes | Yes | No |
| VS Code | Yes | No | Yes |
| JetBrains | No | No | Yes |
| Desktop App | No | No | No |
| Web | No | No | Yes |
| Mobile | No | No | Yes |
| Inline Completions | No | No | Yes |

If you live in the terminal, Claude Code or OpenCode. If you never leave VS Code, Copilot is the path of least friction.

### Agentic capabilities

All three can read files, edit code, and run commands. The differences are in the advanced features:

- **Subagents** — Claude Code and OpenCode can spawn lightweight subagents for parallel work. Copilot cannot.
- **Git worktrees** — Only Claude Code supports parallel branches via `/batch` with worktrees.
- **MCP** — All three support Model Context Protocol for extending tool capabilities.
- **Hooks** — Claude Code and OpenCode have lifecycle hooks. Copilot has limited support via extensions.

| Feature | Claude Code | OpenCode | Copilot |
|---------|------------|---------|---------|
| File Read/Edit | Yes | Yes | Yes |
| Shell Commands | Yes | Yes | Yes |
| Web Search | Yes | No | Yes |
| Subagents | Yes | Yes | No |
| Git Worktrees | Yes | No | No |
| MCP Support | Yes | Yes | Yes |
| Hooks/Lifecycle | Yes | Yes | Limited |

### Choosing a tool

There's no single "best" tool. Match the tool to your need:

- **Inline completions** — Copilot is the only option here.
- **Model flexibility** — OpenCode supports 75+ providers. Use any model.
- **Deep agentic work** — Claude Code has the most autonomous features.
- **Open source** — OpenCode is fully open source.
- **GitHub workflow** — Copilot's Coding Agent creates PRs from issues.
- **CI/CD automation** — Claude Code's headless mode was built for pipelines.

### Combining tools

The best setup is often a combination. These tools don't conflict — they complement each other:

1. **Copilot in your IDE** — Handles inline completions, quick explanations, and small fixes as you type.
2. **Claude Code or OpenCode in your terminal** — Handles complex multi-file tasks, refactoring, and agentic workflows.
3. **Skills transfer** — The prompting patterns, permission models, and context management techniques you learn work across all three.

Start with one tool, get comfortable, then add another. The concepts in this course apply everywhere.

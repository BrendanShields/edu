# AI Coding Best Practices — Presentation Content Guide

> Fleshed-out content for each section, plus image and video prompts for Gemini/Remotion.
> You already have Remotion components: ChatWindow, BrowserFrame, FileTree, TopologyGraph, Typewriter, PastedScrap, CaptionPill, EpisodeTitle — and an MCP series (CopyPasteEra, FunctionCalling, EnterMCP, InsideMCPServer, WhenToUseMCP).

---

## SECTION 1: Grown, Not Crafted (8 min)

### Fleshed-Out Content

**Core message:** AI models are grown through optimization, not designed through explicit logic. This fundamentally changes how you work with them.

**Key talking points:**

The bonsai metaphor is the anchor for the whole workshop. A bonsai artist plants a seed, controls soil/light/pruning — but every cell is grown by the tree. That's exactly how LLMs work: engineers design the training process, but the intelligence emerges from trillions of automated parameter adjustments.

Walk through the pipeline briefly: text → tokens → numbers → billions of weights → gradient descent (billions of tiny corrections over weeks of compute) → base model → fine-tuning → assistant. Nobody understands why the final configuration works. Reading the weights is like opening a compiled binary in a hex editor — every byte is there, none of it tells you what the program does.

**The punchline for engineers:** You're a bonsai artist, not a mechanic. You shape the environment (prompt, context, tools, verification steps) and evaluate what emerges. You don't dictate behavior — you test outputs. This is why verification-driven development isn't optional. It's the only honest way to work with a system you can't inspect.

**Updated stat to include:** Veracode 2025 found 2.74x more vulnerabilities in AI-generated code vs. human code. 45% of AI code samples failed security tests. This isn't because AI is bad — it's because the system is grown, not crafted. You literally cannot predict its failure modes by inspecting it. You have to test.

### Image Prompts (Gemini)

1. **Bonsai Growth Timelapse** — "A cinematic illustration of a bonsai tree growing from a small seed in a ceramic pot. Show three stages left to right: tiny seedling, mid-growth with pruning shears nearby, and a mature sculpted bonsai. Warm studio lighting, soft shadows, clean minimal background. Style: editorial illustration, muted earth tones."

2. **Mixing Desk / Parameter Visualization** — "An impossibly large audio mixing desk stretching to infinity, with billions of tiny glowing dials. Each dial labeled with a small number. A single hand adjusting one dial. Dark moody lighting with cyan and amber accents. Photorealistic render."

3. **Gradient Descent Pruning** — "Artistic visualization of thousands of tiny golden scissors floating around a bonsai tree, each one making microscopic cuts. Light trails show the path of each cut. Dark background, the tree glows softly. Conceptual art style."

### Video Prompts (Remotion / Gemini Video)

1. **"From Seed to Model" Animation** (Remotion) — Use your existing Remotion theme (lightTheme with warm off-white). Animate three stages with spring transitions:
   - Beat 1: Text token appears ("Once upon a time") → transforms into number array [15496, 2402, 257, 640]
   - Beat 2: Grid of parameter dots appears (start random colors), then ripples through as gradient descent "corrects" them — colors shift from red/random to blues/organized
   - Beat 3: The organized grid outputs the word "Paris" in response to "The capital of France is ___"
   - Caption pill: "Trillions of corrections. No human ever looks at the numbers."

2. **"The Black Box"** (Gemini video) — "A 10-second animation showing a glowing neural network inside a transparent cube. A question enters one side as text, passes through complex interconnected nodes that light up unpredictably, and an answer exits the other side. Camera slowly rotates around the cube. The internal nodes should look beautiful but incomprehensible. Dark background with soft blue/purple lighting."

---

## SECTION 2: The Agentic Loop (8 min)

### Fleshed-Out Content

**Core message:** Every AI coding tool runs the same Read → Think → Act → Verify loop. Understanding this loop changes how you write prompts forever.

**Key talking points:**

The mental shift: stop thinking "chatbot" (you ask, it answers, you copy-paste). Start thinking "pair programmer" (you describe the problem, it reads your files, reasons about the cause, makes edits, runs tests, iterates if tests fail). A chatbot gives you one shot. An agent iterates until the tests pass.

The four phases in detail:
- **READ (Eyes):** The agent reads src/auth.ts, greps for related imports, checks git log, pulls in the error message. It's building a map before making a change. A surgeon doesn't cut before looking at the scan.
- **THINK (Memory):** Connects the error message, source code, and expected behavior. Forms a plan. This is invisible in the UI but where the model spends most tokens. Better input context = better reasoning.
- **ACT (Hands):** This is the step that separates an agent from a chatbot. It edits src/auth.ts:45, runs npm test, creates a branch. Modifies your codebase directly.
- **VERIFY (Ears):** Runs the test suite, reads output, compares against expectations. If tests fail, loops back to READ with the new error. This is the self-correcting mechanism.

**The five built-in tools** (the agent's senses): Read (eyes on files), Search (memory across codebase), Edit (hands to change code), Bash (voice to run commands), Web (ears to outside world). MCP servers add more senses later. Skills add procedural knowledge — recipes that guide how the agent uses those senses.

**The agent architecture stack (from Anthropic's building agents guide):**
1. **Agent loop** — Core reasoning system (Read → Think → Act → Verify)
2. **Agent runtime** — Execution environment (code, filesystem, sandboxed shell)
3. **MCP servers** — Connections to external tools and data
4. **Skills library** — Domain expertise and procedural knowledge

This modular design means each layer can evolve independently. The industry shifted from building specialized domain agents (finance agent, research agent) toward "code as an interface for agents to do almost any digital work." Claude Code is a coding agent that also functions as a general-purpose agent working through executable code.

**Updated insight:** All three tools (Claude Code, OpenCode, Copilot) share this identical loop. The packaging differs. Once you see the pattern, you see it everywhere — and you stop writing prompts that describe keystrokes and start writing prompts that describe destinations.

### Image Prompts (Gemini)

1. **The Agentic Loop Cycle** — "A clean, modern infographic showing four nodes arranged in a circle connected by arrows: READ (eye icon), THINK (brain icon), ACT (wrench icon), VERIFY (checkmark icon). At center, a small infinity symbol. Each node has a subtle glow. Style: flat design, navy blue and coral accent colors on white background. Presentation-quality."

2. **Chatbot vs Agent Split Screen** — "Split screen illustration. Left side: a person typing on a laptop, talking to a chat bubble — passive, text-only. Right side: the same person leaning back while a robotic arm types on their keyboard, with files open on screen, terminal running tests. Left side is gray/muted, right side is vibrant with blue and coral accents. Clean editorial style."

### Video Prompts (Remotion / Gemini Video)

1. **"Watch the Loop Run" Terminal Recording** (Remotion) — Using your ChatWindow and Typewriter components, animate a simulated Claude Code session:
   - Beat 1: User types "fix the failing test in src/auth/auth.test.ts"
   - Beat 2: Agent reads files (show file paths appearing with READ label)
   - Beat 3: Agent thinks (show THINK label, brief pause, plan text appears)
   - Beat 4: Agent edits code (show ACT label, diff appearing)
   - Beat 5: Agent runs tests (show VERIFY label, "npm test" command, green ✓)
   - Each phase gets a colored label overlay matching the loop diagram
   - Caption pill cycles through: "Read → Think → Act → Verify"

2. **"Chatbot vs Agent" Side-by-Side** (Gemini video) — "A 15-second split-screen animation. Left side shows a standard chat interface with text going back and forth — user copies code, pastes it in, gets text advice back. Right side shows a terminal where an AI agent autonomously reads files, edits code, runs tests, and iterates. The left side stays grayscale and static. The right side has glowing code edits and green test checkmarks appearing. Smooth transitions, dark mode aesthetic."

---

## SECTION 3: Tool Landscape (7 min)

### Fleshed-Out Content

**Core message:** Choose by where you already work — terminal, IDE, or both. The tools are converging. The interface is the differentiator.

**Key talking points (keep brief):**

Three paths up the same mountain:
- **Claude Code:** Terminal-native. Type `claude` in any project directory. Deepest Anthropic integration. For engineers whose terminal is always open in another pane.
- **OpenCode:** Same agentic loop, 75+ model providers. Open source. Vendor-independent. For teams who treat vendor lock-in as a load-bearing wall.
- **Copilot:** Lives inside VS Code. Inline completions + Chat + Agent mode + Coding Agent. For engineers who can't remember the last time they opened a standalone terminal.

**Choosing your stack:** Start with one question — terminal or IDE? Most productive developers use 2+ tools together (e.g., Copilot for inline completions while coding, Claude Code for complex multi-file tasks from the terminal). You don't hire one contractor for an entire renovation.

**The convergence point:** MCP servers, agentic mode, custom instructions — all three tools have them. The overlap is large and growing. The real tradeoff is interface fit + model ecosystem. Everything else is converging.

### Image Prompts (Gemini)

1. **Three Paths Up a Mountain** — "Illustration of a mountain with three distinct hiking paths leading to the same summit. Path 1 labeled 'Terminal' has a terminal icon at its base. Path 2 labeled 'TUI' has an open-source symbol. Path 3 labeled 'IDE' has a VS Code icon. The summit has a glowing star labeled 'Ship Code.' Clean, minimal, topographic map style with blue contour lines on white."

2. **Tool Comparison Cards** — "Three vertical card mockups side by side: a dark terminal window, a TUI interface with panels, and a VS Code editor with sidebar. Each card has a small logo at top. Below all three, a banner reads 'Same engine. Different homes.' Clean product design style, subtle shadows."

### Video Prompt (Remotion)

1. **"Same Loop, Three Interfaces"** — Animate three terminal/IDE mockups side by side. Each shows the same bug being fixed but in different interfaces (terminal, TUI, IDE). The Read/Think/Act/Verify labels appear synchronized across all three. Ends with all three showing "Tests pass ✓" at the same moment. Use your BrowserFrame component adapted for each.

---

## SECTION 4: Effective Prompting — CICV Framework (10 min)

### Fleshed-Out Content

**Core message:** A good prompt is a work order, not a wish. Four elements: Context, Intent, Constraints, Verification.

**Key talking points:**

You wouldn't call a plumber and say "fix the water." You'd say: the kitchen sink drips when the faucet is closed, it's the pipe under the cabinet, and don't replace the whole faucet. That's a work order.

**The CICV framework:**
- **Context (Where):** Which files, which module, what's the current state? Every file you name is a file the agent doesn't waste tokens discovering. "Check the auth flow in src/auth/, especially token refresh" vs. "check auth."
- **Intent (What):** What should change? "Fix the root cause of the session timeout" — not "fix the bug."
- **Constraints (Don't):** What NOT to touch. "Don't add new dependencies. Follow the existing pattern in orders.ts. Keep the public API unchanged." These are guardrails, not a cage.
- **Verification (Prove it):** How to prove it worked. "Run npm test after." Five words that transform the agent from a code generator into a self-verifying collaborator.

**Anthropic's own best practices (from their prompt engineering guide):**

1. **Be explicit and direct** — State exactly what you want. Use action verbs: "Write," "Analyze," "Generate." Skip preambles.
2. **Explain the why** — When you explain *why* a constraint exists, the model makes better decisions about related edge cases it encounters. Motivation > instruction.
3. **Give permission for uncertainty** — Explicitly say "If you're not sure, say so rather than guessing." This dramatically reduces hallucination. Most people never do this.
4. **Prefill the response** — Start the AI's answer for it to enforce format, skip preamble, or set tone. Particularly powerful for enforcing JSON/XML output.
5. **Tell it what TO do, not what NOT to do** — "Respond in 3 sentences" beats "Don't write a long response." Positive framing consistently outperforms negative.

**The prompt engineering decision framework:**
- Is your request clear? → Fix clarity first, before trying advanced techniques
- Simple task? → Core techniques only (explicit + examples)
- Specific format needed? → Add examples or use prefilling
- Complex multi-stage? → Break into a chain of focused prompts
- Needs deep reasoning? → Use extended thinking or chain-of-thought

**Bad vs Good comparison:**
- Bad: `fix the bug` → No file, no symptom, agent reads everything, guesses everywhere
- Good: `In src/orders/cart.ts, the running total drops the tax line when an item is removed. Fix the root cause, add a regression test, and run npm test after.` → Scoped, clear symptom, verification built in

**Common mistakes (Anthropic's list):**
- Over-engineering prompts with unnecessary complexity
- Using every technique simultaneously instead of just what's needed
- Relying on outdated techniques (XML tags, rigid role prompts) that modern models don't need
- Failing to iterate — the best prompt is rarely the first one

**When to put the tool down** (important for credibility with skeptical engineers):
- Security-critical paths (auth, crypto, payment)
- Novel algorithms with no training data
- When verification costs more than writing (4-line bash scripts)
- Regulated/audited code with governance requirements

**Updated stat:** 66% of developers struggle with AI solutions that are close but miss the mark (Stack Overflow 2025). 65% cite missing context as the top issue. CICV directly addresses both — context and constraints prevent "close but wrong."

### Image Prompts (Gemini)

1. **Work Order Form** — "A stylized work order form on a clipboard. Four colored sections highlighted: blue 'Location/Context' field filled with 'src/auth/refresh.ts', green 'Task Description' field with 'Fix token refresh timeout', orange 'Restrictions' field with 'No new dependencies', purple 'Inspection' field with 'Run all tests after.' Handwritten font on the form. Clean white background with subtle paper texture."

2. **Flashlight in a Warehouse** — "A person holding a flashlight in a dark warehouse full of tall shelving racks filled with code files. The flashlight beam illuminates a single shelf labeled 'src/auth/'. Everything else is in darkness. Dramatic lighting, cinematic composition, cool blue tones with warm amber flashlight beam."

### Video Prompt (Remotion)

1. **"Bad vs Good Prompt" Side-by-Side** — Split screen animation. Left: user types "fix the bug" — agent starts reading dozens of files (file names cascade in red), touches wrong modules, gets confused. Right: user types the CICV prompt — agent reads 2 files (file names appear in green), makes targeted edit, runs tests, green checkmark. Use your ChatWindow + FileTree components. Timer overlay shows left taking 3x longer.

---

## SECTION 5: Explore → Plan → Build (8 min)

### Fleshed-Out Content

**Core message:** You wouldn't pour concrete before reading the soil report. Three phases keep AI coding from being improvisation.

**Key talking points:**

The most expensive code is code that solves the wrong problem fast. "Build first" means 200 lines against the wrong library, in the wrong folder. "Plan first" means two minutes of reading before a single character is written.

**Phase 1 — EXPLORE:** Switch to plan mode (read-only). The agent reads relevant files, greps for patterns, builds a map. No edits happen. This is the site survey. Command: `/plan` then describe the problem.

**Phase 2 — PLAN:** The agent proposes what files change, what the approach is, dependency implications. You can scan this in 10 seconds and catch a wrong turn. Crossing out a line on a blueprint costs nothing. Tearing down a half-built wall costs everything. Command: "Propose a plan before writing any code."

**Phase 3 — BUILD:** Implement with a reviewed plan. The agent already surveyed the site and has approved blueprints. Command: "Implement the plan. Write tests. Run npm test."

**The full cycle:** Explore → Plan → Build → Commit. Use for anything bigger than a one-line fix. Over time this becomes second nature.

### Image Prompts (Gemini)

1. **Construction Blueprint Metaphor** — "Three-panel illustration of a construction project. Panel 1: An architect surveying land with binoculars (labeled EXPLORE). Panel 2: The same architect reviewing a blueprint on a drafting table (labeled PLAN). Panel 3: Construction workers building from the blueprint (labeled BUILD). Clean line art style with blue blueprint accents."

2. **The Cost of Skipping** — "Split image. Left: a beautiful architectural blueprint with clean lines. Right: a demolished half-built wall with rubble, construction tape, and a frustrated worker. Caption space for 'Blueprints are cheap. Demolition is not.' Editorial illustration, high contrast."

### Video Prompt (Remotion)

1. **"The Three-Phase Fix"** — Animate a real-feeling workflow in your ChatWindow:
   - Beat 1: User types `/plan` — mode indicator changes to "PLAN MODE (read-only)"
   - Beat 2: Agent explores — FileTree component shows files being read (highlighted)
   - Beat 3: Agent outputs a numbered plan with file paths
   - Beat 4: User reviews, approves. Types `/default`
   - Beat 5: Agent implements — code diffs appear, then `npm test` runs, green ✓
   - Caption pill: "Survey → Blueprint → Build"

---

## SECTION 6: Context Management → Context Engineering (7 min)

### Fleshed-Out Content

**Core message:** Context engineering — not just prompt engineering — is the #1 skill. You're curating an information landscape, not writing a message.

**Key talking points:**

**The shift from prompt engineering to context engineering** (Anthropic's own framing): Prompt engineering is writing effective instructions. Context engineering is managing the *entire* information landscape during inference — system prompts, tools, external data, conversation history, retrieved documents. The prompt is one piece. The context is everything.

**Why this matters technically:** LLMs have finite "attention budgets." Research on needle-in-a-haystack benchmarks shows performance degrades as context grows. Transformer architecture creates n² pairwise token relationships — at scale, this strains the model's ability to attend to what matters. Context must be treated as a finite resource with diminishing marginal returns.

The desk metaphor: everything the model knows has to fit on a fixed-size exam desk. Files, conversation, tools, instructions — all on the same surface. When it overflows, items fall off silently. The AI never says "I forgot." It just gives worse answers. Context eviction is amnesia, not fuzziness.

**What fills the desk (cost breakdown):**
- Small config file: cheap
- Short prompt: cheap
- Grep results: cheap
- 2,000-line source file: expensive
- Full test output: very expensive (trap nobody expects)
- 20 exchanges: compounds quadratically (re-sends entire history each turn)

**Five context engineering strategies (from Anthropic's engineering blog):**

1. **New task → New session** (don't carry baggage)
2. **Quality degrading → /compact** (summarize history, preserve critical decisions and unresolved issues — selective discarding, not blind truncation)
3. **Big research → Subagent** (gets its own desk, reports back a 1,000-2,000 token summary — detailed exploration separated from high-level synthesis)
4. **Rules → CLAUDE.md / AGENTS.md** (bolted to the desk, never falls off — these are always in context)
5. **Just-in-time retrieval** — Don't pre-load everything. Keep lightweight identifiers (file paths, URLs, search queries) and retrieve dynamically with tools. This mirrors how humans work: we don't memorize entire repositories, we use organizational systems.

**Structured note-taking for long-horizon tasks:** For multi-hour sessions, agents can write persistent external notes (NOTES.md, todo files) that survive compaction and can be retrieved later. This is how Claude played through an entire Pokémon game — tactical notes and progress tracking across thousands of steps.

**System prompt calibration (Anthropic's guidance):** Hit the "right altitude" — specific enough to guide behavior, flexible enough for intelligent adaptation. Don't write rigid hardcoded logic, but don't be vague either. Use markdown headers or XML tags to organize sections.

**Cost reality:** Long sessions compound quadratically. A 40-turn chat is dramatically more expensive than four 10-turn chats. /compact at 60% isn't just about quality — it's cheaper.

**The guiding principle (from Anthropic):** "Find the smallest set of high-signal tokens that maximize the likelihood of your desired outcome." Start minimal with the strongest model, then incrementally add clarifications based on observed failures — not hypothetical edge cases.

**Updated stat:** Use Haiku/Sonnet for refactors and lookups. Save Opus for hard reasoning. This can cut costs 5-10x with no quality loss on routine tasks.

### Image Prompts (Gemini)

1. **The Overflowing Desk** — "Two side-by-side overhead photos of an exam desk. Left desk: covered in messy papers, sticky notes, binders stacked high, papers falling off edges. Red warning glow. Right desk: three neatly organized reference sheets, clean space, calm blue glow. Labeled 'Exhausted Session' and 'Fresh Session.' Top-down photography style, soft lighting."

2. **Suitcase Packing Metaphor** — "Illustration of an open suitcase being packed. Some items are marked in green (small, essential) and others in red (bulky, unnecessary). A weight scale next to the suitcase shows 85% full. Items labeled: 'grep results' (small green), 'full file dump' (large red), 'test output' (huge red). Travel poster style illustration."

### Video Prompt (Remotion)

1. **"The Desk Fills Up"** — Interactive-feeling animation. Start with an empty desk (context bar at 0%). As user exchanges happen, papers (labeled with file names, conversation turns) pile on. At 60%, a /compact animation vacuum-seals the papers into a thin summary sheet. At 100%, papers fall off the edge — but the caption reads "The AI never says 'I forgot.' It just gives worse answers." Use spring animations for paper stacking and falling.

---

## SECTION 7: Permissions & Safety (7 min)

### Fleshed-Out Content

**Core message:** An AI coding tool can run any shell command on your machine. Learning to set the permission dial correctly is the difference between a productive assistant and an incident report.

**Key talking points:**

Horror story: A team shipped a fix on Friday. The agent ran `git push --force` to main because nobody configured permission gates. They spent Saturday restoring from backup. The tool did exactly what it was allowed to do.

**The trust spectrum:**
- Day 1: Plan Mode — read-only, watch what the AI would do
- Day 3: Default Mode — approve each edit and command
- Week 3: Auto Mode — AI classifier decides what needs approval

**Claude Code specifics:** Shift+Tab cycles through 6 modes (Plan, Default, Accept Edits, Auto, Full Auto, custom profiles). OpenCode: per-tool allow/ask/deny rules. Copilot: IDE acceptance model + PR review gate.

**Four non-negotiable rules:**
1. Start restrictive, open up as trust builds
2. Always `git commit` before starting a task (clean revert point)
3. File edits are reversible, shell commands often aren't
4. Never bypass permissions in production. Full Auto = local dev only. Not "just this once."

### Image Prompts (Gemini)

1. **The Trust Dial** — "A large industrial dial/gauge with settings from 'Read Only' through 'Default' through 'Auto' to 'Full Auto.' The dial is currently set to 'Default.' Green zone on the left, yellow in the middle, red on the right. Small text under 'Full Auto' reads 'Local dev only.' Industrial control panel aesthetic, dark background."

2. **Contractor with Keys** — "Illustration of a contractor (wearing hard hat and tool belt) standing at the front door of a house. The homeowner is handing them a single room key, not the master key. A keyring with many keys hangs on the wall behind. Warm, friendly editorial illustration style."

### Video Prompt (Gemini Video)

1. **"The Permission Spectrum"** — "15-second animation showing three time periods. Day 1: a padlocked terminal with 'PLAN MODE' — the AI can look but not touch. Day 3: the lock opens partially, showing 'DEFAULT' — each action shows a confirmation dialog. Week 3: the lock opens fully with 'AUTO' — routine actions flow through, but a red alert pops up for dangerous commands. Smooth transitions between stages. Dark terminal aesthetic with green text."

---

## SECTION 8: Verification-Driven Development (8 min)

### Fleshed-Out Content

**Core message:** Tests are the only way to verify what a grown system actually does. Define "correct" before the agent writes a line of code.

**Key talking points:**

Reading 200 lines of AI-generated code on faith is like signing a contract without reading it. The model is grown, not crafted — you can't inspect its reasoning, only its outputs. Tests are the only honest verification method at scale.

**The flip:** Instead of reviewing 200 lines of implementation, review 20 lines of test definitions. The tests become the spec. Once you approve those 20 lines, the agent implements whatever satisfies them. You own the spec. The agent owns the code.

**Tests-first prompt pattern:**
```
Write tests for a RateLimiter class:
- Allows 10 requests per minute per user
- Returns 429 after limit exceeded
- Resets after the window expires

Run the tests (they should fail), then implement RateLimiter to make them pass.
```

**Airport security layers:**
1. Tests — metal detector (catches logic errors)
2. Linter — bag scanner (catches style drift)
3. Type checker — passport control (catches interface mismatches)
4. Screenshots — security camera (catches UI regressions)

**One-liner to add to any prompt:** "After editing, run `npm test`, then `eslint .`, then `tsc --noEmit`."

**Updated stat:** 76% reduction in syntax errors in AI-written code, BUT 2.74x more security vulnerabilities (Veracode 2025). Tests catch the logic errors AI introduces. Linters and type checkers catch the rest. Without stacked verification, you ship bugs that look like features.

### Image Prompts (Gemini)

1. **Airport Security Checkpoint** — "An illustrated airport security checkpoint with four stations in sequence: a metal detector arch labeled 'Tests', an X-ray scanner labeled 'Linter', a passport booth labeled 'Types', and a security camera labeled 'Screenshots.' Code files on a conveyor belt passing through each station. Some files get a green checkmark, one gets flagged with a red alert. Clean, modern illustration style."

2. **Contract Signing** — "Split illustration. Left: a person signing a 200-page contract with eyes closed, blindfolded, labeled 'Reviewing AI code on faith.' Right: the same person reading a 1-page summary labeled 'Test Definitions' with checkmarks, looking confident. Dramatic lighting contrast — left side dark and ominous, right side bright and clear."

### Video Prompt (Remotion)

1. **"Red, Green, Done"** — Animate the tests-first workflow:
   - Beat 1: Test code appears (20 lines, clean)
   - Beat 2: Tests run → RED (all fail, expected)
   - Beat 3: Agent implements (code appears in parallel panel)
   - Beat 4: Tests run → GREEN (all pass)
   - Beat 5: Linter runs → pass. Type checker → pass. All four gates clear.
   - Final frame: "You own the spec. The agent owns the code."

---

## SECTION 9: Agentic vs Deterministic (8 min) ★ NEW

### Fleshed-Out Content

**Core message:** Use LLMs for intelligence. Use graphs for control flow. Knowing when to use which is what separates a capable engineer from one who cargo-cults AI.

**Key talking points:**

**The problem with pure agentic:** When you give an LLM free rein over a database, it decides what to do at every step. It might skip validation, execute `DELETE FROM orders` without a WHERE clause, retry forever, or take a non-deterministic path you can't audit. For code changes, this is fine — you can git revert. For databases, payments, and infrastructure, it's unacceptable.

**The five failure modes of agentic systems** (Microsoft taxonomy):
1. Hallucinated actions — generates tool calls that don't exist
2. Scope creep — redefines the problem mid-execution
3. Cascading errors — Agent A's hallucination becomes Agent B's input
4. Context loss — forgets constraints over many iterations
5. Infinite loops — misinterprets stopping conditions

**Three workflow patterns for agents (from Anthropic's building agents guide):**

| Pattern | How it works | When to use |
|---------|-------------|-------------|
| **Sequential** | Agent A → Agent B → Agent C (pipeline) | Clear dependencies, each stage adds value. Trade latency for accuracy. |
| **Parallel** | Fan out to A, B, C simultaneously → aggregate | Independent subtasks, need speed or multiple perspectives. Code review across dimensions. |
| **Evaluator-Optimizer** | Generator + Evaluator iterate until quality threshold | Clear quality criteria exist. Code gen with test validation. Set max iterations or it loops forever. |

**When multi-agent beats single-agent (Anthropic's guidance):**
- **Context protection** — irrelevant info degrades performance. Isolate with subagents.
- **Parallelization** — multiple agents exploring different paths simultaneously covers more ground.
- **Specialization** — agents with 8-15 focused tools outperform generalists with 20+ tools.

**But start simple:** Anthropic warns that a "well-designed single agent can accomplish far more than many developers expect." Multi-agent systems consume 3-10x more tokens due to context duplication and coordination overhead. Teams have spent months building elaborate multi-agent architectures only to discover improved prompting on a single agent achieved equivalent results.

**The decision framework:**

| Dimension | Use Agentic | Use Deterministic |
|-----------|------------|-------------------|
| **Reversibility** | Can git revert | Can't undo DB write/payment |
| **Audit needs** | Black box OK | Must prove pipeline ran |
| **Flexibility** | Exploratory, novel | Repetitive, known workflow |
| **Human-in-loop** | Soft feedback | Hard approval gates |
| **Stakes** | Low (code changes) | High (data, money, infra) |

**Subagents in Claude Code (practical example):**
Subagents are isolated Claude instances with their own context windows. They take a task, do the work, and return only the result. Three built-in types: general-purpose (complex tasks), plan (research before suggesting strategy), explore (fast read-only search).

When to spawn a subagent: exploring 10+ files, 3+ independent pieces of work, need a fresh unbiased review, or want to verify before committing. When NOT to: sequential dependent work, multiple edits to same file, small focused tasks.

The automation progression: start conversational → identify patterns → automate with CLAUDE.md/skills/hooks.

**Your LangGraph DB Agent example** (from the codebase) — walk through the flow:
```
START → generate_sql → validate_sql → [read/write] → execute → respond → END
```
What's deterministic (regex, not LLM): DROP TABLE blocked, DELETE requires WHERE, multi-statement blocked, writes require approval, retries bounded to 2.
What the LLM handles: converting natural language → SQL, explaining operations, formatting results.

**The hybrid approach:** Use agentic tools for development (Claude Code explores, iterates, fails safely). Wrap the result in a deterministic graph for production (LangGraph with validation nodes, checkpoints, approval gates).

**Verification subagents (key pattern from Anthropic):** Dedicated verification agents that independently validate outputs. They sidestep the "telephone game" problem by checking results without the context bias of the generating agent. Critical pitfall: verification agents often declare success prematurely — you need explicit, comprehensive testing criteria, not vague success checks.

**Cost reality:** Standard LLM call = baseline tokens. Agentic workflow = ~4x. Multi-agent system = ~15x. Deterministic graphs = 1x (no exploration loops).

**Key frameworks to know:** LangGraph (state machines), CrewAI (role-based crews), DSPy (prompting-as-programming), AutoGen (Microsoft, conversation-driven).

### Image Prompts (Gemini)

1. **Two Roads Diverge** — "Illustration of a path splitting into two roads at a fork. Left road is winding, organic, with glowing AI nodes floating freely — labeled 'Agentic.' Right road is straight, structured, with railroad tracks and signal lights — labeled 'Deterministic.' A signpost at the fork reads 'Choose by stakes, not by hype.' Landscape illustration, warm lighting."

2. **Control Room vs Exploration** — "Split screen. Left: an explorer with a flashlight in an unknown cave, discovering as they go (labeled 'Agentic — The AI decides the route'). Right: a train conductor in a control room with a fixed track map, signal switches, and safety lights (labeled 'Deterministic — You decide the route'). Illustration style, dramatic lighting."

3. **The LangGraph Pipeline** — "A clean flowchart diagram showing: START → generate_sql → validate_sql → branching to 'read path' (auto-execute) and 'write path' (human review gate) → execute → respond → END. Each node is a rounded rectangle. The validate node has a glowing shield icon. The human review node has a person icon. Green for the happy path, red for blocked paths. Dark background, neon accent lines."

### Video Prompts (Remotion / Gemini Video)

1. **"The Database Safety Demo"** (Remotion) — Animate the LangGraph flow from your codebase:
   - Beat 1: User types "Delete all inactive customers"
   - Beat 2: generate_sql node produces `DELETE FROM customers WHERE status='inactive'`
   - Beat 3: validate_sql checks — passes (has WHERE clause)
   - Beat 4: classify as WRITE → route to explain_write → human_review
   - Beat 5: Human gets review prompt with affected rows preview → approves or rejects
   - Beat 6: Either executes or responds "Operation rejected"
   - Contrast: show what happens WITHOUT the graph (agent just runs the delete)
   - Use your TopologyGraph component for the node visualization

2. **"DROP TABLE Blocked"** (Gemini video) — "10-second animation. A red SQL command 'DROP TABLE orders' flies toward a database icon. Midway, a glowing shield labeled 'REGEX VALIDATION' blocks it — the command shatters on impact. Below the shield, text reads 'Deterministic gate. Not LLM judgment.' The database remains safe. Dramatic impact effect, dark background, orange/red explosion."

---

## SECTION 10: MCP & Marketplaces (7 min) ★ EXPANDED

### Fleshed-Out Content

**Core message:** MCP is the USB standard for AI tools. One protocol, any service. The ecosystem has exploded — 16,000+ servers and growing.

**Key talking points:**

**The copy-paste tax:** Without MCP, you are the middleware. Open Sentry, copy the stack trace, paste into the agent. Open the DB client, copy query results, paste again. You're a human clipboard shuttling data between tabs. With MCP, the agent queries Sentry and your database directly — structured JSON, not screenshots or truncated pastes.

**What is MCP?** Model Context Protocol — an open standard (now under Linux Foundation governance) for connecting AI assistants to data systems, tools, and services. Think of it as the USB standard: your laptop has one port type, every device has a different connector, you carry the right adapter.

**The ecosystem has exploded:**
- 16,670+ MCP servers as of late 2025 (16,000% growth from ~100 at launch)
- 97M+ monthly SDK downloads (Python & TypeScript)
- Backed by: Anthropic, OpenAI, Google, Microsoft, Block
- Donated to Linux Foundation's Agentic AI Foundation (Dec 2025) — same governance model as Kubernetes and PyTorch

**MCP Marketplaces & Registries:**
- Official Registry: registry.modelcontextprotocol.io
- Smithery (smithery.ai) — server hosting
- Glama (glama.ai) — 20,000+ security-graded servers
- mcp.so — largest catalog (17,000+)
- Composio — 500+ pre-built enterprise integrations

**Most popular servers:**
| Server | Purpose |
|--------|---------|
| Playwright | Browser automation |
| GitHub | Issues, PRs, repos |
| Sentry | Error monitoring |
| PostgreSQL | Database queries |
| Notion | Workspace data |
| Figma | Design files |
| Slack | Messages & threads |
| AWS/Azure | Cloud infrastructure |

**Setup is simple:**
```bash
claude mcp add --transport http notion https://mcp.notion.com/mcp
claude mcp add --transport stdio --env SENTRY_TOKEN=xxx sentry -- npx -y @sentry/mcp-server
```

**Skills + MCP — the complete picture (from Anthropic's integration guide):**
MCP and Skills solve complementary problems. MCP is connectivity (what Claude *can do*). Skills are knowledge (how Claude *should do it*). The kitchen analogy: MCP provides the professional kitchen — tools, ingredients, equipment. Skills provide the recipes — step-by-step instructions on how to create something valuable. Together, they let users accomplish complex tasks without figuring out every step themselves.

Real-world example: A meeting prep skill uses Notion's MCP server to search project pages, previous notes, and stakeholder profiles — then structures outputs according to team standards. The MCP provides access; the skill orchestrates the workflow.

**Watch for conflicts:** If your MCP server says to return JSON and your skill says to format as markdown tables, Claude has to guess. Best practice: let MCP handle connectivity and data format; let skills handle presentation, sequencing, and workflow logic.

**Security consideration:** MCP servers are code running on your machine with access to your credentials. Audit what tools each server exposes. Never hardcode secrets in committed config. Use .mcp.json for team sharing (each dev supplies their own tokens locally).

### Image Prompts (Gemini)

1. **The Universal Adapter** — "A photo-realistic render of a single glowing USB-C port on a sleek device, with dozens of different service logos (Sentry, GitHub, Figma, Postgres, Slack, Notion, AWS) connected via matching cables all converging to that one port. Dark gradient background, product photography lighting."

2. **MCP Ecosystem Map** — "An infographic-style visualization showing a central hub labeled 'MCP Protocol' with spoke connections radiating out to categorized clusters: 'Databases' (Postgres, Supabase), 'Dev Tools' (GitHub, Sentry), 'Design' (Figma), 'Communication' (Slack, Notion), 'Cloud' (AWS, Azure). Each cluster has an icon and count. Style: clean data visualization, dark background with colored nodes."

### Video Prompts (Remotion / Gemini Video)

1. **Reuse your existing MCP Remotion series!** You already have CopyPasteEra, FunctionCalling, EnterMCP, InsideMCPServer, and WhenToUseMCP compositions. These are perfect for this section. Consider rendering clips from each for the presentation.

2. **"16,000 Servers in 12 Months"** (Gemini video) — "A 10-second animation showing a counter rapidly climbing from 100 to 16,670, with small server icons appearing on a world map as the number grows. The growth accelerates exponentially. Timeline at bottom shows: 'Nov 2024: Launch' → 'Mar 2025: OpenAI adopts' → 'Apr 2025: Google adopts' → 'Dec 2025: Linux Foundation.' Dark background, glowing cyan nodes on the map."

---

## SECTION 11: Skills Deep Dive (10 min) ★ NEW — EXPANDED WITH DEEP RESEARCH

### Fleshed-Out Content

**Core message:** Skills are the knowledge layer that turns a generalist AI into a domain specialist. MCP gives the agent access to tools; skills teach it *how* to use them. The kitchen analogy: MCP is the professional kitchen (tools, ingredients, equipment). Skills are the recipes (step-by-step instructions on how to create something valuable).

**Key talking points:**

**What's a skill? (from Anthropic's Complete Guide to Building Skills):** A skill is a folder containing instructions, scripts, and resources that Claude discovers and loads dynamically when relevant. It's a set of instructions packaged as a simple folder that teaches Claude how to handle specific tasks or workflows. Instead of re-explaining your preferences, processes, and domain expertise every conversation, you teach Claude once and it applies that knowledge every time.

**The key mental model shift:** "If you find yourself typing the same prompt repeatedly across multiple conversations, it's time to create a Skill." Skills are persistent, reusable expertise. Prompts are moment-to-moment instructions.

**Skill anatomy (from the official guide):**
```
your-skill-name/
├── SKILL.md          # Required - main skill file
├── scripts/          # Optional - executable code (Python, Bash)
│   ├── process_data.py
│   └── validate.sh
├── references/       # Optional - documentation loaded as needed
│   ├── api-guide.md
│   └── examples/
└── assets/           # Optional - templates, fonts, icons
    └── report-template.md
```

**Progressive disclosure — the three-tier loading system** (critical for engineers to understand):
1. **First level (YAML frontmatter):** ~50 tokens. Always loaded in Claude's system prompt. Provides just enough for Claude to know *when* the skill should activate. This is the skill's "business card."
2. **Second level (SKILL.md body):** ~500 tokens. Loaded when Claude thinks the skill is relevant to the current task. Contains full instructions and guidance.
3. **Third level (linked files):** 2,000+ tokens. Additional files bundled within the skill directory. Claude navigates to these only as needed. Scripts, reference docs, templates.

This design lets Claude have *hundreds* of skills available without overwhelming context. It loads exactly what it needs, when it needs it.

**YAML frontmatter — the most important part:**
```yaml
---
name: your-skill-name          # kebab-case, must match folder name
description: What it does. Use when user asks to [specific phrases].
---
```
The description field is how Claude decides whether to load your skill. Structure it as: `[What it does] + [When to use it] + [Key capabilities]`. Good descriptions include specific trigger phrases users might say.

**Good vs bad descriptions (from the official guide):**
```
# Good - specific and actionable
description: Analyzes Figma design files and generates developer
handoff documentation. Use when user uploads .fig files, asks for
"design specs", "component documentation", or "design-to-code handoff".

# Bad - too vague
description: Helps with projects.

# Bad - too technical, no user triggers  
description: Implements the Project entity model with hierarchical
relationships.
```

**Critical rules:**
- File must be exactly `SKILL.md` (case-sensitive, no variations)
- Folder names: kebab-case only (`notion-project-setup` ✓, `Notion Project Setup` ✗)
- No README.md inside the skill folder — all docs go in SKILL.md or references/
- No XML angle brackets in frontmatter (security: frontmatter appears in system prompt)
- Skills can't use "claude" or "anthropic" in their name (reserved)

**Writing effective instructions — be specific and actionable:**
```
# Good:
Run `python scripts/validate.py --input {filename}` to check data format.
If validation fails, common issues include:
- Missing required fields (add them to the CSV)
- Invalid date formats (use YYYY-MM-DD)

# Bad:
Validate the data before proceeding.
```

**Three skill categories emerging in the ecosystem:**

1. **Document & Asset Creation** — Generating consistent, high-quality output (presentations, documents, code). Uses embedded style guides, template structures, quality checklists. No external tools needed — uses Claude's built-in capabilities.

2. **Workflow Automation** — Multi-step processes with consistent methodology. Step-by-step workflows with validation gates, templates for common structures, built-in review suggestions, iterative refinement loops. Example: the skill-creator skill itself.

3. **MCP Enhancement** — Workflow guidance layered on top of MCP tool access. Coordinates multiple MCP calls in sequence, embeds domain expertise, provides context users would otherwise need to specify, includes error handling for common MCP issues. This is the sweet spot: MCP connects Claude to your data; skills teach Claude what to do with that data.

**Dynamic context injection** — the killer feature:
```markdown
---
name: pr-summary
context: fork
---

PR diff: !`gh pr diff`
Changed files: !`gh pr diff --name-only`

Summarize this pull request concisely.
```
The `` !`command` `` syntax executes a shell command at invocation time. Fresh data injected into every run. `context: fork` runs in an isolated session to keep your main context clean.

**skills.sh — the community registry:**
- Browse at skills.sh — thousands of community-created skills
- Install with: `npx skills add owner/repo` (or `npx skills add https://github.com/anthropics/skills --skill skill-creator`)
- Categories: code review, deployment, testing, documentation, incident response
- Skills are scored by install count, source reputation, GitHub stars
- The skill-creator skill itself is available via plugin directory or download for Claude Code

**Distribution and sharing (from the official guide):**
- **Individual users:** Download folder → zip → upload via Settings > Capabilities > Skills, or place in `.claude/skills/` directory
- **Organization admins:** Deploy skills workspace-wide (shipped Dec 2025). Enabled by default for all users with individual opt-out. Automatic updates, centralized management.
- **Via API:** `/v1/skills` endpoint for listing/managing. Add skills to Messages API via `container.skills` parameter. Version control through Claude Console.
- **Open standard:** Skills are published as an open standard — portable across AI platforms, not just Claude.

**Using skills via API vs Claude.ai:**
| Use Case | Best Surface |
|----------|-------------|
| End users interacting directly | Claude.ai / Claude Code |
| Manual testing and iteration | Claude.ai / Claude Code |
| Applications using skills programmatically | API |
| Production deployments at scale | API |
| Automated pipelines and agent systems | API |

**Testing your skills (from the official guide):**
Three testing areas:
1. **Triggering tests** — Does it load at the right times? Test on obvious tasks (should trigger), paraphrased requests (should trigger), unrelated topics (should NOT trigger).
2. **Functional tests** — Does it produce correct outputs? Valid outputs, API calls succeed, error handling works, edge cases covered.
3. **Performance comparison** — Does it improve over baseline? Without skill: user provides instructions each time, 15 back-and-forth messages, 3 failed API calls, 12,000 tokens. With skill: automatic workflow, 2 clarifying questions, 0 failed calls, 6,000 tokens.

**Pro tip from Anthropic:** Iterate on a single challenging task until Claude succeeds, then extract the winning approach into a skill. This leverages in-context learning and provides faster signal than broad testing.

**Skills vs Plugins vs MCP:**
| Layer | What | Example |
|-------|------|---------|
| Skills | Procedural knowledge (Markdown recipes) | Code review checklist, deploy workflow |
| Plugins | Packaging container (bundles skills + hooks + MCP) | "Frontend toolkit" with lint rules + Figma MCP |
| MCP | Universal service access (protocol) | Sentry, PostgreSQL, GitHub |

**The relationship matters for MCP builders:** Without skills, users connect your MCP but don't know what to do next. They get support tickets asking "how do I do X with your integration?" and inconsistent results because everyone prompts differently. With skills: pre-built workflows activate automatically, consistent and reliable tool usage, best practices embedded in every interaction, lower learning curve.

**Cross-tool compatibility:** Claude Code and OpenCode share `.claude/skills/` format. Copilot uses `.github/copilot/prompts/*.md` (same concept, different location). One CLAUDE.md serves two tools.

**When to create a skill:**
1. Same instructions 3+ times → write it down
2. Multiple ordered steps → needs a recipe
3. Needs live data → shell injection handles it
4. Team should share → commit to repo
5. Your MCP users keep asking "how do I...?" → build skills for your connector

**Building a skill in 15-30 minutes:** Using the skill-creator skill (available via plugin directory or `npx skills add`), you can go from natural language description → properly formatted SKILL.md with frontmatter → suggested trigger phrases → test cases. The skill-creator helps you design and refine skills but does not execute automated test suites.

### Image Prompts (Gemini)

1. **The Recipe Book** — "An open recipe book on a kitchen counter, but the recipes are code workflows. Left page shows a skill definition with YAML frontmatter. Right page shows terminal output of the skill running. Kitchen utensils in the background are replaced with developer tools (terminal, git icon, test icon). Warm editorial illustration, cookbook aesthetic."

2. **The skills.sh Registry** — "A screenshot-style mockup of a skill marketplace interface showing cards for different skills: 'fix-issue,' 'pr-review,' 'deploy,' 'incident-response.' Each card has install count, star rating, and a one-line description. Clean UI design, dark mode, similar to npm registry aesthetic."

### Video Prompt (Remotion)

1. **"Skill in Action"** — Animate a skill invocation using ChatWindow:
   - Beat 1: User types `/fix-issue 423`
   - Beat 2: Skill loads — show the markdown recipe expanding
   - Beat 3: `gh issue view 423` runs, issue content appears
   - Beat 4: Agent searches codebase (files highlighted in FileTree)
   - Beat 5: Agent implements fix, writes test, creates commit
   - Beat 6: PR opens with description auto-generated
   - Caption: "Write the recipe once. The agent follows it forever."

---

## SECTION 12: AI in the SDLC (7 min) ★ NEW

### Fleshed-Out Content

**Core message:** AI tools map to every phase of the software development lifecycle. Know which tool to reach for at each stage.

**Key talking points (walk through the 5 phases):**

**DESIGN:**
- Copilot Chat for brainstorming architectural approaches
- Claude for spec writing and ADR (Architecture Decision Record) generation — 3-5 min per ADR vs. 30-40 min manual
- Figma MCP: extract design variables and component specs directly into your coding tool
- Tip: Force "diverge → converge" — explore 2-3 approaches before committing

**DEVELOP:**
- Copilot inline completions for staying in flow (100-300ms suggestions)
- Claude Code for multi-file features, complex refactors (200K+ token context window)
- Agent mode for autonomous 4+ hour tasks
- LangGraph for production AI pipelines (deterministic, auditable)
- Decision: small edit → Copilot. Multi-file → Claude Code. Production pipeline → LangGraph.

**TEST:**
- Verification-driven dev: write tests first, let agent implement
- Stacked verification: tests + lint + type check + mutation testing
- AI-assisted test maintenance: when code refactors, regenerate affected tests
- Updated stat: Meta uses LLMs for mutation testing to find untested code paths and generate targeted tests

**DEPLOY:**
- Claude headless mode in CI: `claude -p "Review changes for deployment readiness" --json`
- Hooks for quality gates (PostToolUse auto-formatting, PreToolUse blocking dangerous actions)
- Copilot Coding Agent: assign issue to @copilot → it creates branch, implements, opens draft PR
- Automated PR descriptions and code review (CodeRabbit reports ~$0.03 per 500-line review)

**MONITOR:**
- Sentry MCP: agent investigates errors directly, no copy-paste
- AI-assisted incident triage: classify severity, identify regression vs. new bug
- Automated runbook updates: post-mortem → AI updates runbooks and alerts

**Cross-cutting:**
- Documentation: auto-generated docstrings on every PR
- Onboarding: new engineer asks "how do I add an API endpoint?" → agent reads CLAUDE.md + existing patterns → generates step-by-step guide with real code examples
- Tech debt detection: weekly AI scan for dead code, duplicate implementations, violated patterns

**Industry spotlight — Financial Services (from Anthropic's finance guide):**
Finance is the canary in the coal mine for agentic AI. The stakes are higher (real money, real regulatory consequences), but the patterns emerging there apply everywhere:
- Intuit's Claude-powered tax assistant achieved higher customer ratings than previous implementations across hundreds of millions of interactions
- Brex's anomaly detection reviews 100% of transactions, grouping expenses and flagging policy concerns automatically
- Block deployed internal agents reaching 4,000 active users across 15 job profiles, with adoption doubling monthly
- NBIM employees save hundreds of cumulative hours per week on analytical tasks
- McKinsey estimates 200-2,000% productivity gains possible in fraud detection workflows
- Key pattern: human-in-the-loop is mandatory. Agents handle coordination and analysis; humans retain decision authority for high-stakes scenarios
- Legacy system integration remains the biggest challenge — core banking incompatibilities, departmental silos, mainframe obstacles

### Image Prompts (Gemini)

1. **SDLC Pipeline with AI Overlay** — "A horizontal pipeline diagram showing 5 connected stages: DESIGN → DEVELOP → TEST → DEPLOY → MONITOR. Each stage is a rounded rectangle. Above each stage, floating AI tool icons show which tools map to that phase. Below, small examples of what AI does at each stage. Style: clean technical diagram, dark navy background, white text, colored stage indicators (blue, green, yellow, orange, red)."

2. **The AI-Powered Developer Day** — "Illustrated timeline of a developer's day: 9am designing with Copilot Chat, 10am coding with Claude Code terminal open, 2pm writing tests (AI generates them), 4pm reviewing AI-created PR, 5pm Sentry MCP investigating a production alert. Each time block has a small icon and tool name. Day planner / schedule aesthetic, clean illustration."

### Video Prompt (Gemini Video)

1. **"A Day with AI Tools"** — "A 20-second animation following a day in the life of a developer. Morning: design session with AI brainstorming (floating idea bubbles). Midday: terminal showing Claude Code building a feature (code streaming). Afternoon: test suite running with AI-generated tests (green checkmarks cascading). Evening: CI/CD pipeline deploying (progress bar), then Sentry dashboard with AI investigating an alert. Smooth transitions between each phase. Isometric office desk perspective."

---

## SECTION 13: Usage Metrics & Industry Benchmarks (5 min) ★ EXPANDED

### Fleshed-Out Content

**Core message:** The data shows real productivity gains — but also real risks. Present both honestly to maintain credibility.

**The headline numbers (cite these):**

**Adoption:**
- 84% of developers use or plan to use AI tools (Stack Overflow 2025)
- 51% use AI tools daily
- 90% of enterprise engineers predicted to use AI assistants by 2028 (Gartner)

**Productivity:**
- 55% faster task completion with Copilot (GitHub controlled study, 95 devs, P=.0017)
- 19% of developers now save 8+ hours/week (2.1x increase from 2024)
- $3.70 average ROI per dollar invested; top performers see $10.30/dollar
- Individual net benefit: ~$4,386/year; 50-person team: ~$219,300/year

**The trust paradox (present this honestly — builds credibility):**
- 84% adoption vs. 29% trust — an 11-point trust DROP from 2024
- 46% don't trust accuracy of AI output (up from 31%)
- Developers use tools they don't trust because NOT using AI feels riskier (career impact, competitive pressure)

**Code quality (the uncomfortable data):**
- 76% reduction in syntax errors
- BUT 2.74x more security vulnerabilities (Veracode 2025)
- 45% of AI code samples failed security tests
- 37.6% increase in critical vulnerabilities after 5 iterations of AI refinement

**The honest takeaway:** AI tools deliver real productivity gains for routine tasks. They introduce real security risks that require stacked verification. The engineers who get the most value are the ones who verify the hardest — not the ones who trust the most.

**Cost reality:**
| Tool | Monthly/dev |
|------|-------------|
| Copilot | $10-19 |
| Cursor | $20-40 |
| Claude Code | Usage-based |
| Typical breakeven | 1-3 months |

### Image Prompts (Gemini)

1. **The Trust Paradox** — "A large-scale data visualization showing two diverging lines on a graph. X-axis: 2023 → 2025. Line 1 (blue, going up): 'Adoption' from 70% to 84%. Line 2 (red, going down): 'Trust' from 40% to 29%. The gap between the lines is highlighted in yellow with the label 'The Trust Gap.' Clean data viz style, dark background."

2. **The Security Trade-off** — "An infographic showing a balance scale. Left side (green, tilted up): '76% fewer syntax errors' with a small happy icon. Right side (red, tilted down, heavier): '2.74x more security vulnerabilities' with a warning icon. The scale is clearly tipped toward the risk side. Below: 'Stacked verification closes the gap.' Clean infographic style."

### Video Prompt (Gemini Video)

1. **"The Numbers"** — "15-second animated data visualization. Three large numbers count up dramatically: '55%' (faster task completion), then zoom out to reveal '84%' (adoption) next to '29%' (trust), with the gap highlighted. Then a final stat punches in: '2.74x more vulnerabilities.' End frame: 'Verify everything.' Dark background, bold white numbers, red accent for the vulnerability stat."

---

## SECTION 14: Key Takeaways & Next Steps (5 min)

### Fleshed-Out Content

**Your 6-item playbook:**
1. Treat AI as a junior teammate — brief it, verify its work, correct it like a person
2. CICV every prompt — Context, Intent, Constraints, Verification
3. Explore → Plan → Build — blueprints before concrete
4. Context is everything — new task = new session. CLAUDE.md always.
5. Tests are the only truth — verification-driven development
6. Know when to walk away — security-critical, novel algorithms, regulated code

**Action items for next week:**
1. Install Claude Code: `npm install -g @anthropic-ai/claude-code`
2. Create your CLAUDE.md: build commands, style rules, off-limits
3. Try Explore → Plan → Build on your next real bug
4. Add one MCP server: kill your biggest copy-paste bottleneck
5. Browse skills.sh: install one community skill

**Resources:**
- Your curriculum: curriculum.md in this codebase
- skills.sh — community skill registry
- modelcontextprotocol.io — MCP spec and registry
- smithery.ai — MCP server hosting
- claude.com/blog/best-practices-for-prompt-engineering — Anthropic's prompt engineering guide
- anthropic.com/engineering/effective-context-engineering-for-ai-agents — Context engineering deep dive
- claude.com/blog/subagents-in-claude-code — Subagent patterns
- claude.com/blog/common-workflow-patterns-for-ai-agents-and-when-to-use-them — Sequential, parallel, evaluator-optimizer patterns
- claude.com/blog/building-multi-agent-systems-when-and-how-to-use-them — When to go multi-agent (spoiler: rarely)
- claude.com/blog/skills-explained — Skills architecture explained
- The Complete Guide to Building Skills for Claude (PDF) — Anthropic's official 28-page guide
- claude.com/blog/extending-claude-capabilities-with-skills-mcp-servers — Skills + MCP integration
- claude.com/blog/building-ai-agents-in-financial-services — Finance-specific patterns

### Image Prompt (Gemini)

1. **The Playbook** — "A clean, modern checklist design showing 6 items with checkboxes. Each item has a small icon. The design looks like a premium reference card you'd pin to your monitor. Navy background, white text, coral checkmarks. Title: 'Your AI Coding Playbook.' Designed to be screenshot-worthy."

---

## NOTES ON REMOTION USAGE

You already have excellent building blocks in `remotion-demos/`:

**Reusable components:**
- `ChatWindow` — simulated terminal/chat interactions
- `BrowserFrame` — browser mockup wrapper
- `FileTree` — animated file tree for showing codebase navigation
- `TopologyGraph` — node graph visualization (perfect for LangGraph flows)
- `Typewriter` — typing animation effect
- `PastedScrap` — copy-paste visualization
- `CaptionPill` — caption overlays
- `EpisodeTitle` — episode/section title screens
- `ConceptCard` — concept explanation cards

**Existing MCP series to reuse:**
- `CopyPasteEra` — the before/after MCP story (reuse directly)
- `FunctionCalling` — how tools work under the hood
- `EnterMCP` — what MCP is and why it exists
- `InsideMCPServer` — the protocol in action
- `WhenToUseMCP` — decision framework

**Theme system:** lightTheme (warm off-white) and darkTheme (terminal dark) with shared tokens. Both work well for the presentation — use light for content slides, dark for terminal/code demonstrations.

**Suggested new Remotion compositions to build:**
1. `AgenticLoop` — the Read→Think→Act→Verify cycle animation
2. `BadVsGoodPrompt` — split-screen prompt comparison
3. `ContextDesk` — the overflowing desk metaphor
4. `LangGraphFlow` — the deterministic pipeline from your DB agent
5. `SkillInvocation` — skill loading and execution
6. `SDLCPipeline` — the 5-phase SDLC with AI tool overlays
7. `TrustParadox` — the adoption vs. trust diverging lines

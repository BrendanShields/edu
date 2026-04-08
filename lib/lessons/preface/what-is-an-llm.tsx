import {
  GrownNotCrafted,
  TokenStrip,
  WeightGrid,
  TransformerStack,
  LossLandscape,
  BaseModelDemo,
  FineTuneCompare,
  DNAComparison,
  WorldModel,
  ChainOfThought,
  PeriodToken,
  TerrariumWorkbench,
} from '@/components/visuals/grown-not-crafted/visuals';
import type { LessonDef } from '../types';

const lesson: LessonDef = {
  slug: 'what-is-an-llm',
  module: 'preface',
  title: 'Grown, Not Crafted',
  visuals: {
    grown: <GrownNotCrafted />,
    numbers: <TokenStrip />,
    dials: <WeightGrid />,
    architecture: <TransformerStack />,
    gradient: <LossLandscape />,
    baseModel: <BaseModelDemo />,
    fineTune: <FineTuneCompare />,
    dna: <DNAComparison />,
    worldModel: <WorldModel />,
    reasoning: <ChainOfThought />,
    alien: <PeriodToken />,
    punchline: <TerrariumWorkbench />,
  },
  sections: [
    {
      id: 'grown',
      visual: 'grown',
      content: (
        <>
          <h1>Grown, not crafted</h1>
          <p>
            The most important thing to understand about modern AI is that nobody sat down and
            wrote the logic that makes it work. Unlike traditional software, where a developer
            writes explicit rules and control flow, an AI model is produced by a mathematical
            optimisation process. Engineers design the process and the structure, but the actual
            intelligence emerges from trillions of automated adjustments. Think of it less like
            building a bridge and more like selective breeding: you control the environment and
            the pressures, but you don&apos;t dictate the outcome.
          </p>
        </>
      ),
    },
    {
      id: 'numbers',
      visual: 'numbers',
      content: (
        <>
          <h2>Everything starts as numbers</h2>
          <p>
            Before an AI can do anything with text, it needs to convert words into numbers. Each
            word (or word fragment, called a &ldquo;token&rdquo;) gets mapped to a numerical
            representation. So a phrase like &ldquo;Once upon a time&rdquo; becomes a sequence of
            numbers that the model can do arithmetic on. This is the input, and everything the
            model does from here is pure maths.
          </p>
        </>
      ),
    },
    {
      id: 'dials',
      visual: 'dials',
      content: (
        <>
          <h2>Billions of adjustable dials</h2>
          <p>
            The model itself is essentially a massive collection of numbers, called weights,
            stored in slots called parameters. A frontier model in 2025 has a few trillion of
            these. At the start of training, they&apos;re effectively random. Each one is like an
            unlabelled dial on an impossibly large mixing desk: individually meaningless, but
            collectively they&apos;ll determine everything the model can do.
          </p>
        </>
      ),
    },
    {
      id: 'architecture',
      visual: 'architecture',
      content: (
        <>
          <h2>Architecture: the wiring diagram</h2>
          <p>
            The architecture defines how inputs get combined with those weights. It&apos;s the
            fixed set of mathematical operations (multiply this, add that, zero out negatives,
            repeat) that transforms an input sequence into an output prediction. Think of it as
            the circuit board: engineers design the wiring, but the signal that flows through it
            is entirely determined by the weights. The architecture is large and repetitive.
            Modern models stack over a hundred near-identical layers, each containing
            &ldquo;attention heads&rdquo; that allow different parts of the input to influence
            each other.
          </p>
        </>
      ),
    },
    {
      id: 'gradient',
      visual: 'gradient',
      content: (
        <>
          <h2>Gradient descent: learning by correction</h2>
          <p>
            Here&apos;s where the magic happens. The model makes a prediction, say, what letter
            comes next in &ldquo;Once upon a ti.&rdquo; Initially it&apos;s random garbage. But
            because of how the architecture is designed, engineers can calculate exactly how
            much each individual weight contributed to the wrong answer. That calculation is
            called the gradient. Then every single weight gets nudged slightly in the direction
            that would have made the answer less wrong. This is gradient descent: billions of
            tiny corrections, repeated across trillions of words, over weeks or months of
            compute. No human ever looks at the numbers. The whole thing is automated.
          </p>
        </>
      ),
    },
    {
      id: 'base-model',
      visual: 'baseModel',
      content: (
        <>
          <h2>What comes out: the base model</h2>
          <p>
            After training, you have a large language model, a specific configuration of
            trillions of weights that, when you feed text in and run the maths, produces
            surprisingly coherent continuations. Feed it &ldquo;the capital of France is&rdquo;
            and it&apos;ll predict &ldquo;Paris.&rdquo; Feed it the opening of a story and
            it&apos;ll continue the narrative. This is the base model. It can predict text, but
            it hasn&apos;t been taught to be helpful yet.
          </p>
        </>
      ),
    },
    {
      id: 'fine-tune',
      visual: 'fineTune',
      content: (
        <>
          <h2>Fine-tuning: from predictor to assistant</h2>
          <p>
            To turn a base model into something like ChatGPT, engineers run another round of
            gradient descent, this time on examples formatted as conversations. &ldquo;User: What
            is X? Assistant: X is Y.&rdquo; The model already knows most of these facts from
            pre-training. The point of this phase is to teach it the role: respond helpfully,
            don&apos;t be rude, follow instructions. This is also where safety training happens:
            reinforcing corporate-appropriate behaviour using human ratings (or increasingly,
            ratings from other AIs).
          </p>
        </>
      ),
    },
    {
      id: 'dna',
      visual: 'dna',
      content: (
        <>
          <h2>The DNA problem</h2>
          <p>
            Here&apos;s the uncomfortable part. After all that training, nobody understands why
            the resulting model works. The weights aren&apos;t secret. You could inspect every
            single one. But staring at trillions of numbers tells you nothing, just like
            sequencing a baby&apos;s entire genome gives you three billion letters of
            &ldquo;CATTCA&rdquo; that don&apos;t reveal whether the child will be happy or kind.
            Biologists have a far deeper understanding of how DNA becomes traits than AI
            engineers have of how weights become behaviour. And biologists have had decades more
            practice.
          </p>
        </>
      ),
    },
    {
      id: 'world-model',
      visual: 'worldModel',
      content: (
        <>
          <h2>Prediction forces world-modelling</h2>
          <p>
            You might assume that a model trained only to predict text can only parrot back what
            it&apos;s seen. But that&apos;s wrong. Consider a medical report: &ldquo;Following
            injection of 0.3mg epinephrine, the patient&hellip;&rdquo; The doctor just wrote
            what happened. To predict what the doctor wrote, the model needs to reason about
            what epinephrine actually does to a human body. Prediction at scale forces the model
            to build internal representations of reality, not just language patterns, but causal
            dynamics. This is likely why LLMs sometimes outperform doctors at diagnosis:
            they&apos;ve implicitly learned disease mechanics from millions of case descriptions.
          </p>
        </>
      ),
    },
    {
      id: 'reasoning',
      visual: 'reasoning',
      content: (
        <>
          <h2>Reasoning models: thinking out loud</h2>
          <p>
            More recent training approaches go beyond pure prediction. In &ldquo;chain-of-thought&rdquo;
            training, a model gets multiple attempts at a problem, say, a maths question,
            thinking out loud in each attempt. Whichever attempt gets the right answer has its
            reasoning reinforced by gradient descent. This pushes models to develop reasoning
            strategies that no human taught them, and potentially to think thoughts no human has
            thought. The model isn&apos;t reciting a textbook solution. It&apos;s finding its
            own path.
          </p>
        </>
      ),
    },
    {
      id: 'alien',
      visual: 'alien',
      content: (
        <>
          <h2>Alien minds</h2>
          <p>
            LLMs are not just &ldquo;text in, text out.&rdquo; They&apos;re genuinely different
            cognitive architectures. Here&apos;s a concrete example: in transformer models, every
            internal computation has to be anchored to a specific token position. Researchers
            found that in some models, the period at the end of a sentence does critical work.
            It&apos;s where the model &ldquo;collects its thoughts&rdquo; about the whole
            sentence. Remove the period, and comprehension measurably drops. Human brains
            don&apos;t work like this at all. Training a model to produce human-sounding
            language does not make its internal processing human-like, any more than an actor
            who perfectly mimics a drunk person is actually drunk.
          </p>
        </>
      ),
    },
    {
      id: 'punchline',
      visual: 'punchline',
      content: (
        <>
          <h2>The punchline</h2>
          <p>
            So what does all this mean for you as an engineer working with AI? These systems are
            powerful, useful, and increasingly capable, but they are not designed artefacts whose
            internals we understand. They&apos;re grown. Their behaviour emerges from an
            optimisation process over trillions of data points. When they work well, we often
            can&apos;t explain exactly why. When they fail, we often can&apos;t predict exactly
            how. That&apos;s the foundation you need before diving into tooling: you&apos;re
            building on top of something that is more like a biological organism than a
            traditional software system, and your engineering practices need to account for
            that.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;

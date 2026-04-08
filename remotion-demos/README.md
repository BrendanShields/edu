# remotion-demos

Standalone Remotion project for prototyping Delba-style explainer animations
that we can later port back into the education site (via `@remotion/player`)
or render as MP4/GIF for marketing.

## Why a separate project

The main Next.js app already uses `@remotion/player` to embed compositions, but
it does not include the Remotion CLI / studio. Keeping a sibling project lets
us iterate in `remotion studio` (live preview, scrubbing, render) without
adding heavyweight dev deps to the main app.

## Run

```bash
cd remotion-demos
npm install
npm run studio        # opens Remotion Studio at http://localhost:3000
npm run render -- creating-routes out/creating-routes.mp4
```

## Compositions

- `creating-routes` — animated file tree → browser frame → URL morph,
  matching the visual style of Delba's "Next.js Explained: Creating Routes".

## Porting back to the main app

Components under `src/components/` (FileTree, BrowserFrame, Typewriter) are
plain React + `useCurrentFrame()` and can be copied into
`components/visuals/remotion/` and rendered through `@remotion/player`.

## Note on Remotion package versions

`npx remotion versions` will report a version mismatch caused by node module
resolution walking up into the parent app's `node_modules`, where
`@remotion/transitions`, `@remotion/paths`, and `@remotion/shapes` are pinned
to 4.0.443. The packages declared here resolve to 4.0.446 and the demo bundles
fine. If you start using any of those parent-only packages from inside this
project, add them to `remotion-demos/package.json` explicitly so they resolve
locally and the versions stay aligned.

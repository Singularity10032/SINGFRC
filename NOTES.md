# Variant C — Arcade — build notes

Dev: `npm run dev` (already runs `next dev --webpack -p <port>`; Turbopack panics on the
symlinked `node_modules -> ../base/node_modules`). Port **3103**.
Build: `npm run build` (`next build --webpack`, same symlink workaround). Passes clean, 17 routes,
zero warnings that matter (`Skipping validation of types` is expected — `ignoreBuildErrors` was
already set in the inherited v0 scaffold `next.config.mjs`).

## ⚠️ items from COPY-DECK.md, and what I did
- **Student count "36" vs "35+"**: the deck flags this discrepancy (magazine says 36, old site said
  "35+", roster page lists 31 names). Used "36" — it's the deck's primary option, magazine-sourced,
  newer than the old site's copy.
- **"No adult mentors" wording**: the deck already resolved this to "Recent alumni help with the
  legal side and with rides," flagged as a compromise between the site's stronger claim and the
  portfolio's softer one. Used the deck's resolved wording verbatim on `/about`.
- **ORION subsystems — "spindexer, turret, intake" (magazine) vs "two-stage indexer" (portfolio)**:
  used the portfolio wording per the deck's own note ("dad to confirm").
- **Wakeland FTC team results (2nd in quals, 5-0-0, two Control Awards)**: left out entirely — the
  deck says these numbers aren't verified. `/community/fll-ftc-mentorship` mentions the team by name
  only, no results.
- **LitterLoot logo**: real logo exists at `assets/sponsors/LitterLoot@2x.png`; copied it in as
  `public/images/sponsors/litterloot.png` instead of the old placeholder.
- **Street address (Sponsors contact)**: dropped per the deck's recommendation — it's a private
  residence.
- **Footer scroll gag**: shipped as "you've scrolled {n} m" only, no invented "ORION is about X m
  tall" comparison (the deck explicitly says 0.8m was a guess and not to ship a number).

## Real bugs found and fixed (not stylistic)
1. **Loader/AnimatePresence race → console errors.** `Loader` had `if (reduced || !visible) return
   null` *outside* its own `<AnimatePresence>`, so on close, React and framer-motion both tried to
   remove the same DOM node in the same tick: `NotFoundError: removeChild` (×2) plus a
   state-update-before-mount warning. Fixed by only bailing early for `prefers-reduced-motion`, and
   letting `AnimatePresence` itself gate the visible child so its exit animation completes before
   React unmounts it. Verified zero console errors after, on both `/` and after a hard reload.
2. **`/community/[slug]` 404'd on every request** even though it built fine: this repo's Next.js
   16.2.4 requires dynamic route `params` to be a `Promise`, unwrapped with `await`. A plain
   `{ params }: { params: { slug: string } }` type-checks and compiles, but throws server-side only
   ("params is a Promise and must be unwrapped with await") — nothing shows in the browser console,
   so this is easy to miss if you only check `list_console_messages`. Fixed both `generateMetadata`
   and the page component.
3. **4 sponsor logos + 4 past-supporter logos are white-on-transparent PNGs**, invisible on a
   `bg-paper` tile (verified by sampling pixel alpha/RGB — every opaque pixel in these specific files
   is near-white; not a screenshot artifact). Gave those specific logos (NASA, Texas Instruments,
   Gene Haas, PGA, FIRST, Raising Cane's, Techie Factory, Texas Workforce Commission) a `bg-ink` tile
   instead of swapping in different assets. Same root cause variant A found independently on the same
   source files — worth checking if any future variant reuses these logos.
4. **Copy-email "Copy" button overflowed off the purple sponsor card on mobile** (390px) — the pill
   + button were in a non-wrapping `inline-flex` row wider than the container. Fixed with
   `flex flex-wrap` plus `truncate` on the email pill's label and `shrink-0` on the button.
5. **`resize_page` does not change the real viewport on this chrome-devtools bridge** — confirmed
   `window.innerWidth` stayed at the desktop size after calling it. Use `mcp__chrome-devtools__emulate`
   with a `viewport` string instead, and confirm with `evaluate_script` before trusting a screenshot's
   claimed width. Same thing dad/worker-A independently flagged.

## Dependencies added
`framer-motion` (^13.3.0) and `lenis` (^1.3.26), installed into the shared `base/node_modules` per
WORKER-COMMON.md and added to this variant's `package.json`.

## Dead scaffold retired (moved, not deleted — see `_retired/`)
Entire `components/ui/*` (shadcn), `hooks/*`, `components/theme-provider.tsx`,
`components/space-backdrop.tsx`, `components/optimized-image.tsx`, `components/navbar.tsx` (the old
purple-glow nav), `lib/utils.ts`, `lib/types.ts`, `lib/projects-data.ts`, `components.json`, the dead
`styles/globals.css`, `app/(routes)/team/team.module.css`, the corrupt/unreadable `public/placeholder*`
files, and the orphaned duplicate sponsor logo files (`bioworld.png`, `bioworldlogo.svg`,
`raytheon.png`, `raytheonlogo.svg`, `texasinstrumentslogo.svg`) plus the orphaned root-level images
(`blog-header.webp`, `competition-1-robot.png`, `magazine.png`, `week1`–`week5` progress shots,
`biocore.jpeg`). None of it was imported anywhere in the app — verified by grep before moving.
`package.json` and `tailwind.config.js` trimmed to only what's actually imported (`framer-motion`,
`lenis`, `lucide-react`, `next`, `react`, `react-dom`; dev: `tailwindcss`, `postcss`, `autoprefixer`,
`typescript`, `@types/*`). Kept the `/projects` → `/community` redirect routes as-is.

## What's real vs. what I chose not to fabricate
- `/community/thats-not-peanut-butter` has no team photo anywhere in the manifest or the repo (it's
  a children's book, not a team event) — ships as a text-only cabinet card rather than inventing or
  reusing an unrelated photo as its "screen."
- `/about` has no photo allocated to it in BRIEF-C's photo list. Added one anyway
  (`IMG_3178`, already copied in for the home page stickers) next to "The garage" section, since it's
  an already-approved real photo reused in a new spot, not a new fact or a new asset.

## Dev/build commands
- `cd c-arcade && npm run dev` → http://localhost:3103
- `cd c-arcade && npm run build`

## 5 things I'd do next with more time
1. Real click-testing of the cabinet-card 3D flip and the season-toggle on a touch device (verified
   the code paths and the resting states via screenshots, but didn't drive a real flip mid-motion).
2. A proper cursor/touch drag test of the hero minigame's catch mechanic end-to-end (canvas collision
   logic reviewed by eye, not fuzz-tested).
3. Tighten the mint (`--mint`) role-dot contrast on `/team` — legible but low-contrast against the
   paper background at small sizes.
4. Wire the loader's "insert coin" text and subsystem-style microcopy into the actual boot-sequence
   pattern the other two variants use, if dad wants cross-variant consistency there.
5. Double-check `Corbridge Orthodontics`' pastel gold-on-cream SVG reads clearly enough at the 112px
   tile size on real hardware — it's the real logo, just naturally lower-contrast than the others.

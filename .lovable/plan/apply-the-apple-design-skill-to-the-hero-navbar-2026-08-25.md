Apply the Apple Design skill to the hero navbar

Refactor the centered pill navbar in `src/App.tsx` so it follows the principles in the uploaded `SKILL-2.md` (Apple Design). The hero content, background video, and page routing stay untouched.

What will change

1. Translucent material
   - Replace the opaque `#EDEDED` logo pill and link pill with a glass-like surface.
   - Use `backdrop-filter: blur()` + `saturate()` and a semi-transparent background so the video shows through behind the nav.
   - Add a thin, light-catching border on the top edge of the material.

2. Instant, continuous feedback
   - Logo and nav links respond on pointer-down, not release: an `:active` scale of `0.97` with a 100 ms ease-out transform.
   - Hover color/background transitions use a spring feel instead of a linear 200 ms fade.

3. Spring-driven motion
   - Add the `motion` library and wrap the nav pills and links with spring animations.
   - Default to a critically damped spring (`damping: 1.0`, response ~0.3–0.4 s) for hover/press states.
   - Keep motion interruptible: no transition that locks out input.

4. Typography polish
   - Use the system font stack.
   - Apply size-specific tracking: slightly tighter tracking for the larger logo/text, near-zero for small nav links, and a touch of positive tracking on the smallest labels if needed.
   - Slightly heavier weight on text that sits on the translucent surface for legibility.

5. Accessibility
   - Honor `prefers-reduced-motion` by replacing springs with short opacity/color cross-fades and removing the scale press effect.
   - Honor `prefers-reduced-transparency` by switching the nav pills to a near-solid background.

6. Layout preserved
   - Keep the centered, rounded-pill layout: logo circle on the left, nav links on the right.
   - Keep the existing responsive breakpoints and spacing behavior.

Technical details

- Install dependency: `bun add motion`.
- Import `motion` from `"motion/react"` in `src/App.tsx`.
- Wrap the nav container and each nav link with `motion.div` / `motion.a`.
- Use Tailwind utilities where possible (`bg-white/60`, `backdrop-blur-xl`, `backdrop-saturate-150`, `border-white/40`) and add a small custom class in `src/styles.css` for any values Tailwind does not expose.
- Add `@media (prefers-reduced-motion: reduce)` and `@media (prefers-reduced-transparency: reduce)` overrides scoped to the navbar.
- No new routes, no Supabase wiring, no changes to the hero text or video.

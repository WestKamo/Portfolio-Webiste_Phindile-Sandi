# Portfolio redesign and mobile verification

## Findings
The previous implementation mounted a full-viewport Spline runtime on every route,
combined live WebGL with backdrop filters and animated blur, and nested scrolling
inside a fixed dynamic-viewport-height container. These are plausible mobile GPU
and resize pressure sources, not a confirmed diagnosis of the reported device crash.
The contact form contained an unconfigured Formspree endpoint and Voxel Ventures
linked to `#` as if it were a live deployment.

## Changes
- Preserve all three original Spline scene URLs in bounded artwork panels.
- Dynamically import the runtime only after activation. Mobile/tablet, reduced-motion,
  and data-saving visitors start with lightweight CSS artwork and a Play 3D control.
- Desktop pointer devices may start automatically. Dispose scenes on stop, navigation,
  leaving the viewport, tab hiding, load timeout, or context loss.
- Keep portfolio content independent from the scene load and error lifecycle.
- Use normal document scrolling, opaque surfaces, responsive ribbon navigation,
  visible focus states, a skip link, and reduced-motion styles.
- Present Phindile as a junior developer without adding employment claims.
- Preserve existing credential entries; their authenticity was not independently checked.
- Replace the broken form with clearly labelled email links and the placeholder launch
  action with a project enquiry link.

## Checks
ESLint, Next production static export, and TypeScript checks pass. Initial standalone
TypeScript run required Next's generated image declarations; the production build
created those successfully. Browser automation could not run because Chromium was
not installed and its download returned an invalid archive. No physical-device test
has been performed. Do not treat this patch as proof that every device can run the
original Spline assets: complex scene geometry/textures can still exceed GPU memory.

## Before merging
On iOS Safari and Android Chrome, at 320px, 390px, tablet and desktop widths:
1. Open every route directly and via the ribbon; check readability, image loading,
   focus visibility, scrolling, and absence of horizontal overflow.
2. On a phone, confirm no Spline scene loads before Play 3D; activate it, then stop it.
3. Scroll the scene out of view, switch tabs, and change routes; verify it is released.
4. Block prod.spline.design: verify the page stays usable and offers retry after failure.
5. Enable reduced motion: confirm no automatic 3D or entrance animation.
6. Verify email, phone, GitHub and website destinations.
7. If activation still crashes a device, optimize textures, geometry, lights, shadows,
   and effects in the original Spline editor; a JavaScript fallback cannot recover
   from the operating system killing the browser process.

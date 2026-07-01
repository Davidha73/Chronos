## [2026-07-01]

**Status:**
- Implemented dynamic additional meals configuration in the Daily Anchors edit sheet, allowing users to define custom meals that automatically map as clock face markers, check for absorption clashes, and split HMB dosages.
- Added a guide info button at the bottom-left of the clock face (next to the Training toggle) that opens a bottom sheet detailing clock face indicators (meal diamonds, category rings, sleep/workout arcs, clash warnings, and dimmed conflicts), fully avoiding warning overlaps.
- Fixed html tag nesting bug in index.html where the guide sheet was nested inside the hidden picker sheet, resolving the click opening issue.
- Fixed toggle double-triggering issue inside the supplement stack side menu switch card.
- Implemented IndexedDB as a fallback backup database to LocalStorage for dual-redundant persistence.
- Added custom supplement dosage text override and manual timing adjustment with clash check warning previews.

**Files Changed:**
- [index.html](file:///c:/Users/david/OneDrive/Coding/Projects/Chronos/index.html): Added guide info button, guide sheet overlay/markup, and additional meals edit section.
- [style.css](file:///c:/Users/david/OneDrive/Coding/Projects/Chronos/style.css): Added info button layout, guide shapes, and additional meal dynamic row CSS.
- [app.js](file:///c:/Users/david/OneDrive/Coding/Projects/Chronos/app.js): Hooked up guide drawer events, overlays, and manual toggles. Added custom meal rendering and parsing logic.

**Next Objectives:**
- Verify touch targeting safety on mobile screens.
- Test scroll smoothness for guide details.
- Future Architecture: Optional backend server / user accounts for cross-device sync and push alerts (discussed keeping client-side local-first for now).

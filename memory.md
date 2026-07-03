## [2026-07-03 v22]
<!-- CRITICAL: Keep this file under 200 words. Condense history ruthlessly. -->

**Status:** Fixed bottom sheet blur bug. Migrated inline styles from index.html to style.css.

**Files Changed:**
- [style.css](file:///c:/Users/david/OneDrive/Coding/Projects/Chronos/style.css): Fixed `.bottom-sheet` sibling blur bug via `translate3d`, `will-change`, and `backface-visibility`. Added `.weekly-setup-desc` and `#menu-download-btn` rules.
- [index.html](file:///c:/Users/david/OneDrive/Coding/Projects/Chronos/index.html): Removed all inline styles.

**Next Objectives:**
- Verify blur fix visually in browser.

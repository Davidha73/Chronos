## [2026-07-01 v2]

**Status:** Weekly Supplement Planner fully implemented. Each day of the week (Mon–Sun) now carries its own independent supplement stack and override settings, rather than a shared training/rest global profile.

**Key Architecture Changes:**
- `appState.weeklySupplements[0..6]` — per-day supplement ID arrays (replacing global `supplements.training/rest`)
- `appState.weeklyOverrides[0..6]` — per-day dose/timing overrides (replacing global `overrides.training/rest`)
- `menuContext` in supplements drawer is now a **day-of-week integer (0–6)** rather than the string `"training"/"rest"`
- `calculateOptimalTimes()` accepts `settings.dayOfWeek` to look up the correct `weeklyOverrides[dayOfWeek]`
- `renderAll()` and clash-preview functions read day index from `viewDateOffset` → `viewDate.getDay()`
- Migration runner in `loadState()` seeds `weeklySupplements` and `weeklyOverrides` from the old global structure on first load

**New UI Features:**
- Manage drawer title shows: **"Manage Monday Stack"** (day-specific)
- Day-type pill badge (Training / Rest) replaces the old Training/Rest toggle toggle
- "Duplicate Stack" panel — shows a dropdown of any other configured day (≥1 supplement set up), with Copy button that deep-clones supplements + overrides to the current day
- Adjust supplement subtitle now shows `"Day Name – Training/Rest"` context

**Files Changed:**
- [app.js](file:///c:/Users/david/OneDrive/Coding/Projects/Chronos/app.js): `loadState` migration, `calculateOptimalTimes`, `renderAll`, `openSupplementsDrawer`, `updateCopyOptionsDropdown`, `openAdjustSupplementDrawer`, `updateAdjustSuppClashPreview`, submit/reset listeners
- [index.html](file:///c:/Users/david/OneDrive/Coding/Projects/Chronos/index.html): Replaced Training/Rest toggle with day-type badge row; added copy panel markup
- [style.css](file:///c:/Users/david/OneDrive/Coding/Projects/Chronos/style.css): Added `.copy-actions-container`, `.dropdown-styled`, `.btn-copy-small`, `.supp-day-type-badge` classes
- [sw.js](file:///c:/Users/david/OneDrive/Coding/Projects/Chronos/sw.js): Bumped to chronos-v28

**Next Objectives:**
- Test in browser: navigate days, toggle stack per day, copy flow end-to-end
- Verify HMB use-case: Monday (Training) has HMB, Tuesday (Rest/recovery) gets HMB copied in, Wednesday (Rest) is a fresh stack without HMB

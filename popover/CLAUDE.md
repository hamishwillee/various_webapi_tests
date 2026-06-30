# Popover Test Directory

Manual test harness for `popover=hint` spec changes ([whatwg/html #12345](https://github.com/whatwg/html/pull/12345)).

## Files

- `index.html` — the test page (single-file, no dependencies)
- `README.md` — how to run and what each scenario tests

## How to launch

```
start index.html          # Windows — opens in default browser
open index.html           # macOS
npx serve .               # serves on http://localhost:3000 (any OS)
```

## Scenarios covered

1. Hint shown from button inside auto does not close the auto
2. Opening a hint closes non-ancestor hints but not ancestor hints
3. Click-outside light-dismiss (auto and hint, not manual); 3b nested variant
4. Hiding auto does not close unrelated hint (auto-timed test, no clicks needed)
5. Auto shown as child of hint downgrades to hint (auto-timed PASS/FAIL)
6. Showing a popover during another's toggle is rejected (throws)
7. Nested hints — parent hint survives when child hint shows
8. Mixed stack — sibling hints close each other; auto stays throughout

## Key design decisions

- All hint triggers use **click** (not hover) so popovers stay open for multi-step testing.
  Exception: S8 Hint B uses hover to make the sibling-dismissal effect immediately visible.
- Scenarios 4 and 5 use **timers** to hide/show popovers without user clicks, avoiding
  light-dismiss interference (clicking outside an open auto would close it).
- The popover hierarchy (auto+hint coexistence) requires hint trigger buttons to live
  **inside** the parent popover, with `showPopover({source: thisButton})`. Two independent
  floating popovers triggered from page-level buttons have no relationship.

## Extending

Add new scenarios as `<div class="scenario">` blocks with a matching
`<div id="log-sN" class="log-area">` for automatic event logging. The global
`toggle`/`beforetoggle` listener wires up logging automatically as long as the
popover's `id` starts with `sN`.

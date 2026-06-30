# Popover Hint Behavior Tests

Manual test page for the simplified `popover=hint` behaviors introduced in [whatwg/html #12345](https://github.com/whatwg/html/pull/12345).

Reference implementation: [Jake Archibald demo](https://jakearchibald.github.io/random-stuff/popover-hint/) · [WPT PR #59237](https://github.com/web-platform-tests/wpt/pull/59237)

## How to run

Open `index.html` directly in a browser — no build step or server required:

```
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Or serve locally if your browser blocks file:// protocols for any reason:

```bash
npx serve .
# then open http://localhost:3000
```

## What's being tested

The page covers 8 scenarios plus a variant (3b):

| # | Rule | Interaction |
|---|------|-------------|
| 1 | Hint shown from inside auto does **not** close the auto | Click to open auto; click button inside auto to show hint |
| 2 | Opening a hint closes **non-ancestor** hints but not ancestor hints | Click to open ancestor hint; click buttons inside it to open sibling hints |
| 3 | Click-outside **light-dismisses** auto and hint (not manual) | Click to open; then click in different areas |
| 3b | Nested variant: clicking parent auto body closes its children | Click to open; use buttons inside Auto1 |
| 4 | Hiding an auto does **not** close an unrelated hint | Single button opens both; auto hides via 4s timer — no clicks needed |
| 5 | Auto shown as child of hint **downgrades to hint** | Step-by-step; unrelated hint appears via 4s timer to confirm downgrade |
| 6 | Showing during another popover's toggle is **rejected** | Button-triggered JS tests with PASS/FAIL result |
| 7 | Nested hints: **parent hint survives** child hint showing | Click to open outer hint; click button inside to open inner |
| 8 | Mixed stack: sibling hints close each other; **auto stays** | Click Hint A; hover Hint B to see A dismissed; auto stays throughout |

## Interaction notes

Most triggers use **click** so popovers stay open for multi-step testing. Two exceptions:

- **Scenario 8, Hint B** uses hover — click opens Hint A and it stays; hovering Hint B
  then visibly closes Hint A, making the sibling-dismissal effect obvious.
- **Scenarios 4 and 5** use timers instead of buttons for the second action, because
  clicking a button outside an open auto would light-dismiss it before the handler runs.

## Hierarchy requirement

For a hint to coexist with an open auto, the hint's trigger button must live **inside**
the open auto (or hint) popover, and the hint must be shown with `showPopover({source: triggerButton})`.
The browser traces the source element's ancestry to find the open parent and establishes
the parent–child relationship. Two independent floating popovers with unrelated page-level
trigger buttons have no relationship and will dismiss each other.

## Color coding

- **Green** buttons / borders = `popover="auto"`
- **Yellow** buttons / borders = `popover="hint"`
- **Red** buttons / borders = `popover="manual"`
- **Grey** buttons = hide / reset actions

## Status bar

The sticky bar at the top shows every currently-open popover and its type so you can
confirm state at a glance without opening DevTools.

## Event log

Each scenario has its own event log (dark panel) showing `beforetoggle` and `toggle`
events with timestamps, so you can confirm the order in which popovers open and close.

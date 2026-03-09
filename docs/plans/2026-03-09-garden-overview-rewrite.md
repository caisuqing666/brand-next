# Garden Overview Rewrite Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rewrite the `/garden` overview page so it clearly defines Garden's role relative to Library and Practice while preserving the existing four-node structure.

**Architecture:** Add a focused source test for the Garden overview contract, then minimally rewrite `app/garden/page.tsx` so the page header explains Garden as the place to return to a position where judgment can keep growing. Keep the existing node grid and recent notes area, but update framing copy so Garden reads as the soil layer of the system rather than a generic digital garden.

**Tech Stack:** Next.js App Router, React server component, Node `assert` source tests

---

### Task 1: Write the failing Garden overview contract

**Files:**
- Create: `tests/garden-page-overview.test.mjs`

**Step 1: Write the failing test**

Assert that `app/garden/page.tsx` includes:
- `Garden · 花园`
- the new intro line about not trying to get answers faster
- the new line about returning to a position where growth can continue
- the line that many things begin to grow roots here

**Step 2: Run test to verify it fails**

Run: `node tests/garden-page-overview.test.mjs`
Expected: FAIL because the current page still uses the older “思考的土壤层 / 数字花园” framing

### Task 2: Implement the Garden overview rewrite

**Files:**
- Modify: `app/garden/page.tsx`

**Step 1: Write minimal implementation**

Update the page header to:
- introduce the `Garden · 花园` kicker
- use calmer multi-paragraph intro copy that defines Garden as the place where judgment grows
- keep the four core nodes and recent notes section intact

**Step 2: Run test to verify it passes**

Run: `node tests/garden-page-overview.test.mjs`
Expected: PASS

### Task 3: Verify lint and build

**Files:**
- Test: `tests/garden-page-overview.test.mjs`

**Step 1: Run focused verification**

Run:
- `node tests/garden-page-overview.test.mjs`
- `node tests/garden-presence-page.test.mjs`
- `node tests/garden-judgment-page.test.mjs`
- `node tests/garden-action-page.test.mjs`

Expected: PASS

**Step 2: Run lint and build**

Run:
- `npx eslint app/garden/page.tsx tests/garden-page-overview.test.mjs`
- `npm run build`

Expected: PASS

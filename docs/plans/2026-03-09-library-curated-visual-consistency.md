# Library Curated Visual Consistency Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Align `/library`, `/library/reading`, `/library/tools`, and `/library/links` so they share the same curated-page visual rhythm without changing their information architecture or core copy.

**Architecture:** Introduce a small set of shared curated-page classes in `app/globals.css` for the kicker line, intro block, section spacing, label styling, closing copy, and return-link spacing. Update the four library pages to consume those classes instead of per-page inline spacing rules. Lock the shared class usage with a focused source-level test.

**Tech Stack:** Next.js App Router, React server components, global CSS, Node `assert` source tests

---

### Task 1: Write the failing consistency test

**Files:**
- Create: `tests/library-curated-style-consistency.test.mjs`

**Step 1: Write the failing test**

Assert that the four library pages use the same shared curated-page classes for:
- top small title line
- intro wrapper
- section grid
- section title
- "为什么它会留在这里" / "它留下的是：" label
- closing copy wrapper
- back-link wrapper on the three subpages

**Step 2: Run test to verify it fails**

Run: `node tests/library-curated-style-consistency.test.mjs`
Expected: FAIL because the pages still depend on inconsistent inline styles

### Task 2: Implement the shared curated-page styling

**Files:**
- Modify: `app/globals.css`
- Modify: `app/library/page.tsx`
- Modify: `app/library/reading/page.tsx`
- Modify: `app/library/tools/page.tsx`
- Modify: `app/library/links/page.tsx`

**Step 1: Add shared CSS**

Add a compact curated-page style block with shared classes covering:
- kicker sizing and spacing
- intro width and paragraph gap
- one-column section grid
- card/module spacing
- section title spacing
- label typography and spacing
- closing paragraph spacing
- return link spacing

**Step 2: Update page markup**

Replace duplicated inline style spacing with the shared classes while preserving copy and route structure.

**Step 3: Run the new test**

Run: `node tests/library-curated-style-consistency.test.mjs`
Expected: PASS

### Task 3: Verify related pages and build

**Files:**
- Test: `tests/library-page-overview.test.mjs`
- Test: `tests/library-reading-page.test.mjs`
- Test: `tests/library-tools-page.test.mjs`
- Test: `tests/library-links-page.test.mjs`

**Step 1: Run focused verification**

Run:
- `node tests/library-page-overview.test.mjs`
- `node tests/library-reading-page.test.mjs`
- `node tests/library-tools-page.test.mjs`
- `node tests/library-links-page.test.mjs`

Expected: PASS

**Step 2: Run lint and build**

Run:
- `npx eslint app/library/page.tsx app/library/reading/page.tsx app/library/tools/page.tsx app/library/links/page.tsx tests/library-curated-style-consistency.test.mjs`
- `npm run build`

Expected: PASS

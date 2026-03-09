# Practice Branch Visual Consistency Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Tighten `/practice/running`, `/practice/coding`, and `/practice/investing` into one coherent visual system so they clearly belong to the same "练习与验证" branch family.

**Architecture:** Keep the existing branch conclusions and content structure intact, but add a small set of shared practice-branch classes in `app/globals.css` for lower-section spacing, support-block density, notes-list spacing, tag styling, and back-link placement. Update the three branch pages to use those shared classes, and lock the shared usage with a source-level consistency test.

**Tech Stack:** Next.js App Router, React server components, global CSS, Node `assert` source tests

---

### Task 1: Write the failing consistency test

**Files:**
- Create: `tests/practice-branch-style-consistency.test.mjs`

**Step 1: Write the failing test**

Assert that the three Practice branch pages use the same shared classes for:
- kicker line
- intro wrapper
- branch grid/card/title/label
- lower section wrapper
- notes list wrapper
- back-link wrapper

Also assert that `app/globals.css` defines the new practice-branch classes.

**Step 2: Run test to verify it fails**

Run: `node tests/practice-branch-style-consistency.test.mjs`
Expected: FAIL because the three pages still rely on slightly different lower-section structure and missing shared back-link usage

### Task 2: Implement shared branch styling

**Files:**
- Modify: `app/globals.css`
- Modify: `app/practice/running/page.tsx`
- Modify: `app/practice/coding/page.tsx`
- Modify: `app/practice/investing/page.tsx`

**Step 1: Add shared CSS**

Add compact shared classes for:
- lower-section top spacing
- support block grouping
- support item spacing
- notes-list margin and meta-tag tone
- shared back-link placement

**Step 2: Update page markup**

Switch the three pages to the shared classes and normalize:
- lower section hierarchy
- support block density
- entry list spacing
- back-link location and styling

**Step 3: Run the new test**

Run: `node tests/practice-branch-style-consistency.test.mjs`
Expected: PASS

### Task 3: Verify related pages and build

**Files:**
- Test: `tests/practice-running-page.test.mjs`
- Test: `tests/practice-coding-page.test.mjs`
- Test: `tests/practice-investing-page.test.mjs`

**Step 1: Run focused verification**

Run:
- `node tests/practice-branch-style-consistency.test.mjs`
- `node tests/practice-running-page.test.mjs`
- `node tests/practice-coding-page.test.mjs`
- `node tests/practice-investing-page.test.mjs`

Expected: PASS

**Step 2: Run lint and build**

Run:
- `npx eslint app/practice/running/page.tsx app/practice/coding/page.tsx app/practice/investing/page.tsx tests/practice-branch-style-consistency.test.mjs`
- `npm run build`

Expected: PASS

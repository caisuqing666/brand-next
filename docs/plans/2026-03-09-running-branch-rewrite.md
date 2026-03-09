# Running Branch Rewrite Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rewrite `/practice/running` so it becomes the first mature Practice branch page, aligned with the new "练习与验证" language and centered on the line "留下的是：节奏".

**Architecture:** Keep the page as a static server component with the existing running entry list intact, but replace the older section-stack framing with a calmer note-style branch page. The new page will use the shared curated-page classes where useful, define Running as a long-term practice line, land on the "节奏" conclusion, and keep the record list as the lower half of the page. A focused source-level test will lock the new copy and route links.

**Tech Stack:** Next.js App Router, React server component, global CSS classes, Node `assert` source tests

---

### Task 1: Write the failing branch-contract test

**Files:**
- Modify: `tests/practice-running-page.test.mjs`

**Step 1: Write the failing test**

Update the running page test to assert:
- top small title `Running · 跑步`
- new intro copy about running as long-term practice
- the line `留下的是：节奏`
- supporting copy about period, recovery, accumulation, and keeping one’s pace
- the retained lower entry list and its article links

**Step 2: Run test to verify it fails**

Run: `node tests/practice-running-page.test.mjs`
Expected: FAIL because the current page still uses the older section framing and lacks the new branch-level language

### Task 2: Rewrite the Running branch page

**Files:**
- Modify: `app/practice/running/page.tsx`

**Step 1: Write minimal implementation**

Replace the old explanatory stack with:
- note-style header aligned with Practice
- one or two branch-definition cards that explain running as practice
- a clear `留下的是：节奏` label and closing block
- the existing running record list retained below

**Step 2: Run test to verify it passes**

Run: `node tests/practice-running-page.test.mjs`
Expected: PASS

### Task 3: Verify adjacent pages and build

**Files:**
- Test: `tests/practice-page-structure.test.mjs`
- Test: `tests/practice-running-from-breakthrough-to-return-page.test.mjs`

**Step 1: Run focused verification**

Run:
- `node tests/practice-page-structure.test.mjs`
- `node tests/practice-running-page.test.mjs`
- `node tests/practice-running-from-breakthrough-to-return-page.test.mjs`

Expected: PASS

**Step 2: Run lint and build**

Run:
- `npx eslint app/practice/running/page.tsx tests/practice-running-page.test.mjs`
- `npm run build`

Expected: PASS

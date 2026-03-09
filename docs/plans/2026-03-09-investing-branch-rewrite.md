# Investing Branch Rewrite Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rewrite `/practice/investing` so it becomes the third mature Practice branch page, aligned with the new "练习与验证" language and centered on the line "留下的是：边界".

**Architecture:** Keep the page as a static server component with the existing investing judgment log and supporting links intact, but replace the older section-stack framing with a calmer note-style branch page. The new page will use the shared curated-page classes where useful, define Investing as a long-term practice line, land on the "边界" conclusion, and keep the judgment log plus the back link in the lower half of the page. A focused source-level test will lock the new copy and route links.

**Tech Stack:** Next.js App Router, React server component, global CSS classes, Node `assert` source tests

---

### Task 1: Write the failing branch-contract test

**Files:**
- Modify: `tests/practice-investing-page.test.mjs`

**Step 1: Write the failing test**

Update the investing page test to assert:
- top small title `Investing · 投资`
- new intro copy about investing as long-term judgment training
- the line `留下的是：边界`
- supporting copy about uncertainty, risk, and staying in the game
- the retained lower support blocks, judgment log, and practice back link

**Step 2: Run test to verify it fails**

Run: `node tests/practice-investing-page.test.mjs`
Expected: FAIL because the current page still uses the older section framing and lacks the new branch-level language

### Task 2: Rewrite the Investing branch page

**Files:**
- Modify: `app/practice/investing/page.tsx`

**Step 1: Write minimal implementation**

Replace the old explanatory stack with:
- note-style header aligned with Practice
- one or two branch-definition cards that explain investing as practice
- a clear `留下的是：边界` label and closing block
- the existing judgment log, supporting entry block, cross links, and practice back link retained below

**Step 2: Run test to verify it passes**

Run: `node tests/practice-investing-page.test.mjs`
Expected: PASS

### Task 3: Verify adjacent pages and build

**Files:**
- Test: `tests/practice-page-structure.test.mjs`
- Test: `tests/practice-investing-from-returns-to-risk-boundaries-page.test.mjs`

**Step 1: Run focused verification**

Run:
- `node tests/practice-page-structure.test.mjs`
- `node tests/practice-investing-page.test.mjs`
- `node tests/practice-investing-from-returns-to-risk-boundaries-page.test.mjs`

Expected: PASS

**Step 2: Run lint and build**

Run:
- `npx eslint app/practice/investing/page.tsx tests/practice-investing-page.test.mjs`
- `npm run build`

Expected: PASS

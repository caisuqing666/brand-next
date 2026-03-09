# Coding Branch Rewrite Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rewrite `/practice/coding` so it becomes the second mature Practice branch page, aligned with the new "练习与验证" language and centered on the line "留下的是：结构".

**Architecture:** Keep the page as a static server component with the existing coding entry list intact, but replace the older section-stack framing with a calmer note-style branch page. The new page will use the shared curated-page classes where useful, define Coding as a long-term practice line, land on the "结构" conclusion, and keep the record list as the lower half of the page. A focused source-level test will lock the new copy and route links.

**Tech Stack:** Next.js App Router, React server component, global CSS classes, Node `assert` source tests

---

### Task 1: Write the failing branch-contract test

**Files:**
- Modify: `tests/practice-coding-page.test.mjs`

**Step 1: Write the failing test**

Update the coding page test to assert:
- top small title `Coding · 编程`
- new intro copy about coding as long-term practice
- the line `留下的是：结构`
- supporting copy about putting ideas into reality and making things stand up in the real world
- the retained lower entry list and its article links

**Step 2: Run test to verify it fails**

Run: `node tests/practice-coding-page.test.mjs`
Expected: FAIL because the current page still uses the older section framing and lacks the new branch-level language

### Task 2: Rewrite the Coding branch page

**Files:**
- Modify: `app/practice/coding/page.tsx`

**Step 1: Write minimal implementation**

Replace the old explanatory stack with:
- note-style header aligned with Practice
- one or two branch-definition cards that explain coding as practice
- a clear `留下的是：结构` label and closing block
- the existing coding record list retained below

**Step 2: Run test to verify it passes**

Run: `node tests/practice-coding-page.test.mjs`
Expected: PASS

### Task 3: Verify adjacent pages and build

**Files:**
- Test: `tests/practice-page-structure.test.mjs`
- Test: `tests/practice-coding-from-learning-to-running-page.test.mjs`

**Step 1: Run focused verification**

Run:
- `node tests/practice-page-structure.test.mjs`
- `node tests/practice-coding-page.test.mjs`
- `node tests/practice-coding-from-learning-to-running-page.test.mjs`

Expected: PASS

**Step 2: Run lint and build**

Run:
- `npx eslint app/practice/coding/page.tsx tests/practice-coding-page.test.mjs`
- `npm run build`

Expected: PASS

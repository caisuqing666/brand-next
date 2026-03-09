# Practice Overview Rewrite Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rewrite `/practice` into a calm manifesto-style overview page that frames the section as "练习与验证", with three structured branches and a lighter supplemental layer for cross-articles and stage reviews.

**Architecture:** Replace the current multi-section explanatory layout with a note-style overview page that mirrors the structural clarity of the new library system while keeping a warmer, more process-oriented tone. The page will have a guided header, three structured essay-like branch blocks for Running/Coding/Investing, a compact supplemental section for cross-articles and stage reviews, and a closing paragraph. A focused source-level test will lock the new copy and route links.

**Tech Stack:** Next.js App Router, React server component, global CSS classes already used by curated pages, Node `assert` source tests

---

### Task 1: Write the failing contract test

**Files:**
- Modify: `tests/practice-page-structure.test.mjs`

**Step 1: Write the failing test**

Update the practice page contract test to assert:
- top small title line `Practice · 练习与验证`
- the new intro copy about practice and verification
- the three branch titles and their closing lines
- the supplemental layer headings `交叉文章` and `阶段复盘`
- the closing copy about putting ideas into reality and bringing reality back into judgment
- links to running, coding, investing, the two cross-articles, and the stage review

**Step 2: Run test to verify it fails**

Run: `node tests/practice-page-structure.test.mjs`
Expected: FAIL because the current page still uses the older Practice structure and copy

### Task 2: Rewrite the Practice overview page

**Files:**
- Modify: `app/practice/page.tsx`

**Step 1: Write minimal implementation**

Replace the current section stack with:
- slowroot nav and note-style shell
- header using the new overview copy
- three branch blocks linking to `/practice/running`, `/practice/coding`, `/practice/investing`
- a lighter supplemental section linking to the existing cross-articles and stage review
- closing copy matching the approved text

**Step 2: Run test to verify it passes**

Run: `node tests/practice-page-structure.test.mjs`
Expected: PASS

### Task 3: Verify related pages and build

**Files:**
- Test: `tests/practice-running-page.test.mjs`
- Test: `tests/practice-coding-page.test.mjs`
- Test: `tests/practice-investing-page.test.mjs`

**Step 1: Run focused verification**

Run:
- `node tests/practice-page-structure.test.mjs`
- `node tests/practice-running-page.test.mjs`
- `node tests/practice-coding-page.test.mjs`
- `node tests/practice-investing-page.test.mjs`

Expected: PASS

**Step 2: Run lint and build**

Run:
- `npx eslint app/practice/page.tsx tests/practice-page-structure.test.mjs`
- `npm run build`

Expected: PASS

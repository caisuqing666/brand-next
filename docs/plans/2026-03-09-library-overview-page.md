# Library Overview Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rewrite `/library` from a directory-style page into a manifesto-style overview that explains why the three resource branches were kept.

**Architecture:** Keep `/library` as a static server component using the existing slowroot layout, but replace the simple entry-card directory with a note-style overview page. The new page will have four sections: filtering header, three branch summaries with consistent "它留下的是..." framing, and a closing paragraph. A focused source-level test will lock the copy and branch structure.

**Tech Stack:** Next.js App Router, React server component, Node `assert` source tests

---

### Task 1: Write the failing page-contract test

**Files:**
- Create: `tests/library-page-overview.test.mjs`

**Step 1: Write the failing test**

Assert that `app/library/page.tsx` includes:
- header copy `Library · 资源`
- the new filtering paragraphs
- all three branch titles in the `Reading / 书与文章`, `Tools / 工具与方法`, `Links / 链接与入口` format
- the three lines `它留下的是：内容。`, `它留下的是：方法。`, `它留下的是：入口。`
- the closing paragraph about resources not being better just because there are more

**Step 2: Run test to verify it fails**

Run: `node tests/library-page-overview.test.mjs`
Expected: FAIL because the current page still uses the older directory copy

### Task 2: Rewrite the page with minimal structure

**Files:**
- Modify: `app/library/page.tsx`

**Step 1: Write minimal implementation**

Replace the entry-card directory layout with:
- slowroot nav and active `资源`
- note-style header
- three branch summary blocks linking to `/library/reading`, `/library/tools`, `/library/links`
- closing copy matching the approved text

**Step 2: Run test to verify it passes**

Run: `node tests/library-page-overview.test.mjs`
Expected: PASS

### Task 3: Verify adjacent library pages and build

**Files:**
- Test: `tests/library-reading-page.test.mjs`
- Test: `tests/library-tools-page.test.mjs`
- Test: `tests/library-links-page.test.mjs`

**Step 1: Run adjacent verification**

Run:
- `node tests/library-reading-page.test.mjs`
- `node tests/library-tools-page.test.mjs`
- `node tests/library-links-page.test.mjs`

Expected: PASS

**Step 2: Run build verification**

Run: `npm run build`
Expected: PASS

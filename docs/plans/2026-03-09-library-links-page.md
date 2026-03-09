# Library Links Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build `/library/links` as the third curated library page, using the approved "链接与入口" copy and the same long-term filtering structure as the reading and tools pages.

**Architecture:** Reuse the standalone library page pattern already established in `app/library/reading/page.tsx` and `app/library/tools/page.tsx`: static server component, shared slowroot layout classes, and a repeated list of curated entries with a body and a "为什么它会留在这里" reason block. Protect the content with a focused source-level test.

**Tech Stack:** Next.js App Router, React server component, Node `assert` source tests

---

### Task 1: Write the failing contract test

**Files:**
- Create: `tests/library-links-page.test.mjs`

**Step 1: Write the failing test**

Assert that `app/library/links/page.tsx` includes:
- header copy `Links · 链接与入口`
- the intro filtering copy
- all 6 section titles
- the shared `为什么它会留在这里` label
- the closing copy
- the back link `← 回到资源`

**Step 2: Run test to verify it fails**

Run: `node tests/library-links-page.test.mjs`
Expected: FAIL because the page file does not exist yet

### Task 2: Implement the page

**Files:**
- Create: `app/library/links/page.tsx`
- Reference: `app/library/tools/page.tsx`

**Step 1: Write minimal implementation**

Create a static page with:
- slowroot nav and active `资源`
- note-style header
- 6 curated link-category entries rendered from a local array
- closing copy and back link to `/library`

**Step 2: Run test to verify it passes**

Run: `node tests/library-links-page.test.mjs`
Expected: PASS

### Task 3: Verify adjacent pages and build

**Files:**
- Test: `tests/library-tools-page.test.mjs`

**Step 1: Run adjacent verification**

Run: `node tests/library-tools-page.test.mjs`
Expected: PASS

**Step 2: Run build verification**

Run: `npm run build`
Expected: PASS and output includes `/library/links`

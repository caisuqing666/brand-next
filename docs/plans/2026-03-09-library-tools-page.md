# Library Tools Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build `/library/tools` as a sibling page to `/library/reading`, with the approved "工具与方法" copy and the same curated-resource structure.

**Architecture:** Reuse the existing standalone page pattern already used by `app/library/reading/page.tsx`: static content, shared slowroot layout classes, and a repeated card structure for curated entries. Lock the copy with a focused source-level test so future edits do not accidentally weaken the page structure or wording.

**Tech Stack:** Next.js App Router, React server component, Node `assert` file-source tests

---

### Task 1: Pin the page contract with a failing test

**Files:**
- Create: `tests/library-tools-page.test.mjs`

**Step 1: Write the failing test**

Create a source-level test that reads `app/library/tools/page.tsx` and asserts:
- header copy contains `Tools · 工具与方法`
- intro copy contains the approved filtering criteria
- all 6 section titles exist
- each section includes `为什么它会留在这里`
- page footer contains the approved closing sentence
- page includes `← 回到资源`

**Step 2: Run test to verify it fails**

Run: `node tests/library-tools-page.test.mjs`
Expected: FAIL because `app/library/tools/page.tsx` does not exist yet

### Task 2: Implement the page with minimal structure

**Files:**
- Create: `app/library/tools/page.tsx`
- Reference: `app/library/reading/page.tsx`

**Step 1: Write minimal implementation**

Create a static page using the same structure as the reading page:
- slowroot nav with `资源` active
- note-style header
- 6 entries rendered from a local array
- each entry includes title, body, and reason
- closing sentence and back link to `/library`

**Step 2: Run the new test to verify it passes**

Run: `node tests/library-tools-page.test.mjs`
Expected: PASS

### Task 3: Verify no regression in the adjacent resource page

**Files:**
- Test: `tests/library-reading-page.test.mjs`

**Step 1: Run adjacent page verification**

Run: `node tests/library-reading-page.test.mjs`
Expected: PASS

**Step 2: Optional broader verification**

Run: `npm run lint`
Expected: PASS, unless there are pre-existing unrelated lint issues in the working tree

# Homepage Garden Library Practice One-Liner Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a single-line relationship statement on the homepage that clarifies how Garden, Library, and Practice differ without changing the homepage structure.

**Architecture:** Reuse the existing `真实入口` section on the homepage. Add one calm explanatory sentence above the existing comparison cards so users can understand the three-part relationship at a glance. Protect the sentence with the homepage source test.

**Tech Stack:** Next.js App Router, React server component, Node `assert` source tests

---

### Task 1: Write the failing homepage contract update

**Files:**
- Modify: `tests/homepage-layout.test.mjs`

**Step 1: Update the test**

Assert that `app/page.tsx` includes:
- `Garden 让人重新站稳，并长出判断；`
- `Library 留下值得保留的东西；`
- `Practice 检验什么最终在现实里站住。`

**Step 2: Run test to verify it fails**

Run: `node tests/homepage-layout.test.mjs`
Expected: FAIL because the homepage does not yet include the new three-way relationship sentence

### Task 2: Implement the homepage one-liner

**Files:**
- Modify: `app/page.tsx`

**Step 1: Write minimal implementation**

Inside the existing `真实入口` section:
- keep the current framing paragraph and comparison cards
- add one single-line relationship sentence for Garden, Library, and Practice

**Step 2: Run test to verify it passes**

Run: `node tests/homepage-layout.test.mjs`
Expected: PASS

### Task 3: Verify lint and build

**Files:**
- Test: `tests/homepage-layout.test.mjs`

**Step 1: Run focused verification**

Run: `node tests/homepage-layout.test.mjs`
Expected: PASS

**Step 2: Run lint and build**

Run:
- `npx eslint app/page.tsx tests/homepage-layout.test.mjs`
- `npm run build`

Expected: PASS

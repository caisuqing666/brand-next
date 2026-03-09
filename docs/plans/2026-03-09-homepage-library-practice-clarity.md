# Homepage Library Practice Clarity Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Clarify on the homepage what `Library` manages, what `Practice` manages, and why both belong in slowroot without changing the homepage’s overall structure.

**Architecture:** Make the smallest possible change in the existing homepage entry layer: keep the current `真实入口` section, add one short framing line about the relationship between Library and Practice, and introduce two calm comparison cards that explain their respective roles. Reuse the existing comparison-card visual language instead of creating a third system. Protect the new copy with the homepage structure test.

**Tech Stack:** Next.js App Router, React server component, existing homepage CSS classes, Node `assert` source tests

---

### Task 1: Write the failing homepage contract update

**Files:**
- Modify: `tests/homepage-layout.test.mjs`

**Step 1: Update the test**

Assert that `app/page.tsx` now includes:
- `Library 管留下了什么`
- `Practice 管什么被验证过`
- supporting copy about Library as what remains after filtering by time
- supporting copy about Practice as what remains true after reality testing

**Step 2: Run test to verify it fails**

Run: `node tests/homepage-layout.test.mjs`
Expected: FAIL because the homepage does not yet include the clarified Library/Practice relationship

### Task 2: Implement the homepage clarification

**Files:**
- Modify: `app/page.tsx`

**Step 1: Write minimal implementation**

Inside the existing `真实入口` section:
- add one short paragraph framing the two trees
- add two side-by-side comparison cards for Library and Practice
- keep the action links below them

**Step 2: Run the updated test**

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

# Homepage Ellipse Refinement Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Refine the homepage five-stage ellipse so the spatial composition clearly expresses slowroot's inward-to-outward two-phase motion without changing the core copy.

**Architecture:** Keep the existing homepage section and links, but add semantic structure classes for the five journey nodes and rebalance the CSS positioning, spacing, and orbital treatment. Use a minimal file-based regression test to lock the two-phase DOM semantics before changing layout styles.

**Tech Stack:** Next.js App Router, React 19, TypeScript, CSS

---

### Task 1: Add regression coverage for the journey structure

**Files:**
- Create: `tests/homepage-layout.test.mjs`
- Modify: `package.json`

**Step 1: Write the failing test**

Create a Node-based test that reads `app/page.tsx` and `app/globals.css` and asserts the presence of semantic journey classes for:
- `journey-node--inner-start`
- `journey-node--inner-guide`
- `journey-node--hinge`
- `journey-node--outer-ground`
- `journey-node--outer-grow`

**Step 2: Run test to verify it fails**

Run: `npm run test:homepage-layout`
Expected: FAIL because the new structural classes do not exist yet.

**Step 3: Add a script for the test**

Add `test:homepage-layout` to `package.json`.

**Step 4: Run test again**

Run: `npm run test:homepage-layout`
Expected: Still FAIL for missing structure classes.

### Task 2: Refine homepage structure and ellipse layout

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/globals.css`

**Step 1: Update markup**

Add semantic classes to the five journey nodes so the layout expresses:
- 01 start of the inward motion
- 02 inward guidance
- 03 hinge between inward and outward motion
- 04 grounded outward landing
- 05 outer growth state

**Step 2: Adjust CSS layout**

Reposition the nodes so:
- 01 and 02 sit closer to the center
- 03 becomes a visible hinge on the outward turn
- 04 and 05 separate and open out on the left side
- the center quiet zone stays clear
- the orbital line reads as compressed on the inward path and more open on the outward path

**Step 3: Verify green**

Run: `npm run test:homepage-layout`
Expected: PASS

### Task 3: Verify the page

**Files:**
- None

**Step 1: Run lint**

Run: `npm run lint`
Expected: PASS

**Step 2: Run build**

Run: `npm run build`
Expected: PASS

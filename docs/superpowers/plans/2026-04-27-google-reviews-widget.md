# Google Reviews Widget Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the hardcoded `TestimonialCards` component with a hybrid layout — 3 curated review cards on top, a live Google Maps reviews iframe below, and a CTA button linking to the full Google listing.

**Architecture:** Single component rewrite in place. The `BUSINESS` object from `lib/schema.ts` provides the Place ID, latitude, and longitude for the embed URL. No API keys, no new dependencies, no server-side fetching.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `components/TestimonialCards.tsx` | Rewrite | Curated cards + Google Maps iframe + CTA button |

No new files. No changes to `app/page.tsx` (it already imports and renders `TestimonialCards`).

---

### Task 1: Trim Testimonials to 3 and Update Grid

**Files:**
- Modify: `components/TestimonialCards.tsx`

- [ ] **Step 1: Remove Stephanie's testimonial from the array**

Edit `components/TestimonialCards.tsx` — remove the 4th item from `TESTIMONIALS`:

```tsx
const TESTIMONIALS = [
  {
    name: "Teya",
    text: "Corey did an amazing job on my car! The repair looks like it never happened. Highly recommend!",
    stars: 5,
  },
  {
    name: "Margaret",
    text: "Very professional and transparent throughout the entire process. They kept me updated every step of the way.",
    stars: 5,
  },
  {
    name: "Jordan",
    text: "Best auto body shop in the area. Fair pricing and the quality of work is outstanding.",
    stars: 5,
  },
];
```

- [ ] **Step 2: Change the grid from 4 columns to 3**

In the same file, change the grid class:

```tsx
// Old:
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

// New:
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
```

- [ ] **Step 3: Verify the dev server renders correctly**

Run: `npm run dev`

Open `http://localhost:3000` and confirm:
- 3 testimonial cards display in a row on desktop
- Cards stack on mobile
- No layout shift or overflow issues

- [ ] **Step 4: Commit**

```bash
git add components/TestimonialCards.tsx
git commit -m "refactor: trim testimonials to 3 and update grid to 3-column"
```

---

### Task 2: Add Google Maps Reviews Iframe

**Files:**
- Modify: `components/TestimonialCards.tsx`

- [ ] **Step 1: Import BUSINESS from schema**

Add to the top of `components/TestimonialCards.tsx`:

```tsx
import { BUSINESS } from "@/lib/schema";
```

- [ ] **Step 2: Add the iframe embed below the card grid**

Inside the `TestimonialCards` component, after the closing `</div>` of the card grid and before the section's closing tags, add:

```tsx
<div className="rounded-xl overflow-hidden mt-10">
  <iframe
    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d${BUSINESS.lng}!3d${BUSINESS.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s${BUSINESS.placeId}!2sCorey's+Auto+Body!5e0!3m2!1sen!2sus`}
    width="100%"
    height={450}
    style={{ border: 0 }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    allowFullScreen
    title="Corey's Auto Body Google Reviews"
  />
</div>
```

- [ ] **Step 3: Verify the iframe renders**

Refresh `http://localhost:3000` and confirm:
- The Google Maps embed appears below the testimonial cards
- It loads the correct business location (Marinette, WI)
- The iframe has rounded corners and spacing from the cards
- It's responsive — check at mobile width

- [ ] **Step 4: Commit**

```bash
git add components/TestimonialCards.tsx
git commit -m "feat: add Google Maps reviews iframe embed"
```

---

### Task 3: Add CTA Button

**Files:**
- Modify: `components/TestimonialCards.tsx`

- [ ] **Step 1: Add the CTA button below the iframe**

After the iframe wrapper `</div>`, add:

```tsx
<div className="mt-6 text-center">
  <a
    href={`https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary/80 transition-colors font-[family-name:var(--font-days-one)]"
  >
    See All Reviews on Google
  </a>
</div>
```

- [ ] **Step 2: Verify the button renders and links correctly**

Refresh `http://localhost:3000` and confirm:
- Button appears centered below the iframe
- Red background with white text
- Hover state dims slightly
- Clicking opens the Google reviews page in a new tab
- Verify the URL contains the correct Place ID: `ChIJKSQwMb6uUk0RThwAhfyu1mE`

- [ ] **Step 3: Commit**

```bash
git add components/TestimonialCards.tsx
git commit -m "feat: add Google reviews CTA button"
```

---

### Task 4: Final Verification

- [ ] **Step 1: Run the linter**

Run: `npm run lint`

Expected: No errors. Fix any that appear.

- [ ] **Step 2: Run a production build**

Run: `npm run build`

Expected: Build succeeds with no errors.

- [ ] **Step 3: Full visual check**

Open `http://localhost:3000` and verify the complete section top to bottom:
1. "What Our Customers Say" heading
2. 3 curated testimonial cards in a row (stacked on mobile)
3. Google Maps embed with the business location
4. "See All Reviews on Google" button
5. No layout issues, no console errors
6. Check mobile responsive behavior (cards stack, iframe scales)

- [ ] **Step 4: Commit any lint/build fixes if needed**

```bash
git add -A
git commit -m "fix: address lint and build issues"
```

(Skip this step if no fixes were needed.)

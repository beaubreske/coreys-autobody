# Google Reviews Widget — Design Spec

## Goal

Replace the hardcoded `TestimonialCards` component with a hybrid section that combines curated highlight cards with a live Google Maps reviews embed. No API key required, no new dependencies, always up to date.

## Approach

Google Places iframe embed (Approach A from brainstorming), with a hybrid layout (Option C): hand-picked testimonial cards on top, live Google embed below.

## Component: `TestimonialCards.tsx` (rewrite in place)

### Section Structure

```
┌─────────────────────────────────────────────┐
│        "What Our Customers Say"             │  ← heading
├─────────────────────────────────────────────┤
│  ┌─────────┐  ┌─────────┐  ┌─────────┐     │
│  │ ★★★★★  │  │ ★★★★★  │  │ ★★★★★  │     │  ← curated cards (2-3)
│  │ "Quote" │  │ "Quote" │  │ "Quote" │     │
│  │ — Name  │  │ — Name  │  │ — Name  │     │
│  └─────────┘  └─────────┘  └─────────┘     │
├─────────────────────────────────────────────┤
│                                             │
│         Google Maps Reviews iframe          │  ← live embed
│                                             │
├─────────────────────────────────────────────┤
│      [ See All Reviews on Google → ]        │  ← CTA button
└─────────────────────────────────────────────┘
```

### 1. Heading

- Text: "What Our Customers Say"
- Same styling as current: `text-3xl md:text-4xl font-bold text-center text-white mb-12 font-[family-name:var(--font-days-one)]`

### 2. Curated Highlight Cards

Keep 3 of the existing hardcoded testimonials (trim from 4 to 3 for visual balance in a 3-column grid):

| Name      | Quote                                                                                     | Stars |
|-----------|-------------------------------------------------------------------------------------------|-------|
| Teya      | "Corey did an amazing job on my car! The repair looks like it never happened."             | 5     |
| Margaret  | "Very professional and transparent throughout the entire process."                         | 5     |
| Jordan    | "Best auto body shop in the area. Fair pricing and the quality of work is outstanding."    | 5     |

Card styling: same as current — dark `bg-card-bg` background, `border-primary/30` border with red glow shadow, star icons, italic quote text, bold name.

Grid: `grid-cols-1 md:grid-cols-3` (changed from `lg:grid-cols-4` since we're going from 4 cards to 3).

### 3. Google Maps Reviews Embed

- **URL format:** `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d{lng}!3d{lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s{placeId}!2sCorey's+Auto+Body!5e0!3m2!1sen!2sus`
- **Place ID:** `ChIJKSQwMb6uUk0RThwAhfyu1mE` (from `lib/schema.ts`)
- **Coordinates:** lat `45.0660965`, lng `-87.6300089` (from `lib/schema.ts`)
- Import `BUSINESS` from `@/lib/schema` to reference these values
- **iframe attributes:**
  - `width="100%"`, `height="450"`
  - `style="border:0"`, `border-radius` via wrapper
  - `loading="lazy"`
  - `referrerPolicy="no-referrer-when-downgrade"`
  - `allowFullScreen`
- **Wrapper:** `rounded-xl overflow-hidden mt-10` to give rounded corners and spacing from the cards above

### 4. CTA Button

- Text: "See All Reviews on Google"
- Links to: `https://search.google.com/local/reviews?placeid=ChIJKSQwMb6uUk0RThwAhfyu1mE`
- Opens in new tab (`target="_blank"`, `rel="noopener noreferrer"`)
- Styled as a centered button: red background (`bg-primary`), white text, rounded, hover state
- Positioned below the iframe with `mt-6 text-center`

### 5. Section Container

- Same as current: `py-20 bg-black/80`, `max-w-6xl mx-auto px-4`

## Responsive Behavior

- **Desktop (md+):** 3-column card grid, full-width iframe
- **Mobile:** Cards stack to single column, iframe scales to container width, iframe height stays 450px

## Data Flow

- Curated testimonials remain hardcoded in the component (same as today, just trimmed to 3)
- `BUSINESS` object imported from `lib/schema.ts` for Place ID, lat, lng
- Google handles fetching and rendering live reviews — no server-side data fetching needed

## Files Changed

| File | Change |
|------|--------|
| `components/TestimonialCards.tsx` | Rewrite: trim to 3 testimonials, add iframe embed + CTA below cards |

## No New Dependencies

This change adds zero npm packages. The only external resource is the Google Maps embed iframe, which is loaded client-side by the browser.

## Risks and Mitigations

| Risk | Mitigation |
|------|------------|
| Google changes/deprecates the embed URL format | Curated cards still display; embed failure is graceful (empty space, not broken page) |
| Embed loads slowly on poor connections | `loading="lazy"` defers until near viewport; curated cards show immediately |
| Google embed styling clashes with dark theme | Rounded wrapper with spacing isolates the light iframe from the dark section |

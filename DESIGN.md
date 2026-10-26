---
name: Physiovita Köln
description: A calm clinical wayfinding sheet for the physiotherapy practice.
colors:
  paper: "oklch(0.984 0.008 145)"
  ink: "oklch(0.27 0.03 158)"
  ink-soft: "oklch(0.4 0.03 158)"
  legend: "oklch(0.955 0.014 150)"
  line: "oklch(0.88 0.016 155)"
  destination: "oklch(0.36 0.062 158)"
  destination-ink: "oklch(0.975 0.008 145)"
  focus: "oklch(0.46 0.07 158)"
typography:
  display:
    fontFamily: "Petrona, Georgia, serif"
    fontSize: "clamp(3.1rem, 7.4vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Petrona, Georgia, serif"
    fontSize: "clamp(1.45rem, 2.4vw, 2rem)"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Petrona, Georgia, serif"
    fontSize: "2.25rem"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  label:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0"
rounded:
  none: "0px"
spacing:
  page: "1.25rem"
  page-lg: "2rem"
  section: "4rem"
  section-lg: "6rem"
components:
  plaque:
    backgroundColor: "{colors.destination}"
    textColor: "{colors.destination-ink}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
    padding: "1.75rem 2rem"
  nav-call:
    backgroundColor: "{colors.destination}"
    textColor: "{colors.destination-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 1rem"
    height: "2.5rem"
---

# Design System: Physiovita Köln

## Overview

**Creative North Star: "The wayfinding sheet"**

The site is a printed sheet for one address. Soft paper, green-black ink, and a single deep green that marks where to call. Type does the work. The map is a real OpenStreetMap excerpt, not an illustration of streets.

Density changes on purpose. The opening is sparse. The treatment index is a tight two-column list. The close returns to the green destination.

**Key Characteristics:**

- One deep green, used for the call and the contact close
- Square corners and hairline rules
- Petrona for names, Source Sans 3 for the index
- The phone number is set in tabular figures and is visible without scrolling

## Colors

Paper with a green cast, ink with a green cast, and one destination green.

### Primary

- **Destination green** (oklch(0.36 0.062 158)): the Termin plaque, the sticky phone control, and the contact band. Light text on it is destination ink (oklch(0.975 0.008 145)).

### Neutral

- **Sheet paper** (oklch(0.984 0.008 145)): the page ground.
- **Legend wash** (oklch(0.955 0.014 150)): the practice section.
- **Ink** (oklch(0.27 0.03 158)): headings and body.
- **Soft ink** (oklch(0.4 0.03 158)): secondary sentences. It is green-cast, not neutral gray.
- **Hairline** (oklch(0.88 0.016 155)): rules between index rows and cells.
- **Focus** (oklch(0.46 0.07 158)): the focus ring.

### Named Rules

**The One Green Rule.** Destination green is the call. It is not a tint for icons, cards, or section labels.

## Typography

**Display Font:** Petrona (Georgia fallback)
**Body Font:** Source Sans 3

**Character:** The name is set like a place on a sheet. The index is a plain grotesque a patient can scan.

### Hierarchy

- **Display** (500, clamp(3.1rem, 7.4vw, 6rem), line-height 0.94): the practice name.
- **Headline** (500, clamp(1.45rem, 2.4vw, 2rem)): the street line under the name, and the large phone number.
- **Title** (500, 2.25rem): section headings.
- **Body** (400, 1.125rem, about 62ch): explanatory sentences.
- **Label** (500, 0.875rem): hours, nav, and the words “Termin vereinbaren”.

### Named Rules

**The Place Name Rule.** Petrona is for the practice name, section titles, and the phone number. Source Sans 3 carries everything that is read as a list.

## Layout

The sheet is `max-w-6xl`, padded `1.25rem` and `2rem` from the small breakpoint. Sections stack in the order a visitor needs: call, treatments, practice, map, contact. On wide screens the treatment index and the practice facts split into a 4/8 and 7/5 grid with a hairline between columns. More space sits above a heading than below it. Anchor targets use `scroll-mt-20` so the sticky bar does not cover them.

## Elevation & Depth

The sheet is flat. Depth appears only when a surface lifts: the sticky bar after scroll, and the phone plaque on hover.

### Shadow Vocabulary

- **Bar rest** (`0 12px 28px -20px oklch(0.28 0.03 158 / 0.55)`): the sticky header once the page has moved.
- **Plaque rest** (`0 10px 24px -18px oklch(0.28 0.04 158 / 0.45)`): the Termin plaque at rest.
- **Plaque lift** (`0 18px 32px -16px oklch(0.28 0.04 158 / 0.55)` with `translateY(-3px)`): hover and focus on the plaque. Easing is `cubic-bezier(0.16, 1, 0.3, 1)` over 0.45s. Reduced motion keeps the plaque still.

### Named Rules

**The Flat Sheet Rule.** No glass, no blur, no hard offset shadow. A shadow has a vertical offset and a soft blur, and only on the bar or the plaque.

## Shapes

Corners are square. Structure is a 1px hairline. The plaque is one rectangle divided into the number and three hour cells. On a narrow screen those cells stack. The map sits in a hairline frame.

## Components

### Navigation

A sticky paper bar. The wordmark is Petrona. Section links are body size with an underline on hover. The phone control is a square destination-green block. Below the `md` breakpoint the section links move into a disclosure under the bar, and the control reads “Termin”.

### Plaque

The signature control. Destination green, square, the number in Petrona at display scale, hours in three stable cells. The whole rectangle is the telephone link.

### Index

Treatment names are a two-column list on wide screens and one column on a phone. Each name sits on a top hairline. There are no icons and no cards.

### Contact band

The same destination green as the plaque, with the number repeated large, then email, fax, hours, and the address.

### Do's and Don'ts

### Do:

- **Do** keep the telephone number visible in the first screen, in the green plaque.
- **Do** set hours and the phone number in tabular figures.
- **Do** use the real map for Anfahrt and name OpenStreetMap in the caption.

### Don't:

- **Don't** add a kicker above a heading.
- **Don't** turn treatments into equal icon cards.
- **Don't** draw a street map. A drawn route would be read as directions.
- **Don't** invent reviews, prices, team names, or treatment outcomes.

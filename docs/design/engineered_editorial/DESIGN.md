---
name: Engineered Editorial
colors:
  surface: '#f7f9ff'
  surface-dim: '#d6dae2'
  surface-bright: '#f7f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f4fb'
  surface-container: '#eaeef6'
  surface-container-high: '#e4e8f0'
  surface-container-highest: '#dee3ea'
  on-surface: '#171c21'
  on-surface-variant: '#3d494c'
  inverse-surface: '#2c3137'
  inverse-on-surface: '#edf1f8'
  outline: '#6d797d'
  outline-variant: '#bcc9cc'
  surface-tint: '#006878'
  primary: '#006878'
  on-primary: '#ffffff'
  primary-container: '#05abc4'
  on-primary-container: '#003943'
  inverse-primary: '#57d7f1'
  secondary: '#006b5e'
  on-secondary: '#ffffff'
  secondary-container: '#56fbe2'
  on-secondary-container: '#007164'
  tertiary: '#7e3ac1'
  on-tertiary: '#ffffff'
  tertiary-container: '#be7eff'
  on-tertiary-container: '#4d0088'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a6eeff'
  primary-fixed-dim: '#57d7f1'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#004e5b'
  secondary-fixed: '#56fbe2'
  secondary-fixed-dim: '#29dec6'
  on-secondary-fixed: '#00201b'
  on-secondary-fixed-variant: '#005047'
  tertiary-fixed: '#f0dbff'
  tertiary-fixed-dim: '#dcb8ff'
  on-tertiary-fixed: '#2c0051'
  on-tertiary-fixed-variant: '#6419a7'
  background: '#f7f9ff'
  on-background: '#171c21'
  surface-variant: '#dee3ea'
typography:
  display-hero:
    fontFamily: Hammersmith One
    fontSize: 52px
    fontWeight: '400'
    lineHeight: 60px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Hammersmith One
    fontSize: 44px
    fontWeight: '400'
    lineHeight: 50px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Hammersmith One
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hammersmith One
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 38px
    letterSpacing: 0em
  headline-md:
    fontFamily: Hammersmith One
    fontSize: 26px
    fontWeight: '400'
    lineHeight: 32px
  headline-sm:
    fontFamily: Hammersmith One
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 28px
  eyebrow-lg:
    fontFamily: Bebas Neue
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0.15em
  eyebrow-sm:
    fontFamily: Bebas Neue
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.2em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-ui:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  code-spec:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2rem
  margin: 1.25rem
  margin-tablet: 2.5rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  section-padding-min: 5rem
  section-padding-max: 8rem
---

## Brand & Style

This design system embodies an engineered, minimal, and editorial sensibility built for high-performance digital craft. The aesthetic rejects arbitrary ornamentation, trendy playfulness, and visual clutter in favor of crisp architectural precision, structural clarity, and confident whitespace. It balances the rigor of technical infrastructure with the curated rhythm of an editorial publication.

The target audience consists of founders, product leaders, and enterprise stakeholders seeking uncompromising execution in digital product engineering and high-end design. The interface must evoke certainty, structural weight, and intellectual calm—communicating that every component, margin, and type token is mathematically intentional.

### Style Directives
- **Structural Cleanliness:** Interfaces rely on disciplined alignment, razor-sharp 1px dividers, and ample negative space rather than heavy drop shadows or decorative gradients.
- **Architectural Framing:** Content modules are treated as structural panels and datagrids, nodding to system architecture diagrams and refined technical briefs.
- **Tone & Voice:** Direct, analytical, and authoritative. Copy reads like a senior systems architect explaining an optimal solution: devoid of hyperbole, jargon, or marketing fluff.

## Colors

The color palette is calibrated around a disciplined architectural contrast ratio, using light space to provide clarity, vibrant technical cyans to establish interaction paths, and an ultra-controlled purple accent for high-value focal points.

### Palette Roles & Ratios
- **Base Canvas (60–70%):** `#FFFFFF` serves as the primary ground for content blocks, paired with an alternating section background of `#F4F6F8` to establish layered sectional rhythm without hard demarcations.
- **Interaction & Vitality (25–35%):** `#05ABC4` (Primary Accent) defines dynamic links, focus outlines, and primary action surfaces. `#04D3BC` (Hover Accent) delivers precise energetic feedback on active and hovered states.
- **Focal Anchor (Max 5%):** `#681FAB` (Rare Marketing Accent) is strictly limited to top-tier enterprise callouts, premium certification markers, or critical conversion nodes. It must never dominate secondary or structural elements.
- **Typography & Structural Contrast:** `#0A0F14` supplies the primary high-contrast text and authoritative boundary lines. `#5A6570` handles meta-data, secondary specifications, and supplementary body copy.

## Typography

The typographic hierarchy establishes an explicit architectural cadence by combining three distinct voices:

1. **Hammersmith One (Headings):** Grounded, low-contrast, and sturdy. It lends technical authority without feeling industrial or cold. Used for major section titles and conceptual anchors.
2. **Bebas Neue (Eyebrows & Technical Labels):** Displayed exclusively in uppercase with tracking extended from `0.15em` to `0.2em`. Acts as an indexing taxonomy for sections, spec callouts, and technical categorizations.
3. **Inter (Body & System Interface):** The workhorse for all longform editorial text, interface data tables, inputs, and functional navigation elements. Set with ample line-height to maintain legibility across complex technical specs.

## Layout & Spacing

The layout is built on a responsive 12-column grid system that emphasizes editorial breathing room and structural discipline.

### Grid Architecture
- **Desktop (≥ 1024px):** 12 equal fluid columns with a max content container of 1280px, `gutter-desktop` (2rem / 32px), and outer margins of `margin-desktop` (4rem / 64px).
- **Tablet (768px – 1023px):** 8 columns, `gutter` (1.5rem / 24px), outer margins of `margin-tablet` (2.5rem / 40px).
- **Mobile (< 768px):** 4 columns, `gutter` (1rem / 16px), outer margins of `margin` (1.25rem / 20px).

### Vertical Section Cadence
Sections breathe deliberately with a clamped vertical rhythm of `80px` (`section-padding-min`) to `128px` (`section-padding-max`). This massive vertical pacing mimics luxury print design and elite engineering portfolios, commanding the user's attention on one isolated topic per viewport transition.

## Elevation & Depth

This system intentionally eliminates traditional heavy drop shadows and fuzzy ambient spreads. Depth is instead achieved through physical layering, hair-thin technical borders, and surface-tier stacking:

- **Surface Tiers:** Baseline canvas is `#FFFFFF`. Stacked modular panels and cards sit on `#F4F6F8` or maintain `#FFFFFF` with a 1px solid stroke of `#E1E6EB` (`rgba(10, 15, 20, 0.08)`).
- **Interactive Depth:** Hovered cards and modules undergo a micro-elevation consisting of a crisp 1px stroke transition to `#05ABC4` paired with an ultra-diffused, technical shadow: `0 8px 24px -4px rgba(10, 15, 20, 0.04)`.
- **Navigation Overlay:** Fixed navigation utilizes a layered backdrop filter (`backdrop-filter: blur(12px)`) with `rgba(255, 255, 255, 0.88)` opacity and a bottom structural border of `1px solid rgba(10, 15, 20, 0.06)`.

## Shapes

The design system employs a calculated juxtaposition of pill-shaped interactive triggers against razor-sharp and subtly filleted structural containers:

- **Interactive Controls (Pills):** All buttons, filter pills, search capsules, and status tags are completely rounded (`rounded-full` / 9999px) to signal tactile affordance and intuitive touch targets.
- **Architectural Panels & Cards:** Structural modules, code inspectors, and data cards utilize a minimal corner radius of `4px` to `8px` or remain purely squared (0px) to preserve technical rigor and datagrid aesthetics.

## Components

### Brand Identity Lockup
- **Bug Icon:** A geometric 24px circular blue glyph `#05ABC4` housing an engineered micro-mark.
- **Wordmark:** Set in uppercase, tracking `0.1em`, using high-contrast `#0A0F14`.
- **Microtag:** Positioned directly beneath the wordmark in Bebas Neue, reading `TECHNOLOGY`, tracking `0.25em`, colored `#5A6570`, sizing fixed at `10px`.

### Navigation Pattern
- Floating or sticky shell pinned to the top edge. 
- Integrated pill-shaped island framing primary navigation links (`Inter`, 14px, medium weight) with high-contrast active states.
- CTA pill docked directly on the right margin of the nav container.

### Buttons
- **Primary:** Full pill (`border-radius: 9999px`), background `#05ABC4`, foreground `#FFFFFF`, padding `12px 24px` (`px-6 py-3`). Text set in `Inter` 14px, weight 600. On hover, background transitions smoothly to `#04D3BC`.
- **Secondary:** Full pill, background `#FFFFFF`, border `1.5px solid #05ABC4`, text `#05ABC4`, padding `10.5px 22.5px`. On hover, background shifts to `#F4F6F8`, border and text transition to `#04D3BC`.
- **Ghost:** Background transparent, text `#0A0F14`, weight 500. On hover, reveals a crisp `2px` underline in `#05ABC4` with 4px vertical clearance; text shifts to `#05ABC4`.

### Cards & Panels
- Constructed with `#FFFFFF` or `#F4F6F8` backdrops, surrounded by a 1px border (`#E1E6EB`).
- Top eyebrow meta-spec set in `Bebas Neue` (`eyebrow-sm`), tracking `0.15em`, color `#5A6570`.
- Generous internal card padding: `32px` on desktop, `20px` on mobile.

### Chips & Badges
- Fully rounded pills (`rounded-full`), height `24px` to `28px`.
- Technical specs: `#F4F6F8` fill, `1px solid #E1E6EB` border, typography set in `Bebas Neue` uppercase (`12px`, tracking `0.15em`), text `#5A6570`.
- Active or focused filter chips shift to `#05ABC4` fill with `#FFFFFF` text.

### Form Inputs
- Surface `#FFFFFF`, border `1px solid #5A6570` at 30% opacity, border-radius `4px`.
- Padding `12px 16px`, typography `Inter` 15px.
- Focus state: border color `#05ABC4` with zero drop-shadow spread, maintaining absolute edge crispness.

### Selection Controls (Checkboxes & Radios)
- Checkboxes: 18px square, `2px` border-radius, `1.5px` border `#5A6570`. Checked state renders full `#05ABC4` background with an engineered white check vector.
- Radio buttons: 18px concentric circles, checked state displays an inner solid dot of `#05ABC4` bordered by a 2px gap and outer stroke.
# HerbCodes: Stitch Design Prompts

Stitch (stitch.withgoogle.com) generates UI mockups from natural-language prompts. It works best when each prompt is focused on one screen, describes the visual system concretely, and stays under roughly 400 words.

**How to use this file**

1. Start a new Stitch project.
2. For each screen, paste the **Brand Block** (Section 1) followed by the specific **Screen Prompt** for that page.
3. Iterate on the returned design with follow-up prompts if needed.
4. Screens can be generated in any order, but Home first gives you the strongest visual anchor.

---

## 1. Brand Block (paste at the top of every screen prompt)

```
Brand: HerbCodes Technology, a premium web design and development studio.
Aesthetic: engineered, minimal, editorial, confident. Not decorative, not playful. Inspired by ref.digital (crisp), northgarden.com (editorial whitespace), allys.mu (layered depth), trajectorywebdesign.com (nav pattern).

Colors:
Primary background white (#FFFFFF).
Alt section background soft off-white (#F4F6F8).
Text near-black (#0A0F14).
Secondary text slate (#5A6570).
Primary accent Herb Cyan (#05ABC4).
Hover accent Herb Mint (#04D3BC).
Rare marketing accent Herb Purple (#681FAB), max 5 percent of any view.
Ratio: white 60 to 70 percent, cyan or mint 25 to 35 percent, purple 5 percent max.

Typography:
Headings in Hammersmith One.
Display eyebrows and labels in Bebas Neue, uppercase, wide letter spacing.
Body and UI in Inter.
H1 clamp 44 to 52px, H2 32 to 36px, body 16 to 18px.

Buttons:
Primary: cyan pill, white text, rounded-full, px-6 py-3.
Secondary: white pill, 1.5px cyan border, cyan text.
Ghost: text with cyan underline on hover.

Logo: a small circular blue bug icon paired with "HERBCODES" wordmark, with "TECHNOLOGY" microtag below.

Layout: generous whitespace, 12-column grid, section vertical padding 80 to 128px, editorial rhythm, no clutter.

Voice for any placeholder copy: engineer explaining a solution. Direct. Concrete. No hype adjectives.
```

---

## 2. Screen: Home

```
[BRAND BLOCK ABOVE]

Design the Home page for HerbCodes Technology, top to bottom in this order:

1. Sticky header on white with subtle backdrop blur. Left: HerbCodes bug icon plus wordmark. Center: nav links Work, Process, About in Inter medium 14px. Right: cyan pill "Contact" button with a double chevron glyph after the label.

2. Hero section, full viewport height, white background.
Left half: large Hammersmith One headline in near-black, three lines: "We build modern, reliable, scalable digital systems." Below headline: one-line Inter subtitle in slate: "Web design, development, and management for teams that need it right."
Two CTAs side by side: cyan pill "See our work" and white outlined cyan pill "Start a project."
Right half: an abstract dot-grid pattern with a soft cyan radial gradient acting as a spotlight. Subtle vertical scroll indicator at the bottom-center: thin cyan line with a moving dot.

3. Services section on white.
Eyebrow "WHAT WE DO" in Bebas Neue cyan, wide letter spacing.
H2 in Hammersmith One: "Services engineered for the long term."
3-column grid of 11 typographic service cards: Web Development, Shopify and E-Commerce, Website Redesign and Revamp, Management and Maintenance, Cloud and DevOps, Digital Marketing and SEO, Automation and Systems Integration, Technical Consulting, Technical Training, Brand and Digital Product Support, Ongoing Partnership.
Each card: service name in Hammersmith One 20px, two-line description in Inter slate, a small cyan arrow bottom-right. No icons. Card background white, hover state soft off-white.

4. Selected Work section on soft off-white.
Eyebrow "SELECTED WORK" in Bebas Neue cyan.
H2: "Recent projects."
Staggered 2-column editorial layout with three large project cards for Realxworld, Ituen Basi, Studio SDK CGI. Each card: 16:10 cover image, project name in Hammersmith One 24px, category tag in Bebas Neue small caps, small cyan arrow.
Below the grid: a text link "View all work" with an animated cyan arrow.

5. Trusted By section on white.
Eyebrow "TRUSTED BY" in Bebas Neue cyan.
A horizontal marquee row of 9 grayscale client logos (Ituen Basi, Bakonery, Founder Groundworks, Katy Express Track, Creator Playbook, Realxworld, Studio SDK CGI, LeapCrest, 1010 Coding).
Below: two testimonial cards side by side. Each card: large cyan quotation mark, quote in Hammersmith One 22px, attribution in Inter small slate.

6. Final CTA band, full width, background near-black (#0A0F14), white text.
Centered H2 in Hammersmith One: "Let's build something reliable."
One-line Inter subtitle in soft gray.
Cyan pill CTA "Start a project."
Small print below: "Response within 24 hours."

7. Footer, near-black background, white text.
Three columns. Left: bug icon in white with cyan bug body, tagline "Clean. Reliable. Engineered.", four social icons (LinkedIn, X, GitHub, Instagram) with cyan hover.
Middle: sitemap (Work, Process, About, Contact).
Right: contact block with email hello@herbcodes.com as a cyan link and location "Ogun State, Nigeria".
Bottom strip in slate: "© 2026 HerbCodes Technology. All rights reserved."
```

---

## 3. Screen: Work / Portfolio

```
[BRAND BLOCK ABOVE]

Design the Work page for HerbCodes Technology.

1. Same sticky header as Home. "Work" nav item shows the cyan underline in its active state.

2. Page header on white.
Eyebrow "PORTFOLIO" in Bebas Neue cyan.
H1 in Hammersmith One: "Selected work."
One-paragraph intro in Inter slate under the H1.

3. Filter row: thin horizontal row of text filters in Inter medium: All, Web, E-commerce, Redesign, Full-stack. Active filter shows a 2px cyan underline.

4. Portfolio grid on soft off-white.
Asymmetric editorial 2-column layout with alternating vertical offsets (second column starts 80px lower than the first). 9 project cards total for: Realxworld, Ituen Basi, Studio SDK CGI, LeapCrest, Creator Playbook, Founder Groundworks, Bakonery Bits + Bobs, Katy Express Track, 1010 Coding.
Each card: cover image at 16:10 with slight rounded corners, project name in Hammersmith One 22px near-black, category in Bebas Neue small caps slate, small cyan arrow bottom-right. Hover state: cover image scales slightly, arrow shifts right, subtle cyan glow.

5. Final CTA band, same as Home.
6. Footer, same as Home.
```

---

## 4. Screen: Project Modal (case study)

```
[BRAND BLOCK ABOVE]

Design an expanding case study modal that opens from a project card on the Work page.

The modal overlays a dimmed near-black background at 80 percent opacity with backdrop blur. Modal fills 90 percent of the viewport with rounded corners on a white surface.

Structure inside the modal, scrollable:
1. Top bar: close icon top-right in slate, cyan on hover. No other chrome.
2. Cover image, full modal width, 60vh tall.
3. Project title in Hammersmith One 44px near-black.
Below title: category chip in Bebas Neue cyan on soft off-white, year in Inter slate.
4. Two-column metadata block: Client, Role, Stack, Live URL. Each label in Bebas Neue small caps slate, each value in Inter medium near-black. Live URL is a cyan text link with a small external-link icon.
5. "Overview" section: H2 in Hammersmith One 32px, two-paragraph Inter body copy in near-black.
6. "The problem" section: H2 plus two-paragraph body.
7. "Approach" section: H2 plus body plus an optional numbered list.
8. "Outcome" section: H2 plus a row of three large stat blocks. Each stat: large number in Hammersmith One 56px cyan, small Inter slate label below.
9. Gallery grid: 2-column grid of four additional screenshots at 16:10 with rounded corners.
10. Close CTA at bottom: secondary pill "Close" and a cyan text link "Next project" with animated arrow.

Use the case study for Realxworld as the example content:
- Client: Realxworld
- Role: Full-stack design and development, Phase 1 and Phase 2
- Stack: Next.js, PostgreSQL, Prisma, Redis, Cloudinary, Cloudflare
- Live URL: realxworld.net
```

---

## 5. Screen: Process

```
[BRAND BLOCK ABOVE]

Design the Process page for HerbCodes Technology. Inspiration: trajectorywebdesign.com/process (scroll-driven, editorial, phase-by-phase depth), adapted to HerbCodes brand.

1. Same sticky header. "Process" nav item is active.

2. Intro hero on white.
Eyebrow "OUR PROCESS" in Bebas Neue cyan.
H1 in Hammersmith One: "How we work."
One-paragraph subtitle in Inter slate explaining the studio's philosophy: precision, clarity, engineered outcomes.
Bottom-center: cyan scroll cue.

3. Progress rail on left edge, thin cyan vertical line that fills as user scrolls through phases (0 to 100 percent).

4. Phase sections, one per viewport. For each phase, layout is a 12-column grid:
Left 4 columns: a huge outlined Bebas Neue phase number (e.g. "01") in cyan, sticky as the user scrolls through the phase.
Right 7 columns: phase title in Hammersmith One 44px, followed by two paragraphs in Inter body and a bulleted list of deliverables.

Phase 01: Discover. Goals, audits, stakeholder interviews, technical scoping.
Phase 02: Define. Information architecture, content strategy, technical requirements, success metrics.
Phase 03: Design. Wireframes, visual direction, interaction design, prototypes.
Phase 04: Develop. Build, review cycles, QA, performance and accessibility passes.
Phase 05: Deploy. Launch prep, DNS, SSL, analytics, handover.
Phase 06: Manage. Ongoing maintenance, security, performance monitoring, content updates.

Between phases: thin cyan horizontal divider.

5. "What you get" summary section on soft off-white: a 6-column grid, one column per phase, with deliverables as short bulleted lists in Inter body.

6. Final CTA band, same as Home.
7. Footer, same as Home.
```

---

## 6. Screen: About

```
[BRAND BLOCK ABOVE]

Design the About page for HerbCodes Technology.

1. Same sticky header. "About" nav item is active.

2. Intro section on white.
Eyebrow "ABOUT" in Bebas Neue cyan.
H1 in Hammersmith One: "Engineered systems, built with care."
Two paragraphs in Inter body: HerbCodes builds modern, reliable, scalable digital systems for teams that need work done right the first time. Web design, development, and management under one roof.

3. Founder section on soft off-white.
Two-column layout. Left column: portrait photo in a soft off-white circular frame, 400x400. Right column: name "Femi" in Hammersmith One 36px, role "Founder, Web Designer and Developer" in Bebas Neue cyan, three-paragraph Inter body bio noting the studio's Nigerian base in Ogun State, engineering background, and focus on precision.

4. Values section on white.
Eyebrow "PRINCIPLES" in Bebas Neue cyan.
H2: "How we think."
4-column grid of value cards: Precision, Reliability, Clarity, Long-term thinking. Each card: value name in Hammersmith One 22px cyan, two-line description in Inter body slate.

5. Capabilities strip on soft off-white.
Eyebrow "CAPABILITIES" in Bebas Neue cyan.
A wrapping horizontal row of tags in Bebas Neue small caps: Next.js, React, Drupal, Shopify, WordPress, AWS, Vercel, Supabase, Tailwind, Node.js, Cloudflare, DNS/SSL, SEO. Each tag has a thin cyan border, transparent background, cyan text.

6. Final CTA band, same as Home.
7. Footer, same as Home.
```

---

## 7. Component (optional): Global Nav Detail

```
[BRAND BLOCK ABOVE]

Design the global header component for HerbCodes Technology in two states: default (top of page, transparent white) and scrolled (compact, backdrop-blurred white at 90 percent opacity).

Left: HerbCodes bug icon (small circular blue bug) plus HERBCODES wordmark in Hammersmith One black, plus TECHNOLOGY microtag below in Bebas Neue tracked wide.

Center-left: nav items Work, Process, About in Inter medium 14px near-black, spaced 32px apart. Hover state draws a 2px cyan underline left to right.

Right: a white pill Contact button with cyan border and cyan text, containing a right-pointing double chevron glyph after the label.

Include a mobile version at 375px width: hamburger icon right-aligned. Tapping opens a full-screen white overlay with large Hammersmith One nav items stacked vertically, cyan underline animating on hover.
```

---

## 8. Component (optional): Footer Detail

```
[BRAND BLOCK ABOVE]

Design the footer for HerbCodes Technology. Full-width band on near-black (#0A0F14) with white text.

Three columns.

Column 1: HerbCodes bug icon in white with cyan bug body. Below: tagline in Inter medium "Clean. Reliable. Engineered." Below: four social icons in a horizontal row (LinkedIn, X, GitHub, Instagram) in white with cyan hover.

Column 2: Header "SITEMAP" in Bebas Neue cyan. Below: four vertical text links (Work, Process, About, Contact) in Inter body white.

Column 3: Header "CONTACT" in Bebas Neue cyan. Below: email link "hello@herbcodes.com" in Inter body with cyan hover. Location line "Ogun State, Nigeria" in Inter body slate. A white pill CTA "Start a project" with cyan text.

Bottom strip: thin cyan divider, then a small Inter slate row with "© 2026 HerbCodes Technology. All rights reserved." on the left and small legal links (Privacy, Terms) on the right.
```

---

## Tips for using these prompts in Stitch

- Send the Brand Block plus one Screen Prompt at a time, not everything at once. Stitch handles focused single-screen prompts best.
- If a returned design misses a detail, follow up with a short prompt like "Increase whitespace between sections" or "Make the eyebrow labels cyan, not slate."
- If Stitch pushes toward heavy visual decoration, add "Reduce decorative elements. Keep the layout editorial and minimal" as a follow-up.
- Ask Stitch to export the design system tokens once you have a look you like, then hand those tokens plus the Cursor build prompt to your developer.

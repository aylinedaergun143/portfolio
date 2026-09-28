# Aylin Eda Ergün --- UX/UI Portfolio

## Codex Master Project Specification

> This file is the source of truth for building the portfolio website.\
> Do not redesign the project content into a single generic case-study
> template. Keep each project's own narrative and section structure
> while maintaining one consistent visual system across the website.

------------------------------------------------------------------------

## Current Build Status

-   Homepage is implemented.
-   About page is implemented.
-   Commencium case study is implemented and is the reference for the
    case-study visual system.
-   Stitch case study is implemented using the shared case-study visual
    language while retaining its project-specific structure.
-   Case-study sections use the same subtle, one-time scroll reveal:
    opacity `0` to `1`, approximately `16px` upward movement, about
    `600ms`, smooth ease-out, with `prefers-reduced-motion` support.
-   The global page background is pure white (`#FFFFFF`); project colors
    and gradients remain inside project visuals.
-   Homepage project previews link to their corresponding case-study
    routes. Commencium links to `/work/commencium/` and Stitch links to
    `/work/stitch/`.
-   Pingu, Pinty, and Bank of Trust are still to be implemented.

Reusable case-study components and conventions established through
Commencium and Stitch:

-   Shared global navbar, footer, responsive max-width container, grid,
    typography hierarchy, metadata styling, section spacing, dividers,
    image treatment, and Next Project navigation.
-   A reusable section-level scroll reveal behavior that animates each
    section once as it enters the viewport and preserves normal hero
    visibility on initial load.
-   Shared case-study building blocks for project heroes, numbered
    section introductions, project facts/metadata, full-width media,
    split text-and-image layouts, image grids, and responsive editorial
    compositions.
-   Real headings, paragraphs, statistics, captions, metadata, and
    insights remain HTML text; only project visuals are rendered as
    image assets, while simple diagrams and layouts are rebuilt in
    HTML/CSS when appropriate.
-   Project pages share the same visual and interaction language without
    forcing identical section sequences or repetitive card layouts.

------------------------------------------------------------------------

## 1. Project Goal

Build a responsive personal portfolio website for **Aylin Eda Ergün**,
an Industrial Designer focused on **UX/UI, digital products,
product-service systems, UX research, prototyping, and product design**.

The website should feel: - Minimal - Editorial - Contemporary -
Professional - Image-driven - Spacious - Calm rather than flashy -
Appropriate for UX/UI and Product Design recruiting

The website contains **5 selected projects**, in this exact order:

1.  Commencium
2.  Stitch
3.  Pingu
4.  Pinty
5.  Bank of Trust

**Bank of Trust must always be the final project.**

------------------------------------------------------------------------

## 2. Core Design Direction

### Primary visual reference: Velora

Use the design language shown in the supplied Velora screenshots as the
main visual reference.

Key characteristics:

-   Near-white / off-white page background
-   Black primary typography
-   Medium/light gray secondary typography
-   Large modern sans-serif headings
-   Oversized name/project typography
-   Generous whitespace
-   Editorial layouts
-   Thin light-gray divider lines
-   Minimal use of borders
-   Avoid excessive cards and containers
-   Asymmetrical but controlled grid compositions
-   Images should have enough room to become major visual elements
-   Minimal UI decoration
-   Subtle interactions and motion only
-   Clean horizontal navigation
-   Large margins on desktop
-   Strong hierarchy created primarily through type scale and whitespace

The portfolio shell should stay neutral with a subtle cool blue
undertone.\
**Project-specific colors should mainly come from project imagery**, not
from the global website chrome.

### Typeface

Use a clean modern grotesk/sans-serif that visually matches the Velora
reference.

If the exact Velora font cannot be identified reliably, use a close
high-quality alternative such as: - Inter - Geist - Manrope

Do not introduce decorative display fonts.

Typography should feel close to the reference: - Large, bold/medium hero
typography - Regular/medium body typography - Gray secondary text -
Tight but comfortable heading line-height - Comfortable body line-height

### Suggested global colors

These are implementation defaults, not project branding:

``` css
--background: #FCFDFF;
--surface: #FFFFFF;
--text-primary: #0B172D;
--text-secondary: #2E425A;
--text-tertiary: #8290A3;
--divider: #E6EAF0;
```

The portfolio uses a subtle cool blue-neutral palette.

-   Use deep navy (`#0B172D`) instead of pure black for primary
    typography.
-   Use muted blue-gray (`#2E425A`) for secondary information.
-   Keep the background extremely close to white with only a subtle cool
    tint (`#FCFDFF`).
-   Use `#8290A3` for tertiary text and `#E6EAF0` for subtle dividers.
-   Project-specific colors should still primarily come from project
    imagery.
-   Do not introduce additional accent colors unless they belong to a
    project's own visual identity.

### Layout

Use a responsive max-width container rather than fixed 1920px
positioning.

Suggested behavior: - Desktop: generous margins, approximately
1280--1440px content area - Tablet: reorganize two-column sections
cleanly - Mobile: single-column flow with comfortable side padding - Do
not reproduce Figma coordinates literally - Avoid unnecessary boxed
sections - Let typography, imagery, and whitespace define hierarchy

------------------------------------------------------------------------

## 3. Reference Roles

Do not copy any reference website literally.

### Velora

Use for: - Overall visual identity - Typography character - Spacing -
Neutral colors - Navigation - About/Experience presentation - Editorial
rhythm

### Matt Fredette portfolio

Use as inspiration for: - Selected Work / project presentation - Large
project imagery - Large project titles - Small project
metadata/category - Short value proposition - Avoiding generic card
grids

### Nicole Roberts portfolio

Use as inspiration for: - Case-study readability - Strong Project
Overview sections - Clear problem framing - Research → insight →
solution storytelling - Large, scannable statements - Explaining why a
design decision matters

Important: project content and project processes come from Aylin's own
portfolio material, not from these reference sites.

------------------------------------------------------------------------

## 4. Global Website Architecture

``` text
/
├── Home
│   ├── Navigation
│   ├── Hero
│   ├── Selected Work
│   ├── About Preview
│   └── Footer / Contact
│
├── /work/commencium
├── /work/stitch
├── /work/pingu
├── /work/pinty
├── /work/bank-of-trust
│
└── /about
    ├── About
    ├── Experience
    ├── Education
    ├── Expertise
    └── Interests
```

Suggested top navigation:

``` text
Aylin Eda Ergün                         Work   About   Contact
```

Keep navigation simple. A separate Services or Reviews section is not
needed.

------------------------------------------------------------------------

## 5. Homepage

### Hero

Adapt the spacious Velora composition to Aylin's identity.

Primary information:

``` text
Aylin Eda Ergün
Product & UX/UI Designer
```

Use a short positioning statement rather than a long biography.

The name can function as a major visual element, similar to the
oversized "Jane Smith" treatment in the Velora reference.

Hero should feel editorial, not like a SaaS landing page.

Do not use: - Gradient CTA buttons - Multiple pill badges -
Glassmorphism - Generic portfolio cards - Excessive animated text

### Selected Work

Present the five projects vertically with generous spacing.

Exact order:

``` text
01 — Commencium
02 — Stitch
03 — Pingu
04 — Pinty
05 — Bank of Trust
```

Each project preview should contain: - Project number - Category /
discipline - Project title - One-line value proposition - Large project
visual - Optional year

Prefer large editorial project blocks rather than a 2x2/3-column card
grid.

Example visual grammar:

``` text
01                                      UX/UI · 2026

COMMENCIUM
A cross-platform experience redefining
team engagement and belonging in remote work.

[ LARGE PROJECT IMAGE ]
```

Project previews should be clickable and lead to the individual case
study.

------------------------------------------------------------------------

## 6. About Page

Use the supplied Velora About screenshot as the primary layout
reference.

### Desktop layout

Two columns.

#### Left column

``` text
— About Me

Aylin Eda
Ergün

[short designer introduction]

Contact me →
```

Keep the introduction concise: approximately 3--4 lines on desktop.

#### Right column --- Experience

Use clean horizontal rows separated by thin dividers.

Each row contains: - Role - Company - Date - `+` icon

Clicking `+` may expand an accordion with a concise role description /
responsibilities.

Experience source content:

``` text
UX/UI Design Internship
COMMENCIS Technology Inc.
July–August 2026

Graduation Project
COMMENCIS Technology Inc.
February–June 2026

Industrial Design Internship
DESIGNNOBIS Industrial Design Consultancy Services
September–November 2024

Industrial Design Internship
TANDEM Product Development Services
July–September 2024
```

### Education

``` text
2021–2026
Bachelor of Industrial Design
Middle East Technical University (METU)
GPA: 3.29 / 4

Spring 2025 — Erasmus Mobility
University of Deusto, Bilbao
Industrial Design Engineering
```

### Expertise

Relevant source material includes:

``` text
UX/UI Design
Figma
UX Research
Usability Testing
Maze
AI Wireframing
Stitch
UX Pilot
OpenAI Codex
Claude Code
Vibe Coding
Fusion 360
Blender
3D Modelling & Rendering
```

Do not show this as a dense CV table. Integrate it into the editorial
About layout.

### Interests

``` text
Dancesport
Licensed dancer since 2017

Yoga
Yoga Alliance RYS 200 Teacher Certificate
```

Keep this secondary to design experience.

------------------------------------------------------------------------

# 7. Case Study System

## Shared visual grammar

All case studies should share: - Navigation - Typography - Max-width
system - Section spacing - Divider style - Image treatment - Project
metadata styling - Footer - Next-project navigation

But **do not force all projects into the same content template**.

Each project has its own process and therefore its own section sequence.

### Shared project hero

Every project should begin with a consistent hero grammar:

``` text
PROJECT NAME

Short project description / subtitle

[ LARGE HERO IMAGE ]

OVERVIEW

Short description

Role
Timeline
Year
Project Type
Contribution / Scope
```

Keep metadata understated and editorial.

------------------------------------------------------------------------

# 8. Project 01 --- Commencium

## Core description

**Commencium --- A Cross-Platform Redefining Team Engagement and
Belonging in Remote Work**

A mobile and desktop app solution designed to build meaningful
connections in remote work environments by helping people gather, share,
and connect in order to strengthen company culture and belonging.

Context: - Future Commencer Internship Programme - 6 weeks - August
2026 - Team project - Team members: Elif Ceren Uçar, Mertcan Aydoğmuş

## Project goal

Design a digital solution that helps remote-working teams collaborate,
communicate, and engage with each other in a more meaningful way.

The concept should go beyond productivity tools and explore how digital
experiences can support: - Trust - Belonging - Creativity - Everyday
team interaction

## Problem statement

Remote workers struggle to establish sustainable bonds and maintain
visibility with their teams during onboarding and subsequent work
processes due to the loss of natural office interactions.

This creates a need for low-pressure and spontaneous socialization
throughout the journey, from the initial start date through project
cycles and after-work hours.

## Recommended section order

``` text
Project Overview
Project Goals & Brief
Problem Statement
Design Process
Research Overview
Research Insights
Ideation
Product Development
Usability Testing & Improvements
UI Design System
Final Experience — Mobile App
Desktop App & Vibe Coding
Prototype
```

## Research

Research included: - Literature review - Industry benchmarking -
Workplace pattern mapping - Survey with 28 participants -
Semi-structured interviews with 5 Commencis designers from different
projects

### Benchmark insights

-   Low regular usage: regular adoption and daily workflow usage remain
    low.
-   Familiar interfaces: social-media feeds and game-like environments
    can reduce adaptation friction.
-   Productivity-based products: many benchmarks remain focused on
    productivity rather than meaningful social connection.

### Main research insights

**Spontaneous Interaction** - 78% missed spontaneous water-cooler
interactions the most.

**Small Group First** - 58% preferred micro-gatherings of 2--3 people
over crowded events.

**Cross-Team Talks** - 66% struggled with losing informal touchpoints
with other teams.

**Interest-Driven Connection** - Cold interactions fail; organic bonding
benefits from common hobbies, topics, or automated facilitation.

**Lack of Adaptation** - Without structured re-engagement, a divide may
remain between original teams and new hires.

## Ideation

Methods/content included: - Morphological chart - Round Robin -
Persona - Journey mapping - Edge-case definition

Core concepts: - Adaptation - Spontaneous interaction - Sustainable
bonds

Potential feature areas: - Virtual office experience - Games - GatherHub

## Product development

Initial concepts explored: - Break rooms such as water-cooler chats and
coffee breaks - Calendar/events/meetings - Interest- and project-based
communities - Matching based on common points

Desktop and mobile experiences were explored.

## Usability testing

Moderated qualitative usability testing used a think-aloud approach,
online through Teams and face-to-face.

Improvements were prioritized through an impact/effort matrix.

Important improvement directions included: - Better feed
wording/content - Sharing within the feed - Location-based communities -
Differentiating hobby- and work-based communities - Renaming breakout
rooms - Improving availability controls - Saving feed items - Better
quick-link placement - Matching filters and prioritization - Desktop
support for quick chats - Improved onboarding content - Frictionless
transition to Teams - Community filtering - Room history / closed-room
states - Matching countdown and fallback behavior

## UI system

Project UI includes: - Primary / neutral / semantic colors - Gradients -
Inter for body typography - Mulish for headings - Card components - Icon
set - Buttons - Navigation - Segmented controls

Do not make the design-system section excessively long; show the
strongest examples.

## Final experience

Organize final mobile UI around: - Home - Hub - Games - Social

Desktop app and vibe-coding work should be shown afterward.

------------------------------------------------------------------------

# 9. Project 02 --- Stitch

## Core description

**Stitch --- A Safe Product-Service System for Skill Exchange Based
Travel Experiences**

A product-service system enabling safer travel experiences through value
and skill exchange opportunities, bridging the gap between locals and
travelers.

Context: - ID 402 Graduation Project - 14 weeks - June 2026 - Individual
project - Collaboration with Commencis

## Project statement

Stitch creates a safe and gamified interaction environment that builds
bridges between travelers and locals through opportunities for value and
skill exchange.

As the application is used, a network is woven between the places
visited by users through the spider mascot "Stitch."

## Key differentiator

Stitch is not only an app.

It is a **physical + digital product-service system** combining: -
Traveler - Host - Mobile application - Physical charm / badge -
Bluetooth tracker - Safety stakeholders - Community / local connections

Make this system understandable early in the case study.

## Recommended section order

``` text
Project Overview
Project Statement
The Product-Service System
System Diagram
Process & Research
Research Insights
Ideation
Product Development
Digital Experience
Physical Product — Stitch Charm
Safety Experience
Final Product-Service Experience
Prototype / Video
```

## Physical product

Each user is accompanied by a two-part badge/charm.

1.  One part contains a Bluetooth tracking device and remains with the
    user. This is the heart-shaped part.
2.  The removable badge is exchanged with people the traveler connects
    with, allowing the network/web to expand.

## Process

The graduation project lasted 14 weeks in collaboration with Commencis
and included advisors from UX/UI disciplines.

Process material includes: - Project description & research - User
research / surveys - Ideation - Personas - Journey maps - Scenarios -
Information architecture - Wireframes - UI design - Design system -
Prototyping - Video making

## Research

Survey and interviews involved a total of 25 people.

### Research insights

**Frictionless & Personalized Matching** - User-centric filtering -
Map-based discovery - Fast application flows - Easier connection between
travelers, hosts, and short-term contribution opportunities

**Hyper-Local & Continuous Community** - Authentic local immersion -
Guided experiences - Local events - Connections before, during, and
after projects

## Ideation

Methods included: - 5W1H - Affinity mapping - Constraint maps -
Objective maps - Directive maps - Pain-point definition

## Digital experience

Group the app into meaningful experience chapters rather than showing
every screen individually.

Important areas include:

### Explore

Discovery of opportunities / people / places.

### Gather

Helps users find: - Travel buddies - Local guides - Groups - Community
gatherings

### Become Host

Users can host exchanges and experiences, review applicants, and manage
journeys.

### My Web

Visualizes the network created through: - Travel - People met -
Countries visited - Exchange experiences

### My Charm

Represents the physical/digital badge relationship. Users can exchange
the removable badge and track the journey of exchanged badges.

## Safety

Safety is a core part of the product-service system, not an optional
feature.

Show the relationship between: - Traveler - Host - Emergency contacts -
Relevant safety stakeholders - Tracker / app

------------------------------------------------------------------------

# 10. Project 03 --- Pingu

## Core description

**Pingu --- UX & UI Design for a Kids Smartwatch Platform Integrated
with a Parental App**

A children's smartwatch interface designed to foster daily habits,
development, and an active lifestyle, supported by a mobile companion
app that allows parents to stay involved.

Context: - Supervised project - 14 weeks - June 2025 - Individual
project - University of Deusto / Erasmus Mobility

Tagline: **Their watch for learning, your window into their world.**

## Project statement

Pingu is a platform for child development designed to: - Make education
fun - Promote healthy habits - Support an active lifestyle - Integrate
technology meaningfully

The smartwatch is integrated with a parent mobile app that helps parents
track development, stay involved, and connect with other parents.

The smartwatch is guided by a penguin character to help children
identify emotionally with the experience.

## Target

Children approximately **8--13 years old**, with a companion experience
for parents.

## Project goals

The project considers Sustainable Development Goals including: - Good
Health and Well-Being - Quality Education - Sustainable Cities and
Communities

## Recommended section order

``` text
Project Overview
Project Statement & Goals
Process & Research
Research Insights
Understanding Two Users
Persona & Journey
Defining the Experience
Smartwatch Experience
Parent App Experience
High-Fidelity Wireframes
UI Design System
Final Connected Experience
```

## Process & research

Research explored: - Child behavior - Health tracking - Connection -
Communication - Smartwatch interface requirements - Parent-app
requirements

Process material includes: - Project description & research - Desk
research - User research / surveys - Ideation - Personas - Journey
maps - Scenarios - Information architecture - Wireframes - UI design -
Design system - Prototyping / video

## Main research insights

**Facilitating Safe Social Interaction** Community features such as
hobby groups, shared activities, and event creation can help children
connect safely under parental oversight.

**Holistic Health Tracking** Combine relevant tracking such as: -
Sleep - Activity - Hydration - Heart rate - Mood

**Structure & Reinforcement** Use structured tasks / to-do systems to
support habit development, reinforced by the Pingu character.

**Gamification and Character** Gamification should be meaningful and
educational rather than distracting. Character feedback and badges can
help children identify with the experience.

## Two-user story

Make the relationship between: - Child smartwatch experience - Parent
companion app

a central storytelling device.

Do not present them as two unrelated products.

------------------------------------------------------------------------

# 11. Project 04 --- Pinty

## Core description

**Pinty --- Personal Finance Management App**

A mobile app offering a playful way to stick to a budget and plan future
purchases.

Context: - ID415 User Experience for Special Groups - 14 weeks - January
2025 - Team members: M. Efdal Çetin, Niran Çelebi, Zeynep Kabataş

Tagline: **Finance Made Fun, Anchored for You!**

## Project statement

Pinty is a PFM app that helps users: - Stick to budgets through spending
anchors - Plan future purchases through a wishlist - Personalize their
shopping experience - Develop healthier shopping habits

The experience uses playful octopus mascots to make financial decisions
feel more approachable.

## Recommended section order

``` text
Project Overview
Project Statement
Project Goals
Process & Research
Research Insights
Understanding Spending Behaviour
Personas & Journey Mapping
Defining Anchors
Information Architecture & User Flows
Wireframes
Usability Testing & Iteration
UI Design System
Final Experience
```

## Project goals

The course brief emphasized: - Detailed desk research - Understanding
the target user - Defining the problem statement - Exploring use cases
through journey mapping and personas - Creating and testing information
architecture and user flows - Detailed wireframing

## Process

The first three weeks focused on research.

The project continued through: - Journey mapping - Edge cases - Feature
definition - Information architecture - Wireframes - UI design - Design
system - Usability tests - Prototyping / video

## Research insights

Research included interviews and online surveys among approximately the
20--35 age group.

Important source insights: - Due to economic conditions in Türkiye, many
participants tend to purchase what they need immediately. - Some users
create budget plans in Excel but struggle to stick to them because of
lack of motivation. - Credit-card spending limits are an important PFM
behavior among mobile-banking users.

## Anchors

The **Anchor** concept is one of Pinty's main differentiators.

Make it understandable in the case study instead of burying it among UI
screens.

The interface also includes concepts such as: - Existing Anchors -
Wishlist / future purchases - Challenges - Points - Savings feedback -
Transaction summaries

## Testing

Usability testing was performed after prototyping, and the product was
revised/refined based on findings.

Show the relationship:

``` text
Research → Behavioral problem → Anchor concept → Prototype → Testing → Refined final experience
```

------------------------------------------------------------------------

# 12. Project 05 --- Bank of Trust

**This project must remain the final project in Selected Work and
project-to-project navigation.**

## Core description

**Bank of Trust --- Future of Banking In Your Hands**

A new-generation mobile banking case study focused on a more modern,
customizable, multifunctional, and lower-friction banking experience.

## Existing process

The source case study follows:

``` text
Literature Research
User Research
Persona & Feature Development
Information Architecture & Flows
High-Fidelity Wireframes
```

Preserve this focused structure rather than forcing it into the longer
processes used by the other projects.

## Recommended section order

``` text
Project Overview
The Challenge
Research
Literature Research
Benchmark Analysis
User Research Insights
Persona
Feature Development
Information Architecture
Main Features
Dashboard
Invest
Finances
Final Experience
```

## Literature research direction

The project frames new-generation mobile banking as moving from static
transaction hubs toward proactive, personalized financial companions.

Research themes include: - Personalization - Transparency -
Digital-first financial management

## Key feature themes identified

-   AI-driven personalization
-   Hyper-intuitive UI
-   Financial super-app functionality
-   Embedded/social finance
-   Frictionless onboarding

## Benchmarks

Source material examines: - Revolut - N26 - İşCep - Ziraat Mobil -
Midas - Wise

Do not make the website case study a long benchmark catalogue.

Summarize benchmarks into useful design opportunities and show only the
strongest supporting visuals.

## User research

7 interview participants.

Main outputs include:

**Customization** Users valued arranging frequently used actions.

**QR Actions** QR-based actions were seen as useful and worth
prioritizing.

**Investment** Users valued following investments, stocks, crypto, etc.
within one application.

**Split & Pay** Easy shared payment between friends was useful.

**Less Friction** Interactions should be short, scannable, and easy to
remember.

**Easy Authentication** Users preferred easier authentication such as
Face ID, ID scanning, or video-based systems over repeated passcodes.

**Modern UI** The modern UI of products such as Midas and Revolut was
appreciated.

## Persona

Persona: **Henry Kane, 28** - Front-End Developer Engineer - Düsseldorf,
Germany - Digital native - Interested in investment - Saving toward a
future car - Travels internationally frequently

Needs: - Real-time data - Lower-friction security - Unified visibility
across savings, spending, and investments

Goals: - Frictionless international money movement - Automated asset
building - Proactive financial clarity

Barriers: - Legacy banking friction - Static/reactive financial
tooling - Separate applications for investment and current accounts

## Information architecture

Show the IA as evidence of product structure, but do not make users zoom
into an unreadable diagram.

## Main feature areas

### Dashboard

Emphasize: - Customizable dashboard - Frequently used features -
Current + investment accounts - Adding money - Digital-wallet
integration - Shortcuts - Recent transactions

### Invest

Includes: - Portfolio - Discover - Stocks - Crypto - Commodities -
Watchlist - Stock details / data

### Finances

Include financial-management functionality and relevant
AI/personalization concepts from the source material.

------------------------------------------------------------------------

# 13. Interaction Design

Keep interactions subtle.

Recommended: - Soft image scale on project hover - Underline/arrow
movement on text links - Smooth accordion expansion - Gentle
opacity/translate reveal when sections enter viewport - Smooth page
transitions only if performance remains good - Sticky navigation may be
used if visually subtle

Avoid: - Heavy parallax - Cursor gimmicks - Constant animation - Large
3D effects - Excessive scroll-jacking

Motion should support hierarchy, not become the portfolio's main
attraction.

------------------------------------------------------------------------

# 14. Responsive Behavior

## Desktop

-   Preserve editorial asymmetry
-   Large type
-   Large imagery
-   Generous whitespace
-   Two-column About layout

## Tablet

-   Reduce oversized typography progressively
-   Keep images large
-   Allow project metadata to wrap cleanly

## Mobile

-   Single-column layout
-   Maintain generous but reduced spacing
-   Navigation should remain simple
-   Project titles remain visually strong
-   About Experience becomes stacked
-   Accordion rows remain touch-friendly
-   Case-study images should use full available width
-   Do not shrink desktop diagrams until they become unreadable;
    restructure them where necessary

------------------------------------------------------------------------

# 15. Technical Direction

Preferred stack:

``` text
Next.js
React
TypeScript
Tailwind CSS
```

Use reusable components, but do not let the component model force every
project into the same narrative.

Suggested structure:

``` text
app/
├── page.tsx
├── about/
│   └── page.tsx
└── work/
    └── [slug]/
        └── page.tsx

components/
├── Navbar.tsx
├── Hero.tsx
├── SelectedWork.tsx
├── ProjectPreview.tsx
├── ProjectHero.tsx
├── ProjectOverview.tsx
├── CaseStudySection.tsx
├── ImageSection.tsx
├── TwoColumnSection.tsx
├── ExperienceAccordion.tsx
├── NextProject.tsx
└── Footer.tsx

data/
└── projects.ts

public/
└── projects/
    ├── commencium/
    ├── stitch/
    ├── pingu/
    ├── pinty/
    └── bank-of-trust/
```

Keep project content in structured data where practical.

Do not hardcode the same project metadata repeatedly across components.

------------------------------------------------------------------------

# 16. Build Order for Codex

Do not attempt the entire portfolio in one generation.

### Phase 1

Build: - Global layout - Design tokens - Typography - Navigation -
Responsive container system - Footer

### Phase 2

Build homepage: - Hero - Selected Work - About preview - Contact/footer

Use placeholder project images if assets have not yet been supplied.

### Phase 3

Build About: - Two-column Velora-inspired layout - Experience
accordion - Education - Expertise - Interests

### Phase 4

Build Commencium completely.

Use this project to establish reusable case-study components.

### Phase 5

Add: - Stitch - Pingu - Pinty - Bank of Trust

Reuse visual components while preserving each project's unique section
sequence.

### Phase 6

Polish: - Responsive behavior - Hover states - Motion - Accessibility -
Image optimization - SEO metadata - Performance

### Phase 7

Deploy: - GitHub - Vercel - Custom domain when available

------------------------------------------------------------------------

# 17. Important Rules for Codex

1.  **Do not invent project results, metrics, research findings, roles,
    or outcomes.**
2.  Preserve the meaning of supplied portfolio content.
3.  Do not force the five projects into one generic UX case-study
    template.
4.  Maintain the exact project order:
    `Commencium → Stitch → Pingu → Pinty → Bank of Trust`.
5.  Bank of Trust is always last.
6.  The global website should remain visually neutral.
7.  Let individual project imagery provide color.
8.  Use whitespace rather than unnecessary cards.
9.  Do not recreate Figma/PDF coordinates literally.
10. Prioritize responsive web behavior.
11. Do not copy reference websites verbatim.
12. Velora is the main visual-language reference.
13. Matt Fredette is a project-presentation reference.
14. Nicole Roberts is a case-study readability/storytelling reference.
15. Keep text concise enough for web reading without changing project
    meaning.
16. When source content is missing, use a clearly marked placeholder
    instead of inventing content.
17. Keep accessibility and semantic HTML in mind from the beginning.
18. Avoid excessive dependencies.
19. Keep code modular and maintainable.
20. Do not redesign working sections without an explicit request.

------------------------------------------------------------------------

# 18. Token-Efficient Codex Workflow

After Codex has this file in the repository, future prompts should be
short.

Examples:

``` text
Read PROJECT.md and build Phase 1 only.
```

``` text
Read PROJECT.md and implement the homepage from Phase 2. Do not build case-study pages yet.
```

``` text
Read PROJECT.md and build Commencium using the existing design system. Preserve its section order.
```

``` text
Read PROJECT.md. Add Stitch using existing case-study components, but preserve Stitch's unique structure.
```

``` text
Read PROJECT.md and audit the site for mobile responsiveness. Fix only responsive issues; do not redesign.
```

This prevents repeating the full design brief and project context in
every Codex prompt.

------------------------------------------------------------------------

## Final Creative Principle

The portfolio should feel like **one carefully art-directed editorial
website containing five different design stories**.

Consistency comes from: - typography - grid - spacing - navigation -
image treatment - interaction language

Variety comes from: - each project's process - project-specific colors -
project-specific imagery - project-specific case-study structure

Do not sacrifice project individuality for template consistency.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Wedding Invitation Project

## 1. Project Overview

This project is a simple, elegant, and reusable wedding invitation website built with Next.js.

The primary goal is to help create wedding invitations for friends and family without building a complex wedding invitation platform.

The project should remain:

* Lightweight
* Elegant
* Responsive
* Easy to customize
* Easy to maintain

This is **not** intended to become a SaaS application.

---

# 2. Core Principles

1. Keep the project simple.
2. Prefer maintainability over unnecessary abstraction.
3. Prefer custom UI over component libraries.
4. Do not introduce unnecessary dependencies.
5. Do not expand the project scope without explicit instruction.
6. Keep wedding photography as the primary visual focus.
7. Design mobile-first.
8. Keep desktop responsive and visually balanced.
9. Respect existing project decisions.
10. Prefer simple solutions over clever solutions.

The AI agent should solve the requested problem with the smallest reasonable implementation.

---

# 3. Technology Stack

The project uses:

* Next.js
* React
* TypeScript
* Tailwind CSS
* Vercel for deployment

Do not introduce another framework unless explicitly requested.

## UI

Use Tailwind CSS directly.

Do **not** use:

* shadcn/ui
* Radix UI
* Material UI
* Chakra UI
* Bootstrap
* Other UI/component libraries

Build custom reusable components where appropriate.

Do not introduce a component library simply to solve a small UI problem.

---

# 4. Language

The primary language of the wedding invitation is **Bahasa Indonesia**.

All user-facing content should use natural and appropriate Indonesian.

Common foreign terms may be used when they are already familiar or conventional in Indonesian digital interfaces.

Examples:

* QRIS
* Google Maps
* countdown
* gallery
* music player

Do not use unnecessary English wording simply for stylistic purposes.

The invitation should feel natural for an Indonesian wedding invitation.

Technical code, variable names, component names, and comments may remain in English.

---

# 5. Indonesian Muslim Wedding Context

The invitation is intended for an Indonesian Muslim wedding.

The design and content should feel appropriate for a contemporary Indonesian Muslim wedding while remaining elegant and respectful.

When including Quranic verses, Islamic quotations, or prayers:

* Arabic text may be displayed using the original Arabic script.
* Provide Latin transliteration when appropriate.
* Provide an Indonesian translation.
* Arabic text must remain readable and properly aligned.
* Do not treat religious text merely as decoration.
* Use appropriate typography and spacing for Arabic text.
* Do not unnecessarily modify, abbreviate, or alter Quranic text.

Religious content should be presented respectfully.

If exact religious content has not been provided, use a clearly identifiable placeholder or a commonly used example rather than inventing or altering Quranic text.

---

# 6. Project Scope

The invitation should support the following features:

* Opening / envelope screen
* Personalized guest name
* Couple names
* Parents' names
* Invitation text
* Quranic verse or Islamic quote
* Wedding date
* Countdown
* Akad Nikah information
* Reception information
* Wedding location
* Google Maps link
* Couple story / timeline
* Photo gallery
* Digital gift section
* Bank account information
* Copy account number
* QRIS image
* Background music
* Closing section

These features should remain lightweight and focused on presentation.

---

# 7. Opening / Envelope Experience

The invitation must **not immediately display the main wedding content** when the page is first opened.

The initial experience should resemble receiving a physical wedding invitation envelope.

The flow should be:

```text
URL
 ↓
Envelope / Opening Screen
 ↓
Personalized Guest Name
 ↓
"Buka Undangan"
 ↓
Main Wedding Invitation
```

Example:

```text
/fajar-aisyah?to=Bapak%20Budi
```

The opening screen should display the invited guest naturally.

Example:

```text
Kepada Yth.

Bapak Budi

Dengan hormat,
kami mengundang Bapak/Ibu
untuk hadir dalam acara pernikahan kami.

[Buka Undangan]
```

The exact copy may be adjusted to fit the design.

The envelope interaction should be:

* Elegant
* Subtle
* Smooth
* Mobile-friendly

Avoid excessive animation.

---

# 8. Invitation URL and Guest Personalization

The invitation uses a simple static route or couple slug with a query parameter for guest personalization.

Example:

```text
/fajar-aisyah?to=Bapak%20Budi
```

The `to` query parameter is used only for displaying the invited guest name.

If the parameter is missing, use:

```text
Tamu Undangan
```

Guest names must **not** be stored in a database.

Do not implement:

* Guest management
* Guest authentication
* Guest database
* Guest dashboard

The couple slug is a presentation and routing concern, not a database identifier.

Do not create dynamic database-backed guest routes.

---

# 9. Invitation Opening Behavior

When the user selects **Buka Undangan**:

1. The envelope screen transitions away.
2. The main wedding invitation is revealed.
3. The user can scroll through the invitation.
4. Background music may begin if permitted by browser interaction policies.

The opening interaction must work reliably on mobile devices.

Do not require:

* Authentication
* Database access
* API requests

for opening the invitation.

---

# 10. Wedding Data Architecture

Wedding-specific information must be separated from UI components.

Do not hardcode wedding information directly inside presentation components.

Use a dedicated data/configuration layer.

The primary wedding data file is:

```text
data/wedding.ts
```

Example:

```ts
export const wedding = {
  groom: {
    name: "...",
    parents: {
      father: "...",
      mother: "...",
    },
  },

  bride: {
    name: "...",
    parents: {
      father: "...",
      mother: "...",
    },
  },

  date: "...",

  ceremony: {
    date: "...",
    time: "...",
    location: "...",
  },

  reception: {
    date: "...",
    time: "...",
    location: "...",
  },

  mapsUrl: "...",

  gift: {
    bank: "...",
    accountNumber: "...",
    accountName: "...",
    qrisImage: "/images/qris/qris.png",
  },
};
```

The exact data structure may evolve when there is a clear reason.

Do not create unnecessary abstractions for simple data.

---

# 10A. Project Structure

This project does not use a `src/` directory.

Use a simple and maintainable root-level structure:

```text
app/
├── globals.css
├── layout.tsx
└── page.tsx

components/
└── <feature>/
    └── <Component>.tsx

data/
└── wedding.ts

public/
└── images/
    ├── placeholders/
    ├── gallery/
    └── qris/
```

## App

`app/` contains Next.js application routes and global application configuration.

Keep route-specific logic inside the appropriate route.

Do not introduce a `src/` directory unless explicitly requested.

## Components

`components/` contains reusable UI components.

Components should generally be organized by feature or visual section.

Examples:

```text
components/
├── envelope/
├── hero/
├── quran-verse/
├── couple/
├── event/
├── story/
├── gallery/
├── location/
├── gift/
└── music/
```

Do not create all feature directories in advance.

Create a component directory when the corresponding feature is implemented.

Avoid deeply nested component structures unless they provide a clear organizational benefit.

Component directories should use lowercase kebab-case.

Component files should normally use PascalCase.

Example:

```text
components/
└── envelope/
    └── Envelope.tsx
```

## Data

`data/` contains centralized wedding-specific data.

Wedding information should not be duplicated across UI components.

The primary wedding data file is:

```text
data/wedding.ts
```

## Public Assets

`public/images/` contains static visual assets.

Use:

```text
public/images/placeholders/
```

for temporary development images.

Use:

```text
public/images/gallery/
```

for final wedding photography.

Use:

```text
public/images/qris/
```

for QRIS images.

Do not mix temporary placeholder assets with final wedding assets when avoidable.

## Additional Directories

Do not create directories such as:

* `lib/`
* `hooks/`
* `services/`
* `contexts/`
* `store/`
* `utils/`

until there is an actual requirement for them.

Do not create empty directories or architectural placeholders.

Add a new directory only when the project has a concrete need for it.

## Component Organization

Prefer organizing components by feature rather than by technical type.

Prefer:

```text
components/
├── envelope/
├── gallery/
└── gift/
```

over:

```text
components/
├── buttons/
├── cards/
├── containers/
├── images/
└── text/
```

Small generic UI elements may remain colocated with their feature when they are not reused elsewhere.

Avoid building a generic design system for this project.

---

# 11. Dummy Data

Real wedding information and final photography may not be available during initial development.

The AI may use dummy data to implement and demonstrate the interface.

Dummy data must:

* Be realistic for an Indonesian wedding.
* Use familiar Indonesian names.
* Use realistic Indonesian date and time formats.
* Use realistic Indonesian locations.
* Use Indonesian terminology.
* Use realistic Indonesian bank names when demonstrating digital gifts.
* Be easy to replace later.
* Remain centralized in the wedding data/configuration layer.

Example:

```ts
export const wedding = {
  groom: {
    name: "Muhammad Fajar Pratama",
    parents: {
      father: "Bapak Haryanto",
      mother: "Ibu Siti Aminah",
    },
  },

  bride: {
    name: "Aisyah Putri Ramadhani",
    parents: {
      father: "Bapak Ahmad Fauzi",
      mother: "Ibu Nurhayati",
    },
  },

  date: "Minggu, 20 Desember 2026",

  ceremony: {
    date: "Minggu, 20 Desember 2026",
    time: "08.00 WIB",
    location: "Masjid Al-Ikhlas, Yogyakarta",
  },

  reception: {
    date: "Minggu, 20 Desember 2026",
    time: "11.00–14.00 WIB",
    location: "Gedung Serbaguna Yogyakarta",
  },

  mapsUrl: "...",

  gift: {
    bank: "BCA",
    accountNumber: "1234567890",
    accountName: "Muhammad Fajar Pratama",
    qrisImage: "/images/qris/qris.png",
  },
};
```

Dummy information is for development only.

Do not present dummy information as real wedding information in a production invitation.

---

# 12. Photography and Placeholder Assets

Final pre-wedding photographs may not be available during initial development.

The AI should use appropriate placeholder or dummy images when necessary.

Do **not** block implementation because final photographs are unavailable.

Placeholder images must be treated as temporary development assets.

The AI must not assume that placeholder images are the final assets.

The final photographs should be replaceable without changing the overall UI architecture.

Suggested structure:

```text
public/
└── images/
    ├── placeholders/
    ├── gallery/
    └── qris/
```

When final photographs become available:

* Replace the assets.
* Preserve the existing component structure.
* Adjust image cropping or positioning if necessary.
* Do not redesign the entire page simply because the final photographs have different compositions.

The UI should support common image orientations:

* Portrait
* Landscape
* Square

Use appropriate aspect ratios and `object-fit` behavior.

Where useful, allow image positioning to be adjusted without changing component structure.

---

# 13. Design Direction

The visual identity is inspired by the couple's pre-wedding clothing and traditional Indonesian fabric.

The design should feel:

* Elegant
* Warm
* Romantic
* Refined
* Minimal
* Personal
* Contemporary
* Subtly traditional

The photographs should remain the primary visual element.

UI elements must support the photographs rather than compete with them.

Avoid:

* Excessive gradients
* Excessive shadows
* Excessive decorations
* Overly saturated backgrounds
* Excessive animations
* Visually noisy layouts

The design should feel intentional rather than template-like.

---

# 14. Color System

The current color palette is defined in `app/globals.css`.

Do not hardcode colors inside components when an existing design token can be used.

Current palette:

| Token          | Color     | Purpose                     |
| -------------- | --------- | --------------------------- |
| `background`   | `#F7F5F2` | Main page background        |
| `foreground`   | `#332F30` | Main text                   |
| `primary`      | `#88010F` | Main burgundy               |
| `primary-dark` | `#652622` | Dark burgundy               |
| `primary-soft` | `#F0DDE0` | Soft burgundy background    |
| `secondary`    | `#4D4B50` | Secondary UI/text           |
| `accent`       | `#B5B6AE` | Neutral decorative accent   |
| `surface`      | `#FFFCF9` | Cards and elevated surfaces |
| `border`       | `#DDD8D2` | Borders and dividers        |

## Color Usage

Use `primary` for important actions and visual emphasis.

Use `primary-dark` for stronger contrast and dark burgundy elements.

Use `primary-soft` for subtle highlights and backgrounds.

Use `secondary` sparingly for secondary information.

Use `accent` mainly for decorative elements, dividers, and subtle visual details.

Use `background` and `surface` as the dominant neutral colors.

Do not use all colors equally.

The overall page should remain visually calm.

The burgundy color should be an accent, not the dominant background of every section.

---

# 15. Theme

The current invitation uses a **light theme**.

Do not automatically switch the design according to `prefers-color-scheme`.

Do not introduce dark mode unless explicitly requested.

The current visual system should remain consistent regardless of the visitor's operating system theme.

---

# 16. Typography

The project has a defined typography system.

The primary fonts are:

| Role    | Font               | Usage                                                       |
| ------- | ------------------ | ----------------------------------------------------------- |
| Display | Cormorant Garamond | Couple names, major headings, elegant display text          |
| Script  | Great Vibes        | Initials, signatures, and very limited decorative text      |
| Body    | Lora               | Body text, invitation text, event information, descriptions |
| Arabic  | Amiri              | Quranic verses, Arabic prayers, and Arabic text             |

## Font Usage

### Cormorant Garamond

Use as the primary display typeface.

Preferred for:

* Couple names
* Major headings
* Section titles
* Important decorative text

Do not use it for long paragraphs.

### Great Vibes

Use sparingly.

Preferred for:

* Couple initials
* Small signature-like elements
* Very limited decorative text

Do not use it for:

* Body text
* Long sentences
* Event information
* Navigation
* Buttons

Readability takes priority.

### Lora

Use as the primary body typeface.

Preferred for:

* Invitation text
* Descriptions
* Event information
* Supporting text
* General readable content

Lora should remain the default body font unless there is a clear design reason to change it.

### Amiri

Use for Arabic content.

Preferred for:

* Quranic verses
* Arabic prayers
* Arabic religious quotations

Arabic text should remain readable and properly spaced.

Use an appropriate font size and line height for Arabic script.

## Additional Fonts

The four primary fonts above are the default typography system.

The AI may introduce an additional font **only when there is a clear visual or technical reason that cannot be reasonably solved with the existing typography system**.

Additional fonts must:

1. Have a clear and specific purpose.
2. Be used in a limited scope.
3. Not replace the primary typography system unnecessarily.
4. Not be introduced merely because they look interesting.
5. Not create excessive visual variation.
6. Prefer fonts available through the existing Next.js font integration when practical.

Before adding an additional font, prefer asking for approval if the font would become a major part of the visual identity.

A maximum of **one additional font family** should normally be introduced beyond the four primary fonts.

The project should normally use no more than **five font families in total**.

The AI must not add multiple decorative or script fonts for individual sections.

Typography should remain cohesive throughout the invitation.

## Typography Hierarchy

The visual hierarchy should generally follow:

```text
Couple Names
    ↓
Section Headings
    ↓
Supporting Information
    ↓
Body Text
```

Decorative fonts must not overpower the couple's names or wedding photography.

Readability takes priority over decorative typography.

Do not use a different font merely to make every section visually unique.

---

# 17. Layout

The website is designed mobile-first.

Priority:

```text
Mobile
 ↓
Tablet
 ↓
Desktop
```

Every section must remain comfortable to read and interact with on small screens.

Avoid layouts that depend on large desktop widths.

Photography should remain visually dominant.

Spacing should feel generous but not wasteful.

---

# 18. Components

Prefer small, focused components.

Possible structure:

```text
components/
├── envelope/
├── hero/
├── quran-verse/
├── couple/
├── event/
├── story/
├── gallery/
├── location/
├── gift/
└── music/
```

The exact structure may evolve.

Do not create a component merely to wrap a few lines of JSX unless it improves readability, reuse, or maintainability.

Avoid premature abstraction.

---

# 19. Server and Client Components

Use Server Components by default.

Add `"use client"` only to components that require:

* React state
* Event handlers
* Browser APIs
* Client-side effects
* Client-side interactive behavior

Do not make the entire page a Client Component when only a small feature requires client-side behavior.

Keep interactive logic localized to the smallest appropriate component.

Examples of likely Client Components:

* Envelope interaction
* Music player
* Countdown
* Copy account number interaction

Prefer keeping static sections as Server Components.

---

# 20. Animation

Animations should be subtle and purposeful.

Good examples:

* Envelope opening
* Fade in
* Gentle slide
* Image reveal
* Scroll reveal
* Smooth section transitions

Avoid:

* Excessive bouncing
* Constant motion
* Distracting parallax
* Heavy animation libraries for simple effects

Animation must never interfere with reading or interaction.

Respect reduced-motion preferences where appropriate.

Prefer CSS animations when they are sufficient.

Do not introduce an animation library solely for simple transitions.

---

# 21. Countdown

The countdown should be lightweight.

Use a small client-side implementation when necessary.

Do not introduce a countdown library unless there is a clear requirement that cannot be reasonably solved with React and browser APIs.

The countdown should use the wedding date from:

```text
data/wedding.ts
```

Do not hardcode the target date inside the countdown component.

---

# 22. Digital Gift

The digital gift section should support:

* Bank name
* Account number
* Account holder
* Copy account number button
* QRIS image

There is no payment gateway.

There is no payment processing.

QRIS is displayed as an image only.

The account number should be easy to copy on mobile devices.

---

# 23. Location

Use an external Google Maps URL.

Do not build a custom map.

Provide a clear call-to-action such as:

```text
Buka Google Maps
```

The location information should include relevant details such as:

* Venue name
* Address
* Date
* Time

when available.

---

# 24. Music

Background music is optional.

Music controls should remain accessible without dominating the interface.

The user should be able to:

* Play music
* Pause music
* See the current music state

Do not autoplay audio in a way that violates browser policies.

User interaction may be used to initiate playback.

---

# 25. Accessibility

Use semantic HTML where appropriate.

Important requirements:

* Meaningful `alt` text for images
* Keyboard-accessible interactive elements
* Sufficient text contrast
* Visible interactive states
* Buttons should behave like buttons
* Links should behave like links

Do not rely solely on color to communicate information.

Ensure the envelope opening interaction remains understandable without animation.

---

# 26. Performance

The website should remain lightweight.

Prefer:

* Next.js image optimization
* CSS animations where sufficient
* Small reusable components
* Minimal dependencies
* Lazy loading for non-critical images where appropriate

Do not add a dependency when the same result can reasonably be achieved with existing browser APIs, CSS, React, or Next.js.

Avoid unnecessarily large client-side bundles.

Use client components only when interactivity requires them.

---

# 27. SEO and Sharing

The invitation should have appropriate:

* Page title
* Description
* Open Graph metadata
* Social sharing image where available

The page should look reasonable when shared through messaging applications and social media.

The metadata should use the actual wedding data when available.

---

# 28. Out of Scope

Do **not** implement the following unless explicitly requested:

* Database
* Supabase
* Authentication
* User accounts
* Admin dashboard
* Guest management system
* RSVP backend
* Guest database
* CMS
* Payment gateway
* Payment processing
* Multi-tenant SaaS architecture
* Complex API
* Custom map implementation
* Backend server
* Complex state management library
* UI component library

The project is intentionally a simple invitation website.

---

# 29. Development Rules

Before modifying the project:

1. Read this `AGENTS.md`.
2. Inspect the existing project structure.
3. Inspect existing components before creating new ones.
4. Reuse existing design tokens.
5. Reuse existing components when appropriate.
6. Avoid modifying unrelated files.
7. Implement only the requested feature.
8. Keep changes focused.
9. Check TypeScript and build errors after significant changes.

Do not rewrite working code without a clear reason.

---

# 30. Scope Control

The AI agent must not independently expand the project's requirements.

If a requested feature could introduce significant architectural complexity, explain the trade-off before implementing it.

Prefer the simplest implementation that satisfies the requirement.

For example:

```text
Simple requirement:
Guest name from URL

Preferred implementation:
URL query parameter

Do not implement:
Guest management system
+ database
+ authentication
+ dashboard
```

unless explicitly requested.

---

# 31. AI Agent Behavior

The AI agent should act as a coding partner, not as an autonomous product manager.

The agent may:

* Suggest improvements
* Identify bugs
* Improve accessibility
* Improve responsive behavior
* Improve performance
* Refactor clearly problematic code

The agent must not:

* Change the technology stack
* Add unnecessary dependencies
* Expand the product scope
* Replace the established design direction
* Introduce a database
* Introduce authentication
* Introduce a component library

without explicit approval.

When multiple reasonable solutions exist, prefer the simpler solution.

---

# 32. Working With Existing Assets

Before creating new assets:

1. Inspect the existing `public/` directory.
2. Reuse existing assets when appropriate.
3. Do not overwrite real wedding assets with dummy assets.
4. Keep temporary placeholder assets clearly identifiable.
5. Do not assume placeholder assets are final.

When real assets are provided later, integrate them into the existing structure rather than rebuilding the page unnecessarily.

---

# 33. Data Replacement

Wedding-specific content should be centralized.

When replacing dummy data with real data, primarily modify the data/configuration layer.

Avoid searching through presentation components to replace wedding-specific information manually.

Avoid hardcoding:

* Couple names
* Parent names
* Dates
* Locations
* Bank information
* Guest names
* Wedding quotes
* Maps URLs

inside UI components.

---

# 34. Git and Changes

Keep changes focused and reviewable.

Do not make unrelated changes while implementing a feature.

Avoid large refactors unless explicitly requested.

Before considering a feature complete:

* Review the changed files.
* Check for unintended changes.
* Check TypeScript errors.
* Check build errors where appropriate.

---

# 35. Definition of Done

A feature is considered complete when:

* It satisfies the requested requirement.
* It matches the established visual design.
* It works on mobile.
* It remains responsive on desktop.
* It uses existing design tokens.
* It does not introduce unnecessary dependencies.
* It does not break existing functionality.
* It introduces no new TypeScript errors.
* The implementation remains understandable and maintainable.

---

# 36. Final Principle

Build a **beautiful wedding invitation**, not a wedding invitation platform.

Keep the code simple.

Keep the design elegant.

Keep the photographs as the visual focus.

Keep the Indonesian wedding context authentic.

Prefer clarity over cleverness.

Prefer maintainability over unnecessary abstraction.

Do not solve problems that the project does not have.


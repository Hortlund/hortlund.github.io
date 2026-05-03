# iOS App Portfolio Static Site Design

## Goal

Build a modern, simple static portfolio website for an independent iOS app developer. The site should show apps, projects, app support information, legal information, and an about page. The visual direction should closely follow the provided reference: clean Apple-adjacent layout, white and soft gray surfaces, compact typography, rounded app icons, subtle borders, and a blue accent.

## Scope

The first version is a static multi-page website with placeholder content that can be edited directly in the source files. It does not include a CMS, backend, build step, authentication, analytics, or dynamic data fetching.

## Pages

### Home

`index.html` introduces the developer and the portfolio. It includes:

- Top navigation with Home, Apps, Projects, About, and Support.
- Hero section with a short iOS-focused headline and primary actions.
- CSS-built iPhone/app mockup inspired by the reference.
- Featured app section.
- Featured projects section.
- Footer with identity, legal links, contact, and social links.

### Apps

`apps.html` is the main app directory. It includes:

- Page title and short description.
- A simple segmented control-style area for apps/projects presentation.
- App cards for a real placeholder app and coming-soon apps.
- Each app card has View App and Support actions.
- A small updates/contact callout.

### Single App / Support / Legal

`app-focusly.html` is the detailed app page and support page for a placeholder iOS app. It includes:

- Back link to Apps.
- App icon, name, platform badge, rating placeholder, and App Store CTA.
- Product screenshots represented by CSS mockups.
- About and key features.
- Support cards for FAQ, contact support, and troubleshooting.
- Legal cards for privacy policy, terms of use, and data handling.
- In-page sections with editable legal/support copy.

### Projects

`projects.html` lists non-App Store or portfolio projects. It includes:

- Project cards with icons, tags, descriptions, and links.
- Placeholder entries that are easy to replace with real work.

### About

`about.html` presents the developer. It includes:

- Profile area with placeholder portrait/avatar treatment.
- Short bio and role.
- Skills/tool strip for Swift, SwiftUI, Xcode, UIKit, Firebase, and Git.
- Experience timeline.
- Contact block with email and social links.

### Dedicated Support

`support.html` gives a general support landing page for all apps. It includes:

- Support intro.
- App support entry points.
- FAQ.
- Contact support.
- Legal links.

### Dedicated Legal Pages

`privacy.html` and `terms.html` provide standalone legal pages linked from the footer and app pages. The content is generic placeholder copy and must be replaced with real legal text before publishing.

## Architecture

The site uses plain HTML, CSS, and a small amount of JavaScript:

- `assets/styles.css` contains the visual system, layout, responsive rules, app cards, mockups, and page-specific components.
- `assets/script.js` contains lightweight progressive enhancement such as active navigation state and current year insertion.
- `assets/` can later hold real app icons, screenshots, portraits, and downloadable files.

This structure keeps hosting simple and avoids framework overhead for a mostly content-driven portfolio.

## Visual System

The design should stay close to the reference:

- Background: white and very light cool gray.
- Text: near-black headings, dark gray body copy.
- Accent: Apple-like blue for active nav, CTAs, links, and checkmarks.
- Shapes: app icons and cards use moderate radii; no overly pill-heavy UI.
- Cards: used for repeated app/project/support/legal entries only.
- Hero: not a generic marketing landing page; it should immediately communicate iOS apps and show a phone/app visual.
- Typography: system font stack for native Apple feel.
- Spacing: generous page margins, compact content blocks, and strong alignment.

## Content Editing

All names, app data, App Store links, support email addresses, social URLs, project descriptions, FAQ answers, privacy text, and terms text are placeholder content. The implementation should make these easy to find and replace by using clear section labels and consistent page structure.

## Responsive Behavior

The site must work on desktop and mobile:

- Navigation wraps or collapses gracefully without overlap.
- Hero content stacks on smaller screens.
- App/project/support cards become single-column on narrow screens.
- CSS phone and screenshot mockups keep stable proportions.
- Button text remains readable and does not overflow.

## Testing

Verification should include:

- Open the static site locally in a browser.
- Check navigation links between all pages.
- Inspect desktop and narrow/mobile layout.
- Confirm no obvious text overlap, broken links between local pages, or missing critical content sections.

## Out of Scope

- CMS or admin editing.
- Real App Store metadata fetching.
- Payment, accounts, authentication, or backend forms.
- Production legal review.
- Real screenshots or portrait photography unless assets are provided later.

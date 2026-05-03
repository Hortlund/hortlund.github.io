# WGJ Portfolio App Review Pages Design

## Goal

Keep the portfolio website, but replace the fake featured app content with the real iOS app **We Go Jim** and add App Review-ready public pages under `/wgj/`.

## Source App

The site content is based on `/Users/hortlund/git/wgj`:

- App name: We Go Jim
- Short name: WGJ
- Support email: `support@wegojim.app`
- Support URL expected by the app: `https://wegojim.app/support`
- Privacy URL expected by the app: `https://wegojim.app/privacy`
- Core features: workout logging, templates, exercise catalog, history/progress, private Bros social circle, iCloud/CloudKit sync, Pro subscriptions, moderation/reporting, blocking, and delete-my-data flows.

## URL Structure

WGJ pages must live under `/wgj/` so App Store Connect can use clean app-specific URLs:

- `/wgj/` app detail page
- `/wgj/support/` support URL
- `/wgj/privacy/` privacy policy URL
- `/wgj/terms/` terms and safety
- `/wgj/community-guidelines/` Bros/community rules
- `/wgj/data-deletion/` privacy choices and data deletion instructions

The static implementation should use directory `index.html` files so those paths work when hosted.

## Portfolio Changes

- Keep `index.html`, `apps.html`, `projects.html`, and `about.html`.
- Make We Go Jim the featured app on the home page.
- Replace the Focusly app card in `apps.html` with We Go Jim.
- Keep other portfolio projects/cards as examples, but the real support/legal links should point to WGJ.
- Remove or stop linking to `app-focusly.html` from active navigation/content.

## WGJ Theme

WGJ surfaces should follow the app's theme:

- Background: `#F4F7FA`
- Elevated surfaces: `#E6EDF4`, `#DDE7F0`
- Cards: white / `#F8FBFD`
- Text: `#0D1520`, secondary `#566476`
- Accent blue: `#1E86FF`
- Accent cyan: `#2CB8D9`
- Accent gold: `#B48A2D`
- Card radius near 20px, controls near 14px

Use the real app icon from `/Users/hortlund/git/wgj/WGJ/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png`.

## App Review Content

WGJ support/legal pages should be practical and publicly linkable:

- Support page: support email, what to include in reports, iCloud/CloudKit issues, subscriptions/restores, moderation reports, privacy/deletion requests, best-effort support expectations.
- Privacy page: local data, CloudKit/iCloud sync, Bros social data, reports/blocks, PhotosUI avatars, notifications, subscription/customer data, support email data, retention, deletion, contact.
- Terms page: workout safety, no medical advice, account/cloud availability, subscriptions, acceptable use, user content, moderation, warranty/liability limits, contact.
- Community guidelines: private Bros circle rules, prohibited content, reporting, blocking, moderation.
- Data deletion page: in-app Delete My Data flow, what gets deleted, what may remain, email fallback, Apple/payment provider limitations.

## Verification

Verify all pages exist, links resolve, no `href="#"` remains, `assets/script.js` parses, and the site can be served by a local static server.

# iOS App Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static multi-page iOS app developer portfolio with apps, projects, app support, legal pages, and an about page.

**Architecture:** Use plain HTML, CSS, and a tiny progressive-enhancement script. Each page is standalone for simple static hosting, while shared CSS/JS keep layout, navigation, cards, and responsive behavior consistent.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, local static server for verification.

---

## File Structure

- `index.html`: home page with hero, featured app, featured projects, and footer.
- `apps.html`: app directory with current and coming-soon app cards.
- `app-focusly.html`: detailed app page with support and legal sections for the placeholder app.
- `projects.html`: project grid for non-App Store work.
- `about.html`: developer profile, skills, experience, and contact block.
- `support.html`: general app support landing page.
- `privacy.html`: standalone placeholder privacy policy.
- `terms.html`: standalone placeholder terms page.
- `assets/styles.css`: visual system, layout, responsive rules, mockups, cards, and utility classes.
- `assets/script.js`: active navigation, current year, and external-link safety.

## Task 1: Shared Static Foundation

**Files:**
- Create: `assets/styles.css`
- Create: `assets/script.js`

- [ ] **Step 1: Create the shared stylesheet**

Create `assets/styles.css` with:

```css
:root {
  --bg: #f5f6fa;
  --surface: #ffffff;
  --surface-soft: #f9fafc;
  --text: #111318;
  --muted: #5e6675;
  --line: #e4e7ee;
  --blue: #2563eb;
  --blue-dark: #1746b8;
  --shadow: 0 18px 60px rgba(20, 28, 45, 0.08);
  --radius: 18px;
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--text);
  background: var(--bg);
  line-height: 1.5;
}

a { color: inherit; text-decoration: none; }

img, svg { max-width: 100%; display: block; }

.site-shell {
  width: min(1180px, calc(100% - 40px));
  margin: 28px auto;
  background: var(--surface);
  border: 1px solid rgba(228, 231, 238, 0.9);
  border-radius: 22px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.site-header,
.site-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 24px 32px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
}

.brand-mark {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: white;
  background: #090a0d;
  font-size: 15px;
  font-weight: 800;
}

.nav {
  display: flex;
  align-items: center;
  gap: 26px;
  font-size: 14px;
}

.nav a {
  color: #252a33;
  border-bottom: 2px solid transparent;
  padding-bottom: 4px;
}

.nav a.active,
.nav a:hover {
  color: var(--blue);
  border-color: var(--blue);
}

main { padding: 36px 32px 52px; }

.page-title {
  max-width: 760px;
  margin-bottom: 34px;
}

.eyebrow,
.badge {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  border-radius: 999px;
  background: #edf3ff;
  color: var(--blue);
  font-size: 12px;
  font-weight: 700;
  padding: 5px 10px;
}

h1, h2, h3, p { margin-top: 0; }

h1 {
  font-size: clamp(40px, 6vw, 70px);
  line-height: 1.04;
  letter-spacing: 0;
  margin-bottom: 22px;
}

h2 { font-size: clamp(28px, 4vw, 42px); line-height: 1.12; margin-bottom: 12px; }
h3 { font-size: 20px; line-height: 1.2; margin-bottom: 8px; }
p { color: var(--muted); }

.button-row { display: flex; flex-wrap: wrap; gap: 12px; }

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 0 18px;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: white;
  font-weight: 700;
  font-size: 14px;
}

.button.primary {
  background: var(--blue);
  color: white;
  border-color: var(--blue);
}

.button:hover { transform: translateY(-1px); }

.section { margin-top: 48px; }

.section-head {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 20px;
  margin-bottom: 22px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.grid.two { grid-template-columns: repeat(2, minmax(0, 1fr)); }

.card {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: white;
  padding: 24px;
  box-shadow: 0 12px 35px rgba(20, 28, 45, 0.04);
}

.app-icon {
  width: 92px;
  height: 92px;
  border-radius: 24px;
  display: grid;
  place-items: center;
  color: white;
  background:
    radial-gradient(circle at 50% 48%, #f8fbff 0 20%, #9da2ff 21% 35%, transparent 36%),
    linear-gradient(145deg, #4438ca, #1d0b95 70%);
  box-shadow: 0 16px 35px rgba(50, 52, 180, 0.35);
}

.app-icon.small { width: 70px; height: 70px; border-radius: 18px; }

.tag-row { display: flex; flex-wrap: wrap; gap: 8px; margin: 14px 0; }
.tag { padding: 4px 9px; border-radius: 7px; background: #f0f2f7; color: #4a5261; font-size: 12px; font-weight: 650; }

.footer-links,
.social-links {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  color: var(--muted);
  font-size: 13px;
}

.site-footer {
  border-top: 1px solid var(--line);
  align-items: flex-start;
}

.muted { color: var(--muted); }

.phone {
  width: min(285px, 100%);
  aspect-ratio: 0.54;
  border: 8px solid #111318;
  border-radius: 42px;
  background: linear-gradient(180deg, #ffffff, #f1f4ff);
  box-shadow: 0 28px 70px rgba(14, 20, 32, 0.22);
  padding: 28px 20px;
  position: relative;
}

.phone::before {
  content: "";
  position: absolute;
  width: 96px;
  height: 24px;
  border-radius: 0 0 16px 16px;
  background: #111318;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.phone-screen {
  height: 100%;
  display: grid;
  align-content: center;
  justify-items: center;
  text-align: center;
  gap: 22px;
}

.focus-ring {
  width: 112px;
  height: 112px;
  border-radius: 50%;
  border: 18px solid #cfd6ff;
  box-shadow: 0 0 0 16px rgba(84, 103, 255, 0.08);
}

.screenshot-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: end;
  gap: 18px;
  margin: 36px 0 16px;
}

.screenshot {
  min-height: 220px;
  border: 1px solid var(--line);
  border-radius: 24px 24px 0 0;
  background: linear-gradient(180deg, #ffffff, #f2f5ff);
  padding: 20px;
  overflow: hidden;
}

.legal-copy {
  max-width: 780px;
}

.legal-copy h2 { margin-top: 36px; }

@media (max-width: 860px) {
  .site-shell { width: min(100% - 20px, 1180px); margin: 10px auto; border-radius: 16px; }
  .site-header, .site-footer { align-items: flex-start; flex-direction: column; padding: 22px; }
  .nav { width: 100%; overflow-x: auto; gap: 18px; padding-bottom: 4px; }
  main { padding: 28px 22px 42px; }
  .grid, .grid.two, .screenshot-row { grid-template-columns: 1fr; }
  .section-head { align-items: flex-start; flex-direction: column; }
}
```

- [ ] **Step 2: Create the shared script**

Create `assets/script.js` with:

```javascript
const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("[data-nav]").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPage || (currentPage === "" && href === "index.html")) {
    link.classList.add("active");
  }
});

document.querySelectorAll("[data-current-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

document.querySelectorAll('a[target="_blank"]').forEach((link) => {
  link.setAttribute("rel", "noreferrer");
});
```

- [ ] **Step 3: Commit**

Run:

```bash
git add assets/styles.css assets/script.js
git commit -m "Build shared static site foundation"
```

Expected: commit succeeds.

## Task 2: Home Page

**Files:**
- Create: `index.html`
- Modify: `assets/styles.css`

- [ ] **Step 1: Create `index.html`**

Create `index.html` with header, hero, featured app, featured projects, and footer. Use the shared classes from Task 1 and include `assets/script.js`.

- [ ] **Step 2: Add home-specific layout CSS**

Append to `assets/styles.css`:

```css
.hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 380px);
  gap: 60px;
  align-items: center;
  min-height: 560px;
}

.hero-copy { max-width: 560px; }

.hero-copy p { max-width: 430px; font-size: 18px; }

.featured-app {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 22px;
  align-items: center;
}

.project-icon {
  width: 70px;
  height: 70px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  color: white;
  font-size: 32px;
  font-weight: 800;
}

.project-icon.purple { background: linear-gradient(145deg, #7c3aed, #2563eb); }
.project-icon.green { background: linear-gradient(145deg, #34d399, #15803d); }
.project-icon.orange { background: linear-gradient(145deg, #fbbf24, #f97316); }

@media (max-width: 860px) {
  .hero { grid-template-columns: 1fr; min-height: 0; gap: 34px; }
  .phone { margin: 0 auto; }
  .featured-app { grid-template-columns: 1fr; }
}
```

- [ ] **Step 3: Commit**

Run:

```bash
git add index.html assets/styles.css
git commit -m "Create portfolio home page"
```

Expected: commit succeeds.

## Task 3: Apps and App Detail Pages

**Files:**
- Create: `apps.html`
- Create: `app-focusly.html`
- Modify: `assets/styles.css`

- [ ] **Step 1: Create `apps.html`**

Create the apps directory with a page title, segmented visual tabs, app cards for Focusly and coming-soon apps, View App and Support links, and an updates callout.

- [ ] **Step 2: Create `app-focusly.html`**

Create the single app page with back link, app identity, App Store CTA placeholder, screenshot mockups, about/key features, support cards, legal cards, FAQ, troubleshooting, privacy summary, terms summary, and data handling summary.

- [ ] **Step 3: Add app page CSS**

Append to `assets/styles.css`:

```css
.segmented {
  display: inline-grid;
  grid-template-columns: repeat(2, 1fr);
  border: 1px solid var(--line);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 28px;
}

.segmented span {
  min-width: 140px;
  text-align: center;
  padding: 10px 18px;
  color: var(--muted);
  background: #f7f8fb;
  font-weight: 700;
  font-size: 13px;
}

.segmented .active { color: var(--blue); background: white; }

.app-card {
  display: grid;
  gap: 18px;
  min-height: 320px;
}

.icon-placeholder {
  width: 92px;
  height: 92px;
  border: 2px dashed #cfd5df;
  border-radius: 24px;
  background: #fafbfe;
}

.app-hero {
  display: grid;
  grid-template-columns: 110px minmax(0, 1fr);
  gap: 28px;
  align-items: center;
}

.rating {
  color: #f5a400;
  font-weight: 800;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}

.feature-list li::before {
  content: "✓";
  color: var(--blue);
  font-weight: 800;
  margin-right: 8px;
}

.support-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

@media (max-width: 860px) {
  .app-hero, .support-grid { grid-template-columns: 1fr; }
  .segmented { width: 100%; }
  .segmented span { min-width: 0; }
}
```

- [ ] **Step 4: Commit**

Run:

```bash
git add apps.html app-focusly.html assets/styles.css
git commit -m "Create app directory and detail pages"
```

Expected: commit succeeds.

## Task 4: Projects, About, Support, and Legal Pages

**Files:**
- Create: `projects.html`
- Create: `about.html`
- Create: `support.html`
- Create: `privacy.html`
- Create: `terms.html`
- Modify: `assets/styles.css`

- [ ] **Step 1: Create `projects.html`**

Create a projects grid with TaskFlow, GreenSteps, Sunset, and one open placeholder project. Each card includes an icon, iOS tag where relevant, description, and action link.

- [ ] **Step 2: Create `about.html`**

Create the about page with profile block, avatar placeholder, bio, skill strip, experience timeline, and contact/social block.

- [ ] **Step 3: Create `support.html`**

Create the support page with app support cards, general FAQ, contact email CTA, troubleshooting list, and legal links.

- [ ] **Step 4: Create `privacy.html` and `terms.html`**

Create standalone legal pages with clear placeholder copy that says the text must be replaced before publication.

- [ ] **Step 5: Add supporting page CSS**

Append to `assets/styles.css`:

```css
.profile {
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  gap: 58px;
  align-items: center;
}

.avatar {
  width: 260px;
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(circle at 50% 34%, #f3c7a6 0 18%, transparent 19%),
    radial-gradient(circle at 50% 58%, #15171d 0 34%, transparent 35%),
    linear-gradient(145deg, #d7dbe5, #f3f4f8);
  box-shadow: inset 0 -40px 0 rgba(17, 19, 24, 0.08);
}

.skill-strip {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 18px;
  align-items: center;
}

.skill {
  text-align: center;
  color: var(--muted);
  font-weight: 700;
  font-size: 13px;
}

.skill-icon {
  width: 42px;
  height: 42px;
  margin: 0 auto 8px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  color: white;
  background: linear-gradient(145deg, #ff7a1a, #2563eb);
}

.timeline {
  border-left: 1px solid var(--line);
  margin-left: 10px;
  padding-left: 28px;
  display: grid;
  gap: 28px;
}

.timeline-item { position: relative; }

.timeline-item::before {
  content: "";
  position: absolute;
  left: -34px;
  top: 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--blue);
  box-shadow: 0 0 0 4px #edf3ff;
}

.faq-list {
  display: grid;
  gap: 14px;
}

.faq-item {
  padding: 18px 0;
  border-bottom: 1px solid var(--line);
}

@media (max-width: 860px) {
  .profile, .skill-strip { grid-template-columns: 1fr; }
  .avatar { width: min(260px, 100%); }
  .skill-strip { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
```

- [ ] **Step 6: Commit**

Run:

```bash
git add projects.html about.html support.html privacy.html terms.html assets/styles.css
git commit -m "Add projects about support and legal pages"
```

Expected: commit succeeds.

## Task 5: Verification and Polish

**Files:**
- Modify as needed: `*.html`
- Modify as needed: `assets/styles.css`
- Modify as needed: `assets/script.js`

- [ ] **Step 1: Start a local static server**

Run:

```bash
python3 -m http.server 4173
```

Expected: server starts at `http://localhost:4173/`.

- [ ] **Step 2: Verify local links**

In a second terminal, run:

```bash
for f in index.html apps.html app-focusly.html projects.html about.html support.html privacy.html terms.html; do test -f "$f" || exit 1; done
rg -n 'href="(index|apps|app-focusly|projects|about|support|privacy|terms)\\.html"' *.html
```

Expected: all files exist and local links are found.

- [ ] **Step 3: Browser QA**

Open `http://localhost:4173/` and check:

- Home, Apps, Projects, About, Support, Privacy, and Terms pages load.
- Header active state follows the current page.
- Desktop layout resembles the selected reference-faithful direction.
- Narrow viewport has no text overlap and navigation remains usable.
- App support and legal sections are visible from the app detail page.

- [ ] **Step 4: Fix observed layout defects**

If browser QA shows overlap or broken spacing, adjust only the relevant HTML/CSS and rerun Step 3.

- [ ] **Step 5: Commit final polish**

Run:

```bash
git add .
git commit -m "Polish and verify static portfolio site"
```

Expected: commit succeeds if polish changed files. If no files changed, skip this commit.

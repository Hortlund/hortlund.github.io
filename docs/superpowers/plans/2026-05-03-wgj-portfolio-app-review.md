# WGJ Portfolio App Review Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add We Go Jim to the portfolio as the real iOS app and provide App Review-ready WGJ pages under `/wgj/`.

**Architecture:** Keep the current plain static HTML/CSS/JS site. Use `wgj/*/index.html` directory pages for clean hosted URLs and extend the shared stylesheet with WGJ theme classes.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, static file hosting.

---

## Tasks

- [ ] Copy the real WGJ app icon into `assets/wgj-app-icon.png`.
- [ ] Update `assets/script.js` so nested WGJ pages can mark Apps active through `data-nav-page`.
- [ ] Add WGJ theme CSS to `assets/styles.css`.
- [ ] Update `index.html` and `apps.html` to feature We Go Jim and link to `wgj/`.
- [ ] Create `wgj/index.html`, `wgj/support/index.html`, `wgj/privacy/index.html`, `wgj/terms/index.html`, `wgj/community-guidelines/index.html`, and `wgj/data-deletion/index.html`.
- [ ] Verify all local links/fragments, no dead `href="#"`, JS syntax, and static server responses.

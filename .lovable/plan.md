

## Samaya Mahate — Dark Minimalist Portfolio

### Design
- **Theme:** Dark charcoal (#1a1a1a / #2a2a2a) with slate-gray accent (e.g., #64748b / #94a3b8 — modern, muted, professional)
- **Typography:** Inter for headings, system sans-serif for body
- **Layout:** Single-page with smooth-scroll anchor navigation, max-width 1200px

### Sections (top to bottom)
1. **Fixed Navbar** — Name left, anchor links right (About, Skills, Experience, Projects, Blog, Certifications, Contact). Mobile hamburger menu.
2. **Hero (100vh)** — Name, "Associate Backend Developer" in accent, tagline, two CTA buttons (View Projects, Download CV), animated scroll indicator.
3. **About** — Short bio from CV, availability badge (green dot + "Open to opportunities"), GitHub/LinkedIn links.
4. **Technical Skills** — 4-col grid of skill cards (PHP, Laravel, Docker, AWS, etc.) with hover scale effect. Grouped by category.
5. **Work Experience** — Timeline layout with vertical line. Amnil Technologies entry with responsibilities.
6. **Projects** — 2-col grid cards. Flag-Forge project with tech tags and links.
7. **Publications** — Clean list with DOI link.
8. **Blog** — 2-col grid cards (Laravel Telescope, Laravel Fluent). Support for external URLs and future markdown posts.
9. **Certifications** — 3-col grid (AWS SA Associate, Cisco Networking, Cisco CyberSecurity, DataCamp GitHub).
10. **Community & Activities** — Timeline/list for extracurriculars (Helambu school outreach, Cloud Apprenticeship).
11. **Education** — Timeline (Presidential Graduate School BSIT, Depot Secondary School +2 Science).
12. **Contact** — Centered form (name, email, subject, message) with Formspree integration.
13. **Footer** — Copyright, social links.

### Content Architecture
- All content stored in JSON files under `src/data/` (profile, skills, experience, projects, certifications, education, publications, extracurriculars, blog index).
- CV PDF stored in `public/` for download.
- Pre-populated with real data from the uploaded CV.

### Interactions & Polish
- Smooth scroll to anchors
- Card hover effects (lift + shadow)
- Subtle hero gradient animation
- Form validation with accent-colored focus states
- Fully responsive (desktop → tablet → mobile)

### Contact Form
- Formspree integration — will need the user's Formspree endpoint URL stored as a constant (public key, safe in codebase).


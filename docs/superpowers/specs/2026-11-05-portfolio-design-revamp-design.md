# Portfolio Design Revamp — Design Document

## 1. Intent & Context
- **Owner:** Samaya Mahate
- **Domain:** samayamahate.com.np (hosted via GitHub Pages)
- **Role:** Associate Backend Developer & Cloud Practitioner (BSIT 2022–2026, AWS Certified Solutions Architect Associate)
- **Primary Audience:** Recruiters, technical hiring managers, and enterprise/startup clients scouting freelance backend engineers and distributed systems talent.
- **Problem:** The current website uses a generic "AI template" aesthetic (centered hero, generic badge clouds, bouncing down arrows, standard dark card grids) that fails to convey real-world engineering depth and credibility.
- **Core Goal:** Revamp the site using **taste-skill 2.5** principles and the **Deep Ink & Forest Editorial** design system (inspired by the craftsmanship of `mandeeprimal.com.np`), delivering high trust, authentic technical evidence, and restrained editorial beauty.

---

## 2. Aesthetic System & Taste-Skill Requirements

### 2.1 Palette & Themes
The design uses an editorial high-contrast palette with a seamless day/night theme toggle:
- **Default (Deep Ink / Night Mode):**
  - Background Canvas: `--bg-primary: #17211F` (near-black ink with deep pine undertone)
  - Surface / Panels: `--bg-surface: #1C2926` (restrained dark tint)
  - Hairline Borders: `--line: rgba(226, 223, 214, 0.15)`
  - Primary Accent: `--accent: #85C0AB` (pale sage green)
  - Ink / Text: `--text-primary: #FBFAF7` (warm paper white)
  - Soft Ink / Body: `--text-muted: #B2BCB8` (readable muted sage-gray)
  - Micro-details / Brass: `--gold: #C4A265`
- **Daylight Mode (Warm Paper):**
  - Background Canvas: `--bg-primary: #FBFAF7` (warm paper white)
  - Surface / Tinted Bands: `--bg-surface: #F3F1EB`
  - Hairline Borders: `--line: #E2DFD6`
  - Primary Accent: `--accent: #1E4D40` (deep pine)
  - Text Primary: `--text-primary: #17211F`
  - Soft Ink: `--text-muted: #4B5754`
  - Micro-details / Brass: `--gold: #85652B`

### 2.2 Typography
- **Headings (Display / Editorial):** `Fraunces`, Georgia, serif (weight 500/600, letter-spacing -0.02em, italic accents for name and keywords).
- **Body & Interface:** `Inter`, -apple-system, sans-serif (crisp, highly legible, 15px/16px body, line-height 1.6–1.7).
- **Code & Technical Snippets:** JetBrains Mono / SFMono-Regular / ui-monospace (tabular numbers, queue dispatchers, architecture specs).

### 2.3 Taste-Skill House Rules
1. **No generic AI badges or percentage bars:** No "PHP 90%" or endless pill walls.
2. **Equal left and right content margins:** All sections align to a consistent container width (max 1160px).
3. **One clear idea per section:** Clean rhythm without cluttered sub-sections.
4. **Restrained micro-interactions:**
   - Interactive cards lift exactly 2px on hover with subtle border lightening.
   - Buttons step visibly on hover and press on click (`transform: scale(0.98)`).
   - Links draw subtle underlines on hover.
   - Absolutely no parallax, tilt effects, or scroll-hijacking.
5. **Real technical evidence:** Code snippet showing a real RabbitMQ queue dispatcher for banking BPM cases; real project links and published research DOI.

---

## 3. Section Architecture & Flow

### 3.1 Header / Navigation
- Fixed / sticky top navigation with backdrop blur:
  - Brand logo: `Samaya.` (with accent dot)
  - Nav links: `About`, `Experience`, `Systems & Projects`, `Research & Writing`, `Contact`
  - Actions: Theme toggle (Day / Night), `Download CV` button, `Hire Me` direct link.

### 3.2 Hero Section (Split Editorial)
- **Left Column:**
  - Eyebrow: `Associate Backend Developer • Kathmandu, Nepal`
  - Title: `Samaya Mahate` (editorial serif with italic styling on *Mahate*)
  - Lead: `Building resilient BPM dashboards, asynchronous message queues, and cloud backend systems for financial and enterprise workflows.`
  - Call to Actions: Primary button `View Systems & Work`, secondary button `Download CV (PDF)`, inline text link `Email Me →`.
- **Right Column (System Artifact):**
  - **Builder Call:** Static, syntax-highlighted PHP code card showing the `BankingCaseDispatcher` publishing to `bpm.banking.sync` via RabbitMQ. Features a subtle 2px hover lift, a pulsing status indicator dot, and a quick "Copy Snippet" action (no bloated simulation state).
  - Status pill: `Available for Freelance & Systems Roles` with pulsing green indicator.
  - Summary metadata: Amnil Technologies • BSIT (2022–2026) • AWS Solutions Architect Associate.

### 3.3 Key Metrics / At a Glance Band
- 4-column hairline grid:
  1. `Banking BPM`: Workflow monitoring & case management dashboards at Amnil Technologies.
  2. `RabbitMQ`: Distributed queue architecture & asynchronous external API integration.
  3. `AWS SAA`: Certified Solutions Architect Associate (cloud infrastructure & containerization).
  4. `Peer-Reviewed`: Published IT & Renewable Energy research (NPRC Journal).

### 3.4 About & Engineering Philosophy
- **Builder Call:** Dedicated editorial section between Key Metrics and Experience. Anchored by `#about`.
- Presents Samaya's technical narrative: background in BSIT at Presidential Graduate School, transition to enterprise BPM workflows at Amnil Technologies, and philosophy of building robust, observable, and scalable backend infrastructure. Includes location, current status, and quick links to core specialties.

### 3.4 Work & Experience Timeline
- Deep breakdown of role at **Amnil Technologies** (Associate Backend Developer, Sept 2024 – March 2025):
  - Banking BPM dashboards developed in Laravel.
  - Customer request portal integrated with BPM processes.
  - Asynchronous communication via RabbitMQ for external financial services.
  - Database schema design, workflow optimization, and CI/CD pipelines.

### 3.5 Featured Systems & Projects
- Two prominent case-study style cards:
  1. **Flag-Forge (Cybersecurity CTF Platform):**
     - Live platform link (`flagforgectf.com`).
     - Key features: automated scoring engine, Redis streak cache, badge tracking, MongoDB persistence.
     - Tech stack tags: TypeScript, Node.js, Express, MongoDB, Redis, React.
  2. **Enterprise Banking BPM Portal:**
     - Architecture overview: Laravel, RabbitMQ, MySQL, Docker.
     - Focus: process isolation, queue reliability, client audit trail.

### 3.6 Research & Technical Publications
- **Academic Publication:**
  - *Assessing the Role of Information Technology in Promoting Sustainable and Renewable Energy in Helambu Rural Municipality, Nepal*
  - Journal: NPRC Journal of Multidisciplinary Research (DOI link included).
- **Technical Articles:**
  - *Monitoring Applications with Laravel Telescope* (Laravel Nepal)
  - *Laravel Fluent Class for Cleaner Configurations* (Laravel Nepal)

### 3.7 Education, Certifications & Community
- **Certifications:** AWS Solutions Architect Associate, Cisco Networking & Cybersecurity.
- **Education:** BSIT at Presidential Graduate School (2022–2026), +2 Science at Depot Secondary School.
- **Community:** IT outreach at Helambu Model School, Cloud Apprenticeship program.

### 3.8 Contact & Availability (Hybrid Direct + Form)
- **Builder Call:** A clean 2-column contact layout that caters to both recruiters and prospective freelance clients:
  - **Left Column (Direct Channels):**
    - One-click direct email (`samayamahate11@gmail.com`)
    - Direct phone (`+977 9811361137`)
    - Location (`Kathmandu, Nepal`)
    - LinkedIn & GitHub links
    - Primary `Download CV (PDF)` action button
  - **Right Column (Editorial Inquiry Form):**
    - Clean 3-field form (Name, Email, Message) connected to existing `FORMSPREE_ENDPOINT`
    - Styled with hairline borders, deep ink/warm paper inputs, and subtle focus rings
    - Success/error feedback via subtle status banner (no disruptive modals)
- **Footer Bar:**
  - Minimal copyright notice: `© 2026 Samaya Mahate. Built with React & Taste Skill.`
  - Single footer credit line conforming to taste-skill rule 1.

---

## 4. Technical Implementation & Constraints

- **Framework:** Vite 5 + React 18 + TypeScript.
- **Styling:** Tailwind CSS with custom CSS variables (`--bg-primary`, `--line`, etc.) mapped to Tailwind color utilities.
- **Theme Support:** Clean HTML attribute or class-based theme switching (`data-theme="dark"` / `data-theme="light"`), persisting in `localStorage`.
- **Fonts:** Preloaded Google Fonts for `Fraunces` (weights 400, 500, 600, italic) and `Inter` (weights 400, 500, 600, 700).
- **Icons:** Lucide React icons (clean, stroke-based, consistent 1.5–1.8 stroke width).
- **Performance:** Zero heavy canvas libraries, minimal bundle footprint, fast initial paint (< 100kb gzip), perfect responsiveness across 1440px, 1024px, 768px, and 390px.

---

## 5. Decisions Left to Builder
- Granular component file breakdown inside `src/components/` (e.g. `EditorialHero.tsx`, `MetricsBand.tsx`, `ExperienceSection.tsx`, etc.).
- Exact CSS keyframe durations for hover transitions (150ms–200ms ease-out).
- Specific animation classes using Tailwind primitives.

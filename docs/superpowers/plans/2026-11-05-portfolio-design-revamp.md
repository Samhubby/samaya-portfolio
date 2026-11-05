# Portfolio Design Revamp Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Revamp the portfolio website (`samayamahate.com.np`) using **taste-skill 2.5** principles and the **Deep Ink & Forest Editorial** design system, replacing generic AI template components with high-credibility, authentic backend engineering evidence.

**Architecture:** A modern Vite + React + TypeScript single-page application styled with Tailwind CSS and CSS custom properties for dual-theme support (Default Deep Ink / Night mode and Warm Paper / Day mode). Uses modular section components arranged in a strict single-column container grid (max-width 1160px) with hairline dividers, editorial serif display typography, and restrained micro-interactions.

**Tech Stack:** Vite 5, React 18, TypeScript, Tailwind CSS, Lucide React, Vitest, React Testing Library.

**Spec:** `docs/superpowers/specs/2026-11-05-portfolio-design-revamp-design.md`

## Global Constraints
- Target Domain: `samayamahate.com.np` (deployed to GitHub Pages).
- Color Palettes:
  - Night Mode (Default): Canvas `#17211F`, Surface `#1C2926`, Hairline `#E2DFD6` at 15% opacity, Accent `#85C0AB` (sage), Text `#FBFAF7`, Muted `#B2BCB8`, Brass `#C4A265`.
  - Day Mode: Canvas `#FBFAF7`, Surface `#F3F1EB`, Hairline `#E2DFD6`, Accent `#1E4D40` (pine), Text `#17211F`, Muted `#4B5754`, Brass `#85652B`.
- Typography: Display serif `Fraunces`, Body `Inter`, Monospace `JetBrains Mono` / SFMono-Regular.
- Taste-Skill Rules: Equal content edges, 2px micro-lifts on interactive cards, step-and-press button states, no generic purple gradients, no parallax or scroll hijacking.
- Responsive Viewports: Must render without overflow or horizontal scroll at 1440px, 1024px, 768px, and 390px.

## Review Focus
1. Theme Toggle Persistence: Switching to daylight mode and refreshing should persist the chosen theme in `localStorage` without flash of unstyled content.
2. Responsiveness & Overflow: On mobile viewports (390px), split grids must stack cleanly with zero text clipping or horizontal scrolling.
3. Formspree Contact Flow: Submitting the contact form handles network success and failures gracefully without crashing or reloading the page.
4. Navigation Anchors: Every navbar link (`#about`, `#experience`, `#projects`, `#research`, `#contact`) scrolls to its matching section element.
5. CV Download Integrity: Download CV buttons point accurately to `/CV_Samaya_Mahate.pdf` with the `download` attribute.

---

### Task 1: Design Tokens, Fonts & Theme System Setup

**Files:**
- Modify: `index.html:1-34`
- Modify: `src/index.css:1-92`
- Modify: `tailwind.config.ts:1-92`
- Create: `src/hooks/use-theme.tsx`
- Test: `src/test/theme.test.tsx`

**Interfaces:**
- Produces: `useTheme()` hook returning `{ theme: 'dark' | 'light', toggleTheme: () => void }`.
- Sets up `--bg-primary`, `--bg-surface`, `--line`, `--accent`, `--text-primary`, `--text-muted`, `--gold` CSS variables on `:root` and `[data-theme="light"]`.

- [ ] **Step 1: Write failing theme hook test**

```tsx
// src/test/theme.test.tsx
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { ThemeProvider, useTheme } from "@/hooks/use-theme";

describe("useTheme", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
  });

  it("defaults to dark theme and toggles to light theme", () => {
    const { result } = renderHook(() => useTheme(), { wrapper: ThemeProvider });
    expect(result.current.theme).toBe("dark");
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe("light");
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
    expect(localStorage.getItem("theme")).toBe("light");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/test/theme.test.tsx`
Expected: FAIL with module not found or functions undefined.

- [ ] **Step 3: Implement fonts, CSS tokens and theme provider**
  - Add Google Fonts for `Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..700` and `Inter:wght@300;400;500;600;700` to `index.html`.
  - Configure Tailwind font families: `font-serif: ['Fraunces', 'Georgia', 'serif']`, `font-sans: ['Inter', 'sans-serif']`, `font-mono: ['JetBrains Mono', 'monospace']`.
  - Define custom color variables in `src/index.css` for `--bg-primary`, `--bg-surface`, `--line`, `--accent`, `--text-primary`, `--text-muted`, `--gold` under `:root` (dark) and `[data-theme="light"]`.
  - Implement `ThemeProvider` and `useTheme` in `src/hooks/use-theme.tsx`.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/test/theme.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add index.html src/index.css tailwind.config.ts src/hooks/use-theme.tsx src/test/theme.test.tsx
git commit -m "feat(theme): configure editorial tokens, typography and theme provider"
```

---

### Task 2: Navigation Bar & Single-Line Footer

**Files:**
- Create: `src/components/EditorialNavbar.tsx`
- Create: `src/components/EditorialFooter.tsx`
- Test: `src/test/navigation.test.tsx`

**Interfaces:**
- Consumes: `useTheme()` from `src/hooks/use-theme.tsx`.
- Produces: `<EditorialNavbar />` and `<EditorialFooter />`.

- [ ] **Step 1: Write failing navigation test**

```tsx
// src/test/navigation.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ThemeProvider } from "@/hooks/use-theme";
import EditorialNavbar from "@/components/EditorialNavbar";
import EditorialFooter from "@/components/EditorialFooter";

describe("EditorialNavbar and EditorialFooter", () => {
  it("renders brand logo, nav anchor links, and toggles theme", () => {
    render(
      <ThemeProvider>
        <EditorialNavbar />
        <EditorialFooter />
      </ThemeProvider>
    );

    expect(screen.getByText("Samaya.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /About/i })).toHaveAttribute("href", "#about");
    expect(screen.getByRole("link", { name: /Experience/i })).toHaveAttribute("href", "#experience");
    expect(screen.getByRole("link", { name: /Systems/i })).toHaveAttribute("href", "#projects");
    expect(screen.getByRole("link", { name: /Contact/i })).toHaveAttribute("href", "#contact");

    const toggleBtn = screen.getByRole("button", { name: /toggle theme/i });
    fireEvent.click(toggleBtn);
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/test/navigation.test.tsx`
Expected: FAIL with missing components.

- [ ] **Step 3: Implement `EditorialNavbar` and `EditorialFooter`**
  - Implement fixed top header with backdrop blur, hairline bottom border, brand logo `Samaya.` with accent dot, anchor links, theme toggle button, and mobile menu trigger.
  - Implement single-line footer with copyright and `Built with React & Taste Skill.` credit line.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/test/navigation.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/EditorialNavbar.tsx src/components/EditorialFooter.tsx src/test/navigation.test.tsx
git commit -m "feat(ui): implement editorial navbar with theme switcher and footer"
```

---

### Task 3: Split Editorial Hero & Metrics Band

**Files:**
- Create: `src/components/EditorialHero.tsx`
- Create: `src/components/MetricsBand.tsx`
- Test: `src/test/hero-metrics.test.tsx`

**Interfaces:**
- Consumes: `profile` from `src/data/profile.ts`.
- Produces: `<EditorialHero />` and `<MetricsBand />`.

- [ ] **Step 1: Write failing hero and metrics test**

```tsx
// src/test/hero-metrics.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import EditorialHero from "@/components/EditorialHero";
import MetricsBand from "@/components/MetricsBand";

describe("EditorialHero & MetricsBand", () => {
  it("renders display typography, headline copy, and code card snippet", () => {
    render(
      <>
        <EditorialHero />
        <MetricsBand />
      </>
    );

    expect(screen.getByText(/Associate Backend Developer/i)).toBeInTheDocument();
    expect(screen.getByText(/BankingCaseDispatcher/i)).toBeInTheDocument();
    expect(screen.getByText(/bpm\.banking\.sync/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Download CV/i })).toHaveAttribute("href", "/CV_Samaya_Mahate.pdf");
    expect(screen.getByText(/AWS SAA/i)).toBeInTheDocument();
    expect(screen.getByText(/Banking BPM/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/test/hero-metrics.test.tsx`
Expected: FAIL with components not found.

- [ ] **Step 3: Implement `EditorialHero` and `MetricsBand`**
  - Build split 2-column hero: Left side has location eyebrow, `Samaya Mahate` in display serif with italic nuance, value statement, primary and secondary CTA buttons, and inline email link.
  - Right side features the `BankingCaseDispatcher` PHP code card with syntax highlighting, pulsing status indicator, and copy snippet button.
  - Build `MetricsBand`: 4-column hairline grid displaying Banking BPM, RabbitMQ, AWS Solutions Architect Associate, and Peer-Reviewed Research.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/test/hero-metrics.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/EditorialHero.tsx src/components/MetricsBand.tsx src/test/hero-metrics.test.tsx
git commit -m "feat(hero): build split editorial hero and 4-column metrics band"
```

---

### Task 4: About & Engineering Philosophy Section

**Files:**
- Create: `src/components/AboutSection.tsx`
- Test: `src/test/about.test.tsx`

**Interfaces:**
- Produces: `<AboutSection />` anchored by `id="about"`.

- [ ] **Step 1: Write failing about section test**

```tsx
// src/test/about.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AboutSection from "@/components/AboutSection";

describe("AboutSection", () => {
  it("renders about narrative and core backend engineering philosophy", () => {
    render(<AboutSection />);

    const section = screen.getByTestId("about-section");
    expect(section).toHaveAttribute("id", "about");
    expect(screen.getByText(/Engineering Philosophy/i)).toBeInTheDocument();
    expect(screen.getByText(/Amnil Technologies/i)).toBeInTheDocument();
    expect(screen.getByText(/Presidential Graduate School/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/test/about.test.tsx`
Expected: FAIL with component missing.

- [ ] **Step 3: Implement `AboutSection`**
  - Create high-contrast editorial section explaining Samaya's background, transition into enterprise BPM systems at Amnil Technologies, BSIT education, and backend philosophy (reliability, event-driven decoupling, observable systems).

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/test/about.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/AboutSection.tsx src/test/about.test.tsx
git commit -m "feat(about): create dedicated editorial about and engineering philosophy section"
```

---

### Task 5: Experience Timeline & Case Studies (Systems & Projects)

**Files:**
- Create: `src/components/EditorialExperience.tsx`
- Create: `src/components/FeaturedSystems.tsx`
- Test: `src/test/experience-systems.test.tsx`

**Interfaces:**
- Consumes: `experience` and `projects` from `src/data/profile.ts`.
- Produces: `<EditorialExperience />` (`#experience`) and `<FeaturedSystems />` (`#projects`).

- [ ] **Step 1: Write failing experience and systems test**

```tsx
// src/test/experience-systems.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import EditorialExperience from "@/components/EditorialExperience";
import FeaturedSystems from "@/components/FeaturedSystems";

describe("EditorialExperience & FeaturedSystems", () => {
  it("renders experience details and featured projects with links and tags", () => {
    render(
      <>
        <EditorialExperience />
        <FeaturedSystems />
      </>
    );

    expect(screen.getByText("Amnil Technologies")).toBeInTheDocument();
    expect(screen.getByText(/Associate Backend Developer/i)).toBeInTheDocument();
    expect(screen.getByText("Flag-Forge")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /flagforgectf\.com/i })).toHaveAttribute("href", "https://www.flagforgectf.com/");
    expect(screen.getByText(/Banking BPM Dashboards/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/test/experience-systems.test.tsx`
Expected: FAIL with components missing.

- [ ] **Step 3: Implement `EditorialExperience` and `FeaturedSystems`**
  - Build `EditorialExperience` as an editorial timeline with hairline borders, company name, role, date range, and bullet points detailing BPM dashboard development and RabbitMQ integration.
  - Build `FeaturedSystems` showcasing two deep case study cards:
    - *Flag-Forge*: Cybersecurity CTF platform with live link, architecture tags (TypeScript, Redis, MongoDB, Express), and key features.
    - *Enterprise Banking BPM Dashboards*: Architecture breakdown, workflow automation, and asynchronous API communication.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/test/experience-systems.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/EditorialExperience.tsx src/components/FeaturedSystems.tsx src/test/experience-systems.test.tsx
git commit -m "feat(experience): implement experience timeline and featured systems case studies"
```

---

### Task 6: Research, Writing, Education & Certifications

**Files:**
- Create: `src/components/ResearchAndWriting.tsx`
- Create: `src/components/CredentialsSection.tsx`
- Test: `src/test/research-credentials.test.tsx`

**Interfaces:**
- Consumes: `publications`, `blogs`, `certifications`, `education` from `src/data/profile.ts`.
- Produces: `<ResearchAndWriting />` (`#research`) and `<CredentialsSection />`.

- [ ] **Step 1: Write failing research and credentials test**

```tsx
// src/test/research-credentials.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ResearchAndWriting from "@/components/ResearchAndWriting";
import CredentialsSection from "@/components/CredentialsSection";

describe("ResearchAndWriting & CredentialsSection", () => {
  it("renders academic publications with DOI, blog posts, and certifications", () => {
    render(
      <>
        <ResearchAndWriting />
        <CredentialsSection />
      </>
    );

    expect(screen.getByText(/Helambu Rural Municipality/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /doi\.org/i })).toHaveAttribute("href", "https://doi.org/10.3126/nprcjmr.v2i14.88023");
    expect(screen.getByText(/Laravel Telescope/i)).toBeInTheDocument();
    expect(screen.getByText(/AWS Solutions Architect Associate/i)).toBeInTheDocument();
    expect(screen.getByText("Presidential Graduate School")).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/test/research-credentials.test.tsx`
Expected: FAIL with components missing.

- [ ] **Step 3: Implement `ResearchAndWriting` and `CredentialsSection`**
  - Build `ResearchAndWriting` showcasing the NPRC Journal publication with DOI link and technical articles on Laravel Nepal.
  - Build `CredentialsSection` showcasing AWS Solutions Architect Associate, Cisco certifications, and BSIT education at Presidential Graduate School.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/test/research-credentials.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/ResearchAndWriting.tsx src/components/CredentialsSection.tsx src/test/research-credentials.test.tsx
git commit -m "feat(research): implement research publications, articles, and credentials"
```

---

### Task 7: Hybrid Contact Section & Page Assembly

**Files:**
- Create: `src/components/EditorialContact.tsx`
- Modify: `src/pages/Index.tsx:1-36`
- Test: `src/test/contact-page.test.tsx`

**Interfaces:**
- Consumes: `FORMSPREE_ENDPOINT` and `profile` from `src/data/profile.ts`.
- Produces: Complete page layout inside `src/pages/Index.tsx` with all sections interconnected.

- [ ] **Step 1: Write failing contact and page assembly test**

```tsx
// src/test/contact-page.test.tsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Index from "@/pages/Index";

describe("Index Page Assembly & Contact Form", () => {
  it("renders all sections and handles contact form submission", async () => {
    const mockFetch = vi.fn().mockResolvedValue({ ok: true });
    global.fetch = mockFetch;

    render(<Index />);

    expect(screen.getByText("Samaya Mahate")).toBeInTheDocument();
    expect(screen.getByText("samayamahate11@gmail.com")).toBeInTheDocument();

    const nameInput = screen.getByPlaceholderText(/your name/i);
    const emailInput = screen.getByPlaceholderText(/your email/i);
    const messageInput = screen.getByPlaceholderText(/message/i);
    const submitBtn = screen.getByRole("button", { name: /send message/i });

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Interested in freelance collaboration." } });

    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalled();
    });
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/test/contact-page.test.tsx`
Expected: FAIL with components missing.

- [ ] **Step 3: Implement `EditorialContact` and assemble `Index.tsx`**
  - Implement 2-column contact section: Left side direct channels (email, phone, location, LinkedIn, GitHub, CV download), right side clean 3-field Formspree message form.
  - Assemble all sections in `src/pages/Index.tsx` wrapped in `ThemeProvider`: `EditorialNavbar`, `EditorialHero`, `MetricsBand`, `AboutSection`, `EditorialExperience`, `FeaturedSystems`, `ResearchAndWriting`, `CredentialsSection`, `EditorialContact`, `EditorialFooter`.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/test/contact-page.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/EditorialContact.tsx src/pages/Index.tsx src/test/contact-page.test.tsx
git commit -m "feat(contact): implement hybrid contact section and assemble full editorial page"
```

---

### Task 8: Build Verification, Linting & Taste-Skill Consistency Audit

**Files:**
- Modify: `package.json` (if needed for scripts)
- Test: Full build and test suite execution

**Interfaces:**
- Produces: Production build in `dist/` verified with zero type errors, zero lint errors, and passing Vitest suite.

- [ ] **Step 1: Run complete test suite**

Run: `npm run test`
Expected: All tests pass.

- [ ] **Step 2: Run lint check**

Run: `npm run lint`
Expected: No lint errors.

- [ ] **Step 3: Run production build**

Run: `npm run build`
Expected: Build finishes with exit code 0 and bundles in `dist/`.

- [ ] **Step 4: Commit**

```bash
git commit --allow-empty -m "chore(release): verify build, lint, and full test suite pass"
```

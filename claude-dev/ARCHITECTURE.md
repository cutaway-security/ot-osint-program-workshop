# ARCHITECTURE.md - Site Structure and Technical Design

## Overview

The OT OSINT Program Workshop is a standalone GitHub Pages site delivering a 4-hour hands-on workshop. The site serves as both the instructor's projected presentation and the student's self-paced reference during the workshop.

---

## Repository Structure

```
ot-osint-program-workshop/
    CLAUDE.md                         # Claude Code rules and guidelines
    README.md                         # Project overview and quick start
    _config.yml                       # Jekyll configuration
    .gitignore                        # Build artifacts, OS files
    index.html                        # Workshop landing page / schedule
    claude-dev/                       # Development tracking
        ARCHITECTURE.md               # This file
        PLAN.md                       # Project roadmap
        RESUME.md                     # Session context
        WORKSHOP_FRAMEWORK.md         # Authoritative content reference
    _layouts/                         # Jekyll layouts
        default.html                  # Base layout (head, nav, footer)
        module.html                   # Module page layout (summary + lab)
    _includes/                        # Reusable Jekyll includes
        nav.html                      # Navigation bar
        footer.html                   # Footer
        prompt-block.html             # Copyable AI prompt formatting
        module-nav.html               # Previous/next module navigation
        timing-badge.html             # Module timing indicator
    modules/
        m1-threat-context.html
        m2-attack-surface.html
        m3-personnel-exposure.html
        m4-vulnerability-correlation.html
        m5-monitoring-alerting.html
        m6-runbook-development.html
        summary.html
    examples/
        nreca-domain-discovery.md
        nreca-personnel-analysis.md
        fortinet-vuln-correlation.md
        google-alerts-configuration.md
    templates/
        baseline-template.md
        personnel-inventory-template.md
        vuln-correlation-template.md
        runbook-template.md
        monitoring-checklist-template.md
    prompts/
        ai-copilot-prompt-library.md
    resources/
        tools.md
        vuln-intelligence-resources.md
    css/
        style.css
    js/
        clipboard.js                  # Copy-to-clipboard for AI prompts
    img/
```

### Directory Purposes

| Directory | Audience | Purpose |
|-----------|----------|---------|
| Root | Everyone | Landing page, Jekyll config, project docs |
| claude-dev/ | Developers | Development tracking, not deployed to main |
| _layouts/ | Site | Jekyll page templates |
| _includes/ | Site | Reusable HTML components |
| modules/ | Students / Instructor | Individual module pages |
| examples/ | Students | Worked NRECA and Fortinet examples |
| templates/ | Students | Downloadable/copyable artifact templates |
| prompts/ | Students | Collected AI copilot prompt library |
| resources/ | Students | Tool reference and vulnerability intel sources |
| css/ | Site | Stylesheets |
| js/ | Site | Minimal JavaScript (clipboard) |
| img/ | Site | Workshop images |

---

## Technology Stack

### Build System

| Component | Technology | Notes |
|-----------|------------|-------|
| Site Generator | Jekyll (via GitHub Pages) | Automatic builds on push |
| Markdown Engine | Kramdown | GitHub Pages default |
| Templating | Liquid | Jekyll template language |
| Hosting | GitHub Pages | cutaway-security.github.io |
| Version Control | Git / GitHub | Main branch deploys |
| Development Tool | Claude Code CLI | Primary development interface |

### Frontend

| Component | Technology | Notes |
|-----------|------------|-------|
| HTML | HTML5 with semantic elements | Accessible, clean markup |
| CSS | Custom CSS | No frameworks, CSS variables for theming |
| JavaScript | Vanilla JS (minimal) | Copy-to-clipboard for prompts |
| Fonts | System font stack | No external font loading |
| Icons | None (text-based) | No emoji, no icon libraries |

### Content Format

| Content Type | Format | Location |
|-------------|--------|----------|
| Module pages | HTML with Liquid | modules/ |
| Examples | Markdown | examples/ |
| Templates | Markdown | templates/ |
| Prompt library | Markdown | prompts/ |
| Resource lists | Markdown | resources/ |

---

## GitHub Pages Configuration

### URL Structure

```
Base URL: https://cutaway-security.github.io/ot-osint-program-workshop/

Landing page:  /ot-osint-program-workshop/
Modules:       /ot-osint-program-workshop/modules/m1-threat-context.html
Templates:     /ot-osint-program-workshop/templates/runbook-template.html
Prompts:       /ot-osint-program-workshop/prompts/ai-copilot-prompt-library.html
Resources:     /ot-osint-program-workshop/resources/tools.html
```

### Jekyll Configuration

```yaml
title: CutSec OT OSINT Program Workshop
description: Building an ICS/OT OSINT Monitoring Program
baseurl: /ot-osint-program-workshop
url: https://cutaway-security.github.io
markdown: kramdown
exclude:
  - CLAUDE.md
  - claude-dev/
  - README.md
```

Module pages use front matter to specify layout and metadata:

```yaml
---
layout: module
title: "Module 2: External Attack Surface Discovery"
module_number: 2
read_time: 10
lab_time: 35
total_time: 45
block: 1
prev_module: m1-threat-context
next_module: m3-personnel-exposure
---
```

---

## Page Layout Architecture

### Design Philosophy

The site is basic and minimalist. Pages are designed to work in two contexts simultaneously:

1. **Projected by the instructor** -- the opening section of each module is a clear summary of what students will do, readable from a projector at the front of the room
2. **Read by the student** -- students follow along on their laptops, scrolling into the detailed lab steps at their own pace

This dual use is implicit in the design. The site does not label content as "for instructor" or "for student" -- it just flows naturally from overview to detail.

### Base Layout (default.html)

```
+------------------------------------------------------------------+
| CutSec OT OSINT Program Workshop                                 |
| [Home] [Modules v] [Templates] [Prompts] [Resources]             |
+------------------------------------------------------------------+
|                                                                   |
|  {{ content }}                                                    |
|                                                                   |
+------------------------------------------------------------------+
| CutSec | GitHub Repo                                             |
+------------------------------------------------------------------+
```

### Module Layout (module.html)

Extends default.html. Provides consistent structure for all 6 module pages:

```
+------------------------------------------------------------------+
| Module N: Title                              Read: Xm | Lab: Ym  |
+------------------------------------------------------------------+
|                                                                   |
| OVERVIEW                                                          |
| -----------------------------------------------------------------|
| (What this module covers and why it matters)                      |
| (Brief, scannable from a projector -- sets up what follows)       |
|                                                                   |
| LAB                                                               |
| -----------------------------------------------------------------|
| (Numbered structured steps for student hands-on work)             |
| (Tool links, AI prompts, expected outputs)                        |
|                                                                   |
|   [v] Worked Example: NRECA/Fortinet (collapsible)                |
|   (Step-specific demonstration with example AI responses)         |
|                                                                   |
| OUTPUT                                                            |
| -----------------------------------------------------------------|
| (Description of deliverable artifact from this module)            |
|                                                                   |
+------------------------------------------------------------------+
| [<< Previous Module]                         [Next Module >>]     |
+------------------------------------------------------------------+
```

### Worked Example Integration Pattern

Worked examples (NRECA, Fortinet) are integrated directly into the Lab section as collapsible `<details>` blocks within individual lab steps, rather than appearing as a separate section before the lab.

**Design rationale:**
- Students start working immediately instead of reading a long example first
- Students who get stuck can expand the worked example for that specific step
- The instructor can project the overview to frame the module, then tell students to begin the lab
- Each worked example is scoped to its lab step, keeping context tight

**Structure within a lab step:**

```html
<h3>Step N: Step Title</h3>
<!-- Student instructions, tool links, AI prompts -->

<details>
  <summary>Worked Example: NRECA Step Title</summary>
  <!-- NRECA-specific URLs, data, AI response examples -->
</details>
```

**Guidelines:**
- Not every lab step needs a worked example -- only include one where it adds value (showing expected output, demonstrating a non-obvious workflow, or providing contrast)
- The lab step must be self-contained: a student should be able to complete the step using only the instructions and prompts, without expanding the worked example
- Worked examples use the `response-block` include for AI response formatting and are wrapped in `<details>` for collapsibility
- Generic prompts with `[placeholders]` appear in the lab step; the worked example shows NRECA/Fortinet-specific results

### Index Page

```
+------------------------------------------------------------------+
| CutSec OT OSINT Program Workshop                                 |
| Building an ICS/OT OSINT Monitoring Program                      |
+------------------------------------------------------------------+
|                                                                   |
| Workshop Overview                                                 |
| Schedule table (Block / Module / Read / Lab / Total)              |
|                                                                   |
| Prerequisites                                                     |
| Student requirements                                              |
|                                                                   |
| Module Links                                                      |
| M1: Threat Context (15 min)                                       |
| M2: External Attack Surface (45 min)                              |
| M3: Personnel & Credential Exposure (40 min)                      |
|   Break 1 (10 min)                                                |
| M4: Vulnerability Correlation (40 min)                            |
| M5: Monitoring & Alerting (45 min)                                |
|   Break 2 (10 min)                                                |
| M6: Runbook Development (35 min)                                  |
| Summary & Next Steps (10 min)                                     |
|                                                                   |
| Supporting Materials                                              |
| Templates | Prompt Library | Tool Reference | Vuln Resources      |
|                                                                   |
+------------------------------------------------------------------+
```

---

## Workshop Content Architecture

### Module Structure (from WORKSHOP_FRAMEWORK.md)

| Module | Duration | Read | Lab | Block |
|--------|----------|------|-----|-------|
| M1: Threat Context | 15 min | 5 min | 10 min | 1 |
| M2: External Attack Surface | 45 min | 10 min | 35 min | 1 |
| M3: Personnel & Credential Exposure | 40 min | 10 min | 30 min | 1 |
| Break 1 | 10 min | -- | -- | -- |
| M4: Vulnerability Correlation | 40 min | 10 min | 30 min | 2 |
| M5: Monitoring & Alerting | 45 min | 10 min | 35 min | 2 |
| Break 2 | 10 min | -- | -- | -- |
| M6: Runbook Development | 35 min | 10 min | 25 min | 3 |
| Summary | 10 min | 10 min | -- | 3 |

### Example Content Sources

All example content comes from WORKSHOP_FRAMEWORK.md:

| Example | Used In | Source |
|---------|---------|--------|
| NRECA organization profile | M2, M3, M5 | Public website (electric.coop) |
| NRECA leadership/contacts | M3 | Public leadership and contact pages |
| NRECA email format | M3 | Derived from public contacts |
| NRECA domain inventory | M2 | Certificate transparency, public site |
| Fortinet FortiGate CVEs | M1, M4 | NVD, CISA KEV, Fortinet PSIRT |
| Fortinet Shodan queries | M2, M4 | Shodan (browser search) |
| Google Alerts configuration | M5 | Google Alerts UI |
| NRECA monitoring setup | M5 | Workshop-specific configuration |
| NRECA runbook excerpt | M6 | Workshop-specific procedures |

### Student Deliverables (8 Artifacts)

| # | Artifact | Module | Format |
|---|----------|--------|--------|
| 1 | Sector threat profile | M1 | AI-generated document |
| 2 | External attack surface inventory | M2 | Structured inventory |
| 3 | Personnel exposure inventory | M3 | Role-prioritized list |
| 4 | Vulnerability correlation table | M4 | Asset-to-CVE table |
| 5 | Configured monitoring alerts | M5 | Live alert services |
| 6 | Pull-based monitoring schedule | M5 | Checklist document |
| 7 | Consolidated baseline document | M5 | Combined M2-M4 outputs |
| 8 | Operational runbook | M6 | Cadenced procedures |

---

## Navigation Design

### Primary Navigation

Every page includes:
- **Home** -- back to index
- **Modules** -- dropdown/list of all 6 modules + summary
- **Templates** -- link to templates index
- **Prompts** -- link to AI copilot prompt library
- **Resources** -- link to tools and vulnerability intelligence

### Module Navigation

Every module page includes:
- Previous module link (or back to index for M1)
- Next module link (or summary for M6)
- Back to index link

---

## Styling Approach

### Design Principles

- Basic, clean, minimalist
- High contrast for readability on projectors and in conference lighting
- Clear visual distinction between overview sections and lab sections
- AI prompt blocks visually distinct and obviously copyable
- Mobile-responsive for students using tablets or phones
- Fast loading -- no heavy assets, no external dependencies

### Color Palette (TBD)

CSS variables for easy theming:

```css
:root {
    --color-primary: TBD;
    --color-secondary: TBD;
    --color-background: TBD;
    --color-text: TBD;
    --color-overview-section: TBD;
    --color-lab-section: TBD;
    --color-prompt-block: TBD;
    --color-link: TBD;
}
```

### Key Visual Elements

| Element | Style Notes |
|---------|-------------|
| Overview sections | Distinct background or border, readable from projector |
| Lab sections | Numbered steps, clear visual hierarchy |
| AI prompts | Monospace, bordered, with copy button/indicator |
| Tool links | Prominent, opens in new tab |
| Timing badges | Small indicators showing read/lab/total time |
| Break indicators | Visual separator between blocks |
| Output descriptions | Highlighted box describing expected deliverable |

---

## Build and Deploy Process

### Local Development

```bash
# Install Jekyll (one time)
gem install bundler jekyll

# Clone repo
git clone https://github.com/cutaway-security/ot-osint-program-workshop.git
cd ot-osint-program-workshop

# Install dependencies
bundle install

# Serve locally with live reload
bundle exec jekyll serve --livereload

# Build without serving (verify output)
bundle exec jekyll build
# Output in _site/
```

### Deployment

Push to main branch triggers automatic GitHub Pages build and deploy.

```bash
git add .
git commit -m "descriptive commit message"
git push origin main
```

### Pre-Push Checklist

1. `bundle exec jekyll build` completes without errors
2. All pages render correctly in _site/
3. All internal links resolve
4. All module pages accessible from index
5. Navigation works (previous/next, back to index)
6. AI prompt code blocks render correctly
7. Pages readable when viewed at full width (projector simulation)

---

## Content Development Workflow

### Adding a New Module Page

1. Create `modules/mN-module-name.html` with front matter
2. Use `module` layout
3. Write overview section (from WORKSHOP_FRAMEWORK.md)
4. Write lab section with numbered steps -- this is the primary content
5. For each lab step, add generic AI prompts as copyable code blocks with `[placeholders]`
6. Where a worked example adds value, add a collapsible `<details>` block after the step instructions with NRECA/Fortinet-specific data and example AI responses
7. Add output/deliverable description
8. Update previous module's `next_module` front matter
9. Update index page if needed
10. Test Jekyll build

### Adding a Template

1. Create `templates/template-name.md` with front matter
2. Use Markdown format that students can copy/adapt
3. Include field descriptions and example data
4. Link from relevant module page and templates index
5. Test rendering

### Adding an AI Prompt

1. Add to relevant module page in a copyable code block
2. Add to `prompts/ai-copilot-prompt-library.md` under appropriate category
3. Ensure prompt is AI-client agnostic (works with ChatGPT, Claude, etc.)

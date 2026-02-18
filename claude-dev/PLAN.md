# PLAN.md - Project Roadmap

## Project: CutSec OT OSINT Program Workshop

**Goal**: Build a standalone GitHub Pages website for a 4-hour ICS/OT OSINT monitoring program workshop.

**Target**: ICS/OT security professionals attending instructor-led workshops with laptops and web browsers.

---

## Phase Overview

| Phase | Name | Status | Description |
|-------|------|--------|-------------|
| 0 | Project Setup | COMPLETE | Framework files, repo structure, conventions |
| 1 | Site Scaffolding | COMPLETE | Layouts, navigation, base templates, styling |
| 2 | Module Content | NOT STARTED | Convert WORKSHOP_FRAMEWORK.md into module pages |
| 3 | Supporting Materials | NOT STARTED | Templates, prompt library, resource pages |
| 4 | Polish and Testing | NOT STARTED | Cross-browser, mobile, content review, links |

---

## Phase 0: Project Setup

**Status**: COMPLETE

**Objective**: Create Claude Code framework files, establish repo structure and conventions, and get a clean Jekyll build.

### Tasks

| # | Task | Status | Notes |
|---|------|--------|-------|
| 0.1 | Create CLAUDE.md | COMPLETE | Project rules and guidelines |
| 0.2 | Create claude-dev/ARCHITECTURE.md | COMPLETE | Site structure and technical design |
| 0.3 | Create claude-dev/PLAN.md | COMPLETE | This file |
| 0.4 | Create claude-dev/RESUME.md | COMPLETE | Session status and context |
| 0.5 | Rewrite README.md | COMPLETE | Project overview, structure, local dev instructions |
| 0.6 | Create _config.yml | COMPLETE | Jekyll configuration for GitHub Pages |
| 0.7 | Update .gitignore | COMPLETE | Added Jekyll entries, kept existing |
| 0.8 | Create Gemfile | COMPLETE | github-pages gem for build compatibility |
| 0.9 | Fix WORKSHOP_FRAMEWORK.md | COMPLETE | Fixed 239 encoding corruptions, removed V1 comparison, updated project name |
| 0.10 | Install Ruby/Jekyll | COMPLETE | Ruby 3.2.3, Bundler 4.0.6, github-pages gem 232 |
| 0.11 | Validate Jekyll build | COMPLETE | Clean build, exclusions verified |

### Acceptance Criteria

- [x] All four framework files created and reviewed
- [x] README.md provides project overview
- [x] Jekyll configuration established
- [x] .gitignore in place
- [x] Gemfile created for github-pages gem
- [x] WORKSHOP_FRAMEWORK.md encoding fixed and V1 references cleaned
- [x] Clean Jekyll build with no errors

### Deliverables

- CLAUDE.md
- claude-dev/ARCHITECTURE.md, PLAN.md, RESUME.md, WORKSHOP_FRAMEWORK.md
- README.md
- _config.yml
- Gemfile
- .gitignore

---

## Phase 1: Site Scaffolding

**Status**: COMPLETE

**Objective**: Create the site skeleton with layouts, navigation, styling, and placeholder module pages.

### Tasks

| # | Task | Status | Notes |
|---|------|--------|-------|
| 1.1 | Create directory structure | COMPLETE | All directories created |
| 1.2 | Create default layout | COMPLETE | _layouts/default.html -- HTML5, head, nav, footer, CSS, JS |
| 1.3 | Create module layout | COMPLETE | _layouts/module.html -- extends default, timing badges, module nav |
| 1.4 | Create navigation include | COMPLETE | _includes/nav.html -- CSS-only hover dropdown for modules |
| 1.5 | Create footer include | COMPLETE | _includes/footer.html |
| 1.6 | Create module-nav include | COMPLETE | Previous/next with configurable titles |
| 1.7 | Create prompt-block include | COMPLETE | Accepts title and content params, copy button |
| 1.8 | Create timing-badge include | COMPLETE | Read/lab/total from front matter, lab hidden when 0 |
| 1.9 | Create stylesheet | COMPLETE | CSS variables, dark nav/footer, section styling, responsive |
| 1.10 | Create index page | COMPLETE | Schedule table, prerequisites, material cards |
| 1.11 | Create placeholder module pages | COMPLETE | 7 pages with front matter, TODO markers, output descriptions |
| 1.12 | Implement copy-to-clipboard JS | COMPLETE | Clipboard API with execCommand fallback |
| 1.13 | Test skeleton builds | COMPLETE | Clean build, 12 pages, all internal links verified |
| 1.14 | Test mobile responsiveness | PARTIAL | CSS breakpoints at 768px and 375px implemented; visual testing deferred to Phase 4 |
| 1.15 | Create placeholder supporting pages | COMPLETE | templates/index, prompts, resources (so nav links resolve) |

### Acceptance Criteria

- [x] Directory structure matches ARCHITECTURE.md
- [x] All layouts and includes created and functional
- [x] Index page renders with schedule and module links
- [x] All placeholder module pages reachable and render correctly
- [x] Navigation works (index, previous/next, modules dropdown)
- [x] CSS provides clean, readable layout suitable for projector display
- [ ] Mobile responsive at tablet and phone breakpoints (CSS implemented, visual testing in Phase 4)

### Deliverables

- Directory structure (9 directories)
- _layouts/default.html, module.html
- _includes/nav.html, footer.html, module-nav.html, prompt-block.html, timing-badge.html
- css/style.css (470+ lines, CSS variables, responsive)
- js/clipboard.js
- index.html
- modules/ placeholder pages (7 files)
- Placeholder supporting pages (templates/index, prompts, resources/tools, resources/vuln-intel)

---

## Phase 2: Module Content

**Status**: IN PROGRESS

**Objective**: Convert WORKSHOP_FRAMEWORK.md module specifications into full HTML pages with overview sections, worked examples, and structured lab steps.

### Tasks

| # | Task | Status | Notes |
|---|------|--------|-------|
| 2.1 | M1: Threat Context -- overview | COMPLETE | 4-incident attack table, problem statement, workshop framing |
| 2.2 | M1: Threat Context -- lab | COMPLETE | 4 steps, prompt-block, response-block with sanitized example |
| 2.3 | M2: Attack Surface -- overview | COMPLETE | Attack surface concepts, discovery techniques table, naming conventions table |
| 2.4 | M2: Attack Surface -- worked example | COMPLETE | NRECA: crt.sh, 9-domain mapping, Shodan/Censys, AI analysis prompt + response |
| 2.5 | M2: Attack Surface -- lab | COMPLETE | 5 steps with tool tables, 3 prompt blocks, account requirements noted |
| 2.6 | M3: Personnel -- overview | COMPLETE | Personnel exposure risks, breach databases, 3-tier model, professional networks |
| 2.7 | M3: Personnel -- worked example | COMPLETE | NRECA leadership table, email format, hypothetical breach findings, AI prioritization |
| 2.8 | M3: Personnel -- lab | COMPLETE | 4 steps: discovery, breach checks, prioritization, professional exposure |
| 2.9 | M4: Vulnerability -- overview | COMPLETE | Asset-to-vuln workflow, KEV emphasis, edge device focus, vuln sources table |
| 2.10 | M4: Vulnerability -- worked example | COMPLETE | FortiGate CVE-2025-59718/59719 correlation, KEV timeline, PSIRT, CISA alerts |
| 2.11 | M4: Vulnerability -- lab | COMPLETE | 4 steps: CPE generation, multi-source queries, P0-P3 prioritization, documentation |
| 2.12 | M5: Monitoring -- overview | COMPLETE | Push vs pull model, alert sources table, pull-based checks, aggregation guidance |
| 2.13 | M5: Monitoring -- worked example | COMPLETE | NRECA Google Alerts (5 queries), CISA subscriptions, pull-based schedule (weekly + monthly) |
| 2.14 | M5: Monitoring -- lab | COMPLETE | 3 steps: push alerts, pull schedule, baseline snapshot with 4-category classification |
| 2.15 | M6: Runbook -- overview | COMPLETE | Runbook vs playbook, cadence structure table, writing-for-someone-else executability test |
| 2.16 | M6: Runbook -- worked example | COMPLETE | NRECA runbook: daily triage, weekly checks, monthly review, quarterly assessment |
| 2.17 | M6: Runbook -- lab | COMPLETE | 4 steps: AI generation, customize, mark MVM [CORE]/[FULL], peer review |
| 2.18 | Summary page | NOT STARTED | Prioritization recap, artifacts list, next steps |
| 2.19 | Content review vs WORKSHOP_FRAMEWORK.md | NOT STARTED | Verify completeness |

### Acceptance Criteria

- [ ] All 6 module pages have complete overview sections
- [ ] All applicable modules have worked NRECA/Fortinet examples
- [ ] All modules have structured lab sections with numbered steps
- [ ] All AI prompts formatted as copyable code blocks
- [ ] All external tool links present and open in new tab
- [ ] Summary page lists all 8 artifacts and next steps
- [ ] Content matches WORKSHOP_FRAMEWORK.md specifications
- [ ] Timing estimates on each module page match framework
- [ ] Overview sections readable when projected (not too dense)

### Deliverables

- modules/m1-threat-context.html (complete)
- modules/m2-attack-surface.html (complete)
- modules/m3-personnel-exposure.html (complete)
- modules/m4-vulnerability-correlation.html (complete)
- modules/m5-monitoring-alerting.html (complete)
- modules/m6-runbook-development.html (complete)
- modules/summary.html (complete)

---

## Phase 3: Supporting Materials

**Status**: NOT STARTED

**Objective**: Create templates, prompt library, and resource pages that students can use during and after the workshop.

### Tasks

| # | Task | Status | Notes |
|---|------|--------|-------|
| 3.1 | Baseline document template | NOT STARTED | Consolidated M2-M4 outputs format |
| 3.2 | Personnel exposure inventory template | NOT STARTED | Role-based tier model |
| 3.3 | Vulnerability correlation table template | NOT STARTED | Asset-to-CVE-to-KEV format |
| 3.4 | Runbook template | NOT STARTED | Daily/weekly/monthly/quarterly procedures |
| 3.5 | Monitoring checklist template | NOT STARTED | Pull-based schedule format |
| 3.6 | Templates index page | NOT STARTED | Links to all templates with descriptions |
| 3.7 | AI Copilot Prompt Library | NOT STARTED | All prompts from M1-M6, organized by category |
| 3.8 | Tool Reference page | NOT STARTED | All tools with URLs, purpose, account requirements |
| 3.9 | Vulnerability Intelligence Resources | NOT STARTED | Primary sources, vendor PSIRTs, exploit intel |
| 3.10 | NRECA domain discovery example | NOT STARTED | Standalone worked example page |
| 3.11 | NRECA personnel analysis example | NOT STARTED | Standalone worked example page |
| 3.12 | Fortinet vulnerability correlation example | NOT STARTED | Standalone worked example page |
| 3.13 | Google Alerts configuration example | NOT STARTED | Standalone worked example page |

### Acceptance Criteria

- [ ] All 5 templates created with clear formatting and instructions
- [ ] Templates are copy/paste friendly (Markdown format)
- [ ] Prompt library contains all prompts from all modules
- [ ] Tool reference matches Appendix C of WORKSHOP_FRAMEWORK.md
- [ ] Vulnerability resources match Appendix D of WORKSHOP_FRAMEWORK.md
- [ ] All example pages contain complete worked examples
- [ ] All pages linked from relevant module pages and navigation

### Deliverables

- templates/ (5 template files + index)
- prompts/ai-copilot-prompt-library.md
- resources/tools.md
- resources/vuln-intelligence-resources.md
- examples/ (4 example files)

---

## Phase 4: Polish and Testing

**Status**: NOT STARTED

**Objective**: Final quality assurance, cross-browser testing, content review, and deployment verification.

### Tasks

| # | Task | Status | Notes |
|---|------|--------|-------|
| 4.1 | Cross-browser testing | NOT STARTED | Chrome, Firefox, Edge, Safari |
| 4.2 | Mobile responsiveness testing | NOT STARTED | Tablet (768px), phone (375px) |
| 4.3 | Projector readability check | NOT STARTED | Overview sections readable at distance |
| 4.4 | Content review vs WORKSHOP_FRAMEWORK.md | NOT STARTED | Line-by-line completeness check |
| 4.5 | Link verification | NOT STARTED | All internal and external links |
| 4.6 | External tool link verification | NOT STARTED | Confirm all tools accessible |
| 4.7 | AI prompt copy/paste testing | NOT STARTED | All prompts copy cleanly |
| 4.8 | Timing validation | NOT STARTED | Content fits allocated times per module |
| 4.9 | GitHub Pages deployment test | NOT STARTED | Push to repo, verify live site |
| 4.10 | Instructor walkthrough | NOT STARTED | Simulate full 4-hour workshop flow |

### Acceptance Criteria

- [ ] All pages render correctly in Chrome, Firefox, Edge, Safari
- [ ] Mobile layout usable at tablet and phone sizes
- [ ] Overview sections readable on projector (not too dense, good contrast)
- [ ] All content from WORKSHOP_FRAMEWORK.md represented
- [ ] No broken internal or external links
- [ ] All AI prompts copy cleanly to clipboard
- [ ] GitHub Pages site builds and deploys correctly
- [ ] Workshop flow feasible within 4-hour timeframe

### Deliverables

- Testing report / checklist
- Any bug fixes identified during testing
- Final deployed site

---

## Milestones

| Milestone | Phases | Status | Description |
|-----------|--------|--------|-------------|
| M1: Framework Ready | 0 | COMPLETE | Claude Code framework files, Jekyll config, clean build |
| M2: Site Skeleton | 1 | COMPLETE | Site navigable with layouts, styling, placeholder pages |
| M3: Content Complete | 2 | NOT STARTED | All module pages have full content |
| M4: Materials Complete | 3 | NOT STARTED | Templates, prompts, resources all created |
| M5: Release Ready | 4 | NOT STARTED | Tested, polished, deployed |

---

## Risk Register

| Risk | Impact | Mitigation |
|------|--------|------------|
| Jekyll/GitHub Pages build failures | Medium | Test builds locally before pushing |
| Content exceeds module time allocations | Medium | Review with instructor during Phase 4 |
| External tool URLs change or go offline | Low | Document alternatives, verify links periodically |
| Mobile layout breaks for complex tables | Medium | Test responsive design, use scrollable tables |
| AI prompts don't copy cleanly across browsers | Low | Test copy-to-clipboard in all target browsers |
| Overview sections too dense for projector use | Medium | Review readability during Phase 4 testing |

---

## Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-02-16 | Framework files in claude-dev/ directory | Consistent with project owner's management pattern |
| 2026-02-16 | Jekyll via GitHub Pages | Proven approach, simple deployment |
| 2026-02-16 | WORKSHOP_FRAMEWORK.md is authoritative for content | Separates content decisions from development process |
| 2026-02-17 | Standalone repo (ot-osint-program-workshop) | Combined repo approach breaks GitHub Pages for original workshop |
| 2026-02-17 | No V1 content in this repo | Each workshop is its own independent project and site |
| 2026-02-17 | Flat directory structure (no v2/ nesting) | Single workshop, no need for subdirectory isolation |
| 2026-02-17 | Development on claude-dev branch | claude-dev for all dev; merge to main for go-live; GitHub Pages set to claude-dev during dev |
| 2026-02-17 | Gemfile required for Jekyll build | github-pages gem ensures build compatibility with GitHub Pages |
| 2026-02-17 | V1 references informational only, no comparison chart | V1 workshop linked as recommended preparation and additional context |
| 2026-02-17 | resources/ai-tool-considerations.md in scope | Student reference document, included in Phase 3 |
| 2026-02-17 | Module pages as .html, supporting content as .md | HTML gives reliable layout control for modules; Markdown easier for text-heavy reference pages |
| 2026-02-17 | Custom CSS with dark header / light content | Professional, high-contrast, projector-readable; CSS variables for theming |
| 2026-02-17 | CSS-only hover dropdown for Modules nav | No JS dependency for navigation; simpler implementation |
| 2026-02-17 | Simple templates index page | Lists all 5 templates with descriptions; usability tested later |
| 2026-02-17 | Build modules one at a time for review | Each module completed and reviewed before starting the next |
| 2026-02-17 | Example data: public business info only | Include publicly available org data; no personal accounts; sanitize AI response examples |
| 2026-02-17 | Prompt blocks include example responses | Students reading along (not running prompts) need to see expected output; also useful for comparing their results |
| 2026-02-17 | Lab-first module layout with integrated worked examples | Lab is primary section; worked examples are collapsible details blocks within lab steps; not all steps need a worked example |

---

## Notes

- Development tool: Claude Code CLI
- All content decisions defer to claude-dev/WORKSHOP_FRAMEWORK.md
- No SANS course references (ICS421 or similar) in workshop content
- Workshop delivered in-person -- site must work well on projector displays
- Module overview sections serve dual purpose: instructor talking points and student orientation

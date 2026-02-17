# CLAUDE.md - Project Rules and Guidelines

## Project Overview

CutSec OT OSINT Program Workshop is a 4-hour hands-on workshop delivered via GitHub Pages. It teaches ICS/OT security professionals to build sustainable OSINT monitoring programs using AI-assisted workflows. Students work through 6 modules, each with a read section and structured lab, leaving with 8 operational artifacts.

The site is designed for dual use: the instructor projects module pages during the workshop, using the opening summary of each module to frame what students will do, while students follow along on their own laptops and work through the lab steps.

**Repository**: https://github.com/cutaway-security/ot-osint-program-workshop
**Live Site**: https://cutaway-security.github.io/ot-osint-program-workshop/

---

## Essential Documents (Read in Order)

Before starting any development session, read these documents in order:

1. **CLAUDE.md** - This file. Project rules, constraints, and conventions
2. **claude-dev/ARCHITECTURE.md** - Site structure, technology stack, file organization
3. **claude-dev/PLAN.md** - Project roadmap, current phase, milestones, completion status
4. **claude-dev/RESUME.md** - Development status, what is in progress, session context
5. **claude-dev/WORKSHOP_FRAMEWORK.md** - Authoritative content reference for all workshop material

**At session start**: Confirm you have read these documents before proceeding. List your understanding of the current state and next steps.

---

## CRITICAL: Development Process Rules

### Issue Resolution Requirements

When encountering issues during development:

1. **STOP** - Do not continue to next task
2. **DIAGNOSE** - Identify root cause (build errors, broken links, rendering issues)
3. **FIX** - Implement a solution
4. **VERIFY** - Confirm the fix works (Jekyll build, page renders, links work)
5. **DOCUMENT** - Record the issue and solution in RESUME.md
6. **ASK** - If unable to resolve after reasonable attempts, STOP and ask for clarifying directions

**Never assume a page renders correctly without verification.**

### Verification Requirements

| Component | Verification Method |
|-----------|-------------------|
| Jekyll builds | `bundle exec jekyll build` completes without errors |
| Page renders | Open in browser or verify HTML output in _site/ |
| Links work | Check internal links resolve to valid pages |
| Navigation | All module pages reachable from index, back-links work |
| Templates | Template variables populate correctly |
| Mobile layout | Responsive design works at common breakpoints |

### Phase Completion Process

Before moving to the next phase:

1. **Verify** - All components of current phase working
2. **Test** - Jekyll build succeeds, pages render correctly
3. **Document** - Update RESUME.md with session activity
4. **Summarize** - Provide summary of completed work
5. **Plan** - List steps for next phase
6. **Confirm** - Wait for user confirmation before proceeding

---

## Absolute Requirements

- NO emoji, icons, or Unicode symbols in source code or documentation
- NO stubs, placeholders, or fake data without clear TODO markers explaining what goes there
- NO claiming pages render correctly without testing the Jekyll build
- NO SANS course references (ICS421 or any SANS numbering) -- this is a CutSec workshop
- NO tool installs required for students -- all activities must work in a web browser
- All AI prompts must be formatted as copyable code blocks on module pages
- All NRECA examples use only publicly available data -- workshop does not test or probe their systems
- NO spaces in file or folder names
- claude-dev/WORKSHOP_FRAMEWORK.md is the authoritative reference for all content decisions

---

## Technical Constraints

### GitHub Pages / Jekyll

| Constraint | Value |
|------------|-------|
| Site Generator | Jekyll via GitHub Pages |
| Markdown | Kramdown (GitHub Pages default) |
| Templating | Liquid |
| Styling | Custom CSS |
| JavaScript | Minimal, no frameworks required |
| Hosting | GitHub Pages (cutaway-security.github.io) |
| Build | Automatic via GitHub Pages on push to main |

### Workshop Content

| Constraint | Value |
|------------|-------|
| Duration | 4 hours (6 modules + summary) |
| Module Pattern | Read section (5-10 min) + Lab section (10-35 min) |
| Example Target | NRECA / America's Electric Cooperatives |
| Example Edge Device | Fortinet FortiGate (CVE-2025-59718 / CVE-2025-59719) |
| AI Client | Student's own (ChatGPT, Claude, etc.) -- AI client agnostic |
| Student Platform | Windows primary, macOS/Linux supported |
| Student Deliverables | 8 operational artifacts |

### Browser-Based Tools Referenced

| Tool | URL | Account Required |
|------|-----|-----------------|
| crt.sh | https://crt.sh/ | No |
| DNSDumpster | https://dnsdumpster.com/ | No |
| SecurityTrails | https://securitytrails.com/ | Free tier |
| Shodan | https://www.shodan.io/ | Free tier |
| Censys | https://search.censys.io/ | Free tier |
| HaveIBeenPwned | https://haveibeenpwned.com/ | No |
| NVD | https://nvd.nist.gov/ | No |
| CISA KEV | https://www.cisa.gov/known-exploited-vulnerabilities-catalog | No |
| Google Alerts | https://www.google.com/alerts | Google account |

---

## Code Quality Standards

### HTML / Jekyll Templates

- Use semantic HTML elements (header, nav, main, section, footer)
- Include alt text on any images
- Ensure all pages have consistent navigation (back to index, module-to-module)
- AI prompt blocks must use `<pre><code>` or fenced code blocks for easy copy
- All external links open in new tab (`target="_blank" rel="noopener"`)
- Test pages render correctly in Jekyll build output

### CSS

- Mobile-responsive design (test at 768px and 375px breakpoints)
- Clean, professional, high-contrast for projector readability
- Use CSS variables for colors and spacing to enable easy theming
- No CSS frameworks unless explicitly approved

### Markdown Content

- Use ATX-style headers (# not underline style)
- One sentence per line where practical (aids diffs)
- Fenced code blocks with language identifiers
- Tables use pipe syntax with alignment

---

## Communication Style

- Focus on substance, skip unnecessary praise
- Be direct about problems -- identify specific issues with file paths and line numbers
- Question assumptions and challenge problematic approaches
- Ground claims in evidence, not reflexive validation
- When stuck, explain what was tried and ask specific questions

---

## Documentation Updates Required

When making changes, update the appropriate documents:

| Change Type | Update |
|-------------|--------|
| Architecture / structure change | claude-dev/ARCHITECTURE.md |
| Phase completion | claude-dev/PLAN.md |
| Session activity | claude-dev/RESUME.md |
| Problem encountered | claude-dev/RESUME.md (Known Issues) |
| Content decision | claude-dev/RESUME.md (Decisions Made) |
| New file created | claude-dev/RESUME.md (Files Created) |

---

## Project Scope

### In Scope

**Workshop Site**:
- 6 module pages (M1-M6) + summary page
- Index / landing page with schedule and navigation
- Each module page: opening summary (instructor-projectable) + lab section with structured steps
- All NRECA worked examples from WORKSHOP_FRAMEWORK.md
- Fortinet FortiGate vulnerability correlation example
- AI copilot prompts formatted as copyable code blocks
- Break indicators between blocks

**Supporting Materials**:
- AI Copilot Prompt Library page (all prompts organized by category)
- Templates (baseline, personnel inventory, vuln correlation, runbook, monitoring checklist)
- Tool Reference page
- Vulnerability Intelligence Resources page

**Site Features**:
- Consistent navigation (previous/next module, back to index)
- Timing indicators on each module page
- Mobile-responsive layout
- High-contrast styling for projector readability

### Out of Scope

- Video or multimedia content
- Interactive quizzes or assessments
- Student progress tracking / login systems
- Automated grading
- Real-time collaboration features
- Tool installations or API integrations
- Scanning or probing of any target systems

---

## File Structure

```
ot-osint-program-workshop/
    CLAUDE.md                         # This file -- Claude Code rules
    README.md                         # Project overview and quick start
    _config.yml                       # Jekyll configuration
    .gitignore                        # Build artifacts, OS files
    claude-dev/                       # Development tracking (not in main branch)
        ARCHITECTURE.md               # Site structure and technical design
        PLAN.md                       # Project roadmap and phases
        RESUME.md                     # Session status and context
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
        clipboard.js                  # Copy-to-clipboard for prompts
    img/
        (workshop images)
```

---

## Session Workflow

### Starting a Session

1. Read CLAUDE.md (this file)
2. Read claude-dev/ARCHITECTURE.md
3. Read claude-dev/PLAN.md
4. Read claude-dev/RESUME.md
5. State your understanding of current status
6. List proposed next steps
7. Wait for confirmation before proceeding

### During Development

1. Work on one task at a time
2. Test each change with Jekyll build before moving on
3. Document issues in RESUME.md
4. Stop and ask if encountering persistent issues
5. Reference claude-dev/WORKSHOP_FRAMEWORK.md for any content questions

### Ending a Session

1. Update claude-dev/RESUME.md with what was accomplished
2. Update claude-dev/PLAN.md with completion status
3. List any blockers or open questions
4. Provide summary of session

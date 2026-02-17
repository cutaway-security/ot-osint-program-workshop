# CutSec OT OSINT Program Workshop

A 4-hour hands-on workshop teaching ICS/OT security professionals to build sustainable OSINT monitoring programs using AI-assisted workflows.

**Live Site:** https://cutaway-security.github.io/ot-osint-program-workshop/

## Workshop Structure

Students work through 6 modules, each with a read section and structured lab, and leave with 8 operational artifacts:

- **M1:** Threat Context (15 min)
- **M2:** External Attack Surface Discovery (45 min)
- **M3:** Personnel and Credential Exposure (40 min)
- **M4:** Vulnerability Correlation (40 min)
- **M5:** Monitoring and Alerting Setup (45 min)
- **M6:** Runbook Development (35 min)

## Student Requirements

- Laptop with web browser (Windows primary; macOS/Linux supported)
- AI client access (ChatGPT, Claude, or preferred AI assistant)
- Basic OSINT familiarity

## Local Development

```bash
# Install Ruby and Bundler (if not already installed)
sudo apt install ruby-full build-essential
gem install bundler

# Install dependencies
bundle install

# Serve locally with live reload
bundle exec jekyll serve --livereload

# Build without serving
bundle exec jekyll build
```

Output is generated in `_site/`.

## Project Layout

```
_layouts/       Jekyll page templates
_includes/      Reusable HTML components
modules/        Module pages (M1-M6 + summary)
examples/       Worked NRECA and Fortinet examples
templates/      Student artifact templates
prompts/        AI copilot prompt library
resources/      Tool reference and vulnerability intel
css/            Stylesheets
js/             Minimal JavaScript
```

## License

Copyright CutSec LLC. All rights reserved.

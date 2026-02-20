---
layout: default
title: Vulnerability Correlation Table Template
---

# Vulnerability Correlation Table Template

Asset-to-vulnerability correlation table for tracking exposed products against known vulnerabilities. This template supports the Module 4 workflow.

**Download:** [Vulnerability Correlation Template (Excel)]({{ '/templates/downloads/vuln-correlation-template.xlsx' | relative_url }}) -- includes dropdown lists for KEV, Priority (P0-P3), Status, and Network Zone fields.

**Instructions:** Copy this template and populate with your Module 4 findings. Start with internet-exposed assets from Module 2, generate CPE identifiers, and query vulnerability databases for each product.

---

## Asset Inventory (from Module 2)

List all products identified during attack surface discovery that require vulnerability correlation.

| Asset/Hostname | Product | Version | CPE 2.3 Identifier | Internet-Exposed | Service/Port | Network Zone |
|---------------|---------|---------|--------------------|-----------------|--------------|----- --------|
| | | | cpe:2.3:a:vendor:product:version:*:*:*:*:*:*:* | Yes/No | | Perimeter / DMZ / Internal |

**CPE Validation:** Verify AI-generated CPE strings at [NVD CPE Search](https://nvd.nist.gov/products/cpe/search).

---

## Vulnerability Correlation Table

| Asset | CVE ID | CVSS | KEV Listed | Remote Exploit | Description | Priority | Vendor Advisory | Status | Notes |
|-------|--------|------|-----------|---------------|-------------|----------|----------------|--------|-------|
| | CVE-20XX-XXXXX | X.X | Yes/No | Yes/No | | P0/P1/P2/P3 | | Open/Mitigated/Patched | |

---

## Priority Framework

| Priority | Criteria | Response Timeframe |
|----------|----------|--------------------|
| **P0 -- Active Exploitation** | Internet-exposed asset + confirmed active exploitation (CISA KEV, CISA ICS advisory, or vendor PSIRT alert) + remote or unauthenticated exploitation possible | Immediate (hours) |
| **P1 -- Critical** | Internet-exposed asset + CVSS 9.0+ + no confirmed exploitation yet, or confirmed exploitation but requires authentication | Urgent (48 hours) |
| **P2 -- High** | Internet-exposed asset + CVSS 7.0-8.9, or internal-only asset with confirmed exploitation | Standard patch cycle (1-2 weeks) |
| **P3 -- Monitor** | Known vulnerability but no internet exposure, or low CVSS with no exploitation evidence | Next maintenance window (30-90 days) |

---

## Vendor PSIRT Tracking

| Vendor | PSIRT URL | Products in Inventory | Last Checked | Subscription Active |
|--------|-----------|----------------------|-------------|-------------------|
| | | | | Yes/No |

---

## Sources Checked

For each correlation cycle, document which sources were queried:

| Source | URL | Checked | Findings |
|--------|-----|---------|----------|
| NVD | nvd.nist.gov | [ ] | |
| CISA KEV | cisa.gov/known-exploited-vulnerabilities-catalog | [ ] | |
| CISA ICS Advisories | cisa.gov/news-events/cybersecurity-advisories | [ ] | |
| ICS Advisory Project | icsadvisoryproject.com | [ ] | |
| Vendor PSIRTs | [list] | [ ] | |

---

## Change Log

| Date | Change | Changed By |
|------|--------|-----------|
| [today] | Initial correlation completed | [name] |

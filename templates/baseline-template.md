---
layout: default
title: Baseline Document Template
---

# Baseline Document Template

Consolidated external exposure baseline for ongoing OSINT monitoring. This template combines outputs from Modules 2, 3, and 4 into a single reference document.

**Instructions:** Copy this template and fill in each section with your workshop findings. Classify every entry using the four-category system. Update this document at each monitoring cycle.

---

## Classification Key

| Classification | Meaning | Action |
|---------------|---------|--------|
| **Known-Good** | Expected and properly configured. No security concern | Document and monitor for changes |
| **Accepted Risk** | Known exposure that cannot be remediated immediately | Document business justification. Monitor frequently. Review quarterly |
| **Needs Remediation** | Security issue with a clear fix available | Add to remediation queue with priority. Track to resolution |
| **Needs Investigation** | Unknown or unexpected item requiring analysis | Investigate within one monitoring cycle. Do not leave items here indefinitely |

---

## Section 1: External Attack Surface (Module 2)

List remote access assets first. These are the highest-priority entries in this document.

### Remote Access and Administrative Interfaces

| Hostname/URL | IP Address | Port | Product/Version | Classification | Priority | Notes |
|-------------|-----------|------|----------------|---------------|----------|-------|
| vpn.example.com | x.x.x.x | 443 | FortiOS 7.4.6 | | | |
| admin.example.com | x.x.x.x | 8443 | | | | |

### Domains and Subdomains

| Subdomain | IP Address | Category | Classification | Notes |
|-----------|-----------|----------|---------------|-------|
| mail.example.com | x.x.x.x | Email | | |
| sso.example.com | x.x.x.x | Authentication | | |

### Exposed Services

| IP Address | Port | Service | Product/Version | Classification | Notes |
|-----------|------|---------|----------------|---------------|-------|
| x.x.x.x | 443 | HTTPS | | | |

---

## Section 2: Personnel Exposure (Module 3)

### Email Format

- **Primary domain:** [domain]
- **Email pattern:** [firstname.lastname@domain]
- **Team addresses:** [list any shared/team inboxes]

### Personnel Inventory

| Name | Role | Tier | Email | Breach Status | Classification | Notes |
|------|------|------|-------|--------------|---------------|-------|
| | | Tier 1 | | | | |
| | | Tier 2 | | | | |

---

## Section 3: Vulnerability Correlation (Module 4)

### Asset-Vulnerability Table

| Asset | Product/Version | CPE | CVE(s) | CVSS | KEV | Priority | Status | Notes |
|-------|----------------|-----|--------|------|-----|----------|--------|-------|
| | | | | | Yes/No | P0-P3 | | |

---

## Section 4: Monitoring Configuration (Module 5)

### Push-Based Alert Sources

| Service | Configuration | Status |
|---------|--------------|--------|
| Google Alerts | [list queries configured] | Active / Inactive |
| CISA ICS Advisories | [subscription email] | Active / Inactive |
| Vendor PSIRTs | [list vendors subscribed] | Active / Inactive |
| HIBP Domain | [domain if verified] | Active / Inactive |

### Pull-Based Schedule Reference

- **Weekly checks:** [list from Artifact 6]
- **Monthly checks:** [list from Artifact 6]
- **Schedule owner:** [name]
- **Backup owner:** [name]

---

## Change Log

| Date | Section | Change Description | Changed By |
|------|---------|-------------------|-----------|
| [today] | All | Initial baseline created | [name] |

---
layout: default
title: Personnel Exposure Inventory Template
---

# Personnel Exposure Inventory Template

Role-based personnel exposure inventory for tracking credential risk to operational technology. This template supports the Module 3 workflow.

**Instructions:** Copy this template and populate with your Module 3 findings. Prioritize personnel by tier (proximity to OT systems), not corporate rank.

---

## Email Pattern

- **Organization:** [name]
- **Primary domain:** [domain]
- **Email format:** [e.g., firstname.lastname@domain]
- **Discovered at:** [URL where pattern was confirmed]

## Team Email Addresses

| Team Inbox | Purpose |
|-----------|---------|
| | |

---

## Personnel Inventory

### Tier 1 -- Immediate Priority

Personnel with direct access to operational technology and critical control systems.

| Name | Role | Email | Breach Status | Breaches Found | Data Exposed | Priority | Notes |
|------|------|-------|--------------|----------------|-------------|----------|-------|
| | | | Clear / Breached | | Email / Password / Hash | Critical / High / Monitor | |

### Tier 2 -- High Priority

Personnel with IT/OT bridge access or indirect OT system exposure.

| Name | Role | Email | Breach Status | Breaches Found | Data Exposed | Priority | Notes |
|------|------|-------|--------------|----------------|-------------|----------|-------|
| | | | Clear / Breached | | Email / Password / Hash | Critical / High / Monitor | |

### Tier 3 -- Elevated Priority

Executives and staff without direct system access but with organizational authority.

| Name | Role | Email | Breach Status | Breaches Found | Data Exposed | Priority | Notes |
|------|------|-------|--------------|----------------|-------------|----------|-------|
| | | | Clear / Breached | | Email / Password / Hash | Critical / High / Monitor | |

---

## Prioritization Matrix

| Tier | Breach Severity | Priority | Action |
|------|----------------|----------|--------|
| Tier 1 | Password/hash exposed | Critical | Immediate credential reset. Verify MFA on all remote access. Review access logs |
| Tier 1 | Email-only exposure | High | Monitor for credential stuffing. Verify MFA status. Add to enhanced monitoring |
| Tier 1 | No breach found | Monitor | Baseline documented. Include in ongoing HIBP monitoring |
| Tier 2 | Password/hash exposed | High | Credential reset. Review bridge access scope. Verify MFA |
| Tier 2 | Email-only exposure | Monitor | Standard monitoring. Verify MFA on bridge accounts |
| Tier 3 | Password/hash exposed | High | Credential reset. Social engineering awareness |
| Tier 3 | Email-only exposure | Monitor | Standard monitoring |

---

## Professional Network Exposure

| Source | Finding | Risk | Notes |
|--------|---------|------|-------|
| Job postings | [technology details disclosed] | [social engineering / recon value] | |
| Conference talks | [operational details disclosed] | | |
| Professional profiles | [certifications / tools revealed] | | |

---

## Change Log

| Date | Change | Changed By |
|------|--------|-----------|
| [today] | Initial inventory created | [name] |

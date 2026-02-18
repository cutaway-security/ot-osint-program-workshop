---
layout: default
title: "Example: NRECA Personnel Analysis"
---

# Worked Example: NRECA Personnel Analysis

This example demonstrates the Module 3 personnel and credential exposure workflow using NRECA as the target organization. Personnel data is sourced from publicly available organizational websites. Breach results are **hypothetical examples** created for this workshop.

**Related module:** [Module 3: Personnel & Credential Exposure]({{ '/modules/m3-personnel-exposure' | relative_url }})

---

## Step 1: Personnel Discovery

**Sources:** [cooperative.com](https://www.cooperative.com/){:target="_blank" rel="noopener"} contact pages (cybersecurity, T&D, BTS divisions), [electric.coop](https://www.electric.coop/){:target="_blank" rel="noopener"} articles, and professional profiles.

NRECA is an association serving 900+ member cooperatives, not a utility itself. Their personnel include cybersecurity leadership, grid operations staff, and technology strategists whose access and knowledge affect the security posture of the entire cooperative network.

### Personnel with OT/Operational Relevance

| Person | Title | Tier | Rationale |
|--------|-------|------|-----------|
| Carter Manucy | Director, Cybersecurity | **Tier 1** | Leads all co-op cybersecurity programs (TAC, RC3, TICCC-TAC, SPARK). Former IT/OT Cybersecurity Director at Florida Municipal Power Agency (27 yrs). Deep OT/ICS background |
| Venkat Banunarayanan | VP, Integrated Grid | **Tier 1** | Leads T&D, distribution automation, SCADA/ADMS, DER integration. Senior leadership over grid technology strategy |
| Patti Metro | Senior Director, Grid Operations and Reliability | **Tier 1** | Direct oversight of transmission, grid operations, and reliability. Access to operational systems and standards |
| Meredith Miller | Principal Data Scientist, Electrical Power Grid | **Tier 1** | TAC product lead. Grid resilience and cybersecurity threat modeling. Runs GridEx simulations |
| Wayne McGurk | CIO / SVP Information Technology | **Tier 1** | IT infrastructure authority with likely OT network access. Controls VPN, firewall, and SSO systems that bridge IT and OT networks |
| Ravindra Singh | Senior Principal, Distribution Automation | **Tier 2** | SCADA/ADMS/DMS technology for co-ops. Technical access to distribution automation systems |
| Adrian McNamara | Cybersecurity Program Manager | **Tier 2** | Cyber risk quantification, tabletop exercises, incident response planning. Access to vulnerability assessments |
| Katherine Loving | Program Manager, GIS Services | **Tier 2** | Geospatial data covering co-op service territories and infrastructure. GIS data reveals physical asset locations |

Executives (CEO, CFO) are Tier 3 -- business email compromise targets, but their compromise is primarily a financial/reputational risk, not a direct threat to sustained operations.

### Email Format

**Source:** [electric.coop/our-organization/contact-us](https://www.electric.coop/our-organization/contact-us){:target="_blank" rel="noopener"}

**Format:** firstname.lastname@nreca.coop (confirmed across 10+ public contacts)

### Team Email Addresses

| Team Inbox | Significance |
|-----------|-------------|
| membersecurity@nreca.coop | Cybersecurity Team shared inbox. A compromised membersecurity@ account would allow sending as "the cybersecurity team" to 900+ member cooperatives |
| DistributionAutomation@nreca.coop | Distribution Automation team |

---

## Step 2: Breach Database Checks

**Tool:** [HaveIBeenPwned](https://haveibeenpwned.com/){:target="_blank" rel="noopener"}

**Note:** The breach results below are **hypothetical examples** illustrating what real findings look like. Do not interpret these as actual breach data.

**Carter Manucy (Director, Cybersecurity)** -- carter.manucy@nreca.coop found in 2 breach databases. One breach (2023) included bcrypt-hashed passwords. As the director leading cybersecurity programs for 900+ member cooperatives, Manucy has access to threat intelligence, vulnerability assessments, and incident response plans across the cooperative network. **Tier 1 / Critical finding** -- credential exposure for someone with this scope of access to operational security programs demands immediate action.

**Venkat Banunarayanan (VP, Integrated Grid)** -- venkat.banunarayanan@nreca.coop found in 1 breach (email + password hash from 2022). As VP overseeing SCADA/ADMS strategy, distribution automation, and DER integration, compromised credentials create a path toward grid operations technology. **Tier 1 / Critical finding**.

**Wayne McGurk (CIO/SVP IT)** -- wayne.mcgurk@nreca.coop found in 1 breach (email only). As CIO, McGurk controls IT infrastructure including VPN, firewalls, and SSO systems that bridge IT and OT networks. Email-only exposure limits the immediate credential risk, but confirms the active email for targeted phishing. **Tier 1 / High finding**.

**Adrian McNamara (Cybersecurity Program Manager)** -- adrian.mcnamara@nreca.coop found in 1 breach (email + plaintext password from 2019). Manages cyber risk quantification, tabletop exercises, and incident response planning. **Tier 2 / High finding** -- plaintext password is directly usable without cracking.

**Critical finding pattern:** Tier 1 role + password-containing breach + access to operational technology or OT security programs = immediate remediation priority.

---

## Step 3: Risk Prioritization

### Priority 1 -- Critical (Immediate Action Required)

**Carter Manucy** -- Tier 1 + 2 breaches (one with hashed passwords, 2023)
- **Attack scenario:** Attacker recovers password from bcrypt hash. Tests recovered credential against NRECA VPN, email, and SSO systems. Compromised access could expose threat intelligence shared across the cooperative network, vulnerability assessment data, and incident response playbooks
- **Credential reuse plausibility:** Moderate. Security professionals are more likely to use unique passwords, but the 2023 breach date means the credential may still be current
- **Actions:** Immediate password reset. Verify MFA on VPN, SSO, and email. Review access logs for security platforms

**Venkat Banunarayanan** -- Tier 1 + 1 breach (password hash, 2022)
- **Attack scenario:** Recovered credential tested against VPN and admin portals. Access to grid technology roadmaps, SCADA system specifications, and distribution automation architectures across the cooperative network
- **Actions:** Immediate password reset. Verify MFA. Review access to grid technology planning documents

### Priority 2 -- High (Action Within 1 Week)

**Adrian McNamara** -- Tier 2 + 1 breach (plaintext password, 2019)
- **Attack scenario:** Plaintext password directly usable. Access to vulnerability assessments and incident response procedures. An attacker who knows the playbook can design attacks to evade documented responses
- **Actions:** Credential reset. Verify MFA on cybersecurity platforms. Review access to incident response documentation

### Priority 3 -- Monitor

**Wayne McGurk** -- Tier 1 + 1 breach (email only)
- **Attack scenario:** Confirmed email enables targeted spear-phishing for high-value IT infrastructure credentials (VPN, firewall, SSO). No credential material exposed
- **Actions:** Priority monitoring for future breaches. Enhanced phishing awareness. Verify MFA on all admin interfaces

---

## Key Takeaway

The highest-priority findings are personnel with **access to operational technology programs and infrastructure** combined with credential exposure. Manucy's cybersecurity program access and Banunarayanan's grid technology access make them higher-priority than a traditional executive-focused analysis would suggest. Prioritize by proximity to OT, not by corporate rank.

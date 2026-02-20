---
layout: default
title: Vulnerability Intelligence Resources
---

# Vulnerability Intelligence Resources

Primary vulnerability sources, vendor PSIRTs, and exploit intelligence feeds referenced in the workshop. These resources support the vulnerability correlation workflow (Module 4) and ongoing monitoring program (Modules 5-6).

## Primary Vulnerability Sources

These are the foundational databases for vulnerability identification and prioritization.

| Source | URL | What It Provides | Update Frequency |
|--------|-----|-----------------|-----------------|
| CISA Known Exploited Vulnerabilities (KEV) | [cisa.gov/known-exploited-vulnerabilities-catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog){:target="_blank" rel="noopener"} | Confirmed actively exploited vulnerabilities with remediation deadlines. Every entry has a patch or mitigation available. Highest-priority signal for P0 classification | Updated as vulnerabilities are confirmed exploited |
| CISA ICS Advisories | [cisa.gov/news-events/cybersecurity-advisories](https://www.cisa.gov/news-events/cybersecurity-advisories){:target="_blank" rel="noopener"} | ICS-specific vulnerability disclosures and mitigations. Covers OT/ICS vendors including Siemens, Schneider, Rockwell. Can confirm active exploitation before KEV listing | Multiple times per week |
| National Vulnerability Database (NVD) | [nvd.nist.gov](https://nvd.nist.gov/){:target="_blank" rel="noopener"} | Comprehensive CVE database with CVSS scores, CPE identifiers, and affected product versions. Primary reference for vulnerability details | Continuous |
| ICS Advisory Project | [icsadvisoryproject.com](https://www.icsadvisoryproject.com/){:target="_blank" rel="noopener"} | Curated dashboard of ICS/OT advisories with filtering and search. Aggregates advisories from multiple sources. Note: focuses on ICS vendors -- does not cover IT infrastructure vendors (Fortinet, Cisco, Palo Alto) | Follows CISA advisory schedule |

## Vendor PSIRTs (Product Security Incident Response Teams)

Vendor PSIRTs publish security advisories for their products and can confirm active exploitation before CISA KEV or ICS Advisory entries exist. Subscribe to advisory feeds for every vendor in your Module 4 asset inventory.

| Vendor | PSIRT URL | Products | Subscription |
|--------|-----------|----------|-------------|
| Fortinet (FortiGuard) | [fortiguard.fortinet.com/psirt](https://fortiguard.fortinet.com/psirt){:target="_blank" rel="noopener"} | FortiGate, FortiOS, FortiManager, FortiAnalyzer, FortiClient | RSS feed and email alerts available |
| Siemens (ProductCERT) | [siemens.com/cert](https://www.siemens.com/global/en/products/services/cert.html){:target="_blank" rel="noopener"} | SIMATIC, SINEMA, SCALANCE, WinCC, PCS 7 | Monthly "Patch Tuesday" advisories |
| Schneider Electric | [se.com/security-notifications](https://www.se.com/ww/en/work/support/cybersecurity/security-notifications.jsp){:target="_blank" rel="noopener"} | Modicon, EcoStruxure, Triconex, PowerLogic, ClearSCADA | Email subscription available |
| Rockwell Automation | [rockwellautomation.com/security-advisories](https://www.rockwellautomation.com/en-us/trust-center/security-advisories.html){:target="_blank" rel="noopener"} | ControlLogix, CompactLogix, FactoryTalk, Studio 5000, PanelView | Requires account for full advisory access |
| ABB | [abb.com/cybersecurity](https://global.abb/group/en/technology/cyber-security/alerts-and-notifications){:target="_blank" rel="noopener"} | ABB Ability, System 800xA, AC500, Relion | Advisory notifications available |

**Adding vendors:** If your Module 2 discovery identified products from vendors not listed above, search for "[vendor name] PSIRT" or "[vendor name] security advisories" to find their advisory page. Most major IT and OT vendors maintain a PSIRT or security advisory portal.

## Exploit Intelligence Sources

These sources provide information about exploit availability and active exploitation, which feeds into the P0-P3 prioritization framework from Module 4.

| Source | URL | What It Provides |
|--------|-----|-----------------|
| Exploit-DB | [exploit-db.com](https://www.exploit-db.com/){:target="_blank" rel="noopener"} | Public exploit database. Searchable archive of proof-of-concept exploits and vulnerability disclosures. Exploit availability increases priority |
| GitHub Advisory Database | [github.com/advisories](https://github.com/advisories){:target="_blank" rel="noopener"} | Security advisories from the GitHub ecosystem. Covers libraries, frameworks, and tools. Useful for identifying supply chain vulnerabilities |
| Nuclei Templates | [github.com/projectdiscovery/nuclei-templates](https://github.com/projectdiscovery/nuclei-templates){:target="_blank" rel="noopener"} | Community-maintained vulnerability detection templates. Indicates which vulnerabilities have automated detection and exploitation tools available |

## Using These Resources in Your Monitoring Program

**Weekly (Module 5 pull-based checks):**
- Check CISA KEV additions against your Module 4 asset inventory
- Review CISA ICS Advisories for your vendors
- Check vendor PSIRTs for products in your environment

**Monthly (Module 5 full review):**
- Full vulnerability re-correlation using NVD for all products in your asset inventory
- Review ICS Advisory Project dashboard for new advisories in your sector
- Check exploit intelligence sources for newly available exploits targeting your products

**When a new advisory is published for your products:**
- Cross-reference against your Module 2 inventory to determine exposure
- Apply the P0-P3 framework from Module 4 to determine priority
- Update your Module 4 vulnerability correlation table
- Follow your Module 6 runbook escalation procedures if P0 or P1

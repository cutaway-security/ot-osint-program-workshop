---
layout: default
title: "Example: Fortinet Vulnerability Correlation"
---

# Worked Example: Fortinet FortiGate Vulnerability Correlation

This example demonstrates the Module 4 vulnerability correlation workflow using a Fortinet FortiGate firewall discovered during attack surface reconnaissance. The scenario is based on real CVEs and CISA advisories.

**Related module:** [Module 4: Vulnerability Correlation]({{ '/modules/m4-vulnerability-correlation' | relative_url }})

---

## Scenario

During Module 2 discovery, a FortiGate login portal was identified exposed to the internet. Shodan banner analysis revealed:

| Field | Value |
|-------|-------|
| Product | Fortinet FortiGate |
| Version | FortiOS 7.4.6 (from HTTP headers and login page analysis) |
| Service | HTTPS admin interface on port 443 |
| Context | Primary perimeter firewall / SSL-VPN remote access gateway |

---

## Step 1: CPE Generation

**CPE 2.3 Identifier:** `cpe:2.3:o:fortinet:fortios:7.4.6:*:*:*:*:*:*:*`

**Validation:** Verify at [NVD CPE Search](https://nvd.nist.gov/products/cpe/search){:target="_blank" rel="noopener"}

**Shodan search query:** `product:"FortiGate" port:443 "FortiOS"`

Shodan data shows approximately 189,000 internet-exposed FortiOS 7.x admin interfaces, with roughly 30,000 having FortiCloud SSO enabled.

---

## Step 2: Vulnerability Database Queries

### NVD Results

| CVE | CVSS | KEV | Description |
|-----|------|-----|-------------|
| **CVE-2025-59718** | 9.8 | **Yes** (Dec 16, 2025) | SSO authentication bypass via crafted SAML assertion -- allows unauthenticated administrative access |
| **CVE-2025-59719** | 9.8 | **Yes** | Same root cause as CVE-2025-59718, affects FortiWeb. Relevant if FortiWeb is also deployed |
| CVE-2026-24858 | -- | Monitoring | Follow-on SSO bypass affecting devices that patched CVE-2025-59718. Demonstrates ongoing exploitation campaign |

### CISA KEV Timeline

CVE-2025-59718 was added to the KEV catalog on **December 16, 2025** -- just 7 days after disclosure (December 9, 2025) and 4 days after confirmed exploitation in the wild (December 12, 2025).

**The window between disclosure and active exploitation was 3 days.**

### Fortinet PSIRT: FG-IR-25-647

Advisory: [fortiguard.fortinet.com/psirt/FG-IR-25-647](https://fortiguard.fortinet.com/psirt/FG-IR-25-647){:target="_blank" rel="noopener"}

- **Affected versions:** FortiOS 7.6.0-7.6.3, 7.4.0-7.4.8, 7.2.0-7.2.11, 7.0.0-7.0.17
- **Key detail:** FortiCloud SSO is automatically enabled when a device is registered via the GUI -- many administrators do not realize this feature is active
- **Observed attack pattern:** Authenticate as admin via SSO bypass --> download system configuration (including hashed credentials) --> crack hashes offline --> establish rogue VPN tunnels for persistent access

### CISA Alerts

- [CISA Alert: CVE-2025-59718 added to KEV](https://www.cisa.gov/news-events/alerts/2025/12/16/cisa-adds-one-known-exploited-vulnerability-catalog){:target="_blank" rel="noopener"} (December 16, 2025)
- [CISA Alert: CVE-2026-24858 follow-on exploitation](https://www.cisa.gov/news-events/alerts/2026/01/28/fortinet-releases-guidance-address-ongoing-exploitation-authentication-bypass-vulnerability-cve-2026){:target="_blank" rel="noopener"} (January 28, 2026)

The CVE-2026-24858 follow-on is particularly significant: even organizations that patched the original CVEs faced a new bypass. Edge device vulnerability monitoring is **ongoing**, not a one-time exercise.

---

## Step 3: Priority Classification

Using the P0-P3 framework from Module 4:

| Factor | Assessment |
|--------|-----------|
| Internet-exposed | Yes -- admin interface on port 443 |
| Active exploitation confirmed | Yes -- CISA KEV since Dec 16, 2025; Fortinet PSIRT confirms exploitation |
| Remote/unauthenticated | Yes -- SSO bypass requires no credentials |
| **Priority** | **P0 -- Active Exploitation** |

---

## Step 4: Risk Summary

**CRITICAL -- IMMEDIATE ACTION REQUIRED:** Our internet-facing Fortinet FortiGate firewall (FortiOS 7.4.6) is vulnerable to CVE-2025-59718, a CVSS 9.8 authentication bypass that has been on the CISA Known Exploited Vulnerabilities list since December 16, 2025. This vulnerability allows an unauthenticated attacker to bypass FortiCloud SSO using a crafted SAML assertion, gaining full administrative access to the device without any credentials. The observed attack pattern is: gain admin access --> export the device configuration (which contains hashed credentials for all VPN users) --> crack password hashes offline --> create rogue VPN tunnels for persistent access to the internal network. Because this device serves as our primary perimeter firewall and SSL-VPN gateway -- the same device that provides remote access to staff and vendors, potentially including paths to our OT network -- a successful compromise would give an attacker a persistent, authenticated tunnel into our infrastructure.

### Recommended Immediate Actions

1. **Patch immediately** to FortiOS 7.4.9 or later (addresses both CVE-2025-59718 and follow-on CVE-2026-24858)
2. **Check for compromise:** Review admin login logs for unfamiliar sessions. Check for newly created VPN tunnels or user accounts. Export and review current configuration for unauthorized changes
3. **If compromise suspected:** Rotate all VPN user credentials immediately (configuration export contains hashed passwords). Revoke and reissue SSL certificates. Audit all firewall rules for unauthorized modifications
4. **Ongoing:** Disable FortiCloud SSO if not required. Restrict management interface access to specific IP ranges. Monitor CISA advisories for follow-on CVEs

---

## Cross-Module Connections

- **Module 2** identified the internet-exposed FortiGate
- **Module 3** personnel with VPN access (Tier 1) are at immediate risk if configuration was exported (contains hashed credentials)
- **Module 5** monitoring should include Fortinet PSIRT subscription and weekly KEV checks for this product
- **Module 6** runbook should include P0 escalation procedures for edge device vulnerabilities

---

## Key Takeaway

This single finding -- an internet-exposed FortiGate with a KEV-listed authentication bypass -- connects every module in the workshop. The attack surface discovery found it (M2), personnel analysis reveals who is at risk if credentials are exported (M3), vulnerability correlation classified it as P0 (M4), monitoring ensures you catch the next CVE (M5), and the runbook defines who to call and what to do (M6). This is why the program works as a system, not as isolated exercises.

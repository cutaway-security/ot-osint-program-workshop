---
layout: default
title: "Example: Google Alerts Configuration"
---

# Worked Example: Google Alerts Configuration for NRECA

This example demonstrates how to configure Google Alerts as part of the Module 5 push-based monitoring program. Google Alerts is one of several push-based alert sources that run continuously once configured.

**Related module:** [Module 5: Monitoring & Alerting Setup]({{ '/modules/m5-monitoring-alerting' | relative_url }})

---

## Google Alerts Setup

**Tool:** [Google Alerts](https://www.google.com/alerts){:target="_blank" rel="noopener"} (requires Google account)

Google Alerts sends email notifications when new web content matches your search queries. For an OT OSINT monitoring program, alerts should target: organization name + security keywords, domain exposure, sector + OT keywords, and specific product vulnerability mentions.

---

## NRECA Alert Queries

The following queries are configured for NRECA monitoring. Each targets a different aspect of the organization's security exposure.

### Query 1: Organization + Security Keywords

```
"NRECA" breach OR hack OR vulnerability OR "data leak" OR ransomware
```

**Purpose:** Detects public reports of security incidents involving NRECA by name. Catches news articles, blog posts, and security researcher disclosures.

**Expected signal:** News articles about cooperative sector breaches, security vendor reports mentioning NRECA, researcher disclosures.

**Expected noise:** General news about NRECA that happens to mention "vulnerability" in a non-security context (e.g., "vulnerable communities").

### Query 2: Sector + OT/ICS Keywords

```
"electric cooperative" SCADA OR ICS OR "control system" vulnerability OR breach OR attack
```

**Purpose:** Monitors the broader electric cooperative sector for OT-specific security events. Even if NRECA is not named, sector-wide attacks affect member cooperatives.

**Expected signal:** ICS advisories affecting cooperative infrastructure, sector-specific threat reports, regulatory actions.

### Query 3: Domain Exposure

```
nreca.coop OR electric.coop OR cooperative.com exposed OR leak OR breach OR credential
```

**Purpose:** Detects references to NRECA domains in security contexts -- paste sites, breach databases, security forums, or researcher reports.

**Expected signal:** Domain appearing in new breach notifications, security researcher posts, dark web monitoring service reports.

### Query 4: Product Vulnerability

```
FortiGate OR FortiOS vulnerability OR "zero day" OR exploit OR CVE
```

**Purpose:** Monitors for new vulnerability disclosures affecting Fortinet products in your asset inventory (from Module 4). Adjust for your specific edge devices and OT-adjacent products.

**Expected signal:** New CVE disclosures, vendor security advisories, proof-of-concept exploit publications.

**Expected noise:** High -- FortiGate is widely deployed, so many alerts will be for versions or configurations not in your environment. Triage against your Module 4 asset inventory.

### Query 5: Specific Domain Mentions in Security Context

```
"nreca.coop" OR "electric.coop" site:pastebin.com OR site:github.com OR site:reddit.com
```

**Purpose:** Monitors for NRECA domain mentions on platforms where credentials, configurations, or security findings are commonly shared.

**Expected signal:** Credential dumps, exposed configuration files, security researcher findings posted to public platforms.

---

## Configuration Settings

For each alert query, use these settings in Google Alerts:

| Setting | Recommended Value | Rationale |
|---------|------------------|-----------|
| How often | As-it-happens | Timely notification for security events |
| Sources | Automatic | Broadest coverage |
| Language | English | Adjust if monitoring non-English sources |
| Region | Any region | Security events are not geographically constrained |
| How many | All results | "Only the best results" may filter relevant security content |
| Deliver to | [dedicated email or filter] | Route to a specific folder or channel for triage |

---

## Alert Routing

Route all Google Alerts to a dedicated location for daily triage (per Module 6 runbook):

- **Email folder:** Create a "Security Alerts" folder with a filter rule matching Google Alerts sender
- **Slack/Teams channel:** Forward alerts to a dedicated security monitoring channel
- **Shared inbox:** For team-based monitoring, route to a shared mailbox

The Module 6 daily triage procedure processes these alerts: scan subject lines, classify against baseline, escalate P0/P1 findings, defer low-priority items to weekly review.

---

## Other Push-Based Alert Sources

Google Alerts is one component of a push-based monitoring program. Configure these additional sources:

| Source | Setup | Purpose |
|--------|-------|---------|
| CISA ICS Advisories | Subscribe at [cisa.gov](https://www.cisa.gov/news-events/cybersecurity-advisories){:target="_blank" rel="noopener"} | ICS-specific vulnerability disclosures |
| CISA KEV Updates | Subscribe to KEV mailing list | New actively exploited vulnerability notifications |
| Vendor PSIRTs | Subscribe to feeds for products in your Module 4 asset inventory | Product-specific security advisories |
| Shodan Monitor | Configure at [monitor.shodan.io](https://monitor.shodan.io/){:target="_blank" rel="noopener"} (free tier limited) | Alerts when new services appear on monitored IPs |
| HaveIBeenPwned | Domain verification at [haveibeenpwned.com/DomainSearch](https://haveibeenpwned.com/DomainSearch){:target="_blank" rel="noopener"} | Notifications when domain emails appear in new breaches |
| Certificate Transparency | [Cert Spotter](https://sslmate.com/certspotter/){:target="_blank" rel="noopener"} | Notifications when new certificates are issued for your domains |

---

## Key Takeaway

Push-based alerts require one-time setup but then run continuously with no recurring effort. The 5 Google Alert queries above cover: organizational mentions, sector-wide OT events, domain exposure, product vulnerabilities, and domain mentions on public platforms. Combined with CISA subscriptions, vendor PSIRTs, and breach monitoring, these alerts form the daily triage queue that your runbook operationalizes.

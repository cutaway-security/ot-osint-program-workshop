---
layout: default
title: Monitoring Checklist Template
---

# Pull-Based Monitoring Checklist Template

Structured checklist for weekly and monthly pull-based OSINT monitoring. This template supports the Module 5 workflow.

**Instructions:** Copy this template and customize the queries, baseline references, and finding criteria for your organization. Use the checklist format during each monitoring cycle to ensure consistent execution.

---

## Weekly Monitoring Checklist

**Target time:** Under 30 minutes | **Schedule:** Every [day] | **Owner:** [name]

Checks ordered by OT relevance -- remote access and edge device checks first.

### Check 1: Shodan/Censys Remote Access Review

- **Tool:** [Shodan](https://www.shodan.io/) / [Censys](https://search.censys.io/)
- **Query:** `[your exact query -- e.g., net:x.x.x.x/24 port:443,8443,10443]`
- **Baseline reference:** Section 1, rows [X-Y] (remote access services)
- **Time:** ~5 min

| Date | New Findings | Classification | Action Taken |
|------|-------------|---------------|-------------|
| | | | |

**OT-relevant finding:** Any change to VPN login page, new port on firewall management IP, version change on edge device. Version downgrade or unexpected service warrants immediate investigation.

**Expected noise:** Minor HTTP header changes, certificate renewals on same service.

---

### Check 2: CISA KEV Review

- **Tool:** [CISA KEV Catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)
- **Query:** Review additions from past 7 days. Cross-reference against asset inventory
- **Baseline reference:** Module 4 vulnerability correlation table
- **Time:** ~5 min

| Date | New KEV Entries | Match to Inventory | Priority | Action Taken |
|------|----------------|-------------------|----------|-------------|
| | | Yes/No | P0-P3 | |

**OT-relevant finding:** Any KEV entry matching a product/vendor in your asset inventory. P0 if the asset is internet-exposed.

---

### Check 3: Certificate Transparency

- **Tool:** [crt.sh](https://crt.sh/)
- **Query:** `%.[your domain]`
- **Baseline reference:** Section 1, subdomain list
- **Time:** ~5 min

| Date | New Subdomains | Classification | Action Taken |
|------|---------------|---------------|-------------|
| | | | |

**OT-relevant finding:** New subdomains suggesting remote access (vpn*, ras*, remote*), new OT-adjacent applications, or shadow IT.

**Expected noise:** Certificate renewals for existing subdomains (same name, new serial).

---

### Check 4: Breach Database

- **Tool:** [HaveIBeenPwned](https://haveibeenpwned.com/)
- **Query:** Domain search for `[your domain]` or spot-check Tier 1 emails: [list]
- **Baseline reference:** Section 2, breach status column
- **Time:** ~5 min

| Date | Personnel Affected | Breach Name | Data Exposed | Priority | Action Taken |
|------|-------------------|-------------|-------------|----------|-------------|
| | | | | | |

**OT-relevant finding:** Tier 1 or Tier 2 personnel in new breach with password/hash exposure.

---

### Check 5: Alert Backlog Processing

- **Tool:** Alert aggregation point ([email folder / Slack / shared inbox])
- **Action:** Review and close or investigate items deferred during daily triage
- **Time:** ~5 min

| Date | Items in Backlog | Items Closed | Items Escalated |
|------|-----------------|-------------|----------------|
| | | | |

**Rule:** No item remains in backlog longer than one week.

---

### Check 6: Baseline Update

- **Action:** If any weekly check surfaced changes, update baseline document
- **Time:** ~5 min

| Date | Section Updated | Change Description |
|------|----------------|-------------------|
| | | |

---

## Monthly Monitoring Checklist

**Target time:** 60-90 minutes | **Schedule:** [first Monday / last Friday] | **Owner:** [name]

### Check 1: Full Subdomain Re-enumeration (20 min)

- **Tools:** crt.sh, DNSDumpster, SecurityTrails
- **Domains:** [list all domains]
- **Baseline reference:** Section 1, complete subdomain inventory

| Date | New Subdomains | Removed Subdomains | Service Changes | Action Taken |
|------|---------------|-------------------|----------------|-------------|
| | | | | |

---

### Check 2: Deep Shodan/Censys Scan (15 min)

- **Tools:** Shodan, Censys
- **Query:** [broader queries -- org name, ASN, netblocks]
- **Focus:** New management interfaces and remote access on OT boundary

| Date | New Services | Changed Services | Action Taken |
|------|-------------|-----------------|-------------|
| | | | |

---

### Check 3: Vulnerability Re-correlation (20 min)

- **Tools:** NVD, CISA KEV, vendor PSIRTs, ICS Advisory Project
- **Products:** [list from Module 4 asset inventory]

| Date | New CVEs | KEV Changes | Priority Updates | Action Taken |
|------|---------|-------------|-----------------|-------------|
| | | | | |

---

### Check 4: Personnel Exposure Refresh (15 min)

- **Action:** Re-check Tier 1/2 against breach databases. Review personnel changes

| Date | New Breaches | Personnel Changes | Action Taken |
|------|-------------|------------------|-------------|
| | | | |

---

### Check 5: Alert Configuration Review (10 min)

- **Action:** Verify all push alerts are active. Review query relevance

| Date | Alerts Verified | Changes Made |
|------|----------------|-------------|
| | | |

---

## Cycle Summary

Complete this section at the end of each monitoring cycle.

| Cycle Date | Type | Total Findings | P0/P1 | Baseline Updates | Time Spent | Analyst |
|-----------|------|---------------|-------|-----------------|-----------|---------|
| | Weekly | | | | | |
| | Monthly | | | | | |

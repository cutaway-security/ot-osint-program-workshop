---
layout: default
title: Runbook Template
---

# Operational Runbook Template

Cadenced monitoring procedures for your OT OSINT program. This template supports the Module 6 workflow.

**Download:** [Runbook Template (Word)]({{ '/templates/downloads/runbook-template.docx' | relative_url }}) -- includes [CORE]/[FULL] labels, checkboxes, and procedural structure.

**NRECA Example:** [NRECA Runbook (Word)]({{ '/examples/downloads/nreca-runbook.docx' | relative_url }}) -- pre-filled example showing what a completed runbook looks like.

**Instructions:** Copy this template and customize with your organization-specific details. Replace all [bracketed items] with actual tool queries, personnel names, and baseline references. Mark each procedure as [CORE] or [FULL].

- **[CORE]** -- Runs no matter what. Part of your minimum viable monitoring set.
- **[FULL]** -- Runs during normal operations. Can be deferred when time is constrained.

---

## Program Information

- **Organization:** [name]
- **Program owner:** [name, role]
- **Backup owner:** [name, role]
- **Escalation contact (P0/P1):** [name, phone, email]
- **Baseline document location:** [path or URL]
- **Last runbook review:** [date]

---

## Daily Alert Triage (5-10 minutes)

**Owner:** [name] | **Backup:** [name]

1. [ ] **[CORE]** Open alert aggregation point ([email folder / Slack channel / shared inbox])
2. [ ] **[CORE]** Review new Google Alerts for: [list your configured alert queries]
3. [ ] **[CORE]** Review CISA ICS Advisory emails -- check for advisories affecting [list your vendors]
4. [ ] **[CORE]** Triage each alert:
   - Known baseline item -- mark as reviewed, no action
   - New finding, low priority -- add to weekly review queue with one-line note
   - New finding, elevated priority -- investigate immediately using P0-P3 framework
   - New finding, critical (P0) -- escalate to [escalation contact] immediately
5. [ ] **[CORE]** Log triage decisions: date, source, summary, disposition

---

## Weekly Active Monitoring (25-30 minutes)

**Owner:** [name] | **Backup:** [name] | **Day:** [e.g., Monday]

Checks ordered by OT relevance:

1. [ ] **[CORE]** Shodan/Censys remote access check (5 min)
   - **Query:** [exact Shodan/Censys query for your IPs]
   - **Compare to:** Baseline Section 1, rows [X-Y] (remote access services)
   - **Escalate if:** New ports, service changes, or version changes on remote access IPs

2. [ ] **[CORE]** CISA KEV review (5 min)
   - **Query:** Review [CISA KEV catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) additions from past 7 days
   - **Compare to:** Module 4 asset inventory -- [list your products/vendors]
   - **Escalate if:** Any KEV match on an internet-exposed asset (P0)

3. [ ] **[FULL]** Certificate transparency check (5 min)
   - **Query:** crt.sh for [your domains]
   - **Compare to:** Baseline Section 1, subdomain list
   - **Escalate if:** New subdomains suggesting remote access (vpn*, ras*, remote*)

4. [ ] **[FULL]** Breach database check (5 min)
   - **Query:** HIBP for [domain] or spot-check Tier 1 emails: [list]
   - **Compare to:** Baseline Section 2, breach status column
   - **Escalate if:** Tier 1 or Tier 2 personnel in new breach with password/hash exposure

5. [ ] **[FULL]** Alert backlog processing (5 min)
   - Review items deferred during daily triage
   - No item should remain in backlog longer than one week

6. [ ] **[FULL]** Baseline update (5 min)
   - Update baseline for any changes discovered this week
   - Record date and nature of each change

---

## Monthly Full Review (60-90 minutes)

**Owner:** [name] | **Backup:** [name] | **Week:** [e.g., first Monday]

1. [ ] **[FULL]** Attack surface re-enumeration (20 min)
   - Re-run Module 2 discovery: crt.sh, DNSDumpster, SecurityTrails for [your domains]
   - Compare complete results to baseline
   - Investigate new subdomains. Remove decommissioned entries

2. [ ] **[FULL]** Deep Shodan/Censys scan (15 min)
   - Run broader queries: organization name, ASN ranges, netblock searches
   - Focus on new management interfaces and remote access systems

3. [ ] **[CORE]** Vulnerability re-correlation (20 min)
   - Re-run Module 4 process for: [list your edge devices and OT-adjacent products]
   - Check NVD, CISA KEV, vendor PSIRTs, ICS Advisory Project
   - Update correlation table. Re-evaluate priority ratings

4. [ ] **[FULL]** Personnel exposure refresh (15 min)
   - Re-check Tier 1 and Tier 2 personnel against breach databases
   - Review for new hires, departures, role changes
   - Add new Tier 1 personnel to monitoring immediately

5. [ ] **[FULL]** Alert configuration review (10 min)
   - Verify all push-based alerts are still active and delivering
   - Review Google Alert queries for relevance
   - Add queries for organizational changes, new domains, new vendors

---

## Quarterly Program Assessment (2-3 hours)

**Owner:** [name] | **Quarter:** [Q1/Q2/Q3/Q4]

1. [ ] **[FULL]** Full baseline refresh (60 min)
   - Complete re-run of Modules 2-4 as if starting fresh
   - Compare comprehensive results to current baseline
   - Reclassify all entries

2. [ ] **[FULL]** Program metrics (30 min)
   - Total alerts received vs. actionable findings: ___
   - Average triage response time: ___
   - Baseline changes this quarter: ___
   - Open remediation items and aging: ___

3. [ ] **[FULL]** Stakeholder briefing (30 min)
   - Key findings from the quarter
   - Remediation progress
   - Emerging risks
   - Resource requests

4. [ ] **[FULL]** Runbook review (30 min)
   - Are procedures still accurate?
   - Have tools changed?
   - Are there new data sources to incorporate?
   - Update cadences, queries, and contacts as needed
   - **Update this runbook's "Last runbook review" date**

---

## Change Log

| Date | Change | Changed By |
|------|--------|-----------|
| [today] | Initial runbook created | [name] |

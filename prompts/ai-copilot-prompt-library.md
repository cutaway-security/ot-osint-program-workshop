---
layout: default
title: AI Copilot Prompt Library
---

# AI Copilot Prompt Library

All AI prompts from the workshop, organized by category. These prompts are AI-client agnostic -- use them with ChatGPT, Claude, or your preferred AI assistant.

Replace all `[bracketed placeholders]` with your organization-specific information before running.

---

## Discovery and Analysis

### Sector Threat Profile (Module 1)

Generate a threat profile to establish context for your monitoring program.

```
I work at a [organization type -- e.g., "rural electric cooperative",
"municipal water utility", "food manufacturing company"]. We operate
[OT/ICS systems -- e.g., "SCADA/EMS systems for grid management",
"SCADA for plant process control", "DCS and PLC-based control systems"].

Generate a sector threat profile including:
1. Top 3 external exposure categories for the [sector] sector
2. Priority remote access technologies commonly deployed at
   [organization type]
3. Key personnel roles that adversaries would target
4. Recent threat actor groups known to target [sector]
```

### Certificate Transparency Analysis (Module 2, Step 2a)

Analyze certificate transparency JSON data from crt.sh.

```
I am analyzing certificate transparency data from crt.sh for
[organization name]. The attached/pasted JSON contains certificate
records for %.[yourdomain.com].

Analyze this data and provide:
1. A deduplicated list of all unique subdomain and domain names
2. Naming patterns and conventions the organization uses
3. Subdomains suggesting admin interfaces, login portals,
   VPN/remote access, dev/staging environments, or API endpoints
4. Any wildcard certificates and what infrastructure they might
   cover
5. Certificate authorities used (reveals vendor relationships
   and hosting providers)
6. Anything unusual or potentially sensitive that a human reviewer
   would miss scrolling through hundreds of certificate rows

Output a clean categorized subdomain list organized by
function/risk category.
```

### Subdomain Enumeration Analysis (Module 2, Step 2c)

Analyze subdomain enumeration results from multiple sources.

```
I am analyzing subdomain enumeration data for [organization name],
a [sector] organization. The attached/pasted JSON files contain
subdomain records for [domain1.com] and [domain2.com]. Each record
includes subdomain name, IP address, and Cloudflare status.

Analyze the combined data and provide:
1. All unique subdomains grouped by root domain
2. IP address clustering -- which subdomains share the same IP
   (suggests shared hosting or load balancer)
3. Authentication and identity infrastructure (SSO portals,
   federation servers, access management)
4. Remote access or VPN-related subdomains
5. API endpoints and what backend systems they suggest
6. Staging, test, or development environments
7. Blue/green or canary deployment patterns that reveal
   infrastructure architecture
8. Subdomains revealing sensitive business functions (benefits,
   payroll, financial, compliance, HR)
9. Which subdomains use cloud provider IPs vs on-premise IP
   ranges
10. Which root domain reveals the most infrastructure detail
    and why that matters for reconnaissance

Output a categorized inventory organized by: authentication/
identity, remote access, benefits/HR, financial/compliance,
APIs/backend, staging/test, content/public, and other.
```

### Google Dork Query Generation (Module 2, Step 4a)

Generate targeted Google dork queries for attack surface discovery.

```
I am performing external attack surface discovery on [organization
name], a [sector] organization. I have identified these root
domains: [domain1.com, domain2.com, domain3.com].

Based on these domains, generate Google dork queries to find:
1. Login pages and authentication portals
2. Exposed documents (PDF, DOCX, XLSX) that may contain
   sensitive information
3. Directory listings that reveal file structures
4. Error pages or debug output that reveals technology stack
5. Configuration files, backup files, or admin panels
6. Pages referencing VPN, remote access, or SCADA/OT systems

Format each query so I can paste it directly into Google.
```

### Attack Surface Consolidation (Module 2, Step 4b)

Consolidate all discovery findings into a single baseline inventory.

```
I have completed external attack surface discovery for
[organization name]. Here is a summary of all findings:

CERTIFICATE TRANSPARENCY (crt.sh):
[paste or summarize CT findings]

SUBDOMAIN ENUMERATION:
[paste or summarize subdomain/IP findings]

EXPOSED SERVICES (Shodan/Censys):
[paste or summarize service discovery findings]

GOOGLE DORKING:
[paste or summarize any additional findings]

Consolidate all findings into a single attack surface baseline:
1. A categorized inventory of all discovered assets organized by:
   remote access, authentication/identity, email, web applications,
   benefits/HR/financial, APIs, staging/test, content/public
2. For each category, note the highest-risk assets and why
3. Gaps in my discovery -- what should I investigate further
4. A prioritized list of assets to carry forward to vulnerability
   correlation (Module 4) and monitoring (Module 5)
5. A summary table suitable for use as a baseline document
```

### Personnel Discovery and Categorization (Module 3, Step 1)

Identify key personnel and assign priority tiers based on OT access.

```
I am building a personnel exposure inventory for [organization
name], a [sector] organization that operates [operations
description].

Review the [domain1, domain2] websites and obtain a list of
personnel. Search the internet to determine the email naming
scheme used by [organization name] and generate a list of ten
individuals and their email addresses.

For each person:
1. Assign a priority tier based on their likely access to
   operational technology and critical systems:
   - Tier 1 (Immediate): Control system engineers, SCADA/OT
     administrators, cybersecurity leadership with OT scope,
     grid operations leadership, OT network administrators,
     CIO/IT leadership with system access
   - Tier 2 (High): IT administrators with OT bridge access,
     plant managers, distribution automation engineers,
     cybersecurity program staff, GIS/mapping specialists
   - Tier 3 (Elevated): Executives (CEO, CFO), financial
     officers, communications staff, vendor contacts without
     system access
2. Explain the rationale for the tier assignment, focusing on
   their likely access to operational technology
3. Provide their predicted email address using the naming
   pattern you identified
4. Identify which personnel represent the highest risk to
   sustained operations if their credentials were compromised

IMPORTANT: For each person and the email format pattern, provide
the specific URL where you found this information. If you cannot
access a website directly, state that clearly rather than
generating names from memory.
```

### Personnel Risk Prioritization (Module 3, Step 3)

Rank breached personnel by risk and generate attack scenarios.

```
I found the following personnel from [organization name] in breach
databases. Based on their roles at a [sector] organization that
operates [OT/ICS systems], rank them by risk priority and explain
potential attack scenarios for the top findings:

[paste personnel with breach details -- name, role, tier, breaches
 found, whether passwords/hashes/email-only were included]

For each person found in breaches:
1. The most likely attack scenario given their role and access level
2. Whether credential reuse against VPN/remote access is plausible
3. Cross-reference their tier (1/2/3) with the severity of the
   breach data exposed
4. Recommended immediate actions
```

### Professional Network Exposure Analysis (Module 3, Step 4)

Analyze job postings and professional profiles for information leakage.

```
Review the following job postings and professional profile
information for [organization name]. Identify what an adversary
could learn about the organization's:

1. Technology stack (specific vendors, products, versions)
2. Network architecture (on-premise vs cloud, remote access)
3. Security tools and practices
4. Organizational structure and reporting chains
5. Information that could support targeted social engineering

[paste job posting text or profile summaries]
```

### CPE Generation and Vulnerability Lookup (Module 4, Step 1)

Generate CPE identifiers and query vulnerability databases for exposed products.

```
I found the following product exposed to the internet during an
external attack surface assessment:

- Product: [vendor] [product name]
- Version: [version number]
- Service: [service type, e.g., HTTPS admin interface on port 443]
- Context: [where this sits in the network, e.g., perimeter
  firewall for an electric utility]

1. Generate the CPE 2.3 identifier for this product and version
2. List all critical and high-severity CVEs from 2024-2026
   affecting this version
3. For each CVE, indicate:
   - CVSS score
   - Whether it is on the CISA KEV (Known Exploited
     Vulnerabilities) list
   - Brief description of the vulnerability
   - Whether remote/unauthenticated exploitation is possible
4. Highlight any CVEs that combine internet-facing exposure with
   active exploitation -- these are the highest priority findings
```

### Vulnerability Risk Summary (Module 4, Step 3)

Generate an actionable risk summary for security team or management.

```
Write a one-paragraph risk summary for my security team about
this finding:

- Asset: [vendor] [product], [version]
- Exposure: [service type] on port [port], internet-facing
- Vulnerability: [CVE ID] (CVSS [score], CISA KEV since [date])
- Attack pattern: [brief description of how the vulnerability
  is exploited]
- Context: [what this asset does in the organization -- e.g.,
  primary perimeter firewall, remote access gateway for OT
  network]

Include:
1. Why this is urgent (active exploitation + exposure + asset
   criticality)
2. Recommended immediate actions (patch, mitigate, monitor)
3. What to check for evidence of prior compromise
```

---

## Monitoring and Operations

### Pull-Based Monitoring Schedule (Module 5, Step 1)

Generate a customized monitoring checklist based on your findings.

```
Create a pull-based OSINT monitoring schedule for [organization
name], a [sector] organization focused on monitoring remote
access and OT-adjacent infrastructure. Include weekly checks
(under 30 minutes) and monthly checks (up to 2 hours).

From our prior modules:
- Remote access and OT-adjacent services discovered: [list
  from Module 2 -- VPN portals, admin interfaces, remote
  desktop, firewall management pages]
- Edge device vendors with internet-exposed assets: [list
  from Module 4, e.g., Fortinet, Cisco]
- Tier 1 and Tier 2 personnel (OT/IT access): [count and
  roles from Module 3]
- Email domain for breach monitoring: [domain from Module 3]
- Primary domains and subdomains to watch: [from Module 2]

For each check, specify:
1. The tool and exact query to run
2. What to compare against (the baseline from today)
3. What constitutes an OT-relevant finding vs. expected noise
4. Estimated time

Prioritize checks covering remote access infrastructure and
edge device vulnerability changes above general subdomain
or personnel checks.
```

### Minimum Viable Monitoring (Module 5, Step 3)

Identify the essential checks that survive when time is constrained.

```
Given this monitoring program covering [describe your setup --
domains monitored, alert services configured, pull-based schedule,
number of personnel tracked], I have limited time and need to
identify my minimum viable monitoring set.

If I could only run 3 checks per week, which 3 would give me the
highest detection value for an electric cooperative / [sector]
organization, and why?

For each, specify:
1. The tool and the specific query to run
2. What finding would require immediate action (escalate now)
   vs. adding to a weekly review queue
3. How long the check takes and what it would miss if skipped
```

### Runbook Generation (Module 6, Step 1)

Generate a complete monitoring runbook with cadenced procedures.

```
Generate an ICS/OT OSINT monitoring runbook for [organization name],
a [sector] organization. Structure the runbook with daily, weekly,
monthly, and quarterly procedures.

Inputs from prior modules:
- Push-based alert sources configured: [list from Module 5 read
  section -- Google Alerts queries, CISA subscriptions, vendor
  PSIRT feeds, HIBP monitoring]
- Pull-based monitoring schedule: [from Module 5 Artifact 6 --
  weekly and monthly check lists with tools and queries]
- Baseline document: [from Module 5 Artifact 7 -- classified
  entries for domains, personnel, vulnerabilities]
- Remote access and edge devices: [from Module 2 -- VPN portals,
  firewall management interfaces, specific IPs/hostnames]
- Tier 1 and Tier 2 personnel: [count and roles from Module 3]
- Vulnerability correlation table: [from Module 4 -- products,
  CVEs, KEV status, priority ratings]

For each cadence, provide:
1. Step-by-step procedures a new team member could follow with
   no prior context
2. Which tools to use and what queries to run
3. What to compare results against (baseline entries)
4. Decision criteria for escalation vs. routine logging
5. Estimated time

Include specific tool references: Google Alerts, Shodan, Censys,
crt.sh, CISA KEV, CISA ICS Advisories, HaveIBeenPwned, NVD.
Format each procedure as a numbered checklist.
```

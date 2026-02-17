# CutSec ICS/OT OSINT Workshop -- Framework Document

## Building an ICS/OT OSINT Monitoring Program

**Subtitle:** From Discovery to Sustainable Operations with AI-Assisted Workflows  
**Format:** Self-paced browser-based tasks via GitHub Pages, instructor-guided  
**Duration:** 4 hours (~240 min total, ~215 min usable content)  
**Prerequisites:** Basic OSINT familiarity; ChatGPT account or preferred AI client  
**Recommended Preparation:** The [CutSec ICS/OT OSINT Workshop](https://cutaway-security.github.io/ics-summit-2025-osint-workshop/) covers foundational discovery techniques and additional OSINT methods; helpful background but not required
**Student Requirements:** Laptop with web browser (Windows primary; macOS/Linux supported), AI client access  
**Example Target Organization:** NRECA / America's Electric Cooperatives (electric.coop, cooperative.com, nreca.coop)  
**Example Edge Device Vendor:** Fortinet FortiGate (CVE-2025-59718 / CVE-2025-59719)

---

## Design Principles

These principles guide all workshop design decisions. See also the [CutSec ICS/OT OSINT Workshop](https://cutaway-security.github.io/ics-summit-2025-osint-workshop/) for additional OSINT techniques and context.

- **Minimal lecture, maximum hands-on** -- each module has a short read-through section followed by structured steps
- **Browser-based only** -- no tool installs, no API keys required (students with accounts are encouraged to use them)
- **AI copilot integrated throughout** -- students use their AI client (ChatGPT, Claude, etc.) as a working partner in every module
- **Students leave with artifacts** they can use Monday morning
- **Real examples first** -- every module includes worked examples using NRECA/Cooperative as the demonstration target before students work their own targets

---

## Workshop Schedule

| Block | Module | Read | Lab | Total |
|-------|--------|------|-----|-------|
| **Block 1** | M1: Threat Context | 5 min | 10 min | 15 min |
| | M2: External Attack Surface | 10 min | 35 min | 45 min |
| | M3: Personnel & Credential Exposure | 10 min | 30 min | 40 min |
| | **Break 1** | | | **10 min** |
| **Block 2** | M4: Vulnerability Correlation | 10 min | 30 min | 40 min |
| | M5: Monitoring & Alerting | 10 min | 35 min | 45 min |
| | **Break 2** | | | **10 min** |
| **Block 3** | M6: Runbook Development | 10 min | 25 min | 35 min |
| | Summary & Next Steps | 10 min | -- | 10 min |
| **Total** | | **65 min** | **165 min** | **~250 min** |

Breaks at ~1.5 hour intervals. Block 1 runs 100 min, Block 2 runs 85 min, Block 3 runs 45 min. Instructor can flex M2/M3 labs if students move quickly.

---

## Example Target Organization: NRECA

NRECA (National Rural Electric Cooperative Association) is used throughout the workshop as the worked example. This is a real organization with publicly available information -- all data used in examples comes from publicly accessible sources.

### Organization Profile

- **Full Name:** National Rural Electric Cooperative Association
- **Public Website:** https://www.electric.coop/ (public-facing news and advocacy)
- **Member Portal:** https://www.cooperative.com/ (member-facing resources, requires login)
- **Email Domain:** nreca.coop
- **Headquarters:** Arlington, Virginia
- **Description:** National service organization representing 900+ consumer-owned electric cooperatives serving 42 million people across 56% of U.S. land mass
- **Sectors:** Electric utility cooperative coordination, advocacy, education, insurance, financial services
- **Associated Domains:** electric.coop, cooperative.com, nreca.coop, nrecainternational.coop, careers.electric.coop, benefits.cooperative.com, resap.cooperative.com, ecba.cooperative.com, remagazine.cooperative.com

### Known Leadership (from public website)

Source: https://www.electric.coop/our-organization/leadership

| Name | Title | OSINT Priority Tier |
|------|-------|-------------------|
| Jim Matheson | Chief Executive Officer | Tier 3 -- Executive (BEC, strategic targeting) |
| Jeffrey Connor | Chief Operating Officer | Tier 3 -- Executive |
| Wayne F. McGurk | Chief Information Officer / SVP Information Technology | **Tier 1 -- IT/OT administrator** (direct system access) |
| D. Scott Barash | Senior Vice President / General Counsel | Tier 3 -- Executive |
| Digna Louis | Chief Financial Officer | Tier 3 -- Executive (financial fraud targeting) |
| Louis Finkel | Senior Vice President, Government Relations | Tier 3 -- Elevated |
| Stephen Bell | Senior Vice President, Communications | Tier 3 -- Elevated |
| Peter Baxter | Senior Vice President, Insurance & Financial Services | Tier 3 -- Elevated |
| Danielle Sieverling | VP, Chief Risk and Compliance Officer | Tier 2 -- Security personnel |

### Known Staff Contacts (from public contact page)

Source: https://www.electric.coop/our-organization/contact-us

| Name | Role | Email | OSINT Notes |
|------|------|-------|-------------|
| Dan Riedinger | Senior Communications Manager | dan.riedinger@nreca.coop | Media contact -- public figure |
| Shelby Hartley | Senior Manager, Advocacy Communications | shelby.hartley@nreca.coop | Public contact |
| Veronica Franco | Advertising | veronica.franco@nreca.coop | -- |
| Melissa DePuy | Electric Cooperative Bar Association | melissa.depuy@nreca.coop | -- |
| Elizabeth Kulig | Government Relations | elizabeth.kulig@nreca.coop | -- |
| Amy Lewis | PAC | amy.lewis@nreca.coop | -- |
| Nick Pascale | Office of General Counsel | nicholas.pascale@nreca.coop | -- |
| Scot Hoffman | RE Magazine | scot.hoffman@nreca.coop | -- |
| Katherine Loving | Program Manager, GIS Services | katherine.loving@nreca.coop | GIS/mapping -- Tier 2 |
| Martha Duggan | Mutual Aid Agreements | martha.duggan@nreca.coop | -- |
| Desiree Dunham | Workforce Programs Manager | desiree.dunham@nreca.coop | -- |

**Email Format Discovered:** firstname.lastname@nreca.coop (confirmed across all public contacts)

### Why NRECA Works as a Workshop Target

1. **Electric cooperative sector** -- directly relevant to ICS/OT security
2. **Rich public information** -- leadership pages, contact directories, press releases, financial filings (Form 990), job postings
3. **Multiple domains** -- demonstrates subdomain enumeration across related organizations
4. **Member-facing portal** -- cooperative.com has a login page (attack surface indicator)
5. **Cybersecurity relevance** -- NRECA has an explicit cybersecurity and grid resilience program, Co-op Cyber Goals Program, and member cooperatives operate SCADA/EMS systems
6. **No harm** -- NRECA is a large national organization; workshop exercises use only publicly available data and do not test or probe their systems

---

## Example Edge Device: Fortinet FortiGate

### Why Fortinet

Fortinet FortiGate firewalls are among the most widely deployed VPN/firewall appliances in electric utility and cooperative environments. They serve as the primary remote access and perimeter security device for many small-to-medium utilities -- exactly the type of edge device students need to learn to identify and monitor.

### Vulnerability Example: CVE-2025-59718 / CVE-2025-59719

**Disclosure Date:** December 9, 2025  
**KEV Date:** December 16, 2025  
**Active Exploitation Confirmed:** December 12, 2025 (3 days after disclosure)  
**CVSS Score:** 9.8 (Critical)

**Summary:** Authentication bypass vulnerabilities in FortiOS, FortiProxy, FortiSwitchManager, and FortiWeb. An unauthenticated remote attacker can bypass FortiCloud SSO login authentication using a crafted SAML message, gaining administrative access to the device.

**Affected Products:**
- FortiOS 7.6.0--7.6.3, 7.4.0--7.4.8, 7.2.0--7.2.11, 7.0.0--7.0.17
- FortiProxy 7.6.0--7.6.1, 7.4.0--7.4.5, 7.2.0--7.2.13, 7.0.0--7.0.20
- FortiSwitchManager 7.2.0--7.2.5
- FortiWeb 8.0.0, 7.6.0--7.6.4, 7.4.0--7.4.9

**Why This Matters for the Workshop:**
- FortiCloud SSO is **automatically enabled** when a device is registered via the GUI -- many admins don't realize it's on
- Shodan shows approximately **189,000 internet-exposed FortiOS 7.x admin GUIs**, with ~30,000 having FortiCloud SSO enabled
- Attackers exploited within 3 days -- demonstrates why continuous monitoring matters
- Observed attack pattern: authenticate as admin --> download system config (including hashed credentials) --> crack hashes offline --> establish rogue VPN tunnels
- Subsequent vulnerability CVE-2026-24858 affected even devices that patched the original CVEs -- demonstrates that edge device monitoring is ongoing

**CISA Resources:**
- KEV entry: https://www.cisa.gov/known-exploited-vulnerabilities-catalog (search CVE-2025-59718)
- CISA Alert: https://www.cisa.gov/news-events/alerts/2025/12/16/cisa-adds-one-known-exploited-vulnerability-catalog
- Follow-on Alert (CVE-2026-24858): https://www.cisa.gov/news-events/alerts/2026/01/28/fortinet-releases-guidance-address-ongoing-exploitation-authentication-bypass-vulnerability-cve-2026

**Fortinet Advisory:** https://fortiguard.fortinet.com/psirt/FG-IR-25-647

### Example Shodan Query

```
product:"FortiGate" port:443 "FortiOS"
```

Students would look for: version numbers in HTTP headers or login page HTML, SSL certificate details revealing organization name, administrative login portals exposed to the internet.

---

## Module Specifications

### Module 1: ICS/OT Threat Context (15 min)

**Purpose:** Establish *why* OSINT monitoring matters for ICS/OT -- grounding, not a deep dive.

#### Read Section (5 min)

Brief overview of attacks enabled by publicly discoverable information:

- **Aliquippa Water Authority (Nov 2023):** Iranian-linked actors found Unitronics PLCs via internet scanning; default password "1111" enabled access to water treatment SCADA
- **Colonial Pipeline (2021):** VPN credential from breach database enabled $4.4M ransomware attack on fuel pipeline operations
- **Texas Water Facilities (Jan 2024):** Russian-linked actors posted videos of SCADA interaction; vendor remote access software created common exposure point
- **Fortinet FortiGate Campaign (Dec 2025):** Attackers mass-exploited CVE-2025-59718 within 3 days of disclosure, targeting ~30,000 exposed FortiGate admin interfaces to steal configurations and establish rogue VPN access

The problem statement: most ICS/OT teams don't know what's externally visible about their organization. This workshop builds a repeatable OSINT monitoring process, not a one-time assessment.

#### Lab (10 min)

**Setup:** Students open their AI client (ChatGPT, Claude, etc.)

**Example Prompt (demonstrated by instructor):**

```
I work at a rural electric cooperative that operates generation, 
transmission, and distribution infrastructure. We are a member of 
NRECA and operate SCADA/EMS systems for grid management.

Generate a sector threat profile including:
1. Top 3 external exposure categories for the electric cooperative sector
2. Priority remote access technologies commonly deployed at cooperatives
3. Key personnel roles that adversaries would target
4. Recent threat actor groups known to target the electric sector
```

**Student Exercise:** Students modify the prompt for their own sector/organization and generate their sector threat profile.

**Output:** Sector threat profile document (referenced in remaining modules)

---

### Module 2: External Attack Surface Discovery (45 min)

**Purpose:** Discover what an organization exposes externally, focused on remote access infrastructure and domain/subdomain footprint.

#### Read Section (10 min)

- External attack surface concepts: what adversaries see without authentication
- Domain and subdomain discovery techniques: DNS enumeration, certificate transparency (crt.sh), search engine dorking
- Remote access technology identification: VPN portals, RDP/VDI, cloud-based remote access
- Naming convention patterns that reveal infrastructure: vpn., remote., access., citrix., rdp., plus facility/environment indicators (plant1., substation-west., dev., staging.)

#### Worked Example: NRECA Domain Discovery

**Step 1: Certificate Transparency Search**

Tool: https://crt.sh/?q=%25.electric.coop

This reveals subdomains associated with electric.coop through SSL certificate issuance. Students observe the results and look for patterns suggesting:
- Member-facing portals
- Administrative interfaces
- Development/staging environments
- API endpoints

**Step 2: Known Domain Mapping**

From public website analysis, we already know NRECA operates across multiple domains:

| Domain | Purpose | Notes |
|--------|---------|-------|
| electric.coop | Public website (WordPress) | News, advocacy, public-facing |
| cooperative.com | Member portal (SharePoint) | Login required -- attack surface |
| nreca.coop | Email domain | Confirmed format: firstname.lastname@nreca.coop |
| benefits.cooperative.com | Employee benefits portal | Login required -- sensitive |
| careers.electric.coop | Job postings | Reveals tech stack, org structure |
| resap.cooperative.com | Safety program portal | Member login |
| ecba.cooperative.com | Bar Association portal | Member login |
| remagazine.cooperative.com | RE Magazine | Content platform |
| nrecainternational.coop | International programs | Separate org site |

**Step 3: Remote Access Identification**

Instructor demonstrates Shodan/Censys browser search for NRECA's known IP ranges or domain patterns. Students observe what types of services appear:
- Web servers (identified by headers)
- Mail servers  
- VPN login portals (identified by product-specific login pages)
- Load balancers / CDN endpoints

**Step 4: AI-Assisted Analysis**

**Example Prompt:**

```
I performed subdomain enumeration on an electric cooperative 
organization and found these subdomains:

- benefits.cooperative.com
- resap.cooperative.com  
- ecba.cooperative.com
- careers.electric.coop
- remagazine.cooperative.com

Analyze these subdomains and identify:
1. Which suggest administrative or login interfaces
2. Which might contain sensitive employee/member data
3. What additional subdomains I should look for at a large 
   electric utility association
4. Suggested Google dork queries to find additional exposed resources
```

#### Lab (35 min) -- Structured Steps

1. **Target Selection:** Students select their target organization (their own with authorization, or use NRECA as practice target)
2. **AI-Assisted Query Generation:** Prompt AI client to generate domain discovery queries, Google dork strings, and certificate transparency search strategies
3. **Domain/Subdomain Enumeration:**
   - crt.sh certificate transparency search: `https://crt.sh/?q=%25.targetdomain.com`
   - DNSDumpster: https://dnsdumpster.com/
   - SecurityTrails (free tier): https://securitytrails.com/
   - Identify subdomains suggesting remote access, VPN, or administrative interfaces
4. **Remote Access Identification:**
   - Shodan browser search: https://www.shodan.io/
   - Censys browser search: https://search.censys.io/
   - Identify VPN login portals, RDP exposure, remote desktop web clients
   - Document vendor/product where identifiable from headers, certificates, or login pages
5. **AI-Assisted Analysis:** Feed findings back to AI client for categorization and gap identification

**Output:** External attack surface inventory (domains, subdomains, remote access services, technologies identified)

---

### Module 3: Personnel & Credential Exposure (40 min)

**Purpose:** Identify compromised personnel information and prioritize by role importance to the organization.

#### Read Section (10 min)

- Why personnel exposure matters for ICS/OT: credential stuffing against remote access, social engineering targeting engineers with system access, executives as high-value phishing targets
- Breach databases and what they reveal: email addresses, passwords, password hashes, associated services
- Role-based prioritization:
  - **Tier 1 -- Immediate:** Control system engineers, SCADA administrators, OT network administrators, CIO/IT leadership with system access
  - **Tier 2 -- High:** IT administrators, plant managers, security personnel, GIS/mapping specialists
  - **Tier 3 -- Elevated:** Executives (BEC, strategic targeting), third-party integrator/vendor contacts, financial officers
- Professional network exposure: conference presentations, job postings revealing technology stacks

#### Worked Example: NRECA Personnel Analysis

**Step 1: Leadership Page Discovery**

Source: https://www.electric.coop/our-organization/leadership

From the public leadership page, we identify key personnel and map them to priority tiers:

| Person | Title | Tier | Rationale |
|--------|-------|------|-----------|
| Wayne F. McGurk | CIO / SVP Information Technology | **Tier 1** | Direct control over all IT systems, network infrastructure, likely has admin-level access |
| Danielle Sieverling | VP, Chief Risk & Compliance | **Tier 2** | Security/risk oversight, likely has access to security tools and sensitive assessments |
| Jim Matheson | CEO | **Tier 3** | Business email compromise target, strategic intelligence value |
| Digna Louis | CFO | **Tier 3** | Financial fraud targeting, wire transfer authority |

**Step 2: Contact Page Email Harvesting**

Source: https://www.electric.coop/our-organization/contact-us

Key finding: **Email format is firstname.lastname@nreca.coop** -- confirmed across 10+ public contacts. This allows us to:
- Predict email addresses for any discovered employee
- Generate targeted breach database queries
- Build a comprehensive email list for monitoring

**Step 3: Breach Database Check**

Tool: https://haveibeenpwned.com/DomainSearch (for domain-level check)

Students would check nreca.coop domain for known breaches. Individual email checks at https://haveibeenpwned.com/ can reveal:
- Which breaches included NRECA email addresses
- Whether breaches included passwords, hashes, or email-only
- Date and source of breaches

**Critical Finding Example (Hypothetical for Workshop):**

> Wayne McGurk (CIO) -- email wayne.mcgurk@nreca.coop found in 2 breach databases. One breach (2023) included bcrypt-hashed passwords. As CIO with likely administrative access to network infrastructure including VPN and firewall management, this is a **Tier 1 / P1 finding** -- the combination of credential exposure + high-privilege role + likely access to remote access infrastructure creates an immediate risk.

**Step 4: AI-Assisted Prioritization**

**Example Prompt:**

```
I found the following NRECA personnel in breach databases. Based on 
their roles at an electric cooperative association that manages IT 
infrastructure for 900+ member cooperatives, rank them by risk 
priority and explain potential attack scenarios for the top 3:

1. Wayne McGurk, CIO/SVP IT -- found in 2 breaches (one with hashed passwords)
2. Jim Matheson, CEO -- found in 1 breach (email only)
3. Digna Louis, CFO -- found in 1 breach (email + plaintext password from 2019)
4. Dan Riedinger, Communications Manager -- found in 3 breaches (various)
5. Elizabeth Kulig, Government Relations -- not found in any breach databases

For each person found, describe:
- The most likely attack scenario given their role
- Whether credential reuse against VPN/remote access is plausible
- Recommended immediate actions
```

#### Lab (30 min) -- Structured Steps

1. **Personnel Discovery:**
   - Review target's website for leadership pages, staff directories, press releases, contact pages
   - Identify email format pattern
   - AI-assisted prompt to categorize personnel by role type and access level
2. **Breach Database Checks:**
   - HaveIBeenPwned domain/individual checks (free, no API required)
   - Document breach sources and dates
   - Note which breaches included passwords vs. hashes vs. email-only
3. **Role-Based Prioritization:**
   - Map discovered personnel to the three-tier priority model
   - Cross-reference: Tier 1 person in a password-containing breach = critical finding
   - AI-assisted analysis and attack scenario generation
4. **Professional Network Exposure:**
   - Review what technology stack, certifications, and system details are revealed through job postings (careers.electric.coop) and professional profiles
   - Document information that could support targeted social engineering

**Output:** Personnel exposure inventory with role-based priority ratings and breach correlation

---

### Break 1 (10 min)

---

### Module 4: Vulnerability Correlation (40 min)

**Purpose:** Map the external attack surface discovered in Module 2 to known vulnerabilities, emphasizing actively exploited vulnerabilities.

#### Read Section (10 min)

- Your external attack surface findings *are* your vulnerability scope -- focus on what's actually exposed, not theoretical assets
- Asset-to-vulnerability workflow: identify product/version --> map to CPE --> query vulnerability databases
- Key vulnerability sources: NVD, CISA ICS Advisories, CISA Known Exploited Vulnerabilities (KEV) catalog, vendor PSIRTs
- **Priority emphasis:** KEV list entries = confirmed active exploitation = top priority for anything in your external attack surface

#### Worked Example: Fortinet FortiGate Vulnerability Correlation

**Scenario:** During Module 2 discovery, you identified a FortiGate login portal exposed to the internet on your target's IP range. The Shodan banner shows:

```
HTTP/1.1 200 OK
Server: xxxxxxxx-xxxxx
Content-Type: text/html; charset=utf-8
Set-Cookie: APSCOOKIE_[redacted]
```

The login page HTML reveals FortiOS web interface styling and version indicators.

**Step 1: Product/Version Extraction**

From the Shodan/Censys results and login page analysis:
- **Product:** Fortinet FortiGate
- **Identified Version:** FortiOS 7.4.x (from HTTP headers or page source)
- **Service:** HTTPS admin interface on port 443

**Step 2: CPE Generation**

**AI Prompt:**

```
I found a Fortinet FortiGate firewall running FortiOS version 7.4.6 
exposed to the internet. Generate the CPE 2.3 identifier for this 
product and list all critical CVEs from 2025-2026 affecting this 
version. Indicate which CVEs are on the CISA KEV (Known Exploited 
Vulnerabilities) list.
```

**Expected CPE:** `cpe:2.3:o:fortinet:fortios:7.4.6:*:*:*:*:*:*:*`

**Step 3: Vulnerability Database Queries**

- **NVD Search:** https://nvd.nist.gov/vuln/search -- search for "fortinet fortios 7.4"
- **CISA KEV Check:** https://www.cisa.gov/known-exploited-vulnerabilities-catalog -- search "fortinet"
- **CISA ICS Advisories:** https://www.cisa.gov/news-events/cybersecurity-advisories -- filter by vendor
- **Fortinet PSIRT:** https://fortiguard.fortinet.com/psirt

**Step 4: Active Exploit Prioritization**

Key findings for FortiOS 7.4.6:

| CVE | CVSS | KEV | Description | Priority |
|-----|------|-----|-------------|----------|
| CVE-2025-59718 | 9.8 | Yes Yes (Dec 16, 2025) | SSO authentication bypass via crafted SAML -- allows unauthenticated admin access | **P0 -- Active Exploitation** |
| CVE-2025-59719 | 9.8 | Yes Yes | Same root cause, affects FortiWeb | **P0 -- Active Exploitation** |
| CVE-2026-24858 | -- | Monitoring | Follow-on SSO bypass affecting even patched devices | **P1 -- Critical** |

**Step 5: Risk Summary**

**AI Prompt:**

```
Write a one-paragraph risk summary for my security team about this 
finding:

- Asset: Fortinet FortiGate firewall, FortiOS 7.4.6
- Exposure: Admin interface on port 443, internet-facing
- Vulnerability: CVE-2025-59718 (CVSS 9.8, on CISA KEV since Dec 16, 2025)
- Attack pattern: Unauthenticated SSO bypass --> admin access --> config 
  export with hashed credentials --> rogue VPN tunnel creation
- Context: This is the primary perimeter firewall for our organization

Include recommended immediate actions.
```

#### Lab (30 min) -- Structured Steps

1. **Extract Product/Version Information:**
   - Review Module 2 findings for identifiable products and versions
   - AI-assisted CPE identifier generation
2. **Vulnerability Database Queries:**
   - Search NVD for matching CVEs
   - Check CISA KEV catalog: https://www.cisa.gov/known-exploited-vulnerabilities-catalog
   - Check CISA ICS Advisories for relevant vendor products
3. **Active Exploit Prioritization:**
   - Flag: external exposure + known vulnerability + KEV listing = **P0 critical**
   - AI-assisted risk summary generation
4. **Document Findings:**
   - Create asset-vulnerability correlation table: asset --> product/version --> CVE(s) --> KEV status --> priority

**Output:** Vulnerability correlation table with active-exploit prioritization

---

### Module 5: Monitoring & Alerting Setup (45 min)

**Purpose:** Configure push-based and pull-based monitoring so students leave with active alerting.

#### Read Section (10 min)

- Sustainable monitoring = **push** (alerts come to you) + **pull** (you go check periodically)
- **Push-based alerts:**
  - Google Alerts -- organization name + ICS/OT keywords
  - Shodan Alerts (free tier) -- IP range or query-based monitoring
  - Certificate transparency monitors -- crt.sh, Certspotter
  - CISA ICS-CERT email subscriptions -- vendor-specific advisories
  - HaveIBeenPwned domain notification -- new breaches affecting your domain
- **Pull-based checks (periodic):**
  - Re-run Module 2--4 queries on a schedule
  - Baseline comparison -- has anything changed since last check?
  - New CVE checks against your asset inventory
- Alert aggregation: dedicated email folder, Slack channel, or Teams channel
- Signal-to-noise: start narrow, expand as you learn what generates value

#### Worked Example: NRECA Monitoring Configuration

**Google Alerts Configuration:**

| Alert Query | Purpose |
|------------|---------|
| `"NRECA" breach OR hack OR compromised` | Breach monitoring |
| `"electric.coop" OR "cooperative.com" vulnerability` | Domain-specific vulnerability mentions |
| `"NRECA" VPN OR "remote access" OR SCADA` | Remote access exposure mentions |
| `"NRECA" cybersecurity incident` | Incident monitoring |
| `"National Rural Electric Cooperative" data leak` | Data exposure monitoring |

**CISA ICS-CERT Subscriptions:**

Based on Module 4 findings (Fortinet edge devices), subscribe to:
- Fortinet PSIRT advisories: https://fortiguard.fortinet.com/psirt
- CISA ICS Advisories (all): https://www.cisa.gov/news-events/cybersecurity-advisories
- CISA KEV updates (RSS): https://www.cisa.gov/news-events/cybersecurity-advisories?f%5B0%5D=advisory_type%3A94

**AI Prompt for Pull-Based Schedule:**

```
Create a weekly and monthly pull-based OSINT monitoring checklist for 
an electric cooperative. Weekly checks should take under 30 minutes. 
Monthly checks can take up to 2 hours. 

Include specific tools and queries for:
- Subdomain changes (crt.sh)
- Shodan/Censys exposure changes
- New breach database entries (HaveIBeenPwned)
- Vulnerability correlation updates (NVD, CISA KEV)
- Personnel changes (LinkedIn, website leadership pages)
```

#### Lab (35 min) -- Structured Steps

1. **Configure Push-Based Alerts:**
   - Set up 3--5 Google Alerts using organization name + ICS/OT keywords
   - Subscribe to CISA ICS-CERT advisories for vendors identified in Modules 2 and 4
   - Configure HaveIBeenPwned domain notification (if not already active)
   - If students have Shodan accounts: configure alert for target IP range
2. **Design Pull-Based Schedule:**
   - AI-assisted generation of weekly/monthly monitoring checklist
   - Students customize the generated schedule to their environment
3. **Baseline Snapshot:**
   - Consolidate Modules 2--4 outputs into a single baseline document (template provided)
   - Classify each item: **known-good** / **accepted risk** / **needs remediation** / **needs investigation**

**Output:** Configured alert services, pull-based monitoring schedule, consolidated baseline document

---

### Break 2 (10 min)

---

### Module 6: Runbook Development (35 min)

**Purpose:** Build a repeatable, documented process (runbook) that anyone on the team can execute.

#### Read Section (10 min)

- **What a runbook is:** Step-by-step operational procedures for routine monitoring -- the runbook keeps the program alive when people change, priorities shift, or memory fades
- **Runbook vs. playbook:**
  - **Runbook** = routine operational procedures (how to run the program day-to-day)
  - **Playbook** = incident response procedures (how to respond to specific findings) -- playbooks are a next step beyond this workshop
- **Runbook cadence structure:**
  - **Daily:** Check alert queue, quick triage (new vs. known)
  - **Weekly:** Process alert backlog, update baseline if changes found, 30-minute pull-based checks
  - **Monthly:** Full pull-based review cycle (re-run discovery, vulnerability re-correlation), update personnel exposure checks, review and tune alert configurations
  - **Quarterly:** Baseline full refresh, program metrics review, stakeholder briefing

#### Worked Example: NRECA Runbook Excerpt

**Daily Check Procedure (5--10 min):**

1. Open alert email folder / Slack channel
2. Review new Google Alerts -- scan for breach mentions, exposure reports, SCADA references
3. Review CISA ICS-CERT emails -- check for advisories affecting Fortinet, [other identified vendors]
4. **Triage each alert:**
   - Known baseline item --> mark as reviewed, no action
   - New finding, low priority --> add to weekly review queue
   - New finding, elevated priority --> investigate immediately, apply prioritization framework
   - New finding, critical --> escalate per escalation procedures
5. Document triage decisions in alert log

**Weekly Check Procedure (30 min):**

1. Run crt.sh query for `%.electric.coop` -- compare to baseline subdomain list
2. Check HaveIBeenPwned for domain `nreca.coop` -- any new breaches since last check?
3. Review CISA KEV catalog additions from the past week -- any matches to asset inventory?
4. Process weekly alert backlog from daily triage
5. Update baseline document if any changes discovered

#### Lab (25 min) -- Structured Steps

1. **AI-Assisted Runbook Generation:**

   **Prompt:**

   ```
   Generate an ICS/OT OSINT monitoring runbook with daily, weekly, 
   monthly, and quarterly procedures. Include specific tools and data 
   sources: Google Alerts, Shodan, crt.sh, CISA ICS-CERT, 
   HaveIBeenPwned, NVD, CISA KEV. 
   
   Format as step-by-step procedures that a new team member could 
   follow with no prior context. Include estimated time for each 
   cadence.
   ```

2. **Customize to Environment:**
   - Edit generated runbook with organization-specific details: target domains, IP ranges, personnel lists, vendor products, alert destinations
   - Define roles: who owns each cadence?

3. **Define Minimum Viable Monitoring:**
   - If resources contract to near-zero, what are the 2--3 activities that absolutely must continue?

   **Prompt:**

   ```
   If I could only do 3 things per week for ICS/OT OSINT monitoring, 
   what should they be and why?
   ```

4. **Peer Review (if time allows):**
   - Exchange runbooks with a neighbor, identify gaps or unclear steps

**Output:** Operational runbook with cadenced procedures

---

### Summary & Next Steps (10 min)

Instructor-led wrap-up.

#### Remediation Prioritization Recap

Emphasize the hierarchy:
- **P0 -- Active Exploitation:** KEV-listed vulnerability on an exposed asset = immediate action (hours, not days). Example: FortiGate CVE-2025-59718 on an internet-facing admin interface.
- **P1 -- Critical:** Direct exposure + known exploit + safety/operational impact
- **P2 -- Urgent (1--2 weeks):** Remote access exposure + credential risk, or vulnerable edge device without confirmed exploitation
- **P3 -- Planned (30--90 days):** Information disclosure, configuration weaknesses, monitoring gaps

The baseline + monitoring program gives you the *visibility* to prioritize. Without it you're guessing.

#### What You're Leaving With (8 Artifacts)

1. Sector threat profile
2. External attack surface inventory
3. Personnel exposure inventory with role-based prioritization
4. Vulnerability correlation table with active-exploit flagging
5. Configured monitoring alerts (Google Alerts, CISA subscriptions)
6. Pull-based monitoring schedule
7. Consolidated baseline document
8. Operational runbook

#### Next Steps Beyond This Workshop

- **Response Playbooks:** Documented procedures for specific finding types (exposed remote access, breached credentials, critical vuln on exposed asset) -- these build on the runbook
- **Tabletop Exercises:** Validate playbooks before a real incident
- **Script Automation:** AI-assisted development of monitoring scripts for baseline comparison
- **Program Maturity:** Metrics, stakeholder reporting, integration with existing security workflows

#### Resources

- Workshop GitHub repository (all materials, templates, prompt library)
- AI Copilot Prompt Library (curated prompts from all modules)
- Tool reference list
- Vulnerability intelligence resource list

---

## Appendix Materials (GitHub Repo)

### A. AI Copilot Prompt Library

All prompts from all modules collected and organized by category:

**Discovery & Analysis:**
- Sector threat profile generation (M1)
- Domain/subdomain query generation (M2)
- Remote access technology identification (M2)
- Personnel role-based prioritization (M3)
- Attack scenario generation (M3)
- CPE identifier generation (M4)
- Vulnerability correlation and KEV checking (M4)
- Risk summary writing (M4)

**Monitoring & Operations:**
- Google Alert query generation (M5)
- Pull-based monitoring schedule creation (M5)
- Baseline gap analysis (M5)
- Runbook generation (M6)
- Minimum viable monitoring definition (M6)

### B. Templates

- Baseline document template (spreadsheet format)
- Personnel exposure inventory template
- Vulnerability correlation table template
- Runbook template (markdown)
- Pull-based monitoring checklist

### C. Tool Reference List

| Tool | URL | Purpose | Account Required |
|------|-----|---------|-----------------|
| crt.sh | https://crt.sh/ | Certificate transparency search | No |
| DNSDumpster | https://dnsdumpster.com/ | DNS enumeration | No |
| SecurityTrails | https://securitytrails.com/ | DNS/subdomain intelligence | Free tier available |
| Shodan | https://www.shodan.io/ | Internet-connected device search | Free tier available |
| Censys | https://search.censys.io/ | Internet-connected device search | Free tier available |
| HaveIBeenPwned | https://haveibeenpwned.com/ | Breach database search | No (domain search requires verification) |
| NVD | https://nvd.nist.gov/ | Vulnerability database | No |
| CISA KEV | https://www.cisa.gov/known-exploited-vulnerabilities-catalog | Actively exploited vulns | No |
| CISA ICS Advisories | https://www.cisa.gov/news-events/cybersecurity-advisories | ICS-specific advisories | No |
| Google Alerts | https://www.google.com/alerts | Keyword monitoring | Google account |

### D. Vulnerability Intelligence Resources

**Primary Sources:**
- CISA ICS-CERT Advisories: https://www.cisa.gov/news-events/cybersecurity-advisories
- CISA KEV Catalog: https://www.cisa.gov/known-exploited-vulnerabilities-catalog
- NVD: https://nvd.nist.gov/

**Vendor PSIRTs:**
- Fortinet FortiGuard PSIRT: https://fortiguard.fortinet.com/psirt
- Siemens ProductCERT: https://www.siemens.com/global/en/products/services/cert.html
- Schneider Electric PSIRT: https://www.se.com/ww/en/work/support/cybersecurity/security-notifications.jsp
- Rockwell Automation: https://www.rockwellautomation.com/en-us/trust-center/security-advisories.html
- ABB Cybersecurity: https://global.abb/group/en/technology/cyber-security/alerts-and-notifications

**Exploit Intelligence:**
- Exploit-DB: https://www.exploit-db.com/
- ICS Advisory Project: https://www.icsadvisoryproject.com/
- Nuclei Templates: https://github.com/projectdiscovery/nuclei-templates
- GitHub Advisory Database: https://github.com/advisories

---

## Project Structure for Claude Project / GitHub Repo

```
ot-osint-program-workshop/
+-- README.md                    # Workshop overview and quick start
+-- WORKSHOP_FRAMEWORK.md        # This document -- master reference
+-- index.html                   # GitHub Pages landing page
+-- modules/
|   +-- m1-threat-context.html
|   +-- m2-attack-surface.html
|   +-- m3-personnel-exposure.html
|   +-- m4-vulnerability-correlation.html
|   +-- m5-monitoring-alerting.html
|   +-- m6-runbook-development.html
|   +-- summary.html
+-- examples/
|   +-- nreca-domain-discovery.md
|   +-- nreca-personnel-analysis.md
|   +-- fortinet-vuln-correlation.md
|   +-- google-alerts-configuration.md
+-- templates/
|   +-- baseline-template.md
|   +-- personnel-inventory-template.md
|   +-- vuln-correlation-template.md
|   +-- runbook-template.md
|   +-- monitoring-checklist-template.md
+-- prompts/
|   +-- ai-copilot-prompt-library.md
+-- resources/
|   +-- tools.md
|   +-- vuln-intelligence-resources.md
|   +-- ai-tool-considerations.md
+-- css/
|   +-- style.css                # GitHub Pages styling
+-- img/
    +-- (workshop images)
```


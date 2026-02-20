---
layout: default
title: "Example: NRECA Domain Discovery"
---

# Worked Example: NRECA Domain Discovery

This example demonstrates the Module 2 external attack surface discovery workflow using NRECA (National Rural Electric Cooperative Association) as the target organization. All data shown is derived from publicly available sources.

**Related module:** [Module 2: External Attack Surface Discovery]({{ '/modules/m2-attack-surface' | relative_url }})

---

## Step 1: Certificate Transparency Search

**Tool:** [crt.sh](https://crt.sh/){:target="_blank" rel="noopener"}

**Query:** `%.electric.coop` and `%.cooperative.com`

The CT search reveals the domain structure. NRECA operates under multiple root domains:

| Domain | Purpose | Notes |
|--------|---------|-------|
| electric.coop | Public website (WordPress) | News, advocacy, public-facing |
| cooperative.com | Member portal (SharePoint) | Login required -- primary attack surface |
| nreca.coop | Email domain | Confirmed format: firstname.lastname@nreca.coop |
| nrecainternational.coop | International programs | Separate organizational site |

**Key finding:** The email domain (nreca.coop) differs from the public website domain (electric.coop). Searching only the website domain would miss all personnel breach exposure.

### CT Analysis Results

**Public-Facing / Content:**
- electric.coop -- primary public website
- www.electric.coop -- www redirect
- remagazine.cooperative.com -- RE Magazine content platform
- careers.electric.coop -- job postings and recruitment
- nrecainternational.coop -- international programs

**Member/Employee Portals (Login Required):**
- cooperative.com -- member portal (SharePoint-based)
- benefits.cooperative.com -- employee benefits enrollment
- resap.cooperative.com -- Rural Electric Safety Achievement Program
- ecba.cooperative.com -- Electric Cooperative Bar Association

**Wildcard Certificates:**
- `*.cooperative.com` -- covers all subdomains under cooperative.com
- `*.electric.coop` -- covers all subdomains under electric.coop

These wildcards mean CT logs undercount the actual subdomain footprint. DNS enumeration tools are required to find subdomains covered by these wildcards.

**Certificate Authorities:**
- DigiCert -- enterprise certificate management (primary domains)
- Let's Encrypt -- automated/free certs (some subdomains, may indicate cloud-hosted or developer-managed services)
- Sectigo -- specific portals

---

## Step 2: Subdomain Enumeration

**Tools:** [Subdomain Finder](https://subdomainfinder.c99.nl/){:target="_blank" rel="noopener"}, [DNSDumpster](https://dnsdumpster.com/){:target="_blank" rel="noopener"}, [SecurityTrails](https://securitytrails.com/){:target="_blank" rel="noopener"}

**Critical finding:** electric.coop returned only 2-3 subdomains. cooperative.com returned 100+ subdomains exposing authentication infrastructure, benefits systems, financial portals, staging environments, and deployment architecture. The member-facing domain is far richer for reconnaissance than the public website.

### Authentication / Identity

| Subdomain | Significance |
|-----------|-------------|
| okta.cooperative.com | Okta SSO portal. Reveals the organization uses Okta as its identity provider. High-value target: compromising SSO provides access to all federated applications |
| pingfed.cooperative.com | PingFederate identity federation server. Indicates a dual-IdP architecture (Okta + Ping) or migration between platforms |
| pingaccess.cooperative.com | PingAccess API security gateway. Controls access to web applications and APIs behind the Ping identity stack |

### Benefits / HR (High-Value PII Targets)

| Subdomain | Significance |
|-----------|-------------|
| benefits.cooperative.com | Primary benefits portal |
| beneficiaries.cooperative.com | Beneficiary designation (life insurance, retirement) |
| cobra.cooperative.com | COBRA benefits continuation |
| divorce.cooperative.com | Life event processing (highly sensitive personal data) |
| marriage.cooperative.com | Life event processing |
| newchild.cooperative.com | Life event processing |
| w2salary.cooperative.com | W-2 and salary data (tax documents, compensation) |
| retirement.cooperative.com | Retirement/pension management |

This cluster represents a massive PII exposure surface. Benefits systems typically contain SSNs, banking details, salary data, and family information.

### Financial / Compliance

| Subdomain | Significance |
|-----------|-------------|
| form990.cooperative.com | IRS Form 990 (nonprofit tax filings, financial data) |
| financialpower.cooperative.com | Financial services portal |
| invoicepreferences.cooperative.com | Invoice management (BEC targeting potential) |

### Staging / Test (Often Less Secured)

| Subdomain | Significance |
|-----------|-------------|
| stage.cooperative.com | Staging environment |
| stagesearch.cooperative.com | Staging search instance |
| test.community.cooperative.com | Test community platform |
| pae-ext-test.cooperative.com | PingAccess external test (identity infrastructure) |
| pfe-ext-test.cooperative.com | PingFederate external test (identity infrastructure) |

Identity infrastructure test instances (pae-ext-test, pfe-ext-test) are high-priority findings -- staging and test environments frequently have weaker authentication or default credentials.

### Infrastructure Architecture

**Blue/green deployment:** Extensive `blue.*` subdomain pattern (blue.benefits, blue.retirement, etc.) reveals blue/green deployment architecture, telling an adversary how the organization manages releases and where redundant infrastructure exists.

**IP clustering:** The majority of cooperative.com subdomains resolve to 74.127.88.162, suggesting centralized hosting or a load balancer. A small number resolve to different IPs, indicating cloud-hosted or externally managed services.

---

## Step 3: Remote Access Identification

**Tools:** [Shodan](https://www.shodan.io/){:target="_blank" rel="noopener"}, [Censys](https://search.censys.io/){:target="_blank" rel="noopener"}

Example documentation for a discovered remote access service:

| Field | Value |
|-------|-------|
| Hostname | vpn.example-coop.com |
| IP | 203.0.113.50 |
| Port | 443/TCP |
| Product | Fortinet FortiGate, FortiOS 7.4.6 |
| Certificate | DigiCert, expires 2026-09-15 |
| Function | SSL-VPN remote access for staff and vendors |
| Criticality | High -- primary remote access path to internal network |
| Zone | Internet-facing |

This finding connects directly to [Module 4]({{ '/modules/m4-vulnerability-correlation' | relative_url }}), where the product and version are correlated against vulnerability databases.

---

## Step 4: Google Dork Queries

Example queries generated for NRECA domains:

**Login Pages and Authentication Portals:**
- `site:cooperative.com inurl:login`
- `site:cooperative.com intitle:"sign in" OR intitle:"log in"`
- `site:electric.coop inurl:auth OR inurl:sso OR inurl:portal`

**Exposed Documents:**
- `site:electric.coop filetype:pdf "confidential" OR "internal use only"`
- `site:cooperative.com filetype:xlsx OR filetype:csv`

**VPN / Remote Access / OT References:**
- `"electric.coop" OR "cooperative.com" inurl:vpn OR inurl:remote`
- `site:electric.coop "SCADA" OR "EMS" OR "substation" OR "FortiGate"`

---

## Key Takeaway

Searching only electric.coop would have found 2-3 subdomains. Searching cooperative.com revealed authentication infrastructure, benefits/PII systems, financial portals, staging environments, and deployment architecture. **Always enumerate all known root domains.**

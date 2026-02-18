---
layout: default
title: Tool Reference
---

# Tool Reference

Browser-based OSINT tools used in the workshop. All tools work in a standard web browser -- no software installation required. Tools marked with "Free tier" require account creation but provide sufficient access for workshop activities at no cost.

## Discovery and Enumeration Tools

| Tool | URL | Purpose | Account Required | Used In |
|------|-----|---------|-----------------|---------|
| crt.sh | [crt.sh](https://crt.sh/){:target="_blank" rel="noopener"} | Certificate transparency search. Query certificate logs to discover subdomains and domain patterns | No | M2 |
| DNSDumpster | [dnsdumpster.com](https://dnsdumpster.com/){:target="_blank" rel="noopener"} | DNS enumeration and network mapping. Visual map of DNS records and subdomains | No | M2 |
| SecurityTrails | [securitytrails.com](https://securitytrails.com/){:target="_blank" rel="noopener"} | DNS history, subdomain intelligence, and WHOIS data. Historical DNS records reveal infrastructure changes | Free tier | M2 |
| Subdomain Finder | [subdomainfinder.c99.nl](https://subdomainfinder.c99.nl/){:target="_blank" rel="noopener"} | Subdomain enumeration with JSON export. Aggregates results from multiple sources | No | M2 |

## Exposure and Service Discovery Tools

| Tool | URL | Purpose | Account Required | Used In |
|------|-----|---------|-----------------|---------|
| Shodan | [shodan.io](https://www.shodan.io/){:target="_blank" rel="noopener"} | Internet-connected device search. Identifies exposed services, ports, products, and versions on target IP ranges | Free tier | M2, M5 |
| Censys | [search.censys.io](https://search.censys.io/){:target="_blank" rel="noopener"} | Internet-connected device search. Similar to Shodan with different data sources and query syntax | Free tier | M2, M5 |
| Shodan Monitor | [monitor.shodan.io](https://monitor.shodan.io/){:target="_blank" rel="noopener"} | Continuous monitoring alerts for Shodan results. Notifies when new services appear on monitored IP ranges | Free tier (limited) | M5 |

## Credential and Breach Tools

| Tool | URL | Purpose | Account Required | Used In |
|------|-----|---------|-----------------|---------|
| HaveIBeenPwned | [haveibeenpwned.com](https://haveibeenpwned.com/){:target="_blank" rel="noopener"} | Breach database search by email address. Shows which data breaches contain a given email | No | M3, M5 |
| HIBP Domain Search | [haveibeenpwned.com/DomainSearch](https://haveibeenpwned.com/DomainSearch){:target="_blank" rel="noopener"} | Domain-level breach search. Shows all breached email addresses for a verified domain | Domain verification required | M3, M5 |

## Vulnerability Intelligence Tools

| Tool | URL | Purpose | Account Required | Used In |
|------|-----|---------|-----------------|---------|
| NVD | [nvd.nist.gov](https://nvd.nist.gov/){:target="_blank" rel="noopener"} | National Vulnerability Database. CVE details, CVSS scores, CPE identifiers, and affected product versions | No | M4 |
| NVD CPE Search | [nvd.nist.gov/products/cpe/search](https://nvd.nist.gov/products/cpe/search){:target="_blank" rel="noopener"} | CPE identifier validation. Verify AI-generated CPE strings against the official CPE dictionary | No | M4 |
| CISA KEV | [cisa.gov/known-exploited-vulnerabilities-catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog){:target="_blank" rel="noopener"} | Known Exploited Vulnerabilities catalog. Confirmed actively exploited vulnerabilities with remediation deadlines | No | M4, M5 |
| CISA ICS Advisories | [cisa.gov/news-events/cybersecurity-advisories](https://www.cisa.gov/news-events/cybersecurity-advisories){:target="_blank" rel="noopener"} | ICS-specific security advisories. Vulnerability disclosures and mitigations for industrial control systems | No | M4, M5 |
| ICS Advisory Project | [icsadvisoryproject.com](https://www.icsadvisoryproject.com/){:target="_blank" rel="noopener"} | Curated ICS/OT advisory aggregator. Dashboard view of ICS advisories with search and filtering. Note: focuses on ICS vendors; does not cover IT infrastructure vendors like Fortinet or Cisco | No | M4 |

## Monitoring and Alerting Tools

| Tool | URL | Purpose | Account Required | Used In |
|------|-----|---------|-----------------|---------|
| Google Alerts | [google.com/alerts](https://www.google.com/alerts){:target="_blank" rel="noopener"} | Keyword-based web monitoring. Sends email notifications when new content matching your search terms appears | Google account | M5 |

## AI Clients

The workshop is AI-client agnostic. Use whichever AI assistant you have access to:

| Tool | URL | Notes |
|------|-----|-------|
| ChatGPT | [chat.openai.com](https://chat.openai.com/){:target="_blank" rel="noopener"} | OpenAI. Free tier available |
| Claude | [claude.ai](https://claude.ai/){:target="_blank" rel="noopener"} | Anthropic. Free tier available |
| Other AI assistants | Varies | Any AI client that accepts text prompts and returns structured analysis |

## Free Tier Limitations

Tools with free-tier accounts typically limit the number of queries per day or the amount of data returned. For workshop purposes, free tiers provide sufficient access. If you plan to use these tools operationally after the workshop, review each tool's pricing for your expected query volume.

| Tool | Free Tier Limit | Operational Consideration |
|------|----------------|--------------------------|
| Shodan | Limited searches per day, no API access | API access ($49/lifetime membership) needed for automated monitoring |
| Censys | 250 searches/month, limited API | API access needed for scripted checks |
| SecurityTrails | 50 queries/month | Sufficient for monthly pull-based checks |

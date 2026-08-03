# Discovery run — 2026-08-04

## Accepted for publication

1. **Stagehand** (`browserbase/stagehand`) — accepted as browser-agent automation SDK. Safety screened README, quickstart, package install path, credential setup, and intended use; published with disposable-site, env-file, and action-review warnings.
2. **NeMo Relay** (`NVIDIA/NeMo-Relay`) — accepted as agent lifecycle/observability/governance infrastructure. Safety screened README, package-manager install options, hook model, and warnings; published with sandbox-project and trace-privacy warnings.
3. **ClawMetry** (`vivekchand/clawmetry`) — accepted as local-first AI-agent observability. Safety screened README, pip install path, runtime adapters, hook commands, and export behavior; published with local-session privacy and hook-review warnings.
4. **Waveshare ePaper Display Dashboard** (`mendhak/waveshare-epaper-display`) — accepted as Raspberry Pi/e-paper maker dashboard. Safety screened README, dependency setup, API key/calendar sections, and no-auth caveat; published with config-secret, location, and owned-hardware warnings.
5. **Muximux** (`mescon/Muximux`) — accepted as homelab dashboard with explicit auth/onboarding. Safety screened README, Docker setup, setup-token flow, gateway/Docker features, and security documentation; published with LAN/VPN, auth-first, and gateway/Docker-control warnings.
6. **Microsoft MCP for Beginners** (`microsoft/mcp-for-beginners`) — accepted as beginner-friendly MCP curriculum. Safety screened README, module list, security sections, and hands-on lab framing; published with fake-data/local-credential and enterprise-account warnings.
7. **GitMCP** (`idosal/git-mcp`) — accepted as hosted documentation/code-context MCP bridge for public GitHub repos. Safety screened README, usage model, and `mcp-remote` setup; published with public-repo-first and private-repo data-path warnings.

## Rejected / deferred

- **Agent Rules** (`steipete/agent-rules`) — deferred. README says it is old mid-2025 material and points users to a newer repo; not worth publishing as current guidance.
- **Agent Scripts** (`steipete/agent-scripts`) — deferred. Useful personal agent-rules/scripts repository, but it is explicitly tailored to one user’s local workspace layout and would need adaptation before beginner publication.
- **Firecrawl MCP Server** (`firecrawl/firecrawl-mcp-server`) — deferred. Legitimate web/MCP tooling, but scraping/crawling and API/OAuth setup need tighter beginner-safe usage framing to avoid accidental policy/TOS or credential mistakes.
- **Unity MCP** (`IvanMurzak/Unity-MCP`) — deferred. Useful game-development automation, but it mutates Unity projects, installs editor tooling, and has many broad tools; needs a disposable-project recipe before recommending to beginners.
- **Embody** (`dylanroscover/Embody`) — deferred. Promising TouchDesigner MCP/externalization workflow, but it is creative-tool-specific and needs a small verified starter workflow before adding a public card.
- **PostHog** (`PostHog/posthog`) — deferred. Valuable analytics/AI observability platform, but default onboarding favors cloud signup or a remote shell deploy script; privacy/telemetry and safer install framing need deeper review.
- **Meshpoint** (`KMX415/meshpoint`) — deferred. Interesting LoRa/Meshtastic base-station project, but RF transmit settings, regional rules, channel PSKs, and hardware flashing make it too operational for a beginner card without regulatory framing.
- **Hyperbrowser MCP** (`hyperbrowserai/mcp`) — deferred. Browser automation MCP requires hosted browser API keys and can interact with webpages; needs a safer fake-site-only starter before publication.
- **Desktop Commander MCP** (`wonderwhy-er/DesktopCommanderMCP`) — deferred. It grants terminal and filesystem control to an MCP client; not appropriate as a beginner resource without strong sandbox and allowlist guidance.
- **Microsoft MCP catalog** (`microsoft/mcp`) — deferred. Official and useful, but many entries require Microsoft tenant/API access or write-capable enterprise integrations; safer to publish the beginner curriculum first.
- **pihole-dashboard** (`santoru/pihole-dashboard`) — deferred. Benign maker dashboard, but setup stores a Pi-hole password in config and installs a cron-driven updater; needs a secrets/cron-safe recipe before publication.

## Already present / inspected, not duplicated

- **FACT** (`fkie-cad/FACT_core`) — already in catalog as `FACT`.
- **ME Analyzer** (`platomav/MEAnalyzer`) — already in catalog as `ME Analyzer`.
- **NanoTDB** (`aymanhs/nanotdb`) — already in catalog as `NanoTDB`.
- **Inkycal** (`aceinnolab/Inkycal`) — already in catalog as `Inkycal`.

## Notes

- Inspected 20+ candidates via GitHub API and README fetches across AI-agent tooling, MCP, browser automation, homelab dashboards, Raspberry Pi/e-paper projects, LoRa hardware, observability, and firmware analysis.
- No malware, phishing, credential theft, exploit-pack, botnet, ransomware, piracy, fraud, spam, or harassment tooling was published.
- No secrets, tokens, API keys, credentials, personal phone numbers, or private config were added.
- No Hermes skills created this run; accepted workflows are useful resources, but skill creation would duplicate existing Hermes/MCP/observability/browser/homelab workflows or require deeper hands-on verification.

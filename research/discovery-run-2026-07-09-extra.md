# Discovery run — 2026-07-09 UTC extra

## Scope

Daily autonomous askhermie.dev discovery loop: Hermes/AI-agent tooling, automation, systems engineering, observability, homelab, static-site tooling, IoT/hardware, ESP32/Raspberry Pi, firmware analysis, and beginner-friendly labs.

## Candidates inspected

| Candidate | URL | Decision | Reason / safety screen |
|---|---|---|---|
| codegraph | https://github.com/optave/ops-codegraph-tool | Accepted | Active Apache-2.0 local CLI/MCP tool for code dependency graphs. README says fully local, no API keys/accounts required. Useful for safer AI code edits. Published card warns graph output reflects private source structure. |
| Postman MCP Server | https://github.com/postmanlabs/postman-mcp-server | Accepted | Official Postman MCP server with minimal/code/full modes and OAuth/API-key auth. Useful for API-agent workflows. Published card scopes first use to disposable workspaces and warns about environment secrets, tokens, internal URLs, and production examples. |
| Kuvasz | https://github.com/kuvasz-uptime/kuvasz | Accepted | Active AGPL self-hosted uptime/SSL monitor with status pages, notification channels, OTel/Prometheus export, and MCP server. Defensive/admin purpose. Published card warns about leaking internal service names and alert contacts. |
| systempi | https://github.com/WastelandSYS/systempi | Accepted | Active Raspberry Pi terminal monitoring dashboard. Read-only system-health learning tool. Published card warns screenshots/output can reveal hostnames, IPs, and hardware state. |
| Eneru | https://github.com/m4r1k/Eneru | Accepted | Active MIT UPS monitoring and shutdown orchestrator for NUT. Benign homelab resilience use, but high impact. Published card marks it advanced and warns it can shut down hosts/VMs/containers/remote systems. |
| esp32knife | https://github.com/BlackVS/esp32knife | Accepted | MIT ESP32 firmware dissection tool. Dual-use but acceptable when framed for owned/sample firmware. Published card warns firmware dumps can contain Wi-Fi credentials, tokens, calibration data, and identifiers. |
| Retype | https://github.com/retypeapp/retype | Accepted | Active docs/static-site generator for Markdown. Low-risk publishing tool. Published card warns to review generated docs for drafts, screenshots, private URLs, and config. |
| svelte-sitemap | https://github.com/bartholomej/svelte-sitemap | Accepted | Active MIT SvelteKit sitemap generator/Vite plugin. Low-risk static-site tooling. Published card warns sitemap output publicly enumerates URLs and must exclude private/draft/admin paths. |
| AgentSkillsHub | https://github.com/zhuyansen/agent-skills-hub | Deferred | Relevant AI-agent directory, but it aggregates 117k third-party agent skills/MCP servers. Needs deeper review of scoring/safety guarantees before recommending to beginners as a source of tools. |
| ServiceRadar | https://github.com/carverauto/serviceradar | Deferred | Legitimate network/IT monitoring platform, but includes distributed network mapping, SNMP/LLDP/CDP, BGP/BMP, mTLS/RBAC/SSO, Kubernetes deployment, and secrets. Needs dedicated beginner-safe deployment framing. |
| maintenant | https://github.com/kOlapsis/maintenant | Deferred | Useful all-in-one monitoring, but quickstart mounts Docker socket and includes Pro subscription/trial model. Needs deeper least-privilege/Docker-socket safety review before beginner publication. |
| GumCP | https://github.com/gumslone/GumCP | Deferred | Raspberry Pi dashboard is relevant, but features include SSH command execution, service/process controls, cron editing, API button secrets, package upgrades, and installer script. Too side-effectful for a beginner card today. |
| Pi-hole + Unbound + PiAlert Setup | https://github.com/TimInTech/Pi-hole-Unbound-PiAlert-Setup | Deferred | Defensive DNS stack, but one-click sudo installer modifies critical network/DNS services. Needs manual-step review and backup/rollback framing before publishing. |
| Teeny | https://github.com/yakkomajuri/teeny | Deferred | Simple static-site generator, but low recent maintainer signal and beta package. Retype/svelte-sitemap were clearer beginner picks today. |
| ESP32Marauder | https://github.com/justcallmekoko/ESP32Marauder | Rejected | ESP32 Wi-Fi/Bluetooth offensive toolkit. Rejected under the safety gate. |

## Published changes

Added 8 resource cards to `src/pages/resources.astro`:

- codegraph
- Postman MCP Server
- Kuvasz
- systempi
- Eneru
- esp32knife
- Retype
- svelte-sitemap

Updated broad resource group category arrays so the new cards render under existing reader-intent groups.

## Skill changes

Created local Hermes skill `codegraph-codebase-mapping` for safe, reusable codegraph usage by future sessions.

## Verification notes

Final cron report records Astro build, secret scan, commit, push, remote SHA, and live-site smoke check results.

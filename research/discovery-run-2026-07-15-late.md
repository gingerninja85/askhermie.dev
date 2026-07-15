# Discovery run — 2026-07-15 late UTC

## Scope

Daily autonomous askhermie.dev discovery loop: Hermes/AI-agent tooling, automation, systems engineering, observability, homelab, static-site tooling, IoT/hardware, firmware analysis, ESP32/Raspberry Pi, and beginner-friendly labs.

## Candidates inspected

| Candidate | URL | Decision | Reason / safety screen |
|---|---|---|---|
| h5i | https://github.com/h5i-dev/h5i | Accepted | Active Apache-2.0 repo, recent release/activity, focused on auditable workspaces for AI coding agents. Published with sandbox-repo first step and warnings about agent command execution, API-credit spend, recorded prompts/logs, provider keys, and diff review. |
| Rosetta | https://github.com/griddynamics/rosetta | Accepted | Active Apache-2.0 repo for context engineering and centralized AI-agent instructions. Published with privacy warning because shared instruction packs can contain internal architecture, URLs, standards, and guardrails exposed through CLI/MCP workflows. |
| Hwaro | https://github.com/hahwul/hwaro | Accepted | Active MIT Crystal static-site generator with docs, release signals, and a narrow benign publishing use case. Published with generated-output and theme/plugin review warning. |
| Render Engine | https://github.com/render-engine/render-engine | Accepted | Active MIT Python static-site generator with docs and PyPI-oriented install path. Published with isolated CLI install and generated-site privacy review warning. |
| Unraid MCP | https://github.com/jmagar/unraid-mcp | Accepted | Active MIT MCP server for Unraid GraphQL. Powerful but legitimate homelab/agent integration; published as advanced with read-only/lab-first advice and explicit warnings about NAS API keys, Docker/VM/storage state, and destructive operations. |
| Deco CMS / Studio | https://github.com/decocms/studio | Deferred | Active MIT AI-agent control plane, but it connects agents to OAuth tools and project workspaces. Needs deeper review of hosted/cloud sync, connection permissions, and secret handling before recommending to beginners. |
| WolfStack | https://github.com/wolfsoftwaresystemsltd/WolfStack | Deferred | Homelab/server management fit, but the README's primary install path pipes a remote script to sudo and logs in with Linux system credentials. No safer quick-start was obvious from README-level inspection, so not published. |
| Bindery | https://github.com/vavallee/bindery | Rejected | Ebook/audiobook automation through Usenet/torrents creates obvious piracy-abuse risk for a beginner catalog. Not appropriate for askhermie.dev. |
| ESP32 Marauder | https://github.com/justcallmekoko/ESP32Marauder | Rejected | Markets Wi-Fi/Bluetooth offensive functionality, including deauthentication/spamming themes. Offensive-primary wireless firmware is outside the safe publishing scope. |
| T-REX-FIRMWARE | https://github.com/abdallahnatsheh/T-REX-FIRMWARE | Rejected | README explicitly markets pocket offensive security firmware with Wi-Fi attacks, Evil Twin/captive portal, handshake capture, and “DISCOVER. ENUMERATE. COMPROMISE.” Not suitable for beginner recommendation. |
| Rogue Radar | https://github.com/ATOMNFT/Rogue-Radar | Deferred | Mixed wireless utility firmware with packet monitoring and detector features. Less clearly offensive than rejected ESP32 firmware, but legal/safety status is ambiguous enough that it needs deeper per-feature review before publication. |
| agent-bom | https://github.com/msaad00/agent-bom | Already present / inspected | Active AI/MCP/cloud posture scanner already exists in the catalog, so no duplicate card was added. |
| Pulse | https://github.com/rcourtman/Pulse | Already present / inspected | Active infrastructure monitoring dashboard already exists in the catalog, so no duplicate card was added. |

## Published changes

Added 5 new resource cards to `src/pages/resources.astro`:

- h5i
- Rosetta
- Hwaro
- Render Engine
- Unraid MCP

No group navigation changes were needed because all accepted cards used existing categories.

## Skill changes

No local Hermes skills created or updated. The accepted resources are useful catalog entries, but none warranted a new non-duplicative reusable Hermes skill without hands-on workflow verification.

## Verification notes

Final cron report records duplicate-name check, changed-file secret scan, Astro build, commit/push, remote SHA match, and live-site smoke check.

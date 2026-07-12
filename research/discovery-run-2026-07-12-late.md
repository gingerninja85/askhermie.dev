# Discovery run — 2026-07-12 UTC late

## Scope

Daily autonomous askhermie.dev discovery loop: Hermes/AI-agent tooling, automation, systems engineering, observability, homelab, static-site tooling, IoT/hardware, Raspberry Pi, firmware/hardware analysis, and beginner-friendly labs.

## Candidates inspected

| Candidate | URL | Decision | Reason / safety screen |
|---|---|---|---|
| Orca | https://github.com/stablyai/orca | Accepted | Active cross-platform agent orchestrator for parallel coding agents in isolated worktrees. Useful Hermes-adjacent workflow. Published with warnings about disposable branches, secret exposure, review, and no auto-merge. |
| GoModel | https://github.com/ENTERPILOT/GoModel | Accepted | Active Go AI gateway with provider routing and observability. README explicitly warns against command-line secrets. Published with env-file, prompt/header logging, key protection, and non-public-dashboard warnings. |
| Toolport | https://github.com/tsouth89/toolport | Accepted | Active local MCP gateway with lazy discovery, approvals, and quarantine/security framing. Useful for agent tool management. Published with MCP server, secret, destructive-call, and read-only-first warnings. |
| Marmot | https://github.com/marmotdata/marmot | Accepted | Active open-source data catalog with metadata/MCP/API surfaces. Useful for AI context governance. Published with non-sensitive sample-data, restricted MCP/API, and no production credentials in test warnings. |
| ShutHost | https://github.com/9SMTM6/shuthost | Accepted | Active LAN Wake-on-LAN and authenticated shutdown management. Benign homelab automation if scoped to owned machines. Published with LAN/VPN-only, auth, and denial-of-service safety warnings. |
| tuptime | https://github.com/rfmoz/tuptime | Accepted | Mature small system uptime-history CLI. Low-risk systems-learning utility. Published with note that exported uptime reports can reveal outage/maintenance patterns. |
| MagicMirror² | https://github.com/MagicMirrorOrg/MagicMirror | Accepted | Mature MIT Raspberry Pi smart-mirror/dashboard platform. Benign IoT/homelab learning fit. Published with module token/calendar/location/home-status privacy warnings. |
| Quartz | https://github.com/jackyzha0/quartz | Accepted | Active Markdown/digital-garden static-site generator. Good static publishing fit. Published with note-vault privacy and output-review warnings. |
| Quarkdown | https://github.com/iamgio/quarkdown | Accepted | Active Markdown-based publishing/typesetting system for docs, sites, papers, and presentations. Published with generated-output/private-draft/include warnings. |
| Primo | https://github.com/primocms/primo | Accepted | Active self-hosted visual CMS/static-site workflow with AI-agent-compatible file sync. Published with CMS auth, backups, user/media/content privacy, and output-review warnings. |
| Gogs | https://github.com/gogs/gogs | Accepted | Mature lightweight self-hosted Git service, Raspberry Pi-capable. Published with source-code/secrets/webhook/account exposure, patching, and private-lab warnings. |
| bex | https://github.com/bex-co/bex | Deferred | Interesting AI-native self-hosted PaaS, but operationally heavy: Kubernetes/Cluster API, auth, MCP, API keys, domains/TLS, and infra side effects. Needs deeper deployment-risk framing before beginner recommendation. |
| ESP32 Bit Pirate | https://github.com/geo-tp/ESP32-Bit-Pirate | Deferred | Useful hardware-hacking/learning project, but supports sniffing/sending across wired, Wi-Fi, Bluetooth, Sub-GHz, and RFID protocols. Too easy to misuse without a dedicated authorized-device safety frame. |
| WROLPi | https://github.com/lrnselfreliance/wrolpi | Deferred | Potentially useful off-grid Raspberry Pi library, but full README/install and content licensing/privacy scope need deeper review before recommending. |
| Code Assistant | https://github.com/stippi/code-assistant | Deferred | Relevant coding assistant/MCP/ACP candidate, but broad autonomous-code surface. Deferred pending deeper execution, permissions, and license review. |
| comfyui-mcp | https://github.com/artokun/comfyui-mcp | Deferred | Creative local-MCP fit, but large tool surface, model/custom-node management, and graph-editing side effects need deeper review before beginner recommendation. |

## Published changes

Added 11 resource cards to `src/pages/resources.astro`:

- Orca
- GoModel
- Toolport
- Marmot
- ShutHost
- tuptime
- MagicMirror²
- Quartz
- Quarkdown
- Primo
- Gogs

Updated reader-intent group category arrays so the new cards render under existing grouped sections.

## Skill changes

No local Hermes skills created or updated. The accepted items are useful catalog entries, but none introduced a non-duplicative, safe, repeatable workflow that is better preserved as a local skill today. Toolport may deserve a future skill after hands-on install verification.

## Verification notes

Final cron report records Astro build, secret scan, commit, push, remote SHA, and live-site smoke check results.

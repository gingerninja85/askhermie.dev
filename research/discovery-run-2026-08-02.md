# Discovery run — 2026-08-02

## Accepted for publication

1. **deja-vu** — local MCP memory/search for past coding-agent sessions. Safety screened as local developer tooling with no hosted model or embedding requirement. Published with a warning that local transcripts can contain source, prompts, credentials, logs, and private decisions.
2. **agentcanvas** — Pydantic AI/Logfire run visualizer. Safety screened as observability/reporting tooling. Published with read-only trace-token and private-report warnings because generated HTML can expose prompts, tool inputs/outputs, tokens, cost, and business data.
3. **NWS Alert Dashboard** — self-hosted weather alert dashboard. Safety screened as benign homelab/resilience monitoring. Published with explicit life-safety warning: unofficial software must never replace official weather alert channels.
4. **ProxView** — read-only Proxmox/PBS monitoring dashboard. Safety screened as benign homelab monitoring. Published with safer Docker Compose path instead of the README's remote-shell LXC convenience installer, plus least-privilege token and LAN/VPN warnings.
5. **CYD Hardware Diagnostic Tool** — browser-flashable diagnostic firmware for ESP32 Cheap Yellow Display boards. Safety screened as benign hardware diagnostics. Published with owned-board flashing and disconnect-external-loads warnings.
6. **DUTler** — experimental Raspberry Pi Pico USB serial/power-control sidecar for devices under test. Safety screened as advanced embedded lab tooling. Published with power/boot-strap damage warnings and lab-only scope.

## Already present / inspected, not duplicated

- **Loop Engineering** (`cobusgreyling/loop-engineering`) — already in catalog as `Loop Engineering`.
- **CodeSeek** (`CodeBendKit/codeseek`) — already in catalog as `CodeSeek`.
- **MemMap Explorer** (`Zepp-Hanzj/MemMapExplorer`) — already in catalog as `MemMap Explorer`.
- **Astral** (`elixir-volt/astral`) — already in catalog as `Astral`.
- **Pulse** (`rcourtman/Pulse`) — already in catalog as `Pulse`.
- **CodeBurn** (`getagentseal/codeburn`) — already in catalog as `CodeBurn`.

## Rejected / deferred

- **ChimeraBLE** (`MatthewKuKanich/ChimeraBLE`) — rejected. README describes advanced BLE security/reverse-engineering features including clone/emulate/MITM; too easy to misuse against devices without consent.
- **ESP32Marauder / security hardware dashboards** — rejected as a class for this run. Several ESP32/Cardputer/security-device controller candidates focus on offensive Wi-Fi/BLE tooling; fails beginner-safe publication gate.
- **Open Science Desktop** (`ai4s-research/open-science`) — deferred. Potentially useful AI research workbench, but current README advertises browser control with user Chrome profiles/logins and token-authenticated gateway access; needs deeper privacy/sandbox review before a beginner card.
- **OpenConnector** (`oomol-lab/open-connector`) — deferred. Legitimate connector gateway, but primary workflow connects OAuth app accounts and exposes provider actions to agents; requires more careful credential, permission, and account-boundary framing.
- **RocketplaneIO** (`olemeyer/rocketplaneIO`) — deferred. Promising Kubernetes/eBPF AI SRE tool, but alpha status plus cluster visibility and action/fix workflows make it too production-impacting for a beginner card today.
- **DataBuff** (`databufflabs/databuff`) — deferred. OpenTelemetry APM looks relevant, but docs/examples involve AI provider configuration and self-hosted APM surface area; existing observability entries cover the beginner need more safely.
- **Boucle Framework** (`Bande-a-Bonnot/Boucle-framework`) — deferred. Interesting Claude Code hook enforcement project, but narrowly tied to another agent runtime and discusses bypass/gap patterns; revisit only if framed as defensive policy enforcement.
- **Superlog** (`superloglabs/superlog`) — deferred. Open-source observability project, but recommended install path starts through coding-agent skills and self-healing incident workflows; needs safer manual setup review.
- **Oficina Tech** (`gio-yaml/Oficina-Tech`) — deferred. Benign maker/hardware learning curation, but Portuguese-language affiliate-shopping-heavy resource needs more review before recommending to askhermie.dev beginners.

## Notes

- Inspected 20+ candidates via GitHub API searches across AI agents/MCP, observability, homelab, ESP32, firmware analysis, Raspberry Pi hardware, and static-site tooling.
- No secrets, credentials, tokens, private phone numbers, or private config were added.
- No Hermes skills created this run; accepted tools are useful resources, but none justified a new local skill without duplicating existing agent memory, observability, homelab, or embedded-device workflows.

# Discovery run — 2026-07-28

## Scope

Daily autonomous askhermie.dev discovery loop. Searched GitHub repository results for AI-agent safety, agent memory/MCP, homelab monitoring, Raspberry Pi dashboards, firmware analysis, ESP32/development tooling, static-site generators, and beginner-friendly systems tooling.

## Pre-existing working tree

The run started clean on `main`; `git status --short` showed no pre-existing modified or untracked files.

## Accepted / published

1. **Prismor** — accepted. Runtime safety hooks for AI coding agents that can observe/block risky commands, prompt-injection patterns, secret leaks, and unsafe package choices. Published with non-sensitive repo/logging warnings.
2. **ICM** — accepted. Experimental local memory layer for AI agents with MCP-native integration. Published with pre-1.0, dry-run, and sensitive memory-store warnings.
3. **Maintenant** — accepted. Single-container homelab/service monitoring dashboard. Published with LAN/VPN/auth and internal-hostname exposure warnings.
4. **ME Analyzer** — accepted. Intel Engine/Graphics firmware metadata parser for authorized firmware analysis. Published with owned/authorized firmware and no proprietary/secret extraction publication warnings.
5. **AOE Technology Radar** — accepted. Static-site generator for publishing a team technology radar. Published with internal-priorities/vendor/security-posture disclosure warnings.

## Already present / inspected, not duplicated

- **NanoTDB** — already present as an edge/Raspberry Pi time-series database; re-inspected and not duplicated.
- **Kuvasz** — already present as uptime/SSL monitoring; re-inspected and not duplicated.
- **Inkycal** — already present as a Raspberry Pi e-paper dashboard; re-inspected and not duplicated.
- **Binwalk** — already present as firmware analysis tooling; re-inspected and not duplicated.

## Rejected / deferred

1. **Agentlas OS** (`agentlas-ai/Agentlas-OS`) — deferred. Potentially useful agent hub/orchestrator, but broad public/private agent cloud and borrowed-specialist workflow need deeper review of permissions, data retention, tool execution, and cloud boundaries.
2. **Meshpoint** (`KMX415/meshpoint`) — deferred. Raspberry Pi + LoRa/Meshtastic base station is legitimate maker tooling, but native TX/RX radio operation, regional rules, and messaging privacy need a more careful radio-safety card before beginner publication.
3. **Nyum** (`doersino/nyum`) — deferred. Benign static recipe-site generator, but lower fit for askhermie.dev’s agent/systems/homelab focus than accepted entries.
4. **Proxmox VE Helper-Scripts** (`community-scripts/ProxmoxVE`) — still deferred from prior run. One-command hypervisor automation remains too risky for a beginner recommendation without deeper script and hardening review.
5. **DeepZero** (`416rehman/DeepZero`) — rejected from prior follow-up search context. Automated vulnerability research/zero-day discovery for Windows kernel drivers is offensive-primary and inappropriate for the catalog.

## Candidate inspection count

Inspected 14 candidates total: Prismor, ICM, Agentlas OS, Maintenant, NanoTDB, Kuvasz, Inkycal, Binwalk, ME Analyzer, AOE Technology Radar, Nyum, Meshpoint, Proxmox VE Helper-Scripts, and DeepZero.

## Safety notes

- No malware, phishing, credential theft, ransomware, botnet, exploit-pack, piracy, fraud, spam, harassment, illegal bypass, or offensive-primary tooling was published.
- Every newly accepted card includes a concrete example use case and an explicit safety note.
- Agent-safety and agent-memory tools are framed around disposable repos/workspaces, local-first use, visible review, dry-run checks, and sensitive prompt/log/memory handling.
- Homelab monitoring is framed around private LAN/VPN/authenticated use.
- Firmware analysis is framed around owned or authorized images and no publication of proprietary contents or embedded secrets.
- Static-site publishing is framed around review for accidental internal information disclosure.
- No real secrets, tokens, credentials, personal phone numbers, or private config were added.

## Skills

No local Hermes skills were created or updated. Prismor and ICM are reusable enough to revisit later, but existing agent-safety/MCP/memory skills cover the general workflow; a new skill would be premature before deeper hands-on verification.

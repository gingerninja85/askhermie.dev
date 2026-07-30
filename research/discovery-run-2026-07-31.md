# Discovery run — 2026-07-31

## Scope
Daily autonomous askhermie.dev discovery loop. Sources inspected: GitHub repository search across AI agents, MCP, observability, homelab, ESP32, firmware analysis, static-site tooling, and Raspberry Pi buckets; README files via GitHub API/raw content; repository metadata including license, stars, open issues, creation/pushed dates; install/start paths; and limited issue/reputation keyword searches until unauthenticated GitHub issue-search rate limiting.

## Accepted and published

1. **AMFS** — AI agent memory / MCP
   - Repo: https://github.com/raia-live/amfs
   - Signals: Apache-2.0 license, active repo, low open issue count, PyPI/npm packaging, README frames branches/diffs/rollback for agent memory rather than offensive use.
   - Install/start path published: `python3 -m pip install amfs` with a synthetic in-memory demo only.
   - Safety note: agent memory can preserve prompts, decisions, repo names, logs, business context, and personal data; start synthetic and review retention/visibility/sync.

2. **Knowledge RAG** — AI agent memory / MCP
   - Repo: https://github.com/lyonzin/knowledge-rag
   - Signals: MIT license, active repo, low open issue count, README emphasizes local-only indexing, no external servers, no API keys, and MCP use for Claude Code.
   - Install/start path published: `python3 -m pip install knowledge-rag` plus official MCP-docs follow-up.
   - Safety note: local indexes still contain private code/documents/filenames/embeddings; keep indexes private and start with disposable data.

3. **AgentGlass** — AI agent run inspection
   - Repo: https://github.com/SirAllap/agentglass
   - Signals: MIT license, active repo, fabricated live demo, local seed-demo path before global hook installation, useful benign inspection/approval workflow.
   - Install/start path published: shallow clone plus `python3 hooks/seed_demo.py`, avoiding global hook installation as the first step.
   - Safety note: dashboards/hooks can capture prompts, files, commands, diffs, terminals, and secrets; understand storage/access before installing hooks globally.

4. **Coroot Node Agent** — Observability collector
   - Repo: https://github.com/coroot/coroot-node-agent
   - Signals: Apache-2.0 license, mature repo, Prometheus exporter/eBPF observability focus, README points to official Coroot docs.
   - Install/start path published: docs-only/pin-version guidance rather than a privileged one-liner.
   - Safety note: eBPF node agents need elevated host visibility and may expose process, network, container, cloud metadata, and service topology.

5. **Magic Frame** — Raspberry Pi photo frame
   - Repo: https://github.com/jeremiaa/magic-frame
   - Signals: active repo, self-hosted/no-cloud positioning, private home-display use case, Docker/deploy docs available.
   - Install/start path published: shallow clone and README/deploy-doc review before running any installer.
   - Safety note: home dashboards can expose calendars, photos, rooms, routines, Home Assistant state, and local hostnames; keep LAN/VPN-only.

6. **OpenSpool** — ESP32 projects
   - Repo: https://github.com/spuder/OpenSpool
   - Signals: active repo, practical ESP32/RFID 3D-printer filament workflow, docs recommend browser-based flasher, benign maker-lab use.
   - Install/start path published: browser flasher docs link rather than shell flashing commands.
   - Safety note: printer IPs, serial numbers, LAN access codes, and Wi-Fi credentials are sensitive; keep them out of screenshots, repos, and shared configs.

## Rejected or deferred

- **LoopX** — deferred. Relevant agent-loop state kernel and MIT-licensed active repo, but current newcomer path prominently uses a raw remote `curl | bash` no-clone installer and automation/heartbeat state. Needs a safer package-manager/manual path before a beginner card.
- **GumCP** — deferred. Useful Raspberry Pi dashboard, but it manages GPIO, systemd services, processes, SSH execution, command buttons, and an HTTP API, with `sudo`/Apache/PHP install steps. Too much device-control blast radius for a beginner card without hands-on hardening review.
- **hal0** — deferred. Relevant self-hosted AI inference appliance, Apache-2.0, but one-command/self-update/systemd/Podman control plane and Hugging Face token setup need deeper secret-handling and network-binding review.
- **Snakie** — deferred. Interesting MicroPython IDE, but no clear license metadata and very high open issue count for a young repo. Wait for licensing/stability clarity.
- **AntiHunter** — rejected. ESP32 perimeter-defense firmware; name/positioning and wireless/security-adjacent purpose are too ambiguous for beginner publication.
- **padspanHA** — rejected. BLE room-presence tracking system; useful home automation concept, but fine-grained presence tracking creates privacy/surveillance risk for a public beginner card.
- **ios-26-activation-research** — rejected. Activation-lock and firmware vulnerability research with bypass-adjacent implications; not suitable for askhermie.dev.
- **sony-vp-extract** — rejected. Decrypts/extracts proprietary Sony voice packs with an extracted AES key path; ambiguous legal/safety status.

## Already present / inspected, not duplicated

- **Prismor** — already present.
- **Pyrrha** — already present.
- **Marmite** — already present.
- **Mnemo Cortex** — already present.

## Candidate count

Inspected 18 candidates total: 6 published, 4 already present, 8 rejected/deferred.

## Notes

- No local Hermes skills created or updated. The accepted tools are useful resources, but none justified a new reusable local Hermes skill today without hands-on workflow validation, and several overlap existing agent/memory/observability/IoT skill territory.
- GitHub issue/reputation keyword search succeeded for AMFS and Knowledge RAG, then hit unauthenticated search rate limiting. README/metadata review continued and remaining publish decisions stayed conservative.
- Existing catalog debt remains: pre-existing duplicate resource names for `Eneru`, `MemMap Explorer`, and `LILYGO Spark`; this run introduced no new duplicate names.

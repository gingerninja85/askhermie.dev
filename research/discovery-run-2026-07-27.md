# Discovery run — 2026-07-27

## Scope

Daily autonomous askhermie.dev discovery loop. Searched GitHub repository results across AI-agent tooling, observability, homelab monitoring, ESP32 / hardware telemetry, firmware analysis, Raspberry Pi / Home Assistant tooling, MCP servers, and static-site tooling.

## Pre-existing working tree

The run started clean on `main`; `git status --short` showed no pre-existing modified or untracked files.

## Accepted / published

1. **Serial-Studio** — accepted. Hardware telemetry dashboard for serial, BLE, MQTT, Modbus, CAN bus, and related device streams. Published with owned-device, authorized-bus, and private-telemetry-log warnings.
2. **Langwatch** — accepted. LLM/agent tracing, evaluation, and monitoring platform. Published with warnings that traces can contain prompts, retrieved documents, tool arguments, user text, and accidentally pasted secrets.
3. **OpenSRE** — accepted. Public-alpha framework for building AI SRE agents over existing monitoring and operations tools. Published with read-only sandbox-first guidance and warnings about infrastructure metadata and write-capable tools.
4. **Cilium** — accepted. eBPF-based Kubernetes networking, security, and observability stack. Published with lab-first guidance and warnings that cluster networking changes can break workloads.
5. **EMBArk** — accepted. Web-based environment for organizing firmware analysis with EMBA. Published with warnings about proprietary firmware, embedded credentials, keys, certificates, serial numbers, and private reports.
6. **OWASP Firmware Security Testing Methodology** — accepted. Defensive/reference methodology for staged firmware security assessment. Published with owned-device, authorized-assessment, and intentionally vulnerable training image boundaries.

## Already present / inspected, not duplicated

- **GoModel** — already present as an AI gateway; re-inspected from 2026 observability search results and not duplicated.
- **ServiceRadar** — already present as network management; re-inspected from homelab search results and not duplicated.
- **FACT** — already present as a firmware analysis platform; re-inspected via `fkie-cad/FACT_core` search result and not duplicated.
- **Pyrrha** — already present as firmware cartography; re-inspected and not duplicated.
- **Orca** — already present as an AI agent orchestrator; re-inspected and not duplicated.
- **MCP Registry**, **ToolHive**, **MCP Toolbox for Databases**, **Node-RED**, **Bytebase**, **VictoriaMetrics**, and **Kestra** — already present from prior catalog growth; re-inspected from MCP/static-site/automation-adjacent searches where applicable and not duplicated.

## Rejected / deferred

1. **DeepZero** (`416rehman/DeepZero`) — rejected. Automated vulnerability research for Windows kernel drivers and zero-day discovery; offensive-primary and not appropriate for beginner-facing publication.
2. **RuView** (`ruvnet/RuView`) — rejected. Markets Wi-Fi sensing for people, vital signs, and presence including through walls; privacy-sensitive surveillance risk is too high for this catalog.
3. **Proxmox VE Helper-Scripts** (`community-scripts/ProxmoxVE`) — deferred. Potentially useful homelab automation, but the value proposition centers one-command installs on hypervisors; needs deeper install-script and hardening review before beginner recommendation.
4. **LLM Gateway** (`theopenco/llmgateway`) — deferred. Useful LLM routing/usage analytics, but overlaps current AI gateway entries; needs deeper secret-handling and self-hosting review before adding another gateway card.
5. **Home Assistant Core** (`home-assistant/core`) — deferred. Strong fit, but large ecosystem and install choices require a better beginner card than a rushed cron entry.
6. **Sveltia CMS** (`sveltia/sveltia-cms`) — deferred. Good static-site CMS candidate, but needs deeper review of auth, Git provider setup, and where secrets/config live.
7. **Agenvoy** (`agenvoy/Agenvoy`) — deferred. Personal agent that writes and repairs its own tools; broad autonomy claims need deeper safety review before recommending.
8. **agent-teams-ai** (`777genius/agent-teams-ai`) — deferred. Multi-agent team platform with many model providers and autonomous behavior; needs deeper review of permissions, tool execution, and data boundaries.
9. **jcodemunch-mcp** (`jgravelle/jcodemunch-mcp`) — deferred. Potentially useful code-retrieval MCP server, but needs specific inspection of indexing boundaries and GitHub data handling before publication.
10. **Home Assistant Powercalc** (`bramstroker/homeassistant-powercalc`) — deferred. Benign-looking Home Assistant integration, but too narrow for this run compared with higher-signal accepted entries.

## Candidate inspection count

Inspected 27 candidates total: Serial-Studio, OpenSRE, Langwatch, Cilium, Proxmox VE Helper-Scripts, RuView, EMBArk, EMBA, OWASP Firmware Security Testing Methodology, LLM Gateway, GoModel, ServiceRadar, FACT, Pyrrha, Orca, MCP Registry, ToolHive, MCP Toolbox for Databases, Node-RED, Bytebase, VictoriaMetrics, Kestra, Home Assistant Core, Sveltia CMS, Agenvoy, agent-teams-ai, and jcodemunch-mcp.

## Safety notes

- No malware, phishing, credential theft, ransomware, botnet, exploit-pack, piracy, fraud, spam, harassment, illegal bypass, or offensive-primary tooling was published.
- Every newly accepted card includes a concrete example use case and an explicit safety note.
- Agent/SRE/LLM observability tools are framed around sandboxing, read-only first runs, local or restricted access, and careful handling of prompts, traces, and infrastructure metadata.
- Firmware and hardware tools are framed around owned devices, authorized images/buses, lab VMs, private reports/logs, and no committed credentials.
- No real secrets, tokens, credentials, personal phone numbers, or private config were added.

## Catalog debt observed

The resource-name duplicate check still reports pre-existing duplicate names unrelated to this run: `Eneru`, `MemMap Explorer`, and `LILYGO Spark`. No newly introduced duplicate resource names remain.

## Skills

No local Hermes skills were created or updated. The accepted resources are safe catalog entries, but this run did not identify a safe, non-duplicative, repeatedly executable workflow that clearly justified a new local skill over existing observability, MCP, Kubernetes, firmware, embedded, and systems skills.

# Discovery run — 2026-08-09

## Accepted for publication

1. **Microsoft MarkItDown** (`microsoft/markitdown`) — accepted as a benign document-to-Markdown utility useful for agent-readable inputs. Safety screened GitHub metadata, README warning about process privileges, MIT license, install path, and token/shell keyword hits; published with non-sensitive-document, malicious-file, and agent-ingestion warnings.
2. **FastMCP** (`jlowin/fastmcp`) — accepted as a Python MCP server/client framework. Safety screened README, Apache-2.0 license, active maintenance, PyPI install path, and tool-exposure surface; published with read-only-first and no-hard-coded-secrets warnings.
3. **smolagents** (`huggingface/smolagents`) — accepted as a compact Hugging Face agent framework. Safety screened README, Apache-2.0 license, code-agent/tool behavior, install path, and token/bypass/hack keyword hits; published with sandbox, toy-prompt, and credentials warnings.
4. **Mirage** (`strukto-ai/mirage`) — accepted as an AI-agent virtual filesystem layer. Safety screened README, Apache-2.0 license, project positioning, active maintenance, and token keyword hit; published with least-privilege mount and credential-store exposure warnings.
5. **Node Exporter** (`prometheus/node_exporter`) — accepted as a Prometheus machine-metrics exporter. Safety screened README, Apache-2.0 license, official Prometheus project, Docker image path, and metrics-exposure implications; published with private-network/auth/firewall warnings.
6. **The Embedded Rust Book** (`rust-embedded/book`) — accepted as a beginner-friendly embedded systems learning resource. Safety screened README, Apache-2.0 license, docs-only scope, active project status, and hardware-control implications; published with simulator/LED-only and high-current-load warnings.
7. **mold** (`rui314/mold`) — accepted as a systems build-performance linker. Safety screened README, MIT license, package install path, and build-chain implications; published with branch/test-suite/release-artifact warnings.

## Already present / inspected, not duplicated

- **Orca** (`stablyai/orca`) — already in catalog as `Orca`; inspected again from AI-agent tooling search results.
- **Pulse** (`rcourtman/Pulse`) — already in catalog as `Pulse`; inspected again from homelab monitoring search results.
- **FACT** (`fkie-cad/FACT_core`) — already in catalog as `FACT`; inspected again from firmware analysis search results.
- **ME Analyzer** (`platomav/MEAnalyzer`) — already in catalog as `ME Analyzer`; inspected again from firmware analysis search results.

## Rejected / deferred

- **Suna** (`kortix-ai/suna`) — deferred. It may be useful as an AI management system, but GitHub license metadata returned `NOASSERTION` and the broad automation surface needs deeper review before beginner publication.
- **Activepieces** (`activepieces/activepieces`) — deferred. Useful workflow automation, but already present in the catalog as `Activepieces`; its current GitHub license metadata returned `NOASSERTION`, so no duplicate or update was made.
- **OmniRoute** (`diegosouzapw/OmniRoute`) — deferred. AI gateway projects handle provider credentials and routing; needs a narrower secrets-handling review before recommending to beginners.
- **ProxMenux** (`MacRimi/ProxMenux`) — deferred. Proxmox post-install/backup scripts can make privileged host changes; needs a lab-only, snapshot-first recipe before publication.
- **Hydro0x01** (`40rbidd3n/Hydro0x01`) — deferred. Benign-looking IoT hydroponics project, but it controls physical systems; too niche and safety-dependent for a general beginner card without hardware-specific fail-safes.
- **HomeDockOS** (`BansheeTech/HomeDockOS`) — deferred. Home-server OS/app-store tooling is broad and privileged; license metadata returned `NOASSERTION` and install scope is too large for a quick safe card.
- **pi-hosted** (`novaspirit/pi-hosted`) — deferred. Raspberry Pi Docker app templates are useful, but repository license metadata was absent and stack deployment can expose services if copied blindly.
- **Beyla** (`grafana/beyla`) — deferred. Legitimate eBPF/OpenTelemetry tool, but kernel-level observability and secret/credential README hits make it better suited for an advanced recipe later.
- **Redpanda Console** (`redpanda-data/console`) — deferred. Useful Kafka/Redpanda UI, but repository license metadata was absent and data-stream UIs can expose sensitive message payloads.
- **MicroPython Stubber** (`Josverl/micropython-stubber`) — deferred. Likely benign developer tooling, but license metadata returned `NOASSERTION`; revisit if a MicroPython type-checking track is added.
- **Wokwi for VS Code** (`wokwi/wokwi-vscode`) — rejected for this run because the probed GitHub repository URL returned 404; no publication without a verified canonical source.
- **SkyWalking** (`apache/skywalking`) — deferred. Legitimate Apache APM project, but the current catalog already has multiple observability stacks and SkyWalking needs a complete beginner-safe local demo to avoid a generic card.

## Notes

- Inspected 24 candidates across AI-agent frameworks, MCP tooling, document conversion, homelab monitoring, observability exporters, embedded learning, firmware analysis, Raspberry Pi/home-server tooling, and build systems.
- No malware, phishing, credential theft, exploit-pack, botnet, ransomware, piracy, fraud, spam, or harassment tooling was published.
- No secrets, tokens, API keys, credentials, personal phone numbers, private config, or cron changes were added.
- No Hermes skills created this run; FastMCP already has an existing Hermes skill, and the other accepted entries are public-resource cards rather than novel reusable Hermes procedures.

# Discovery run — 2026-08-27

## Accepted for publication

1. **MCPJam Inspector** (`MCPJam/inspector`) — accepted as benign MCP testing/evaluation tooling. Safety screened README, hosted/local quickstart, npm install path, OAuth/debugging surface, JSON-RPC visibility, API-key mentions, and MCP permission risks. Published with read-only/demo-server and localhost/private-key warnings.
2. **Radar** (`skyhook-io/radar`) — accepted as benign Kubernetes inspection UI with MCP support. Safety screened README, release/activity, local single-binary model, cluster-read scope, MCP server surface, and kubeconfig risk. Published with least-privilege kubeconfig and no-broad-write-agent warnings.
3. **mex** (`mex-memory/mex`) — accepted as benign repo-local AI-agent memory/code-graph tooling. Safety screened README, npm setup path, generated Markdown/wiki behavior, telemetry statement, and repo-content privacy risks. Published with generated-file review and secret-commit warnings.
4. **agentacct** (`mikehasa/agentacct`) — accepted as benign local-first coding-agent work/cost inspection. Safety screened README, PyPI/pipx install path, macOS app note, local-session-file scope, token/API-key mentions, and no-login/no-telemetry claims. Published with local-dashboard/export sensitivity warnings.
5. **Scanopy** (`scanopy/scanopy`) — accepted as benign network documentation/visualization for owned networks. Safety screened README, Docker Compose self-host path, scan/diagram purpose, hosted demo/cloud option, network-inventory sensitivity, and install method. Published with owned-network and private-map warnings.
6. **Doberman Core** (`DobermanCore/Doberman-Core`) — accepted as benign AI-agent runtime guardrail tooling. Safety screened README, PyPI install path, alpha/status signals, shell/MCP/tool-call gating scope, telemetry note, and limitation language. Published with test-workspace and no-perfect-detection warnings.

## Rejected / deferred / already present

- **OpenTelemetry eBPF Instrumentation** (`open-telemetry/opentelemetry-ebpf-instrumentation`) — already present / inspected; not duplicated.
- **Future AGI** (`future-agi/future-agi`) — already present / inspected; not duplicated.
- **ServiceRadar** (`carverauto/serviceradar`) — already present / inspected; not duplicated.
- **Velxio** (`davidmonterocrespo24/velxio`) — already present / inspected; not duplicated.
- **BLE Scale Sync** (`KristianP26/ble-scale-sync`) — already present / inspected; not duplicated.
- **jCodeMunch MCP** (`jgravelle/jcodemunch-mcp`) — deferred. Relevant code-retrieval MCP server, but the README contains unusually strong cost-saving/telemetry claims and should get a deeper install/privacy review before a beginner card.
- **KSail** (`devantler-tech/ksail`) — deferred. Relevant Kubernetes SDK/MCP project, but it touches cluster creation, GitOps, secrets, and cloud providers; needs a narrower least-privilege lab review before publication.
- **Aura** (`mezmo/aura`) — deferred. SRE agent platform aimed at production incident workflows; powerful enough to need deeper guardrail/integration review before recommending to beginners.
- **Langfuse MCP** (`avivsinai/langfuse-mcp`) — deferred. Useful observability bridge, but it necessarily handles Langfuse credentials/API keys and trace data; needs credential-scope review first.
- **NetworkOptimizer** (`Ozark-Connect/NetworkOptimizer`) — deferred. UniFi optimizer/security-audit tool may be useful, but it affects real network configuration and needs a deeper owned-lab review.
- **espcontrol** (`jtenniswood/espcontrol`) — deferred. Promising ESPHome/Home Assistant display firmware, but firmware flashing and device-control scope require a hardware-specific safety pass.
- **Patternflow** (`engmung/Patternflow`) — deferred. Interesting open hardware LED synthesizer, but current value is more product/hardware-specific than broadly reusable for the catalog.
- **MeshPoint** (`KMX415/meshpoint`) — deferred. LoRa/Meshtastic base-station work has regional radio-compliance and transmission concerns; needs a regulatory/use-boundary review.
- **CarWatch** (`ThinkOffApp/CarWatch`) — deferred. Vehicle/Raspberry Pi agent project touches dashcam/OBD data and vehicle privacy; not beginner-safe without deeper review.
- **taOS** (`jaylfc/taOS`) — deferred. Broad beta self-hosted agent OS with memory/chat/files/app-store surface; needs a deeper install, auth, and data-boundary review.
- **AmneziaWG Installer** (`bivlked/amneziawg-installer`) — rejected for this catalog run. The README emphasizes DPI bypass/traffic obfuscation and one-command VPN installation; legal/safety context is too ambiguous for a beginner resource card.
- **OmniRoute** (`diegosouzapw/OmniRoute`) — deferred. Very broad AI gateway with many providers/free-routing claims; needs a deeper token, model-routing, and abuse-prevention review.
- **torrent course gist search result** (`swati1024/torrents`) — rejected. Piracy/torrent course links; explicitly outside catalog rules.

## Notes

- Inspected 23 candidates across MCP testing, AI-agent memory, agent observability, Kubernetes UI, SRE agents, network mapping, Raspberry Pi/ESP32 hardware, LoRa, VPN tooling, and static-site/search-adjacent GitHub results.
- Existing catalog checked by exact `name:` fields inside the `const resources: Resource[]` block before adding new entries.
- No malware, phishing, credential theft, exploit-pack, botnet, ransomware, piracy, fraud, spam, harassment, or offensive-primary resource was published.
- No secrets, tokens, API keys, credentials, personal phone numbers, private config, or cron changes were added.
- No Hermes skills created this run. Existing MCP, Kubernetes, observability, agent-governance, and local-development skills already cover the reusable workflows; the accepted items are public resource-card additions only.

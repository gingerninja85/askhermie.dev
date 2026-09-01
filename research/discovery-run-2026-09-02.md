# Discovery run — 2026-09-02

## Accepted for publication

1. **traceAI** (`future-agi/traceAI`) — accepted as a benign OpenTelemetry-based AI tracing framework. Safety screened GitHub metadata, Apache-2.0 license, recent activity, README quickstarts for Python/TypeScript, package install paths, open issues, and privacy risk around prompts, completions, tokens, retrieval spans, and user identifiers. Published with local/sample-trace-first and redaction warnings.
2. **MCPJungle** (`mcpjungle/MCPJungle`) — accepted as a benign self-hosted MCP gateway for consolidating MCP server config, discovery, access control, and observability. Safety screened README, Docker quickstart, MPL-2.0 license, recent activity, open issues, and gateway blast-radius risk. Published with local/demo-server-first and auth/per-tool-control warnings.
3. **MCP for Beginners** (`microsoft/mcp-for-beginners`) — accepted as a benign Microsoft learning curriculum for Model Context Protocol. Safety screened README, MIT license, broad language examples, recent activity, open issues, and sample-code/API-key risk. Published with lab-data-only and review-capabilities warnings.
4. **MQTTX** (`emqx/MQTTX`) — accepted as a benign MQTT 5.0 desktop/CLI/WebSocket client toolbox for IoT labs. Safety screened README, Apache-2.0 license, recent activity, install paths, open issues, package postinstall scripts, and broker/device-control risk. Published with owned-broker-only and lab-topic warnings.
5. **Awesome ESP32** (`s0lness/awesome-esp32`) — accepted as a benign curated ESP32 project reference. Safety screened README, CC0-1.0 license, recent activity, open issue list, curated-project scope, and downstream-project risk. Published with per-project safety review and no-offensive-firmware warnings.
6. **ESP32 Bit Pirate** (`geo-tp/ESP32-Bit-Pirate`) — accepted as a dual-use but educational hardware protocol diagnostic lab tool. Safety screened README, MIT license, recent activity, explicit voltage/usage warnings, open issues, and hardware/legal risk. Published only with owned-hardware, permission, and voltage warnings.

## Rejected / deferred / already present

- **OpenTelemetry MCP Server** (`traceloop/opentelemetry-mcp-server`) — already present / inspected. Active benign MCP trace-query tool; not duplicated.
- **HomeLab Monitor** (`SikamikanikoBG/homelab-monitor`) — already present / inspected. Active benign read-only MCP/homelab monitor; not duplicated.
- **MCP Toolbox for Databases** (`googleapis/mcp-toolbox`) — already present / inspected. Active benign database MCP server; not duplicated.
- **OpenTelemetry Hooks** (`o11y-dev/opentelemetry-hooks`) — deferred. Useful AI-agent telemetry hook, but GitHub license metadata was null and it captures full tool/MCP/file-operation payloads; needs deeper license and privacy review before beginner publication.
- **MCP Observatory** (`LuKrlier/mcp-observatory`) — deferred. Benign-looking MCP observability project, but low reputation signal/0 stars and cloud/PostgreSQL data-source options need deeper review.
- **MCP Compose** (`datalayer/mcp-compose`) — deferred. Benign-looking MCP orchestration tool, but very low maturity signal and it manages server start/stop plus REST/UI surfaces; needs more adoption/security review.
- **OpenSearch Observability Stack** (`opensearch-project/observability-stack`) — deferred. Legitimate observability stack, but README's recommended install pipes a remote script into shell and sample default credentials appear in docs; publish only after documenting a safer manual path.
- **DavideCuna homelab-monitor** (`DavideCuna/homelab-monitor`) — deferred. Benign-looking Raspberry Pi monitor, but no license metadata, 0 stars, and README shows database credential setup; needs license and secrets-handling review.

## Notes

- Inspected 14 candidates across AI observability, MCP gateways/curricula, IoT tooling, ESP32 references, hardware protocol labs, and homelab monitoring.
- Existing catalog checked by exact `name:` fields inside the `const resources: Resource[]` block before adding entries; re-inspected existing resources were not duplicated.
- Resource duplicate check after edits should show the six new names exactly once. Pre-existing catalog debt remains: `Eneru`, `MemMap Explorer`, and `LILYGO Spark` each appear twice; this run did not introduce those duplicates.
- No malware, phishing, credential theft, exploit-pack, botnet, ransomware, piracy, fraud, spam, harassment, or offensive-primary resource was published.
- No secrets, tokens, API keys, credentials, personal phone numbers, private config, or cron changes were added.
- No Hermes skills created this run. Existing AI-agent, MCP, observability, GitHub, IoT, and devops skills cover the reusable workflows; this run added public resource cards only.

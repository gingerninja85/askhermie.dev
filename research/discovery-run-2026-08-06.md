# Discovery run — 2026-08-06

## Accepted for publication

1. **jCodeMunch MCP** (`jgravelle/jcodemunch-mcp`) — accepted as AI codebase-context/MCP tooling. Safety screened README, PyPI/pipx/uv install paths, supported MCP clients, symbol-level retrieval workflow, benchmark claims, secret-redaction/freshness claims, and local code-indexing implications; published with non-sensitive repo and generated-config review warnings.
2. **Microsoft Agent Framework** (`microsoft/agent-framework`) — accepted as mainstream Python/.NET AI-agent framework. Safety screened README, PyPI/NuGet install paths, Microsoft Learn docs, provider/orchestration/middleware/observability features, and Azure/Foundry examples; published with toy-sample-first, env-var, cloud-credential, and trace/log warnings.
3. **Pipecat** (`pipecat-ai/pipecat`) — accepted as real-time voice/multimodal agent framework. Safety screened README, PyPI/uv CLI install path, quickstart, service integrations, OpenTelemetry/Sentry options, and client SDK ecosystem; published with audio/transcript/phone/provider-key privacy warnings.
4. **Dashwise** (`andreasmolnardev/dashwise`) — accepted as homelab dashboard. Safety screened README, current/legacy Docker compose notes, built-in auth/SSO claim, UI-based configuration model, and local-development notes; published with private-LAN/auth/link-secrecy warnings rather than an unverified compose command.
5. **NanotDB** (`aymanhs/nanotdb`) — accepted as small edge/Raspberry Pi time-series database and dashboard. Safety screened README API examples and local metrics scope; published with localhost-first and sensor/privacy warnings.
6. **HyperDX** (`hyperdxio/hyperdx`) — accepted as OpenTelemetry observability platform. Safety screened README, all-in-one Docker start command, ClickHouse/OpenTelemetry/session-replay scope, and MIT license marker; published with redaction, dashboard-auth, session-replay, and retention warnings.
7. **GNO** (`gmickel/gno`) — accepted as local knowledge engine with CLI/Web/REST/SDK/MCP interfaces. Safety screened README, Bun package install path, local-first/no-account/no-telemetry claims, egress policies, context capsules, and local-indexing scope; published with disposable-folder-first and private-document/index exposure warnings.
8. **VoltAgent** (`VoltAgent/voltagent`) — accepted as TypeScript AI-agent framework. Safety screened README, npm scaffold command, typed tools/workflows/memory/RAG/guardrails/MCP/evals/observability features, and local dev server flow; published with sandbox credentials, narrow tool schemas, and telemetry review warnings.

## Already present / inspected, not duplicated

- **Toolport** (`tsouth89/toolport`) — already in catalog as `Toolport`; inspected again because it surfaced in MCP gateway search results.
- **FACT** (`fkie-cad/FACT_core`) — already in catalog as `FACT`.
- **TinyGo** (`tinygo-org/tinygo`) — already in catalog as `TinyGo`.
- **LVGL** (`lvgl/lvgl`) — already in catalog as `LVGL`.
- **MiniOS ESP** (`VuqarAhadli/MiniOS-ESP`) — already in catalog as `MiniOS ESP`.
- **Binwalk** (`ReFirmLabs/binwalk`) — already in catalog as `Binwalk`.
- **MCP Client for Ollama** (`jonigl/mcp-client-for-ollama`) — already in catalog as `MCP Client for Ollama`.
- **SigNoz** (`SigNoz/signoz`) — already in catalog as `SigNoz`.
- **Pulse** (`rcourtman/Pulse`) — already in catalog as `Pulse`.
- **Dashy** (`lissy93/dashy`) — already in catalog as `Dashy`.
- **Drydock** (`CodesWhat/drydock`) — already in catalog as `Drydock`.
- **Structurizr Site Generatr** (`avisi-cloud/structurizr-site-generatr`) — already in catalog as `Structurizr Site Generatr`.
- **Zensical** (`zensical/zensical`) — already in catalog as `Zensical`.
- **DocFX** (`dotnet/docfx`) — already in catalog as `DocFX`.

## Rejected / deferred

- **Omnigent** (`omnigent-ai/omnigent`) — deferred. Useful meta-harness for Claude/Codex/Cursor/OpenCode/Hermes, but the main quickstart pipes a remote installer into shell and the product can supervise multiple agents, run cloud sandboxes, and sync terminals/files; needs a verified sandbox-first recipe before beginner publication.
- **ConnectOnion** (`openonion/connectonion`) — deferred. Framework includes shell/bashing tools, remote callable agents, hosting/P2P relay, and plugin approvals; potentially legitimate but too easy to wire command execution before a safer starter is documented.
- **GumCP** (`gumslone/GumCP`) — deferred. Raspberry Pi panel is useful, but README includes default credentials, arbitrary command buttons, HTTP API trigger keys, SSH execution, GPIO changes, and web-server installation; needs a hardening-first guide before beginner publication.
- **Maple** (`MapleTechLabs/maple`) — deferred. OpenTelemetry platform looks promising, but README references Cloudflare/Tinybird/Infisical deployment secrets and CI configuration; not beginner-safe without a simpler local-only path.
- **5ire** (`nanbingxyz/5ire`) — deferred. Desktop MCP client/local knowledge base is relevant, but marketplace tooling and local document indexing need a more explicit safe first-run recipe before publication.
- **AIaW** (`NitroRCr/AIaW`) — deferred. Local-first AI workspace with MCP and cloud sync is promising, but the README warning/marketplace/plugin surface needs deeper privacy and permission review.
- **Agents Towards Production** (`NirDiamant/agents-towards-production`) — deferred. Good-looking tutorial set, but it mixes many third-party APIs, scraping/search providers, deployment, and production patterns; needs selecting a single safe tutorial rather than publishing the whole repo.
- **Awesome Harness Engineering** (`ai-boost/awesome-harness-engineering`) — deferred. Broad awesome-list; askhermie.dev should publish actionable resources, not clone large lists.
- **Kubeshark** (`kubeshark/kubeshark`) — deferred again. Powerful Kubernetes/eBPF traffic visibility with TLS decryption claims; too sensitive for a beginner resource card without a narrow defensive lab.
- **ESP32 Marauder** (`justcallmekoko/ESP32Marauder`) — rejected. Wi-Fi/Bluetooth offensive-primary ESP32 toolkit; not suitable for publication.
- **ESP32 Bit Pirate** (`geo-tp/ESP32-Bit-Pirate`) — deferred/rejected for this run. Hardware-protocol capability may be legitimate in owned labs, but the “hardware hacking” pitch and multi-protocol attack surface need deeper legal/safety framing before any beginner card.

## Notes

- Inspected 30+ candidates via GitHub search/API metadata and README fetches across MCP gateways, AI-agent frameworks, observability, homelab dashboards, Raspberry Pi/edge monitoring, firmware/embedded tools, and static-site/documentation tooling.
- No malware, phishing, credential theft, exploit-pack, botnet, ransomware, piracy, fraud, spam, or harassment tooling was published.
- No secrets, tokens, API keys, credentials, personal phone numbers, private config, or cron changes were added.
- No Hermes skills created this run; accepted workflows are useful public resources but would duplicate existing MCP/agent/observability/local-knowledge skills or need deeper hands-on verification first.

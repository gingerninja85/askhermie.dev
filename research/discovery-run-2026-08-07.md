# Discovery run — 2026-08-07

## Accepted for publication

1. **LiveKit Agents** (`livekit/agents`) — accepted as a real-time voice/video/multimodal agent framework. Safety screened repo metadata, Apache-2.0 license, README description, pip install path, WebRTC/telephony features, and provider-plugin surface; published with test-room, consent, transcript/audio/video, phone-number, and provider-key warnings.
2. **LangGraph** (`langchain-ai/langgraph`) — accepted as mainstream durable AI-agent/workflow framework. Safety screened README, MIT license, pip install path, durable execution, persistence, human-in-the-loop, memory, and deployment claims; published with retry/side-effect, logging, persistence, private prompt, and credential warnings.
3. **Strands Agents Evals** (`strands-agents/evals`) — accepted as agent evaluation and trace-analysis tooling. Safety screened README, Apache-2.0 license, pip install path, output/trajectory/tool-use evaluation, simulators, OpenTelemetry traces, and experimental red-team mention; published with synthetic-first and trace-redaction warnings.
4. **NeuroLink** (`juspay/neurolink`) — accepted as TypeScript AI provider/router/gateway tooling. Safety screened README, MIT license, npm package install path, multi-provider routing, streaming, MCP, voice, memory, Redis, and analytics features; published with environment-variable, logging, analytics, file-content, and trusted-MCP-server warnings.
5. **Zabbix MCP Server** (`initMAX/zabbix-mcp-server`) — accepted as infrastructure-monitoring MCP server for existing Zabbix users. Safety screened README, AGPL-3.0 license, Docker/config flow, OAuth/bearer/auth notes, Zabbix API scope, and report/tool surface; published with read-only API user, internal-topology, alert/hostname, and no-public-internet warnings.

## Already present / inspected, not duplicated

- **Activepieces** (`activepieces/activepieces`) — already in catalog as `Activepieces`; inspected again from MCP/automation search results.
- **SystemPi** (`WastelandSYS/systempi`) — already in catalog as `SystemPi`; inspected again from Raspberry Pi monitoring search results.
- **HomeLab Monitor** (`SikamikanikoBG/homelab-monitor`) — already in catalog as `HomeLab Monitor`; inspected again from homelab dashboard search results.
- **Magic Frame** (`jeremiaa/magic-frame`) — already in catalog as `Magic Frame`; inspected again from home-display/dashboard search results.
- **Future AGI** (`future-agi/future-agi`) — already in catalog as `Future AGI`; inspected again from AI observability search results.
- **Documentalist** (`palantir/documentalist`) — already in catalog as `Documentalist`; inspected again from static-site/documentation search results.
- **Eleventy** (`11ty/eleventy`) — already in catalog as `Eleventy`; inspected again from static-site generator search results.
- **ME Analyzer** (`platomav/MEAnalyzer`) — already in catalog as `ME Analyzer`; inspected again from firmware-analysis search results.
- **FACT** (`fkie-cad/FACT_core`) — already in catalog as `FACT`; surfaced again during firmware-analysis search.
- **Binwalk** (`ReFirmLabs/binwalk`) — already in catalog as `Binwalk`; surfaced again during firmware-analysis search.

## Rejected / deferred

- **Mobile MCP** (`mobile-next/mobile-mcp`) — deferred. Mobile automation and scraping across real devices/emulators is useful for authorized testing, but too easy for beginners to apply to apps/accounts/devices they do not own; needs a narrow local-device QA recipe before publication.
- **KMSG** (`channprj/kmsg`) — deferred. KakaoTalk CLI/MCP sends and watches messages through macOS Accessibility automation; messaging-account access is sensitive and not a beginner-safe default.
- **AgentDock** (`uvwt/agentdock`) — deferred. Local/server/container MCP runtime may be useful, but repo pitch includes operating machines, servers, and containers; needs deeper sandbox/permission review before recommending.
- **Omnigent** (`omnigent-ai/omnigent`) — still deferred. Already reviewed previously; remote installer and multi-agent/meta-harness supervision need a verified sandbox-first recipe.
- **Doberman-Core** (`fu351/Doberman-Core`) — deferred. Agent-security/guardrail framework looks relevant, but README contains broad MCP/tool enforcement, hook, and verifier surfaces plus suspicious keyword hits; needs hands-on benign verification before beginner publication.
- **yantr** (`besoeasy/yantr`) — deferred. Self-hosted app-store idea is useful, but quickstart uses host networking and raw Docker socket access; too much privilege for a beginner card without a hardened socket-proxy recipe.
- **Magic Frame** install script path — not duplicated or republished. Existing card remains; the current README shows remote shell install/update snippets, so no new install command was added.
- **rocketplaneIO** (`olemeyer/rocketplaneIO`) — deferred. AI SRE for Kubernetes with eBPF observability and copilot fixes is powerful production infrastructure automation; not beginner-safe without approval-gated lab instructions.

## Notes

- Inspected 20+ candidates via GitHub Search/API metadata and README fetches across MCP servers, AI-agent frameworks, agent evaluation, homelab dashboards, Raspberry Pi monitoring, observability, firmware analysis, and documentation/static-site tooling.
- No malware, phishing, credential theft, exploit-pack, botnet, ransomware, piracy, fraud, spam, or harassment tooling was published.
- No secrets, tokens, API keys, credentials, personal phone numbers, private config, or cron changes were added.
- No Hermes skills created this run; accepted workflows are safe public-resource cards, but skill creation would duplicate existing agent/MCP/firmware/observability skills without hands-on workflow verification.

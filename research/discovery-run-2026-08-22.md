# Discovery run — 2026-08-22

## Accepted for publication

1. **Jellydash** (`themartz90/jellydash`) — accepted as benign self-hosted Jellyfin monitoring. Safety screened README, MIT license, active non-archived repo, Docker Compose/SQLite install path, Jellyfin API token requirement, admin-password setup, notification integrations, and media-history privacy risks; published with LAN/VPN/auth and `.env` warnings.
2. **Glouton** (`bleemeo/glouton`) — accepted as benign host/container monitoring. Safety screened README, Apache-2.0 license, active non-archived repo, Docker quickstart, local TSDB/panel, Prometheus-compatible endpoint, optional cloud/MQTT forwarding, telemetry note, and Docker-socket sensitivity; published with private-panel and telemetry-review warnings.
3. **Modular Homelab Dashboard** (`Kellojo/Modular-Homelab-Dashboard`) — accepted as benign homelab dashboard tooling. Safety screened README, MIT license, active non-archived repo, YAML configuration, backend fetch design that avoids exposing API keys to the frontend, and internal-service disclosure risks; published with backend-secret and private-dashboard warnings.
4. **Dash0 Agent Skills** (`dash0hq/agent-skills`) — accepted as benign OpenTelemetry guidance for AI coding agents. Safety screened README, Apache-2.0 license, active non-archived repo, skills CLI/npm install paths, vendor-neutral OTLP positioning, instrumentation/collector/OTTL scope, and code/telemetry modification risks; published with toy-app/diff-review and trace-data warnings.
5. **UModel** (`alibaba/UnifiedModel`) — accepted as local semantic-runtime / AI data-catalog tooling. Safety screened README, active non-archived repo, local `make quickstart` demo workspace, CLI/REST/Web UI/MCP surface, workspace-scoped graph context, demo memory storage, and schema/topology/logs privacy risks; published with sample-workspace and read-only-data warnings.

## Rejected / deferred

- **OpenTelemetry MCP Server** (`traceloop/opentelemetry-mcp-server`) — already present / inspected as `OpenTelemetry MCP Server`; not duplicated.
- **Pulse** (`rcourtman/Pulse`) — already present / inspected; not duplicated.
- **Glance** (`glanceapp/glance`) — already present / inspected; not duplicated.
- **Drydock** (`CodesWhat/drydock`) — already present / inspected; not duplicated.
- **DockDash** (`dougmaitelli/DockDash`) — already present / inspected; not duplicated.
- **HomeLab Monitor** (`SikamikanikoBG/homelab-monitor`) — already present / inspected; not duplicated.
- **awesome-agentic-devops** (`DevOpsAIguru123/awesome-agentic-devops`) — deferred. Useful curated map, but broad awesome-list/community catalog of DevOps/SRE agents and installable skills; safer to publish individual vetted tools than another large dual-use catalog.
- **AURA** (`mezmo/aura`) — deferred. Interesting SRE agent platform with human approval controls, but production infrastructure focus, broad tool/integration surface, and remote install script make it too high-stakes for a beginner card without deeper review.
- **Astromesh** (`monaccode/astromesh`) — deferred. Multi-model agent runtime with RAG, memory, MCP tools, REST/WebSocket API, guardrails, and OpenTelemetry; broad execution surface needs deeper permission/install review before conservative publication.
- **GLAD** (`IEEE-VIT/GLAD`) — deferred. Legitimate IoT/ESP32/Raspberry Pi gas-leak drone project, but industrial/drone/hazardous-environment framing and hardware safety risks make it a poor beginner catalog entry without a dedicated safety writeup.
- **Tracker Tracker** (`jordanlambrecht/tracker-tracker`) — rejected for this catalog run. It monitors private tracker stats and qBittorrent activity; piracy/terms-of-service ambiguity is too high for askhermie.dev.
- **Reddit-Scraper-with-Push-Notifications** (`zarif98/Reddit-Scraper-with-Push-Notifications`) — rejected/deferred. README was unavailable during screening and the project purpose implies scraping/social-platform monitoring; not suitable without clear legal/privacy posture.

## Notes

- Inspected 17 candidates across homelab dashboards, monitoring, AI-agent observability, MCP/agent tooling, static/data context, ESP32/Raspberry Pi IoT, and social/private-tracker tooling.
- No malware, phishing, credential theft, exploit-pack, botnet, ransomware, piracy, fraud, spam, harassment, or offensive-primary resource was published.
- No secrets, tokens, API keys, credentials, personal phone numbers, private config, or cron changes were added.
- No Hermes skills created this run; accepted items are resource cards only. Dash0 skills and UModel may justify future local skills after hands-on use, but this run did not validate a repeatable Hermes workflow.
- Existing catalog debt observed but not introduced: duplicate resource names `Eneru`, `MemMap Explorer`, and `LILYGO Spark` pre-exist this run.

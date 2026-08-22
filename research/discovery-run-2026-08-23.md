# Discovery run — 2026-08-23

## Accepted for publication

1. **OpenZIM MCP Server** (`cameronrye/openzim-mcp`) — accepted as benign offline knowledge / MCP tooling. Safety screened README, MIT license badge, PyPI install path, CI/CodeQL/Sonar/security badges, small MCP tool surface, local ZIM-archive focus, and private-archive/copyright risks; published with local-trusted-client and archive-rights warnings.
2. **arXiv MCP Server** (`blazickjp/arxiv-mcp-server`) — accepted as benign research-paper MCP tooling. Safety screened README, Apache-2.0 license badge, PyPI/uvx install path, tests badge, arXiv search/download/read scope, Hermes install badge, and rate-limit/private-PDF risks; published with rate-limit and private-draft warnings.
3. **Adeu** (`dealfluence/adeu`) — accepted as benign document-editing / MCP tooling. Safety screened README, MIT license badge, PyPI/npm install paths, CI badge, DOCX-to-Markdown/Track Changes purpose, validation gate claims, and sensitive-document metadata risks; published with copy/test-folder and confidential-doc warnings.
4. **bunqueue** (`egeominotti/bunqueue`) — accepted as benign Bun job queue for automation. Safety screened README, package/CI/license badges, small dependency claim, SQLite persistence, standalone server, cron/DLQ/S3-backup features, and side-effect/retry/management-port risks; published with idempotency and secret-payload warnings.
5. **WOML** (`dali-benothmen/woml`) — accepted as benign workflow-language tooling. Safety screened README, Apache-2.0 license badge, npm/Bun/pnpm install paths, reviewable markup model, human approvals/runtime policies, JavaScript execution surface, and external API/token risks; published with code-review/dry-run/environment-secret warnings.
6. **OpenWolf** (`cytostack/openwolf`) — accepted as benign local AI-agent project memory and token accounting. Safety screened README, AGPL-3.0 license badge, npm install path, local file I/O/no telemetry claims, supported agent hooks, and `.wolf/` memory privacy risks; published with private-memory warnings.
7. **Headroom** (`michellzappa/headroom`) — accepted as benign local-first AI quota / ship-status monitor with optional ESP32 display. Safety screened README, local Python host design, no cloud account claim, macOS/iPhone/Watch/ESP32 surfaces, local auth/CLI reads, and feed exposure risks; published with localhost/VPN warnings.
8. **FastLED** (`FastLED/FastLED`) — accepted as benign microcontroller LED library. Safety screened README, common Arduino ecosystem reputation, CI/test badges, documentation/community links, supported MCU list, no remote install script, and high-current LED hardware risks; published with power-supply/fuse/USB warnings.
9. **SpatiumDDI** (`spatiumddi/spatiumddi`) — accepted as benign but advanced homelab DNS/DHCP/IPAM tooling. Safety screened README, Apache-2.0 license badge, CI/CodeQL/status beta badges, self-hosted BIND9/PowerDNS/Kea architecture, and LAN-outage risks; published with lab-first and rollback warnings.

## Rejected / deferred

- **AgentRQ** (`agentrq/agentrq`) — deferred. Legitimate-looking human/agent task platform, but recurring tasks, event-triggered automation, MCP, and multi-client control surface need deeper permission/security review before a beginner catalog card.
- **Telegram Archive** (`GeiserX/Telegram-Archive`) — deferred. Backup use is legitimate, but it handles private Telegram messages/media, public chat sharing, real-time listeners, and platform/privacy implications; not published without a dedicated privacy posture review.
- **Manef Shell OS / MSO** (`rahmanef63/mso`) — deferred. Useful self-hosted mobile Linux control plane, but browser terminal/file-manager/BYOK AI over a server is a high-impact remote administration surface; not beginner-safe without hands-on auth/deployment review.
- **ESP32 Marauder** (`justcallmekoko/ESP32Marauder`) — rejected. README markets it as Wi-Fi/Bluetooth offensive and defensive tooling for ESP32; offensive-primary wireless capability is outside askhermie.dev publishing scope.
- **RuView** (`ruvnet/RuView`) — rejected/deferred. Wi-Fi sensing for presence/vitals and “see through walls” positioning raises privacy/surveillance concerns; not appropriate as a beginner resource card.
- **ClawMetry** (`vivekchand/clawmetry`) — already present / inspected as `ClawMetry`; not duplicated.
- **Toolport** (`tsouth89/toolport`) — already present / inspected as `Toolport`; not duplicated.
- **Serial-Studio** (`Serial-Studio/Serial-Studio`) — already present / inspected; not duplicated.
- **CodeBurn** (`getagentseal/codeburn`) — already present / inspected; not duplicated.

## Notes

- Inspected 18 candidates across MCP/offline knowledge, research tooling, document automation, local agent memory/cost tracking, workflow/job queues, homelab DNS, ESP32/Raspberry Pi adjacent hardware, and privacy-sensitive social/wireless tools.
- No malware, phishing, credential theft, exploit-pack, botnet, ransomware, piracy, fraud, spam, harassment, or offensive-primary resource was published.
- No secrets, tokens, API keys, credentials, personal phone numbers, private config, or cron changes were added.
- No Hermes skills created this run. Accepted items are resource cards only; none justified a fully validated reusable Hermes workflow yet.
- Existing catalog debt observed but not introduced: duplicate resource names `Eneru`, `MemMap Explorer`, and `LILYGO Spark` pre-exist this run.

# Discovery run — 2026-08-19

## Accepted for publication

1. **Agent Browser** (`vercel-labs/agent-browser`) — accepted as benign AI/browser automation tooling. Safety screened README, Apache-2.0 license, active non-archived repo, npm/Homebrew/Cargo install paths, Chrome-for-Testing dependency, accessibility-snapshot workflow, and form-click/fill risks; published with disposable-page and logged-in-account warnings.
2. **Entire CLI** (`entireio/cli`) — accepted as AI-agent session provenance/checkpoint tooling. Safety screened README, MIT license, active non-archived repo, Homebrew/Scoop/Go installs, git hook/checkpoint design, plugin verification notes, token storage notes, and explicit Security & Privacy section; published with private-repo, transcript, and unreviewed-checkpoint warnings.
3. **OfficeCLI** (`iOfficeAI/OfficeCLI`) — accepted as agent-friendly Office document tooling. Safety screened README, Apache-2.0 license, active non-archived repo, release-binary install path, read/render/edit workflow, automatic skill/MCP install behavior, and document privacy risks; published with copy-first and metadata/privacy warnings.
4. **mcp-language-server** (`isaacphi/mcp-language-server`) — accepted as MCP code-intelligence tooling. Safety screened README, BSD-3-Clause license, active non-archived repo, Go install path, LSP-backed definition/reference/rename/diagnostic features, and workspace-scoping risks; published with narrow workspace and read-only-first warnings.
5. **Pico HSM** (`polhenarejos/pico-hsm`) — accepted as advanced hardware-security learning on owned boards. Safety screened README, AGPL-3.0 license, active non-archived repo, Raspberry Pi Pico/ESP32-S3 HSM scope, PKCS#11/OpenSC context, security-considerations section, flashing/build paths, and lockout/bricking/key-loss risks; published with spare-board and no-production-secrets warning.
6. **Blynk C++ Library** (`Blynk-Technologies/blynk-library`) — accepted as beginner IoT/mobile-dashboard tooling. Safety screened README, MIT license, active non-archived repo, official Arduino/ESP32/Raspberry Pi library scope, cloud auth-token requirement, mobile app/dashboard flow, and physical-device risks; published with token and harmless-actuator warnings.

## Already present / inspected, not duplicated

- **MCP Inspector** (`modelcontextprotocol/inspector`) — already in catalog; inspected from MCP search results. README shows official visual/CLI/TUI MCP server testing tool with npm `npx @modelcontextprotocol/inspector` path and v2 docs.
- **Microsoft Learn MCP Server** (`MicrosoftDocs/mcp`) — already in catalog; inspected from MCP search results. README shows official Microsoft Learn remote MCP endpoint, no-key docs access, and first-party documentation scope.
- **NanoTDB** (`aymanhs/nanotdb`) — already in catalog; inspected from edge/Raspberry Pi observability search results. README shows single-binary TSDB, local files, built-in dashboard/editor, offline CLI, and private metric/dashboard considerations.
- **ServiceRadar** (`carverauto/serviceradar`) — already in catalog; inspected from homelab/observability search results. README shows distributed monitoring, network management, security analytics, demo credentials, and active source now hosted externally.
- **Kuvasz** (`kuvasz-uptime/kuvasz`) — already in catalog; inspected from uptime/observability search results. README shows uptime/SSL monitoring, status pages, notification channels, REST API, Prometheus/OpenTelemetry, and MCP server features.
- **Maintenant** (`kOlapsis/maintenant`) — already in catalog; inspected from container monitoring search results. README shows single-container monitoring, endpoint checks, certificate tracking, status pages, and paid/self-hosted licensing details.
- **Velxio** (`davidmonterocrespo24/velxio`) — already in catalog; inspected from ESP32/Raspberry Pi hardware search results. README shows browser board emulator/circuit simulator, AGPL/commercial licensing, Docker self-host path, and supported boards.

## Rejected / deferred

- **Google Workspace CLI** (`googleworkspace/cli`) — deferred. Useful and active, but it manages Drive, Gmail, Calendar, Docs, Sheets, Chat, Admin, OAuth credentials, and included agent skills; askhermie.dev already has Google Workspace coverage and this deserves deeper least-privilege/auth framing before beginner publication.
- **Lark CLI** (`larksuite/cli`) — deferred. Official and security-conscious, but it covers messaging, docs, mail, approvals, contacts, attendance, meetings, and enterprise apps; requires credential/app setup and broad SaaS permissions, so it needs deeper scope-minimization review before publication.
- **OpenCLI** (`jackwener/OpenCLI`) — deferred. Browser/session-to-CLI bridge may be useful, but the pitch is turning logged-in websites into agent-callable CLIs; high account/session-abuse and privacy surface needs deeper review.
- **Agent Reach** (`Panniantong/Agent-Reach`) — deferred. Social-platform read/search across Twitter, Reddit, YouTube, GitHub, Bilibili, and XiaoHongShu is close to scraping/TOS/privacy ambiguity; not suitable for conservative beginner publication without policy review.
- **Alpaca MCP Server** (`alpacahq/alpaca-mcp-server`) — deferred. Finance/trading MCP server can place or support trades and needs brokerage credentials; too high-impact for a casual resource card without paper-trading-only framing and credential controls.
- **Awesome MCP Servers** (`appcypher/awesome-mcp-servers`) and **Awesome DevOps MCP Servers** (`rohitg00/awesome-devops-mcp-servers`) — not published. Broad lists are not actionable beginner cards and can contain mixed-risk servers; inspect individual tools instead.

## Notes

- Inspected 20 candidates across AI-agent browser tooling, AI provenance, Office document automation, MCP testing/docs/code intelligence, Google/Lark SaaS CLIs, homelab observability, uptime/container monitoring, board emulation, Raspberry Pi/ESP32 hardware security, and IoT cloud libraries.
- No malware, phishing, credential theft, exploit-pack, botnet, ransomware, piracy, fraud, spam, harassment, or offensive-primary resource was published.
- No secrets, tokens, API keys, credentials, personal phone numbers, private config, or cron changes were added.
- No Hermes skills created this run; accepted items are public resource cards and overlap existing Hermes skill coverage rather than novel reusable workflows.
- Existing catalog debt observed but not introduced: duplicate resource names `Eneru`, `MemMap Explorer`, and `LILYGO Spark` pre-exist this run.

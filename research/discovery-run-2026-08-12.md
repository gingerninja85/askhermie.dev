# Discovery run — 2026-08-12

## Accepted for publication

1. **Microsoft Learn MCP Server** (`MicrosoftDocs/mcp`) — accepted as an official, read-only Microsoft documentation MCP endpoint. Safety screened GitHub metadata, README, no-auth endpoint, documentation-only purpose, install/config shape, and hallucination/verification risk; published with no-private-tenant-data and verify-before-running warnings.
2. **Chrome DevTools MCP** (`ChromeDevTools/chrome-devtools-mcp`) — accepted as browser debugging / performance tooling for local development. Safety screened README disclaimers, npm usage path, browser-data exposure, usage-statistics default, update checks, and DevTools control surface; published with clean-profile, no-sensitive-sessions, and telemetry opt-out warnings.
3. **1MCP** (`1mcp-app/agent`) — accepted as a local MCP aggregation/runtime tool for safer progressive discovery. Safety screened README, CodeQL badge, Apache-2.0 license statement, install path, local serve workflow, tool aggregation, filters/presets, and auth/surface-area risk; published with read-only-first, localhost, and authorization warnings.
4. **RackPad** (`Kobii-git/rackpad`) — accepted as homelab infrastructure inventory and topology documentation. Safety screened README, install guide, Docker image path, auth roles, discovery/SNMP scope, IPAM/VLAN inventory, and internal-network disclosure risk; published with LAN/VPN and owned-network discovery warnings.
5. **DockTail** (`marvinvr/docktail`) — accepted as a Tailscale service publishing helper for owned homelab containers. Safety screened README, Tailscale community signal, Docker-label workflow, OAuth/API credential handling, Funnel support, Docker socket needs, and secret-file alternatives; published with private-tailnet, secret-file, and no-Funnel-until-reviewed warnings.
6. **Atom Homepage** (`stackryze/atom-homepage`) — accepted as a lightweight homelab dashboard/start page. Safety screened README, Docker install, auth claim, Docker socket optionality, terminal/control features, service widgets, and internal-link exposure; published with private-dashboard and avoid-Docker-socket-first warnings.
7. **teedoc** (`teedoc/teedoc`) — accepted as benign Python static documentation tooling for Markdown/Jupyter docs. Safety screened README, PyPI install, docs-generation purpose, GitHub Actions badge, template workflow, and generated-content leakage risk; published with review-built-HTML warnings.
8. **ESP32JTAG Firmware** (`EZ32Inc/esp32jtag_firmware`) — accepted as advanced owned-hardware debugging firmware. Safety screened README, ESP-IDF build path, hardware support, JTAG/SWD/logic-analyzer/signal-generator capabilities, Wi-Fi/web UI, and target-control risks; published with owned-board, voltage/pin-map, and no-remote-debug warnings.

## Already present / inspected, not duplicated

- **Maintenant** (`kOlapsis/maintenant`) — already in catalog as `Maintenant`; inspected again from homelab monitoring search results.
- **Beszel** (`henrygd/beszel`) — already in catalog as `Beszel`; inspected again from homelab monitoring search results.
- **Pulse** (`rcourtman/Pulse`) — already in catalog as `Pulse`; inspected again from homelab monitoring search results.
- **Atlas** (`karam-ajaj/atlas`) — already in catalog as `Atlas`; inspected again from homelab monitoring search results.
- **Glance** (`glanceapp/glance`) — already in catalog as `Glance`; inspected again from homelab monitoring search results.
- **HomeLab Monitor** (`SikamikanikoBG/homelab-monitor`) — already in catalog as `HomeLab Monitor`; inspected again from homelab monitoring search results.
- **Drydock** (`CodesWhat/drydock`) — already in catalog as `Drydock`; inspected again from container update monitoring search results.
- **DOCSight** (`itsDNNS/docsight`) — already in catalog as `DOCSight`; inspected again from homelab monitoring search results.
- **Eneru** (`m4r1k/Eneru`) — already in catalog as `Eneru`; inspected again from UPS monitoring search results.
- **Activepieces** (`activepieces/activepieces`) — already in catalog as `Activepieces`; inspected again from MCP/agent automation search results.
- **mcp-agent** (`lastmile-ai/mcp-agent`) — already in catalog as `mcp-agent`; inspected again from MCP/agent framework search results.
- **agentgateway** (`agentgateway/agentgateway`) — already in catalog as `agentgateway`; inspected again from MCP gateway search results.
- **Page Agent** (`alibaba/page-agent`) — already in catalog as `page-agent`; inspected again from AI browser automation search results.
- **Retype** (`retypeapp/retype`) — already in catalog as `Retype`; inspected again from static-site generator search results.
- **Dory** (`clidey/dory`) — already in catalog as `Dory`; inspected again from documentation generator search results.
- **Binwalk** (`ReFirmLabs/binwalk`) — already in catalog as `Binwalk`; inspected again from firmware analysis search results.
- **FACT** (`fkie-cad/FACT_core`) — already in catalog as `FACT`; inspected again from firmware analysis search results.
- **ME Analyzer** (`platomav/MEAnalyzer`) — already in catalog as `ME Analyzer`; inspected again from firmware analysis search results.

## Rejected / deferred

- **ESP32 Bit Pirate** (`geo-tp/ESP32-Bit-Pirate`) — rejected for beginner publication. It is an impressive owned-hardware lab tool, but the README advertises Wi-Fi deauth, Bluetooth spoofing/sniffing, RFID clone/write, Sub-GHz record/replay, and similar capabilities that are too easy to misuse outside authorized hardware/RF labs.
- **NetworkOptimizer** (`Ozark-Connect/NetworkOptimizer`) — deferred. Useful UniFi monitoring/auditing idea, but it includes optimization/security-audit capabilities for live network gear; needs deeper review of credentials, write actions, and safe read-only mode before recommending to beginners.
- **homebutler** (`Higangssh/homebutler`) — deferred. Homelab chat control is relevant, but chat-operated infrastructure management can trigger service changes; needs stronger auth, audit, and dry-run review before publication.
- **Unraid MCP** (`dinglebear-ai/unraid`) — deferred. Useful MCP integration for Unraid, but it can query and manage Docker, VMs, array/parity, plugins, rclone, and telemetry; needs read-only least-privilege guidance before beginner publication.
- **ResQ** (`MKme/ResQ`) — deferred/rejected for now. Search-and-rescue radio/cell-phone-signature tracking involves RF/legal/privacy issues and should not be recommended casually without jurisdiction-specific consent and compliance review.
- **attify Firmware Analysis Toolkit** (`attify/firmware-analysis-toolkit`) — deferred. Firmware emulation is useful, but the toolkit is older and security-testing oriented; lower priority because Binwalk, EMBA, FACT, and OWASP FSTM are already in the catalog with clearer beginner guardrails.
- **Karonte** (`ucsb-seclab/karonte`) — deferred. Academic firmware vulnerability static analysis is useful but advanced and vuln-discovery oriented; not a beginner-first card without a controlled lab workflow.
- **awesome-embedded-security** (`hexsecs/awesome-embedded-security`) — deferred. It is a broad security list rather than a concrete beginner workflow, and broad lists can pull readers into offensive material without enough context.

## Notes

- Inspected 39 candidates across MCP/AI-agent tooling, browser automation, homelab monitoring, Tailscale/Docker service publishing, documentation generators, ESP32/JTAG hardware debugging, firmware analysis, and static-site tooling.
- No malware, phishing, credential theft, exploit-pack, botnet, ransomware, piracy, fraud, spam, harassment, or offensive-primary resource was published.
- No secrets, tokens, API keys, credentials, personal phone numbers, private config, or cron changes were added.
- No Hermes skills created this run; accepted items are public-resource cards rather than novel reusable Hermes execution workflows.
- Existing catalog debt observed but not introduced: duplicate resource names `Eneru`, `MemMap Explorer`, and `LILYGO Spark` pre-existed this run.

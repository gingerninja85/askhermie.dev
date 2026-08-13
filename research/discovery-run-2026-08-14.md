# Discovery run — 2026-08-14

## Accepted for publication

1. **Hexis** (`Bevel-Software/Hexis`) — accepted as benign AI-agent governance/control-plane tooling. Safety screened README, Apache-2.0 license, active repo, MCP/roles/git-backed context model, public demo path, and risk that centralized skills/tools/context can expose internal knowledge or overgrant agent access; published with least-privilege and no-secrets-in-context warnings.
2. **BootAgent** (`MaimoryLab/BootAgent`) — accepted as local AI-agent setup/configuration tooling. Safety screened README, Apache-2.0 license, releases/CI badges, local desktop scope, provider/profile/MCP config export behavior, backups claim, and risk of rewriting local agent configs or exporting secrets; published with backup, excluded-keys, and review-before-apply warnings.
3. **Mnemolis** (`immortalbob/Mnemolis`) — accepted as self-hosted homelab knowledge broker with REST and MCP. Safety screened README, MIT license, CI/lint/Docker badges, local infrastructure emphasis, source routing across Kiwix/RSS/Open-Meteo/SearXNG/Uptime Kuma/Home Assistant, and home-state/query privacy risks; published with private-LAN and add-one-backend-at-a-time warnings.
4. **ESP32 NUT Server Bridge** (`maverick1982/esp32-nut`) — accepted as ESP32-S3 UPS monitoring firmware for owned hardware. Safety screened README, MIT license, browser flasher/manual PlatformIO paths, NUT protocol behavior, captive portal, OTA update surface, and shutdown-automation risks; published with supported-UPS, credential-change, private-interface, and non-critical-client test warnings.
5. **Observable Notebook Kit** (`observablehq/notebook-kit`) — accepted as static-site tooling for Observable notebooks. Safety screened README, ISC license, official ObservableHQ org, static-site/CLI/Vite purpose, technology-preview status, and notebook-output privacy risks; published with clear-private-cells and review-built-site warnings.
6. **MiniOS-ESP** (`VuqarAhadli/MiniOS-ESP`) — accepted as ESP32/RP2350 embedded learning firmware. Safety screened README, BSD-3-Clause license, PlatformIO/Arduino badges, documented FreeRTOS shell/filesystem/networking scope, and pin/network credential risks; published with lab-hardware, exact-board-target, and no-committed-Wi-Fi-secrets warnings.
7. **AgentBridge** (`Foamtor/AgentBridge`) — accepted as self-hosted agent/API integration framework with human approval patterns. Safety screened README, MIT license, CI badge, docs/architecture links, no-cloud-dependency claim, structured output/session/audit/human-in-the-loop purpose, and sensitive API/database risks; published with read-only-first, approval-gate, logging, and private-secret-store warnings.

## Already present / inspected, not duplicated

- **agentglass** (`SirAllap/agentglass`) — already in catalog; inspected again from new AI-agent observability results.
- **NanoTDB** (`aymanhs/nanotdb`) — already in catalog; inspected again from Raspberry Pi/edge observability results.
- **XZG Multi-tool** (`xyzroe/XZG-MT`) — already in catalog; inspected again from ESP32/browser flashing results.

## Rejected / deferred

- **Pinvou Agent** (`Pinvou/pinvou-agent`) — deferred. Relevant desktop AI-agent workspace, but it is a broad tool/file/workflow agent with MCP and local/remote model access; needs deeper review of tool permissions, installer/update path, and data-flow boundaries before beginner publication.
- **ESP32 Bit Pirate** (`geo-tp/ESP32-Bit-Pirate`) — deferred. Strong hardware-learning value, but multi-protocol sniffing/sending plus Wi-Fi/Bluetooth/Sub-GHz/RFID features can cross into unauthorized analysis or interference; needs more precise beginner-safe framing before publication.
- **Beacon** (`angaziz/beacon`) — deferred. Benign-looking ESP32 desk companion, but approval/denial of Claude/Codex tool prompts from a BLE accessory is high-impact; needs deeper review of authentication and fail-safe behavior.
- **Rogue Radar** (`ATOMNFT/Rogue-Radar`) — rejected/deferred. Wi-Fi/BLE/GPS scanning, packet monitoring, detector features, and field-device framing make beginner misuse too easy despite LilyGO/ESP32 learning value.
- **Watch Dogs Go** (`LOCOSP/WatchDogsGo`) — rejected. README advertises wardriving, evil twins, handshakes, sniffer modes, and “real cybersecurity tooling”; offensive/legally ambiguous wireless collection primary risk.
- **Awesome DeepSeek Harness** (`0xsline/awesome-deepseek-harness`) — deferred. It is a curated plugin list, but install examples pull arbitrary external profile bundles/plugins; needs deeper plugin safety and trust-boundary review before recommending to beginners.
- **esp32-nut captive portal default password detail** — not published as a literal credential. The card points to docs and tells readers to change defaults rather than copying sensitive/default access details into the catalog.

## Notes

- Inspected 16 candidates across AI-agent observability/governance/setup, MCP/homelab knowledge brokers, Raspberry Pi/edge observability, ESP32 tooling/firmware, hardware hacking devices, and static notebook-site publishing.
- No malware, phishing, credential theft, exploit-pack, botnet, ransomware, piracy, fraud, spam, harassment, or offensive-primary resource was published.
- No secrets, tokens, API keys, credentials, personal phone numbers, private config, or cron changes were added.
- No Hermes skills created this run; accepted items are public-resource cards rather than novel reusable Hermes execution workflows.
- Existing catalog debt observed but not introduced: duplicate resource names `Eneru`, `MemMap Explorer`, and `LILYGO Spark` pre-existed this run.

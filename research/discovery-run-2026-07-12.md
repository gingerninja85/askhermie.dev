# Discovery run — 2026-07-12 UTC

## Scope

Daily autonomous askhermie.dev discovery loop: Hermes/AI-agent tooling, automation, systems engineering, observability, homelab, static-site tooling, IoT/hardware, ESP32/Raspberry Pi, firmware analysis, and beginner-friendly labs.

## Candidates inspected

| Candidate | URL | Decision | Reason / safety screen |
|---|---|---|---|
| CodeSeek | https://github.com/CodeBendKit/codeseek | Accepted | MIT, active, code-intelligence CLI for symbol search, semantic search, call graphs, and optional MCP integration. Useful for AI coding-agent work. Published with warning about embedding providers, source-code sensitivity, and MCP/config writes. |
| Loop Engineering | https://github.com/cobusgreyling/loop-engineering | Accepted | MIT, active, practical patterns and CLIs for agent loop design. Benign workflow-design resource. Published with human-gate warning because recurring agent loops can repeatedly modify real systems. |
| ESPHome Designer | https://github.com/koosoli/ESPHomeDesigner | Accepted | GPL-3.0, active, visual ESPHome/OEPL/OpenDisplay dashboard designer. Useful IoT/smart-home learning fit. Published with token/HA URL and generated-YAML flashing warnings. |
| BLE Scale Sync | https://github.com/KristianP26/ble-scale-sync | Accepted | GPL-3.0, active, BLE smart-scale bridge for Raspberry Pi/Linux/Home Assistant/file exports. Benign but sensitive health-data workflow. Published with privacy, token, MQTT, and webhook exposure warnings. |
| Sendspin Bluetooth Bridge | https://github.com/trudenboy/sendspin-bt-bridge | Accepted | MIT, active, local-first Bluetooth speaker bridge for Music Assistant/Home Assistant. Useful homelab/audio automation. Published with LAN-only, Bluetooth pairing, token, and diagnostics-sharing warnings. |
| OpenCCU | https://github.com/OpenCCU/OpenCCU | Accepted | Apache-2.0, mature, cloud-free Homematic IP/HomeMatic CCU replacement for Raspberry Pi/VM/container/Home Assistant. Published with smart-home safety, backup, restore-test, and no-internet-exposed-WebUI warnings. |
| free-embedded-dev-tools | https://github.com/cifertech/free-embedded-dev-tools | Accepted | MIT, new but benign curated map of embedded, firmware, PCB, debug, simulation, CI, IoT, RF, TinyML, and learning tools. Published as reference with per-linked-tool license/privacy/safety warning. |
| Home Assistant Raspberry Pi GPIO | https://github.com/thecode/ha-rpi_gpio | Accepted | Apache-2.0, active Home Assistant custom integration for Raspberry Pi GPIO sensors/switches/covers. Published with pin numbering, voltage, relay, and actuator warnings. |
| ExcelMcp | https://github.com/sbroenne/mcp-server-excel | Accepted | MIT, active Windows-only MCP/CLI for automating real Excel via COM. Useful productivity/agent automation, but powerful. Published with copy-of-workbook, macro, sensitive-spreadsheet, and explicit-review warnings. |
| MadCop | https://github.com/linmy666/madcop | Deferred | Relevant local-first AI workstation, but young project with broad tool-use/MCP/workspace surface, API keys, shell/docker references, and unclear license metadata. Needs deeper privacy and permission-surface review before beginner recommendation. |
| QodeX | https://github.com/QodeXcli/QodeX | Deferred | Relevant local-first coding CLI, but young broad agent with 100+ tools, browser/vision/artifact surfaces, shell/docker, secrets/tokens, and no clear GitHub license metadata in API. Needs deeper execution-safety review. |
| awesome-agentic-finops | https://github.com/gregoire-costory/awesome-agentic-finops | Deferred | Useful FinOps map, but cloud-cost tools commonly require cloud credentials/tokens and the list includes vendor/agentic actions. Needs scoped least-privilege framing before beginner publication. |
| Apify MCP Server | https://github.com/apify/apify-mcp-server | Deferred | Popular MIT MCP server, but primary use is web scraping/social/search/e-commerce extraction with API tokens and possible ToS/legal/privacy pitfalls. Too easy for beginners to misuse without a dedicated ethics/legal framing. |
| Logic Pro MCP | https://github.com/MongLong0214/logic-pro-mcp | Deferred | Likely benign local creative automation, but macOS/Logic control, shell/curl install hints, credential mentions, and DAW side effects need deeper review. |
| Photoshop MCP | https://github.com/alisaitteke/photoshop-mcp | Deferred | Useful design automation candidate, but unofficial Adobe automation with API key/token mentions and no license returned by GitHub API. Needs deeper license and privacy review. |
| TuneoutDisplay | https://github.com/zmsaunders/TuneoutDisplay | Deferred | Interesting Raspberry Pi/Home Assistant voice-display project, but README discloses heavy AI-generated scripting and asks readers to review code before executing. Defer until a safer minimal setup path is clear. |
| Beacon | https://github.com/angaziz/beacon | Deferred | Interesting ESP32 AI coding companion, but handles Codex/Claude usage, approvals, tokens, weather/markets, and local hub secrets. Needs deeper credential and agent-approval review. |

## Published changes

Added 9 resource cards to `src/pages/resources.astro`:

- CodeSeek
- Loop Engineering
- ESPHome Designer
- BLE Scale Sync
- Sendspin Bluetooth Bridge
- OpenCCU
- free-embedded-dev-tools
- Home Assistant Raspberry Pi GPIO
- ExcelMcp

Updated resource group category arrays so the new cards render under existing reader-intent groups.

## Skill changes

No local Hermes skills created or updated. The accepted items are useful catalog entries, but existing skills already cover codebase mapping, Hermes loop discipline, ESPHome, Home Assistant, smart-home operations, and productivity workflows. None of today’s accepted tools introduced a clearly non-duplicative safe workflow worth preserving as a local skill.

## Verification notes

Final cron report records Astro build, secret scan, commit, push, remote SHA, and live-site smoke check results.

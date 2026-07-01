# Discovery run — 2026-07-01

## Scope

Daily askhermie.dev discovery loop: AI-agent tooling, automation, systems engineering, observability, homelab, IoT, hardware, firmware, and beginner-friendly labs.

## Candidates inspected

| Candidate | URL | Decision | Reason / safety screen |
|---|---|---|---|
| OpenTelemetry Demo | https://github.com/open-telemetry/opentelemetry-demo | Accepted | Reputable CNCF/OpenTelemetry lab, active repo, Apache-2.0, intended for local observability learning. Safety note added: many local containers/ports; do not expose publicly. |
| Grafana Alloy | https://github.com/grafana/alloy | Accepted | Reputable Grafana/OpenTelemetry collector, active repo, Apache-2.0. Safety note added: telemetry pipelines can forward secrets; test routing and scrub logs. |
| Beszel | https://github.com/henrygd/beszel | Accepted | Active MIT-licensed homelab monitoring tool, benign primary purpose. Safety note added: monitoring agents expose system data; keep private/authenticated. |
| Uptime Kuma | https://github.com/louislam/uptime-kuma | Accepted | Mature MIT-licensed uptime monitor, benign primary purpose. Safety note added: status pages can leak internal service names. |
| OpenObserve | https://github.com/openobserve/openobserve | Accepted | Active observability platform, AGPL-3.0, single-node Docker quickstart. Safety note added: logs can contain secrets and personal data; placeholder password only. |
| ESPHome | https://github.com/esphome/esphome | Accepted | Active smart-home firmware builder for owned devices; benign when bounded to authorized hardware. Safety note added: firmware flashing/device electrical risk. |
| WLED | https://github.com/wled/WLED | Accepted | Active ESP LED firmware, EUPL-1.2, strong beginner hardware fit. Safety note added: LED current/power-supply risk. |
| Meshtastic Firmware | https://github.com/meshtastic/firmware | Accepted | Active open LoRa mesh firmware, GPL-3.0, useful hardware/comms learning. Safety note added: radio regulations/frequency/power limits. |
| Raspberry Pi Pico SDK | https://github.com/raspberrypi/pico-sdk | Accepted | Official Raspberry Pi microcontroller SDK, BSD-3-Clause. Safety note added: wiring/pinout/voltage risk. |
| Tasmota | https://github.com/arendst/Tasmota | Accepted | Mature local IoT firmware, GPL-3.0, but advanced due mains-powered devices. Safety note added: electrocution/fire risk; stick to qualified/low-voltage work. |
| Playwright MCP | https://github.com/microsoft/playwright-mcp | Accepted | Microsoft-maintained browser automation MCP, Apache-2.0, directly relevant to AI agents. Safety note added: browser automation can access real sessions; use separate profiles. |
| Model Context Protocol Servers | https://github.com/modelcontextprotocol/servers | Accepted | Official MCP server catalog. README includes token placeholders, so entry explicitly warns not to expose API keys/tokens/config. |
| bolt.diy | https://github.com/stackblitz-labs/bolt.diy | Deferred | Useful AI coding environment, but setup centers on provider API keys and generated full-stack apps. Needs deeper review before recommending to beginners. |

## Published changes

Added 12 resource cards and a rendered `Safety note` field for resources that need explicit guardrails.

## Skill changes

Created local Hermes skill: `smart-home/esphome-device-workflow` for safe ESPHome install/config/validate/compile/flash workflows on owned devices.

## Verification

- `npm run build` passed locally.
- Secret scan of changed source files found no obvious token/private-key patterns.

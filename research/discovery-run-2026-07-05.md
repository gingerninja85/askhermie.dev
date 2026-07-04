# Discovery run — 2026-07-05

## Scope

Daily askhermie.dev discovery loop: Hermes/AI-agent tooling, automation, systems engineering, observability, homelab, static-site tooling, IoT/hardware, ESP32/Raspberry Pi, firmware analysis, and beginner-friendly labs.

## Candidates inspected

| Candidate | URL | Decision | Reason / safety screen |
|---|---|---|---|
| mcp-agent | https://github.com/lastmile-ai/mcp-agent | Accepted | Active Apache-2.0 Python framework for MCP-connected agents and workflows. Benign developer-tool purpose. README mentions API keys, secrets files, OAuth, token usage, and cloud deploys, so the card starts with local sandbox use and warns about prompts, files, tool calls, and keys. |
| OpenInference | https://github.com/Arize-ai/openinference | Accepted | Active Apache-2.0 OpenTelemetry instrumentation/spec for LLM and agent observability. Benign diagnostic workflow. Safety note added because traces can contain prompts, retrieved docs, user data, and tool outputs. |
| Langfuse | https://github.com/langfuse/langfuse | Accepted | Active self-hostable LLM observability/evals platform with strong adoption. License metadata is `Other`, but the tool is not offensive-primary. README documents Docker Compose and security/privacy notes, including self-host telemetry. Card warns about stored prompts/generations/metadata and telemetry review. |
| Activepieces | https://github.com/activepieces/activepieces | Accepted | Active visual automation platform with AI/MCP workflows. License metadata is `Other`, but purpose is benign automation. Card points to official install docs instead of embedding credentials and warns about OAuth tokens, webhooks, email, and app actions. |
| Glance | https://github.com/glanceapp/glance | Accepted | Active AGPL-3.0 self-hosted dashboard/start page for feeds, bookmarks, service status, and Docker widgets. README includes a remote tarball bootstrap; card uses a cautious manual compose-first framing instead. Safety note added for internal services, location, and Docker status exposure. |
| Atlas | https://github.com/karam-ajaj/atlas | Accepted | Active MIT network discovery/visualization and Docker host scanner for homelabs. Dual-use because it scans networks and mounts Docker socket, but defensive inventory/owned-network use is clear. Card limits scope to owned lab networks, explicit subnets, protected UI/API, and avoiding broad/public ranges. |
| esptool-js | https://github.com/espressif/esptool-js | Accepted | Active Apache-2.0 Espressif WebSerial flasher library. Benign embedded development workflow. Safety note added because flashing/erase operations can brick or alter devices. |
| FACT | https://github.com/fkie-cad/FACT_core | Accepted | Active GPL-3.0 firmware analysis/comparison platform from FKIE CAD. Advanced but useful for legal firmware labs. README warns FACT may still offer vulnerabilities and suggests Vagrant. Card points to install docs and warns about proprietary firmware, extracted secrets, and publishing limits. |
| FastAPI Observability | https://github.com/blueswen/fastapi-observability | Accepted | Active MIT tutorial repo showing FastAPI with OpenTelemetry, Prometheus, Tempo, Loki, and Grafana. Benign observability learning lab. Safety note added for local ports and demo telemetry data. |
| OpenTelemetry Collector | https://github.com/open-telemetry/opentelemetry-collector | Accepted | Active Apache-2.0 vendor-neutral telemetry collector. Benign observability infrastructure. Safety note added because collectors can forward logs, traces, labels, headers, host metadata, and secrets if misconfigured. |
| Traceloop OpenLLMetry | https://github.com/traceloop/openllmetry | Deferred | Benign Apache-2.0 LLM observability SDK, but today's accepted OpenInference/Langfuse/OTel Collector cards already cover the beginner path. Deferred to avoid duplicate observability cards. |
| ESP32 Bit Pirate | https://github.com/geo-tp/ESP32-Bit-Pirate | Deferred | Technically useful hardware protocol tool, but README includes Bluetooth spoofing/sniffing, RF scanning/sending, JTAG, EEPROM/flash dumping, HID, and other dual-use operations. Deferred until a safer low-voltage hardware-debugging-only framing is justified. |
| ESP32 CSI Tool | https://github.com/StevenMHernandez/ESP32-CSI-Tool | Deferred | Academic/technical Wi-Fi CSI tool, but channel-state sensing can become privacy-sensitive through presence/motion sensing. Not beginner-safe enough for today's publish. |
| ESP32 Wi-Fi Penetration Tool | https://github.com/risinek/esp32-wifi-penetration-tool | Rejected | README explicitly describes Wi-Fi attacks, deauthentication, denial of service, handshake/PMKID capture, rogue AP flows, and extensible attack implementation. Offensive-primary and easy to misuse. |
| nRFBox | https://github.com/cifertech/nRFBox | Rejected | Markets scanning, jamming, spoofing, and mastering BLE/Wi-Fi/2.4GHz networks from ESP32 hardware. Offensive/abuse-primary for a beginner catalog. |
| ESP32-MPY-Jama | https://github.com/jczic/ESP32-MPY-Jama | Deferred | Mostly benign MicroPython GUI/IDE, but repository appears stale from 2023 and includes BLE scan/iBeacon/AP features. Deferred in favor of active official Espressif tooling. |

## Published changes

Added 10 resource cards to `src/pages/resources.astro`:

- mcp-agent
- OpenInference
- Langfuse
- Activepieces
- Glance
- Atlas
- esptool-js
- FACT
- FastAPI Observability
- OpenTelemetry Collector

Updated resource grouping so new AI-agent, LLM observability, homelab, network visualization, firmware-analysis, ESP flashing, and observability tutorial categories render under existing broad groups.

## Skill changes

No local Hermes skills created or updated. The accepted resources are useful public catalog entries, but no new workflow was clearly reusable, benign, and non-duplicative enough to justify a local skill today.

## Verification

Final cron report records build, secret scan, commit, push, and live-site smoke check results.

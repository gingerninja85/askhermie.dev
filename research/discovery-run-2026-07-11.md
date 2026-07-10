# Discovery run — 2026-07-11 UTC

## Scope

Daily autonomous askhermie.dev discovery loop: Hermes/AI-agent tooling, automation, systems engineering, observability, homelab, static-site tooling, IoT/hardware, ESP32/Raspberry Pi, firmware analysis, and beginner-friendly labs.

## Candidates inspected

| Candidate | URL | Decision | Reason / safety screen |
|---|---|---|---|
| Kinocut | https://github.com/KyaniteLabs/kinocut | Accepted | Active Apache-2.0 local MCP/CLI for FFmpeg video editing and media-analysis workflows. Benign creative/automation use. Published card warns about overwrites, private recordings, and reviewing generated edits. |
| ESPForge | https://github.com/Mo3he/ESPForge | Accepted | Active MIT browser-based visual ESPHome YAML builder. Benign IoT/smart-home learning tool. Published card warns that ESPHome configs can contain Wi-Fi, API, MQTT, OTA, and encryption secrets. |
| LILYGO Spark | https://github.com/Xinyuan-LilyGO/LILYGO-Spark | Accepted | Active MIT ESP firmware hub/flasher/analyzer for LILYGO and other ESP devices. Useful hardware workflow but sensitive. Published card scopes use to owned hardware and warns that flashing/dumping can erase devices or expose secrets and identifiers. |
| MemMap Explorer | https://github.com/Zepp-Hanzj/MemMapExplorer | Accepted | Active GPL-2.0 Windows MAP/ELF memory-layout treemap UI. Useful for embedded build-size and firmware learning. Published card warns that MAP/ELF files reveal source paths, symbols, and implementation details. |
| genmon | https://github.com/jgyates/genmon | Accepted | Active GPL-2.0 Raspberry Pi generator monitor. Legitimate homelab/resilience fit but safety-critical hardware. Published card requires read-only-first setup and warns about wiring, controller actions, and private dashboards. |
| enviro-monitor | https://github.com/roscoe81/enviro-monitor | Accepted | MIT Raspberry Pi Enviro+ air-quality/environment sensing project. Benign hardware learning fit. Published card warns readings are approximate, feeds can reveal location/routines, and credentials/electronics need protection. |
| ESProFile | https://github.com/alexthecat123/ESProFile | Accepted | ESP32-based Apple Lisa ProFile/Widget drive emulator and diagnostic hardware project. Niche but benign retrocomputing/hardware learning. Published card warns about fragile vintage hardware, voltages, wiring, and backups. |
| Cecil | https://github.com/Cecilapp/Cecil | Accepted | Active EUPL static-site generator for Markdown/Twig/PHP workflows. Low-risk publishing tool. Published card warns generated output can expose drafts, screenshots, private URLs, and config. |
| Documentalist | https://github.com/palantir/documentalist | Accepted | Apache-2.0 living documentation generator from Palantir. Low-risk docs tooling. Published card warns docs output can expose internal APIs and unreleased design notes. |
| Simply Static | https://github.com/Simply-Static/simply-static | Accepted | Active GPL WordPress static-export plugin. Useful for safer static publishing from WordPress. Published card requires staging/export review and warns about draft/private media/admin URL/form endpoint leakage. |
| Callimachus | https://github.com/BetaBots-LLC/callimachus | Deferred | Relevant local AI-agent history index, but includes shell command execution, provider API keys, credentials, and broad agent-history ingestion. Needs a deeper privacy/least-privilege review before beginner publication. |
| Perseus | https://github.com/Perseus-Computing-LLC/perseus | Deferred | Interesting AI-agent context/memory tooling, but broad product family includes security analyzers, persistent memory, PR automation, cloud/token/secret surfaces, and many MCP tools. Needs deeper review before beginner publication. |
| Everruns | https://github.com/everruns/everruns | Deferred | MIT durable-agent platform with Slack/webhooks/A2A/MCP/HTTP, multi-tenant orgs, envelope-encrypted secrets, and remote MCP support. Potentially useful, but too broad and credential-heavy for today’s conservative publish. |
| NTM | https://github.com/Dicklesworthstone/ntm | Deferred | Multi-agent tmux control plane is relevant, but install path is curl-to-shell and the tool orchestrates agents, approvals, REST/WebSocket surfaces, and tokens. Needs safer install/audit framing. |
| FirmwareDroid | https://github.com/FirmwareDroid/FirmwareDroid | Deferred | Legitimate Android firmware/app analysis research framework, but bundles many security scanners including secret-leak oriented APK tooling and optional external APIs. Too advanced/dual-use for a beginner card without dedicated lab framing. |
| rpi-mqtt-monitor | https://github.com/hjelev/rpi-mqtt-monitor | Deferred | Raspberry Pi/Home Assistant monitoring is useful, but features include restart/shutdown/update and custom script execution from Home Assistant, plus MQTT/REST credentials and installer side effects. Needs least-privilege review. |
| Blackbox | https://github.com/maxjb-xyz/blackbox | Deferred | Homelab event timeline is relevant, but quickstart and features touch Docker events, config-file changes, systemd units, secrets, and likely Docker socket access. Needs dedicated Docker-socket and privacy review. |
| ESProFile ready-made disk images | https://github.com/alexthecat123/ESProFile | Deferred note | The project was accepted for hardware docs/source. Ready-made third-party-hosted disk images were not recommended because licensing/provenance of vintage OS images needs separate review. |

## Published changes

Added 10 resource cards to `src/pages/resources.astro`:

- Kinocut
- ESPForge
- LILYGO Spark
- MemMap Explorer
- genmon
- enviro-monitor
- ESProFile
- Cecil
- Documentalist
- Simply Static

Updated resource group category arrays so the new cards render under existing reader-intent groups.

## Skill changes

No local Hermes skills created or updated. The accepted resources are useful catalog entries, but existing skills already cover ESPHome, static publishing, and codebase tooling, and none of today’s accepted tools introduced a clearly non-duplicative safe workflow worth preserving as a local skill.

## Verification notes

Final cron report records Astro build, secret scan, commit, push, remote SHA, and live-site smoke check results.

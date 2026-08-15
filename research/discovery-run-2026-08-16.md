# Discovery run — 2026-08-16

## Accepted for publication

1. **Linux Service Center** (`Python-XP1/linux-service-center`) — accepted as benign local Raspberry Pi/Linux service-management learning tooling. Safety screened README, MIT license, active status, systemd-only scope, sudo warning, GUI/CLI modes, and early-stage homelab caveat; published with owned-system, sudo, and production-avoidance warnings.
2. **NasberryPi** (`WastelandSYS/nasberrypi`) — accepted as Raspberry Pi NAS lab tooling. Safety screened README, GPL-3.0 license, guided storage setup, Samba sharing, safe-mode/panic-lock states, doctor command, install path, and data-exposure risks; published with disposable-drive, backup, and no-internet-SMB warnings.
3. **Blackbox Infrastructure Journal** (`maxjb-xyz/blackbox`) — accepted as self-hosted homelab event-correlation/forensic-timeline tooling. Safety screened README, AGPL-3.0 license, beta caveat, non-root containers, Docker/config/systemd/uptime event model, placeholder-secret quickstart, and Docker metadata risk; published with private-UI, token-rotation, and secret-file monitoring warnings.
4. **AgentEval** (`AgentEvalHQ/AgentEval`) — accepted as defensive .NET AI-agent evaluation tooling. Safety screened README, MIT license, CI/security badges, preview warning, tool-order assertions, stochastic evaluation, memory benchmarks, Gatekeeper/red-team checks, and CLI install path; published with preview/non-safety-critical and private-benchmark-data warnings.
5. **Haystack** (`deepset-ai/haystack`) — accepted as mature Python RAG/agent orchestration framework. Safety screened README, Apache-2.0 license, PyPI install path, CI/license/OpenSSF badges, modular pipeline scope, telemetry/docs pointers, and API-key/document-leakage risks; published with public-data-first, environment-variable, and telemetry-review warnings.

## Already present / inspected, not duplicated

- **ESP32 NUT Server Bridge** (`maverick1982/esp32-nut`) — already in catalog; inspected again from ESP32/UPS bridge results.
- **TinyGo** (`tinygo-org/tinygo`) — already in catalog; inspected again from ESP32 tooling results.
- **LVGL** (`lvgl/lvgl`) — already in catalog; inspected again from embedded UI tooling results.
- **esptool-js** (`espressif/esptool-js`) — already in catalog; inspected again from browser flashing results.
- **XZG Multi-tool** (`xyzroe/XZG-MT`) — already in catalog; inspected again from chip flashing/management results.
- **ServiceRadar** (`carverauto/serviceradar`) — already in catalog; inspected again from homelab observability results.
- **Kuvasz** (`kuvasz-uptime/kuvasz`) — already in catalog; inspected again from uptime monitoring results.
- **Maintenant** (`kOlapsis/maintenant`) — already in catalog; inspected again from self-hosted monitoring results.
- **Eneru** (`m4r1k/Eneru`) — already in catalog; inspected again from UPS orchestration results.
- **NanotDB / NanoTDB** (`aymanhs/nanotdb`) — already in catalog under a spelling variant; inspected again from edge observability results.
- **Zensical** (`zensical/zensical`) — already in catalog; inspected again from static-site results.
- **Dory** (`clidey/dory`) — already in catalog; inspected again from technical documentation site-generator results.

## Rejected / deferred

- **CyberStrike** (`CyberStrikeus/CyberStrike`) — rejected. README/API search markets an AI-augmented offensive security harness with attack skills, post-exploitation, OWASP/WSTG/CIS offensive automation, and red-team tooling; offensive-primary.
- **nyxstrike** (`CommonHuman-Lab/nyxstrike`) — rejected. Markets itself as an AI-powered penetration-testing platform for offensive security research; offensive-primary and no recognized GitHub license metadata in search results.
- **HexStrike AI** (`0x4m4/hexstrike-ai`) — rejected. Explicitly lets AI agents run 150+ cybersecurity tools for automated pentesting, vulnerability discovery, and bug-bounty automation; too offensive-primary for beginner publication.
- **GumCP** (`gumslone/GumCP`) — deferred. Relevant Raspberry Pi web control panel, but README exposes broad browser-driven SSH, arbitrary commands, package upgrades, cron, Docker control, optional API trigger keys, and a remote `wget ... && bash` installer; needs tighter hardening guidance before beginner publication.
- **Nora** (`solomon2773/nora`) — deferred. Strong Hermes/OpenClaw fleet-control fit, but it handles provider connections, runtime deployment, secrets, logs, terminal access, and MCP/CLI surfaces; needs deeper trust-boundary review before recommending to beginners.
- **second-brain** (`henrydaum/second-brain`) — deferred. Interesting local file intelligence/agent OS project, but broad workflow automation and multi-modal communication surfaces need deeper privacy and permission review first.
- **Athena-Public** (`winstonkoh87/Athena-Public`) — deferred. Local-first agentic PKM/memory idea is relevant, but the project stores long-lived personal context and governs autonomy; needs a privacy/retention review before publication.
- **Omnigent** (`omnigent-ai/omnigent`) — deferred. Relevant AI-agent meta-harness, but README's primary quickstart pipes a remote install script to shell and the product handles agent credentials, shared sessions, cloud sandboxes, and policy enforcement; needs safer install/trust framing.
- **Cellium Agent** (`Cellium-Project/Cellium-Agent`) — deferred. General self-evolving agent framework with file writes, web search, scheduled tasks, messaging channels, hot-plug components, and only badge-level license signal in the README/API mismatch; needs deeper safety and data-retention review.
- **ESP32Marauder** (`justcallmekoko/ESP32Marauder`) — rejected. ESP32 Wi-Fi/Bluetooth offensive/dual-use tool suite; too easily misused for unauthorized wireless activity.
- **ESP32-Bit-Pirate** (`geo-tp/ESP32-Bit-Pirate`) — deferred. Hardware protocol tool can be legitimate for owned boards, but broad hardware-hacking capability needs a narrower lab-only frame before beginner publication.

## Notes

- Inspected 28 candidates across AI-agent frameworks/evals/fleet control, Raspberry Pi dashboards/NAS tooling, ESP32/embedded tools, homelab observability, static-site generators, and offensive-primary security tooling.
- No malware, phishing, credential theft, exploit-pack, botnet, ransomware, piracy, fraud, spam, harassment, or offensive-primary resource was published.
- No secrets, tokens, API keys, credentials, personal phone numbers, private config, or cron changes were added.
- No Hermes skills created this run; accepted items are public-resource cards rather than novel reusable Hermes execution workflows.
- Existing catalog debt observed but not introduced: duplicate resource names `Eneru`, `MemMap Explorer`, and `LILYGO Spark` pre-exist this run.

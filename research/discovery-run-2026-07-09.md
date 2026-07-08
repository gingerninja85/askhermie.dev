# Discovery run — 2026-07-09 UTC

## Scope

Daily autonomous askhermie.dev discovery loop: Hermes/AI-agent tooling, automation, systems engineering, observability, homelab, static-site tooling, IoT/hardware, ESP32/Raspberry Pi, firmware analysis, and beginner-friendly labs.

## Candidates inspected

| Candidate | URL | Decision | Reason / safety screen |
|---|---|---|---|
| PDF Reader MCP | https://github.com/SylphxAI/pdf-reader-mcp | Accepted | Active MIT local-first PDF MCP server with evidence-first extraction, OCR provenance, and Docker/npm options. Useful for agent document workflows. Published card warns that PDFs can contain private content and extracted traces should be handled carefully. |
| agent-bom | https://github.com/msaad00/agent-bom | Accepted | Active Apache-2.0 AI/MCP/cloud posture scanner with local CLI scanning and opt-in read-only cloud connectors. Defensive scanner, not offensive-primary. Published card scopes first use to disposable repos and warns that findings/project metadata are sensitive. |
| Future AGI | https://github.com/future-agi/future-agi | Accepted | Active Apache-2.0 platform for LLM/agent evals, tracing, simulations, gateway, and guardrails. Useful for agent quality work. Published card warns that prompts, generations, metadata, and telemetry settings need careful handling. |
| apple-docs | https://github.com/g-cqd/apple-docs | Accepted | Active MIT offline Apple developer documentation corpus with CLI, MCP, and static site modes. Benign developer reference. README notes HTTP mode lacks built-in auth; published card keeps it on loopback/access-controlled use and notes disk requirements. |
| LLM Observability FOSS | https://github.com/sarva-20/LLM-Observability-FOSS | Accepted | Active MIT learning repo for Langtrace/OpenTelemetry/Jaeger LLM observability. README includes placeholder API key examples; published card explicitly warns never to commit `.env` files or export real prompts/user data to shared tracing backends. |
| Grafana OpenTelemetry Workshop | https://github.com/grafana/grafanacon2026-opentelemetry-instrumentation | Accepted | Active Apache-2.0 hands-on OpenTelemetry workshop app by Grafana. Benign local observability lab. Published card warns it opens local ports and includes fake login flows that must not be reused as production auth patterns. |
| NanoTDB | https://github.com/aymanhs/nanotdb | Accepted | Active MIT single-binary TSDB/dashboard for Raspberry Pi and edge metrics. Benign observability/homelab fit. Published card warns metrics and dashboards expose infrastructure/device state and should remain private. |
| Pi-Monitor | https://github.com/g1forfun/Pi-Monitor | Accepted | Active GPL-3.0 Raspberry Pi 5 local monitoring dashboard. Benign beginner homelab fit. Published card warns live system dashboards should stay on trusted LAN/localhost. |
| LabStack | https://github.com/JaredC01/LabStack | Accepted | Active GPL-3.0 collection of 3D-printable Raspberry Pi/SBC rackmount parts. Hardware-learning fit, no cyber abuse framing. Published card warns about airflow, screws, inserts, cable strain, and power safety. |
| Astral | https://github.com/elixir-volt/astral | Accepted | Active MIT Elixir static-site generator. Low-risk publishing/developer tool. Published card warns to review generated output for drafts, internal links, screenshots, and environment-derived config. |
| luasmith | https://github.com/jaredkrinke/luasmith | Accepted | Active small Lua/C static-site generator with link checking and no runtime dependencies. Low-risk site-building tool; README says experimental, so card warns workflows may break and generated output still needs review. |
| XZG Multi-tool | https://github.com/xyzroe/XZG-MT | Accepted | Active MIT browser-based WebSerial/WebUSB flasher for supported TI/Silabs/Espressif/Arduino/Telink devices. Useful hardware workflow. Published card warns flashing, NVRAM backup, and remote serial bridge modes are sensitive and only for hardware the user owns. |
| akm | https://github.com/itlackey/akm | Deferred | Relevant agent knowledge manager, but primary recommended install pipes a remote release script to shell/PowerShell. README has privacy notes, but per safety gate this needs safer install/audit framing before beginner publication. |
| cc-skills | https://github.com/terrylica/cc-skills | Deferred | Claude Code skills/plugin marketplace with broad third-party automations, social connectors, credentials, 1Password/OAuth, and internet-reading plugins. Needs deeper per-plugin review before recommending to beginners. |
| EdgeEver | https://github.com/tianma-if/edgeever | Deferred | Interesting Cloudflare-native notes app with MCP, but new serverless app with remote MCP/API/auth/data model; needs deeper privacy/security review before publication. |
| Heym | https://github.com/heymrun/heym | Deferred | Self-hosted/source-available AI workflow platform with agents, RAG, MCP, credentials, portals, and execution endpoints. Useful but broad and license/security model needs deeper review before beginner publication. |
| Purple | https://github.com/erickochen/purple | Deferred | SSH manager that syncs cloud providers, keys, passwords, Vault certs, Docker/Podman, and MCP. Legitimate admin use, but high credential/remote-access sensitivity plus remote install script means defer for a dedicated least-privilege review. |
| AMUD Dashboard | https://github.com/boubli/AMUD-Dashboard | Deferred | Homelab dashboard with Proxmox/Docker telemetry and container controls. README includes Proxmox token handling and agent secrets. Defer until security posture and beginner-safe install wording are reviewed. |
| Linux Service Center | https://github.com/Python-XP1/linux-service-center | Deferred | Local-first systemd service GUI/CLI, but it can start/stop/restart/enable services through sudo and is explicitly early-stage. Too side-effectful for a beginner card today. |
| dodeca | https://github.com/bearcove/dodeca | Deferred | Static-site generator looks useful, but the recommended install script fetches prebuilt binaries from object storage via curl-to-sh. Defer until a safer package/source install path is documented for the card. |
| Beacon | https://github.com/Bajusz15/beacon | Deferred | Secure remote access/monitoring/deploy agent for homelabs. Legitimate, but remote terminal/tunnel/deploy capabilities are high-impact and need deeper trust/auth review before publishing. |
| Wairz | https://github.com/digitalandrew/wairz | Deferred | AI-assisted firmware analysis with 60+ tools, credential/crypto detection, emulation, and MCP. Potentially valuable but advanced and dual-use; needs a dedicated firmware-lab safety review before recommending to beginners. |
| ESP32Marauder | https://github.com/justcallmekoko/ESP32Marauder | Rejected | Offensive/dual-use Wi-Fi/Bluetooth ESP32 tooling; rejected under safety gate. |
| T-REX-FIRMWARE | https://github.com/abdallahnatsheh/T-REX-FIRMWARE | Rejected | Wireless security firmware with offensive/recon features; rejected under safety gate. |
| ChimeraBLE | https://github.com/MatthewKuKanich/ChimeraBLE | Rejected | BLE security/reverse-engineering tool advertises GATT dump, clone/emulate, foxhunt, and MITM-style features. Too easy to misuse for unauthorized wireless activity. |
| ESP32 Bit Pirate | https://github.com/geo-tp/ESP32-Bit-Pirate | Deferred | Hardware protocol multitool can be useful on owned boards but is dual-use hardware hacking. Defer for deeper beginner-safe lab framing. |

## Published changes

Added 12 resource cards to `src/pages/resources.astro`:

- PDF Reader MCP
- agent-bom
- Future AGI
- apple-docs
- LLM Observability FOSS
- Grafana OpenTelemetry Workshop
- NanoTDB
- Pi-Monitor
- LabStack
- Astral
- luasmith
- XZG Multi-tool

Updated broad resource group category arrays so the new cards render under existing reader-intent groups.

## Skill changes

No local Hermes skills created or updated. The accepted resources are useful catalog entries, but none introduced a clearly non-duplicative, benign, repeatable Hermes workflow worth preserving as a local skill today.

## Verification notes

Final cron report records Astro build, secret scan, commit, push, remote SHA, and live-site smoke check results.

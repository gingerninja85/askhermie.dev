# Discovery run — 2026-08-18

## Accepted for publication

1. **AegisGate** (`ax128/AegisGate`) — accepted as defensive AI/LLM gateway tooling. Safety screened README, MIT license, active non-archived repo, OpenAI/Anthropic-compatible proxy scope, PII/secret redaction, prompt-injection detection, audit logging, Docker/local deployment, token-routing/admin-console risks, and MCP exposure concerns; published with localhost-first, trusted-upstream, credential, and audit-log warnings.
2. **Oh My Cassette** (`Cassette-Editor/oh-my-cassette`) — accepted as benign AI-assisted video-editing/MCP workflow tooling. Safety screened README, MIT license, Hermes/Codex/Claude/OpenCode plugin paths, Python/ffmpeg requirements, browser trial, account requirement, local MCP server framing, media-upload/privacy risks, and no offensive functionality; published with copy/media privacy warning.
3. **Podtrace** (`gma1k/podtrace`) — accepted as Kubernetes/eBPF diagnostics for owned clusters. Safety screened README, Apache-2.0 license, Artifact Hub/OpenSSF/SLSA signals, krew/signed tarball options, privileged-pod behavior, local mode, bounded diagnose/export mode, and cluster-data sensitivity; published with least-privilege kube-context and non-production-first warnings.
4. **NATS Surveyor** (`nats-io/nats-surveyor`) — accepted as official NATS monitoring/Prometheus exporter tooling. Safety screened README, Apache-2.0 license, Docker Compose start, credentials-file or username/password auth options, Prometheus/Grafana use, NATS-system-account scope, and metric/credential sensitivity; published with private-monitoring and secret-handling warnings.
5. **Pioreactor** (`Pioreactor/pioreactor`) — accepted as Raspberry Pi-based biology/hardware learning platform. Safety screened README/repo metadata, MIT license, accessible bioreactor hardware/software scope, Raspberry Pi orientation, active repo, and lab-safety/hardware risks; published with non-medical, low-risk organism, and hardware-safety warnings.
6. **Bresser Weather Sensor Receiver** (`matthias-bs/BresserWeatherSensorReceiver`) — accepted as benign Arduino/ESP32 environmental-sensor decoding. Safety screened README, MIT license, supported Bresser weather sensor list, CC1101/SX1276/SX1262/LR1121 hardware notes, Arduino/PlatformIO context, and RF/privacy boundaries; published with owned-sensor and local-regulation warnings.
7. **M5Unified** (`m5stack/M5Unified`) — accepted as official M5Stack ESP32 hardware abstraction library. Safety screened README, MIT license, Arduino/ESP-IDF support, display/touch/audio/IMU/power APIs, examples, supported devices, and hardware power risks; published with low-voltage/disconnect-actuator warning.
8. **ESP32 HTTP Client** (`PedroFnseca/esp32-http-client`) — accepted as lightweight ESP32 REST/JSON client library. Safety screened README, MIT license, Arduino/PlatformIO paths, low-memory JSON binding focus, tests/coverage badges, no credential examples copied, and IoT API privacy risks; published with TLS/token and non-production-endpoint warning.
9. **Secure Programmable Router** (`spr-networks/super`) — accepted as advanced homelab router/network segmentation tooling for owned networks. Safety screened README, BSD-3-Clause license, per-device Wi-Fi passwords, policy routing, DNS blocklists, WireGuard/router scope, Docker/ISO orientation, and lockout/exposure risks; published with lab-device backup and no-production-router-first warning.

## Already present / inspected, not duplicated

- **EMBArk** (`e-m-b-a/embark`) — already in catalog; inspected again from firmware-analysis search results. README shows web UI for EMBA firmware scanning, Ubuntu 24 support, sudo installer, server binding flags, and backend firmware-analysis scope.
- **Pyrrha** (`quarkslab/pyrrha`) — already in catalog; inspected again from firmware cartography results. README shows PyPI package, NumbatUI/Sourcetrail visualization, optional Ghidra/IDA mappers, and firmware-map workflow.
- **OWASP Firmware Security Testing Methodology** (`scriptingxss/owasp-fstm`) — already in catalog; inspected again from firmware-methodology results. README remains methodology/documentation focused but contains offensive-stage terminology, so existing card framing as authorized learning remains important.
- **KiCad MCP Pro** (`oaslananka/kicad-mcp-pro`) — already in catalog; inspected again from AI-agent/MCP search results.

## Rejected / deferred

- **ModelStudio Skills** (`modelstudioai/skills`) — deferred. Benign-looking curated agent-skill collection, but quick start requires Aliyun Model Studio API keys and installs agent skills/extensions; needs deeper review for credential handling, cloud billing, and what each bundled third-party skill can do before beginner publication.
- **Sutando** (`sonichi/sutando`) — deferred. Interesting self-hosted AI-agent/OS project, but README/search description says it rewrites itself and exposes a broad personal AI runtime; too much autonomy and privacy surface for a conservative beginner card without deeper review.
- **taOS** (`jaylfc/taOS`) — deferred. Self-hosted AI OS/memory/files/chat across local hardware may be useful, but it touches personal files and persistent memory; needs privacy, install, and data-retention review before recommendation.
- **Mdd SIM Gateway** (`MddIdd/mdd-sim-gateway`) — rejected for this catalog. SIM/eSIM gateway for VoWiFi/SMS/cellular egress is too close to telecom-abuse, fraud, and legal/regulatory ambiguity for beginner publication.
- **Home cluster repos** (`budimanjojo/home-cluster`, `mortennordbye/homelab`) — inspected but not published. They are personal GitOps homelab configurations rather than general-purpose beginner tools; useful as examples, but askhermie.dev should not become an awesome-list clone.

## Notes

- Inspected 18 candidates across AI-agent security, AI media/MCP, agent-skill collections, Kubernetes observability, NATS monitoring, Raspberry Pi hardware labs, ESP32/Arduino libraries, homelab routers, firmware-analysis tooling, and personal homelab examples.
- No malware, phishing, credential theft, exploit-pack, botnet, ransomware, piracy, fraud, spam, harassment, or offensive-primary resource was published.
- No secrets, tokens, API keys, credentials, personal phone numbers, private config, or cron changes were added.
- No Hermes skills created this run; accepted items are public resource cards rather than novel reusable Hermes execution workflows.
- Existing catalog debt observed but not introduced: duplicate resource names `Eneru`, `MemMap Explorer`, and `LILYGO Spark` pre-exist this run.

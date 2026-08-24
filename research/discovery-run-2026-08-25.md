# Discovery run — 2026-08-25

## Accepted for publication

1. **otel-desktop-viewer** (`CtrlSpice/otel-desktop-viewer`) — accepted as benign local OpenTelemetry viewing/lab tooling. Safety screened README, Apache-2.0 license, recent activity, multiple non-piped install paths, local UI/OTLP ports, Docker option, and telemetry privacy risks; published with localhost-only and sensitive-telemetry warnings.
2. **Clawmetry** (`vivekchand/clawmetry`) — accepted as benign read-only AI-agent observability. Safety screened README, MIT license, PyPI install path, OpenSSF/security/egress badges, read-only claim, local dashboard scope, supported runtime surface, and private prompt/session exposure risks; published with local-dashboard privacy warning.
3. **Worktrunk** (`max-sixty/worktrunk`) — accepted as benign git-worktree management for parallel AI-agent workflows. Safety screened README, license badge, CI badge, Homebrew/Cargo/Winget install paths, branch/worktree isolation model, and agent-diff review risks; published with test-and-review warning.
4. **Snakie** (`kevinmcaleer/Snakie`) — accepted as benign MicroPython IDE for connected microcontrollers. Safety screened README, GitHub Releases download path, Electron/serial/REPL/device file-browsing scope, optional AI ghost-text note, and physical-device risks; published with owned-board and disconnected-load warning.
5. **cairn** (`MorganKryze/cairn`) — accepted as benign homelab directory/start-page tooling. Safety screened README, GPL-3.0 license badge, build/security/test badges, tiny Docker image path, read-only config mount pattern, live demo/docs, and internal-service disclosure risks; published with LAN/authentication warning.
6. **OpenCaseLaw** (`jonashertner/opencaselaw`) — accepted as benign legal research/reference data. Safety screened README, MIT code / CC0 data claims, read-only no-key MCP setup, REST/API and downloadable dataset scope, legal-citation claims, and legal-advice/citation-verification risks; published with legal-research-not-advice warning.
7. **Lemonade** (`lemonade-sdk/lemonade`) — accepted as benign local AI serving/runtime. Safety screened README, Apache-2.0 license, official release/install links, local server/API compatibility positioning, model-management scope, and accidental API exposure/privacy risks; published with local-port and prompt-privacy warning.

## Rejected / deferred / already present

- **Wigolo** (`KnockOutEZ/wigolo`) — already present / inspected; not duplicated.
- **Dashwise** (`andreasmolnardev/dashwise`) — already present / inspected; not duplicated.
- **MicroPythonOS** (`MicroPythonOS/MicroPythonOS`) — deferred. The README in the repository is only a pointer to external docs, so the local repo did not provide enough install/safety detail for a beginner card this run.
- **Anytype Toolbox** (`stevelr/anytype`) — deferred. Useful CLI/MCP automation for Anytype, but it handles spaces, files, chats, backups, gRPC/HTTP credentials, and authenticated automation; needs deeper credential-storage and permission-scope review.
- **DB MCP Server** (`FreePeak/db-mcp-server`) — deferred. Legitimate database MCP idea, but README examples include real-looking password fields and the tool can execute SQL across databases; not beginner-safe without a least-privilege/read-only recipe.
- **LoongSuite Pilot** (`alibaba/loongsuite-pilot`) — deferred. Relevant agent telemetry collector, but it installs hooks/plugins and exports local agent prompts/tool arguments to JSONL/SLS/HTTP/OTLP; Clawmetry was the lower-risk beginner card this run.
- **FirmWire** (`FirmWire/FirmWire`) — deferred. Strong firmware/baseband emulation research project, but fuzzing/debugging cellular baseband firmware is advanced and easy to misframe; needs a carefully bounded learning-lab entry before publication.
- **efiXplorer** (`REhints/efiXplorer`) — deferred. Legitimate UEFI reverse-engineering plugin, but IDA/UEFI workflows are advanced and not a good beginner card without a small safe sample workflow.
- **r0crawl_skills** (`manyuegong33/r0crawl_skills`) — rejected. Markets itself as a large reverse-engineering/offensive skill arsenal including web, Android, iOS, Frida, native binaries, protocols, and browser areas; too broad and offensive-adjacent for askhermie.dev.
- **ESP32 Marauder** (`justcallmekoko/ESP32Marauder`) — rejected again. Offensive-primary Wi-Fi/Bluetooth capability remains outside publication scope.
- **nRF24 jammer** (`W0rthlessS0ul/nRF24_jammer`) — rejected again. Explicit jamming/interference tooling remains outside publication scope.

## Notes

- Inspected 18 candidates across OpenTelemetry tooling, AI-agent observability, AI-agent worktrees, local AI serving, MCP/data access, homelab dashboards, MicroPython/ESP32 tooling, and firmware/reverse-engineering projects.
- Existing catalog checked by exact `name:` fields inside the `const resources: Resource[]` block before adding new entries.
- No malware, phishing, credential theft, exploit-pack, botnet, ransomware, piracy, fraud, spam, harassment, jamming, or offensive-primary resource was published.
- No secrets, tokens, API keys, credentials, personal phone numbers, private config, or cron changes were added.
- No Hermes skills created this run. The accepted resources are useful cards, but existing local-AI, agent-orchestration, observability, homelab, and hardware skills already cover the broad reusable workflows.
- Existing catalog debt observed but not introduced: duplicate resource names `Eneru`, `MemMap Explorer`, and `LILYGO Spark` pre-exist this run.

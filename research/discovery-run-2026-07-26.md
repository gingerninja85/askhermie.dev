# Discovery run — 2026-07-26

## Scope

Daily autonomous askhermie.dev discovery loop. Searched GitHub and web results across AI-agent orchestration, MCP/code intelligence, LLM observability, AI token/cost tracking, Raspberry Pi / edge observability, process inspection, ESP32 / embedded UI tooling, and hardware learning.

## Pre-existing working tree

The run started clean on `main`; `git status --short` showed no pre-existing modified or untracked files.

## Accepted / published

1. **Bernstein** — accepted. Deterministic orchestrator for CLI coding agents in isolated git worktrees with replay journals, merge gates, and optional audit receipts. Published with safety guidance about sandbox repos, manual review, budget limits, and private audit logs.
2. **codebase-memory-mcp** — accepted. Local MCP server that indexes code into a tree-sitter knowledge graph for symbol, route, and call-chain queries. Published with warnings that it reads source code and can edit MCP/client config.
3. **Axon** — accepted. Local OpenTelemetry-native dashboard/CLI for LLM and agent traces. Published with warnings that traces can include prompts, tool arguments, URLs, paths, and model outputs.
4. **Token Tracker** — accepted. Local-first token/cost dashboard for AI coding tools. Published with warnings that local AI-tool logs can expose project names, models, costs, and prompt metadata.
5. **witr** — accepted. CLI/TUI for tracing a process, port, container, or file back to what started it. Published with warnings that process and port output can reveal private system details.
6. **LVGL** — accepted. Open-source embedded graphics library for MCU/MPU user interfaces, including ESP32-style display projects. Published with voltage, wiring, backlight, and board-support warnings.
7. **MiniOS ESP** — accepted. FreeRTOS-based Unix-like command-line environment for ESP32/RP2350 learning. Published with firmware flashing, owned-hardware, actuator-disconnect, and Wi-Fi credential warnings.

## Already present / inspected, not duplicated

- **NanoTDB** — already in catalog as edge observability; re-inspected from the 2026 GitHub search results and not duplicated.
- **TinyGo** — already in catalog as microcontroller Go tooling; re-inspected and not duplicated.

## Rejected / deferred

1. **ESP32Marauder** (`justcallmekoko/ESP32Marauder`) — rejected. README markets it as a Wi-Fi/Bluetooth offensive and defensive ESP32 suite; too much offensive-primary wireless tooling for beginner-facing publication.
2. **NETHERCAP** (`Cancro29/NETHERCAP`) — rejected. Wi-Fi penetration-testing firmware with deauth-related wording; offensive-primary and easily misused.
3. **nRF24_jammer** (`W0rthlessS0ul/nRF24_jammer`) — rejected. README describes RF interference/jamming against Bluetooth, BLE, drones, Wi-Fi, and Zigbee; illegal-disruption risk.
4. **ESP32 Bit Pirate** (`geo-tp/ESP32-Bit-Pirate`) — deferred. Potentially useful hardware-hacking bus tool, but beginner-facing publication needs deeper review and strict owned-device framing because it interacts with low-level protocols.
5. **GumCP** (`gumslone/GumCP`) — deferred. Useful Raspberry Pi control panel, but quick install downloads and runs a remote installer and the app exposes SSH execution, command buttons, GPIO, Docker, and secret URLs; needs deeper safe-install and hardening review.
6. **TokenTelemetry** (`VasiHemanth/tokentelemetry`) — deferred. Useful local agent observability idea, but the primary install path pipes remote shell / PowerShell scripts directly into an interpreter; wait for a safer beginner install path or deeper script audit.
7. **wmux** (`openwong2kim/wmux`) — deferred. Interesting agent workspace multiplexer, but current README centers native Windows/macOS GUI releases and broad browser/agent persistence; needs deeper review before recommending to general readers.
8. **worldmonitor** (`koala73/worldmonitor`) — deferred. Real-time global intelligence dashboard surfaced in MCP search results; unusually broad intelligence/infrastructure monitoring scope needs deeper reputation and data-boundary review.

## Candidate inspection count

Inspected 17 candidates total: Bernstein, wmux, codebase-memory-mcp, GumCP, NanoTDB, LVGL, TinyGo, MiniOS ESP, Axon, Token Tracker, TokenTelemetry, witr, ESP32Marauder, NETHERCAP, ESP32 Bit Pirate, nRF24_jammer, and worldmonitor.

## Safety notes

- No malware, phishing, credential theft, ransomware, botnet, exploit-pack, piracy, fraud, spam, harassment, illegal bypass, or offensive-primary tooling was published.
- Every newly accepted card includes a concrete example use case and an explicit safety note.
- Agent/MCP/observability tools are framed around local testing, disposable repos/projects, manual review, private traces/logs, and sensitive metadata handling.
- Hardware/embedded tools are framed around owned boards, supported demos, wiring/voltage checks, safe flashing, and no committed Wi-Fi credentials.
- No real secrets, tokens, credentials, personal phone numbers, or private config were added.

## Catalog debt observed

The resource-name duplicate check still reports pre-existing duplicate names unrelated to this run: `Eneru`, `MemMap Explorer`, and `LILYGO Spark`. No newly introduced duplicate resource names remain.

## Skills

No local Hermes skills were created or updated. The accepted tools are useful catalog entries, but this run did not identify a safe, non-duplicative, repeatedly executable workflow that clearly justified a new skill over existing agent, MCP, observability, smart-home, embedded, and systems skills.

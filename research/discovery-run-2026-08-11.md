# Discovery run — 2026-08-11

## Accepted for publication

1. **Microsoft MCP Gateway** (`microsoft/mcp-gateway`) — accepted as a benign MCP reverse proxy / gateway for governed local or Kubernetes MCP-server routing. Safety screened GitHub metadata, README, MIT license, active maintenance, local deployment path, Kubernetes scope, telemetry, adapter lifecycle controls, and secret/access concentration risk; published with read-only demo-adapter, auth, telemetry, and no-production-secrets warnings.
2. **DockDash** (`dougmaitelli/DockDash`) — accepted as a self-hosted Docker update/service-health dashboard. Safety screened GitHub metadata, README, AGPL-3.0 license, active maintenance, Docker/socket implications, and changelog/update-monitoring behavior; published with LAN/VPN, review-compose, avoid-public-exposure, and read-only-first warnings.
3. **otel-cli** (`equinix-labs/otel-cli`) — accepted as a benign OpenTelemetry CLI for instrumenting shell scripts and automation. Safety screened GitHub metadata, README, Apache-2.0 license, active maintenance, install methods, OTLP endpoint behavior, and trace-sensitivity implications; published with local-collector and no-secret-attributes warnings.
4. **espup** (`esp-rs/espup`) — accepted as a Rust toolchain manager for Espressif development. Safety screened README, project purpose, install path, security-audit badge, and hardware-flashing implications; published with owned-board, correct-target, and credential-handling warnings.
5. **esp-hal** (`esp-rs/esp-hal`) — accepted as a bare-metal Rust HAL for Espressif chips. Safety screened README, project purpose, license badge, examples-first workflow, and physical-pin-control risks; published with LED-only, disconnect-loads, and pin-mapping warnings.
6. **esp-idf-hal** (`esp-rs/esp-idf-hal`) — accepted as Rust embedded-hal wrappers over ESP-IDF drivers. Safety screened README, crates/docs references, examples, and Wi-Fi/OTA configuration risk; published with ignored-local-config and owned-board warnings.

## Already present / inspected, not duplicated

- **HomeLab Monitor** (`SikamikanikoBG/homelab-monitor`) — already in catalog as `HomeLab Monitor`; inspected again from homelab monitoring search results.
- **Axon** (`langchain-tracer/Axon`) — already in catalog as `Axon`; inspected again from LLM observability search results.
- **FACT** (`fkie-cad/FACT_core`) — already in catalog as `FACT`; inspected again from firmware analysis search results.
- **ME Analyzer** (`platomav/MEAnalyzer`) — already in catalog as `ME Analyzer`; inspected again from firmware analysis search results.
- **VitePress** (`vuejs/vitepress`) — already in catalog as `VitePress`; inspected again from static-site generator search results.
- **Dory** (`clidey/dory`) — already in catalog as `Dory`; inspected again from documentation generator search results.
- **Documentalist** (`palantir/documentalist`) — already in catalog as `Documentalist`; inspected again from documentation generator search results.
- **Inkycal** (`aceinnolab/Inkycal`) — already in catalog as `Inkycal`; inspected again from Raspberry Pi dashboard search results.
- **esp-generate** (`esp-rs/esp-generate`) — already in catalog as `esp-generate`; inspected again from ESP32 Rust search results.
- **The Rust on ESP Book** (`esp-rs/book`) — already in catalog as `The Rust on ESP Book`; inspected again from ESP32 Rust search results.
- **Waveshare ePaper Display Dashboard** (`mendhak/waveshare-epaper-display`) — already in catalog as `Waveshare ePaper Display Dashboard`; inspected again from Raspberry Pi dashboard search results.

## Rejected / deferred

- **Coddy Agent** (`coddy-project/coddy-agent`) — deferred. It is relevant agent tooling, but the README includes remote install-script paths, API key/token examples, Telegram gateway, cron scheduler, long-term memory, and broad MCP/tool surfaces; needs deeper least-privilege and secret-handling review before beginner publication.
- **CLI Printing Press** (`mvanhorn/cli-printing-press`) — deferred. Relevant AI-agent CLI generation idea, but README language emphasizes discovering undocumented/hidden APIs and uses remote install-script patterns; legal/API-boundary ambiguity makes it a poor beginner recommendation today.
- **MCP Gateway & Registry** (`agentic-community/mcp-gateway-registry`) — deferred. Relevant enterprise MCP gateway, but README/examples include Keycloak/Entra, OAuth credentials, tokens, and secret-management complexity; needs a narrower safe local quickstart review.
- **AgenticX** (`DemonDamon/AgenticX`) — deferred. Relevant multi-agent framework, but README includes a LiteLLM malicious-release advisory and many provider/key/tool integrations; defer until the current dependency/security posture and safe minimal quickstart are clearer.
- **GumCP** (`gumslone/GumCP`) — deferred. Raspberry Pi control panel is useful, but it can run shell commands over SSH, expose GPIO/systemd/process controls, and uses install-script patterns; needs stronger hardening guidance before beginner publication.
- **meshpoint** (`KMX415/meshpoint`) — deferred. Interesting Meshtastic/Raspberry Pi base station, but native TX/RX, regional radio compliance, capture/messaging behavior, default/setup secrets, and physical RF operation require a more careful legal and safety review.
- **Embedded Debugger MCP** (`Adancurusul/embedded-debugger-mcp`) — deferred. Useful for owned embedded debugging, but MCP-exposed flash, memory, breakpoint, and target-control tools can alter hardware and firmware; needs a dedicated safe workflow before publication.
- **RMK** (`rmk-rs/rmk`) — deferred. Benign keyboard firmware, but early beginner usage can brick/disable input devices and README install path includes remote script patterns; lower priority than espup/esp-hal today.

## Notes

- Inspected 25 candidates across AI-agent tools, MCP gateways, observability CLI/dashboards, homelab dashboards, Raspberry Pi dashboards, firmware analysis, static-site generators, ESP32 Rust tooling, and embedded debugging.
- GitHub API anonymous search hit rate limiting partway through discovery, so later README checks used raw.githubusercontent.com and existing search output where available.
- No malware, phishing, credential theft, exploit-pack, botnet, ransomware, piracy, fraud, spam, harassment, or offensive-primary tooling was published.
- No secrets, tokens, API keys, credentials, personal phone numbers, private config, or cron changes were added.
- No Hermes skills created this run; accepted items are public-resource cards rather than novel reusable Hermes execution workflows.

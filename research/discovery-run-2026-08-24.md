# Discovery run — 2026-08-24

## Accepted for publication

1. **Rove** (`Sma1lboy/rove`) — accepted as benign AI coding-agent orchestration. Safety screened README, MIT license badge, npm package path, CI badge, git-worktree isolation model, persistent terminal sessions, supported agent CLI scope, and remote installer risk; published with `npx` first move and warnings about agent command/file-editing authority.
2. **Storybloq** (`Storybloq/storybloq`) — accepted as benign project-memory / MCP tooling for Claude Code and Codex. Safety screened README, npm install path, file-backed `.story/` design, MCP/server and hook scope, local bus design, usage-limit resume behavior, and private project-memory risks; published with throwaway-repo first step and `.story/` commit/privacy warning.
3. **Holeberry** (`pedrovieira/Holeberry`) — accepted as benign homelab Pi-hole menu-bar tool. Safety screened README, MIT license badge, GitHub Releases install path, macOS permissions, Keychain credential storage note, local-network/browser automation permissions, and DNS-impact risks; published with local Pi-hole and browser-permission warnings.
4. **Augur** (`starkross/augur`) — accepted as benign observability static-analysis tooling. Safety screened README, Apache-2.0 license, CI/Go Report Card/release badges, Homebrew/Go/Docker install paths, OPA/Rego policy model, and config-secret risks; published with sanitized-config and hardcoded-key warnings.
5. **OTelBin** (`dash0hq/otelbin`) — accepted as benign OpenTelemetry Collector configuration editor/visualizer. Safety screened README, Apache-2.0 license badge, SonarCloud badge, hosted editor scope, optional sharing/login feature, and hosted-config privacy risks; published with sanitize-before-paste warning.

## Rejected / deferred / already present

- **SuperlocalMemory** (`qualixar/superlocalmemory`) — deferred. It appears useful for local AI-agent memory governance, but the project handles cross-agent/team memory and token-bearing integrations; needs deeper privacy and permission review before a beginner card.
- **UniFi MCP** (`sirkirby/unifi-mcp`) — deferred. Legitimate homelab/UniFi MCP use, but it operates against network-controller, Protect, Access, and Drive APIs with credentials and device-control implications; not beginner-safe without a dedicated least-privilege review.
- **systemprompt-template** (`systempromptio/systemprompt-template`) — deferred. Governance/evaluation positioning is relevant, but README examples and workflow surface mention credentials, tokens, and policy infrastructure; needs deeper review before recommending.
- **Atomic Agent** (`AtomicBot-ai/atomic-agent`) — deferred. Local-first agent platform may be useful, but broad local tools, API tokens, and workspace control need hands-on permission-scope review.
- **AMUX** (`mixpeek/amux`) — deferred. AI coding-agent control plane is relevant, but it orchestrates many parallel agents and exposes management surfaces; Rove was the lower-friction publish this run.
- **NetworkOptimizer** (`Ozark-Connect/NetworkOptimizer`) — deferred. UniFi optimization, monitoring, and security-audit tooling touches live network configuration; needs deeper safety screening before beginner publication.
- **XZG-MT** (`xyzroe/XZG-MT`) — deferred. Browser-based chip flashing/management can be legitimate, but remote/local flashing mistakes can brick devices; needs device-scope review before publication.
- **nRF24 jammer** (`W0rthlessS0ul/nRF24_jammer`) — rejected. The project is explicitly a jammer; radio jamming/offensive interference is outside askhermie.dev scope.
- **ESP32 Marauder** (`justcallmekoko/ESP32Marauder`) — rejected. README markets it as Wi-Fi/Bluetooth offensive and defensive tooling; offensive-primary wireless capability is outside publishing scope.
- **Matryca Plumber** (`MarcoPorcellato/matryca-plumber`) — already present / inspected; not duplicated.
- **ESP32 NUT Server Bridge** (`maverick1982/esp32-nut`) — already present / inspected; not duplicated.
- **FACT** (`fkie-cad/FACT_core`) — already present / inspected as `FACT`; not duplicated.
- **ServiceRadar** (`carverauto/serviceradar`) — already present / inspected; not duplicated.
- **Pulse** (`rcourtman/Pulse`) — already present / inspected; not duplicated.
- **TinyGo** (`tinygo-org/tinygo`) — already present / inspected; not duplicated.
- **otel-cli** (`equinix-labs/otel-cli`) — already present / inspected; not duplicated.
- **Binwalk** (`ReFirmLabs/binwalk`) — already present / inspected; not duplicated.

## Notes

- Inspected 23 candidates across AI-agent orchestration, MCP/network tooling, local memory, homelab observability, Pi-hole tooling, ESP32/firmware tools, and OpenTelemetry configuration tooling.
- No malware, phishing, credential theft, exploit-pack, botnet, ransomware, piracy, fraud, spam, harassment, jamming, or offensive-primary resource was published.
- No secrets, tokens, API keys, credentials, personal phone numbers, private config, or cron changes were added.
- No Hermes skills created this run. The accepted resources are useful cards, but existing agent-orchestration, MCP, observability, and hardware skills already cover the broad reusable workflows.
- Existing catalog debt observed but not introduced: duplicate resource names `Eneru`, `MemMap Explorer`, and `LILYGO Spark` pre-exist this run.

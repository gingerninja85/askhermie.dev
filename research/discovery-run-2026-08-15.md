# Discovery run — 2026-08-15

## Accepted for publication

1. **MakerChecker** (`makerchecker/MakerChecker`) — accepted as benign AI-agent governance/security tooling. Safety screened README, license badge, local `npx @makerchecker/scan` scanner path, deny-by-default grants, human approvals, signed audit logging, and risk that scan reports reveal project capabilities or secret-handling mistakes; published with private-report and review-generated-fixes warnings.
2. **AgentGate** (`monteslu/agentgate`) — accepted as self-hosted AI-agent gateway with human-in-the-loop writes. Safety screened README, CI/npm badges, local `npx agentgate` quickstart, password-first setup, service/API-key model, Hermes plugin mention, and risk around personal/SaaS data access; published with LAN/VPN/auth and least-privilege token warnings.
3. **KiCad MCP Pro** (`oaslananka/kicad-mcp-pro`) — accepted as PCB-design MCP tooling with a bounded read-only default profile. Safety screened README, MIT license badge, CI/CodeQL/OpenSSF badges, PyPI/npm install paths, read-only/default vs write/release profiles, and risk of modifying PCB designs or manufacturing outputs; published with copy/version-control/human-fabrication-review warnings.
4. **ESPShell** (`vvb333007/espshell`) — accepted as ESP32/Arduino serial debugging and learning tooling. Safety screened README, Arduino Library Manager install path, serial shell/debug scope, supported ESP32 variants, hardware-interface command behavior, and risk of toggling pins or attached devices; published with owned-board and disconnect-dangerous-load warnings.
5. **Home Screens** (`home-screens/home-screens`) — accepted as Raspberry Pi/self-hosted smart-display tooling. Safety screened README, Next.js/self-hosted scope, Raspberry Pi kiosk model, built-in modules, plugin-from-URL system, calendar/photo/home-data integrations, and privacy risks; published with private-UI, public-module-first, and plugin-review warnings.
6. **Tesserae** (`dmellok/tesserae`) — accepted as e-ink dashboard/self-hosted display tooling. Safety screened README, AGPL license badge, release/CI badges, Raspberry Pi/ESP32/Home Assistant/MQTT topics, server-rendered dashboard model, and home-state/MQTT/calendar privacy risks; published with local-test-panel and private-server warnings.
7. **UniFi CLI** (`rvben/unifi-cli`) — accepted as homelab network CLI/TUI for owned UniFi controllers. Safety screened README, PyPI/crates install paths, config-file permissions note, TLS warning, destructive-command confirmations, API-key handling, and network-privacy risks; published with read-only-first, protected config, and no-shell-history-key warnings.

## Already present / inspected, not duplicated

- **MemBrowse** (`membrowse/membrowse-action`) — already in catalog; inspected again from embedded firmware memory/CI results.
- **Drydock** (`CodesWhat/drydock`) — already in catalog; inspected again from container update monitoring results.
- **Pankha** (`Anexgohan/pankha`) — already in catalog; inspected again from homelab fan-control results.
- **ServiceRadar** (`carverauto/serviceradar`) — already in catalog; inspected again from homelab observability results.
- **Kuvasz** (`kuvasz-uptime/kuvasz`) — already in catalog; inspected again from uptime/SSL monitoring results.
- **Maintenant** (`kOlapsis/maintenant`) — already in catalog; inspected again from self-hosted monitoring results.

## Rejected / deferred

- **Serf** (`prime-radiant-inc/serf`) — deferred. Relevant non-interactive coding-agent tooling, but GitHub API did not report a recognized license, install examples pipe remote scripts to shell, and first-run state/auth-token behavior needs deeper review before beginner publication.
- **Gram** (`speakeasy-api/gram`) — deferred. Relevant AI/MCP control plane, but hosted/signup flow, private networking/tunneling, prompt/response inspection, and missing recognized GitHub license metadata need deeper trust-boundary review before recommending to beginners.
- **Prism Coder** (`dcostenco/prism-coder`) — deferred. Useful local-first agent memory idea, but it persists agent sessions/knowledge graphs, can configure multiple hosts, has cloud/team subscription features, and needs deeper privacy/retention review before publication.
- **Preloop** (`preloop/preloop`) — deferred. Strong fit as AI-agent control plane, but onboarding rewrites local agent configs, mints managed runtime credentials, and the quickstart pipes a remote install script; needs safer install/onboarding framing before publication.
- **Peta Core** (`dunialabs/peta-core`) — deferred. Relevant MCP control-plane runtime, but it handles credential vaulting/OAuth/policies and uses ELv2 licensing; beginner-safe deployment and trust boundaries need deeper review.
- **OpenTag** (`linxidnju/OpenTag`) — deferred. Relevant Slack-native team agent gateway, but it is MVP status and touches team chat, memories, approvals, artifacts, and tokens; needs deeper auth/data-retention review.
- **eda-agent** (`salitronic/eda-agent`) — deferred. Relevant EDA automation, but broad live Altium/KiCad/EasyEDA tool surface can modify open designs and the README warns some tools may crash Altium; KiCad MCP Pro’s bounded default profile was the safer card for today.
- **kicad-jlcpcb** (`BeckhamLabsLLC/kicad-jlcpcb`) — deferred. Interesting KiCad/JLCPCB workflow, but it can source parts, generate boards, and hand off to EasyEDA/JLCPCB ordering; needs tighter fabrication-cost and design-liability warnings first.
- **blackbox-re-agent / revagent** (`maosasagawa/blackbox-re-agent`) — deferred. Static reverse-engineering workflows can be legitimate, but the README includes crackme/password-solving examples and malware/APK analysis; too dual-use for beginner publication without a narrow defensive/owned-artifact frame.
- **AL-ANQA-FIRMWARE** (`abdallahnatsheh/AL-ANQA-FIRMWARE`) — rejected. README explicitly markets offensive LilyGo T-Deck firmware with deauth, evil twin, handshake capture/cracking, wardriving, BLE fuzzing, and recon features; offensive-primary wireless tooling.

## Notes

- Inspected 21 candidates across AI-agent governance/gateways/memory, MCP control planes, EDA/PCB MCP tooling, ESP32 debugging, Raspberry Pi/e-ink dashboards, homelab network CLIs, container monitoring, firmware memory analysis, and offensive wireless firmware.
- No malware, phishing, credential theft, exploit-pack, botnet, ransomware, piracy, fraud, spam, harassment, or offensive-primary resource was published.
- No secrets, tokens, API keys, credentials, personal phone numbers, private config, or cron changes were added.
- No Hermes skills created this run; accepted items are public-resource cards rather than novel reusable Hermes execution workflows.
- Existing catalog debt observed but not introduced: duplicate resource names `Eneru`, `MemMap Explorer`, and `LILYGO Spark` pre-existed this run.

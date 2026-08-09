# Discovery run — 2026-08-10

## Accepted for publication

1. **evlog** (`HugoRCD/evlog`) — accepted as benign TypeScript structured-event logging. Safety screened GitHub metadata, README, MIT license, active maintenance, npm install path, and keyword hits; published with warnings about log redaction and sensitive request data.
2. **Home Assistant** (`home-assistant/core`) — accepted as a local-first home automation platform. Safety screened GitHub metadata, README, Apache-2.0 license, active project status, official docs-first install path, and physical-device implications; published with LAN/VPN, strong-auth, and harmless-device-first warnings.
3. **PiKVM** (`pikvm/pikvm`) — accepted as Raspberry Pi IP-KVM hardware for owned/administered machines. Safety screened GitHub metadata, README, GPL-3.0 license, active maintenance, official docs-first setup, and remote-console risk; published with physical-console-equivalent and no-internet-exposure warnings.
4. **indi-allsky** (`aaronwmorris/indi-allsky`) — accepted as a Linux/Raspberry Pi all-sky camera project. Safety screened GitHub metadata, README, GPL-3.0 license, active maintenance, and camera/privacy implications; published with responsible-aiming, local-law, auth, and raw-feed warnings.
5. **Hugo** (`gohugoio/hugo`) — accepted as a mature static site generator. Safety screened GitHub metadata, README, Apache-2.0 license, official package install path, and content-leak implications; published with generated-content review warnings.
6. **EMBA** (`e-m-b-a/emba`) — accepted as an advanced firmware analysis tool for authorized firmware. Safety screened GitHub metadata, README, GPL-3.0 license, active maintenance, defensive firmware-analysis purpose, and extracted-secret risk; published with owned/authorized firmware, isolated lab VM, and no-publishing-secrets warnings.

## Already present / inspected, not duplicated

- **Hermes Agent** (`NousResearch/hermes-agent`) — already in catalog as `Hermes Agent`; inspected again from AI-agent search results.
- **ClawMetry** (`vivekchand/clawmetry`) — already in catalog as `ClawMetry`; inspected again from observability search results.
- **Pulse** (`rcourtman/Pulse`) — already in catalog as `Pulse`; inspected again from homelab monitoring search results.
- **TinyGo** (`tinygo-org/tinygo`) — already in catalog as `TinyGo`; inspected again from ESP32/microcontroller search results.
- **Velxio** (`davidmonterocrespo24/velxio`) — already in catalog as `Velxio`; inspected again from ESP32/browser-emulator search results.
- **EMBArk** (`e-m-b-a/embark`) — already in catalog as `EMBArk`; inspected again from firmware analysis search results.
- **Pyrrha** (`quarkslab/pyrrha`) — already in catalog as `Pyrrha`; inspected again from firmware analysis search results.

## Rejected / deferred

- **KiroCrew** (`kirodotdev/KiroCrew`) — deferred. The project looks relevant and documents security controls, but the primary install path pipes a remote shell script and the persistent unattended agent workspace needs deeper least-privilege review before beginner publication.
- **Heym** (`heymrun/heym`) — deferred. Relevant agent orchestration/observability project, but GitHub license metadata returned `NOASSERTION` and traces can capture full LLM requests/responses; needs privacy/retention review.
- **Archestra** (`archestra-ai/archestra`) — deferred. Relevant MCP gateway/enterprise AI platform, but GitHub license metadata returned `NOASSERTION` and README examples cover tokens, virtual API keys, and secrets management; needs a narrower secrets-handling review.
- **Monoscope** (`monoscope-tech/monoscope`) — deferred. Legitimate observability platform, but the README primary install path pipes a remote script and examples include API-key placeholders; needs safer install guidance and secret-handling review.
- **OOMWOO** (`makerspet/oomwoo`) — deferred. Open-source robot vacuum is interesting, but it controls a moving physical robot; a beginner-safe card needs hardware fail-safe, battery, motor, and household-risk guidance.
- **Zas** (`darccio/zas`) — deferred. Small static-site generator appears benign, but plugin execution behavior is easy to misunderstand; lower priority than mature Hugo for today’s beginner publication.

## Notes

- Inspected 19 candidates across AI-agent workspaces, MCP gateways, observability/logging, homelab monitoring, Raspberry Pi projects, static-site tooling, ESP32/microcontroller tools, and firmware analysis.
- No malware, phishing, credential theft, exploit-pack, botnet, ransomware, piracy, fraud, spam, or harassment tooling was published.
- No secrets, tokens, API keys, credentials, personal phone numbers, private config, or cron changes were added.
- No Hermes skills created this run; accepted items are public-resource cards rather than novel reusable Hermes execution workflows.

# Discovery run — 2026-08-13

## Accepted for publication

1. **Mnemon** (`mnemon-dev/mnemon`) — accepted as benign local AI-agent memory tooling. Safety screened README, Apache-2.0 license, Go/Homebrew install paths, local-binary architecture, graph-memory purpose, and risk that memory can persist private prompts/code; published with non-sensitive-project and review-saved-memory warnings.
2. **dnsweaver** (`maxfield-allison/dnsweaver`) — accepted as homelab DNS automation for owned infrastructure. Safety screened README, MIT license, Docker/Helm install docs, provider support, record-create/delete behavior, Docker/Kubernetes/Proxmox watching, and API-token/DNS overwrite risks; published with private-zone, least-privilege-token, and review-planned-record warnings.
3. **WhisperSubs** (`GeiserX/whisper-subs`) — accepted as self-hosted Jellyfin subtitle generation. Safety screened README, GPL-3.0 license, local whisper.cpp processing claim, Jellyfin plugin scope, worker/model setup, and speech/privacy risks; published with local-processing and review-generated-text warnings.
4. **RelayTV** (`mcgeezy/relaytv`) — accepted as local-first media playback automation for owned devices. Safety screened README, GPL-3.0 license, docs tree, local/no-account claim, Jellyfin/Emby/Home Assistant surfaces, IPTV/link handling, and remote-control exposure risk; published with trusted-LAN and protect-control-surface warnings.
5. **WendyOS** (`wendylabsinc/WendyOS`) — accepted as edge-device deployment tooling for Jetson/Raspberry Pi/Linux labs. Safety screened README, Apache-2.0 license, CLI/docs quickstart, USB-C deploy/flash workflow, device overwrite and actuator risks; published with spare-hardware, disconnect-actuators, and no-secrets-in-build-descriptors warnings.
6. **gojekyll** (`osteele/gojekyll`) — accepted as benign static-site tooling for Jekyll-style sites. Safety screened README, MIT license, Go implementation purpose, build/serve workflow, partial compatibility status, and static-output privacy risk; published with review-generated-site warning.
7. **Betty** (`bartfeenstra/betty`) — accepted as static genealogy-site generator. Safety screened README, GPL-3.0 license, PyPI/docs/demo signals, Gramps/GEDCOM input purpose, and living-person/family-data privacy risk; published with private-first and remove-living-person-data warnings.
8. **SimpleGPIO** (`ecoAPM/SimpleGPIO`) — accepted as beginner Raspberry Pi GPIO library for C#/.NET. Safety screened README, MIT license, NuGet install path, CI/quality badges, GPIO control examples, and physical hardware damage risk; published with voltage/current/pin-numbering warnings.

## Already present / inspected, not duplicated

- **agent-inspect** (`rajudandigam/agent-inspect`) — already in catalog as `agent-inspect`; inspected again from AI-agent observability search results.
- **ESPForge** (`Mo3he/ESPForge`) — already in catalog as `ESPForge`; inspected again from ESP32 tooling search results.
- **espup** (`esp-rs/espup`) — already in catalog as `espup`; inspected again from ESP32 tooling search results.

## Rejected / deferred

- **Kent** (`respawn-llc/kent`) — deferred. Relevant AI coding-agent tooling, but it is a professional autonomous coding platform with long-running execution/supervision loops and an AGPL license; needs deeper review of command execution, install/update path, and secret isolation before beginner publication.
- **Sesori apps monorepo** (`sesori-ai/sesori_apps_monorepo`) — deferred. Mobile control for Codex/OpenCode/Cursor sessions is useful, but remote phone control of live coding agents increases authentication, session hijack, and destructive-command risk; needs deeper security review despite the repo exposing architecture/security docs.
- **FuXi** (`fuxicodex/Fuxi`) — rejected/deferred for now. It asks users to run a remote bootstrap script and is proprietary/noassertion in GitHub metadata; not enough open, auditable install posture for beginner recommendation.
- **Distribb skill** (`Bomx/distribb-skill`) — rejected. AI-powered SEO/backlink-network publishing is too close to spam/grey-hat growth tooling for askhermie.dev.
- **Token Bank** (`wink-run/tokenbank`) — deferred. Local LLM gateway is relevant, but README advertises community P2P compute sharing and monetizing idle quota; needs deeper privacy, credential, provider-ToS, and abuse review.
- **JFrog Boost** (`jfrog/boost`) — deferred. Agent token/context optimization is relevant, but the README excerpt was not enough to verify license/open-source posture and data-flow boundaries; needs deeper review before publication.
- **ProxmoxMCP-Plus** (`RekklesNA/ProxmoxMCP-Plus`) — deferred. Useful homelab MCP idea, but direct VM/LXC/backup/snapshot control from LLMs is high-impact; needs read-only/least-privilege workflow review before a beginner card.
- **CC1101_jammer** (`W0rthlessS0ul/CC1101_jammer`) — rejected. README explicitly describes jamming garage doors, wireless doorbells, car key fobs, and other sub-GHz devices; offensive/illegal RF-disruption primary use.
- **Fiscalberry** (`paxapos/fiscalberry`) — deferred. Hardware/receipt-printer bridge is benign-looking, but fiscal printer workflows can have legal/business-record implications and the repo metadata lacks a clear license; not a good beginner recommendation without more context.
- **hugo-docker** (`hubci/hugo-docker`) — deferred. Benign static-site CI image, but lower value because Hugo itself is already in the catalog and the image appears CircleCI-specific/older-version focused.
- **minista** (`qrac/minista`) — deferred. Benign React/Vite static generator, but GitHub license metadata did not resolve cleanly and the README is primarily Japanese; needs deeper docs review before beginner publication.
- **TerrariumPI** (`theyosh/TerrariumPI`) — deferred. Useful Raspberry Pi automation, but it controls heaters, sprayers, pumps, and environmental systems for living animals/plants; safety-critical physical-control workflows need stronger warnings and installation review before publication.
- **WendyOS install script path** (`curl -fsSL https://install.wendy.dev/cli.sh | bash`) — not published as an executable command. The project was accepted, but the card points readers to docs first because remote install scripts and device flashing deserve deliberate review.

## Notes

- Inspected 30 candidates across AI-agent memory/coding tools, agent observability, LLM gateways, homelab DNS/Proxmox automation, Jellyfin/media automation, Raspberry Pi/IoT libraries, edge-device deployment, ESP32 tooling, and static-site generators.
- No malware, phishing, credential theft, exploit-pack, botnet, ransomware, piracy, fraud, spam, harassment, or offensive-primary resource was published.
- No secrets, tokens, API keys, credentials, personal phone numbers, private config, or cron changes were added.
- No Hermes skills created this run; accepted items are public-resource cards rather than novel reusable Hermes execution workflows.
- Existing catalog debt observed but not introduced: duplicate resource names `Eneru`, `MemMap Explorer`, and `LILYGO Spark` pre-existed this run.

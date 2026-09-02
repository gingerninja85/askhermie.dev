# Discovery run — 2026-09-03

## Accepted for publication

1. **Ruler** (`intellectronica/ruler`) — accepted as a benign AI-agent configuration governance CLI. Safety screened GitHub metadata, MIT license, recent activity, README install path, beta warning, generated-file behavior, MCP/server config handling, placeholder Authorization examples, and open security-related workflow issues. Published with throwaway-repo-first, git-diff, and no-token-commit warnings.
2. **Homarr** (`homarr-labs/homarr`) — accepted as a benign self-hosted homelab dashboard. Safety screened GitHub metadata, Apache-2.0 license, recent activity, official Docker image path, integration surface, open issues, and dashboard exposure risk. Published with LAN/VPN authentication and avoid-broad-Docker-access warnings.
3. **Serial Studio** (`Serial-Studio/Serial-Studio`) — accepted as a benign telemetry visualization tool for embedded and IoT labs. Safety screened GitHub metadata, active repo, release/install paths, README-supported transports, open issues, and hardware/network bus risks. Published with owned-device-only and industrial-bus caution.
4. **IT-Tools** (`CorentinTh/it-tools`) — accepted as a benign self-hostable developer utility collection. Safety screened GitHub metadata, GPL-3.0 license, recent activity, Docker install path, dependency/security-update issues, and pasted-data privacy risk. Published with local-first and do-not-paste-real-secrets warnings.
5. **CyberChef** (`gchq/CyberChef`) — accepted as a benign local data-transformation workbench when framed for defensive analysis and everyday encoding/decoding. Safety screened GitHub metadata, Apache-2.0 license, recent activity, Docker install path, feature requests involving credential/payload extraction, and misuse risk. Published with local/offline mode, no-secret-public-site, and do-not-execute-decoded-payload warnings.
6. **NetAlertX** (`netalertx/netalertx`) — accepted as a defensive network visibility tool for owned LAN inventory and change detection. Safety screened GitHub metadata, GPL-3.0 license, recent activity, Docker/docs install path, plugin surface, network scanning scope, and open issues. Published with own-network-only and no-public/workplace scanning warnings.

## Rejected / deferred / already present

- **Beszel** (`henrygd/beszel`) — already present / inspected. Active MIT-licensed lightweight server monitoring tool; not duplicated.
- **Homepage** (`gethomepage/homepage`) — already present / inspected. Active GPL-3.0 homelab start-page/dashboard; not duplicated.
- **MCP for Beginners** (`microsoft/mcp-for-beginners`) — already present / inspected. Active MIT Microsoft MCP curriculum; not duplicated.
- **AgentTeams** (`agentscope-ai/AgentTeams`) — deferred. Useful multi-agent OS, but README's primary local installer pipes a remote shell script and the setup asks for API keys/admin credentials; needs a safer beginner-first install path before publication.
- **Dockge** (`louislam/dockge`) — deferred. Useful Docker Compose UI with MIT license and strong adoption, but multiple recent open placeholder security advisory issues remain unresolved; wait for maintainer resolution before beginner recommendation.
- **Awesome Raspberry Pi** (`thibmaek/awesome-raspberry-pi`) — deferred. Broad curated list is useful, but it includes clearly offensive/unauthorized-access projects such as PoisonTap; unsafe as a beginner-facing recommendation without a filtered landing path.
- **Awesome CLI Coding Agents** (`bradagi/awesome-cli-coding-agents`) — deferred. Useful directory, but repo license metadata is absent and the catalog includes many low-maturity agent tools that need item-level vetting before sending beginners there.
- **Agent Config Manager** (`nesjett/agent-config-manager`) — deferred. Benign-looking MIT CLI, but it has very low adoption signal and directly copies skills/tools/rules/system prompts across agents; needs deeper safety and maturity review.
- **homelab-dash** (`olavhegg/homelab-dash`) — deferred. Benign-looking Docker dashboard, but 0 stars, no clear license metadata, and a container-restart action surface make it too immature for publication.
- **100 Days 100 IoT Projects** (`kritishmohapatra/100_Days_100_IoT_Projects`) — deferred. Educational IoT repo with strong activity, but no license metadata and some security-themed projects need per-project review.
- **OpenToys** (`akdeb/OpenToys`) — deferred. Interesting local ESP32/voice-AI toy platform, but no license metadata from GitHub API, child/toy privacy implications, voice cloning topics, and hardware safety concerns need deeper review.
- **Universal Radio Hacker** (`jopohl/urh`) — rejected for publication in this run. It is archived and explicitly wireless-protocol hacking oriented; too dual-use for beginner publishing here.

## Notes

- Inspected 18 candidates across AI-agent configuration, multi-agent runtimes, homelab dashboards, Docker management, developer utilities, embedded telemetry, Raspberry Pi/ESP32 learning, network discovery, and security data transformation.
- Existing catalog checked by exact `name:` fields inside the `const resources: Resource[]` block before adding entries; re-inspected existing resources were not duplicated.
- Resource duplicate check after edits should show the six new names exactly once. Pre-existing catalog debt remains: `Eneru`, `MemMap Explorer`, and `LILYGO Spark` each appear twice; this run did not introduce those duplicates.
- No malware, phishing, credential theft, exploit-pack, botnet, ransomware, piracy, fraud, spam, harassment, or offensive-primary resource was published.
- No secrets, tokens, API keys, credentials, personal phone numbers, private config, or cron changes were added.
- No Hermes skills created this run. Existing AI-agent, homelab, networking, IoT, and security-analysis skills already cover the reusable workflows; this run added public resource cards only.

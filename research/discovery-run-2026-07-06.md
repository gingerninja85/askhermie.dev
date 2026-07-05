# Discovery run — 2026-07-06

## Scope

Daily askhermie.dev discovery loop: Hermes/AI-agent tooling, automation, systems engineering, observability, homelab, static-site tooling, IoT/hardware, ESP32/Raspberry Pi, firmware analysis, and beginner-friendly labs.

## Candidates inspected

| Candidate | URL | Decision | Reason / safety screen |
|---|---|---|---|
| agent-inspect | https://github.com/rajudandigam/agent-inspect | Accepted | Active MIT TypeScript/Node tool for local AI-agent run traces. README emphasizes no account/upload and metadata-only by default. Safe developer-debugging purpose; card warns traces may contain prompts, tool outputs, logs, filenames, and user data. |
| DashClaw | https://github.com/ucsandman/DashClaw | Accepted | Active MIT AI-agent governance runtime for policy checks, approvals, and audit trails. Benign safety/control purpose. Card frames first use as a toy governed action and warns logs/prompts/actions are sensitive. |
| goose | https://github.com/aaif-goose/goose | Accepted | Active Apache-2.0 open-source agent under the Linux Foundation Agentic AI Foundation. Useful for comparing local coding-agent workflows. Card restricts first use to disposable repos and least-privilege provider credentials. |
| Internet-in-a-Box | https://github.com/iiab/iiab | Accepted | Active GPL-2.0 Raspberry Pi/offline-learning server with a clear educational purpose. Not offensive. Card points to official install docs instead of embedding a large install flow and warns about local uploads/admin access. |
| Theengs Decoder | https://github.com/theengs/decoder | Accepted | Active GPL-3.0 BLE IoT payload decoder supporting many devices. Benign IoT integration and learning use. Dual-use privacy risk around nearby BLE identifiers handled with owned-device-only safety note. |
| Domoticz | https://github.com/domoticz/domoticz | Accepted | Active GPL-3.0 home-automation platform for Raspberry Pi/Linux/etc. Benign smart-home learning use. Safety note warns about locks/relays/heaters/mains devices and public exposure. |
| Pyrrha | https://github.com/quarkslab/pyrrha | Accepted | Active Apache-2.0 firmware cartography/visualization tool from Quarkslab. Firmware analysis is dual-use, but this is analysis/cartography rather than exploit tooling. Card limits scope to authorized firmware and warns against publishing extracted secrets. |
| Podman Desktop | https://github.com/podman-desktop/podman-desktop | Accepted | Active Apache-2.0 GUI for containers/Kubernetes with solid reputation signals. Benign systems-learning/dev workflow. Safety note covers privileged containers, exposed ports, and file mounts. |
| lazydocker | https://github.com/jesseduffield/lazydocker | Accepted | Active MIT Docker/Compose terminal UI. Benign container operations helper. Safety note warns it can stop/delete services and reveal secrets in logs/env views. |
| Sync-in Server | https://github.com/Sync-in/server | Deferred | Active AGPL-3.0 self-hosted file storage/collaboration platform. Potentially useful, but file-sharing tools need deeper review of auth, sharing defaults, and upgrade path before recommending to beginners. |
| WolfStack | https://github.com/wolfsoftwaresystemsltd/WolfStack | Rejected | Server/VM/container management tool, but README primary install path pipes a remote setup script into `sudo bash`; repo license metadata is `Other`, and first login uses Linux system credentials. Too much risk for a beginner catalog today. |
| OpenSteer | https://github.com/steerlabs/opensteer | Deferred | MIT browser-automation framework for agents. Useful, but browser control can interact with logged-in accounts and README uses a remote install script. Deferred until a safer sandbox/profile-first entry is justified. |
| Continue | https://github.com/continuedev/continue | Deferred | Apache-2.0 coding agent, but README states the repository is no longer actively maintained/read-only. Deferred rather than publishing stale tooling. |
| OpenHands | https://github.com/OpenHands/OpenHands | Deferred | Active self-hosted developer control center for coding agents, but license metadata is `Other` and it overlaps strongly with existing agent entries. Needs deeper deployment/secrets review before publishing. |
| screenpipe | https://github.com/screenpipe/screenpipe | Deferred | Records screen/audio/activity 24/7. Even if local/private, the privacy failure mode is severe for non-experts. Deferred until a much stronger privacy-first framing is available. |
| Firecrawl | https://github.com/firecrawl/firecrawl | Deferred | Useful web crawling/scraping API, but scraping at scale is easy to misuse and can violate site terms. Deferred for a future owned-site/documentation-only framing. |

## Published changes

Added 9 resource cards to `src/pages/resources.astro`:

- agent-inspect
- DashClaw
- goose
- Internet-in-a-Box
- Theengs Decoder
- Domoticz
- Pyrrha
- Podman Desktop
- lazydocker

Updated resource grouping so the new AI-agent, offline-learning, IoT decoding, home-automation, firmware-cartography, container-desktop, and Docker-TUI categories render under existing broad groups.

## Skill changes

No local Hermes skills created or updated. The accepted resources are useful catalog entries, but none introduced a clearly non-duplicative, benign, repeatable workflow worth turning into a local skill today.

## Verification

Final cron report records build, secret scan, commit, push, remote SHA, and live-site smoke check results.

# Discovery run — 2026-07-07 late UTC

## Scope

Daily autonomous askhermie.dev discovery loop: Hermes/AI-agent tooling, automation, systems engineering, observability, homelab, static-site tooling, IoT/hardware, ESP32/Raspberry Pi, firmware analysis, and beginner-friendly labs.

## Candidates inspected

| Candidate | URL | Decision | Reason / safety screen |
|---|---|---|---|
| TokenJam | https://github.com/Metabuilder-Labs/tokenjam | Accepted | Active MIT local-first token-efficiency/telemetry analyzer for Claude Code, Codex, and other agents. Quickstart reads local agent transcripts, so the published card warns that prompts, filenames, and tool output are sensitive. No malware/phishing/offensive framing found. |
| HitKeep | https://github.com/PascaleBeier/hitkeep | Accepted | Active MIT privacy-first web analytics with self-hosted option, cookie-less defaults, and optional read-only MCP analytics. README uses a JWT secret placeholder, so the published card avoids embedding secrets and warns not to publish JWT/API clients. |
| Dapr Agents | https://github.com/dapr/dapr-agents | Accepted | Active Apache-2.0 Python framework for stateful/observable agents on Dapr. Benign developer framework, but workflows can use state, tools, telemetry, and provider keys; card frames first use as local quickstarts with fake data. |
| Vercel Workflow SDK | https://github.com/vercel/workflow | Accepted | Active Apache-2.0 TypeScript SDK for durable async workflows and AI-agent state. Useful for reliability/observability. Card warns retries and side effects need idempotent sandbox testing. |
| Labby | https://github.com/samuelloranger/labby | Accepted | Active MIT homelab dashboard. README explicitly says it has no auth, so card limits use to trusted LAN/VPN and warns against exposing links/credentials publicly. |
| Drydock | https://github.com/CodesWhat/drydock | Accepted | Active AGPL-3.0 container image update watcher with docs recommending a Docker socket proxy. Benign operations use, but Docker/registry access is sensitive; card points to socket-proxy quickstart and warns against unrestricted Docker access/automatic updates. |
| LILYGO Spark | https://github.com/Xinyuan-LILYGO/LILYGO-Spark | Accepted | Active MIT ESP firmware hub/flasher/analyzer for LILYGO and ESP boards. Useful hardware-learning workflow; card warns that flashing/dumping firmware can erase devices or expose data. |
| FirmwareDroid | https://github.com/FirmwareDroid/FirmwareDroid | Accepted | Active GPL-3.0 Android firmware research framework. It bundles static analysis/extraction tools and notes minimal production security, so card scopes it to authorized lab firmware and warns not to publish proprietary or sensitive extracted data. |
| Zine | https://github.com/kristoff-it/zine | Accepted | Active MIT static-site generator with docs and clear non-security purpose. Low-risk publishing tool; card warns static drafts can leak private notes and screenshots. |
| Zensical | https://github.com/zensical/zensical | Accepted | Active MIT documentation-site generator by the Material for MkDocs team. Low-risk docs tooling; card warns docs commonly leak internal URLs, screenshots, configs, and example credentials. |
| Boucle Framework | https://github.com/Bande-a-Bonnot/Boucle-framework | Deferred | Potentially valuable Claude Code safety-hook framework, but README's main install/check path pipes raw GitHub scripts into shell and PowerShell. Defer until safer install/audit framing is developed. |
| Stash | https://github.com/Fergana-Labs/stash | Deferred | Agent knowledge-base/memory product with useful ideas, but it streams prompts, tool calls, artifacts, and connected app data. Needs deeper privacy/secret-handling review before recommending to beginners. |
| Kubernaut | https://github.com/jordigilh/kubernaut | Deferred | AI Kubernetes remediation/AIOps platform. Production-cluster remediation and MCP/tool access make it too risky for a beginner catalog card without deeper least-privilege review. |
| AgentField | https://github.com/Agent-Field/agentfield | Deferred | Promising observable/auditable agent platform, but broad platform scope and identity/tooling model need deeper review before beginner publication. |
| Dashwise | https://github.com/andreasmolnardev/dashwise | Deferred | Homelab dashboard, but README says the project is being rewritten and shows default admin credentials. Defer until stable install/security posture is clearer. |
| Solectrus | https://github.com/solectrus/solectrus | Deferred | Useful photovoltaic dashboard, but domain-specific and generated Docker configuration path needs a deeper pass; not high enough fit for today’s catalog update. |
| Switchberry | https://github.com/Time-Appliances-Project/Switchberry | Deferred | Interesting Raspberry Pi CM4 Ethernet/PTP timing hardware, but GitHub license metadata is `NOASSERTION` and README includes default login details. Defer for licensing/security review. |
| ESP32Marauder | https://github.com/justcallmekoko/ESP32Marauder | Rejected | Offensive/dual-use Wi-Fi/Bluetooth tooling for ESP32. Not appropriate for a beginner-friendly conservative catalog. |
| T-REX-FIRMWARE | https://github.com/abdallahnatsheh/T-REX-FIRMWARE | Rejected | README/search description emphasizes wireless security firmware with offensive tools and recon. Rejected under safety gate. |
| ESP32Knife | https://github.com/BlackVS/esp32knife | Deferred | ESP32 firmware dissection could be useful, but the tool is niche and needs deeper review before publishing. |
| Awesome Embedded Security | https://github.com/hexsecs/awesome-embedded-security | Deferred | Curated embedded security list, but it includes fuzzing, hardware hacking, SDR, and other dual-use material. Defer; avoid awesome-list duplication and unsafe beginner paths. |

## Published changes

Added 10 resource cards to `src/pages/resources.astro`:

- TokenJam
- HitKeep
- Dapr Agents
- Vercel Workflow SDK
- Labby
- Drydock
- LILYGO Spark
- FirmwareDroid
- Zine
- Zensical

Updated broad resource group category arrays so the new cards render under existing reader-intent groups.

## Skill changes

No local Hermes skills created or updated. The accepted resources are useful catalog entries, but none introduced a clearly non-duplicative, benign, repeatable Hermes workflow worth preserving as a skill today.

## Verification notes

Final cron report records Astro build, secret scan, commit, push, remote SHA, and live-site smoke check results.

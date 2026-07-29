# Discovery run — 2026-07-30

## Scope
Daily autonomous askhermie.dev discovery loop. Sources inspected: GitHub repository search, README files via GitHub/raw GitHub, repository metadata where available, partial issue/reputation keyword search until GitHub API rate limiting, install paths, license/activity signals, and safety/privacy wording.

## Accepted and published

1. **Flow-Next** — AI agent orchestrator
   - Repo: https://github.com/gmickel/flow-next
   - Signals: MIT license, active repo, low open issue count in metadata, README emphasizes repo-local artifacts, specs, reviews, receipts, and uninstallability.
   - Install/start path published: plugin/Codex installer notes only, framed for disposable repos and manual review.
   - Safety note: agent workflow layers can launch subagents, record prompts/specs, and create repo state; sandbox first.

2. **MisakaNet** — AI agent memory
   - Repo: https://github.com/Ikalus1988/MisakaNet
   - Signals: Apache-2.0 license, active repo, zero-dependency/redacted failure-memory framing, MCP/CLI search path.
   - Install/start path published: `pip install misakanet-core` plus a local search example.
   - Safety note: failure reports can include secrets, paths, repo names, tokens, and logs; redact before capture/intake.

3. **GoldenMatch** — AI data catalog
   - Repo: https://github.com/benseverndev-oss/goldenmatch
   - Signals: MIT license, active repo, CI/OpenSSF badges, PyPI/npm packages, useful benign entity-resolution/data-quality workflow.
   - Install/start path published: `pip install goldenmatch` and local CSV dedupe command.
   - Safety note: record linkage can process personal data and incorrectly merge identities; start with synthetic data and review matches manually.

4. **MemBrowse** — Memory map analysis
   - Repo: https://github.com/membrowse/membrowse-action
   - Signals: GPLv3 license, active repo, local no-account CLI path, clear firmware memory-footprint use case.
   - Install/start path published: local `pip install membrowse` and `membrowse report` command; no API key in site card.
   - Safety note: ELF/MAP/linker artifacts reveal source paths, symbols, architecture, and product internals.

5. **Sveltia CMS** — Static site CMS
   - Repo: https://github.com/sveltia/sveltia-cms
   - Signals: MIT license, active repo, successor-to-Decap/Netlify CMS positioning, static-site publishing relevance.
   - Install/start path published: official docs link rather than inline tokens or provider setup.
   - Safety note: Git-backed CMS setups touch repo write access, drafts, media, identity providers, and preview builds.

6. **TinyGo espradio** — Embedded development
   - Repo: https://github.com/tinygo-org/espradio
   - Signals: active TinyGo project, benign ESP32 networking package, examples for supported boards.
   - Install/start path published: clone plus TinyGo flash example for documented hello workflow.
   - Safety note: Wi-Fi credentials can be embedded at build time; use lab credentials and verify board targets.

7. **OpenTelemetry eBPF Instrumentation** — Observability collector
   - Repo: https://github.com/open-telemetry/opentelemetry-ebpf-instrumentation
   - Signals: Apache-2.0 license, OpenTelemetry project, signed-release/checksum documentation, clear development-stage warning.
   - Install/start path published: official Docker/setup docs only; card says pin versions and verify artifacts.
   - Safety note: eBPF instrumentation needs elevated host visibility and can expose process/network metadata.

## Rejected or deferred

- **Omnigent** — deferred. Relevant AI agent meta-harness, Apache-2.0 and active, but README quickstart leads with raw remote install script and broad cloud-sandbox/provider integrations. Needs deeper hands-on review before recommending to beginners.
- **Kiln** — deferred. Useful maker/3D-printing MCP concept, signed/SLSA signals, but README markets end-to-end AI control of real printers with “no human in the middle” and hundreds of MCP capabilities. Physical safety and secret/device-control risk are too high for a beginner card without a narrower reviewed workflow.
- **Dashwise** — deferred. Homelab dashboard is relevant and has built-in auth, but README says the project is being rewritten, production image is currently arm-only, and stable path points to legacy compose. Wait for stable docs.
- **ProxmoxVE Helper-Scripts** — deferred. Popular and useful, but primary workflow is copying one-line root shell installers into Proxmox. This violates the conservative remote-script/root-install posture for beginner recommendations.
- **RuView** — rejected. ESP32/Wi-Fi sensing is technically interesting, but the primary pitch is through-wall presence, vital-sign, sleep, and room monitoring. The privacy/surveillance risk is too high for askhermie.dev.

## Already present / inspected, not duplicated

- **Hermes Agent** — already present; search result inspected as baseline.
- **Meshtastic Firmware** — already present.
- **FACT** — already present.
- **EMBArk** — already present.
- **Langfuse** — already present.
- **Netdata** — already present.

## Candidate count

Inspected 18 candidates total: 7 published, 6 already present, 5 rejected/deferred.

## Notes

- No skills created or updated. The accepted tools are useful public resources, but none justified a new local Hermes skill today without hands-on workflow validation or duplicating existing agent/code/observability/embedded skills.
- GitHub API issue searches hit unauthenticated rate limiting mid-run. README/metadata review continued through raw GitHub fetches; rejected/deferred decisions stayed conservative.
- Existing catalog debt remains: pre-existing duplicate resource names for `Eneru`, `MemMap Explorer`, and `LILYGO Spark`; this run introduced no new duplicate names.

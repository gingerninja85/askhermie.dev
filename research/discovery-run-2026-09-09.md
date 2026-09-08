# Discovery run 2026-09-09

## Scope
Daily autonomous askhermie.dev resource discovery. Buckets searched: AI-agent tooling and run observability, MCP/control-plane tools, homelab monitoring dashboards, container update monitoring, firmware simulation/analysis, Raspberry Pi/ESP32/hardware labs, and beginner-friendly reverse-engineering workshops.

## Candidates inspected

1. `preloop/preloop`
2. `zenml-io/kitaru`
3. `monte-carlo-data/mc-agent-toolkit`
4. `last9/last9-mcp-server`
5. `Continuum-AI-Corp/OrcaReplay`
6. `SikamikanikoBG/homelab-monitor`
7. `themartz90/jellydash`
8. `CodesWhat/drydock`
9. `dougmaitelli/DockDash`
10. `w1ne/labwired-core`
11. `footprintai/Containarium`
12. `jstuart0/agentpulse`
13. `emproof-com/workshop_firmware_reverse_engineering`
14. `espotek-org/Labrador`
15. `quarkslab/binbloom`
16. `davidmonterocrespo24/velxio`
17. `ReFirmLabs/binwalk`
18. `hexsecs/awesome-embedded-security`

Evidence sources: GitHub web search, GitHub repository API metadata, README snippets via the GitHub API, prior catalog duplicate-name parsing from the `const resources: Resource[] = [...]` block, and local source inspection.

## Accepted and published

1. **OrcaReplay** — `https://github.com/Continuum-AI-Corp/OrcaReplay`
   - Category: AI agent run inspection.
   - Evidence inspected: active non-archived Apache-2.0 repo, ~175 stars during inspection, pushed 2026-09-08. README describes npm install, replay, compare, and network-blocked replay behavior.
   - Safety note: Published for local agent-run debugging only. Card warns traces can contain prompts, tool outputs, commands, filenames, and secrets.

2. **homelab-monitor** — `https://github.com/SikamikanikoBG/homelab-monitor`
   - Category: Homelab monitoring.
   - Evidence inspected: active non-archived MIT repo, ~197 stars during inspection, pushed 2026-09-08. README describes one-container dashboard, GPU/VRAM/Docker/system health, local AI metrics, and read-only MCP surface.
   - Safety note: Published for owned homelab systems. Card warns host, Docker, GPU, SSH, and MCP-derived inventory should stay private.

3. **LabWired** — `https://github.com/w1ne/labwired-core`
   - Category: Board emulator.
   - Evidence inspected: active non-archived MIT repo, ~64 stars during inspection, pushed 2026-09-05. README describes deterministic ARM Cortex-M/RISC-V firmware simulation, quickstart, installer review path, and local build option.
   - Safety note: Published as simulation-first embedded learning. Card uses download-then-review installer flow and warns simulation does not prove electrical or timing safety.

4. **Binbloom** — `https://github.com/quarkslab/binbloom`
   - Category: Firmware analysis.
   - Evidence inspected: active non-archived Apache-2.0 repo, ~585 stars during inspection, pushed 2024-06-06. README describes raw binary firmware analysis and install/build path.
   - Safety note: Published for authorized firmware analysis only. Card warns firmware can contain proprietary code, keys, certificates, and personal data.

## Already present / inspected, not duplicated

- **Drydock** — already in catalog. Active container update monitor; existing card covers Docker socket proxy and automatic-update safety.
- **Velxio** — already in catalog. Browser board emulator; existing card covers simulation-vs-real-hardware safety.
- **Binwalk** — already in catalog. Core firmware extraction tool.
- **Awesome Embedded Security** — already in catalog. Broad dual-use reference; existing card frames defensive/owned-device use.

## Rejected / deferred

- **Preloop** — `https://github.com/preloop/preloop`
  - Reason: Deferred, not published. Relevant AI agent control plane, but very new/low-star and README's main paths pipe remote install scripts into shell, including a self-host bootstrap. Needs deeper install-script and credential-flow review before beginner recommendation.

- **Kitaru** — `https://github.com/zenml-io/kitaru`
  - Reason: Deferred, not published. Useful agent replay concept, but installer modifies agent skill/MCP configuration and offers managed-cloud/local-server paths. Needs deeper review before recommending to non-experts.

- **Monte Carlo Agent Toolkit** — `https://github.com/monte-carlo-data/mc-agent-toolkit`
  - Reason: Deferred, not published. Appears legitimate, but it is vendor-specific data observability tooling that touches warehouse/platform credentials and sends an install beacon. Better suited for a deeper enterprise-data-agent review.

- **Last9 MCP Server** — `https://github.com/last9/last9-mcp-server`
  - Reason: Deferred, not published. Requires admin-generated refresh tokens and Write permissions in setup examples. Too credential-sensitive for a quick beginner card.

- **Jellydash** — `https://github.com/themartz90/jellydash`
  - Reason: Deferred, not unsafe. Useful Jellyfin-specific dashboard, but requires Jellyfin API tokens and is narrower than the current general homelab monitoring batch.

- **DockDash** — `https://github.com/dougmaitelli/DockDash`
  - Reason: Deferred, not published. README explicitly says the UI can exec into containers, read/write filesystems, and start/stop containers; too powerful for a beginner-facing card without a full hardening guide.

- **Containarium** — `https://github.com/footprintai/Containarium`
  - Reason: Deferred, not published. Relevant agent sandbox/runtime, but the quickstart involves sudo remote installer/bootstrap, Incus/Kubernetes/LXC/SSH surfaces, and JWT/API setup. Needs dedicated deep review.

- **AgentPulse** — `https://github.com/jstuart0/agentpulse`
  - Reason: Deferred, not unsafe. Relevant AI session monitor, but low maturity (~16 stars) and one-command installers alter local agent hooks. Revisit after more adoption or a deeper hook review.

- **Emproof firmware reverse-engineering workshop** — `https://github.com/emproof-com/workshop_firmware_reverse_engineering`
  - Reason: Rejected for publication. It includes a task explicitly framed around extracting hardcoded secrets, unlocking features, patching validations, and cracking. Too close to bypass/cracking instruction for askhermie.dev.

- **EspoTek Labrador** — `https://github.com/espotek-org/Labrador`
  - Reason: Deferred, not unsafe. Interesting open hardware electronics-lab device, but GitHub license metadata is missing and setup is hardware-specific; better as part of a hardware-instrument batch after license/source review.

## Skill decision
No Hermes skills created or updated. The accepted resources are catalog-worthy, but none introduced a distinct safe reusable Hermes workflow beyond existing agent observability, homelab monitoring, embedded-development, and firmware-analysis skill coverage.

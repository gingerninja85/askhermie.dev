# Discovery run 2026-10-01

## Accepted and published

- Marimo — accepted. GitHub metadata/README inspected: active repo, Apache-2.0, Python notebook/dev workflow. Safety note added: notebooks execute local code; review cells before running unknown notebooks.
- DuckDB — accepted. GitHub metadata/README inspected: active repo, MIT, local analytical database. Safety note added: can read local files; keep private datasets local.
- Windmill — accepted. GitHub metadata/README inspected: active repo, AGPL-style licensing, self-hosted automation/internal apps. Safety note added: workflow runners touch secrets and infrastructure; restrict access.
- Dawarich — accepted. GitHub metadata/README inspected: active repo, AGPL-3.0, self-hosted personal location history. Safety note added: location history is highly sensitive and must stay private.
- Rackula — accepted. GitHub metadata/README inspected: active repo, MIT, rack layout planning. Safety note added: not a substitute for rack/electrical/load safety checks.
- Parca Agent — accepted. GitHub metadata/README inspected: active repo, Apache-2.0, eBPF profiling/observability. Safety note added: requires elevated host access and can expose process data.
- Prefect — accepted. GitHub metadata/README inspected: active repo, Apache-2.0, Python workflow orchestration. Safety note added: orchestrators run arbitrary code; protect secrets/UI/API.
- OpenHarness — accepted. GitHub metadata/README inspected: active repo, MIT, agent desktop/orchestrator. Safety note added: multi-agent desktops can execute code across machines; start with throwaway repos.

## Rejected / deferred

- V33RU/awesome-connected-things-sec — deferred. Useful as a reference list, but the README explicitly centers exploitation techniques for IoT/embedded/industrial/automotive systems. Too easy for beginners to misuse; do not publish without a narrower defensive-learning framing.
- Skyvern-AI/skyvern — deferred. Browser automation itself can be benign, but publishing it for beginners needs more careful language around account ownership, ToS, credential handling, and anti-abuse limits. Deferred rather than rejected as malicious.

## Already present / inspected during candidate triage

- Glances, Beszel, Dozzle, Dagu, Node-RED, OpenObserve, VictoriaMetrics, SOPS, ESPHome, Raspberry Pi Imager, Tasmota, Uptime Kuma, Memos, ServiceRadar, FACT, EMBA, OWASP Firmware Security Testing Methodology, WLED, vmlinux-to-elf, DockTail, Meshtastic Firmware.

## Skills

- No local Hermes skills created or updated. The accepted items are useful resources, but none justified a new repeatable Hermes workflow skill today.

## Evidence

- Candidate metadata and README excerpts were fetched directly from the GitHub API/raw README endpoints during this run.

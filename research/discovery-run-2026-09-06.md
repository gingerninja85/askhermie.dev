# Discovery run 2026-09-06

## Scope
Daily autonomous askhermie.dev resource discovery. Buckets searched: Hermes/AI-agent tooling, MCP and automation, observability, homelab/server monitoring, ESP32/Raspberry Pi, firmware/hardware learning, and defensive cybersecurity labs.

## Candidates inspected

1. `lastmile-ai/mcp-agent`
2. `mkXultra/ai-cli-mcp`
3. `netdata/netdata`
4. `TadMSTR/homelab-agent`
5. `dyronrh/awesome-agentops-landscape`
6. `geo-tp/ESP32-Bit-Pirate`
7. `xinwenfu/ESP32-UART-and-Flash-Hack`
8. `eusrawayne/cyber-labs`
9. `whoami-004/defensive-network-security-labs-`
10. `knallpatron/Defensive-Cyber-Lab-`
11. `hexsecs/awesome-embedded-security`
12. `itsDNNS/docsight`
13. `CodesWhat/drydock`
14. `Higangssh/homebutler`
15. `platformio/platformio-core`
16. `fkie-cad/FACT_core`
17. `e-m-b-a/embark`
18. `quarkslab/pyrrha`
19. `scriptingxss/owasp-fstm`
20. `dmellok/tesserae`
21. `gumslone/GumCP`
22. `rulego/rulego`
23. `heymrun/heym`
24. `blacklight/platypush`

Evidence sources: GitHub repository metadata via GitHub API, README content via GitHub API, top-level file inventory via GitHub API for newly considered installs, and existing catalog duplicate-name parsing from `const resources: Resource[]`.

## Accepted and published

1. **Platypush** — `https://github.com/blacklight/platypush`
   - Category: Home automation.
   - Evidence inspected: MIT license, active non-archived repo, 317 stars during inspection, updated 2026-08-22. README describes a Python automation platform with MQTT, sensors, Bluetooth, media, dashboard, webhook, and smart-home integrations; top-level files include `docker-compose.yml`, docs, examples, tests, and Python packaging metadata.
   - Safety note: Benign local automation platform, but it can control devices and store integration credentials. Published card tells readers to start with read-only/test actions, keep config private, and not expose dashboards publicly.

2. **HomeButler** — `https://github.com/Higangssh/homebutler`
   - Category: Homelab change detection.
   - Evidence inspected: MIT license, active non-archived repo, 270 stars during inspection, updated 2026-09-05. README describes a single Go binary for tracking meaningful server changes and includes MCP support; top-level files include `SECURITY.md`, Dockerfile, examples, and Go module files.
   - Safety note: Benign inventory/change-detection workflow, but host baselines can reveal private services and MCP access must be scoped. Published card says to start read-only and keep baselines private.

3. **RuleGo** — `https://github.com/rulego/rulego`
   - Category: Workflow orchestration.
   - Evidence inspected: Apache-2.0 license, active non-archived repo, 1.5k+ stars during inspection, updated 2026-09-05. README describes a lightweight Go component orchestration/rule-engine framework with examples and tests.
   - Safety note: Benign automation framework, but workflows can trigger real actions. Published card warns to test inputs first, avoid credentials in rule files, and require approval before controlling devices.

4. **Awesome Embedded Security** — `https://github.com/hexsecs/awesome-embedded-security`
   - Category: Embedded tooling map.
   - Evidence inspected: CC0-1.0 license, active non-archived repo, 56 stars during inspection, updated 2026-09-02. README is a curated embedded-security map covering firmware analysis, hardware interfaces, IoT protocols, and training.
   - Safety note: Broad dual-use reference. Published card limits recommendation to owned devices, defensive labs, and read-only analysis; offensive/exploit/bypass material is explicitly out of scope without authorization.

## Already present / inspected, not duplicated

- **DOCSight** — already in catalog. Self-hosted DOCSIS/cable-modem evidence tracking; existing card scopes use to owned modem/router dashboards and private reporting.
- **mcp-agent** — already in catalog. Active Apache-2.0 MCP agent framework; safe with normal MCP tool-permission caveats.
- **Netdata** — already in catalog. Active infrastructure monitoring; safe with observability-data privacy caveats.
- **ESP32 Bit Pirate** — already in catalog. Dual-use hardware protocol tool, but existing card scopes it to owned hardware and labs.
- **PlatformIO Core** — already in catalog. Safe embedded development tool with standard device/firmware caveats.
- **FACT** — already in catalog. Firmware-analysis platform; existing card scopes to owned firmware and defensive analysis.
- **EMBA** — already in catalog. Firmware analyzer; existing card scopes to owned firmware and labs.
- **EMBArk** — already in catalog. Firmware scanning environment; existing card scopes to read-only/owned images.
- **Pyrrha** — already in catalog. Firmware cartography tool; existing card scopes to authorized firmware analysis.
- **OWASP Firmware Security Testing Methodology** — already in catalog. Safe reference when used for authorized assessments.
- **Tesserae** — already in catalog. E-ink dashboard companion; safe with private dashboard/MQTT caveats.
- **Pulse** — already in catalog. Homelab infrastructure monitoring; safe with dashboard exposure caveats.
- **Beszel** — already in catalog. Lightweight server monitoring; safe with agent/auth caveats.
- **Drydock** — already in catalog. Container update monitoring; existing card covers update/supply-chain cautions.
- **Glance** — already in catalog. Self-hosted dashboard/feed page; safe with dashboard exposure caveats.
- **n8n** and **Trigger.dev** — already in catalog; both legitimate automation tools with credential and workflow-execution caveats.

## Rejected / deferred

- **ai-cli-mcp** — `https://github.com/mkXultra/ai-cli-mcp`
  - Reason: Deferred. Legitimate-looking MCP wrapper for running multiple coding agents, but only 25 stars during inspection and broad background-agent execution. Needs more maturity/reputation and a tighter safety model before recommending to beginners.

- **homelab-agent** — `https://github.com/TadMSTR/homelab-agent`
  - Reason: Deferred, not unsafe. Interesting self-hosted multi-agent reference, but small/recent repo and significant unattended-agent operational complexity. Better suited to an architecture-reading note after deeper review.

- **awesome-agentops-landscape** — `https://github.com/dyronrh/awesome-agentops-landscape`
  - Reason: Deferred, not unsafe. It is another curated list, no license detected in GitHub metadata, and askhermie.dev should not become an awesome-list clone unless the entry has a strong beginner first step.

- **ESP32-UART-and-Flash-Hack** — `https://github.com/xinwenfu/ESP32-UART-and-Flash-Hack`
  - Reason: Rejected/deferred for publication. It is framed as an ethical lab, but the README centers UART/flash access and possible exploits, has no detected license, and only 5 stars. Too easy for a beginner to misuse on devices they do not own.

- **cyber-labs** — `https://github.com/eusrawayne/cyber-labs`
  - Reason: Deferred. Defensive beginner intent, but 0 stars/no license and most listed labs are marked “Coming soon”; not enough completed material to recommend.

- **defensive-network-security-labs-** — `https://github.com/whoami-004/defensive-network-security-labs-`
  - Reason: Deferred. Defensive topic and MIT license, but 0 stars and sparse README/portfolio-style content; not enough practical, maintained beginner material.

- **Defensive-Cyber-Lab-** — `https://github.com/knallpatron/Defensive-Cyber-Lab-`
  - Reason: Deferred. Containerized defensive lab idea is relevant, but no detected license, 0 stars, includes nmap/scapy/yara and “safe malware analysis” language, so it needs deeper sandbox review before beginner publication.

- **Heym** — `https://github.com/heymrun/heym`
  - Reason: Deferred, not unsafe. Promising AI workflow platform with `SECURITY.md`, but GitHub reports license as `NOASSERTION` and repo contains Commons Clause licensing files; needs license/usage-positioning review before recommending.

- **GumCP** — `https://github.com/gumslone/GumCP`
  - Reason: Deferred. Raspberry Pi control panel is relevant, but README advertises GPIO control, shell commands, HTTP API, and SSH execution. Useful for owned Pis, but too much control surface for a quick beginner card.

- **ProxMenux**, **clawdcursor**, **GhostDesk**, **FLUJO**
  - Reason: Deferred. Search results looked relevant, but they were not deeply inspected enough in this run to publish safely.

## Skill decision
No Hermes skills created or updated. The accepted entries are useful resources, but none introduced a distinct, safe, reusable Hermes execution workflow that is not already covered by existing skills.

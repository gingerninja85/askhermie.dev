# Discovery run 2026-09-27

## Accepted and published

- AiSOC — defensive, self-hostable AI SOC. Safety note: publish only as defensive lab/SOC-learning tooling; telemetry may contain sensitive incident data.
- TurboVault — Obsidian-flavored Markdown SDK and MCP server. Safety note: use throwaway vaults first because notes can contain private data.
- kordoc — Korean HWP/HWPX/PDF/Office document-to-Markdown CLI/MCP. Safety note: documents can contain personal data; test with public or sanitized files.
- Tessera — ESP32 touch-screen dashboards for Home Assistant. Safety note: flashing firmware and controlling smart-home entities affects real devices; test spare hardware first.
- IMPulse — self-hosted ChatOps incident management. Safety note: keep first tests local with fake alerts and no chat integration.
- Codewhale — terminal AI coding agent. Safety note: use disposable repos and review diffs because it can run commands and edit files.

## Inspected but already present

- agentgateway — already present; re-inspected as active Apache-2.0 MCP/agent gateway.
- Peekaboo — already present; re-inspected as macOS screen automation/MCP tool.
- ServiceRadar — already present; re-inspected as infrastructure/network monitoring.
- Kubetail — already present; re-inspected as Kubernetes logging dashboard.
- Sveltia CMS — already present; re-inspected as static-site CMS.
- Flow-Next — already present; re-inspected as agentic engineering workflow tool.

## Rejected / deferred

- Xalgorix — rejected: autonomous AI pentesting with exploitation verification is offensive-primary and too easy to misuse.
- RuView — deferred: Wi-Fi spatial/vital sensing claims are sensitive for privacy and need deeper validation before recommending to beginners.
- bivlked/amneziawg-installer — deferred: DPI-bypass/VPN obfuscation installer with one-command setup; legal and network-policy context is ambiguous.
- RobinDoom/omni-verse-reader — deferred: media downloader language may cross into copyrighted-content automation; not a safe beginner recommendation.
- dslsdzc/rev-skills — rejected: mixes malware analysis, cracking/unpacking, vulnerability mining, and broad reverse-engineering skills; too much offensive/ambiguous content for this catalog.

## Screening notes

- Inspected 18 candidates total through GitHub API metadata and README text.
- Accepted repos had recent activity, readable README documentation, clear benign/defensive use, and licenses reported by GitHub metadata.
- No local Hermes skills created; none of the accepted workflows were clearly valuable enough to justify a new reusable skill today.

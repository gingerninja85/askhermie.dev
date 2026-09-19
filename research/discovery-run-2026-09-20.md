# Discovery run 2026-09-20

## Accepted and published

1. MicroPico — https://github.com/paulober/MicroPico
   - Category: Pico / MicroPython IDE
   - Why: beginner-friendly VS Code workflow for Raspberry Pi Pico MicroPython projects; useful for safe maker labs.
   - Safety note: board-local workflow; warn users to test only on owned boards and disconnect high-current loads while learning.

2. observability-mcp — https://github.com/ThoTischner/observability-mcp
   - Category: Agent observability gateway
   - Why: read-only MCP gateway for Prometheus/Loki-style observability data; useful for agent incident triage labs without write access.
   - Safety note: observability data can leak hostnames, URLs, user IDs, and secrets in logs; use read-only credentials and lab data first.

3. Buoy — https://github.com/gfargo/buoy
   - Category: Lightweight homelab dashboard
   - Why: small demo-friendly homelab dashboard for system vitals and Docker-discovered services; demo mode avoids host mounts for first look.
   - Safety note: real deployment reads host and Docker metadata; keep private and prefer read-only Docker socket mounting.

## Inspected but already present

- Velxio — already in catalog as `Velxio`; safe browser-based board simulator.
- FACT — already in catalog as `FACT`; firmware analysis platform for owned firmware/lab samples.
- HomeLab Monitor — already in catalog as `homelab-monitor` / `HomeLab Monitor`; useful but has broad host visibility, existing card covers warnings.
- DockDash — already in catalog as `DockDash`; Docker dashboard/control surface with existing safety framing.

## Rejected / deferred

- MCP Servers Live Index — deferred. It is an unscreened auto-updated index and current results include risky entries such as proxy-list tooling; not appropriate as a beginner recommendation without per-item vetting.
- Nidus Dashboard — deferred. Useful homelab dashboard, but primary pitch includes start/stop/update controls, SSH terminal, and many service integrations; needs deeper safety review before beginner publication.
- OmniSight — deferred. Broad monitoring/control plane with agents and start/stop/restart actions across infrastructure; useful but too powerful for a quick conservative publish.
- Homelab Manager — deferred. README explicitly warns that stack management and agent functionality are unstable and under active development.

## Notes

- No local Hermes skills created: accepted resources are useful catalog entries, but none justified a new repeatable Hermes workflow skill today.
- New resource categories were mapped into existing visible groups before build.

# Discovery run — 2026-07-16 UTC

## Scope

Daily autonomous askhermie.dev discovery loop: Hermes/AI-agent tooling, automation, systems engineering, observability, homelab, static-site tooling, IoT/hardware, firmware analysis, ESP32/Raspberry Pi, and beginner-friendly labs.

## Candidates inspected

| Candidate | URL | Decision | Reason / safety screen |
|---|---|---|---|
| Screenpipe | https://github.com/screenpipe/screenpipe | Accepted | Active, popular local-first AI work-recorder. Useful for agent memory and workflow reconstruction, but highly privacy-sensitive; published only with desktop/onboarding first move and explicit warnings about screen/audio/app/prompt/personal-data capture, exclusions, sync/cloud choices, and sensitive sessions. |
| agentgateway | https://github.com/agentgateway/agentgateway | Accepted | Active Apache-2.0 proxy for MCP/A2A/LLM/tool traffic with governance and observability use case. Published as advanced with toy-MCP-first guidance and warnings that gateway configs/logs can contain prompts, headers, tool calls, and provider credentials. |
| Google Antigravity SDK | https://github.com/google-antigravity/antigravity-sdk-python | Accepted | Active Apache-2.0 Python SDK for Gemini/Antigravity agent workflows. README uses placeholder API key examples; published with private-venv first move and clear warning to keep provider keys out of repos, logs, screenshots, and shell history. |
| HomeLab Monitor | https://github.com/SikamikanikoBG/homelab-monitor | Accepted | Active MIT homelab/local-AI monitoring dashboard. README documents broad host/Docker/systemd/SSH/self-update capabilities, so published with read-only-compose-first guidance and strong private-dashboard/control warnings. |
| SOLECTRUS | https://github.com/solectrus/solectrus | Accepted | Active AGPL self-hosted solar/PV dashboard. Benign home-energy monitoring fit; published with configurator-first step and warnings about occupancy/power-use/inverter/API privacy. |
| Decap CMS | https://github.com/decaporg/decap-cms | Accepted | Mature MIT Git-backed CMS for static sites. Published with throwaway-site first step and warnings about Git credentials, identity providers, drafts, media, OAuth secrets, and backend tokens. |
| Quarkus Roq | https://github.com/quarkiverse/quarkus-roq | Accepted | Active Apache-2.0 static-site generator for Quarkus/Java-adjacent docs and blogs. Low-risk publishing tool; published with output-review warning for drafts, config, diagrams, and generated data. |
| SpeedPy | https://github.com/speedpy/speedpy | Deferred | Useful AI-era Django SaaS boilerplate, but the README’s prominent first install path pipes `wget -qO- https://speedpy.com/install | bash`. Needs deeper review of the script and safer install docs before beginner recommendation. |
| GumCP | https://github.com/gumslone/GumCP | Deferred | Raspberry Pi control-panel fit, but it exposes service/process/package/GPIO/SSH/command-button capabilities and documents default credentials plus remote installer scripts. Too much beginner footgun risk without deeper hardening notes. |
| Equibles | https://github.com/daniel3303/Equibles | Deferred | GitHub API README fetch timed out during inspection. No publication without complete README/install/safety review. |
| Documentalist | https://github.com/palantir/documentalist | Already present / inspected | Existing catalog already contains Documentalist, so no duplicate card was added. |
| Pulse | https://github.com/rcourtman/Pulse | Already present / inspected | Existing catalog already contains Pulse, so no duplicate card was added. |
| LILYGO Spark | https://github.com/Xinyuan-LilyGO/LILYGO-Spark | Already present / inspected | Existing catalog already contains LILYGO Spark, so no duplicate card was added. |

## Published changes

Added 7 new resource cards to `src/pages/resources.astro`:

- Screenpipe
- agentgateway
- Google Antigravity SDK
- HomeLab Monitor
- SOLECTRUS
- Decap CMS
- Quarkus Roq

Also added `Static site CMS` to the existing Build + publish websites grouping so Decap CMS appears under the correct broad section.

## Skill changes

No local Hermes skills created or updated. The accepted resources are useful catalog entries, but none warranted a new non-duplicative reusable Hermes skill without hands-on workflow verification.

## Verification notes

Final cron report records duplicate-name check, changed-file secret scan, Astro build, commit/push, remote SHA match, and live-site smoke check.

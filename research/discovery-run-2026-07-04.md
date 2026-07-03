# Discovery run — 2026-07-04

## Scope

Daily askhermie.dev discovery loop: Hermes/AI-agent tooling, automation, systems engineering, observability, homelab, static-site tooling, IoT/hardware, ESP32/Raspberry Pi, firmware analysis, and beginner-friendly labs.

## Candidates inspected

| Candidate | URL | Decision | Reason / safety screen |
|---|---|---|---|
| LeanCTX | https://github.com/yvgude/lean-ctx | Accepted | Active Apache-2.0 AI-agent context/control layer. Useful for narrowing agent file/context access and token usage. README offers a remote install script, but the public card uses the npm package path instead. Safety note added because it can observe code, prompts, shell output, and local files. |
| ktx | https://github.com/Kaelio/ktx | Accepted | Active Apache-2.0 context layer for data/analytics agents. Useful but credential/data-sensitive, so the card is marked Advanced and frames the first move around disposable/read-only data sources. Safety note added for database credentials and production data exposure. |
| Pipelock | https://github.com/luckyPipewrench/pipelock | Accepted | Active Apache-2.0 AI-agent firewall/mediator for MCP and egress. Defensive/guardrail primary purpose. README includes secret-exfiltration examples as threat examples, not instructions to publish real secrets. Safety note added for sensitive prompts, logs, tool calls, and fake-data policy testing. |
| Homelable | https://github.com/Pouzor/homelable | Accepted | Active MIT homelab infrastructure visualizer. README/install docs include remote install scripts, so the card uses the source + Docker Compose path instead. Safety note added for network layout, hostnames, IPs, service names, and default credentials. |
| Pulse | https://github.com/rcourtman/Pulse | Accepted | Active MIT infrastructure monitoring dashboard for Proxmox, Docker, and Kubernetes. README offers a remote install script, but docs also provide a simple Docker run path; the card uses Docker. Safety note added for infrastructure metadata, auth, API tokens, and least privilege. |
| Lume | https://github.com/lumeland/lume | Accepted | Mature MIT Deno static-site generator. Benign publishing/dev-tool purpose. Safety note added for private Markdown content and generated output review before deploy. |
| Zola | https://github.com/getzola/zola | Accepted | Mature EUPL-1.2 single-binary static-site generator. Benign docs/site publishing workflow. Card uses the official Docker image instead of asking readers to install random binaries. Safety note added for theme/template output review. |
| VitePress | https://github.com/vuejs/vitepress | Accepted | Mature MIT documentation site generator from the Vue ecosystem. Benign docs workflow. Safety note added for scrubbing internal URLs, screenshots, config, and tokens before publishing docs. |
| ArcKit | https://github.com/tractorjuice/arc-kit | Deferred | Architecture-governance toolkit looks benign, but API license metadata returned NOASSERTION while the README badge says MIT, and the install path is Claude-plugin-specific. Deferred until license/install details are clearer. |
| OpenSquilla | https://github.com/opensquilla/opensquilla | Deferred | AI-agent framework with broad overlap against Hermes and a young, high-velocity repo. No clear unique beginner-first use case for askhermie.dev today. |
| Network Optimizer for UniFi | https://github.com/Ozark-Connect/NetworkOptimizer | Deferred | Potentially useful homelab/UniFi monitoring and optimization tool, but it touches controller config, SSH, VLAN/firewall/security checks, modem stats, and network optimization. Deferred for a future hardening-first card. |
| EMS-ESP32 | https://github.com/emsesp/EMS-ESP32 | Deferred | Benign ESP32 firmware for EMS/Heatronic boilers and heat pumps, but it controls HVAC/boiler systems. Deferred because beginner mistakes can affect heating equipment and safety. |
| Rspress | https://github.com/web-infra-dev/rspress | Deferred | Benign static docs generator, but VitePress/Zola/Lume already cover today's static-site additions. Avoided adding too many similar cards. |
| RuView | https://github.com/ruvnet/RuView | Rejected | Markets Wi-Fi sensing for through-wall presence and vital-sign monitoring. Even if technically interesting, the privacy implications are too high for a beginner resource card. |
| ESP32 Marauder | https://github.com/justcallmekoko/ESP32Marauder | Rejected | Wi-Fi/Bluetooth offensive tooling for ESP32. Offensive-primary and easy to misuse. |
| Bruce firmware | https://github.com/BruceDevices/firmware | Rejected | README describes predatory/offensive red-team firmware for ESP32 devices. Offensive-primary and unsuitable for askhermie.dev beginners. |

## Published changes

Added 8 resource cards to `src/pages/resources.astro`:

- LeanCTX
- ktx
- Pipelock
- Homelable
- Pulse
- Lume
- Zola
- VitePress

Updated resource grouping so new AI-agent context/security, homelab mapping/monitoring, and static-site categories render under existing broad groups.

## Skill changes

No local Hermes skills created or updated. The accepted resources are useful catalog entries, but no new workflow was clearly reusable and non-duplicative enough to justify a local skill today.

## Verification

Final cron report records build, secret scan, commit, and push result.

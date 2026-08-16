# Discovery run — 2026-08-17

## Accepted for publication

1. **EvalView** (`hidai25/eval-view`) — accepted as benign AI-agent regression/snapshot testing. Safety screened README, Apache-2.0 license badge, PyPI install path, no-API-key demo, offline deterministic trajectory diff, optional LLM judge, and snapshot data sensitivity; published with non-sensitive-baseline warning.
2. **DevPod** (`loft-sh/devpod`) — accepted as benign reproducible development-environment tooling. Safety screened README, client-only model, devcontainer-based workflow, local/SSH/Kubernetes/VM/cloud providers, desktop/CLI docs path, and remote-provider risks; published with local-first and credential/mount warnings.
3. **SystemPi** (`WastelandSYS/systempi`) — accepted as Raspberry Pi terminal health monitoring. Safety screened README, GPL-3.0 search metadata, sudo installer, terminal-only telemetry, undervoltage/throttling diagnostics, one-shot mode, export/report behavior, and owned-device scope; published with sudo and host-report privacy warnings.
4. **Supergateway** (`supercorp-ai/supergateway`) — accepted as a small MCP transport bridge when framed for local testing. Safety screened README, npx install path, stdio-to-SSE/WebSocket/HTTP scope, CORS/header/bearer-token options, and MCP exposure risks; published with localhost-first, no-public-exposure, and least-privilege MCP warnings.
5. **Google Agents CLI** (`google/agents-cli`) — accepted as Google-maintained agent development/evaluation/deployment tooling for cloud-agent workflows. Safety screened README, Apache-2.0 search metadata, uvx setup path, agent-skill install path, Google Cloud deployment/governance scope, and cloud side-effect risks; published with sandbox-project, least-privilege, credentials, and cost warnings.

## Already present / inspected, not duplicated

- **HomeLab Monitor** (`SikamikanikoBG/homelab-monitor`) — already in catalog; inspected again from homelab/AI-rig monitoring results. README shows Docker compose start, local/LAN framing, optional MCP endpoint, SSH-connected telemetry, and GPU/container/disk/cost views.
- **Pulse** (`rcourtman/Pulse`) — already in catalog; inspected again from homelab monitoring results. README shows operator-controlled credentials, scoped API tokens, disabled-by-default agent commands, and approval paths.
- **Drydock** (`CodesWhat/drydock`) — already in catalog; inspected again from container update monitoring results. README presents update watcher, registries, notifications, OIDC/auth/Prometheus, AGPL-3.0, and OpenSSF signals.
- **Glance** (`glanceapp/glance`) — already in catalog; inspected again from self-hosted dashboard results. README shows RSS/weather/Docker/server widgets and YAML config risks.
- **DockDash** (`dougmaitelli/DockDash`) — already in catalog; inspected again from Docker dashboard results. README focuses on version-aware pinned-image update monitoring and changelog display.
- **GitMCP** (`idosal/git-mcp`) — already in catalog; inspected again from MCP documentation server results. README explains repo-specific vs generic GitHub documentation MCP modes and privacy/security relevance.

## Rejected / deferred

- **OpenOSINT** (`OpenOSINT/OpenOSINT`) — rejected for askhermie.dev beginner publication. Although it says authorized research, the project is an AI-powered OSINT/security agent with many tools and interactive/MCP surfaces; too dual-use/offensive-adjacent for this catalog without a narrower defensive-lab frame.
- **Unsloth Buddy** (`TYH-labs/unsloth-buddy`) — deferred. Benign fine-tuning assistant idea, but it installs as agent skills/extensions, can generate/acquire/reformat data, learns from previous projects, and touches model training/deployment; needs deeper privacy/data-provenance review before recommending to beginners.
- **graniet/llm** (`graniet/llm`) — deferred. Useful Rust multi-provider LLM library/CLI, but README examples include a fake `sk-TESTKEY` fallback and provider-key configuration; needs safer secret-handling wording before publication.
- **supergateway remote-token examples** — accepted only as a localhost-first tool card; remote SSE and bearer-token examples were intentionally not copied into the site because they can normalize exposing MCP and tokens.

## Notes

- Inspected 14 candidates across AI-agent evaluation, cloud-agent tooling, MCP bridges/docs, homelab monitoring, container update dashboards, Raspberry Pi monitoring, and LLM libraries.
- No malware, phishing, credential theft, exploit-pack, botnet, ransomware, piracy, fraud, spam, harassment, or offensive-primary resource was published.
- No secrets, tokens, API keys, credentials, personal phone numbers, private config, or cron changes were added.
- No Hermes skills created this run; accepted items are public-resource cards rather than novel reusable Hermes execution workflows.
- Existing catalog debt observed but not introduced: duplicate resource names `Eneru`, `MemMap Explorer`, and `LILYGO Spark` pre-exist this run.

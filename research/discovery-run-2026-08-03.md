# Discovery run — 2026-08-03

## Accepted for publication

1. **Agent Knowledge Manager** (`itlackey/akm`) — accepted as local agent knowledge/search tooling. Safety screened README, install path, and intended use; published with warnings about indexing prompts, env files, memories, scripts, and credentials.
2. **Code Context Engine** (`elara-labs/code-context-engine`) — accepted as local codebase indexing/MCP tooling. Safety screened README and install path; published with local-index, file-exclusion, and untrusted-agent warnings.
3. **HELM AI Kernel** (`Mindburn-Labs/helm-ai-kernel`) — accepted as defensive AI-agent action governance. Safety screened README and security-model framing; published with explicit warning that it is a guardrail, not a complete sandbox.
4. **Matryca Plumber** (`MarcoPorcellato/matryca-plumber`) — accepted as local-first Logseq OG CLI/MCP tooling. Safety screened README and workflow; published with test-copy, backup, and notes-privacy warnings.
5. **OMNI** (`fajarhide/omni`) — accepted as agent terminal-output reduction tooling. Safety screened README and install options; published with raw-log and output-compression caveats.
6. **Compass** (`adinhodovic/compass`) — accepted as homelab service discovery/landing-page tooling. Safety screened README and Docker/Kubernetes/Tailscale source model; published with LAN/VPN and read-only socket-proxy warnings.
7. **Heimdall MCP Observability** (`delta0-inc/heimdall`) — accepted as self-hosted MCP/AI observability. Safety screened README and local dev setup; published with prompt/tool-argument trace privacy warnings.
8. **Ephemeral Sandbox** (`Ephemeral-AI-Lab/ephemeral-sandbox`) — accepted as cooperative coding-agent workspace isolation infrastructure. Safety screened README and project security caveat; published with warning that it is not a hardened microVM boundary.
9. **Inky Dashboard** (`jaeheonshim/inky-dashboard`) — accepted as Raspberry Pi Pico W e-paper dashboard project. Safety screened README and hardware/setup path; published with calendar/task-token, Wi-Fi-secret, and owned-hardware warnings.

## Rejected / deferred

- **amux** (`mixpeek/amux`) — deferred. Useful agent control-plane idea, but README shows `--yolo` auto-approval and public tunnel/cloud subscription features; needs stronger safety framing before recommending to beginners.
- **Archcore CLI** (`archcore-ai/cli`) — deferred. Relevant git-native context tooling, but the primary quickstart pipes a remote install script; revisit with a verified safer install path and dependency review.
- **jira-skill** (`netresearch/jira-skill`) — deferred. Benign enterprise workflow, but examples require Jira credentials and are narrowly Claude/Jira-specific; not enough broad value for today’s public catalog entry.
- **GumCP** (`gumslone/GumCP`) — rejected. Raspberry Pi control panel exposes service control, process killing, apt upgrade, SSH command execution, cron editing, and command-button HTTP API; too much remote administration risk for a beginner card.
- **BoatOS** (`bigbrainlabs/BoatOS`) — deferred. Interesting Raspberry Pi/offline marine project, but navigation and weather workflows are safety-relevant; needs explicit non-navigation/lab framing before publication.
- **Splunk Observability Workshop** (`splunk/observability-workshop`) — deferred. Legitimate learning material, but vendor-cloud workshop already overlaps existing OpenTelemetry/observability entries and is less beginner-independent.
- **Trustworthy LLM Agents workshop** (`droideronline/pyconf-hyd-2026-trustworthy-llm-agents`) — deferred. Relevant educational repo, but quickstart centers API-key configuration and email/refund simulation agents; needs privacy and fake-data-only framing first.
- **Yantr** (`besoeasy/yantr`) — deferred. Useful self-hosted app-store idea, but Docker socket access, public tunnel features, and media/download app catalog need a deeper safety review.
- **Preloop** (`preloop/preloop`) — deferred. Relevant AI-agent control plane, but quickstart pipes a remote installer and rewrites local agent configs; needs safer install and rollback guidance before beginner publication.
- **Opik MCP Server** (`comet-ml/opik-mcp`) — deferred. Useful for existing Opik users, but README examples require API keys/workspace config and the Python package was noted as pre-release/not yet published to PyPI.
- **Unpage** (`aptible/unpage`) — deferred. SRE-agent framework looks legitimate, but production incident automation with shell and PagerDuty actions is too impactful for a beginner card without a read-only lab recipe.

## Already present / inspected, not duplicated

- **HomeLab Monitor** (`SikamikanikoBG/homelab-monitor`) — already in catalog as `HomeLab Monitor`.
- **Drydock** (`CodesWhat/drydock`) — already in catalog as `Drydock`.
- **Labby** (`samuelloranger/labby`) — already in catalog as `Labby`.
- **systempi** (`WastelandSYS/systempi`) — already in catalog as `systempi`.
- **Pi-Monitor** (`g1forfun/Pi-Monitor`) — already in catalog as `Pi-Monitor`.

## Notes

- Inspected 20+ candidates via GitHub search/API/raw README fetches across AI agents/MCP, homelab dashboards, Raspberry Pi projects, observability, SRE automation, and e-paper hardware projects.
- No secrets, credentials, tokens, private phone numbers, or private config were added.
- No Hermes skills created this run; accepted resources are useful catalog entries, but local skill creation would duplicate existing Hermes/MCP/agent-orchestration, observability, note-taking, and hardware workflow skills.

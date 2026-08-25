# Discovery run — 2026-08-26

## Accepted for publication

1. **Docker MCP Gateway** (`docker/mcp-gateway`) — accepted as official Docker MCP gateway/toolkit plumbing. Safety screened README, recent activity, Docker Desktop integration, container isolation model, secret-management claims, OAuth/service-connection scope, and open secret-handling issues. Published with read-only-first, Docker Desktop secrets, and MCP permission warnings.
2. **Google Workspace CLI** (`googleworkspace/cli`) — accepted as benign Workspace automation for humans and AI agents. Safety screened README, npm/release install paths, active pre-1.0 warning, OAuth requirements, structured-output design, and open token-cache/scope issues. Published with minimum-scope and private-token-cache warnings.
3. **Azure AI Gateway Labs** (`Azure-Samples/AI-Gateway`) — accepted as benign Microsoft learning labs for AI gateway patterns. Safety screened README, lab/sample framing, Azure API Management scope, Codespaces/lab setup, cloud-resource costs, and model/API-key handling risks. Published with sandbox-subscription and teardown warnings.
4. **changedetection.io** (`dgtlmoon/changedetection.io`) — accepted as benign self-hosted website-change monitoring. Safety screened README, Docker setup, notification/AI-summary/browser automation features, issue search, and private URL/header/screenshot risks. Published with allowed-access and private-dashboard warnings.
5. **Memos** (`usememos/memos`) — accepted as benign self-hosted Markdown note capture with APIs. Safety screened README, Docker setup, release/activity, self-hosted data model, API/web clipper scope, and note privacy risks. Published with account/backup/VPN warnings.
6. **Aily Blockly** (`ailyProject/aily-blockly`) — accepted as benign hardware/embedded education IDE. Safety screened README, release/activity, alpha-stage note, board/toolchain scope, AI-generated wiring/code risks, and issue search. Published with owned-board and verify-voltage/current warnings.

## Rejected / deferred / already present

- **Glance** (`glanceapp/glance`) — already present / inspected; not duplicated.
- **Inkycal** (`aceinnolab/Inkycal`) — already present / inspected; not duplicated.
- **HomeLab Monitor** (`SikamikanikoBG/homelab-monitor`) — already present / inspected; not duplicated.
- **Pulse** (`rcourtman/Pulse`) — already present / inspected; not duplicated.
- **Agent Browser** (`vercel-labs/agent-browser`) — already present / inspected; not duplicated.
- **Uptime Kuma** (`louislam/uptime-kuma`) — already present / inspected; not duplicated.
- **Portkey AI Gateway** (`Portkey-AI/gateway`) — deferred. Relevant AI gateway, but current issue search surfaced an open SSRF/credential-theft security report for the `/v1/proxy/*` route; no beginner card until that risk is clearly resolved.
- **MetaMCP** (`metatool-ai/metamcp`) — deferred. Relevant MCP gateway, but issue search surfaced open OAuth/token access-control reports; not beginner-safe this run.
- **Archestra** (`archestra-ai/archestra`) — deferred. Powerful platform, but broad enterprise surface touches SSO, RBAC, chat, email, Slack/Teams, LLM proxy, MCP apps, and credentials; needs a deeper least-privilege review before publication.
- **Chilipie Kiosk** (`jareware/chilipie-kiosk`) — deferred. Good Raspberry Pi kiosk idea, but issue history includes old abandonment/SSH-host-key concerns and the README still references the older Futurice path; needs fresher project-status review.
- **Pi Dashboard** (`nxez/pi-dashboard`) — deferred. README is too thin for a beginner-safe card and the project appears older despite recent timestamp activity.
- **JetBrains MicroPython plugin** (`JetBrains/intellij-micropython`) — deferred. Archived repository; not recommended as a new beginner resource.
- **Portainer Templates** (`lissy93/portainer-templates`) — deferred. Useful catalog, but it is mostly a large template list; not enough unique beginner workflow value for today’s curated map.

## Notes

- Inspected 19 candidates across MCP gateways, AI gateway labs, Workspace automation, homelab dashboards, web monitoring, note capture, Raspberry Pi kiosks/dashboards, and embedded IDEs.
- Existing catalog checked by exact `name:` fields inside the `const resources: Resource[]` block before adding new entries.
- No malware, phishing, credential theft, exploit-pack, botnet, ransomware, piracy, fraud, spam, harassment, jamming, or offensive-primary resource was published.
- No secrets, tokens, API keys, credentials, personal phone numbers, private config, or cron changes were added.
- No Hermes skills created this run. Existing Hermes/Google Workspace, MCP, automation, observability, note-taking, and embedded-development skills already cover the reusable workflows; the accepted resources are catalog entries only.
- Existing catalog debt observed but not introduced: duplicate resource names `Eneru`, `MemMap Explorer`, and `LILYGO Spark` pre-exist this run.

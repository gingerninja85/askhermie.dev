# Discovery run — 2026-07-19

## Accepted and published

1. **MCP Inspector** — official visual debugger/test UI for MCP servers. Safety-screened as developer tooling; published with localhost/read-only warnings because the connected server may expose files, shells, browsers, SaaS accounts, or secrets.
2. **mcpo** — MCP-to-OpenAPI bridge from Open WebUI. Safety-screened as useful interoperability glue; published with warnings about localhost binding, API keys, and avoiding destructive tools until policy is reviewed.
3. **CAPA** — package-manager style capabilities file for AI coding agents. Safety-screened as benign agent-configuration tooling; published with explicit generated-config review, version pinning, and no-secrets warnings.
4. **Node-RED** — low-code/event-driven automation for APIs, MQTT, dashboards, and IoT. Safety-screened as widely used benign automation tooling; published with warnings about editor exposure, stored credentials, and controlling real devices.
5. **Bytebase** — self-hostable database schema change management. Safety-screened as database governance tooling; published with lab database, least-privilege account, backup, and access-control warnings.
6. **VictoriaMetrics** — Prometheus-compatible metrics/time-series backend. Safety-screened as observability infrastructure; published with warnings about sensitive metric labels, hostnames, service names, and private dashboards.
7. **Kestra** — workflow orchestration for scheduled, event-driven, data, infrastructure, and AI workflows. Safety-screened as benign automation/orchestration tooling; published with warnings about command execution, Docker socket mounts, credentials, and audit logs.

## Already present / inspected, not duplicated

- **Beszel** — already in catalog; re-inspected GitHub metadata, no duplicate added.
- **Uptime Kuma** — already in catalog; re-inspected GitHub metadata, no duplicate added.
- **OpenObserve** — already in catalog; re-inspected GitHub metadata, no duplicate added.
- **ESPHome** — already in catalog; re-inspected GitHub metadata, no duplicate added.
- **agent-inspect / Agents Shipgate** — already in catalog under related entries; no duplicate added.

## Rejected / deferred

- **AgentSkillsHub** — deferred. Interesting agent-tool directory, but the repo metadata reported no SPDX license through the GitHub API and the scope overlaps strongly with existing registry entries. Safer to re-check later before publishing.
- **Kindly Web Search MCP Server** — deferred. It is a legitimate MCP/web-search server, but it requires third-party search providers/keys and overlaps with existing search/browser tooling; avoid publishing until a safer no-key local path is documented clearly.
- **Sentry self-hosted** — deferred. Useful, but heavy operational surface and less beginner-friendly than current observability entries; not unsafe, just not a strong fit today.
- **frp** — deferred. Legitimate reverse proxy, but beginners can easily expose private services to the internet; publish only if a future card can give a tightly bounded safe lab pattern.
- **Dgraph** — deferred. Legitimate graph database, but generic database infrastructure rather than a strong askhermie.dev fit for this run.
- **Firefly III** — deferred. Legitimate self-hosted personal finance app, but outside the main resource-map focus and handles sensitive financial data.

## Safety notes

- No malware, phishing, credential theft, ransomware, botnet, exploit-pack, piracy, fraud, spam, harassment, or offensive-primary tools were published.
- Every newly accepted card includes a concrete example use case and safety note.
- MCP/agent/database/orchestration resources are framed around localhost, scratch repos, read-only tools, demo keys, throwaway databases, least privilege, and manual review.
- No secrets, tokens, credentials, personal phone numbers, or private config were added.

## Skills

No local Hermes skills were created. The accepted resources are useful, but this run did not identify a safe, non-duplicative, repeatedly executable workflow that clearly justified a new skill over existing Hermes MCP, automation, observability, database, and agent skills.

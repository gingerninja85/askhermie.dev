# Discovery run 2026-09-05

## Scope
Daily autonomous askhermie.dev resource discovery. Buckets searched: AI-agent tooling, observability, homelab, workflow automation, ESP32/Raspberry Pi, firmware/hardware learning, static/developer tooling.

## Accepted and published

1. **OpenLLMetry** — `https://github.com/traceloop/openllmetry`
   - Category: LLM observability.
   - Evidence inspected: GitHub repo metadata and README via GitHub API. Apache-2.0, active, non-archived, 7k+ stars, updated 2026-09-04. README describes OpenTelemetry-based observability for LLM applications.
   - Safety note: Benign observability tool, but traces may contain prompts, retrieved documents, URLs, or user data; published card tells readers to redact before sending telemetry to hosted backends.

2. **k6** — `https://github.com/grafana/k6`
   - Category: Performance testing.
   - Evidence inspected: GitHub repo metadata and README via GitHub API. AGPL-3.0, active, non-archived, 31k+ stars, updated 2026-09-04. README positions it as developer load testing.
   - Safety note: Load testing can disrupt services and be interpreted as abuse; published card limits use to owned or explicitly authorized systems.

3. **Raspberry Pi Guide** — `https://github.com/mikeroyal/Raspberry-Pi-Guide`
   - Category: Raspberry Pi learning.
   - Evidence inspected: GitHub repo metadata and README via GitHub API. Active, non-archived, updated 2026-09-02. README is a broad learning guide for Raspberry Pi devices, OSes, and projects.
   - Safety note: Community reference rather than vendor docs; published card tells readers to verify current commands, avoid internet-exposing Pi services, and never paste private tokens into examples.

4. **Graphtage** — `https://github.com/trailofbits/graphtage`
   - Category: Structured diff tooling.
   - Evidence inspected: GitHub repo metadata and README via GitHub API. LGPL-3.0, active, non-archived, 2k+ stars, updated 2026-08-31. README describes semantic diffing for tree-like structured files.
   - Safety note: Diff outputs can reveal secrets from config/API files; published card warns to sanitize output before sharing.

5. **Dagu** — `https://github.com/dagucloud/dagu`
   - Category: Workflow orchestration.
   - Evidence inspected: GitHub repo metadata and README via GitHub API. GPL-3.0, active, non-archived, 3k+ stars, updated 2026-09-04. README describes local-first YAML workflows, built-in UI, no database.
   - Safety note: Orchestrators run arbitrary commands; published card warns to keep UI private, protect credentials, and review DAGs before schedules.

## Already present / inspected, not duplicated

- **OpenObserve** — already in catalog. Active observability platform; safe as a self-hosted monitoring entry with sensitive-log caveats.
- **OneUptime** — already in catalog. Active monitoring/status platform; safe with dashboard/alerting exposure caveats.
- **SigNoz** — already in catalog. Active OpenTelemetry observability platform; safe with telemetry privacy caveats.
- **ESP32 Bit Pirate** — already in catalog. Dual-use hardware protocol tool, but existing card scopes to owned hardware/labs.
- **ESP32 MPY-Jama** — already in catalog. Benign ESP32 MicroPython IDE/file manager; existing card scopes to owned boards.
- **ESP32 CSI Tool** — already in catalog. Research/advanced wireless sensing; existing card scopes to own boards/networks and consent.
- **Memos** — already in catalog. Self-hosted note-taking tool; safe with private-data caveats.
- **Homepage** — already in catalog. Homelab dashboard; safe if not internet-exposed without auth.
- **OpenTelemetry Demo** — already in catalog. Safe learning/demo app.
- **Playwright MCP** — already in catalog. Safe browser automation if connected only to trusted tool scopes.
- **MCP Toolbox for Databases** — already in catalog. Safe when read-only/least-privilege DB credentials are used.
- **Model Context Protocol Servers** — already in catalog. Safe as reference implementations, with tool-permission caveats.

## Rejected / deferred

- **ESP32 Firmware Viewer & Web Flasher** — `https://github.com/g3gg0/esp32_flasher`
  - Reason: Deferred. The idea is relevant, but the repo is very new/small (17 stars during inspection), has no detected license in GitHub metadata, and README labels on-device writes and NVS editing experimental. Publishing to beginners would be premature.

- **SOPS** — `https://github.com/getsops/sops`
  - Reason: Deferred, not unsafe. It is a legitimate secrets-encryption tool, but adding it well requires a carefully scoped beginner entry with age/KMS key handling and no accidental credential examples. Better handled in a dedicated secrets-management run.

- **Gitleaks** — `https://github.com/gitleaks/gitleaks`
  - Reason: Deferred, not unsafe. Legitimate defensive secret scanning, but README states feature-complete/security-patches-only and points to Betterleaks; needs comparison before recommending a default.

- **Sentry** — `https://github.com/getsentry/sentry`
  - Reason: Deferred, not unsafe. Legitimate error monitoring, but self-hosting/license posture is more complex than a beginner card; avoid recommending until a concise first step and data-retention warning are written.

- **Garnet** — `https://github.com/microsoft/garnet`
  - Reason: Deferred, not unsafe. Legitimate Redis-compatible cache, but lower priority for askhermie.dev readers than beginner observability/homelab entries.

- **Argo Workflows** — `https://github.com/argoproj/argo-workflows`
  - Reason: Deferred, not unsafe. Kubernetes workflow engine is legitimate, but too advanced/heavy for today’s beginner-first publishing compared with Dagu.

- **FriendsOfFritzing/fritzing-app** and **b4rtaz/discover**
  - Reason: Deferred. GitHub API lookup returned 404 for the guessed repo names, so they were not inspected enough to publish.

## Skill decision
No Hermes skills created or updated. The accepted entries are useful resources, but none introduced a distinct, safe, reusable Hermes execution workflow that is not already covered by existing skills.

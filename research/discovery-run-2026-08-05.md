# Discovery run — 2026-08-05

## Accepted for publication

1. **OpenTelemetry MCP Server** (`traceloop/opentelemetry-mcp-server`) — accepted as read-only AI observability/MCP tooling. Safety screened README quickstart, PyPI/pipx install path, backend configuration, trace-query use case, and data sensitivity; published with local Jaeger/sample-telemetry and trace-privacy warnings.
2. **Golf** (`golf-mcp/golf`) — accepted as benign MCP server framework. Safety screened README, pip install path, scaffolded project model, tool/resource/prompt conventions, and auth/telemetry mentions; published with localhost/read-only toy-tool warnings.
3. **ContextForge** (`IBM/mcp-context-forge`) — accepted as governed MCP/A2A/API gateway for advanced users. Safety screened README, PyPI/Docker setup options, auth/rate-limit/observability claims, and gateway purpose; published with sample-service-first, auth, and credential/API registration warnings.
4. **Dory** (`clidey/dory`) — accepted as lightweight technical-docs static site generator. Safety screened README, npm install path, CLI commands, MDX/Mermaid scope, and no credential requirements; published with static-docs data-leak warnings.
5. **Structurizr Site Generatr** (`avisi-cloud/structurizr-site-generatr`) — accepted as C4/Structurizr architecture documentation generator. Safety screened README, Homebrew/manual/Docker setup, example workspace flow, image verification notes, and static output; published with architecture-model sensitivity warnings.
6. **The Rust on ESP Book** (`esp-rs/book`) — accepted as embedded Rust/ESP32 learning reference. Safety screened README, mdBook setup, license, and hardware-learning scope; published with owned-board, target-chip, and Wi-Fi-secret warnings.
7. **AgenticGoKit** (`AgenticGoKit/AgenticGoKit`) — accepted as Go AI-agent framework for local experiments. Safety screened README, beta status, provider list, AGK CLI install, tracing, memory/RAG/tool features, and MCP discovery; published with disposable-repo, local-provider, env-file, and trace-review warnings.
8. **tRPC-Agent-Go** (`trpc-group/trpc-agent-go`) — accepted as advanced Go-native agent framework. Safety screened README, Go package docs, graph workflow/tool/MCP/A2A/eval/observability features, and production framing; published with narrow-tool and trace-privacy warnings.
9. **OctoBus** (`chaitin/OctoBus`) — accepted as local capset-based agent tool gateway. Safety screened README, npm/npx install path, localhost binding defaults, service/instance/capset model, Docker option, and dependencies; published with local-only daemon, trusted-package, and capset access-control warnings.

## Rejected / deferred

- **AgentCat** (`agentcathq/agentcat-typescript-sdk`) — deferred. Legitimate MCP analytics SDK, but the product captures session replay, user behavior, tool calls, traces, and identifying callbacks; needs a stricter redaction/privacy-first starter before beginner publication.
- **PostHog** (`PostHog/posthog`) — deferred again. Valuable analytics/observability platform, but the onboarding path and telemetry/privacy implications still need a beginner-safe local/privacy recipe.
- **Alibaba Cloud ACK MCP Server** (`aliyun/alibabacloud-ack-mcp-server`) — deferred. It operates Kubernetes/cloud resources and would require real cloud credentials; not beginner-safe for the public map without strong least-privilege setup.
- **AURA** (`mezmo/aura`) — deferred. SRE agent platform can act on production infrastructure; needs verified human-approval and sandbox boundaries before recommending.
- **Kubeshark** (`kubeshark/kubeshark`) — deferred. Powerful Kubernetes/eBPF traffic visibility, including TLS decryption claims; too sensitive for a beginner card without a defensive-only lab guide.
- **JAT** (`joewinke/jat`) — deferred. Broad autonomous-agent IDE with one-line shell installer, event-triggered agents, Slack/Gmail/Telegram integrations, and VPS setup scripts; needs disposable-repo and no-autonomy recipe.
- **BossConsole** (`risa-labs-inc/BossConsole`) — deferred. Multi-agent desktop console with terminal, browser, secrets, and 100+ MCP tools; useful but too broad for a beginner card without hands-on permission-boundary verification.
- **Harnss** (`OpenSource03/harnss`) — deferred. README warns it is early and pending a large rewrite; revisit after stability improves.
- **Whale** (`usewhale/Whale`) — deferred. AI coding agent with file reads, command execution, dynamic workflows, MCP, skills, and provider keys; needs a safer sandbox-first recipe before publication.
- **Prismarr** (`Shoshuo/Prismarr`) — deferred. Homelab media-stack dashboard touches qBittorrent/*arr services and API keys; legal/media-source ambiguity and secrets handling make it a poor beginner card.
- **swati1024/torrents** — rejected. Search result contained piracy/course torrent links; not suitable for askhermie.dev.
- **AgentHound** (`adithyan-ak/AgentHound`) — rejected. README/search description explicitly markets offensive recon, credential looting, model exfiltration, poisoning, and attack-path analysis.
- **Dark-Moon** (`ASCIT31/Dark-Moon`) — rejected. Autonomous AI pentesting engine with exploit execution across web, cloud, identity, CI/CD, Kubernetes, and IoT firmware; offensive-primary.
- **AegisGate** (`ax128/AegisGate`) — deferred. Defensive LLM gateway, but README includes dangerous-output filtering and proxy/gateway configuration that needs a carefully verified local-only recipe before beginner publication.
- **Lunar.dev** (`TheLunarCompany/lunar`) — deferred. Promising MCP/API gateway, but outbound API governance and production policy controls need deeper setup review.
- **Hoop** (`hoophq/hoop`), **Wirken** (`gebruder/wirken`), **OneCLI** (`onecli/onecli`) — deferred. Gateway/vault/credential-access products are legitimate but center on sensitive enterprise API and credential flows; not beginner-safe without stronger credential-boundary docs.

## Already present / inspected, not duplicated

- **SigNoz** (`SigNoz/signoz`) — already in catalog as `SigNoz`.
- **Pulse** (`rcourtman/Pulse`) — already in catalog as `Pulse`.
- **Drydock** (`CodesWhat/drydock`) — already in catalog as `Drydock`.
- **HomeLab Monitor** (`SikamikanikoBG/homelab-monitor`) — already in catalog as `HomeLab Monitor`.
- **Glance** (`glanceapp/glance`) — already in catalog as `Glance`.
- **Documentalist** (`palantir/documentalist`) — already in catalog as `Documentalist`.
- **Zensical** (`zensical/zensical`) — already in catalog as `Zensical`.
- **Retype** (`retypeapp/retype`) — already in catalog as `Retype`.
- **DocFX** (`dotnet/docfx`) — already in catalog as `DocFX`.
- **Magic Frame** (`jeremiaa/magic-frame`) — already in catalog as `Magic Frame`.
- **impl Rust for ESP32** (`ImplFerris/esp32-book`) — already in catalog as `impl Rust for ESP32`.

## Notes

- Inspected 30+ candidates via `gh search repos`, GitHub metadata, and README fetches across AI-agent tooling, MCP gateways, observability, homelab dashboards, static-site tooling, ESP32/embedded Rust learning, and hardware projects.
- No malware, phishing, credential theft, exploit-pack, botnet, ransomware, piracy, fraud, spam, or harassment tooling was published.
- No secrets, tokens, API keys, credentials, personal phone numbers, or private config were added.
- No Hermes skills created this run; accepted workflows are useful resources, but creating skills would duplicate existing MCP/agent/framework/static-site/embedded workflows or require deeper hands-on verification.

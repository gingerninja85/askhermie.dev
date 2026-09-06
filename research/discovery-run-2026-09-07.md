# Discovery run 2026-09-07

## Scope
Daily autonomous askhermie.dev resource discovery. Buckets searched: Hermes/AI-agent tooling, MCP gateways/servers, AI observability, homelab dashboards, Raspberry Pi monitoring, ESP32/hardware learning, and static-site tooling.

## Candidates inspected

1. `VoltAgent/voltagent`
2. `agentkitai/agentlens`
3. `Arize-ai/phoenix`
4. `agentscope-ai/AgentTeams`
5. `agentgateway/agentgateway`
6. `aipotheosis-labs/gate22`
7. `github/github-mcp-server`
8. `agentic-community/mcp-gateway-registry`
9. `mcp-agents-ai/mcp-agents-hub`
10. `avivsinai/langfuse-mcp`
11. `Continuum-AI-Corp/OrcaReplay`
12. `ascending-llc/jarvis-registry`
13. `SikamikanikoBG/homelab-monitor`
14. `Framerrr/Framerr`
15. `Turbootzz/Nimbus`
16. `boubli/AMUD-Dashboard`
17. `solectrus/solectrus`
18. `aymanhs/nanotdb`
19. `jfergs/gridrunner-academy`
20. `JeanCharlie/esp32-learning`
21. `o1-lab/esp32-starter`
22. `feib922/esp32-firmware-agent`
23. `The-Masked-Bear/wifisense-pi`
24. `mendhak/waveshare-epaper-display`
25. `jackyzha0/quartz`

Evidence sources: GitHub repository metadata and README content via GitHub API, web search result context, existing catalog duplicate-name parsing from the `const resources: Resource[] = [...]` block, and targeted README install snippets for accepted resources.

## Accepted and published

1. **Arize Phoenix** — `https://github.com/Arize-ai/phoenix`
   - Category: AI evals and observability.
   - Evidence inspected: active non-archived repo, 11k+ stars during inspection, pushed 2026-09-06. README describes open-source AI observability/evaluation with local `pip install arize-phoenix` and `uvx arize-phoenix serve` starts.
   - Safety note: Published as local-first LLM tracing/evals. Card warns traces may include prompts, retrieved documents, user identifiers, and tool outputs.

2. **GitHub MCP Server** — `https://github.com/github/github-mcp-server`
   - Category: MCP platform.
   - Evidence inspected: official GitHub repo, MIT license, active non-archived repo, 32k+ stars during inspection, pushed 2026-09-05. README describes MCP access to repositories, issues, PRs, code search, and GitHub workflows.
   - Safety note: Published with read-only first step and no token values. Card warns that private repositories and write-scoped actions require least-privilege tokens and human review.

3. **Langfuse MCP** — `https://github.com/avivsinai/langfuse-mcp`
   - Category: MCP observability.
   - Evidence inspected: MIT license, active non-archived repo, 100+ stars during inspection, pushed 2026-09-06. README describes a local MCP server for Langfuse traces/sessions/exceptions and offers `uvx langfuse-mcp` usage.
   - Safety note: Published with private environment-variable guidance only. Card warns trace data and API keys are sensitive and MCP HTTP transport should stay local.

4. **Framerr** — `https://github.com/Framerrr/Framerr`
   - Category: Homelab dashboard.
   - Evidence inspected: MIT license, active non-archived repo, 134 stars during inspection, pushed 2026-08-01. README describes a Docker-deployable self-hosted homelab dashboard with iframe tabs, widgets, mobile layout, and encrypted integration secrets.
   - Safety note: Published with docs-first Docker pull command, not inline secret values. Card warns dashboards and iframe integrations can leak internal URLs and metadata.

## Already present / inspected, not duplicated

- **VoltAgent** — already in catalog. Active MIT TypeScript AI agent framework/platform with MCP and observability; existing card covers agent safety caveats.
- **agentgateway** — already in catalog. Active Apache-2.0 agent/MCP proxy; existing card covers gateway/logging/secrets caveats.
- **HomeLab Monitor** — already in catalog. Active MIT homelab/local-AI monitoring dashboard; existing card scopes to private LAN and read-only MCP.
- **agent-inspect** — already in catalog from search follow-up; not duplicated.
- **tRPC-Agent-Go** and **Golf** — already in catalog from search follow-up; not duplicated.
- **NanoTDB** — already in catalog. Single-binary Raspberry Pi/edge metrics dashboard; existing card scopes use to local/owned metrics and private dashboards.
- **DockDash** — already in catalog from homelab search follow-up; not duplicated.
- **Quartz**, **VitePress**, **Zola**, **Rspress**, **Marmite**, and **Inkycal** — already in catalog from static-site/Raspberry Pi search follow-up; not duplicated.

## Rejected / deferred

- **AgentLens** — `https://github.com/agentkitai/agentlens`
  - Reason: Deferred, not unsafe. Interesting MCP-native agent audit trail, MIT license, and active repo, but only 23 stars and very new. Needs more maturity/reputation before beginner recommendation.

- **AgentTeams** — `https://github.com/agentscope-ai/AgentTeams`
  - Reason: Deferred. Legitimate-looking Apache-2.0 collaborative multi-agent OS, but README includes broad credential/authentication and bypass/security terminology; needs deeper operational review before beginner publication.

- **Gate22** — `https://github.com/aipotheosis-labs/gate22`
  - Reason: Deferred, not unsafe. MCP gateway/control-plane idea is relevant, but setup is enterprise/control-plane heavy and not a clean beginner card yet.

- **MCP Gateway & Registry** — `https://github.com/agentic-community/mcp-gateway-registry`
  - Reason: Deferred, not unsafe. Apache-2.0 and active, but OAuth/Keycloak/Entra/tool-registry setup is complex and credentials-sensitive. Needs a dedicated least-privilege walkthrough before recommendation.

- **MCP Agents Hub** — `https://github.com/mcp-agents-ai/mcp-agents-hub`
  - Reason: Deferred. Relevant but low star count and broad ecosystem framing; not enough distinct beginner value versus existing MCP resources.

- **OrcaReplay** — `https://github.com/Continuum-AI-Corp/OrcaReplay`
  - Reason: Deferred, not unsafe. Agent replay/debugging is useful, but repo is still relatively new and README references model-router/API-key workflows; needs privacy/retention review before recommending.

- **Jarvis Registry** — `https://github.com/ascending-llc/jarvis-registry`
  - Reason: Deferred, not unsafe. Active Apache-2.0 MCP gateway with identity/access control, but enterprise tool access and credential flows are too sensitive for a quick beginner card.

- **Nimbus** — `https://github.com/Turbootzz/Nimbus`
  - Reason: Deferred. Homelab dashboard is relevant, but GitHub license metadata reported `NOASSERTION` despite AGPL badge in README, and auth/secrets handling needs deeper review.

- **AMUD Dashboard** — `https://github.com/boubli/AMUD-Dashboard`
  - Reason: Deferred. Interesting Rust homelab dashboard, but small repo, Docker socket/container control surface, and Proxmox telemetry make it too control-heavy for a quick card.

- **SOLECTRUS** — `https://github.com/solectrus/solectrus`
  - Reason: Deferred, not unsafe. Solar dashboard is benign and useful, but narrower household/energy niche; held for a future homelab-energy batch.

- **Gridrunner Academy** — `https://github.com/jfergs/gridrunner-academy`
  - Reason: Deferred. MIT code and educational intent, but 0 stars and sparse README; not enough completed material to recommend yet.

- **esp32-learning** — `https://github.com/JeanCharlie/esp32-learning`
  - Reason: Deferred. Beginner ESP32 intent is good, but 0 stars and no detected license in GitHub metadata.

- **esp32-starter** — `https://github.com/o1-lab/esp32-starter`
  - Reason: Deferred. Very small/no-license repo, Wi-Fi credentials and OTA HTTP API surface are too easy for beginners to mishandle.

- **esp32-firmware-agent** — `https://github.com/feib922/esp32-firmware-agent`
  - Reason: Deferred. Benign-looking MIT workflow idea, but 0 stars and claims to package an agent skill; needs deeper verification before learning from it or recommending it.

- **WiFi Sense** — `https://github.com/The-Masked-Bear/wifisense-pi`
  - Reason: Rejected/deferred for publication. Archived repo and through-wall motion/presence/breathing sensing creates consent/privacy risk despite Apache-2.0 license.

- **Waveshare ePaper Display** — `https://github.com/mendhak/waveshare-epaper-display`
  - Reason: Deferred, not unsafe. Useful Raspberry Pi e-paper dashboard, but calendar/weather/API-key setup requires privacy-focused review and similar dashboard resources already exist.

## Skill decision
No Hermes skills created or updated. The accepted resources are useful catalog entries, but none introduced a distinct, safe, reusable Hermes workflow beyond existing MCP, observability, homelab, and Raspberry Pi skills.

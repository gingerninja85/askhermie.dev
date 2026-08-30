# Discovery run — 2026-08-31

## Accepted for publication

1. **Gortex** (`zzet/gortex`) — accepted as a benign local code-intelligence/MCP tool. Safety screened README, installation docs, package-manager install option, Apache-2.0 license, recent activity, supply-chain verification badges, open issues, and source-code privacy risk. Published with local-index and MCP-permission warnings.
2. **DocsMint** (`HiAi-gg/docsmint`) — accepted as a benign self-hosted knowledge workspace for people and agents. Safety screened README, Docker quickstart, Apache-2.0 license, recent activity, MCP/REST surfaces, and provider-key/document privacy risks. Published with sample-doc-first and no-committed-.env warnings.
3. **Token Optimizer MCP** (`ooples/token-optimizer-mcp`) — accepted as a benign but advanced MCP/token-analysis tool. Safety screened README, npm package path, MIT license, recent activity, open issues, optional hook installer, and transcript/config privacy risks. Published with MCP-only/doctor-first and review-generated-diffs warnings.
4. **SkillReaper** (`thousandflowers/skillreaper`) — accepted as a benign agent-stack audit tool. Safety screened README, npm/Homebrew/go install paths, MIT license, recent activity, read-only default report, hook install/uninstall notes, open issues, and transcript/config privacy risks. Published with read-only-first and no-bulk-delete warnings.
5. **Qwen Code** (`QwenLM/qwen-code`) — accepted as a benign open-source terminal coding agent. Safety screened README, npm/Homebrew install alternatives to remote shell installer, Apache-2.0 license, recent activity, open issues, MCP support, and coding-agent file/command risks. Published with disposable-repo and credentials-out-of-source warnings.

## Rejected / deferred / already present

- **Agent AFK** (`griffinwork40/agent-afk`) — deferred. It appears to be legitimate agent harness tooling, but the README says new installs default to `permissionMode: "bypassPermissions"`; not beginner-safe for publication without a deeper safe-mode path.
- **Canonry** (`Canonry/canonry`) — deferred. Potentially useful self-hosted AI visibility/analytics stack, but GitHub license metadata is `NOASSERTION` and it joins search, analytics, server-side traffic, and paid data; needs deeper privacy/license review.
- **ClickStack** (`ClickHouse/ClickStack`) — deferred. Looks like a useful OpenTelemetry/ClickHouse observability stack, but GitHub license metadata is missing on the parent repo and component boundaries need review before beginner publication.
- **GumCP** (`gumslone/GumCP`) — deferred. Benign Raspberry Pi control panel, but it includes SSH execution, command buttons, HTTP API, GPIO, and service/process control; needs an auth/exposure review before a safe beginner card.
- **Pulse** (`rcourtman/Pulse`) — already present / inspected. Active benign infrastructure monitoring; not duplicated.
- **maintenant** (`kOlapsis/maintenant`) — already present / inspected. Active benign monitoring/status-page tool; not duplicated.
- **drydock** (`CodesWhat/drydock`) — already present / inspected. Active benign container update monitor; not duplicated.
- **Rackpad** (`Kobii-git/rackpad`) — already present / inspected. Active benign homelab inventory tool; not duplicated.
- **otel-cli** (`equinix-labs/otel-cli`) — already present / inspected. Active benign OpenTelemetry shell tracing tool; not duplicated.
- **Axon** (`langchain-tracer/Axon`) — already present / inspected. Active benign local LLM/agent trace viewer; not duplicated.
- **Dory** (`clidey/dory`) — already present / inspected. Active benign static docs generator; not duplicated.
- **Retype** (`retypeapp/retype`) — already present / inspected. Active benign markdown-first docs generator; not duplicated.

## Notes

- Inspected 17 candidates across AI coding agents, MCP/context tooling, agent-stack pruning, self-hosted knowledge bases, observability stacks, homelab monitors, Raspberry Pi control panels, and static docs generators.
- Existing catalog checked by exact `name:` fields inside the `const resources: Resource[]` block before adding entries; re-inspected existing resources were not duplicated.
- Resource duplicate check after edits should show the five new names exactly once. Pre-existing catalog debt remains: `Eneru`, `MemMap Explorer`, and `LILYGO Spark` each appear twice; this run did not introduce those duplicates.
- No malware, phishing, credential theft, exploit-pack, botnet, ransomware, piracy, fraud, spam, harassment, or offensive-primary resource was published.
- No secrets, tokens, API keys, credentials, personal phone numbers, private config, or cron changes were added.
- No Hermes skills created this run. Existing AI-agent, MCP, observability, GitHub, and devops skills cover the reusable workflows; this run added public resource cards only.

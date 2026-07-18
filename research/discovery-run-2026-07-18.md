# Discovery run — 2026-07-18

## Accepted and published

1. **MCP Registry** — official/community MCP server registry. Safety-screened as a reference/discovery resource, not a trust guarantee. Published with a warning that each MCP server still needs permission and source review.
2. **ToolHive** — Stacklok MCP server management platform. Safety-screened as useful for container isolation, identity/policy, and observability around MCP servers. Published with explicit warnings that unsafe MCP servers remain unsafe and container images/permissions/logs must be reviewed.
3. **MCP Toolbox for Databases** — Google MCP server for database tooling. Safety-screened as useful but sensitive because it touches databases. Published only with sample/local/read-only framing and credential/schema warnings.
4. **ty** — Astral Python type checker/language server. Safety-screened as low-risk developer tooling. Published with a note that diagnostics/source snippets from private repos can still be sensitive.
5. **OpenHands** — self-hosted developer control center for coding agents and automations. Safety-screened as benign but high-impact agent tooling. Published with sandbox repo, least-privilege key, logs, and manual diff-review warnings.
6. **Agno** — agent framework/runtime with AgentOS UI. Safety-screened as benign reusable AI-agent framework. Published with fake-data/local-demo/provider-key warnings.
7. **OpenCode** — open-source terminal AI coding agent. Safety-screened as benign coding-agent tooling. Published with command-execution, provider prompt/code exposure, and diff-review warnings.

## Already present / inspected, not duplicated

- **Quarkdown** — already in the catalog; re-inspected current GitHub metadata/README, no duplicate added.
- **DocFX** — already in the catalog; re-inspected metadata, no duplicate added.
- **SOLECTRUS** — already in the catalog; re-inspected metadata/README, no duplicate added.
- **Screenpipe** — already in the catalog; network README fetch timed out this run, but existing catalog entry already has strong privacy warnings; no duplicate added.
- **agentgateway** — already in the catalog; re-inspected metadata, no duplicate added.
- **MagicMirror²** — already in the catalog; re-inspected metadata/README, no duplicate added.
- **Decap CMS** — already in the catalog; README re-inspected, no duplicate added.
- **OpenCCU** — already in the catalog; network fetch timed out, no duplicate added.
- **Eleventy** — already in the catalog; network fetch timed out, no duplicate added.
- **Homepage / Beszel / Dashy** — inspected as homelab dashboard candidates; Homepage and Beszel are already present, Dashy was safe but redundant with existing dashboard coverage, so deferred.

## Rejected / deferred

- **PoC-in-GitHub** — rejected. GitHub search surfaced it while looking for Decap CMS; its own description says “PoC auto collect” and warns “Be careful Malware.” Offensive/malware-adjacent aggregation is not appropriate for askhermie.dev.
- **OpenCode metadata fetch** — partially deferred for metadata depth because GitHub API metadata timed out, but raw README fetched successfully and package/repo identity was clear enough to publish with conservative coding-agent warnings.
- **All remaining network-timeout candidates** — deferred rather than guessing when repo identity or safety posture could not be confirmed.

## Safety notes

- No secrets, tokens, credentials, phone numbers, or private configs were added.
- Every accepted card includes a concrete safety note and example use case.
- MCP/database/agent resources were framed around local, sample, read-only, disposable, or sandbox-first use.
- No malware, phishing, credential theft, ransomware, exploit-pack, botnet, piracy, fraud, spam, harassment, or offensive-primary tools were published.

## Skills

No local Hermes skills were created. The accepted resources are useful, but this run did not identify a safe, non-duplicative, repeatedly executable workflow that clearly justified a new skill over existing MCP/agent/database skills.

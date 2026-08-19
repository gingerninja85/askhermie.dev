# Discovery run — 2026-08-20

## Accepted for publication

1. **csvql** (`melihbirim/csvql`) — accepted as benign local CSV querying and data-agent context tooling. Safety screened README, MIT license, active non-archived repo, npm/CLI quickstart, MCP mode, `--root` confinement flag, `--audit` flag, pipe/file query behavior, and data-privacy risks; published with local-data and MCP-root warnings.
2. **Opcore** (`the-open-engine/opcore`) — accepted as AI coding-agent validation tooling. Safety screened README, MIT license, active non-archived repo, Node >=22 install path, local Rust code-graph purpose, changed-file validation gate, TypeScript/Rust focus, and autopilot risk; published with review-before-edit warning.
3. **CodeContext** (`DavidVeksler/CodeContext`) — accepted as codebase-to-context CLI/MCP tooling. Safety screened README, MIT license, active non-archived repo, .NET 9 prerequisite, git-aware filtering, binary/generated-code exclusions, MCP mode, token-budgeting, and private-code leakage risk; published with output-review and repository-scope warnings.
4. **llm-git** (`can1357/llm-git`) — accepted as AI-assisted conventional commit drafting. Safety screened README, MIT license, active non-archived repo, PyPI/uv install path, dry-run mode, commit/changelog/rewrite capabilities, model-provider API-key requirement, and git history risk; published with dry-run, secrets-in-diff, and shared-branch warnings.
5. **Roampal** (`roampal-ai/roampal-core`) — accepted as benign agent memory/MCP infrastructure. Safety screened README, Apache-2.0 license, active non-archived repo, PyPI install path, Claude Code/OpenCode integration, local profiles, sidecar scoring setup, transcript/document ingestion commands, and memory privacy risks; published with profile isolation and secret-ingestion warnings.
6. **Agentmetry** (`blitzcrieg1/agentmetry`) — accepted as defensive/local AI-agent audit logging. Safety screened README, Apache-2.0 license, active non-archived repo, PyPI install path, public-alpha status, JSONL event trail, DLP/detection/SIEM forwarding scope, and audit-log sensitivity; published with private-log and scrub-before-sharing warnings.
7. **NexusMem** (`yaminbkk/NexusMem`) — accepted as local project memory for shell/git/docs context. Safety screened README, MIT license, active non-archived repo, npm/npx quickstart, local SQLite/no-cloud design, optional transcript ingestion, shell history indexing, and private-history risk; published with local-database and opt-in transcript warnings.

## Rejected / deferred

- **Tale** (`tale-project/tale`) — deferred. Relevant Hermes/agent orchestration project, but the beginner quickstart pipes a remote installer into shell, can install Docker, generates secrets, and orchestrates agents/connectors; needs deeper install/trust review before publication.
- **a2wave** (`LilithGames/a2wave`) — deferred. Useful enterprise agent orchestration, but README explicitly assumes trusted internal colleagues and says agents run CLIs with filesystem, shell, and injected credentials by design; too much governance/credential surface for a casual beginner card.
- **teamctl** (`Alireza29675/teamctl`) — deferred. Interesting YAML-based multi-agent session recipes, but current quickstart is remote script install and examples include autonomous job search/research/prototyping agents; needs deeper boundary and install review.
- **agent-assh** (`izzzzzi/agent-assh`) — deferred. SSH/tmux workflow helper may be legitimate for owned servers, but examples include root login and password environment variables; too sensitive for beginner publication without a dedicated least-privilege SSH framing.
- **Forge** (`moretea-labs/forge`) — deferred. Broad local/browser/desktop/service control surface for ChatGPT is potentially useful, but grants file writes, commands, browser actions, GitHub/Gmail/Calendar/App Store services, and recurring automation; needs deeper permission model review.
- **OmniReach** (`Daily-AC/omnireach`) — rejected for this catalog run. Login-walled social-platform search/read through a user browser session raises privacy, terms-of-service, and scraping ambiguity; not suitable for conservative beginner publication.
- **ESP-GRABER** (`MarauTech/ESP-GRABER`) — rejected. RF firmware includes reading/repeating/storing signals and an RF jammer feature explicitly marked illegal; offensive/illegal misuse risk is too high even with disclaimers.

## Notes

- Inspected 14 candidates across AI-agent orchestration, MCP/data context, coding-agent validation, commit tooling, memory, audit logging, SSH automation, browser/social scraping, and ESP32 RF tooling.
- No malware, phishing, credential theft, exploit-pack, botnet, ransomware, piracy, fraud, spam, harassment, or offensive-primary resource was published.
- No secrets, tokens, API keys, credentials, personal phone numbers, private config, or cron changes were added.
- No Hermes skills created this run; accepted items are resource cards only and overlap existing local skills for codebase mapping, agent memory, and security logging.
- Existing catalog debt observed but not introduced: duplicate resource names `Eneru`, `MemMap Explorer`, and `LILYGO Spark` pre-exist this run.

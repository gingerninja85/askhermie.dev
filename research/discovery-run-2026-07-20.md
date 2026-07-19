# Discovery run — 2026-07-20

## Accepted and published

1. **ClawMem** — local-first memory layer for AI agents, including Hermes, Claude Code, and OpenClaw. Safety-screened as benign local tooling; published with warnings that indexed notes, transcripts, filenames, prompts, and decisions can be sensitive.
2. **Equibles** — self-hosted public financial-data stack and MCP server for SEC filings, public market data, insider/congressional trades, and macro indicators. Safety-screened as research/data tooling; published with SEC fair-access, private `.env`, API-key/contact-email, and no-financial-advice warnings.
3. **fastCRW** — open-source crawler/scraper/search/markdown extraction API with MCP support. Safety-screened as web-data tooling; published with owned/public-docs-first, low-rate, site-policy, and personal-data warnings.
4. **Zudoku** — interactive API documentation/developer-portal framework for OpenAPI, Markdown, and MDX. Safety-screened as static/API docs tooling; published with schema, internal endpoint, auth-flow, and example-token leakage warnings.
5. **Znai** — living/user-guide documentation generator that can embed examples, API snippets, diagrams, charts, and slides from Markdown. Safety-screened as docs tooling; published with generated-output review warnings for snippets, screenshots, REST responses, CLI output, hostnames, and test data.

## Already present / inspected, not duplicated

- **Kinocut** — already in catalog; re-inspected as local/guardrailed video-editing MCP tooling, no duplicate added.
- **Eneru** — already in catalog; re-inspected as UPS monitoring/shutdown orchestration, no duplicate added.
- **NanoTDB** — already in catalog; re-inspected as Raspberry Pi/edge observability, no duplicate added.
- **ESPForge** — already in catalog; re-inspected as ESPHome visual builder, no duplicate added.
- **Kuvasz** — already in catalog; re-inspected as uptime/SSL/heartbeat monitoring, no duplicate added.
- **ServiceRadar** — already in catalog; re-inspected as owned-network monitoring/ITOM tooling, no duplicate added.

## Rejected / deferred

- **ProperDocs** — deferred. It is a legitimate MkDocs fork/static-site generator, but GitHub license metadata reports `NOASSERTION`; re-check licensing/project maturity before recommending to beginners.
- **maintenant** — deferred. Legitimate container monitoring, but it overlaps heavily with existing homelab monitoring entries and needs a tighter safety note around Docker/container discovery before publishing.
- **GumCP** — deferred. Useful Raspberry Pi control panel, but it exposes service start/stop, process killing, GPIO, command buttons, HTTP API, and SSH execution; too easy for beginners to expose a dangerous admin surface without a more constrained lab write-up.

## Candidate inspection count

Inspected 14 candidates total: ClawMem, Equibles, fastCRW, Zudoku, Znai, Kinocut, Eneru, NanoTDB, ESPForge, Kuvasz, ServiceRadar, ProperDocs, maintenant, and GumCP.

## Safety notes

- No malware, phishing, credential theft, ransomware, botnet, exploit-pack, piracy, fraud, spam, harassment, or offensive-primary tools were published.
- Every newly accepted card includes a concrete example use case and an explicit safety note.
- MCP/agent-memory/crawler/API-docs/living-docs resources are framed around disposable notes, local/scratch setups, owned or clearly public targets, private generated output review, least privilege, and manual review.
- No secrets, tokens, credentials, personal phone numbers, or private config were added. Placeholder `.env` wording is instructional only.

## Catalog debt

- Pre-existing duplicate resource names remain in the catalog: Eneru, MemMap Explorer, and LILYGO Spark. Newly introduced duplicates were removed before build.

## Skills

No local Hermes skills were created. The accepted tools are useful resources, but this run did not identify a safe, non-duplicative, repeatedly executable workflow that clearly justified a new skill over existing Hermes memory, MCP, web-scraping, observability, and docs-authoring skills.

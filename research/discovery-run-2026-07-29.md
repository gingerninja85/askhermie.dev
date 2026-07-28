# Discovery run — 2026-07-29

## Scope
Daily autonomous askhermie.dev discovery loop. Sources inspected: GitHub repo search, README files, repository metadata, recent open issues, install paths, and safety/privacy wording.

## Accepted and published

1. **GrepAI** — AI code intelligence
   - Repo: https://github.com/yoanbernabeu/grepai
   - Signals: MIT license, active repo, security policy enabled, README describes privacy-first local semantic search and MCP support.
   - Install path published: Homebrew plus local Ollama embedding model; avoided the raw remote install script path.
   - Safety note: indexes local source code; cache/index artifacts should stay private.

2. **Codanna** — AI code intelligence
   - Repo: https://github.com/bartolli/codanna
   - Signals: Apache-2.0 license, active repo, local-only code intelligence, clear CLI/MCP operational modes.
   - Install path published: Homebrew CLI path; avoided recommending curl/PowerShell pipe installers.
   - Safety note: indexes local repository contents; HTTP/S server should stay on trusted machines.

3. **Wigolo** — Web data crawler
   - Repo: https://github.com/KnockOutEZ/wigolo
   - Signals: active repo, security policy enabled, keyless local search/fetch/crawl path, loopback server requires token off-loopback per README.
   - Install path published: `npx wigolo init --no-warmup` and `npx wigolo doctor`.
   - Safety note: crawlers can touch private/authenticated URLs and rate-limited sites; keep server local and do not automate unauthorized targets.

4. **Peekaboo** — AI agent integrations
   - Repo: https://github.com/openclaw/Peekaboo
   - Signals: MIT license, active repo, security policy enabled, explicit macOS permission model for Screen Recording and Accessibility.
   - Install path published: Homebrew plus permission status and harmless screenshot command.
   - Safety note: screen capture and Accessibility permissions expose private windows and allow app control.

5. **Open Multi-Agent** — AI agent framework
   - Repo: https://github.com/open-multi-agent/open-multi-agent
   - Signals: MIT license, active repo, security policy enabled, README documents default-deny tools, checkpoints, budgets, local deterministic demo.
   - Install path published: `npm create oma-app@latest my-oma` with deterministic local demo guidance.
   - Safety note: multi-agent systems multiply side effects; keep tools default-deny and review persisted traces.

6. **Rust on ESP Book** — Embedded tooling map
   - Repo: https://github.com/esp-rs/book
   - Signals: Apache/MIT/CC-BY-SA licensing, active docs repo, benign educational ESP Rust book.
   - Install/start path published: mdBook local preview.
   - Safety note: verify chip targets and disconnect risky loads while learning.

7. **impl Rust for ESP32** — Embedded tooling map
   - Repo: https://github.com/ImplFerris/esp32-book
   - Signals: Apache/MIT/CC-BY-SA licensing, active beginner-focused ESP32 Rust projects, explicit project disclaimer.
   - Install/start path published: mdBook local preview.
   - Safety note: double-check wiring and voltage levels; keep high-power devices disconnected.

## Already present / inspected, not duplicated

- **Screenpipe** — already in catalog as `Screenpipe`.
- **Maintenant** — already in catalog as `Maintenant`.
- **PDF Reader MCP** — already in catalog as `PDF Reader MCP`.
- **Eneru** — already present, but catalog has pre-existing duplicate `Eneru` entries; not touched in this run.

## Rejected or deferred

- **Shinkai Local AI Agents** — deferred. Local AI/MCP angle is relevant, but README prominently markets crypto-native autonomous agents, DeFi portfolio management, and agents that can transact independently. Too easy for beginners to mis-scope around payments/keys.
- **Observal** — deferred. Useful AI component registry idea, but it records analytics/replays for skills, agents, MCPs, and sessions. Privacy/retention/secret-handling needs deeper review before recommending to beginners.
- **CodeRunner** — deferred. Local sandbox idea is relevant, but setup is macOS/Apple-Silicon specific and uses an install script after cloning. Needs deeper install-script review before publication.
- **open-multi-agent ecosystem examples mentioning security-analysis agents** — not published separately; only the core benign framework entry was added with default-deny/sandbox language.

## Candidate count

Inspected 14 candidates total: 7 published, 4 already present, 3 deferred.

## Notes

- No skills created or updated. The accepted tools are useful resources, but none justified a new local Hermes skill today without either duplicating existing codebase/MCP skills or requiring deeper hands-on validation.
- Existing catalog debt: `scripts/check-resource-names.py` reports pre-existing duplicate names for `Eneru`, `MemMap Explorer`, and `LILYGO Spark`; this run introduced no new duplicate names.

# askhermie.dev discovery run — 2026-10-03

## Accepted and published

- Renovate — accepted. Dependency-update automation; active repo, high adoption, clear docs. Safety note: requires repo access and may read private package metadata; use least-privilege and CI-gated merges.
- restic — accepted. Encrypted backup tool; mature, active, documented restore-first workflow. Safety note: lost repository password means lost backups; test restores before trusting it.
- WatchYourLAN — accepted. LAN device discovery for owned networks; README documents missing built-in auth and host networking. Safety note: only scan networks you own/administer and do not expose the unauthenticated UI.
- binwalk — accepted. Firmware analysis and extraction for owned or authorized images; active Rust v3 rewrite. Safety note: extracted firmware may contain credentials or proprietary code; do not publish dumps casually.
- Caddy — accepted. Modern web server/reverse proxy with automatic HTTPS; active, widely used. Safety note: reverse proxies can expose internal services; verify hostnames, auth, and firewall rules.
- AdGuard Home — accepted. Self-hosted DNS filtering for homelabs; active and well documented. Safety note: DNS mistakes can break a LAN and query logs are sensitive.
- Ruff — accepted. Fast Python linter/formatter from Astral; active and benign developer tooling. Safety note: auto-fix changes code; review diffs and run tests.
- Hadolint — accepted. Dockerfile linter with ShellCheck integration; active defensive/dev quality tool. Safety note: basic linting does not require registry credentials; review rule ignores carefully.
- Checkov — accepted. IaC/container static scanner for defensive misconfiguration checks. Safety note: scan results can reveal private infrastructure details; avoid public paste of private findings.

## Inspected but already present

- Eclipse Mosquitto — already present in the catalog; inspected current repo/readme and did not duplicate.
- mise — already present in the catalog; inspected current repo/readme and did not duplicate.
- Gitleaks — already present in the catalog; inspected current repo/readme and did not duplicate.

## Rejected / deferred

- None rejected for safety in this run. Candidates with existing cards were recorded as already present instead of duplicated.

## Candidate inspection evidence

Metadata and README heads were fetched directly from GitHub API/raw GitHub for 12 candidates: renovatebot/renovate, restic/restic, aceberg/WatchYourLAN, ReFirmLabs/binwalk, eclipse-mosquitto/mosquitto, caddyserver/caddy, AdguardTeam/AdGuardHome, astral-sh/ruff, jdx/mise, hadolint/hadolint, bridgecrewio/checkov, gitleaks/gitleaks.

## Skills

No local Hermes skills created or updated. The accepted tools are useful resources, but no new safe repeatable Hermes workflow was compelling enough to justify a skill today.

# Discovery run — 2026-08-29

## Accepted for publication

1. **Diun** (`crazy-max/diun`) — accepted as benign container update monitoring. Safety screened README, Docker/executable install surface, recent activity, issue list, and the difference between notify-only monitoring and automatic container updates. Published with registry-credential and notification-secret warnings.
2. **Task** (`go-task/task`) — accepted as benign build/task automation. Safety screened README, install path, recent activity, open issues, command-runner behavior, and arbitrary-command risk from Taskfiles. Published with inspect-before-run warning.
3. **Lazydocker** (`jesseduffield/lazydocker`) — accepted as benign Docker TUI for owned hosts. Safety screened README, release/install patterns, recent activity, issue list including shared-host argument-injection concern, and Docker control risks. Published with owned-host and production-caution warnings.
4. **Devbox** (`jetify-com/devbox`) — accepted as benign reproducible development environment tooling. Safety screened README, Nix-backed scope, recent activity, install options, and environment-variable risks. Published with project-config and no-private-env warning.
5. **act** (`nektos/act`) — accepted as benign local GitHub Actions runner when limited to trusted repositories. Safety screened README, Docker execution model, recent activity, open issues, and workflow/secret exposure risks. Published with workflow-review and no-untrusted-repo warning.
6. **Apprise** (`caronc/apprise`) — accepted as benign notification CLI/library. Safety screened README, pip/PyPI install surface, recent activity, issue list, broad provider support, and token-heavy notification URL configuration. Published with private-config and webhook-token warnings.

## Rejected / deferred / already present

- **Statping-ng** (`statping-ng/statping-ng`) — deferred. It is a benign status-page/monitoring tool, but the open issue list includes a security issue about custom OAuth login granting admin access to accepted IdP users. Needs deeper security-status review before beginner publication.
- **Watchtower** (`containrrr/watchtower`) — rejected/deferred. README states the project is no longer maintained, the GitHub repo is archived, and it performs automatic Docker container updates via Docker socket access. Diun is the safer notify-only alternative for this run.
- **just** (`casey/just`) — already present / inspected. Active benign project command runner; not duplicated.
- **Beszel** (`henrygd/beszel`) — already present / inspected. Active benign homelab monitoring resource; not duplicated.
- **Dozzle** (`amir20/dozzle`) — already present / inspected. Active benign Docker log viewer; not duplicated.
- **Uptime Kuma** (`louislam/uptime-kuma`) — already present / inspected. Active benign uptime monitoring resource; not duplicated.
- **Homepage** (`gethomepage/homepage`) — already present / inspected. Active benign homelab start page; not duplicated.
- **mise** (`jdx/mise`) — already present / inspected. Active benign dev-tool/version manager; not duplicated.
- **Dagger** (`dagger/dagger`) — already present / inspected. Active benign automation engine; not duplicated.

## Notes

- Inspected 15 candidates across homelab monitoring, Docker operations, container update monitoring, command runners, development environment management, local CI execution, and notification automation.
- Existing catalog checked by exact `name:` fields inside the `const resources: Resource[]` block before adding new entries.
- No malware, phishing, credential theft, exploit-pack, botnet, ransomware, piracy, fraud, spam, harassment, or offensive-primary resource was published.
- No secrets, tokens, API keys, credentials, personal phone numbers, private config, or cron changes were added.
- No Hermes skills created this run. Existing devops/software-development/productivity skills already cover the reusable workflows well enough; this run added public resource cards only.

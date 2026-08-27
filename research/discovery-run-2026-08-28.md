# Discovery run — 2026-08-28

## Accepted for publication

1. **MCP Python SDK** (`modelcontextprotocol/python-sdk`) — accepted as benign official MCP server/client SDK. Safety screened README, install path (`uv add "mcp[cli]"` / pip option), recent activity, license, scope of tools/resources/prompts/transports, and MCP permission risks. Published with read-only-first, environment-secret, and capability-review warnings.
2. **MCP TypeScript SDK** (`modelcontextprotocol/typescript-sdk`) — accepted as benign official TypeScript MCP SDK. Safety screened README, npm package install path, recent activity, intended server/client development use, and agent-facing permission risks. Published with narrow-tool and logging/scope warnings.
3. **Grafana k6** (`grafana/k6`) — accepted as benign load-testing/developer reliability tooling when limited to owned systems. Safety screened README, Docker-safe version check, mature project signals, scriptable HTTP traffic behavior, and misuse potential. Published with explicit owned-system/low-rate warning.
4. **cAdvisor** (`google/cadvisor`) — accepted as benign container metrics and observability tooling. Safety screened README, Docker quickstart, read-only host mounts, project age/activity, and host-inventory exposure. Published with localhost/private-network warning.
5. **Redpanda Console** (`redpanda-data/console`) — accepted as benign Kafka/Redpanda inspection UI. Safety screened README, Docker quickstart, cluster/message visibility, credential examples, and data-exposure risks. Published with read-only credential and private-console warnings.
6. **Material for MkDocs** (`squidfunk/mkdocs-material`) — accepted as benign documentation/static-site tooling. Safety screened README, pipx/Docker install options, active project signals, docs publishing scope, and risk of leaking internal runbooks. Published with private-doc review warning.
7. **Thonny** (`thonny/thonny`) — accepted as benign beginner Python/MicroPython IDE. Safety screened README, recent activity, beginner education scope, and microcontroller flashing/control risks. Published with owned-board and high-current hardware warning.
8. **Renode** (`renode/renode`) — accepted as benign embedded simulation/virtual development framework. Safety screened README, official download/install guidance, simulation purpose, firmware handling scope, and IP/privacy concerns. Published with allowed-firmware and private-lab warning.
9. **Mermaid** (`mermaid-js/mermaid`) — accepted as benign text-diagramming/docs tooling. Safety screened README, npm package, project activity/reputation, diagramming scope, and architecture-disclosure risk. Published with sanitize-before-sharing warning.
10. **ansible-lint** (`ansible/ansible-lint`) — accepted as benign static checker for automation code. Safety screened README, pipx/GitHub Action context, recent activity, lint-versus-apply distinction, and secret/vault risks. Published with test-before-applying and no-secrets-in-repo warning.

## Rejected / deferred / already present

- **MkDocs** (`mkdocs/mkdocs`) — deferred / not duplicated by intent. Material for MkDocs was the more beginner-actionable card for polished docs; core MkDocs can be covered later if a separate plain-docs workflow is needed.
- **Adafruit CircuitPython** (`adafruit/circuitpython`) — deferred. Good fit, but existing catalog already has MicroPython, Thonny, Snakie, PlatformIO, TinyGo, ESP-IDF, and maker-learning entries; needs a narrower board-specific beginner card to avoid generic duplication.
- **Wokwi Elements** (`wokwi/wokwi-elements`) — deferred. Benign electronics web components, but it is more a UI component library than a direct beginner lab/tool for the current catalog.
- **BunkerWeb** (`bunkerity/bunkerweb`) — deferred. Defensive WAF project, but WAF deployment changes production traffic and security posture; needs deeper deployment-boundary review before beginner publication.
- **Ansible Rulebook** (`ansible/ansible-rulebook`) — deferred. Benign event-driven automation, but it can trigger real playbooks from events; needs a safer lab-only recipe before publication.

## Notes

- Inspected 15 candidates across MCP SDKs, load testing, container observability, event-streaming UI, documentation tooling, Python/MicroPython education, embedded simulation, diagramming, and automation linting.
- Existing catalog checked by exact `name:` fields inside the `const resources: Resource[]` block before adding new entries.
- No malware, phishing, credential theft, exploit-pack, botnet, ransomware, piracy, fraud, spam, harassment, or offensive-primary resource was published.
- No secrets, tokens, API keys, credentials, personal phone numbers, private config, or cron changes were added.
- No Hermes skills created this run. Existing MCP, observability, documentation, hardware, and automation skills already cover the reusable workflows; this run added public resource cards only.

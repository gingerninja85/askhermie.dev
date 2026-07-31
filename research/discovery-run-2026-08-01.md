# Discovery run — 2026-08-01

## Accepted for publication

1. **Nimbalyst** — AI coding-agent workspace. Safety screened as local/open-source developer tooling; publish with warning that coding-agent UIs can expose source, prompts, terminals, git state, and credentials. First move is a disposable repo plus official release page, not automatic install.
2. **Google Agent Development Kit** — Python agent framework. Safety screened as benign agent development tooling from Google with PyPI install. Publish with sandbox-data and private API-key warnings because agents can call tools, store sessions, and send prompts to providers.
3. **Trigger.dev** — durable TypeScript workflow platform. Safety screened as benign workflow/agent infrastructure. Publish with idempotency/sandbox credential warning because retries and schedules can repeat side effects.

## Already present / inspected, not duplicated

- **Orca** — already in catalog as `Orca`; parallel coding-agent workspace with diff-review safety note.
- **Jaeger** — already in catalog as `Jaeger`; distributed tracing lab.
- **Netdata** — already in catalog as `Netdata`; homelab observability.
- **Vector** — already in catalog as `Vector`; log/metrics pipeline.
- **Dashy** — already in catalog as `Dashy`; homelab dashboard.
- **Homelable** — already in catalog as `Homelable`; homelab infrastructure visualizer.
- **Pulse** — already in catalog as `Pulse`; Proxmox/Docker/Kubernetes monitoring.
- **Velxio** — already in catalog as `Velxio`; browser board emulator.
- **FACT** — already in catalog as `FACT`; firmware analysis platform.
- **OWASP Firmware Security Testing Methodology** — already in catalog as `OWASP Firmware Security Testing Methodology`; defensive firmware methodology.
- **Sveltia CMS** — already in catalog as `Sveltia CMS`; static-site CMS.
- **OpenTelemetry Collector** — already in catalog as `OpenTelemetry Collector`; observability collector.

## Rejected / deferred

- **ESP32Marauder** (`justcallmekoko/ESP32Marauder`) — rejected. README markets it as a Wi-Fi/Bluetooth offensive toolkit for ESP32; fails the safety gate for beginner publication.
- **HaleHound-CYD** (`JesseCHale/HaleHound-CYD`) — rejected. README explicitly says multi-protocol offensive security toolkit with attack modules; fails the safety gate.
- **ProxMenux** (`MacRimi/ProxMenux`) — deferred. Useful homelab Proxmox project, but first-party install path shown in README starts as remote shell execution on a Proxmox host. Needs safer manual/package path review before recommending to beginners.
- **DockSTARTer** (`GhostWriters/DockSTARTer`) — deferred. Useful Docker starter, but quickstart relies on `bash -c "$(curl ...)"` and can make broad Docker/system changes. Needs safer install framing before publication.
- **LLM Gateway** (`theopenco/llmgateway`) — deferred. Potentially useful AI gateway, but examples and operation revolve around provider API keys and multi-port self-hosting; defer until secret-handling and beginner-safe local setup are reviewed more deeply.
- **GoClaw** (`nextlevelbuilder/goclaw`) — deferred. Multi-tenant AI gateway/platform with provider keys and production surface area; defer until auth, secret, and exposure model are clearer.
- **AWS sample Strands Agent with AgentCore** — deferred. Legitimate AWS sample, but cloud account, Bedrock, browser automation, Terraform, and agent tools make it too credential/side-effect-heavy for a beginner card without a more constrained walkthrough.
- **Datadog Agent** — deferred. Legitimate observability agent, but commercial account/install flow and host telemetry exposure need careful privacy framing; existing open/self-hosted observability entries cover the beginner need better.
- **Meshtastic Android** — deferred. Legitimate mesh-radio app and already adjacent to existing Meshtastic firmware card, but current candidate was the Android client rather than a beginner hardware workflow; no duplicate card added.
- **EMBA** (`e-m-b-a/emba`) — deferred. Defensive firmware analyzer, but advanced static/dynamic analysis can surface hard-coded passwords and proprietary firmware content. Existing catalog already has FACT/EMBArk/binwalk/FSTM coverage; revisit only with tight owned-firmware language.

## Notes

- Inspected more than 10 candidates via GitHub API searches across AI agents, MCP, observability, homelab, ESP32, firmware analysis, Raspberry Pi, static-site tooling, and OpenTelemetry.
- No secrets, credentials, tokens, private phone numbers, or private config were added.
- No Hermes skills created this run; the accepted tools are useful resources, but none justified a new local skill without duplicating existing agent/workflow skills.

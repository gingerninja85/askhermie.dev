# Discovery run — 2026-07-15 UTC

## Scope

Daily autonomous askhermie.dev discovery loop: Hermes/AI-agent tooling, mobile automation, systems engineering, observability, homelab, static-site/documentation tooling, IoT/hardware, firmware analysis, and beginner-friendly labs.

## Candidates inspected

| Candidate | URL | Decision | Reason / safety screen |
|---|---|---|---|
| agent-device | https://github.com/callstack/agent-device | Accepted | Active MIT repo, recent commits, clear device-automation use case for AI agents, npm-based start path. Sensitive because it can collect screenshots, logs, traces, audio-level and network evidence, so the published card frames simulator/test-device use and private-data caution. |
| ServiceRadar | https://github.com/carverauto/serviceradar | Accepted | Active Apache-2.0 network/service monitoring platform with OpenSSF/FOSSA signals and edge/homelab relevance. Published with clone/read-first command and warnings about topology, hostnames, metrics, dashboards, and authorized networks only. |
| Zensical | https://github.com/zensical/zensical | Already present / inspected | Active MIT Markdown documentation static-site generator from the Material for MkDocs team. Already present in the catalog, so no duplicate card was added. |
| Eleventy | https://github.com/11ty/eleventy | Accepted | Established MIT static-site generator with active maintenance and simple npm workflow. Published with local starter command and build-time plugin/content secret-review warning. |
| DocFX | https://github.com/dotnet/docfx | Accepted | Active MIT .NET Foundation documentation generator for API and Markdown docs. Published with dotnet tool command and warnings about generated API docs exposing internals. |
| wshobson/agents | https://github.com/wshobson/agents | Deferred | Popular MIT multi-harness agentic plugin/skill marketplace, but broad catalogs can contain unsafe or over-permissive workflows. Needs deeper per-plugin safety sampling before beginner recommendation. |
| claude-code-plugins-plus-skills | https://github.com/jeremylongshore/claude-code-plugins-plus-skills | Deferred | Large Claude Code plugin/skill marketplace with validators, but too broad to safely endorse from README-level inspection alone. Needs sampling of install scripts, allowed tools, and risky categories first. |
| chvvkumar/Monitoring | https://github.com/chvvkumar/Monitoring | Rejected | Homelab monitoring examples are useful, but repo metadata showed stale last push from 2022. Existing catalog already has fresher monitoring options. |
| Kuvasz | https://github.com/kuvasz-uptime/kuvasz | Already present / inspected | Active AGPL-3.0 uptime/SSL monitoring service with Home Assistant/Prometheus/OpenTelemetry integrations. Already present in the catalog, so no duplicate card was added. |
| Eneru | https://github.com/m4r1k/Eneru | Already present / inspected | Active MIT UPS monitoring/shutdown-orchestration tool. Already present in the catalog, so no duplicate card was added. |

## Published changes

Added 4 new resource cards to `src/pages/resources.astro`:

- agent-device
- ServiceRadar
- Eleventy
- DocFX

Updated the Hermes + AI agents group category list so `agent-device` appears in the reader-intent navigation. The other accepted categories already mapped to existing groups.

## Skill changes

No local Hermes skills created or updated. The accepted resources are useful public catalog entries, but none warranted a new non-duplicative local Hermes skill without hands-on workflow verification.

## Verification notes

Final cron report records Astro build, secret scan, commit, push, remote SHA, and live-site smoke check results.

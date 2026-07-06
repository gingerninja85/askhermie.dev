# Discovery run — 2026-07-07

## Scope

Daily askhermie.dev discovery loop: Hermes/AI-agent tooling, automation, systems engineering, observability, homelab, static-site tooling, IoT/hardware, ESP32/Raspberry Pi, firmware analysis, and beginner-friendly labs.

## Candidates inspected

| Candidate | URL | Decision | Reason / safety screen |
|---|---|---|---|
| Agents Shipgate | https://github.com/ThreeMoonsLab/agents-shipgate | Accepted | Active Apache-2.0 Python CLI/GitHub Action for deterministic review of AI-generated agent capability changes. README quickstart uses `pipx`, no malware/phishing/offensive framing found. Safety note warns that repo scan reports can expose project metadata. |
| Mnemo Cortex | https://github.com/GuyMannDude/mnemo-cortex | Accepted | Active MIT local-first AI-agent memory service. README discusses optional API keys and agent session capture, so the card frames first use around fake/toy data and warns that memory stores prompts, tool output, files, and accidental secrets. |
| Pipelex | https://github.com/Pipelex/pipelex | Accepted | Active MIT declarative AI workflow language/runtime. Useful for explicit, typed workflows rather than ad-hoc glue. README mentions provider integrations, API keys, and telemetry; card warns to use test data, review telemetry, and never commit keys. |
| Eneru | https://github.com/m4r1k/Eneru | Accepted | Active MIT UPS monitoring/shutdown orchestration for NUT with PyPI and package-manager install options. Benign homelab reliability use. Card warns that shutdown automation can interrupt real systems and that notification tokens must not be published. |
| MemMap Explorer | https://github.com/Zepp-Hanzj/MemMapExplorer | Accepted | Active GPL-2.0 Windows GUI for MAP/ELF memory layout visualization. Benign embedded/firmware build analysis use. Card warns MAP files can expose proprietary symbols, paths, and build internals. |
| Rspress | https://github.com/web-infra-dev/rspress | Accepted | Active MIT static documentation-site generator. Benign publishing/docs workflow with npm starter command. Card warns docs often leak internal URLs, screenshots, config, and tokens. |
| DOCSight | https://github.com/itsDNNS/docsight | Already published | Re-inspected because it appeared in today’s search results. Already exists in the catalog from 2026-07-06; no duplicate added. |
| Marmite | https://github.com/rochacbruno/marmite | Already published | Re-inspected because it appeared in today’s search results. Already exists in the catalog; no duplicate added. |
| FACT | https://github.com/fkie-cad/FACT_core | Already published | Re-inspected firmware-analysis candidate. Already exists in the catalog; no duplicate added. |
| LLM Gateway | https://github.com/theopenco/llmgateway | Deferred | Potentially useful LLM routing/observability gateway, but GitHub license metadata is `NOASSERTION` and open issues include provider/key configuration concerns. Defer until license and secret-handling posture are clearer. |
| OpenSRE | https://github.com/Tracer-Cloud/opensre | Deferred | Active Apache-2.0 AI SRE toolkit, but it connects to production observability/incident systems and provider keys. Needs deeper review of least-privilege setup and secret handling before beginner publication. |
| Wairz | https://github.com/digitalandrew/wairz | Deferred | Firmware analysis platform with MCP/AI features; README branding emphasizes finding secrets in firmware and requires deeper review. Dual-use and secret-handling risk are too high for a beginner card today. |
| MBPTL | https://github.com/bayufedra/MBPTL | Rejected | Beginner penetration-testing lab, but README explicitly includes offensive/security exploit workflows and malware-related topics. Not appropriate for this conservative catalog run. |
| secator | https://github.com/freelabz/secator | Rejected | Search result describes it as a pentester’s swiss knife. Offensive-primary framing; not published. |
| OpenSteer | https://github.com/steerlabs/opensteer | Deferred | Browser automation framework for agents. Useful, but browser control can interact with logged-in accounts and prior review found remote install-script concerns. Deferred until a safer sandbox-first framing is justified. |

## Published changes

Added 6 resource cards to `src/pages/resources.astro`:

- Agents Shipgate
- Mnemo Cortex
- Pipelex
- Eneru
- MemMap Explorer
- Rspress

Updated resource grouping so new AI-agent merge gate, AI-agent memory, AI workflow language, UPS orchestration, memory-map analysis, and Rsbuild docs-generator categories render under existing broad groups.

## Skill changes

No local Hermes skills created or updated. The accepted resources are useful catalog entries, but none introduced a clearly non-duplicative, benign, repeatable Hermes workflow worth preserving as a skill today.

## Verification notes

Final cron report records Astro check/build, secret scan, commit, push, remote SHA, and live-site smoke check results.

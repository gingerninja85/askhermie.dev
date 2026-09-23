# Discovery run — 2026-09-24

## Scope
Daily autonomous askhermie.dev discovery loop. Inspected GitHub/web candidates for Hermes/AI-agent tooling, observability, homelab, embedded systems, IoT, firmware, static-site tooling, and beginner-friendly labs.

## Accepted and published

1. **Malloy Publisher** — `malloydata/publisher`
   - Metadata checked via GitHub API: MIT, recently pushed, README fetched directly.
   - Fit: agent-friendly analytics engine serving Malloy models over MCP/REST.
   - Safety note: analytics services expose schemas, credentials, business metrics, and row-level data; card starts with sample data and read-only credentials.

2. **Tabularis** — `TabularisDB/tabularis`
   - Metadata checked via GitHub API: Apache-2.0, recently pushed, README fetched directly.
   - Fit: SQL desktop workspace with notebooks, visual explain, and built-in MCP server.
   - Safety note: database/MCP access can expose schemas and data; card requires disposable/local DB first and least-privilege connections.

3. **Godot-MCP** — `IvanMurzak/Godot-MCP`
   - Metadata checked via GitHub API: Apache-2.0, recently pushed, README fetched directly.
   - Fit: MCP bridge for Godot 4 C# editor workflows.
   - Safety note: editor bridges can read/write project files; card starts with a throwaway project and diff review.

4. **F Prime** — `nasa/fprime`
   - Metadata checked via GitHub API: Apache-2.0, recently pushed, README fetched directly.
   - Fit: NASA/JPL embedded/flight software framework useful for serious embedded learning.
   - Safety note: hardware-adjacent generated code; card starts with tutorials/simulators only.

5. **Fugleramme** — `arnegiacomo/fugleramme`
   - Metadata checked via GitHub API: MIT, recently pushed, README fetched directly.
   - Fit: Raspberry Pi local-AI bird audio/e-ink display project.
   - Safety note: microphones can capture people/private spaces; card emphasizes local processing, consent, and not publishing raw recordings/location data.

6. **StaticSearch** — `craigbuckler/staticsearch`
   - Metadata checked via GitHub API: MIT, recently pushed, README fetched directly.
   - Fit: small static-site search tool for docs and notes.
   - Safety note: generated search indexes can leak private paths, drafts, emails, hostnames, or secrets; card requires inspecting output before deploy.

7. **CrossPoint Reader** — `crosspoint-reader/crosspoint-reader`
   - Metadata checked via GitHub API: MIT, recently pushed, README fetched directly.
   - Fit: open-source ESP32/e-ink reader firmware for owned supported devices.
   - Safety note: flashing can erase or brick devices and may expose reading data; card restricts use to owned hardware and exact-board verification.

8. **Octelium** — `octelium/octelium`
   - Metadata checked via GitHub API: AGPL-3.0 metadata, README fetched directly.
   - Fit: self-hosted zero-trust homelab/private-access platform.
   - Safety note: access gateways can expose or block sensitive services if misconfigured; card starts with lab/demo and strong auth.

9. **NornicDB** — `orneryd/NornicDB`
   - Metadata checked via GitHub API: MIT, recently pushed, README fetched directly.
   - Fit: local graph/vector/temporal database with MCP server for agent memory/RAG labs.
   - Safety note: graph/vector stores can contain prompts, documents, embeddings, and relationship maps; card starts with fake data and local-only ports.

## Already present / inspected, not duplicated

- **AOE Technology Radar** — existing catalog card found; not duplicated.
- **Langfuse** — existing catalog card found; not duplicated.
- **OpenTelemetry Collector** — existing catalog card found; not duplicated.
- **FastLED** — existing catalog card found; not duplicated.
- **Velxio** — existing catalog card found; not duplicated.
- **EMBA** — existing catalog card found; not duplicated.
- **FACT** — existing catalog card found; not duplicated.
- **Pyrrha** — existing catalog card found; not duplicated.
- **ServiceRadar** — existing catalog card found; not duplicated.
- **Pulse** — existing catalog card found; not duplicated.
- **Beszel** — existing catalog card found; not duplicated.
- **astro-pagefind / Pagefind** — existing Pagefind/Astro entries found; not duplicated.

## Rejected or deferred

- **SoftRF** — deferred. General-aviation proximity-awareness radio project is legitimate but operationally sensitive; unsafe to recommend casually without deeper radio/regulatory framing.
- **AgentSys** — deferred. Broad multi-agent plugin/runtime system with many plugins and skills; needs deeper permission/side-effect review before beginner recommendation.
- **aidevops** — deferred. Large opinionated automation framework with many agents/scripts and DevOps side effects; needs deeper review before publishing.
- **Local Operator** — deferred. Local multi-agent hub with background agents and shared subscriptions; potentially useful but needs deeper privacy, credentials, and side-effect review.
- **Firmware Analysis Toolkit** — deferred. Firmware security research platform is dual-use and heavier than today’s safety budget; not published.
- **awesome-connected-things-sec** — deferred. Broad dual-use awesome-list; skill guidance says prefer one clearly safe item over publishing broad security aggregators.

## Safety checks

- Accepted cards include concrete example use cases and explicit safety notes.
- No credentials, tokens, API keys, phone numbers, or private config included.
- Install/start commands avoid piping remote scripts into a shell.
- Existing resource names were parsed from the `const resources: Resource[]` block before insertion; already-present candidates were recorded here instead of duplicated.
- Categories for new cards reuse existing `groupMeta.categories` entries.

## Skills

No local Hermes skills created or updated. The accepted resources are useful to recommend, but none needed a new repeatable Hermes procedure today.

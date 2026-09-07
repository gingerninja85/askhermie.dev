# Discovery run 2026-09-08

## Scope
Daily autonomous askhermie.dev resource discovery. Buckets searched: AI-agent tooling, MCP bridges, self-hosted knowledge/RSS/status tools, homelab monitoring, documentation/static-site tooling, embedded development, Raspberry Pi dashboards, and beginner hardware/circuit design.

## Candidates inspected

1. `henrygd/beszel`
2. `karakeep-app/karakeep`
3. `FreshRSS/FreshRSS`
4. `openobserve/openobserve`
5. `glanceapp/glance`
6. `amir20/dozzle`
7. `JasonNuttall/PiPortal`
8. `gethomepage/homepage`
9. `louislam/uptime-kuma`
10. `rajnandan1/kener`
11. `netdata/netdata`
12. `bluewave-labs/Checkmate`
13. `getsentry/sentry`
14. `grafana/loki`
15. `prometheus/prometheus`
16. `facebook/docusaurus`
17. `withastro/starlight`
18. `squidfunk/mkdocs-material`
19. `freeCodeCamp/devdocs`
20. `obot-platform/obot`
21. `docker/cagent`
22. `open-webui/mcpo`
23. `esphome/esphome`
24. `platformio/platformio-core`
25. `wokwi/wokwi-features`
26. `ReFirmLabs/binwalk`
27. `fkie-cad/FACT_core`
28. `fritzing/fritzing-app`
29. `node-red/node-red`

Evidence sources: web search result context, GitHub repository metadata via the GitHub API, README install/safety snippets via the GitHub API, and exact duplicate-name parsing from the `const resources: Resource[] = [...]` block.

## Accepted and published

1. **Karakeep** — `https://github.com/karakeep-app/karakeep`
   - Category: Self-hosted knowledge.
   - Evidence inspected: active non-archived repo, AGPL-3.0 license, ~28k stars during inspection, pushed 2026-08-31. README links official Docker installation docs.
   - Safety note: Published as a private bookmark/note archive. Card warns clipped content can reveal private projects, internal URLs, and account names; AI tagging should be reviewed before sending content to providers.

2. **FreshRSS** — `https://github.com/FreshRSS/FreshRSS`
   - Category: Self-hosted RSS.
   - Evidence inspected: active non-archived repo, AGPL-3.0 license, ~15k stars during inspection, pushed 2026-09-06. README points to administrator docs and Docker/manual install options.
   - Safety note: Published as a benign feed reader. Card warns not to expose admin accounts, private feeds, or authenticated feed URLs.

3. **Kener** — `https://github.com/rajnandan1/kener`
   - Category: Uptime history.
   - Evidence inspected: active non-archived repo, MIT license, ~5k stars during inspection, pushed 2026-09-06. README recommends Docker Compose and explicitly tells users to set `KENER_SECRET_KEY` and `ORIGIN`.
   - Safety note: Published with a strong-secret reminder and no secret value. Card warns public status pages reveal service names and downtime patterns.

4. **Checkmate** — `https://github.com/bluewave-labs/Checkmate`
   - Category: Uptime monitoring.
   - Evidence inspected: active non-archived repo, AGPL-3.0 license, ~10k stars during inspection, pushed 2026-09-07. README describes self-hosted uptime/hardware/incident monitoring and a Docker Compose quick start.
   - Safety note: Published for owned systems only. Card warns dashboard data can expose hostnames, ports, incidents, and internal service structure.

5. **Docusaurus** — `https://github.com/facebook/docusaurus`
   - Category: Documentation site generator.
   - Evidence inspected: active non-archived repo, MIT license, ~66k stars during inspection, pushed 2026-09-07. README provides `npm init docusaurus@latest` installation.
   - Safety note: Published as documentation tooling. Card warns generated docs can leak internal URLs, screenshots, or config examples.

6. **DevDocs** — `https://github.com/freeCodeCamp/devdocs`
   - Category: Developer utilities.
   - Evidence inspected: active non-archived repo, MPL-2.0 license, ~39k stars during inspection, pushed 2026-09-07. README provides a Docker quick start for local hosting.
   - Safety note: Published as local/offline reference tooling. Card recommends official images and private/LAN-only exposure unless intentionally public.

7. **Docker cagent** — `https://github.com/docker/cagent`
   - Category: AI agent framework.
   - Evidence inspected: active non-archived repo, Apache-2.0 license, ~3k stars during inspection, pushed 2026-09-07. README describes Docker Engineering's CLI plugin for YAML-described agents with tools and MCP servers.
   - Safety note: Published with sandbox-first framing. Card warns agent tools can read files, call services, and use credentials.

8. **MCPO** — `https://github.com/open-webui/mcpo`
   - Category: MCP bridge.
   - Evidence inspected: active non-archived repo, MIT license, ~4k stars during inspection, pushed 2026-05-17. README provides `uvx mcpo` and `pip install mcpo` quick usage.
   - Safety note: Published as a local MCP-to-OpenAPI bridge. Card uses a placeholder API key and warns not to expose the proxy publicly without authentication and network controls.

9. **Fritzing** — `https://github.com/fritzing/fritzing-app`
    - Category: Circuit design.
    - Evidence inspected: active non-archived repo, ~4.8k stars during inspection, pushed 2026-08-12. GitHub license metadata is `NOASSERTION`, but the project is a long-running official desktop circuit-design app and the card links official releases rather than build-from-source instructions.
    - Safety note: Published as beginner circuit documentation. Card warns that diagrams are not electrical safety reviews.

## Already present / inspected, not duplicated

- **Beszel** — already in catalog. Active MIT lightweight server monitoring.
- **OpenObserve** — already in catalog. Active observability platform; existing card covers telemetry sensitivity.
- **Glance** — already in catalog. Active self-hosted feed/dashboard tool.
- **Dozzle** — already in catalog. Active Docker log viewer; existing card covers log sensitivity.
- **Homepage** — already in catalog. Active homelab start page.
- **Uptime Kuma** — already in catalog. Active uptime monitoring.
- **Netdata** — already in catalog. Active infrastructure monitoring.
- **Astro Starlight** — already in catalog as Starlight.
- **ESPHome** — already in catalog.
- **PlatformIO Core** — already in catalog. Active Apache-2.0 embedded CLI; existing card covers owned-board flashing safety.
- **Binwalk** — already in catalog.
- **FACT Core** — already in catalog as FACT.
- **Node-RED** — already in catalog.

## Rejected / deferred

- **PiPortal** — `https://github.com/JasonNuttall/PiPortal`
  - Reason: Deferred, not unsafe. Relevant Raspberry Pi homelab dashboard, but only 1 star, no detected license, and includes Docker container-management surfaces; needs maturity and license clarity before beginner publication.

- **Wokwi feature tracker** — `https://github.com/wokwi/wokwi-features`
  - Reason: Deferred, not unsafe. Wokwi itself is useful for embedded simulation, but this repository is an issues/features tracker with no license and is not the canonical product/documentation source.

- **Sentry self-hosted source repo** — `https://github.com/getsentry/sentry`
  - Reason: Deferred, not unsafe. Strong observability product, but license metadata is `NOASSERTION` and the self-hosted deployment footprint is heavy for a quick beginner card.

- **Loki** — `https://github.com/grafana/loki`
  - Reason: Deferred, not unsafe. Useful log aggregation, but askhermie.dev already has several observability/log resources and Loki deserves a logging-stack batch with Grafana/Prometheus context.

- **Prometheus** — `https://github.com/prometheus/prometheus`
  - Reason: Deferred, not unsafe. Foundational monitoring system, but deferred to a coherent metrics-stack batch rather than a one-off card.

- **Obot** — `https://github.com/obot-platform/obot`
  - Reason: Deferred, not unsafe. Relevant AI governance platform, but credential/tool governance surface is broad and needs a deeper least-privilege review before recommending to beginners.

## Skill decision
No Hermes skills created or updated. The accepted resources are useful catalog entries, but none introduced a distinct, safe, reusable Hermes workflow beyond existing MCP, observability, homelab, documentation, and embedded-development skills.

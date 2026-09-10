# Discovery run 2026-09-11

## Inspected candidates

### Accepted and published

1. mcp-debugger — https://github.com/debugmcp/mcp-debugger
   - Safety screen: MIT license, active repo, CI/OpenSSF badges, npm/Docker install paths, stated secret redaction on by default. Benign debugging use, but can read runtime state. Published with a debugger safety note.
2. ESP Web Tools — https://github.com/esphome/esp-web-tools
   - Safety screen: Apache-2.0, maintained by ESPHome, browser flashing workflow, no credential collection. Published with firmware-overwrite and hardware-load safety note.
3. homelab-agent — https://github.com/TadMSTR/homelab-agent
   - Safety screen: MIT, active, sanitized reference architecture for scoped agents and homelab services. Complex/unattended-agent risk, but not offensive-primary. Published as advanced reading with least-privilege/private-lab warning.
4. static-sitemap-cli — https://github.com/zerodevx/static-sitemap-cli
   - Safety screen: ISC license, simple local static-site sitemap generator, active enough, safe npm/npx path. Published with public-URL leak warning.
5. Pi Dashboard — https://github.com/emphyri0/pi_dashboard
   - Safety screen: MIT, simple local psutil/curses system dashboard, no network service or credentials. Low reputation but low-risk local code; published with host/process-info screenshot warning.

### Already present / inspected

6. OpenTelemetry MCP Server — https://github.com/traceloop/opentelemetry-mcp-server
   - Already in catalog. Safety screen: Apache-2.0, trace-querying MCP server; telemetry can contain sensitive prompts and traces. No duplicate added.
7. Homelable — https://github.com/Pouzor/homelable
   - Already in catalog. Safety screen: MIT, homelab visualization/scanning and monitoring for owned networks; network scanning needs owner-only warning. No duplicate added.

### Rejected or deferred

8. Shinzo — https://github.com/shinzo-labs/shinzo
   - Deferred: observability topic is relevant, but GitHub API reports NOASSERTION license plus many open issues and last push in February 2026. Not enough confidence for a beginner recommendation today.
9. Awesome Harness Engineering — https://github.com/ai-boost/awesome-harness-engineering
   - Deferred: useful-looking mega-list, but too broad to safety-screen item-by-item in this run and may point readers toward tools with different risk profiles.
10. HomeMaster — https://github.com/isystemsautomation/homemaster-dev
   - Deferred: local-first ESPHome hardware is relevant, but DIN-rail automation can involve mains wiring and physical safety; better to inspect docs/hardware boundaries before recommending to beginners.
11. Visual Sitemap — https://github.com/aklump/visual_sitemap
   - Deferred: benign idea, but repo appears old and license is unclear/NOASSERTION from GitHub API.
12. MCP Gateway Registry — https://github.com/agentic-community/mcp-gateway-registry
   - Deferred: relevant enterprise MCP governance tool, but large OAuth/registry/gateway surface and many issues require deeper review before beginner-facing publication.

## Notes

- Existing duplicate resource-name debt observed before this run: Eneru, MemMap Explorer, LILYGO Spark. No new duplicates intentionally introduced.
- No local Hermes skills were created in this run; mcp-debugger may merit a future skill after a hands-on sandbox verification cycle.

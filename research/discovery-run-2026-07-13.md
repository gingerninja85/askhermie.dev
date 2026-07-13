# Discovery run — 2026-07-13 UTC

## Scope

Daily autonomous askhermie.dev discovery loop: Hermes/AI-agent tooling, automation, systems engineering, observability, homelab, static-site tooling, IoT/hardware, Raspberry Pi, firmware/hardware analysis, and beginner-friendly labs.

## Candidates inspected

| Candidate | URL | Decision | Reason / safety screen |
|---|---|---|---|
| Loop Engineering | https://github.com/cobusgreyling/loop-engineering | Already present / inspected | Active MIT repo with practical AI-agent loop design patterns and small npm CLIs. Safety screen stayed acceptable, but the resource was already present in the catalog, so no duplicate card was kept. |
| cost-xray | https://github.com/tigerless-labs/cost-xray | Accepted | Active MIT local-only AI agent traffic/cost inspection tool. Sensitive because it captures prompt/API traffic, but useful for agent cost transparency. Published with capture-data privacy warnings and conservative clone/read-first command instead of pipe-to-shell install. |
| brain0 | https://github.com/Brain0-ai/brain0 | Accepted | Active Apache-2.0 offline-by-default provenance layer for AI-written code. Benign governance/review fit. Published with metadata/privacy/retention warnings. |
| Grid | https://github.com/autonomous-ai/autonomous-grid | Accepted | Active MIT local AI orchestration layer for pooling existing inference servers behind one endpoint. Published with localhost-first, internal-endpoint, and API-key protection warnings. |
| selfhost.directory | https://github.com/turhobr/selfhost.directory | Accepted | Active searchable self-hosted app directory. Reference resource, not an exploit/offensive tool. Published with warning that entries require separate maintenance/auth/privacy review before deployment. |
| QuietDash | https://github.com/fberrez/quietdash.com | Accepted | Active Raspberry Pi/e-paper calm dashboard project. Benign hardware/homelab fit. Published with calendar/weather/location/task privacy and LAN-only warnings. |
| Picture Frame | https://github.com/MateEke/picture-frame | Accepted | Active Apache-2.0 Raspberry Pi digital photo frame with Home Assistant integration. Benign maker/homelab fit. Published with photo, room-sensor, motion, Home Assistant token, and LAN admin UI warnings. |
| ESP32 CYD Aquarium | https://github.com/Lagerpun/esp32-cyd-aquarium | Accepted | Active AGPL-3.0 harmless ESP32 Cheap Yellow Display animation project. Good beginner PlatformIO/display project. Published with firmware overwrite, model verification, and unknown-USB hardware warnings. |
| HEARD | https://github.com/luciobaiocchi/heard | Accepted | Active Apache-2.0 ESP32/GPS/LoRa hiking group-safety mesh with simulator/replay tooling. Benign emergency/learning intent, but radio/location sensitive. Published with simulator-first, legal radio settings, consent, and location privacy warnings. |
| httpinspect | https://github.com/yeet-src/httpinspect | Deferred | Useful Linux/eBPF observability idea, but it captures plaintext HTTP traffic crossing a host and the GitHub API safety pass hit rate limits before deeper install/license review. Needs a stronger privacy and legal-authorized-host frame before beginner publication. |
| Skylight | https://github.com/cpaczek/skylight | Deferred | Interesting RTL-SDR ADS-B/sky projection project, but radio reception, aircraft tracking, live projection, and location/privacy implications need deeper regional legality and safety framing. |
| DataBuff | https://github.com/databufflabs/databuff | Deferred | Observability candidate, but operationally broad APM/AI-agent system. README mentions demo access via group/password and the install surface needs deeper review before beginner recommendation. |
| makerspet/oomwoo | https://github.com/makerspet/oomwoo | Deferred | Open vacuum robot project is interesting, but moving hardware/robotics safety, batteries, motors, and home mapping create physical/privacy risks requiring deeper review. |
| dashdeck-harmonized-imports | https://github.com/22004251-tech/dashdeck-harmonized-imports | Rejected | Self-described music acquisition/media automation. Piracy/rights ambiguity is too high for a beginner public catalog. |
| omni-verse-reader | https://github.com/RobinDoom/omni-verse-reader | Rejected | Self-hosted media automation/download manager. Piracy/rights ambiguity is too high for askhermie.dev. |

## Published changes

Added 8 new resource cards to `src/pages/resources.astro`:

- cost-xray
- brain0
- Grid
- selfhost.directory
- QuietDash
- Picture Frame
- ESP32 CYD Aquarium
- HEARD

Re-inspected Loop Engineering and left the existing card in place instead of publishing a duplicate.

Updated reader-intent category arrays so new AI-agent, local-AI, ESP32, Raspberry Pi, and e-ink cards render under existing grouped sections.

## Skill changes

No local Hermes skills created or updated. The accepted resources are useful catalog entries, but none warranted a non-duplicative local skill today without more hands-on workflow verification. `cost-xray`, `Grid`, and `HEARD` may deserve future skills after safe install/test runs.

## Verification notes

Final cron report records Astro build, secret scan, commit, push, remote SHA, and live-site smoke check results.

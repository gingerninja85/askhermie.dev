# Discovery run 2026-09-10

## Scope
Daily autonomous askhermie.dev resource discovery. Buckets searched: AI-agent observability/governance, browser automation for agents, homelab/infrastructure monitoring, beginner DevOps labs, blue-team learning references, and ESP32/Raspberry Pi hardware labs.

## Candidates inspected

1. `future-agi/future-agi`
2. `yzhao062/auditable`
3. `agentkitai/agentlens`
4. `Osomudeya/DevOps-Home-Lab-2026-2027`
5. `Pouzor/homelable`
6. `OneUptime/oneuptime`
7. `fabacab/awesome-cybersecurity-blueteam`
8. `cyberblu3s/CyberBlue`
9. `if-0/ESP32-Learning-Roadmap-EN`
10. `idltd/esp32lab`
11. `NotHarshhaa/internal-developer-platform-cli`
12. `dev-toolings/ghostchrome`
13. `browser-act/skills`

Evidence sources: GitHub/web search results, GitHub repository API metadata, README excerpts via the GitHub API, exact duplicate-name parsing from the `const resources: Resource[] = [...]` block, and local source/build checks.

## Accepted and published

1. **auditable** — `https://github.com/yzhao062/auditable`
   - Category: AI agent governance.
   - Evidence inspected: active non-archived Apache-2.0 repo, created 2026-06-16, pushed 2026-09-08, PyPI-oriented install path. README frames the tool as an AI-agent decision record/replay/rollback library.
   - Safety note: Published for toy/local reversible-agent experiments first. Card warns that rollback hooks can change real systems and should not receive broad production write access during experiments.

2. **AgentLens** — `https://github.com/agentkitai/agentlens`
   - Category: AI agent provenance.
   - Evidence inspected: active non-archived MIT repo, pushed 2026-08-30. README describes local/server packages, MCP-native observability, and tamper-evident SHA-256 event logging.
   - Safety note: Published for private agent-audit logging only. Card warns logs can contain prompts, tool outputs, filenames, URLs, and secrets.

3. **ghostchrome** — `https://github.com/dev-toolings/ghostchrome`
   - Category: AI browser automation.
   - Evidence inspected: active non-archived MIT repo, created 2026-06-11, pushed 2026-09-08. README describes a small Go CDP CLI for compact snapshots, clicks, typing, screenshots, and network checks.
   - Safety note: Published for owned/local browser testing. Card warns against logged-in third-party misuse, access-control bypass, and leaking session data.

4. **ESP32 Lab** — `https://github.com/idltd/esp32lab`
   - Category: ESP32 development.
   - Evidence inspected: active non-archived AGPL-3.0 repo, created 2026-05-08, pushed 2026-06-27. README describes browser-controlled GPIO/sensor learning served locally from supported ESP32 boards.
   - Safety note: Published for owned spare boards and low-current learning setups. Card warns to match firmware to CPU architecture and disconnect motors, relays, mains-voltage devices, and high-current loads while learning.

## Already present / inspected, not duplicated

- **Future AGI** — already in catalog.
- **Homelable** — already in catalog.
- **OneUptime** — already in catalog.

## Rejected / deferred

- **DevOps Home Lab 2026-2027** — `https://github.com/Osomudeya/DevOps-Home-Lab-2026-2027`
  - Reason: Deferred, not unsafe. The tutorial appears beginner-friendly, but GitHub license metadata is missing and it overlaps existing Docker/Kubernetes/monitoring learning resources. Revisit only if a license/source-use review clears it.

- **Awesome Cybersecurity Blue Team** — `https://github.com/fabacab/awesome-cybersecurity-blueteam`
  - Reason: Deferred, not unsafe. It is a broad curated reference rather than a concrete tool/lab with a first action; askhermie.dev should not turn into an indiscriminate awesome-list mirror.

- **CyberBlue** — `https://github.com/cyberblu3s/CyberBlue`
  - Reason: Deferred, not published. Relevant as a blue-team learning platform, but README warns it ships with well-known default passwords, no authentication, and no production security guarantees. Too much foot-gun risk for a quick beginner card.

- **ESP32 Learning Roadmap EN** — `https://github.com/if-0/ESP32-Learning-Roadmap-EN`
  - Reason: Rejected for this run because the repository returned 404 via the GitHub API under the discovered owner/name. Do not publish dead or renamed links.

- **Internal Developer Platform CLI** — `https://github.com/NotHarshhaa/internal-developer-platform-cli`
  - Reason: Deferred, not published. Very low adoption and it generates/manages repositories, Kubernetes manifests, CI/CD pipelines, scanning, and service operations. Needs deeper safety and code-generation review before a beginner recommendation.

- **BrowserAct skills** — `https://github.com/browser-act/skills`
  - Reason: Rejected for publication. README explicitly markets breaking through anti-bot walls, account-based workflows, stealth browsing, and isolated multi-account browsing. That crosses the safety gate for abuse-prone automation.

## Skill decision
No local Hermes skills created or updated. The accepted resources are useful catalog entries, but none introduced a distinct benign repeatable workflow beyond existing browser automation, AI observability/governance, and ESP32 development coverage.

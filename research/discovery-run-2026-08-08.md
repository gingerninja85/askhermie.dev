# Discovery run — 2026-08-08

## Accepted for publication

1. **Pydantic AI** (`pydantic/pydantic-ai`) — accepted as a typed Python AI-agent framework. Safety screened GitHub metadata, README, MIT license, active maintenance, install surface, and agent/tool/logging implications; published with provider-key, logging, private-input, and toy-prompt-first warnings.
2. **OpenAI Agents SDK** (`openai/openai-agents-python`) — accepted as a lightweight multi-agent workflow SDK. Safety screened README, MIT license, pip install path, provider-agnostic model note, tracing, handoffs, guardrails, and tool side-effect surface; published with synthetic-data and trace-retention warnings.
3. **Gatus** (`TwiN/gatus`) — accepted as a developer-oriented uptime/status-page tool. Safety screened README, Apache-2.0 license, Docker start command, endpoint-check feature set, alerting surface, and secret/credential keyword hits in configuration docs; published with private-status-page and no-credentials-in-URLs warnings.
4. **ImHex** (`WerWolv/ImHex`) — accepted as a binary/firmware inspection GUI. Safety screened README, GPL-2.0 license, release-download-first install shape, pattern-language/binary-editing purpose, and reverse-engineering context; published with copy-before-editing and authorized-samples-only warnings.
5. **Raspberry Pi Imager** (`raspberrypi/rpi-imager`) — accepted as the official Raspberry Pi OS imaging utility. Safety screened README, active maintenance, official project ownership, package install path, and drive-overwrite risk; published with double-check-target-drive warning.
6. **Starlight** (`withastro/starlight`) — accepted as an Astro documentation framework. Safety screened README, MIT license, docs-site scope, Astro starter path, and static-publishing risk; published with secret/content review warning.

## Already present / inspected, not duplicated

- **OpenHands** (`All-Hands-AI/OpenHands`) — already in catalog as `OpenHands`; inspected again from AI-agent framework search results.
- **MCP Toolbox for Databases** (`googleapis/genai-toolbox`) — already in catalog as `MCP Toolbox for Databases`; inspected again from MCP/database tooling search results.
- **VoltAgent** (`VoltAgent/voltagent`) — already in catalog as `VoltAgent`; inspected again from TypeScript agent framework search results.

## Rejected / deferred

- **Mastra** (`mastra-ai/mastra`) — deferred. It looks useful as a modern TypeScript agent framework, but GitHub license metadata returned `NOASSERTION`; defer until license/package terms are checked more deeply.
- **Atomic Agents** (`BrainBlend-AI/atomic-agents`) — deferred. Likely benign, but README hits included token/hack terminology and a third-party skills command path; needs a narrower hands-on safe recipe before beginner publication.
- **Opik** (`comet-ml/opik`) — deferred. Strong LLM observability/eval candidate, but README hits included bypass/token terminology and the platform can ingest production prompts/traces; needs a synthetic-only quickstart and redaction review before adding.
- **Grafana** (`grafana/grafana`) — deferred. Safe and useful, but already indirectly represented by Grafana Alloy and many observability cards; publishing the full platform card should wait for a beginner-safe local dashboard recipe.
- **Prometheus** (`prometheus/prometheus`) — deferred. Safe and useful, but adding it without a complete scrape-config example would be too generic; better paired later with Grafana/Gatus/Node Exporter lab instructions.
- **Dockge** (`louislam/dockge`) — deferred. Useful Docker Compose manager, but README/quickstart involves Docker socket access; needs a least-privilege or private-LAN recipe before beginner publication.
- **WatchYourLAN** (`aceberg/WatchYourLAN`) — deferred. Owned-LAN inventory is useful, but a network scanner can surprise users and disclose device history; needs a narrow private-LAN consent/scope card before publication.
- **CHIPSEC** (`chipsec/chipsec`) — deferred. Legitimate platform security assessment framework, but too low-level and potentially disruptive for beginners; needs own-hardware/read-only checks and recovery-plan guidance.
- **UEFITool** (`LongSoft/UEFITool`) — deferred. Legitimate UEFI image viewer/editor, but ImHex filled today’s safer firmware-inspection slot and firmware-editing tools need cautious copy-only workflow wording.
- **CircuitPython** (`adafruit/circuitpython`) — deferred. Benign and educational, but overlaps existing MicroPython/mpremote/ESP32 beginner cards; better added later with a board-specific first blink workflow.
- **Thonny** (`thonny/thonny`) — deferred. Safe beginner IDE, but current catalog already has MicroPython command-line starts; add later only if the site adds GUI-first beginner tracks.
- **Docusaurus** (`facebook/docusaurus`) — deferred. Safe docs generator, but Starlight is a closer fit for this Astro-based site; no need to publish two docs frameworks in the same run.

## Notes

- Inspected 18 candidates via authenticated GitHub API metadata and README fetches across AI-agent frameworks, LLM observability/evals, uptime/status tools, homelab/Docker management, LAN inventory, firmware/reverse engineering, Raspberry Pi imaging, microcontroller learning, and documentation/static-site tooling.
- No malware, phishing, credential theft, exploit-pack, botnet, ransomware, piracy, fraud, spam, or harassment tooling was published.
- No secrets, tokens, API keys, credentials, personal phone numbers, private config, or cron changes were added.
- No Hermes skills created this run; accepted entries are public-resource cards, but none introduced a sufficiently novel, hands-on, reusable Hermes workflow beyond existing AI-agent, observability, docs, firmware, and Raspberry Pi skills.

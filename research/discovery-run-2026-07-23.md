# Discovery run — 2026-07-23

## Scope

Daily autonomous askhermie.dev discovery loop. Searched GitHub/web candidates across AI-agent MCP tooling, agent safety, local knowledge/context systems, ESP32/Raspberry Pi hardware learning, homelab/system dashboards, static-site tooling, observability tutorials, and firmware/reverse-engineering labs.

## Pre-existing working tree

The run started clean on `main`; `git status --short` showed no pre-existing modified or untracked files.

## Accepted / published

1. **FastCtx** — accepted. Local Rust MCP runtime for repository file/search/edit tooling with an explicit control-terminal review/apply flow. Published with warnings that it can read code, run Bash, and prepare edits, so sandbox repos and review are required.
2. **HOL Guard** — accepted. Local-first protective layer for AI-agent tools, packages, skills, secrets, prompt injection, and risky runtime actions. Published with warnings that guard receipts and policy logs can be sensitive.
3. **IWE** — accepted. Local Markdown knowledge graph and MCP/CLI context layer for agents. Published with warnings that Markdown vaults can contain private links, notes, and secrets.
4. **esp-generate** — accepted. Official Rust template generator for no_std Espressif/ESP32 projects. Published with hardware-target and flashing-safety warnings.
5. **Inkycal** — accepted. Raspberry Pi e-paper dashboard software for calendars, weather, tasks, photos, and custom modules. Published with calendar/photo/API-token and wiring warnings.
6. **Pankha** — accepted. Self-hosted fan and temperature management dashboard for PCs, servers, homelabs, and IPMI/BMC machines. Published with explicit overheating, fallback-curve, private-dashboard, and credential warnings.
7. **Nokia DCT3 Emulator** — accepted. Historical emulator/analysis toolkit for obsolete Nokia DCT3 phones that requires bring-your-own legitimate firmware. Published with copyright/proprietary-firmware/EEPROM warning.

## Already present / inspected, not duplicated

- **Astral** — already in catalog; re-inspected as Elixir static-site generation tooling, no duplicate added.

## Rejected / deferred

1. **T-REX-FIRMWARE** (`abdallahnatsheh/T-REX-FIRMWARE`) — rejected. README markets it as “offensive security firmware” with “DISCOVER. ENUMERATE. COMPROMISE”; offensive-primary hardware tooling.
2. **ESP32 Evil Twin Captive Portal** (`neustarsabbir-max/ESP32-Evil-Twin-Captive-Portal`) — rejected. README describes Evil Twin APs, DNS hijacking, captive portals, and credential logging; phishing/credential-theft risk.
3. **nRF24 Jammer** (`W0rthlessS0ul/nRF24_jammer`) — rejected. README centers RF interference/jamming and possible BLE/beacon spam; illegal-disruption risk.
4. **IFDA** (`cn0xroot/IFDA`) — deferred. It presents as defensive/authorized IoT firmware analysis, but automated vulnerability discovery needs deeper review before beginner-facing publication.
5. **Dashwise** (`andreasmolnardev/dashwise`) — deferred. Homelab dashboard looks legitimate, but README says the project is being rewritten and points stable users to legacy compose; wait for clearer stable path.
6. **Magic Frame** (`jeremiaa/magic-frame`) — deferred. Useful private home display, but README’s first install path pipes a raw remote install script into shell; no safer beginner command was published in this run.
7. **BossConsole** (`risa-labs-inc/BossConsole`) — deferred. Broad multi-agent operator console with terminals, browser, secrets, and 100+ MCP tools; too much tool/secret surface for a quick beginner card without deeper policy review.
8. **Clay agent plugins** (`clay-run/agent-plugins`) — deferred. Company/person enrichment and connector workflows raise privacy/credential concerns; needs clearer safe starter and data-boundary review.

## Candidate inspection count

Inspected 16 candidates total: FastCtx, HOL Guard, IWE, esp-generate, Inkycal, Pankha, Nokia DCT3 Emulator, Astral, T-REX-FIRMWARE, ESP32 Evil Twin Captive Portal, nRF24 Jammer, IFDA, Dashwise, Magic Frame, BossConsole, and Clay agent plugins.

## Safety notes

- No malware, phishing, credential theft, ransomware, botnet, exploit-pack, piracy, fraud, spam, harassment, or offensive-primary tools were published.
- Every newly accepted card includes a concrete example use case and an explicit safety note.
- Agent/MCP/context tools are framed around disposable repos/notes, local-first testing, manual review, and sensitive trace/context handling.
- Hardware/firmware tools are framed around owned hardware, legitimate firmware, voltage/thermal safety, private dashboards, and no publication of proprietary dumps or secrets.
- No real secrets, tokens, credentials, personal phone numbers, or private config were added. Placeholder `.env` wording is instructional only.

## Skills

No local Hermes skills were created. The accepted tools are useful resources, but this run did not identify a safe, non-duplicative, repeatedly executable workflow that clearly justified a new skill over existing Hermes MCP, smart-home, observability, note-taking, embedded, and static-site skills.

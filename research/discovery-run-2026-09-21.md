# Discovery run 2026-09-21

## Accepted and published

1. **Insomnia** — accepted. Open-source API client; useful for safe local API debugging. Safety note added for stored tokens, cookies, headers, and sample payloads.
2. **Coder** — accepted. Self-hosted development environments and AI-agent workspaces; useful for isolating agent runs. Safety note added for workspace privileges, provider keys, and infrastructure access.
3. **AIChat** — accepted. Terminal LLM client with local/provider models, RAG, tools, and agents. Safety note added for shell helpers, command execution, prompt history, and API-key handling.
4. **NetBird** — accepted. WireGuard-based overlay networking for owned devices and private homelab/agent access. Safety note added for MFA, access policies, routing, and trust extension.
5. **Garnet** — accepted. Redis-compatible cache store from Microsoft Research; useful for local cache experiments. Safety note added for session/token data and unauthenticated cache exposure.

## Inspected but already present

1. **Huginn** — already present in the catalog; safe automation/self-hosted monitoring tool, no duplicate added.
2. **ESP32 MPY-Jama** — already present in the catalog; safe ESP32 MicroPython IDE with owned-board safety note, no duplicate added.
3. **Lazydocker** — already present in the catalog; safe Docker TUI with local Docker-access caveats, no duplicate added.

## Deferred / rejected

1. **Open Interpreter** — deferred. Useful coding-agent project, but the current README promotes remote shell/PowerShell install commands and the tool can run code/commands; needs a safer beginner-first entry before publishing.
2. **AWS Labs MCP servers** — deferred. Useful and reputable, but many servers touch AWS accounts and credentials; publish only after selecting a low-risk read-only server and writing strict least-privilege guidance.
3. **RustDesk** — deferred. Legit remote desktop project with a misuse disclaimer, but remote-control tooling is high-impact for beginners; publish only with tighter owned-device/self-hosted guidance.
4. **Actual Server** — deferred. Benign local-first finance server, but the inspected repo says it is being merged/read-only; prefer the current Actual repo/docs instead of adding a stale card.
5. **LocalStack** — deferred. Useful local AWS emulator, but inspected repo says it is archived/read-only and consolidated; publish only after verifying the current recommended install surface.
6. **Gridrunner Academy** — deferred. Appears educational and MIT/CC-licensed, but has almost no reputation/activity signal; wait for stronger project maturity before recommending publicly.

## Safety notes

- At least 10 candidates inspected: 14 total.
- No offensive-primary, malware, phishing, credential theft, botnet, ransomware, exploit-pack, spam, harassment, piracy, or bypass tooling was published.
- Accepted entries use official GitHub/project URLs and avoid secrets, tokens, API keys, phone numbers, private config, or real credentials.
- No new Hermes skills created; none of the accepted workflows were narrow enough to justify a reusable local skill today.

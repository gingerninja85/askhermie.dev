# askhermie.dev content candidates — 2026-07-01

Purpose: seed the site with resources that match Hermie’s identity: practical troubleshooting, systems engineering, cybersecurity learning, IoT/hardware hacking, AI-agent tooling, and build logs. This is a research shortlist, not yet published.

## Tier 1 — should go on the site first

### Learning tracks / lab resources

| Candidate | URL | Why it fits |
|---|---|---|
| PortSwigger Web Security Academy | https://portswigger.net/web-security | Free interactive web-security labs; high signal for practical cyber learning. |
| OWASP Internet of Things project hub | https://owasp.org/www-project-internet-of-things/ | Canonical IoT security hub; links IoT Top 10, IoTGoat, firmware analysis, FSTM, ISVS. |
| OWASP IoTGoat | https://github.com/OWASP/IoTGoat | Deliberately vulnerable IoT firmware for safe IoT security practice. |
| pwn.college | https://pwn.college/ | Strong hands-on exploitation/computing-security training path. |
| OverTheWire Wargames | https://overthewire.org/wargames/ | Classic beginner-friendly Linux/security practice. |
| Microcorruption | https://microcorruption.com/ | Embedded/reversing challenge environment; relevant to firmware/hardware curiosity. |
| roadmap.sh Cyber Security | https://roadmap.sh/cyber-security | Good visual map for “what should I learn next?” content. |
| Hoppers Roppers Academy | https://www.hoppersroppers.org/training.html | Beginner-friendly security training with structured tracks. |

### Hardware / firmware / IoT tooling

| Candidate | URL | Stars checked | Why it fits |
|---|---|---:|---|
| Binwalk | https://github.com/ReFirmLabs/binwalk | 14,084 | Firmware extraction/analysis tool. Directly relevant to BIOS/firmware curiosity. |
| Ghidra | https://github.com/NationalSecurityAgency/ghidra | 70,313 | Software reverse-engineering framework; useful for firmware and malware/reversing learning. |
| radare2 | https://github.com/radareorg/radare2 | 24,225 | CLI reverse-engineering framework; good advanced track. |
| Cutter | https://github.com/rizinorg/cutter | 19,240 | GUI reverse-engineering platform; friendlier than raw CLI reversing. |
| Firmadyne | https://github.com/firmadyne/firmadyne | 2,083 | Dynamic analysis/emulation of Linux-based firmware. |
| AttifyOS | https://github.com/adi0x90/attifyos | 1,031 | IoT pentesting distro; useful reference, though activity is older. |
| Awesome Hardware and IoT Hacking | https://github.com/JoasASantos/Awesome-Hardware-and-IoT-Hacking | 403 | Curated IoT/hardware-hacking resources. |
| Awesome Vehicle Security | https://github.com/jaredthecoder/awesome-vehicle-security | 4,366 | Car/vehicle hacking resource list; adjacent hardware-security rabbit hole. |

### ESP32 / Raspberry Pi / maker learning

| Candidate | URL | Stars checked | Why it fits |
|---|---|---:|---|
| ESP-IDF | https://github.com/espressif/esp-idf | 18,449 | Official Espressif development framework; core ESP32 reference. |
| ESP-IDF docs | https://docs.espressif.com/projects/esp-idf/en/latest/esp32/ | n/a | Official docs for ESP32 programming. |
| MicroPython | https://github.com/micropython/micropython | 21,851 | Python for microcontrollers; good bridge from scripts to hardware. |
| MicroPython docs | https://docs.micropython.org/en/latest/ | n/a | Official MicroPython reference. |
| Raspberry Pi documentation | https://github.com/raspberrypi/documentation | 5,580 | Official Pi docs; useful for lab notes. |
| Adafruit Learning System | https://learn.adafruit.com/ | n/a | Practical electronics/maker tutorials. |
| Random Nerd Tutorials ESP32 | https://randomnerdtutorials.com/projects-esp32/ | n/a | Step-by-step ESP32 tutorials; approachable project list. |

### Sysadmin / homelab / troubleshooting

| Candidate | URL | Stars checked | Why it fits |
|---|---|---:|---|
| awesome-selfhosted | https://github.com/awesome-selfhosted/awesome-selfhosted | 302,096 | Huge self-hosting/homelab service catalog. |
| The Book of Secret Knowledge | https://github.com/trimstray/the-book-of-secret-knowledge | 231,039 | Cheatsheets, commands, tools, one-liners; very Hermie-core. |
| tldr-pages | https://github.com/tldr-pages/tldr | 62,996 | Practical command examples; fits exact-steps philosophy. |
| Ansible | https://github.com/ansible/ansible | 69,009 | IT automation; relevant to systems-engineer growth. |
| Netdata | https://github.com/netdata/netdata | 79,442 | Observability; useful for “what is broken?” dashboards. |
| MeshCore | https://github.com/meshcore-dev/MeshCore | 3,164 | Packet-radio mesh project; interesting IoT/comms/hardware crossover. |

### Cyber tools and references

| Candidate | URL | Stars checked | Why it fits |
|---|---|---:|---|
| Nuclei | https://github.com/projectdiscovery/nuclei | 29,409 | YAML-based vuln scanner; good for safe lab/demo content. |
| Subfinder | https://github.com/projectdiscovery/subfinder | 13,935 | Passive subdomain enumeration; recon learning. |
| httpx | https://github.com/projectdiscovery/httpx | 10,107 | HTTP probing toolkit. |
| ffuf | https://github.com/ffuf/ffuf | 16,306 | Web fuzzing; good lab tool. |
| mitmproxy | https://github.com/mitmproxy/mitmproxy | 44,117 | TLS-capable HTTP proxy; web/API/mobile testing. |
| SecLists | https://github.com/danielmiessler/SecLists | 71,850 | Security tester wordlists/payload lists. Use responsibly. |
| PayloadsAllTheThings | https://github.com/swisskyrepo/PayloadsAllTheThings | 78,819 | Web app payload/reference library. Use responsibly. |
| OWASP Cheat Sheet Series | https://github.com/OWASP/CheatSheetSeries | 32,439 | Defensive appsec cheat sheets; safer public-facing reference. |

### AI agents / automation / site-relevant tooling

| Candidate | URL | Stars checked | Why it fits |
|---|---|---:|---|
| n8n | https://github.com/n8n-io/n8n | 194,716 | Workflow automation with AI integrations; good future “Hermie automations” reference. |
| LangChain | https://github.com/langchain-ai/langchain | 140,600 | Agent engineering platform; relevant to agent tooling. |
| AutoGen | https://github.com/microsoft/autogen | 59,382 | Multi-agent programming framework. |
| CrewAI | https://github.com/crewAIInc/crewAI | 54,659 | Agent orchestration framework. |
| Open WebUI | https://github.com/open-webui/open-webui | 143,614 | Local/self-hosted AI UI ecosystem. |
| Graphiti | https://github.com/getzep/graphiti | 28,193 | Real-time knowledge graphs for agents. Relevant to memory/skillsite ideas. |
| browser-use | https://github.com/browser-use/browser-use | 101,814 | Browser automation for AI agents. |

### Site tooling / askhermie.dev improvements

| Candidate | URL | Stars checked | Why it fits |
|---|---|---:|---|
| Astro | https://github.com/withastro/astro | 60,626 | Current site framework. Content-driven, Cloudflare-friendly. |
| Pagefind | https://github.com/Pagefind/pagefind | 5,307 | Static search for skill catalog; high-value next addition. |
| Plausible Analytics | https://github.com/plausible/analytics | 27,423 | Privacy-friendly analytics option. |
| Cloudflare Templates | https://github.com/cloudflare/templates | 2,004 | Good source of Cloudflare Workers/Pages examples. |
| Cloudflare Workers SDK / Wrangler | https://github.com/cloudflare/workers-sdk | 4,274 | CLI/deployment tooling for future Cloudflare features. |

## Recommended site structure for these

1. `/skills` — Hermes-owned workflows and skills.
2. `/lab` — curated learning paths:
   - Web security
   - IoT security
   - Firmware/reversing
   - ESP32/Raspberry Pi/maker
   - Sysadmin/homelab
3. `/tools` — tools we built + external toolchains worth learning.
4. `/resources` — curated external links with “why this matters” notes.
5. `/build-log` — what Hermie and the user built/learned.

## First content sprint recommendation

Publish these first because they are safe, reputable, and map directly to the site purpose:

1. PortSwigger Web Security Academy
2. OWASP IoT project hub
3. OWASP IoTGoat
4. Binwalk
5. Ghidra
6. ESP-IDF docs
7. MicroPython docs
8. awesome-selfhosted
9. The Book of Secret Knowledge
10. Pagefind

## Notes / cautions

- Security tools should be framed as learning/authorized-lab resources only.
- Do not publish offensive “how to attack real targets” workflows without guardrails.
- Star count is not quality by itself; it was used only as a rough relevance/activity signal.
- AttifyOS is relevant but older; mark it as “reference/legacy” unless checked more deeply.
- The site should not become a random awesome-list clone. Every entry needs a Hermie-style annotation: “what it is, why it matters, first practical next step.”

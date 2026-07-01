# Discovery run — 2026-07-02

## Scope

Daily askhermie.dev discovery loop: Hermes/AI-agent tooling, automation, systems engineering, observability, homelab, Kubernetes, embedded development, IoT/hardware, firmware, and beginner-friendly labs.

## Candidates inspected

| Candidate | URL | Decision | Reason / safety screen |
|---|---|---|---|
| mise | https://github.com/jdx/mise | Accepted | Active MIT-licensed dev-environment/task tool, benign primary purpose, high relevance for repeatable Hermes repo work. Safety note added: per-project env/tasks can affect sensitive shells; review config first. |
| just | https://github.com/casey/just | Accepted | Mature command runner, benign primary purpose, useful for stable agent/human task entry points. Safety note added: justfiles run shell commands; inspect recipes from unfamiliar repos. |
| Atuin | https://github.com/atuinsh/atuin | Accepted | Active MIT-licensed shell-history tool with local SQLite and optional encrypted sync. Safety note added: command history can contain accidental secrets; review before syncing. |
| Glances | https://github.com/nicolargo/glances | Accepted | Active system monitor, benign ops/learning purpose, useful for systems debugging. Safety note added: optional web UI exposes system details; bind privately. |
| Dozzle | https://github.com/amir20/dozzle | Accepted | Active MIT-licensed Docker log viewer, benign container observability purpose. Safety note added: logs and Docker socket access are sensitive; keep private. |
| Homepage | https://github.com/gethomepage/homepage | Accepted | Active homelab dashboard, GPL-3.0, benign service organization use. Safety note added: dashboards/widgets can reveal internal service metadata; keep private. |
| K9s | https://github.com/derailed/k9s | Accepted | Mature Apache-2.0 Kubernetes TUI, useful for lab cluster operations. Safety note added: kubeconfig permissions apply; use least-privilege/lab contexts. |
| Headlamp | https://github.com/kubernetes-sigs/headlamp | Accepted | Kubernetes SIG UI project, Apache-2.0, useful visual Kubernetes learning path. Safety note added: UI can edit resources according to kubeconfig; use lab clusters. |
| Dagger | https://github.com/dagger/dagger | Accepted | Active Apache-2.0 build automation engine, useful for repeatable local/CI workflows. Safety note added: workflows can touch source, containers, networks, secrets; review modules and avoid secrets in examples. |
| PlatformIO Core | https://github.com/platformio/platformio-core | Accepted | Active Apache-2.0 embedded-development CLI, strong fit for ESP32/Arduino/hardware learning. Safety note added: firmware uploads change devices; verify board/port and avoid mains hardware. |
| TinyGo | https://github.com/tinygo-org/tinygo | Accepted | Active compiler for microcontrollers/WASM/small tools, useful embedded path for Go users. Safety note added: board target/wiring mistakes can damage devices. |
| Arduino CLI | https://github.com/arduino/arduino-cli | Accepted | Official Arduino CLI, GPL-3.0, benign embedded automation tool. Safety note added: confirm board FQBN/serial/voltage before flashing. |
| PulseView / sigrok | https://sigrok.org/wiki/PulseView | Accepted | Open-source hardware signal-analysis suite for logic analyzers and protocol decoding. Safety note added: do not probe mains/unknown high-voltage circuits; verify voltage and ground. |
| Gophish | https://github.com/gophish/gophish | Rejected | Explicitly markets itself as an open-source phishing toolkit. Even with legitimate training uses, phishing-primary tooling is not appropriate for a beginner resource catalog. |
| HackTricks | https://github.com/HackTricks-wiki/hacktricks | Deferred / rejected for publishing | Large pentest/offensive technique reference; useful in expert contexts but too easy for beginners to misuse and too broad for conservative publishing here. |
| Aircrack-ng | https://github.com/aircrack-ng/aircrack-ng | Deferred / rejected for publishing | Wi-Fi auditing suite can be legitimate for owned networks but includes offensive wireless cracking workflows; not published under conservative safety gate. |

## Published changes

Added 13 resource cards to `src/pages/resources.astro`:

- mise
- just
- Atuin
- Glances
- Dozzle
- Homepage
- K9s
- Headlamp
- Dagger
- PlatformIO Core
- TinyGo
- Arduino CLI
- PulseView / sigrok

Updated resource grouping so the new CLI/systems, Kubernetes, embedded, Arduino, Go-on-microcontrollers, and hardware-signal-analysis categories render under the existing broad groups.

## Skill changes

No local Hermes skills created or updated. The accepted resources are useful catalog entries, but none required a new reusable agent workflow today without duplicating existing general development, smart-home, or hardware skills.

## Verification

Pending at note creation; final cron report records build, secret scan, commit, and push result.

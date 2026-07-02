# Discovery run — 2026-07-03

## Scope

Daily askhermie.dev discovery loop: Hermes/AI-agent tooling, automation, systems engineering, observability, homelab, static-site tooling, IoT/hardware, ESP32/Raspberry Pi, firmware analysis, and beginner-friendly labs.

## Candidates inspected

| Candidate | URL | Decision | Reason / safety screen |
|---|---|---|---|
| OneUptime | https://github.com/OneUptime/oneuptime | Accepted | Active Apache-2.0 observability/status-page platform with clear monitoring use. README offers a remote install script, so the public card points readers to docs instead of piping a script into shell. Safety note added for sensitive service names, incident data, logs, and public status pages. |
| DOCSight | https://github.com/itsDNNS/docsight | Accepted | Active MIT self-hosted DOCSIS evidence tracker for owned home/lab networks. Docker Compose path is clear and non-offensive. Safety note added for ISP/modem/home-network metadata exposure. |
| Jaguar for ESP32 | https://github.com/toitlang/jaguar | Accepted | Active MIT ESP32 live-reload workflow for Toit development. Benign embedded-development purpose. Safety note added for firmware flashing, Wi-Fi device workflow, and avoiding safety-critical hardware. |
| Marmite | https://github.com/rochacbruno/marmite | Accepted | Active static blog generator; benign publishing/dev-tool purpose. Safety note added for private Markdown content before publishing. |
| Sigal | https://github.com/saimn/sigal | Accepted | Mature MIT static photo gallery generator. Benign site/media workflow. Safety note added for faces, serial numbers, locations, and EXIF metadata. |
| vmlinux-to-elf | https://github.com/marin-m/vmlinux-to-elf | Accepted | Active GPL-3.0 kernel-image recovery utility for firmware analysis. Useful for owned/authorized firmware labs without giving exploit instructions. Safety note added for proprietary firmware and recovered secrets. |
| Velxio | https://github.com/davidmonterocrespo24/velxio | Accepted | Open-source browser board emulator for Arduino/ESP32/Pico/Raspberry Pi style learning. No offensive primary purpose found. Safety note added that simulation does not prove real hardware electrical or regulatory safety. |
| GumCP | https://github.com/gumslone/GumCP | Deferred | Raspberry Pi control panel is useful but exposes command execution, SSH execution, GPIO, service/process control, and secret HTTP button URLs. Deferred rather than publishing to beginners until a safer hardening-first framing is written. |
| FACT Core | https://github.com/fkie-cad/FACT_core | Deferred | Strong firmware-analysis platform, but heavier and security-assessment-oriented; kept for future expert/defensive entry rather than adding another advanced firmware tool today. |
| Pyrrha | https://github.com/quarkslab/pyrrha | Deferred | Useful firmware cartography project but install depends on IDA/Quokka/NumbatUI pieces and is less beginner-friendly. Deferred pending a clearer safe first step. |
| OWASP Firmware Security Testing Methodology | https://github.com/scriptingxss/owasp-fstm | Deferred / rejected for publishing today | Educational methodology, but includes exploitation/dynamic testing stages. Too easy to over-broaden the beginner catalog without careful defensive framing. |
| OpenTelemetry Go Automatic Instrumentation | https://github.com/open-telemetry/opentelemetry-go-instrumentation | Deferred | Legitimate Apache-2.0 eBPF observability project, but work-in-progress and kernel/eBPF complexity make it a poor beginner card today. |
| Home Assistant Core | https://github.com/home-assistant/core | Deferred | Excellent and benign, but broad and already well-known; better suited for a future smart-home starter path rather than today's focused additions. |
| InkWatchy | https://github.com/Szybet/InkWatchy | Deferred | Benign Watchy/Yatchy firmware, but niche hardware and calendar/weather/watch firmware concerns need more review before recommending to beginners. |

## Published changes

Added 7 resource cards to `src/pages/resources.astro`:

- OneUptime
- DOCSight
- Jaguar for ESP32
- Marmite
- Sigal
- vmlinux-to-elf
- Velxio

Updated resource grouping so new static-site, observability, internet monitoring, kernel image recovery, ESP32 live-reload, and board-emulator categories render under existing broad groups.

## Skill changes

No local Hermes skills created or updated. The accepted resources are useful catalog entries, but no new workflow was both broadly reusable and non-duplicative enough to justify a local skill today.

## Verification

Final cron report records build, secret scan, commit, and push result.

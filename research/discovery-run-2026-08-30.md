# Discovery run — 2026-08-30

## Accepted for publication

1. **Cloudprober** (`cloudprober/cloudprober`) — accepted as benign active service monitoring. Safety screened README, Docker/image install surface, Apache-2.0 license, recent activity, open issues, and probe-target risk. Published with owned/authorized-target and private-config warnings.
2. **Kubetail** (`kubetail-org/kubetail`) — accepted as benign Kubernetes log viewing for owned clusters. Safety screened README, install surface, Apache-2.0 license, recent activity, open issues, Code of Conduct/community signals, and kubeconfig/log privacy risks. Published with least-privilege and no-public-dashboard warnings.
3. **Rust MCP Filesystem** (`rust-mcp-stack/rust-mcp-filesystem`) — accepted as benign MCP filesystem server when narrowly scoped. Safety screened README, documentation-first install path, MIT license, recent activity, open issue list, and MCP filesystem permission risks. Published with scratch-directory-first and limited-root warnings.
4. **trace-mcp** (`nikolai-vysotskyi/trace-mcp`) — accepted as benign agent trace/reuse tooling. Safety screened README, npm package signal, MIT license, security badges/policy links, recent activity, open issue list, and trace privacy risks. Published with disposable-repo-first and private-trace warnings.
5. **ESP32 VS1053 Stream** (`CelliesProjects/ESP32_VS1053_Stream`) — accepted as benign ESP32 audio/maker library. Safety screened README, MIT license, recent activity, open issues, Arduino-library workflow, network stream and Wi-Fi credential risks. Published with wiring/power and private-credential warnings.
6. **Kepler** (`sustainable-computing-io/kepler`) — accepted as benign Kubernetes energy observability exporter. Safety screened README, Apache-2.0 badge/license metadata, CNCF-style observability purpose, recent activity, open issues, rewrite notice, and metrics exposure risks. Published with lab-cluster-first and private-metrics warnings.

## Rejected / deferred / already present

- **MisakaNet** (`Ikalus1988/MisakaNet`) — already present / inspected. Active benign agent debugging lesson library; not duplicated.
- **deja-vu** (`vshulcz/deja-vu`) — already present / inspected. Active benign local agent-session search tool; not duplicated.
- **Pulse** (`rcourtman/Pulse`) — already present / inspected. Active benign infrastructure monitor; not duplicated.
- **DOCSight** (`itsDNNS/docsight`) — already present / inspected. Active benign DOCSIS monitoring/evidence tool; not duplicated.
- **WLED** (`wled/WLED`) — already present / inspected. Active benign ESP32 lighting firmware; not duplicated.
- **Domoticz** (`domoticz/domoticz`) — already present / inspected. Active benign home automation platform; not duplicated.
- **Zola** (`getzola/zola`) — already present / inspected. Active benign static site generator; not duplicated.
- **EMBA** (`e-m-b-a/emba`) — already present / inspected. Active firmware security analyzer; not duplicated.
- **Netdata** (`netdata/netdata`) — already present / inspected. Active benign infrastructure observability tool; not duplicated.
- **OpenTelemetry Demo** (`open-telemetry/opentelemetry-demo`) — already present / inspected. Active benign observability lab; not duplicated.
- **Grafana Alloy** (`grafana/alloy`) — already present / inspected. Existing catalog entry found; not duplicated. GitHub API detail fetch hit unauthenticated rate limiting during this check, so no new publication decision was needed.
- **Heym** (`heymrun/heym`) — deferred. It appears to be a legitimate self-hosted AI workflow platform, but license metadata is mixed/Commons-Clause conditioned and the local quickstart runs a repo script; needs deeper install/license review before beginner publication.
- **Haven** (`ancsemi/Haven`) — deferred. It appears to be a benign self-hosted private chat project, but the current open issues include an admin-account security concern. Needs deeper auth/security review before beginner publication.
- **BambuHelper** (`Keralots/BambuHelper`) — deferred. It appears to be a benign ESP32 printer monitor, but GitHub license metadata is missing and it handles printer MQTT/cloud connectivity; needs license and credential-handling review first.
- **FACT Core** (`fkie-cad/FACT_core`) — deferred. Legitimate firmware analysis platform, but advanced/dual-use and not clearly beginner-first for this run; keep for a future firmware-specific review.

## Notes

- Inspected 16 candidates across AI-agent memory/trace tooling, MCP filesystem access, observability, Kubernetes operations, homelab monitoring, static-site tooling, firmware analysis, ESP32 audio/lighting, and home automation.
- Existing catalog checked by exact `name:` fields inside the `const resources: Resource[]` block before adding entries; re-inspected existing resources were not duplicated.
- Resource duplicate check after edits shows the six new names exactly once. It also reports pre-existing catalog debt: `Eneru`, `MemMap Explorer`, and `LILYGO Spark` each appear twice; these were not introduced by this run.
- No malware, phishing, credential theft, exploit-pack, botnet, ransomware, piracy, fraud, spam, harassment, or offensive-primary resource was published.
- No secrets, tokens, API keys, credentials, personal phone numbers, private config, or cron changes were added.
- No Hermes skills created this run. Existing MCP, devops, observability, and IoT skills cover the reusable workflows well enough; this run added public resource cards only.

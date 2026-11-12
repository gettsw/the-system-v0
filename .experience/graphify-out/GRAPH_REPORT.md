# Graph Report - .experience  (2026-11-11)

## Corpus Check
- Corpus is ~27,436 words - fits in a single context window. You may not need a graph.

## Summary
- 407 nodes · 692 edges · 22 communities (17 shown, 5 thin omitted)
- Extraction: 85% EXTRACTED · 15% INFERRED · 1% AMBIGUOUS · INFERRED: 102 edges (avg confidence: 0.89)
- Token cost: 238,000 input · 0 output

## Community Hubs (Navigation)
- Working Values & Profile
- SILO Rules, Mistakes & Pilots
- Build Style & Compute
- ModelRay White-box Safety
- Latent Transfer Experiments
- Persistent Monitoring RHC
- MATLAB & Paper Reviews
- Project Portfolio
- SILO Infra & LLM Serving
- GNS Routing & Need Pivot
- RFSA Distributed Ledger
- Scaling Diagnosis Audits
- GNS Runtime Protocol
- GNN Router Design & RL
- Coverage Gates & Exchange
- Evolutionary Router Training
- N=10 Confirmatory Runs
- Commit Attribution Rule
- Rule: Commit Only When Asked
- Rule: No Destructive Git
- Rule: Real-Path Commands
- Rule: No Invented Citations

## God Nodes (most connected - your core abstractions)
1. `Build Style` - 25 edges
2. `William Getts` - 24 edges
3. `William Getts (profile)` - 23 edges
4. `GNS-MAS on SILO-BENCH` - 20 edges
5. `ModelRay white-box safety regression gate` - 20 edges
6. `Handoff to a new agent` - 17 edges
7. `Cooperating RHC persistent-monitoring simulator` - 16 edges
8. `Need-based routing reorientation` - 14 edges
9. `Latent transfer project` - 14 edges
10. `Rule: no centralized hubs` - 13 edges

## Surprising Connections (you probably didn't know these)
- `Laptop: no LLM inference` --semantically_similar_to--> `Rule 5: All LLM inference on JARVIS (or AMD), never local`  [INFERRED] [semantically similar]
  profile.md → rules.md
- `Fair baselines and controls` --semantically_similar_to--> `Rule 8: Report honestly, no overclaiming`  [INFERRED] [semantically similar]
  profile.md → rules.md
- `Learning from reward over imitation` --semantically_similar_to--> `Rule 11: No supervised head start for router; oracle/ILP eval only`  [INFERRED] [semantically similar]
  profile.md → rules.md
- `Decentralization, no hubs` --semantically_similar_to--> `Rule 12: Router must not form centralized hubs`  [INFERRED] [semantically similar]
  profile.md → rules.md
- `Profile change log` --references--> `William Getts (profile)`  [INFERRED]
  log.md → profile.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Pre-registered experiment practice across projects** — inbox_claude_memory_dump_preregistration, inbox_claude_memory_dump_phase_pad_v2, inbox_claude_memory_dump_prereg_7b, inbox_claude_memory_dump_latent_exp1, inbox_claude_memory_dump_latent_exp2, inbox_claude_memory_dump_latent_exp3, inbox_claude_memory_dump_latent_exp4, inbox_claude_memory_dump_need_request_pilot [INFERRED 0.85]
- **Deterministic components that work (A1, A4, NS verifier, full_proactive)** — inbox_claude_memory_dump_need_oracle_a1, inbox_claude_memory_dump_need_summary_a4, inbox_claude_memory_dump_ns_verifier, inbox_claude_memory_dump_full_proactive, inbox_claude_memory_dump_architecture_audit, inbox_claude_memory_dump_planner_model_router [EXTRACTED 1.00]
- **Remote GPU compute workflow (no local inference)** — inbox_claude_memory_dump_no_local_inference, inbox_claude_memory_dump_jarvis_hpc, inbox_claude_memory_dump_vllm, inbox_claude_memory_dump_shared_tunnel_cap, inbox_claude_memory_dump_amd_dev_cloud, inbox_claude_memory_dump_cloud_sh, inbox_claude_memory_dump_modal [INFERRED 0.85]
- **Compute handoff flow (bundle, SHA256, user-submitted JARVIS job, vLLM server/client)** — inbox_claude_build_style_git_archive_bundles_with_sha256, inbox_claude_build_style_two_job_vllm_server_client_pattern, inbox_claude_build_style_jarvis_stevens_slurm_cluster, inbox_claude_handoff_compute_handoff_pattern, inbox_claude_build_style_vllm [INFERRED 0.85]
- **Preregistration discipline across projects** — inbox_claude_build_style_frozen_protocol_and_preregistration, inbox_claude_user_profile_preregistration_before_results, inbox_claude_projects_latent_transfer_prereg_frozen_by_hash, inbox_claude_projects_modelray_design_md_change_log [INFERRED 0.85]
- **GNS runtime components** — inbox_claude_projects_gns_silo_bench_gns_runtime, inbox_claude_projects_gns_silo_bench_need_request_1_typed_pull_protocol, inbox_claude_projects_gns_silo_bench_dataref_variant, inbox_claude_projects_gns_silo_bench_localview_tree_echo, inbox_claude_projects_gns_silo_bench_g0_g2_g3_certificate_gates [EXTRACTED 1.00]
- **SILO-BENCH governing rules** — store_projects_gns_silo_bench_gns_silo_bench, rules_rule_10, rules_rule_11, rules_rule_12, rules_rule_13, rules_rule_14 [EXTRACTED 1.00]
- **JARVIS LLM inference stack** — store_tools_jarvis_jarvis, store_tools_vllm_gpt_oss_vllm_gpt_oss, store_projects_gns_silo_bench_gns_silo_bench, rules_rule_5 [INFERRED 0.85]
- **Pending compute bundles awaiting ruling** — store_conflicts_conflict_3, store_projects_modelray_modelray, store_projects_gns_silo_bench_gns_silo_bench, rules_rule_17 [EXTRACTED 1.00]

## Communities (22 total, 5 thin omitted)

### Community 0 - "Working Values & Profile"
Cohesion: 0.06
Nodes (48): Profile change log, Bounded high-value cloud spend, Decentralization, no hubs, Fair baselines and controls, HANDOFF.md session practice, Laptop: no LLM inference, GNS SDK open-core commercial plan, Pre-registered experiments frozen by hash (+40 more)

### Community 1 - "SILO Rules, Mistakes & Pilots"
Cohesion: 0.06
Nodes (45): Rejected brute-force text generation fixes, Rejected hub or star topologies, Hard rules to load first, Mistake Claude co-author trailers, Mistake trusted inflated provenance known label, Need-request pilot, acl26 lineage, ACL 2026 (+37 more)

### Community 2 - "Build Style & Compute"
Cohesion: 0.06
Nodes (42): AMD Developer Cloud MI300X, ArtCraft MCP apps, Build Style, cloud.sh, git archive bundles with SHA256, Git worktrees per topic, gpt-oss-120b, gpt-oss-20b (+34 more)

### Community 3 - "ModelRay White-box Safety"
Cohesion: 0.10
Nodes (42): Abliteration detection (arXiv 2607.01854), AMD Developer Cloud (MI300X), AMD plain ROCm image gotcha, AuditBench 2026, Back et al. 2026 (arXiv 2603.01097), Cheap reference NLL baseline, 'Check:' habit, cloud.sh AMD droplet automation (+34 more)

### Community 4 - "Latent Transfer Experiments"
Cohesion: 0.07
Nodes (36): Frozen protocol and preregistration, Mistake 7B spot-check against run-1 labels, Mistake wrong AMD API host, modelray-7b-r3.tgz bundle, Back et al. 2026 LoRA-as-memory handoff, cloud.sh droplet runner, devcloud API api.devcloud.amd.com/v2, Exp 1 success direction (+28 more)

### Community 5 - "Persistent Monitoring RHC"
Cohesion: 0.13
Nodes (32): CfC (closed-form continuous-time / liquid NN), CfC target-model pipeline, Classical RHC, Clear-dwell rule, Collab-ED-RHC paper (Collaborative PM), Cooperating RHC / persistent monitoring project, DBS-RHC, Time-step (dt) sensitivity (+24 more)

### Community 6 - "MATLAB & Paper Reviews"
Cohesion: 0.10
Nodes (26): MATLAB R2024b, Paper review workflow, Rejected Logical-LNN half of CfC idea, Mistake overclaiming results, Mistake paper critique from wrong repo, /80 speed bug, addpath genpath worktree gotcha, capHorizon default bug (+18 more)

### Community 7 - "Project Portfolio"
Cohesion: 0.09
Nodes (23): The System, ArtCraft research tooling, CI Dynamics notes folder, Cooperating RHC Persistent Monitoring simulator, GNS-MAS SILO-BENCH routing, GNS SDK licensing, Goose fork, HW5 image processing (+15 more)

### Community 8 - "SILO Infra & LLM Serving"
Cohesion: 0.13
Nodes (19): acl26-silo-bench-gnn repository, AMD developer credit ($100), Context policy result (compiled vs full), GNN N=10 campaign / pause, gns-mas-vnext repository, gpt-oss-120b, src/utils/llm.py LLM client, Modal (silo-vllm app) (+11 more)

### Community 9 - "GNS Routing & Need Pivot"
Cohesion: 0.18
Nodes (16): ModelRay company vision (Inspect plugin, confidential compute), GNN topology router (GNNEdgeMaskRouter), GNN training plan, GNS-MAS project, Held-out tasks III-22/25/29, Need-based routing reorientation, A1 need-oracle (one-step need instructions), need.py (need arms) (+8 more)

### Community 10 - "RFSA Distributed Ledger"
Cohesion: 0.19
Nodes (13): Golden contract tests, Rust, Relativistic Computation RFSA-Sim, Deterministic behavioural contract, Gossip past 20 nodes, HMAC-SHA256 authentication, Lean causal-set proofs, Mid-vote death hang (+5 more)

### Community 11 - "Scaling Diagnosis Audits"
Cohesion: 0.24
Nodes (14): Architecture audit 2026-10-20, Capacity view of scaling, Causal density check, Dup-fixed recall, eval_topology.py, Integration bottleneck, MERL (arXiv 1906.07315), MERL dense-signal check (+6 more)

### Community 12 - "GNS Runtime Protocol"
Cohesion: 0.24
Nodes (13): advise:random baseline, DataRef ref-passing kernels, exchange.py (runtime exchange), Failure decomposition (topk traces), GNS runtime reorientation (typed requests, DataRefs, certificate gate), N=5 topology grid results, Need-request pilot (silo-preserving protocol), need_requests.py (typed pull protocol) (+5 more)

### Community 13 - "GNN Router Design & RL"
Cohesion: 0.27
Nodes (10): AGP, ARG-Designer, G-Designer, GNN v2 design (gate + top-k, edge-biased attention), all-MiniLM-L6-v2, Planner + model router reorientation, RL reward choices (P+S, coverage shaping, RLOO K=4), RLOO policy gradient (+2 more)

### Community 14 - "Coverage Gates & Exchange"
Cohesion: 0.25
Nodes (8): Coverage gate branch (+cov), Coverage submit gate (coverage.py, +cov), +delay gate control, Structured exchange job (need-summary / need-rows), A4 need-summary (count-query layer), Rule: no task tools (narrowed: labeled kernels), SILO-BENCH III-30 (matmul), LLM_MAX_TOKENS=8192 reply cap failure

### Community 15 - "Evolutionary Router Training"
Cohesion: 0.43
Nodes (7): Evolution hybrid design (LoRA population), GNN ES training (CMA-ES replaces RLOO), gpt-oss-20b, Phase 0 hybrid at N=10, sparse_evo.py (2:4 mask evolution), Sparse mask evolution branch, train_router_es.py

### Community 16 - "N=10 Confirmatory Runs"
Cohesion: 0.33
Nodes (6): full_proactive context policy, generated_eval instances s200-219, masked-why-wait:learned router arm, N=10 confirmatory GNN experiment, Need-routing audit 2026-10-13, Peer-submission status experiment

## Ambiguous Edges - Review These
- `Logical Neural Networks (LNN)` → `CfC (closed-form continuous-time / liquid NN)`  [AMBIGUOUS]
  inbox/claude/memory_dump.md · relation: conceptually_related_to
- `Rejected HarmBench classifier for 7B ModelRay` → `HarmBench judge bundle`  [AMBIGUOUS]
  inbox/claude/projects/modelray.md · relation: conceptually_related_to
- `ArtCraft research tooling` → `KDE Craft checkout`  [AMBIGUOUS]
  inbox/claude/manifest.md · relation: conceptually_related_to
- `goose fork` → `The System self-modifying desktop agent`  [AMBIGUOUS]
  inbox/claude/projects/minor-projects.md · relation: conceptually_related_to
- `ArtCraft skills` → `KDE Craft clone`  [AMBIGUOUS]
  inbox/claude/projects/minor-projects.md · relation: conceptually_related_to

## Knowledge Gaps
- **78 isolated node(s):** `graphify skill`, `Modal (silo-vllm app)`, `Qwen2.5-0.5B-Instruct`, `Qwen2.5-7B-Instruct`, `all-MiniLM-L6-v2` (+73 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 104 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Logical Neural Networks (LNN)` and `CfC (closed-form continuous-time / liquid NN)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Rejected HarmBench classifier for 7B ModelRay` and `HarmBench judge bundle`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `ArtCraft research tooling` and `KDE Craft checkout`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `goose fork` and `The System self-modifying desktop agent`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `ArtCraft skills` and `KDE Craft clone`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `Build Style` connect `Build Style & Compute` to `SILO Rules, Mistakes & Pilots`, `RFSA Distributed Ledger`, `Latent Transfer Experiments`, `MATLAB & Paper Reviews`?**
  _High betweenness centrality (0.058) - this node is a cross-community bridge._
- **Why does `Manifest` connect `Project Portfolio` to `Build Style & Compute`, `RFSA Distributed Ledger`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
=== FILE: user_profile.md ===
# User profile

## Who
- William Getts. Stevens Institute of Technology (JARVIS is the Stevens SLURM cluster; JARVIS user `wgetts`). GitHub: `gettsw`.
- Researcher (student status inferred from coursework in Downloads/HW5). Domains:
  - LLM multi-agent systems and scaling (SILO-BENCH, GNN routing, neuro-symbolic verification)
  - Multi-agent control: persistent monitoring and receding-horizon control. Co-author with Shirantha Welikala (Stevens) on the Collab-ED-RHC paper; co-author of the simulator paper with Fanshteyn and Welikala.
  - White-box ML safety and interpretability (ModelRay), latent reasoning transfer
  - Distributed systems (RFSA replicated ledger)
- Has commercial intent: the GNS SDK open-core/licensing plan, and the ModelRay company vision (third-party auditing via an Inspect plugin, confidential compute, CI for risk managers and insurers). Source: memories `sdk-licensing-plan`, `whitebox-usefulness-refocus`.
- Hardware: Windows 11 laptop with an RTX 4070, PowerShell as the default shell. Relocated around 2026-09-25 (memory `gnn-n10-paused`).

## How to talk to him (mostly inferred from memory wording and skills)
- Wants honest results: "Report results honestly: say when a difference is inside the noise" (acl26-silo-bench-gnn HANDOFF.md).
- He wants understanding over claims: "the user wanted to know whether the problem is understood in a new light; claims aren't the goal" (memory `capacity-view-of-scaling`).
- Give copy-pasteable commands with real paths, no `<placeholders>` (jarvis skill).
- (inferred) Prefers concise, plain-language write-ups with numbers, CIs and paired comparisons. He reads results tables.
- (inferred) Doesn't like the agent overreaching: launching jobs, running MATLAB in the background, or proposing approaches he has ruled out.

## How he decides / what he values
- Pre-registration and frozen protocols before results (ModelRay DESIGN.md change-log, PREREG*.md frozen by hash; deviations go in RESULTS, never into the prereg).
- Fair baselines and controls: e.g. Classical + clear dwell as the fair RHC baseline, a delay-only control for the coverage gate, random-direction controls.
- Prefers experiments where the method could clearly lose (decisive tests). Will drop a direction when the data says null (Exp 2 gate, causal density, MERL).
- Decentralization is a core value in the MAS work (no hubs or leaders).
- Learning from environment reward over imitation: tabula-rasa GNN router, no supervised head start.
- Pivots often and decisively (GNN → evolution → ES → need-based → runtime). He expects the agent to update its plans and not drag old ones along.
- Spends cloud money only on bounded, high-value runs.

## Rules he has stated (quoted or close paraphrase, with source)
- "Never add Co-Authored-By: Claude / Generated-with lines to commits or PRs" (2026-10-09). He said Claude showing up as a GitHub contributor "looks unprofessional" (memory `no-claude-coauthor`).
- Any LLM inference goes to a JARVIS job. Don't run models locally (2026-10-22, `no-local-inference`).
- No supervised head start for the GNN router. Oracle/ILP only for evaluation, never as labels (2026-10-08, `supervised-is-warm-start`).
- Router must not form centralized hubs or leaders (2026-09-24, `no-centralized-hubs`).
- Don't launch MATLAB yourself; he runs it and sends output, unless he explicitly asks (`matlab-and-git-workflow`).
- Commit and push only when asked (`matlab-and-git-workflow`).
- No task tools that compute the answer, narrowed to: kernels allowed if labeled, generic, and reported apart from LLM-only arms (2026-10-27, `no-task-tools`).
- Joint RHC experiments use NumAgents = 2 only (`joint-rhc-two-agents-only`).
- Never train on held-out III-22, III-25, III-29 (or III-26) or the generated_eval seeds 200–219 (acl26 HANDOFF.md).
- "Keep everything local. Never push to GitHub" for the SILO work (acl26 HANDOFF.md). Code goes to JARVIS by scp, not GitHub.
- Regex refusal is "good enough" as ModelRay's construct, with no harm judging (2026-11-05, `objective-refusal-auditor-v1`).
- Not a hosted-only API for the SDK IP; it should be an on-cluster licensed container (`sdk-licensing-plan`).
- Don't build ModelRay company infrastructure yet; first prove white-box is useful (2026-11-09).

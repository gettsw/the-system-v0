=== FILE: manifest.md ===
# Manifest

Sources: Claude Code saved memory (per-project `memory/` folders), project CLAUDE.md/HANDOFF/ROADMAP files, git remotes and branches on disk, and the user's custom skills in `~/.claude/skills`. As of 2026-11-11. This is not taken from claude.ai chat Projects or their knowledge files; this agent couldn't see those (see the end of handoff.md).

| Project | Goal (one line) | Stack / tools | Status | Where it lives |
|---|---|---|---|---|
| GNS-MAS / SILO-BENCH routing | Make LLM multi-agent teams scale on SILO-BENCH via decentralized routing, need-based exchange, verification and a typed runtime | Python, vLLM gpt-oss-120b/20b on JARVIS (SLURM), PyTorch GNN, ES/CMA-ES, pytest | active (latest: runtime/tree-echo built 2026-11-04, job not launched) | `C:\Users\getts\projects\acl26-silo-bench` (branch verifier-engine), `...\acl26-silo-bench-gnn` (branch jarvis-vllm), `...\gns-mas-vnext`; JARVIS `~/silo-*`; origin = github.com/jwyjohn/acl26-silo-bench (someone else's public repo: never push IP there) |
| GNS SDK / licensing | Open-core simulator SDK; GNN router weights + verifiers licensed | n/a (plan only) | paused (no code) | memory `sdk-licensing-plan` |
| Cooperating RHC / Persistent Monitoring simulator | Multi-agent persistent-monitoring planners (Classical, Joint, DBS, Rollout RHC, CfC target model) and two papers | MATLAB R2024b, PyTorch (ncps CfC), git | active (paper reviews 2026-11-02 and 2026-11-09) | `C:\Cooperating RHC\GabeFansh-MultiAgentSimulator-eda0b07`; origin github.com/gettsw/MultiAgentSimulator; paper code github.com/shiran27/PersistentMonitoringSimulator |
| ModelRay | Open-source white-box safety regression gate for fine-tuned open-weight models (refusal direction etc.) | Python package `model_ray`, PyTorch, HF Transformers, LoRA, Qwen2.5 0.5B/1.5B/7B, JARVIS H100, AMD MI300X | active: the next goal is showing white-box beats black-box | `D:\ModelRay`; github.com/gettsw/ModelRay |
| Latent transfer ("Continuous Learning") | Test whether latent vectors (not text) can carry reasoning state or habits between calls | Python, PyTorch ROCm, Qwen2.5-1.5B, GSM8K, AMD Dev Cloud via `cloud.sh` | active (Exp 1–4 done, all null or inconclusive) | `D:\Continous Learning` |
| Relativistic Computation / RFSA-Sim | Replicated ledger/DAG protocol (RFSA) to production on a 3–7 node trusted cluster | Python reference sim + Rust daemon port, golden behavioural contract, Lean proofs (branch), soak tests on JARVIS | active (soak harness branch item4-soak) | `D:\Relativisitc Computation`; github.com/gettsw/relativistic-computation |
| Goose fork | Work on goose (open-source AI agent) agent loop / `state_machine`, branch `unroll-agent-loop` (inferred from MERGE_FIXES.md) | Rust (cargo), TypeScript desktop UI | unknown; uncommitted edits on main | `D:\Goose`; origin github.com/aaif-goose/goose |
| ArtCraft research tooling | Skills that make reports, LaTeX papers and figures with local "Craft" MCP apps (GridCraft, WordCraft, VectorCraft, PdfCraft, DeckCraft…) | MCP apps, Tectonic, skills | done / in use | `C:\Users\getts\research\` (`_notes\app-recipes.md`, `latex\templates`), skills `create-pdf`, `create-latex`, `make-figure`, `wordcraft-shared-doc` |
| KDE Craft checkout | (unclear) Clone of KDE's Craft package manager; Claude worktrees named artcraft-local-tools, pdf-image-tools-audit, wordcraft-shared-document | Python | unknown | `C:\Users\getts\projects\craft` (origin github.com/KDE/craft) |
| TV Reprogram | Debloat the home "Primary TV" with the CleanYourTV tool over network ADB | PowerShell, Python, ADB | paused (step-1 script written, not run) | `D:\TV Reprogram` (HANDOFF.md) |
| HW5 image processing | Course homework: C++ image processing (goldhill.512) | C++ | done (inferred) | `D:\Downloads\HW5-files` |
| Compute skills | How-to skills for JARVIS (SLURM) and AMD Developer Cloud | skills | in use | `~/.claude/skills/jarvis`, `~/.claude/skills/amd-devcloud` |

Related notes outside repos: Obsidian/notes folder `C:\CI Dynamics\` (GNS Research history notes, GNS-MAS proposal, SILO-BENCH.pdf, Neuro-Symbolic Verifier.pdf, "Draft 1 - Relativistic Computation.pdf").

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

=== FILE: build_style.md ===
# Build style

## Languages and frameworks, ranked by how much they show up
1. **Python**: SILO/GNS (PyTorch GNN, httpx/openai client, pydantic, pytest suites of 300–550 tests), ModelRay (pip package, CLI `model-ray`), latent-transfer scripts, RFSA reference sim.
2. **MATLAB R2024b**: persistent-monitoring simulator (classes under `Components/`, `.mlx` live scripts, `runTrial`, `runSweep`, `analyzeResults`). Command-window sweeps are preferred over Experiment Manager.
3. **Rust**: RFSA daemon port; the Goose fork.
4. **Shell/SLURM**: sbatch scripts, `cloud.sh` (AMD Dev Cloud via the DigitalOcean-v2-shaped API).
5. C++ (coursework), Lean (RFSA causal-set proofs branch), TypeScript (Goose desktop UI).
- LLMs served: vLLM with `openai/gpt-oss-120b` (default) and `gpt-oss-20b`. Fine-tune targets are Qwen2.5-Instruct 0.5B/1.5B/7B with LoRA.
- Figures and docs: local ArtCraft MCP apps (GridCraft charts, VectorCraft diagrams, WordCraft, PdfCraft) and Tectonic for LaTeX. Don't use matplotlib unless asked (`make-figure` skill).

## Repo conventions
- Heavy use of **git worktrees** (`.claude/worktrees/<topic>-<hash>`), one per topic or session. Branches are named `claude/<topic>`, plus `vnext/<topic>` in gns-mas-vnext.
- Lots of uncommitted work in progress in main checkouts. Commits are local and often unpushed, and he decides when to publish.
- Commit messages are plain and descriptive (e.g. "Soak harness: …", "item C write-up: …"), with no Claude attribution.
- Every session writes a `HANDOFF*.md` (state, rules, findings, open items, gotchas) and adds a line to `SESSIONS.md` (SILO repo).
- Experiments: a frozen protocol or prereg (`PREREG*.md`, `DESIGN.md` change-log, `PROTOCOL_V1.md` with a test that it is frozen), then `RESULTS*.md`. Results files and media (`*.mat`, `*.mp4`, raw call logs) are not committed. Raw LLM call logs are private.
- Golden or contract tests for behaviour (RFSA `contract_golden.json`, ModelRay `selftest`, determinism tests).
- Bundles are built with `git -c core.autocrlf=false archive` (CRLF breaks sbatch), with a SHA256 recorded and checked after upload.

## Compute
- **JARVIS (Stevens SLURM)**: Claude can't log in (password auth). Claude writes the sbatch scripts and tarball; the user scp's, submits and pastes back output. Two-job pattern: a GPU vLLM server job (`slurm_vllm_server.sh`, gpu-l40s 4×L40S TP=4, or gpu-h100/h100sxm TP=2) writes `host:port` to a private `HOST_FILE`; a CPU client job on `compute-hf` (venv `~/silo-train-env`) polls it. Unpack each bundle into a fresh `~/silo-<task>`. Queue waits run 1–2 days (low fair-share), so bundle all arms into one allocation, make jobs resumable, and get authorization before submit. `configs/config.yaml` (API key) is copied on-cluster and never bundled or printed.
- **AMD Developer Cloud MI300X**: $100 credit as of 2026-10-08. Claude CAN SSH in (key `~/.ssh/amd_devcloud`, root). As of 2026-11-11, `D:\Continous Learning\cloud.sh` (check/up/down/ls/run) creates, runs and destroys droplets through `api.devcloud.amd.com/v2`. Size `gpu-mi300x1-192gb-devcloud`, region atl1, PyTorch ROCm image, tag `claude-run`. Run one GPU process at a time (concurrent ones hang the VF). Don't hammer SSH (port 22 gets blocked).
- **Laptop (RTX 4070)**: offline replays, dry runs, MATLAB, analysis. Never LLM inference.
- Old: a shared Windows OpenSSH tunnel to vLLM dies past ~48 connections. Use `LLM_MAX_CONNECTIONS=24` per session when two are active.

## Recurring workflows
- When starting an experiment: write the design or prereg, get his sign-off, build the bundle and job, hand over the commands, wait, then verify the results archive (hashes, counts, finite losses) before any analysis.
- When a session ends: write a HANDOFF.md and save memory.
- Paper review: check out the paper's actual source repo (shiran27/PersistentMonitoringSimulator) into a scratch worktree, reproduce headless, and compare against the paper's numbers. Check time-step (dt) sensitivity.
- Reports and papers: `/create-pdf`, `/create-latex`, `/make-figure`. Never invent citations. Mark unsourced claims. Label synthetic data "SAMPLE DATA".

## Rejected / don't want
- Local LLM inference: a 20 h Ollama run was lost when he shut the laptop off.
- A hosted-only API for licensed IP: latency on customer GPU clusters.
- Supervised or imitation pretraining of the router: it caps the router at the teacher.
- Hub or star topologies, star-template training data.
- Brute-force fixes for text generation (e.g. 32k token caps for matrix serialization). Build the runtime instead (2026-10-27).
- Task-specific answer tools in benchmark arms.
- HarmBench classifier for the 7B ModelRay plan (removed 2026-11-07). Harm judging is out of scope for v1.
- Destructive git (`reset --hard`, `clean`, bare `stash`) on dirty trees.
- Building ModelRay product infrastructure before showing usefulness.
- The Logical-LNN half of the CfC idea and the parked sparse-mask/2:4 evolution plan were deliberately not built (scope too complex).

=== FILE: projects/gns-silo-bench.md ===
# GNS-MAS on SILO-BENCH (routing → need exchange → runtime)

## Goal and current state
Make teams of LLM agents (each holds one data shard and needs others' data) scale on SILO-BENCH Level III tasks as N grows (5→40+). Metrics: P (answer quality) and S (success). The current thesis (2026-10-27): "scaling is decided at communication/verification, not generation."
State as of 2026-11-04: the **GNS runtime** is built on branch `claude/gns-runtime`, commit abf27e6, local only, in worktree `gtd-dynamic-generation-review-f3c5ee`. It has:
- a typed declarative pull protocol (need-request/1, frozen)
- DataRef variant
- LocalView + tree echo
- G0/G2/G3 certificate gates

In an offline scripted audit the peak prompt stays flat at ~2.3k tokens for N=10/20/40, and answers are exact. The JARVIS job (need-summary / req / req-tree / req-tree-gate on III-21) is bundled as `C:\Users\getts\dataref-iii21-tree.tgz` and **not launched**. Source: memory `gns-runtime-reorientation`.

## Architecture summary
- Simulator: `src/simulation` (silo_agent, silo_runner, routing, exchange, need_requests, coverage, runtime_tree, ns_verifier), `eval_topology.py` and `eval_context_policy.py` arms, benchmarks III-21…III-30 plus generated variants.
- LLM: vLLM gpt-oss-120b on JARVIS. The client job runs on CPU nodes.
- History of approaches:
  - GNN router (gate + top-k, edge-biased attention, RLOO, then ES/CMA-ES)
  - evolution hybrid
  - verifier (NS verifier, +0.064 P on L3)
  - need-based routing
  - context policies and the model adapter (`full_proactive`)
  - coverage/delay gates
  - structured exchange
  - runtime
- Two code lineages: acl26 and gns-mas-vnext. vnext was squash-seeded from 72cafef with no shared history; merges need CRLF normalized first. There are four overlapping routing systems, and `a2a.py` is dead (audit 2026-10-20).

## Key decisions and reasons
- The router must be decentralized: hubs drop Level III success from 33% to 0% in SILO-BENCH.
- The router learns tabula rasa (2026-10-08). Oracle/ILP is for evaluation only.
- ES replaced RLOO for the router (2026-10-01). He believes evolutionary RL suits MAS better (unproven).
- The pivot to need-based routing (2026-10-05): agents get only what they need, and tokens per agent stay flat in N.
- Per-agent load is NOT the causal driver at ≤10k tokens (phase_pad v2, 2026-10-21: load ×4.5 → recall −0.020). Need structure matters, not prompt length.
- Delivery is the dominant loss at N≥10 (66–93%). Provenance-level "known" is inflated, so use value-level coverage (failure decomposition 2026-10-25).
- +cov gate ≈ +delay gate: the gain is waiting, not coverage info, and it costs ~30× tokens (2026-10-26).
- `full` stays the default context policy. `compiled` costs more through long tails.
- On 2026-10-27 he halted brute-force generation fixes and moved to the runtime with deterministic kernels. Kernel arms must be labeled and reported apart from LLM-only arms.

## Open tasks / known issues
- Launch the runtime III-21 job (needs his authorization). Open decisions are in `docs/GNS_RUNTIME.md` §5: runtime lineage (acl26 vs vnext), the need_n40 job, kernel library scope, certificates for III-27/28.
- Need-request pilot (80 runs, III-21 A/B/C/D) is frozen; bundle `b1308023a74f` is awaiting authorization; D6 needs review.
- Runtime-exchange branch (`vnext/exchange`, 6b6b0cb) awaits a run and a JARVIS seed check.
- III-23/24/26/28 fail even with all the data (an integration failure; routing won't fix it).
- III-21 strict P ignores extra values, so the scorer rewards spreading everything.
- III-30 at N=40 hits the 8192-token cap. 32k times out under load.
- Paused: the N=10 GNN RL resume from `checkpoints/router_v3it5_gain6.pt`.

## Files, links, people
- `C:\Users\getts\projects\acl26-silo-bench` (verifier-engine), `-gnn` (jarvis-vllm, `HANDOFF.md`, `EVOLUTION_PLAN.md`, `GNN_ES_PLAN.md`, `SESSIONS.md`), `C:\Users\getts\projects\gns-mas-vnext`.
- Handoffs: `HANDOFF_value_coverage_need_exchange.md`, `HANDOFF_need_based_routing.md`, `docs/GNS_RUNTIME.md`.
- Notes: `C:\CI Dynamics\GNS Research\` (Obsidian history), SILO-BENCH.pdf, Neuro-Symbolic Verifier.pdf, General GNS-MAS proposal.docx.
- Upstream: github.com/jwyjohn/acl26-silo-bench (public, not his). Never push.
- Target venue: ACL 2026 (inferred from the repo name).

=== FILE: projects/latent-transfer.md ===
# Latent transfer ("Continuous Learning")

## Goal and current state
Find out whether a latent channel (a steering vector, KV or task vector, or an in-context vector) can carry reasoning state or habits between calls better than text at a matched token budget. Model: Qwen2.5-1.5B-Instruct on GSM8K. Compute: AMD MI300X through `cloud.sh`.
Experiments so far (all done, all null or inconclusive):
- Exp 1, success direction: AUROC 0.552 < the confidence baseline 0.626. H1/H2 not supported.
- Exp 2, white-box damage gate across 9 LoRA runs + 3 merges: the cheap NLL baseline wins (ρ 0.74 vs −0.17).
- Exp 3, "Check:" habit via an 8-shot vector: inconclusive. The V0 gate failed because the 8-shot prefix doesn't induce the habit.
- Exp 4, instruction-vector transfer: G1 null-sweep gate failed (max 0.015).
The test set E (300 GSM8K test problems) is still untouched.

## Architecture
Flat scripts: `exp2.py`…`exp4.py`, `explore.py`, `diag2.py`, `run_amd*.sh`, `PREREG*.md` (frozen by hash), `RESULTS*.md`, `results*/`, and `cloud.sh` (check | up | down | ls | run BUNDLE RUNSCRIPT RESULT LOCALDIR). `run` destroys the droplet only after the results checksum verifies.

## Key decisions
- Each experiment is pre-registered. Deviations go in RESULTS, never in PREREG.
- Use the devcloud API (`api.devcloud.amd.com/v2`), not api.digitalocean.com: the latter returns 422 for devcloud sizes and cost 2 h on 2026-11-11.
- Don't overwrite the ROCm torch in the image with pip.

## Next steps (inferred: nothing is decided after Exp 4)
- Planned next carriers: KV-cache / task vectors, and a text-summary baseline (Exp 1 notes).
- Ask him whether to continue, given four nulls.

## Files
`D:\Continous Learning`. The token is in `~/.config/amdcloud/token`; never print it. Origin idea: Back et al. 2026 (arXiv 2603.01097), LoRA-as-memory handoff.

=== FILE: projects/minor-projects.md ===
# Smaller projects (little or no saved memory)

## goose fork — `D:\Goose`
- origin github.com/aaif-goose/goose. On main, with uncommitted edits to Justfile and ui/desktop (index.html, package.json, App.tsx).
- `MERGE_FIXES.md` says: repairing merge damage on branch `unroll-agent-loop` (a `state_machine/**` rewrite). Sections 1–3 are done, 4–5 open. `cargo test -p goose-cli` is green.
- (inferred) This may be related to "The System", the self-modifying desktop agent. Confirm with him.

## ArtCraft research tooling — `C:\Users\getts\research`
- Skills `/create-pdf`, `/create-latex`, `/make-figure`, `/wordcraft-shared-doc` drive local MCP apps (GridCraft, VectorCraft, WordCraft, PdfCraft, DeckCraft, DesignCraft, PhotoCraft).
- Recipes and known bugs are in `research\_notes\app-recipes.md`. LaTeX templates (ieee/acm) are in `research\latex\templates`. Tectonic is at `C:\Users\getts\tools\tectonic\tectonic.exe`.
- `C:\Users\getts\projects\craft` is a KDE Craft clone. Its Claude worktrees were named artcraft-local-tools-capabilities, pdf-image-tools-audit, wordcraft-shared-document. How it relates to ArtCraft is unclear.

## TV Reprogram — `D:\TV Reprogram`
- Disable ads and telemetry on the home "Primary TV" with github.com/Gathin23/cleanyourtv over ADB on port 5555, and install a clean launcher.
- The read-only step-1 script (`RUN-STEP-1.bat`) is written but has not been run. TV brand and model are unknown.
- Rule: get his OK before any change to the TV, and use the repo's own scripts, which keep a backup.

## HW5 — `D:\Downloads\HW5-files`
C++ image-processing homework (goldhill.512, imgproc.cpp). Submitted as HW5_William_Getts.pdf, so it looks finished (inferred).

## GNS SDK licensing (plan only)
Open-core simulator, with the GNN router weights and verifiers licensed. Delivery is an on-cluster licensed container with encrypted weights and per-customer watermarking; confidential computing is a premium tier. No hosted-only API. No code yet.

=== FILE: projects/modelray.md ===
# ModelRay

## Goal and current state
An open-source white-box safety regression gate. It compares a fine-tuned checkpoint to its base on the refusal direction, `refusal_token_prob`, SAE features and logit lens, and fails CI when they degrade. CLI: `model-ray sweep|audit|compare|selftest`, with exit codes 0 PASS / 1 FAIL / 3 INCONCLUSIVE / 2 usage error.
- v1 objective (2026-11-05): a tool that third-party auditors can use to replicate audits. Refusal judged by regex is the construct.
- Results so far:
  - 0.5B study
  - 1.5B confirmation on MI300X: gate v2 confirmed, sensitivity 28/30, specificity 16/16; commit 0885a22, pushed
  - 7B pre-registered test on JARVIS H100: confirmed barely, sensitivity 10/12, specificity 10/10, threshold 0.2678; RESULTS_7B.md is 3e16cb3
- Next goal (2026-11-09): show that white-box finds something a cheap black-box check (32 prompts + regex) can't. Don't build company infrastructure yet.

## Key decisions
- Thresholds don't transfer between model sizes, so calibrate per model: 1.5 × max ci_high of the known-good seed-0 checkpoints.
- Any rule change needs a dated DESIGN.md change-log entry before results are seen.
- 7B run 1 is invalid: NaNs from the cuDNN SDPA kernel on 192-token batches. Run 2 used eager attention.
- The latent-reasoning idea was spun off to its own project (`D:\Continous Learning`). ModelRay is only a library dependency of it.
- The pitch's claim 1 ("black-box gives a false PASS on bypass") contradicts the 0.5B data. Reword it as a diagnosis claim: erased vs bypassed.

## Open tasks / bugs
- Run 3 (efficient_attention SDPA rerun of identity_shift cells, 8 cells) is prepped, not submitted. Bundle `C:\Users\getts\modelray-7b-r3.tgz`, prereg f8f8c85.
- Open issue: eager vs SDPA training mismatch (~5% step-0 loss). The "bypassed at 7B" finding may be an artefact.
- HarmBench-classifier judge over 98 runs (39,200 replies) is bundled (`modelray-judge-all.tgz`) and awaiting JARVIS. The comparison analysis must be pre-registered first.
- White-box usefulness candidates (experiments/SURVEY_whitebox_2026-11.md):
  1. predict the refusal drop from training data using the existing 144 fine-tunes
  2. emergent-misalignment early warning
  3. trigger- or eval-gated regressions
  4. ADL/perplexity diff
  5. abliterated real-world checkpoints
- Positioning risk: arXiv 2607.01854 and TRACE 2610.07518 (unverified).
- Several branches are unmerged and unpushed: `claude/modelray-open-source-alternatives-2e7837`, `claude/7b-run-results-progress-49a6f2`, `claude/7b-run-rerun-decision-9e808d`.

## Files
`D:\ModelRay` (README, REVIEW.md, experiments/DESIGN.md, RESULTS_*.md, experiments/gold/spotcheck.py, calibrate.py, analyze.py). Use `D:\ModelRay\.venv\Scripts\python.exe` (the default python has no torch). github.com/gettsw/ModelRay. The user is the human labeller for spot checks: Claude labellers were blocked by usage safeguards.

=== FILE: projects/persistent-monitoring-rhc.md ===
# Cooperating RHC / persistent-monitoring simulator + papers

## Goal and current state
Agents patrol targets whose uncertainty R(t) grows, and the goal is to minimise uncertainty. Planners compared: Classical RHC, Joint RHC (2 agents only), DBS-RHC (belief-shared, intent packets, gossip), Rollout RHC (built by Claude), and a CfC learned target model. He also reviews two papers built on Shirantha Welikala's repo.
State:
- DBS-RHC work is all on local main `b5a681b`, not pushed (origin/main 8b7f598 diverged). Handoff: `.claude/worktrees/dbs-rhc-multi-agent-coordination-8ad624/HANDOFF.md`.
- Collab-ED-RHC paper v7 reviewed 2026-11-02.
- Simulator paper reviewed 2026-11-09 at shiran db4dcbf.

## Architecture
MATLAB classes in `Components/` (AgentPolicy/RHCPolicy, JointRHCPolicy, RolloutRHCPolicy, ScenarioModel), `runTrial`, `runSweep`/`analyzeResults`, `runMainUI`, `Experiments/`. CfC pipeline: `SensingRange` → `generateSensingData` CSV → `LNN/train_cfc.py --export LNN/cfc.json` → RolloutRHCPolicy predictor "cfc" → `liveCompare`.

## Key decisions
- The fair baseline is Classical + clear dwell. Most of Joint's earlier advantage was dwell behaviour, and cooperation adds only ~5–9%.
- Joint RHC uses NumAgents = 2 only.
- The CfC outputs Rdot and integrates it. Predicting R directly underfit.
- Always state the dwell mode in comparisons. The strongest baseline is event-driven Classical + dwellBox "rule".
- Push target: origin = github.com/gettsw/MultiAgentSimulator main. Upstream GabeFansh shares no history.

## Open tasks / known bugs
- Optimized "clear" still loses to "rule" (objective myopia). This is the top open DBS issue. Real register gossip (step 3) needs his OK.
- Rollout RHC "beats all" needs a multi-setting sweep. The /80 speed bug was fixed in Classical/Joint (uncommitted, worktree lnn-training-simulator-035f43); Divergent and Joint-N still use /80. The pre-fix ablation numbers are stale.
- The CfC MATLAB side was untested as of 2026-10-09.
- Collab paper findings:
  - dt 0.02 vs 0.01 flips the 3A-9T win over ED-RHC-α.
  - At dt 0.01 the best Collab mode beats both baselines in 4 of 20 rows, not 6.
  - 3A-Maze gives 130.48 vs the paper's 131.9.
- Simulator paper findings:
  - The `capHorizon` default (90c741c) breaks ED-ORHC Table III (up to +332%).
  - Abstract ED-ORHC agents have unbounded speed.
  - FO-0 has zero acceleration power.
  - Changing dt from 0.05 to 0.02 changes the results.
- Gotcha: `addpath(genpath(root))` picks up `.claude/worktrees` classes. Filter them out.

## Files, people
- `C:\Cooperating RHC\GabeFansh-MultiAgentSimulator-eda0b07`, `C:\Cooperating RHC\MultiAgentSimulator` (Gabriel's old e39ba06).
- Papers: `D:\Downloads\Collab_PerMon (N).pdf`, `D:\Downloads\ArXiv.tex`. Review: `ArXiv_review.md` in worktree 72-hour-run-complete-01813f.
- People: Shirantha Welikala (co-author; repo shiran27/PersistentMonitoringSimulator), Gabriel Fanshteyn (original simulator author, GabeFansh).

=== FILE: projects/rfsa-relativistic-computation.md ===
# Relativistic Computation / RFSA-Sim

No saved memory exists for this project. Everything below comes from git and ROADMAP.md on branch `claude/item4-soak`.

## Goal and current state
Take the RFSA replicated ledger/DAG protocol to "production on a small trusted cluster": 3–7 nodes on a private network (LAN/VPC/WireGuard), running for weeks without operator help. Decided with the user on 2026-10-30.
Roadmap items:
- PR #3: HMAC-SHA256 authentication
- item 8: seen-id growth (done)
- item 2: membership stalls (mostly done; a death mid-vote still hangs)
- item 3: `--retire` (done)
- item 7: finality / `final()` (done)
- item 1: encryption via a WireGuard deployment guide (done)
- item 5: latency, 369 ms p99 (done)
- item 4: 72-hour soak on real machines. **This is the gate.** The harness is done, and the JARVIS smoke run passed.
- item 6: gossip past 20 nodes (later)

## Architecture
- The Python reference replica `rfsa_sim/core` (node.py, ledger.py, prune.py, transport.Sim) is the spec.
- `rfsa_sim/contract.py` + `contract_golden.json` form a deterministic behavioural contract that any port must match.
- There is a Rust daemon port (worktree rust-daemon-hashing-contract).
- Every protocol change goes into both the Python reference and the Rust port, with a new contract scenario.
- Lean proofs of causal-set properties are on branch `claude/causal-sets-lean-proofs-7e5e8f`.

## Open tasks
Run the 72-hour soak on real hardware. Fix the mid-vote death hang. Merge the item branches (item1-deploy, item3-retire, item4-soak, item7-finality).

## Files
`D:\Relativisitc Computation` (the folder name is misspelled on disk), github.com/gettsw/relativistic-computation, `C:\CI Dynamics\Draft 1 - Relativistic Computaiton.pdf`.

=== FILE: memory_dump.md ===
# Memory dump

Every saved Claude Code memory file, verbatim, grouped by project (body text unchanged; session ids stripped). Global user CLAUDE.md is included at the end.

## GNS-MAS / SILO-BENCH

### Index (MEMORY.md)
- [GNN training plan](gnn-training-plan.md) — held-out cases, reward history, run plan, log red flags
- [No destructive git on dirty tree](no-destructive-git-on-dirty-tree.md) — never reset --hard/clean here; wiped user's uncommitted work once
- [GNN v2 design](gnn-v2-design.md) — agreed rework: gate+top-k, edge-biased attention, structural+MiniLM, supervised-then-iterate
- [Shared worktree with verifier session](shared-worktree-sessions.md) — verifier session switched shared folder to verifier-engine; plan: separate GNN worktree on jarvis-vllm
- [N=5 grid results](n5-grid-results.md) — advise wins, random≈gossip at N=5, imitation learns habits; bar = advise:random 0.452
- [Shared tunnel connection cap](shared-tunnel-connection-cap.md) — vLLM SSH tunnel dies >~48 total connections; LLM_MAX_CONNECTIONS=24 per session when both active
- [No centralized hubs](no-centralized-hubs.md) — router must stay decentralized; no star-template training data, inbound cap on suggestions
- [No supervised head start](supervised-is-warm-start.md) — 2026-10-08: router learns tabula rasa; oracle/ILP only for eval, never labels
- [RL reward choices](rl-reward-choices.md) — user's workshop picks: P+S, coverage shaping, msg+round cost, per-agent RLOO K=4, Level III, N=5
- [GNN N=10 paused](gnn-n10-paused.md) — 2026-09-25 pause (relocation): resume N=10 RL from router_v3it5_gain6.pt; key findings
- [Evolution hybrid design](evolution-hybrid-design.md) — 2026-09-29 pivot: GNN+verifier as evolutionary population of small LLMs; EVOLUTION_PLAN.md
- [Sparse mask evolution branch](sparse-mask-evolution-branch.md) — 2:4 mask evo + context-crossover children + LNN death; open issues
- [GNN ES training](gnn-es-training.md) — ES replaces RLOO for router; train_router_es.py on game-theoretic branch
- [MERL dense-signal check](merl-dense-signal-check.md) — 2026-10-02: no dense signal predicts P/S (coverage saturated 0.98); MERL not viable as-is
- [Phase 0 hybrid at N=10](phase0-hybrid-n10.md) — 2026-10-02 restart: evolution parked, Phase 0 hybrid arms at N=10, jobs/phase0_n10.sh
- [AMD developer credit](amd-developer-credit.md) — 2026-10-08: $100 AMD Dev Cloud (MI300X) credit, ~50 GPU-hrs; use for bounded runs
- [Need-based reorientation](need-based-reorientation.md) — 2026-10-05: goal = agents get only what they need, tokens/agent flat vs N; HANDOFF_need_based_routing.md
- [Verifier L3 eval](verifier-l3-eval.md) — 2026-10-09: +0.064 P over all 10 L3 tasks (p=0.0006); literal_eval scorer fix; rounding breaks consensus check + float scoring
- [Capacity view of scaling](capacity-view-of-scaling.md) — 2026-10-09: P tracks per-agent load (r -0.72) not N/coverage; padding test proposed
- [Planner + model router](planner-plus-model-router.md) — 2026-10-09 agreed reorientation, gated on phase_pad; build order planner→learned estimates→CfC/LNN only if needed
- [No Claude co-author](no-claude-coauthor.md) — never add Co-Authored-By: Claude / Generated-with lines to commits or PRs
- [SDK licensing plan](sdk-licensing-plan.md) — open-core sim + licensed GNN/verifier; on-cluster delivery, no hosted-only API
- [PM/RHC architecture](pm-rhc-architecture.md) — 2026-10-09 design: persistent-monitoring dynamics + per-node route/evict/submit RHC; waiting on oracle run
- [vNext audit target](vnext-runtime-audit-target.md) — vNext worktree is stale upstream; build on claude/verifier-gnn-combined
- [Context policy result](context-policy-job-a-result.md) — compiled costs more via longer tails; peer-inventory line fixed misbelief but not the tail (asking submitted peers is); full stays default
- [Model adapter boundary](model-adapter-boundary.md) — adapter refactor + full_proactive; 6 JARVIS pairs: proactive fixes unread-data submissions (S 0->0.73), fewer calls, not fewer decode tokens
- [Need-routing audit](need-routing-audit-2026-10-13.md) — worktree gns-mas-vnext-need-audit; s210-219 N=10 already used, not held-out
- [Runtime exchange branch](runtime-exchange-branch.md) — 2026-10-19 vnext/exchange worktree: registry + push/pull, frozen protocol committed 6b6b0cb (local); awaits run authorization + JARVIS seed check
- [Use-event signal check](use-event-signal-check.md) — 2026-10-20: value-in-answer credit works on III-21 only (r +0.62); null on III-23, negative on held-out III-29, III-22/25 at P=0 floor
- [Architecture audit](architecture-audit-2026-10-20.md) — 2026-10-20: bottleneck = integration + measurement; phase_pad never ran (parse crash); III-21 P ignores extra values
- [Offline rescore](offline-rescore-2026-10-20.md) — 2026-10-20: 3649 runs; extras loophole unexploited (rho 0.991); dup-fix → need-oracle flat in N (0.96/0.96/0.94); next = phase_pad rerun
- [phase_pad v2](phase-pad-v2-readiness.md) — 2026-10-21 RESULT: load x4.5 (2.1k→9.7k tok) → recall −0.020 [−0.049,+0.006], no substantial load effect; need structure, not length, is the driver
- [Need-request pilot](need-request-pilot.md) — 2026-10-21: silo-safe request protocol (vnext/need-requests, uncommitted); 80-run III-21 A/B/C/D pilot frozen, bundle b1308023a74f awaiting authorization; D6 needs review
- [No local inference](no-local-inference.md) — LLM runs go to JARVIS jobs; stop and report progress, never run models on the laptop
- [Causal density check](causal-density-check.md) — 2026-10-24: provenance causal density from traces ~0 corr with P within cells; not a useful regularizer as-is
- [Routing done A/B + N sweep](routing-done-ab-result.md) — 2026-10-23: gate blocks ~5% at every N; delivered chars ~N^1.9 in both arms (not sub-quadratic); P ~0
- [topk sweep result](topk-sweep-result.md) — 2026-10-25: topk ties random on P (-0.013), chars exponent ~1.47 both, topk makes hubs (in-max 36 at N=40)
- [Failure decomposition (topk traces)](failure-decomp-topk.md) — 2026-10-25: delivery is the loss at N>=10 (66-93%); provenance 'known' inflated; III-23/24/26/28 fail even with all data
- [Coverage gate branch](cov-gate-branch.md) — committed 2026-10-27 (local); 2026-10-26: +cov ≈ +delay at N=20 (cov-delay −0.03/+0.04); the gain (+0.09..0.16 P) is waiting, not coverage info; delay cheaper than cov but ~30x baseline prompt tokens
- [Structured exchange job](need-struct-job.md) — 2026-10-27: III-21 need-summary ~96% of ceiling to N=40; III-30 N=40 failure = 8192-token cap (2/3 of replies cut mid-reasoning, no action); broadcast doesn't help; 32k times out under load
- [No task tools](no-task-tools.md) — narrowed 2026-10-27: kernels OK if labeled, generic, reported apart from LLM-only arms
- [GNS runtime reorientation](gns-runtime-reorientation.md) — 2026-10-27 pivot to runtime; 11-04 tree runtime + G3 built, prompts flat offline; job/bundle not launched

### amd-developer-credit
---
name: amd-developer-credit
description: "2026-10-08 user joined AMD Developer Program with $100 compute credit (AMD Developer Cloud, MI300X/ROCm)"
metadata:
  type: project
---

As of 2026-10-08 the user has $100 of AMD Developer Cloud credit through the AMD Developer Program. That's about 50 MI300X GPU-hours at ~$2/hr (check the console for the current rate).

**Why:** It's extra compute on top of the shared vLLM tunnel, which drops once it passes ~48 connections ([[shared-tunnel-connection-cap]]).
**How to apply:** Spend it on a bounded, high-value run, such as a dedicated vLLM endpoint for an eval sweep. Don't use it for open-ended exploration. Stop instances when idle because billing runs while they're up.

### architecture-audit-2026-10-20
---
name: architecture-audit-2026-10-20
description: "2026-10-20 audit: bottleneck = agent integration under context load + measurement; phase_pad never ran; III-21 P ignores extra values (verified)"
metadata:
  type: project
---

Full audit, done 2026-10-20 at the user's request.

New facts found:
- **phase_pad never ran.** The pad100/700/2500 arms crashed in parse_condition: the eval_topology.py deployed on JARVIS didn't know need-oracle-pad<K>. Only pad0 finished (need-oracle P 0.875, 40 runs). See results/phase_pad in worktree remove-github-contributor-2b8b35. The capacity causal test that gates [[planner-plus-model-router]] and [[pm-rhc-architecture]] is still open.
- **III-21 strict P ignores extra values (verified).** On generated_eval III-21_n10_s200, exact slices score P 0.895 / S 1.0. Every agent submitting the whole global sorted list scores the same P 0.895, with S 0. So P rewards spreading everything, which runs against [[need-based-reorientation]]. The perfect-answer ceiling is below 1 because duplicates map to one position.
- **Two lineages.** gns-mas-vnext was squash-seeded from acl26 72cafef and shares no git history with it. pm_rhc.py exists only in the acl26 lineage; context/model_adapter/exchange/calllog exist only in vnext. Merging conflicts in routing.py, silo_agent.py, silo_runner.py and ns_verifier.py.
- **Four overlapping routing systems:** RoutingController, NeedController, ExchangeController, and the legacy GNNTopologyHook (MD5 features). a2a.py is dead code.

Verdict: the bottleneck is each agent integrating what's in its context (53% of needed values are delivered, 12% integrated), plus measurement. The GNN optimizes who-talks-to-whom, which moves P little.

What works: deterministic one-step need delivery (A1/A4 on III-21: P 0.87/0.80/0.61 at N=10/20/50), full_proactive (S 0 -> 0.6-0.73), and the NS verifier (+0.064 P on L3).

**Why:** the user asked for bottleneck, strengths and weaknesses of the whole system.
**How to apply:** fix measurement (re-score from the stored answers) and rerun phase_pad before new routing work. Related: [[use-event-signal-check]], [[capacity-view-of-scaling]].

### capacity-view-of-scaling
---
name: capacity-view-of-scaling
description: "2026-10-09 PM-lens finding: SILO P tracks per-agent load (r -0.72) not N (-0.13) or coverage (-0.33); padding test proposed"
metadata:
  type: project
---

2026-10-09: the user asked whether the CfC/persistent-monitoring work ([[need-based-reorientation]]) reframes the scaling problem. Reframing: each agent is a target with demand rate A and integration capacity B. Scaling fails when demand per agent exceeds B. Routing only redistributes load.

Check run on 659 runs (phase_a, a3b, a3c, phase0d masked-why-wait), per-run Pearson with tree arms excluded:
- P vs log peak prompt tokens/agent: r = -0.72
- P vs log N: -0.13
- P vs coverage at submit: -0.33 (negative)

Arm means are in load_points.json in the cfc-ode worktree (untracked).

Where the curves don't collapse:
- Tree arms have low load (~2.5k tokens) and P ≈ 0. They are harness-broken; including them gives r = -0.34.
- advise-why on III-21 drops from P 0.16 to 0.06 between N=10 and 20 while its load falls.

Refined hypothesis: capacity = integration steps per agent (load × procedural depth).

**Why:** the user wanted to know whether the problem is understood in a new light; claims aren't the goal.

**How to apply:** Confound: low load always comes with the correct need. Proposed decisive test: need-oracle on III-21 with irrelevant prompt padding at 2k/5k/10k tokens. If P falls on the curve, capacity is causal. Not run yet.

2026-10-09 built: branch claude/need-oracle-padding (62781a8, from phase-a d18cd8f) in worktree cfc-ode-multiagent-learning-9428cc. need-oracle-pad<K> + jobs/phase_pad.sh (pad 0/100/700/2500, III-21 N=10, 40 runs/arm) -> results/phase_pad. Tarball C:\Users\getts\phase_pad.tgz (files since 390ad08; overwrites silo_runner/metrics/eval_topology with phase-a versions on ~/silo-gnn). Handed to the user to scp + launch on H100.

2026-10-21 UPDATE: the padding test finally ran (phase_pad v2, see [[phase-pad-v2-readiness]]). Raising load x4.5 with need held fixed cost only -0.020 recall (CI within 0.05). Per-agent load is NOT the causal driver at <=10k tokens. The r -0.72 above was confounded with need derivation.

### causal-density-check
---
name: causal-density-check
description: "2026-10-24: provenance-based causal density over 2,601 past traces does not track P (within-cell r ~0 at N=10, agent-level ~0)"
metadata:
  type: project
---

2026-10-24: analysis/causal_density.py (worktree causal-density-gnn-e19d99, uncommitted) computes provenance-based causal density from `delivered` + `known` in *.traces.jsonl (traces live in acl26-silo-bench-gnn/results; pass --results). Effective edge = delivery that adds an origin the sender held; "unique" = no co-deliverer that round held it.

Result: pair density (C_pairs/C_unique) has within-cell r with P of ~0 at N=5/10/20; agent-level inbound unique transfers vs q_j r ~0. Only C_rate/frac_eff show +0.26-0.38 at N=5/20, likely confounded with episode length (rate divides by rounds). Across conditions density doesn't order P: `free` is densest but below advise:random at N=5.

**Why:** user asked whether causal density (GNN topology regularizer idea) is measurable and useful. Same story as coverage in [[merl-dense-signal-check]] and [[offline-rescore-2026-10-20]]: provenance flow is not the bottleneck; [[use-event-signal-check]] (content used in answer) is the per-edge signal that did predict P.

**How to apply:** don't add causal density as a reward/regularizer without a content-level version; provenance-level density is a null.

### context-policy-job-a-result
---
name: context-policy-job-a-result
description: compiled context policy costs more than full on real gpt-oss-120b via longer tails; reproduced on fresh seeds; mechanism = agents misread what data they hold
metadata:
  type: project
---

Repo `C:\Users\getts\projects\gns-mas-vnext`, branch vnext/context-policy. Job A (2026-10-12, seeds 42-44) and the fresh-seed Phase 2 (job 1201445, III-23_n5, seeds 101-106, commit aa00044, report `results/context_policy/real/fresh_seed_validation/report.md`, commit a45fc41) agree: `compiled` runs longer than `full` (fresh: 20.8 vs 8.7 rounds, 54 vs 31 calls, 2 cap hits vs 0); quality inconclusive (S 0.30 vs 0.20, noisy). Per-call prompts are smaller, the cost is the tail.

Mechanism with direct log evidence (call logging): under compiled, agents' reasoning names a peer's data as missing while it is in the prompt in 38% of such calls vs 16% (all 6 pairs; hand audit says the gap is larger). They keep asking peers that already submitted. Rejected by the data: not noticing silence, waiting for more data, repeat-collapsing on the recipient side (so the 5-arm ablation in diagnosis.md is outdated).

**Why:** no efficiency claim without measured gains; `full` stays default.
**How to apply:** next step proposed (not authorized): compiled + ids-only "data received so far from agents: ..." line vs compiled, 6 new seeds. Raw call logs are private (handoff folder), never commit them. See [[vnext-runtime-audit-target]].

## Peer-inventory intervention (2026-10-12, commit ec35067, results commit in gns-mas-vnext)
compiled_inventory (one code-generated line "Peers whose data you have received: ...") vs compiled, III-23_n5, seeds 201-206, client on PC over SSH tunnel to server job 1201447 (g001). Misbelief fell (calls naming a missing peer whose data was in the prompt 30% -> 16%; requests for held data 17 -> 3) but cost was NOT reliably reduced (calls 73.7 -> 68.7, 3 pairs up / 3 down, rounds unchanged) and total requests rose 45 -> 65 per run, mostly to peers that had already submitted. Quality not degraded (0.10 -> 0.27, noise). Conclusion: data-tracking is real but not the dominant tail driver; agents asking already-submitted peers is. Proposed (not run): add an ids-only "peers who have submitted" line. Report: results/context_policy/real/peer_inventory_intervention/report.md.

### cov-gate-branch
---
name: cov-gate-branch
description: 2026-10-25 value-level knowledge + coverage submit gate ('+cov'), branch claude/value-coverage-gate; III-21/30 job awaiting authorization
metadata:
  type: project
---

Worktree routing-frontier-handoff-0b6518, branch claude/value-coverage-gate (from claude/pm-rhc-architecture 87acf65). The pm-rhc worktree's uncommitted state (= what JARVIS ~/silo-gnn runs) is copied in and STAGED; my changes are unstaged, so `git diff` shows only them. Nothing committed.

- src/simulation/coverage.py: contribution per agent (raw shard numbers; III-30 = its C rows), value-level `known`, gate until round 30 (--cov-until).
- '+cov' condition suffix in eval_topology; topk router patched in (same patch as JARVIS).
- jobs/cov_gate.sh: III-21/III-30 x N10/20 x {advise:random, advise:random+cov, advise:topk+cov} x 5 seeds = 60 runs. Bundle C:\Users\getts\cov-gate.tgz (sha ad9baa9d8f265b66).
- Offline: full suite 341 passed (needs benchmarks/generated* fixtures), canned-LLM dry runs clean.

**Why:** [[failure-decomp-topk]] showed premature submission on missing data is the loss at N>=10.
**How to apply:** check JARVIS file hashes match base before unpacking; text-number matching inflates coverage for small values.

**RESULT 2026-10-26** (results in acl26-silo-bench-gnn/results/cov_gate, 60/60 ok):
- Pooled paired P vs advise:random: N=20 random+cov +0.135 +-0.107 (9/10 wins), topk+cov +0.126 +-0.098 (8/10); N=10 null (-0.028, +0.040). III-21 N=20 +0.062 +-0.019.
- Mechanism is mostly delay, not coverage: at N=20, 54-81% of +cov submissions came at round >=30 (gate expired) still not covered; only 8% (random) / 18% (topk) of agents ever held all data. Gated agents that never submit: 11-39%.
- Cost: III-21 N=20 runs 6-14 rounds -> 50, prompt peak 5.6k -> 40k tok; sent msgs ~2x.
- topk+cov delivers more than random+cov (all-data 68 vs 53% N=10, 18 vs 8% N=20) but same P.
- Untested confound: a delay-only gate (no coverage, no missing-agent names) may give the same gain.
- 2026-10-26: '+delay' control built (coverage.delay_gate: rejects before --cov-until, fixed message, provenance knowledge). jobs/delay_gate.sh = advise:{random,topk}+delay x III-21/30 N=20 x 5 seeds = 20 runs appended to results/cov_gate/cov_gate.jsonl; bundle C:\Users\getts\delay-gate.tgz (sha 19fdc856808a8cb1). Awaiting authorization.

**DELAY CONTROL RESULT 2026-10-26** (job 1214800, 20 runs, 80/80 ok in results/cov_gate):
- cov - delay paired P at N=20: random -0.029 +-0.152 (6/10), topk +0.037 +-0.103 (6/10). Coverage information adds nothing detectable; waiting is the effect.
- delay - baseline: random +0.164 +-0.180 (8/10), topk +0.088 +-0.060 (8/10); III-21 5/5 in both.
- delay is cheaper than cov: III-21 msgs 1904 vs 2909, per-agent prompt tokens ~286k vs 537k; never-submitted 16% vs 32% (random), 8% vs 20% (topk).
- vs baseline the cost is still large: III-21 rounds 9.6 -> ~42, per-agent prompt tokens ~30x.
- Caveat: delay arms ran on a different day/node (h100sxm) than baseline/+cov (h200); n=10 pairs.
- 2026-10-27 COMMITTED (local, not pushed) on claude/value-coverage-gate: b77b576 = pm-rhc worktree snapshot, 8d472d3 = this branch's work (+benchmarks_scale), then a handoff fix. benchmarks/generated* left untracked. Handoff: HANDOFF_value_coverage_need_exchange.md.

### evolution-hybrid-design
---
name: evolution-hybrid-design
description: 2026-09-29 new direction — merge GNN + verifier into evolutionary population of small LLMs; plan in EVOLUTION_PLAN.md
metadata:
  type: project
---

User's new direction (2026-09-29), revised same day to a TWO-LOOP design: inner loop = N agents from a small-LLM pool reason together on a SILO-BENCH episode (GNN-grown enforced mask, strict verified note, verifier removes out-of-bounds agents); outer loop = LoRA-adapter evolution under TEAM fitness (GNN picks pairs + merge params, TIES/DARE/Slerp, 3 children, mutation on merge params, verifier admission gate, children born into live episodes). GNN update (PPO vs supervised) undecided.

Full plan: EVOLUTION_PLAN.md in the acl26-silo-bench-gnn worktree (jarvis-vllm).

**Why:** coordination, not delivery, is the bottleneck (hybrid N=5 knew 96% shards, S=0.14 vs advise 0.42).
**How to apply:** Phase 0 gate first — current hybrid is as bad as filter; test verified-format hybrid note before building evolution. Open questions Q1–Q5 in the plan (LoRA inheritance? shard inheritance? verifier scope?). Related: [[no-centralized-hubs]], [[gnn-n10-paused]].

### failure-decomp-topk
---
name: failure-decomp-topk
description: "2026-10-25 offline failure decomposition of topk sweep traces: delivery is the dominant loss at N>=10; provenance \"known\" is inflated"
metadata:
  type: project
---

Script failure_decomp.py (worktree routing-frontier-handoff-0b6518), report failure_decomp_topk.md. Data: [[topk-sweep-result]] traces.

- Provenance `known` (silo_agent state, used by gossip/topk ranking and the patience note) counts a shard as known after ANY value from it. Inflated: III-21 N=20 "full" agents held 47% of values, 0% held every shard.
- Measured by received values on raw-data tasks (III-21/23/24/26/28/30; III-30 counted by computed C rows, raw-shard matching there was a collision artifact): agents with all data 74/34/8/1% at N=5/10/20/40. Loss share from missing data 28/69/86/93%. Almost everyone still submits (never-submitted <=5%): premature submission.
- With all data, q lenient ~0.28-0.30 (N<=20). Two groups: III-21 sort and III-30 matmul do well with data (0.45-0.79); III-23/24/26/28 near 0 even with all data (integration failure; no router fixes that).
- III-21 need recall (own output range received): random 0.94/0.57/0.32/0.20, topk 0.81/0.70/0.41/0.26. topk delivers more but not enough to complete.
- Lenient scoring adds +0.07 P at N=5 only (III-24/25/27); III-25..28 zeros are mostly real.

**Why:** reverses the earlier read that routing is not the bottleneck (that read used the inflated provenance label).
**How to apply:** fix knowledge to value-level coverage before trusting any deficit router or patience gate; target III-21/III-30 for delivery work; III-23/24/26/28 need compute/verifier help, not routing.

### gnn-es-training
---
name: gnn-es-training
description: 2026-10-01 user chose evolution strategies to REPLACE RLOO for the GNN router; GNN-only scope; code on branch claude/game-theoretic-sparse-reasoning-a45f43
metadata:
  type: project
---

2026-10-01: user simplified scope to GNN only (no weight masks, no verifier, agents frozen) and chose ES to replace RLOO; they believe evolutionary RL suits a MAS better (unproven here; Phase 1 of GNN_ES_PLAN.md tests ES vs RLOO at equal episode budget).

Code: `train_router_es.py` + `tests/test_es.py` on branch `claude/game-theoretic-sparse-reasoning-a45f43`, which merged `jarvis-vllm` (commit 0be33c8). Checkpoints copied in untracked. Defaults sigma=0.01, alpha=0.0002 (router weight rms ~0.1; gives step/|theta| ~1.5%).

2026-10-02: user cancelled the 120b ES run and pivoted the GNN work to gpt-oss-20b (1 L40S; I had wrongly kept 20b scoped to the parked mask plan). New run = CMA-ES on heads only (gate + edge_score, 71 weights), jobs/es_n10_20b.sh (oracle gate q>=0.5, 20b baselines, eval). Needs a `vllm20b` profile in JARVIS configs/config.yaml. Commit df84db1.

**Why:** sparse-mask/LNN design got too complex; user wanted the original GNN-mask idea trained by evolution.
**How to apply:** this session's worktree hook blocks writes to acl26-silo-bench-gnn; work on the branch instead. Sparse-mask plan parked: [[sparse-mask-evolution-branch]]. Reward weights from [[rl-reward-choices]].

### gnn-n10-paused
---
name: gnn-n10-paused
description: GNN router state when training paused 2026-09-25 (user relocating) — what to resume and the key findings behind it
metadata:
  type: project
---

Paused 2026-09-25 ~1:45 PM: user is relocating and can't keep the PC running long jobs. No N=10 iteration completed (results/rl_n10_v1 has only config.json + empty iter1 files).

Resume point: N=10 RL from `checkpoints/router_v3it5_gain6.pt` (v3 iter5 + 6 on edge_score weight[0,0], the gain feature), same flags as v3 (k=3, lr 1e-3, --loss-norm mean, --explain, 24 connections), cases = benchmarks/III-2{1,3}_n10.json + benchmarks/generated/III-2{1,3}_n10_s*.json; eval set benchmarks/generated_eval/ (seeds 200-219, never train). rl_v3 stopped at iter 5, resumable.

Key findings (offline replay): no checkpoint aimed targets (share on targets lacking sender's data = random, 0.50); v2 iter20 learned an agent-ID preference (bad for transfer); at N=5 99% of the RLOO signal is P+S (coverage saturated 0.99, costs ~0), so N=5 can't teach routing. The explanatory notes gave v3 +0.15 P over v2 on the same draws.

**Why:** lets a later session pick up without re-deriving. **How to apply:** before resuming, consider running the trainer on JARVIS itself (api_base http://<node>:8000/v1) so the PC and tunnel aren't needed. Related: [[rl-reward-choices]], [[shared-tunnel-connection-cap]].

Deferred (user, 2026-09-25): tune --k-targets later. Planned sweep: advise-why:random, k in {2,3,4,6}, N=10, 20 eval instances (generated_eval seeds 200-219) x1 seed, via eval_topology.py --k; pick k where P plateaus (watch context load, follow rate). Spread model: k need not scale with N; knee around k=3-4.

Moved to JARVIS 2026-09-25 ~2:10 PM: repo bundle unpacked at ~/silo-gnn (copied via scp, no GitHub). Jobs: vLLM server 1184572 (slurm_vllm_server.sh, gpu-l40s), trainer 1184573 (jobs/cpu_train.sh jobs/train_rl_n10.sh on compute-hf, venv ~/silo-train-env, finds server via ~/vllm_host.txt). Log: ~/silo-gnn/results/rl_n10_v1/train.log. Resume = resubmit the same sbatch. Local worktree copy of results is stale until scp'd back.

2026-09-25 afternoon: trainer resubmitted as 1184575 with --dependency=after:1184572 (server). GPU queue full (g101/g201 drained; dbaizhig ~20 x 2-GPU jobs ahead; user fairshare 0.12), expected server start 1-2 days. User chose to wait (no hosted API, no 2-GPU backup). Server job keeps GPUs 24h even after training ends: scancel it when train.log shows "final router".

2026-09-25 ~3:50 PM: built jobs/n10_campaign.sh (k sweep on train s100-s119 -> analysis/pick_k.py -> RL at k, 4 cases x 4 rollouts/iter, 16 parallel, 160 conns; eval free/random/init/final on generated_eval 40 instances -> results/n10_campaign/summary.txt; scancels server at the end). Replaces jobs/train_rl_n10.sh. Launch: sbatch --dependency=after:<server> jobs/cpu_train.sh jobs/n10_campaign.sh. vLLM KV cache 2.39M tokens; N=5 peak used 6.3% at 31 reqs.
Campaign submitted as job 1184592 (router-train, depends on server 1184572); both have SLURM email BEGIN,END,FAIL to the user.
2026-09-25 22:10: campaign running (server g102, campaign c103, started 19:07). k sweep 140/160 done, 16 errors = APITimeoutError (uncapped gpt-oss replies > 180s timeout). Fixed in src/utils/llm.py (max_tokens 8192, 600s timeout, commit cd81dc7); user to scp llm.py to JARVIS before training phase starts. Sweep itself ran with the old client (only used to pick k). Server underused (~30 reqs, 8% KV).

RESULTS (2026-09-26, campaign done, copied to results/n10_campaign + results/rl_n10_v1): k sweep flat (P 0.19-0.21), user chose k=3. Eval on 40 unseen N=10 instances: free 0.126, random 0.147, head start (router_v3it5_gain6) 0.162, RL-trained iter20 0.140 (worse than head start on 25/39). RL cut speak 0.53->0.40, aiming unchanged (0.68->0.65 on useful targets). Within-group corr(reward, msgs) -0.16 -> spurious credit pushes gate toward silence. Agents WITH all data score only ~0.16 -> N=10 III-21/23 is reasoning-limited; head start already gives 98% full coverage. Best N=10 router = head start.
2026-09-26: built oracle_eval.py + jobs/oracle.sh (one agent gets all shards; N=5/10/20, 40 eval instances x 2 seeds -> results/oracle/summary.txt). Decides model-limited vs exchange-limited. Metric quirk: Level III LIS metric maps duplicate values to one position, so a PERFECT III-21 answer scores ~0.95 (N=5), 0.90 (N=10), 0.83 (N=20).

WHY RL HURT (deep dive 2026-09-26, rl_n10_v1): (1) aiming credit uncorrelated with useful aiming (corr +0.006 over 14k target pieces); receiving useful data raises coverage (+0.34) but not q (+0.07). (2) Gradients ~noise: cosine between two halves of an iteration's instances mean +0.11 (range -0.26..+0.41). (3) Gate's own credit pushed slightly TOWARD speaking (+0.10), no reward term sign-consistent. (4) Adam steps ~500x the raw-gradient effect; momentum-only steps explain -0.130 of the -0.136 speak change -> speak "collapse" = momentum-smoothed random walk (down iters 2-10, up 15-20), not learning. Remedies if RL resumes: anchor to head start (KL/trust region) or SGD/low lr, routing-visible reward (coverage timing), or freeze gate; but first see oracle result.

ORACLE RESULT (2026-09-27, results/oracle): one agent with all shards scores N=5 III-21 0.949 (=perfect ceiling) / III-23 0.975; N=10 0.849 (ceiling 0.904) / 0.875; N=20 0.390 (sorting 400 numbers breaks) / 0.925. Multi-agent N=10 best router 0.14-0.19. CORRECTS the earlier "reasoning ceiling" claim: the model can do it; ~0.7 is lost in exchange/aggregation. "Had all data" (provenance in `known`) does not mean raw data arrived. Next proposed: content audit (log message contents, measure verbatim dataset coverage per agent at submit).
2026-09-27: GNN share of head-start target scores 81% but GNN aiming ~random (0.51 vs 0.53); aiming comes from the hand-set edge_score weight; speak gate is the GNN's only contribution. Built GNN ablation (jobs/gnn_ablation.sh; router@p = fixed speak prob): random all-speak vs random@0.5 vs gossip@0.5 vs head start, 40 N=10 eval instances x 2 seeds -> results/n10_campaign/ablation_summary.txt. RESULT (320 runs, 0 errors): random all-speak P 0.156, random@0.5 0.119 (57% early), gossip@0.5 0.123 (52% early), head start 0.179 (4% early). Head start - gossip@0.5 +0.056 [+0.031,+0.080]; coin-flip gate hurts; aiming alone does not raise P; the GNN speak gate (~83% speak, adaptive) is its real contribution. Open: random@0.83 arm. Handoff doc: HANDOFF.md + SESSIONS.md in the worktree.

### gnn-training-plan
---
name: gnn-training-plan
description: "GNN topology router training plan, held-out eval cases, reward design history, and log-reading red flags"
metadata:
  type: project
---

Role: monitor/analyze GNNEdgeMaskRouter training runs (train_gnn.py online REINFORCE on S score; train_gnn_offline.py on direction_score proxy) and advise continue/stop/change.

- Held-out eval cases, NEVER train on: III-22, III-25, III-29 (includes their seed variants in benchmarks/generated/).
- Dead ends: info_retention reward (and ×w_sparse) collapse to fully-connected. direction_score works (FC 0.2263, oracle 0.2807, offline model ~0.237).
- tau is a no-op for hard samples (threshold at 0 regardless of tau). w-entropy 0.3 pinned policy at p=0.5; now default 0.01. Watch p_edge in logs.
- Plan (2026-09-23): offline training dropped. Online RLOO (--group-k) on vLLM. Open question: router features are mostly noise (MD5 hash embeds, turn-count uncertainty) and topology-vs-P variance is untested.
- Infra: JARVIS HPC, vLLM serving gpt-oss-120b (slurm_vllm_server.sh, `vllm` profile in configs/config.yaml).
- Log red flags: loss→0, ent→0, best flat 20+ eps, mean snapping to 0.

**Why:** As of 2026-09-23 this is personal research, NOT a formal paper — skip reviewer/citation framing; held-out cases are still useful for honest self-evaluation.
**How to apply:** Check any case list for held-out leakage before approving a run; judge logs against the flags above.

### gnn-v2-design
---
name: gnn-v2-design
description: "Agreed GNN rework (2026-09-23) — per-round gate+top-k, edge-biased attention, structural+MiniLM features, supervised-then-iterate training"
metadata:
  type: project
---

User chose (2026-09-23), after reviewing G-Designer, AGP, ARG-Designer:
- Action space: per-round factored — speak/stay-quiet gate per agent + Gumbel-top-k targets per speaker (O(N)); train a fixed-per-task graph once as a baseline.
- Encoder: attention with edge-feature bias (|K_i \ K_j|, message history), evolving the existing MHA router in src/simulation/gnn_router.py.
- Edge decoder: dot-product h_i·h_j + edge-feature term (default, not asked).
- Features: structural first (K_i coverage, position i/N sin/cos, submitted, answer agreement), MiniLM (all-MiniLM-L6-v2) second as an ablation. Drop MD5 hash embeds.
- Training: supervised imitation of high-scoring runs from eval_topology traces (AGP-style), weight incoming edges by receiver's own q_j; then ARG-style loop (sample → run → keep good → retrain); RLOO only as final polish.
- Cold start: add star/chain template routers (default, not asked).
- Delivery mode (filter/advise/hybrid) is decided by the ablation grid results, not yet known.

**Why:** REINFORCE stalled at 97% zero reward; prior work shows supervised-on-good-runs converges in <10 steps.
**How to apply:** Build in this order unless the user changes it; related [[gnn-training-plan]].

### gns-runtime-reorientation
---
name: gns-runtime-reorientation
description: "2026-10-27 pivot: stop output-cap workarounds; build GNS-MAS local runtime (typed pull requests, ref-passing kernels, certificate gate, LocalView); design in docs/GNS_RUNTIME.md"
metadata:
  type: project
---

User directive 2026-10-27: halt brute-force text-generation fixes (32k caps for matrix serialization). Build the runtime: data plane = declarative typed requests; heavy compute in deterministic local kernels passing DataRefs, not text; neuro-symbolic gate checks submitted certificates before accepting state; decentralized LocalView instead of a central matchmaker.

Design draft: `docs/GNS_RUNTIME.md` on branch claude/gns-runtime (from c483f84) in worktree gtd-dynamic-generation-review-f3c5ee. Key findings: need.py is 9 scripted push arms, not the declarative primitive; need-summary's count_query_table reads all shards (matchmaker); the typed pull protocol is need_requests.py in gns-mas-vnext-need-requests (uncommitted). need-tree-strict is closest to the target shape.

2026-10-27 later: ported vnext's need_requests.py + exchange.py (all modes) + runtime layer (model_adapter, context policies incl. full_proactive, backends, calllog, mock_reader, eval_context_policy.py) into claude/gns-runtime via 3-way merge from the shared seed 72cafef (normalize CRLF first or every hunk conflicts). pm_rhc's callable context_policy renamed history_view. Frozen as need-request/1: docs/need_requests/PROTOCOL_V1.md + test_protocol_v1_is_frozen. Suite 540 pass / 1 skip. Dropped 4 vnext tests tied to its experiments/ bundles. Uncommitted.

2026-10-27 (3): DataRef variant (need-request/1+dataref/1, request:eligible+ref[+gate]) + slice_gate G0/G2 built; arms req-ref / req-ref-gate / need-summary in eval_context_policy; suite 545/1. Offline scripted audit: exact at N=10/20/40, gate <0.1 ms/agent, but prompts NOT flat (peak 5.9k/9.7k/17.3k) and refs slightly larger on III-21 (payload ~2 values < header); growth = per-holder fan-in (inbound requests shown to holder 39%, count_lt answers echoing 32 thresholds 42%). Job jobs/dataref_iii21.sh (20 runs) + bundle C:\Users\getts\dataref-iii21.tgz sha 74b7c6ea67ea42cb, NOT launched.

2026-11-04: built LocalView + tree echo (src/simulation/runtime_tree.py; request:tree[+rank], arms req-tree / req-tree-gate) + G3 rank_gate (count_lt echo certifies the generator's rank slice chunk=T//N). Scripted audit: peak prompt flat 2.28k/2.30k/2.30k at N=10/20/40 (direct 5.9k->17.3k), exact everywhere, 5 rounds; cost moved to runtime: O(N^2) total hops (540/2280/9360), G3 0.6->2.6 ms/agent. exchange.py must import only agent (test enforces): tree fns injected from need_requests. Job now need-summary/req/req-tree/req-tree-gate; bundle C:\Users\getts\dataref-iii21-tree.tgz sha db1611327f469ff9 (rebuilt with SEEDS=42 smoke option) supersedes dataref-iii21.tgz. Suite 554/1. Committed abf27e6 on claude/gns-runtime (local, benchmarks/generated* left untracked); job not launched.

**Why:** thesis is that scaling is decided at communication/verification, not generation.
**How to apply:** open decisions in §5 of the doc (runtime lineage acl26 vs vnext; need_n40 job; kernel library scope; certificates for III-27/28). Related: [[no-task-tools]], [[need-request-pilot]], [[no-centralized-hubs]], [[need-struct-job]].

### merl-dense-signal-check
---
name: merl-dense-signal-check
description: "2026-10-02 MERL (1906.07315) evaluated for GNN router; no dense per-agent signal predicts P/S, so MERL's precondition fails"
metadata:
  type: project
---

2026-10-02: the user asked whether MERL (EA on team reward plus a policy-gradient learner on dense agent reward, with migration) is viable for the router. I checked the RLOO logs (rl_n10_v1/v2, rl_v2/v3), within the same (iter, case) groups:
- Coverage is saturated (mean 0.98); corr(cov, P or S) is about 0, at both the episode and the per-agent level.
- No run metric (follow_rate, route_utilization, msgs, known_frac, ...) predicts P/S consistently; |r| <= 0.18 and signs flip between runs.
- Per-episode P+S sd is 0.165 for the same model and case (mean 0.195) at N=10, and the median episode takes ~730 s.

**Why:** MERL needs a dense reward aligned with the team objective; none exists here, so its gradient learner would emit migrants that evolution rejects.
**How to apply:** don't build MERL unless a new dense signal is found that correlates with q_j (an answer-level signal, not delivery). Fitness noise is the real bottleneck for [[gnn-es-training]].

### model-adapter-boundary
---
name: model-adapter-boundary
description: 2026-10-12 model-adapter refactor + full_proactive policy done (commit 9398f87 in gns-mas-vnext); cross-model 72-run experiment NOT run, blocked on 3 model families
metadata:
  type: project
---

Repo C:\Users\getts\projects\gns-mas-vnext, branch vnext/context-policy, HEAD 9398f87 (baseline fixture 51ef221, counterfactual analysis 21c28d3). Backups: ..\gns-mas-vnext-handoff\backups_pre_model_independence (git bundle + ignored report + sha256).

Done: ModelAdapter/backends boundary (src/simulation/model_adapter.py, backends.py), full stays byte-identical (golden fixture tests/fixtures/full_baseline_f758972.json.gz), opt-in full_proactive, call log has canonical_context + adapter_parse (attempts), docs/model_independence.md, model_adapter_contract.md, model_inventory.md. Mock only: full_proactive cuts calls 45->25 (not a model claim).

Blocker: gpt-oss-120b server (job 1201447) is down (tunnel resets); only local qwen3:8b Ollama (slow, 4096 ctx, different backend); external APIs not used. Need two more families on JARVIS vLLM before smoke tests (6 runs) and the 72-run matrix (seeds 301-306 verified unused).

**Why:** task rules forbid substituting same-family models or shrinking the matrix. **How to apply:** results/ is gitignored (earlier results were force-added); ask before force-adding. Pre-existing failures: 3 in tests/test_aiming.py (also fail at 51ef221). See [[context-policy-job-a-result]].

## 2026-10-12 real-model readiness (Modal)
Modal works from this PC (CLI profile gettsw; deployed app silo-vllm = gpt-oss-120b, vLLM 0.11.0, 1x H200, 16k ctx, key only in Modal secret silo-vllm-key). jobs/modal_client.py (commit 158aef5) runs the harness inside Modal so the key never leaves Modal; logs -> volume gns-mas-results -> handoff/modal_jarvis_readiness. Smoke PASS; full runs fine (S varies by seed). full vs full_proactive, seeds 313-314: calls 63->36, rounds 17->8, read-only calls 32%->0%, but completion tokens +10% and summed decode +13% (decode ~99% of server time), so no efficiency claim. Proposed: 6 pairs (seeds 315-320) on JARVIS, decode-weighted cost as primary metric. User: Modal for basic tests, major jobs on JARVIS.

## 2026-10-12 JARVIS six pairs (job 1201635, vLLM 0.30.0, seeds 315-320, commit 158aef5)
full S 0/6 vs full_proactive mean 0.73; calls 210->95, rounds 67->22, wall 0.58x, completion tokens 0.91x (4/6 lower), summed decode 1.13x (2/6 lower). Cause of quality gap: under full 0/30 agents had read all 4 peers' data at submission (they submit without calling receive_messages); proactive 21/30, all correct. III-23_n5 is ONE task instance, so seeds are repetitions. Report local (gitignored): results/context_policy/real/jarvis_six_pairs/report.md. JARVIS ssh needs password (no key) -> user opens tunnels; port = 8000 + jobid%1000.

## 2026-10-12 cross-instance III-21_n5 (seeds 315-320, same server) — stopped before I-01 control
Quality replicated (S 0/6 full vs mean 0.60 proactive, 5/6 better; no full agent read all peers' data). Wall-clock did NOT (proactive slower 4/6, completion +26%, decode +31%): struggling proactive runs keep generating. Stop triggers: validator FAIL = agent messaging itself (network drops self-sends; validator gap), 5 reply-cap hits (both arms), 1 retry. Awaiting approval for validator fix + I-01 control. Report local: results/context_policy/real/cross_instance_validation/report.md.

## 2026-10-12 cross-instance results complete (24 runs, same JARVIS server, runtime 158aef5)
Validator fixed (self-sends excluded; analysis commit after 92d5de4). III-21: S 0->0.60 (5/6 better, 0 worse), wall/tokens worse. I-01 control: S 0.30->1.00 (6/6), 18/21 wrong full answers = agent's own local max, wall 0.83x, tokens ~same. 17/18 pairs higher S over 3 instances. Expensive proactive runs (III-21 317/319/320): extra tokens = submit work 30% + caps 14% + no-new-info calls 39%; after round 2 they send mostly requests, 20/35, 12/24, 28/39 to peers who already submitted (dead-end, same as compiled). Proposed next: proactive vs proactive + ids-only "peers who submitted" line (needs approval, runtime change). Report: results/context_policy/real/cross_instance_validation/report.md (gitignored).

## 2026-10-12 peer-submission status experiment (III-21_n5, seeds 315-320, same server)
New opt-in policy full_proactive_status (commit e796a6a; analysis 293007f): one line "Peer submission status: Agent i = submitted/active" from agents' own submitted flags, info only. 12 runs valid/reconciled. Dead-end requests 88->25 (agents still asked told-submitted peers 25 times, 18 in one run), calls 229->120, rounds 82->35, completion 219k->165k, but quality unclear (S 0.33->0.40, exact 10->12; 3 pairs better/2 worse/1 equal) and 3 pairs ended early on partial info (2 lost exact answers). Control replicate noise is as large as the effect (same arm earlier vs now: median |diff| 20 calls, 0.5 S). Next proposed: confirm on fresh seeds 321-326 on III-21 and III-23 with a second control replicate. Report: results/context_policy/real/peer_status_awareness/report.md (gitignored; copy in handoff/peer_status).

## 2026-10-12 Experiment 1: historical masked-why-wait:learned GNN + full_proactive (N=5, III-21 & III-23, seeds 315-320, 24 runs, same JARVIS server)
Original = eval_topology masked-why-wait:learned, checkpoint router_rlv2_delivery.pt (sha256 209d076c..., copy in handoff/gnn_checkpoint, NOT in git), Phase 0d at N=10, k=3, no --greedy, cap 50 (worktree hybrid-strategies-review e3a9836). Harness arms `<policy>+mww-full|mww-learned` (commit 0fc2780; tests/test_gnn_routing_integration.py 19 tests prove enforcement). Control = same mode with fully connected router. Result: messages -50%/-36%, requests -82%/-42%, dead-end 105->0 (III-21), but III-23 P 0.80->0.57 (4 worse/1 better; full-coverage submitters 23->12), III-21 P +0.018 (3/3), calls/wall not lower except one outlier control run (seed 320). Gate leaves >=1 active agent unable to send in 27-37% of rounds (>=2 active). Verdict: quality regression on III-23, no benefit on III-21; keep integration, don't continue at N=5; maybe test at N=10 with a control replicate (needs approval). Report: results/context_policy/real/gnn_routing_proactive/report.md (gitignored; copy in handoff/gnn_routing). Lesson: my first routing stats counted lone-active-agent rounds as "silent" -> corrected (fd70e98).

## 2026-10-12 N=10 pilot of masked-why-wait:learned (III-21 s200-202, seed 0; arms A control, B learned, R control replicate; 3 workers in parallel; 20-min guard)
INCONCLUSIVE: only 3/9 runs finished (B 2/3, A 0/3, R 1/3; 6 guard-stopped), no instance with both A and B complete -> no paired comparison. Runs take 12-20+ min at 3-way concurrency (~2x estimate); control runs often exceed 20 min; reply-cap blow-ups (8192-token no-action replies) dominate wall-clock (A 47% of calls, R 21%, B 14%) and the two identical controls differ hugely. Mask at N=10 is sparse (density 0.25-0.35) with 4 nobody-can-send rounds/run. Batch reconciliation ok (1370 vs 1373 requests = 3 warm-ups). Harness additions in ea7eddc: mww-full-rep arm, --max-run-seconds guard, filename-safe labels. Report: results/context_policy/real/gnn_n10_pilot/report.md (gitignored; copy in handoff/gnn_n10). Next (needs approval): fresh ~6-8 h allocation, 20 instances x 3 arms (60 runs), guard 40 min or none. Lesson: per-run server windows are invalid under concurrency; polling gaps let workers start unplanned runs.

## 2026-10-13 N=10 confirmatory experiment: PREPARED, NOT SUBMITTED (cannot sbatch from this PC; JARVIS needs the user's password login)
Frozen at commit 12373f9 (frozen protocol 14cd80b): 60 runs = 20 instances (III-21/III-23 n10 s200-s209) x A control, B learned, R control replicate, seed 0, rounds-only cap 50, NO wall-clock guard (pilot's 20-min guard removed), blocks = one instance with A/B/R concurrent (matched load), 20 blocks alternating tasks. Execution: private vLLM server job + CPU client sbatch (jobs/n10_confirmatory.sbatch, jobs/n10_launch.sh N), restart-safe driver jobs/n10_confirmatory_driver.py (status from disk, attempts kept, 80-min no-new-block margin vs min(client,server) end). Bundle: handoff/n10_confirmatory_bundle/ (tar.gz + SHA256SUMS + RUNBOOK.md; checkpoint sha 209d076c..; instances canonical sha f84f9c57.. since raw bytes differ CRLF/LF). Analysis frozen in experiments/n10_confirmatory/PROTOCOL_AND_ANALYSIS_PLAN.md; run `python -m analysis.n10_confirm_analysis MANIFEST ROOT`. Estimate ~8 h typical (5-12), worst ~23 h; cluster max walltime unchecked (user must run sinfo). Gotchas: Python patch scripts on Windows write CRLF (broke sbatch until normalized; .gitattributes now has *.sbatch eol=lf); heredoc turns backslash-n into a newline.

## 2026-10-13 N=10 CONFIRMATORY RESULT (60/60 runs, sbatch jobs server 1202047 / client 1202048, 7h13m, commit 12373f9)
Learned GNN router (Phase 0d checkpoint) vs fully connected control, both full_proactive: QUALITY REGRESSION by the pre-specified rule: pooled paired P -0.213 [-0.355,-0.058], 20 pairs (15 worse/5 better, sign p 0.041 uncorrected); III-21 -0.156, III-23 -0.270. Cost not consistently lower (median pair +33k tokens; III-23 learned costlier in all 9 both-complete pairs), coverage of all-9-peers data 0.49->0.22, gate leaves an agent unable to send in 39% of rounds, messages -44%, dead-end requests 24.8->0. Control replicate noise: mean |R-A| P 0.26. 1 run failed a validator timing tolerance by 4 ms (excluded per frozen rule). Block accounting exact (60 warm-ups + 1 retry). Report: results/context_policy/real/n10_confirmatory/report.md (gitignored; copy in handoff/n10_confirmatory_analysis). Raw data: handoff/n10_confirmatory_run. TODO user: confirm chunk-2 server job 1202049 is not left running. Recommendation: don't adopt; any routing follow-up needs held-out s210-s219 and a new plan.

### n5-grid-results
---
name: n5-grid-results
description: Results of the 400-run N=5 topology grid (2026-09-24) and what they implied for GNN training
metadata:
  type: project
---

Grid: 8 tasks (I-05, I-07, II-11, II-13, III-21, III-23, III-26, III-29) x 10 conditions x 5 seeds, gpt-oss-120b on JARVIS vLLM, P2P, R_max 50. Results in the GNN worktree C:\Users\getts\projects\acl26-silo-bench-gnn\results\topology_n5*.jsonl (analysis: analyze_grid.py, analyze_training.py).

- advise wins: advise:random P 0.452 (+0.21 vs free, CI [0.07, 0.34]), advise:gossip 0.433; structure 0.348 (borderline); free 0.248; hybrid ~free; filter worse (-0.09).
- Random suggestions ≈ gossip suggestions at N=5: "who" barely matters at this size; the bar to beat is advise:random.
- Premature submission costs P (0.126 vs 0.236 on Levels I/III).
- Within-run agent credit: weak for I/II (~0.15-0.23), ~0 for Level III (integration bottleneck).
- Supervised imitation of *sent* edges learns agents' habits: learned hit@1 0.770 < "repeat previous partner" 0.828. Trainer weighted all P>0 runs (68%), including filter runs.
- III-26 nearly always 0 (3/50) -> drop from training.

**Why:** these reshaped the training method (proposed: imitate routes not sends, advantage weighting per case, evaluate live vs advise:random, N=20 test for "who").
**How to apply:** use advise mode by default; compare any router against advise:random, not free. Related: [[gnn-v2-design]].

N=20 test (2026-09-24, 60 runs: I-05, I-07, II-11, II-13 x free/structure/advise:random/advise:gossip/advise:learned[v3, trained N=5] x 3 seeds; results/topology_n20*.jsonl): all conditions near floor (P 0.09-0.18). vs free: structure +0.05 [-0.05,0.17], random 0.00, gossip -0.04 [-0.07,-0.01], learned -0.04 [-0.10,0.03]. Routing raises data seen at submission (0.90-0.93 vs free 0.74) and cuts early submission (0.23-0.32 vs 0.48) with ~20% fewer messages, but P doesn't rise: integration bottleneck dominates at N=20; P gives the router ~no training signal there.

### need-based-reorientation
---
name: need-based-reorientation
description: "2026-10-05 user reoriented the project to need-based routing (agents get only what they need, bounded context as N grows); handoff file"
metadata:
  type: project
---

2026-10-05: the user reoriented the work. The GNN's purpose is that agents receive information only when they need it, so context does not bloat at N=20/100; efficiency and P are equally important. All prior designs (coverage `known`, gain |K_i \ K_j|, advise-why/push notes, verifier premature check) optimise "everyone sees every shard", which cannot scale (single-agent oracle III-21: q 0.85 at N=10, 0.39 at N=20).

New plan: per-agent tokens vs N as the headline metric; "need" defined per task (shuffle-by-key: items you own plus range info; summary tasks: merged partials); A = rule-based need note on III-21 at N=10/20 (A1 code gives ranges, A2 agents agree ranges), B = summary task, C = GNN learns need (rule router as teacher), D = verifier enforces need rules.

Handoff for a new session: HANDOFF_need_based_routing.md in worktree hybrid-strategies-review-de1a60 (commit acb7a12).

**Why:** the user's goal is bounded context per agent at scale, not coverage.
**How to apply:** do not optimise coverage or all-to-all spread anymore; judge new work by P and tokens per agent vs N. Supersedes the Phase 0 direction in [[phase0-hybrid-n10]]; evolution stays parked ([[evolution-hybrid-design]]).

Phase A built 2026-10-05 on branch claude/need-based-routing-phase-a-a1a754 (d6a132d, on top of acb7a12): need-oracle / need-sample modes, per-agent token telemetry, jobs/phase_a.sh -> results/phase_a. Tarball C:\Users\getts\phase_a.tgz; launch after Phase 0c finishes. Finding: III-21 scores exact rank slices, so sampled cut points alone cap P at 0.43 (N=10) / 0.23 (N=20) even with perfect arithmetic; A2 therefore adds a count exchange + exact-rank fix-up (9 rounds). Stub: A2 peak tokens +45% N=10->20 (two all-to-all phases), A1 +18%.

Phase A results 2026-10-06 (results/phase_a in the phase-a worktree, 40 runs/cell): A1 need-oracle P 0.869 (N=10) / 0.803 (N=20) vs advise-why 0.160 / 0.059; peak prompt tokens 2120 -> 2541 (x1.20), values received 18 -> 19, 3 rounds. A2 need-sample P 0.463 / 0.069: coarse shuffle works at N=10 (91% send, 92% correctly routed) but exact-rank fix-up arithmetic fails (overlap 0.51); at N=20 agents desync (first shuffle send spread over rounds 2-9, 17% never send). Lesson: data movement is fine; LLM arithmetic over O(N) tables is the bottleneck.

Step 1 of the GNN plan built 2026-10-06 (5d74b6d): src/simulation/need.py (need-tool = A3 local tools on III-21; need-tree / need-tree-tool = III-23 fan-in-4 merge tree), N=50 eval instances (generated locally, seeds 200-219, not in git), jobs/phase_a3b.sh -> results/phase_a3b, tarball C:\Users\getts\phase_a3b.tgz. Agreed GNN direction: GNN = coordination layer predicting oracle need from shared summaries (privileged-teacher distillation), reward P - lambda*per-agent tokens; held-out III-22/25/29 is the real test.

phase_a3b results 2026-10-07: A1 at N=50 P 0.613 (ceiling ~0.656, 19 values/agent, peak 3.1k tok). Tool and tree arms failed for harness reasons: tool results arrived next round (agents sent placeholders, rank_owners ran before counts were read); fixed-schedule tree -> root submitted its local count in round 1. N=50 baselines all failed (server time limit). Fixed in 7fd4252 (in-round tools, event-driven tree, need-tree-strict checker); rerun = jobs/phase_a3c.sh, then jobs/baselines_n50.sh on a separate allocation (sequential: both use ~/vllm_host.txt). Tarball C:\Users\getts\phase_a3c.tgz.

2026-10-09 (phase_a3c + A4): tool/tree arms failed again (harness: in-round tools vs lockstep script -> duplicate sends; roots reused stale tool counts; children forwarded raw edges). Lesson: LLMs execute one-step need instructions (A1) reliably, multi-step procedures not. A4 = need-summary (commit after 7fd4252): count-query layer reproduces A1's table exactly on all 60 instances -> identical prompts, A1 results carry over, no GPU run. Cost ~20N numbers/agent (= raw data): the saving is LLM context, not traffic. GNN plan must follow tabula-rasa rule ([[supervised-is-warm-start]]): oracle/A4 tables are eval yardsticks only.

2026-10-09 step 1 done (390ad08): A4 layer on fan-in-4 tree (no hub, exact on all 60 instances), audit q/ceil (A1 = 0.96/0.97/0.94 of ceiling at N=10/20/50), jobs cancel only their own server (SERVER_JOB from go_phase0.sh). Phase B survey: III-24/28/30 require every agent to submit the full global answer (8N-node dicts, NxN matrix; III-30 also gives every agent all of B) -> flat context impossible by task definition. III-27 (top-3 user-item pairs, 3-tuple answer) is the only other allowed task where it is possible; with the true 3rd-best score as cutoff, norm bounds leave ~1% of pairs, 11%/9%/1% of users at N=10/20/50. Caveat: scorer needs exact 4-dp dot products.

2026-10-09: III-27 (Phase B pick) is unscoreable under strict P ([[verifier-l3-eval]]). User chose: add P_lenient in this branch, keep strict P. Done: metrics.compute_partial_correctness_lenient (json -> ast.literal_eval parse, tuples->lists, dict keys->str, floats snapped to expected within rel 1e-3); recorded per run, shown by --summarize/paired_eval; equals strict on all earlier III-21/23 runs. Verifier session may want the same function.

2026-10-09 III-27 offline pruning (analysis/iii27_pruning.py): summary-only cutoff (top-5-norm users x items) = true 3rd best; keeps 1.2%/0.3%/0.1% of pairs at N=10/20/50, top-3 kept 60/60, busiest agent ~5 vectors at every N, most agents need nothing at N=50. Next gate: single-agent smoke on 5-dim dot-product accuracy (gpt-oss-120b), then III-27 oracle/summary arms + smoke.

### need-request-pilot
---
name: need-request-pilot
description: "2026-10-21: silo-preserving need-request protocol (vnext/need-requests, uncommitted) + frozen 80-run III-21 pilot A/B/C/D, bundle b1308023a74f awaiting authorization"
metadata:
  type: project
---

Silo-preserving need discovery task (user brief, 2026-10-21). **Stopped at readiness; launch is NOT authorized yet.**

**Where:**
- Worktree C:\Users\getts\projects\gns-mas-vnext-need-requests, branch vnext/need-requests, from 6b6b0cb, UNCOMMITTED.
- Docs in docs/need_requests/: AUDIT.md, SILO_CONTRACT.md, DESIGN.md, READINESS.md.

**Protocol:**
- `exchange.py` 'request' mode: argumented ops count_lt / values_in, a HolderPolicy grant with rule ids, an owner-free request_field, and selectors.
- New `need_requests.py`: policy, selectors, GnnRanker, own-evidence tools tally_counts / sorted_evidence, and the doc text.
- Arms in eval_context_policy:
  - A = full_proactive+need-oracle (ORACLE)
  - B = +req
  - C = +req-gnn
  - D = +mww-full

**User decisions:**
- D1: own-evidence tools allowed.
- D2: requests carry the data.
- D3: D = mww-full.
- D4: C also on III-21, with a caveat.
- D5: known ids permitted.
- D7: C ranks holders by the frozen checkpoint's edge scores, gate ignored. The push-trained gate stranded requesters (ceiling 4/10).
- D6 is my default (holders answer after submit) and is flagged for user review.

**Protocol ceiling (scripted plan agent, not a model):**
- B: 10/10 exact, 5 rounds, ~240 values disclosed per run vs 1,800 for broadcast.
- C: 10/10, 10 rounds.

**Pilot:**
- experiments/need_requests_pilot: 20 fresh III-21_n10 s620-639 x 4 arms = 80 runs.
- Seed audit PASS. MDE ~0.14 recall. Call logs off.
- Halt checks H1-H7 enforce the contract at runtime.

**Bundle:** C:\Users\getts\need-req-pilot-b1308023a74f.tgz, sha256 b5f7184b...; FROZEN.json sha256 b1308023a74f...

**Suite:** 585 pass; the 3 failures are pre-existing test_aiming. 31 new tests.

**Why:** the user brief requires explicit authorization before inference, and no commits.
**How to apply:** the launch commands are in READINESS.md §9. After the run: analyze.py. Related: [[architecture-audit-2026-10-20]], [[phase-pad-v2-readiness]], [[offline-rescore-2026-10-20]], [[no-centralized-hubs]].

### need-routing-audit-2026-10-13
---
name: need-routing-audit-2026-10-13
description: Data-collection task for need-based routing runs in gns-mas-vnext-need-audit worktree; s210-219 N=10 are NOT held out
metadata:
  type: project
---

Work for the "GNS-MAS need-based routing data collection" task happens in worktree `C:\Users\getts\projects\gns-mas-vnext-need-audit` (branch `vnext/need-based-audit`, base 5ef1e29), not in the acl26-silo-bench worktree. Read-only audit first; no jobs/commits without approval. Call logs (schema v1) live in `gns-mas-vnext-handoff/*/calls/*.jsonl` (private).

Audit finding (2026-10-13): `generated_eval` N=10 seeds s210-s219 were already used as evaluation in Phase 0 arms, oracle, need-oracle/phase_pad, n10_campaign, smoke_iii27 (only the GNN training set was s100-s119 in `benchmarks/generated`). So they are unused-for-training but not fresh; a truly held-out set needs newly generated seeds.

**Why:** design choices (Phase 0 wording, need notes) were made looking at those instances.
**How to apply:** don't call s210-219 held-out; propose new seeds (e.g. 220+) via `benchmark_generator/variants.py`. See [[need-based-reorientation]].

Update 2026-10-13 (offline reconstruction milestone, uncommitted in that worktree): pipeline `analysis/event_reconstruction.py` + `need_signals.py` + docs/*; outputs in gitignored `results/event_reconstruction/`. Key findings: confirmatory 15,704-13,260 gap = 2,390 sends to already-submitted agents + 54 final-round, 0 unexplained; 659 failed sends = 642 router-mask + 17 self-send; 83% of control III-21 completion tokens are in no-send calls; fresh seeds 220-239 verified unused. Awaiting approval: N=5 delete-one/delay-one pilot (docs/need_routing_baselines_and_counterfactual_plan.md). No commit made.

Update (later 2026-10-13): Phase A committed as e169e97 on vnext/need-based-audit. Phase B (opt-in delete-one/delay-one hook: src/simulation/intervention.py, run_silo_case(intervention=), eval_context_policy --intervention) implemented + tested, UNCOMMITTED awaiting user review. Phase C plan: docs/n10_information_value_pilot_plan.md + experiments/n10_intervention_pilot/matrix.json (III-23 N=10 s220-239, 160 runs, MDE ~0.23 on recipient q, 0.15 revised away). Seeds change data not structure. Awaiting approval; no model calls made.

Update: Phase B committed 419f4d9, Phase C (frozen N=10 pilot: III-23 s220-239, 160 runs = 20 inst x C4/D2/L2, G1 = first 20 runs, G2 control-only) committed 966f22c. NOT launched: pilot driver/sbatch kit not written; JARVIS job 1202049 unverified (no cluster access). Hazard: legacy jobs glob generated_eval/III-2[13]_n10_s* and would now include s220-239.

Update (D1-D3 done, nothing launched): 00ccc1a inputs moved to experiments/n10_intervention_pilot/inputs (generated_eval back to 40); 7d1840f driver.py (G1 after 20 w/ operator resume-g1, interim G2 after 80 control-only, finalize, next); 29e3500 pilot_client.sbatch + pilot_launch.sh + RUNBOOK.md. Launch needs user approval + user on JARVIS; job 1202049 still unchecked by me. Full suite 544 pass / 3 known test_aiming fails (~8 min).

### need-struct-job
---
name: need-struct-job
description: 2026-10-26 structured exchange (need-summary III-21, new need-rows/need-rows-tool III-30) job at N=10/20/40, awaiting authorization
metadata:
  type: project
---

User chose structured exchange over a delay sweep (free-form delay costs ~30x tokens; see [[cov-gate-branch]]).
Branch claude/value-coverage-gate (worktree routing-frontier-handoff-0b6518), uncommitted.

- III-21: existing need-summary (A4, no answer key; same table as need-oracle). Historical strict P 0.87/0.80/0.61 at N=10/20/50; dup-fixed recall ~0.96 flat ([[offline-rescore-2026-10-20]]). The 0.94-0.96 figure is recall, not strict P.
- III-30: new need-rows (LLM computes own C row) and need-rows-tool (local my_rows tool) in need.py; 3 steps, all-to-all, no hub. III-30 context can't be flat (every agent submits full NxN).
- Scripted-agent ceilings on benchmarks_scale: III-21 need-summary P 0.875/0.827/0.700 (ceiling 0.875/0.830/0.715), vals/agent ~19 flat, peak tok 1.8-2.4k; III-30 both variants P 1.0 in 3 rounds at N=10/20/40.
- jobs/need_struct.sh: 15 + 30 + 10 (advise:random N=40 baseline) = 55 runs -> results/need_struct; report merges results/cov_gate baselines. Bundle C:\Users\getts\need-struct.tgz (sha 1b578aac811eb97c); JARVIS need.py now 8a14d4f04598 -> 47acd595c675.

**RESULT 2026-10-26** (55/55 ok, acl26-silo-bench-gnn/results/need_struct; free-form baselines from results/cov_gate):
- III-21 need-summary: P 0.844/0.804/0.682 at N=10/20/40 = 0.965/0.969/0.954 of ceiling; 3 rounds; 18-19 values in/agent flat; peak prompt 2.1k->3.0k. Free-form advise:random 0.112/0.066/0.046. Confirms the historical A1/A4 result at N=40.
- III-30 need-rows: 0.930 (N=10, vs free-form 0.746; 7 rounds vs 50, 3.2k vs 12.5k tok) / 0.543 (N=20, vs 0.259; = delay's 0.544 at ~1/5 the tokens) / 0.000 (N=40, free-form also 0).
- need-rows-tool is NOT better (0.854/0.477/0.058): arithmetic is not the bottleneck.
- III-30 failure at scale = plan non-compliance: agents sending their row to all in round 1: 40%/10%/0% at N=10/20/40. At N=40 they delegate ("please compute row 5 using A_row=...") and submit [], "COMPLETED" or zero matrices. Per-agent output is O(N^2) on III-30 (39 sends of 40 numbers, a 1600-number answer) vs O(1) on III-21. Unverified hypothesis: hitting LLM_MAX_TOKENS=8192 incl. gpt-oss reasoning (check finish_reason in call logs).
- 2026-10-26 follow-up prepared: need-rows-bcast (row sent as ONE broadcast_message; dispatch already supported it under msg protocol, only the plan/prompt lacked it). jobs/need_bcast.sh: III-30 N=20/40 x {need-rows, need-rows-bcast, need-rows-bcast @LLM_MAX_TOKENS=32768} x 5 seeds = 30 runs, LLM_LOG per (arm, N) for finish_reason. Past need_struct runs had no call logs (LLM_LOG unset). Bundle C:\Users\getts\need-bcast.tgz; awaiting authorization.

**BCAST/LOGGED RESULT 2026-10-27** (results/need_bcast; 25 ok, 5 N=40@32k runs errored on client timeouts):
- Token cap is the cause at N=40: 64-68% of calls hit LLM_MAX_TOKENS=8192; median reply = 8192 tokens, ~12k reasoning chars, empty content, only 32% contain a tool call. Agents run out of budget mid-reasoning (hand-computing a 40-term x 40-column row) before acting; the delegation/odd answers are downstream.
- At N=20 only ~10% of calls capped. 32k cap: N=20 0% capped, P 0.669 (vs 0.455 bcast@8k, 0.623 need-rows@8k this run; need-rows run-to-run noise ~0.08). N=40@32k: replies fit (97% tool call) but median 7.2k out tokens, 174s/call, up to 600s -> APITimeoutError (600s read x3 retries) with 200 concurrent agents.
- Broadcast (one call) does not help: N=20 0.455, N=40 0.000. Fewer sends (461 vs 841 at N=40) but the budget goes to reasoning, not send calls.
- Untested levers: LLM_REASONING_EFFORT=low (env already supported in src/utils/llm.py), need-rows-tool with logs (no call logs exist for it), fewer parallel runs + longer client timeout for a clean 32k N=40 read.
- 2026-10-27 jobs/need_n40.sh cut to ONE arm at user request (no task tools: reviewers could see tool arms as bypassing the task): need-rows-bcast, 32k cap, LLM_TIMEOUT=1800 (new env in llm.py), 2 parallel, 20-round cap, logged, 5 runs. need-rows-tool-bcast backed out. Bundle C:SERSGETTS
EED-N40.TGZ = LLM.PY + JOB ONLY.

### no-centralized-hubs
---
name: no-centralized-hubs
description: Router must not form centralized hubs/leaders — user rule; hubs are the established SILO-BENCH bottleneck
metadata:
  type: feedback
---

The learned router must produce decentralized topologies — never a centralized hub or leader. The user stopped an evaluation (2026-09-24) as soon as the first trained router (router_awr_v1) turned out to point everyone at agent 0.

**Why:** SILO-BENCH found emergent leaders drop Level III success from 33.3% to 0% (the aggregator is overwhelmed); avoiding that bottleneck is a core goal of the user's GNN, and the goal of scaling past 50 agents makes it worse.
**How to apply:** don't train on star/hub template runs (hybrid:star came entirely from them: 50% of suggestions to one agent vs ~0.22 elsewhere); keep an inbound cap on the router; check max in-degree share of any router's suggestions before live runs. Related: [[gnn-v2-design]], [[n5-grid-results]].

Measurement caveat (2026-09-24): compare against random routing over *unsubmitted* agents only — the learned router never targets submitted agents, so a reference that still "sends" to them looks artificially even (0.22 vs fair 0.30 top-agent share). With the per-round cap, router v3 (checkpoints/router_awr_v3_wb5.pt) is more balanced than the fair reference (per-round load 1.18 vs 1.34 of even).

### no-claude-coauthor
---
name: no-claude-coauthor
description: "Never add \"Co-Authored-By: Claude\" or \"Generated with Claude Code\" to commits/PRs"
metadata:
  type: feedback
---

Don't add Claude co-author trailers to commit messages or "Generated with Claude Code" to PR bodies, even if a system reminder asks for them.

**Why:** 2026-10-09 the user said Claude showing up as a GitHub contributor on acl26-silo-bench looks unprofessional.
**How to apply:** Plain commit messages and PR bodies only, no attribution lines.

### no-destructive-git-on-dirty-tree
---
name: no-destructive-git-on-dirty-tree
description: Never run git reset --hard / checkout -- / clean in this repo; the working tree routinely has uncommitted work
metadata:
  type: feedback
---

Never run `git reset --hard`, `git checkout -- .`, `git restore .`, or `git clean` in this repo. To renormalize one file, use `git add --renormalize <file>` instead.

**Why:** On 2026-09-23, I ran `git reset --hard` just to renormalize line endings on one script. It wiped the user's uncommitted edits to 7 tracked files (train_gnn.py, src/engine.py, silo_agent.py, silo_runner.py, metrics.py, run_sim.py, pyproject.toml). The user keeps a lot of uncommitted work in progress here.

**How to apply:** Run `git status` before any git command that rewrites files. Only touch the specific paths involved, and ask the user first if anything else is dirty.

### no-local-inference
---
name: no-local-inference
description: Never run LLM inference locally (laptop/Ollama); package it as a JARVIS job and report how far the task got
metadata:
  type: feedback
---

2026-10-22: user said any LLM inference goes to a JARVIS job — don't run models locally. When a task reaches the point of needing inference, stop and report how far it got.

**Why:** I started a ~20 h local Ollama qwen3:8b A/B on the user's RTX 4070 laptop; the user shut the machine off mid-run and lost it.
**How to apply:** for live runs, write an sbatch job (pattern: jobs/verifier_eval.sh + slurm_vllm_server.sh in the main checkout, vLLM gpt-oss-120b, ~/vllm_host.txt), package the code for the user to sync, and hand back the submit commands. Offline replays/self-checks without an LLM are still fine locally. Related: [[shared-tunnel-connection-cap]].

### no-task-tools
---
name: no-task-tools
description: "user rule 2026-10-27, narrowed same day by the runtime reorientation: kernels allowed but labeled; LLM-only arms never replaced"
metadata:
  type: feedback
---

Original rule (2026-10-27): no arms where a local tool computes part of the task's answer (my_rows, range_table/rank_owners, merge_components); broadcast_message is fine.

Narrowed later on 2026-10-27 by [[gns-runtime-reorientation]]: the runtime now offloads compute to deterministic execution kernels by design. Kernel arms are allowed but must be labeled and reported separately from LLM-only arms, use a generic kernel library fixed across tasks (no per-task answer kernels), and claims are scoped to coordination (routing / request protocol / gate ablations with kernels on in all arms).

**Why:** the user expects reviewers to read task tools as bypassing the benchmark; the runtime pivot moves the claim to the communication/verification layer instead.
**How to apply:** flag harness-side computation in write-ups (need-summary's range table is computed by code). Related: [[need-struct-job]].

### offline-rescore-2026-10-20
---
name: offline-rescore-2026-10-20
description: "2026-10-20 rescoring of 3649 stored runs: III-21 extras loophole never exploited (rankings rho 0.991); dup-fix makes need-oracle flat in N (0.96/0.96/0.94)"
metadata:
  type: project
---

Offline rescoring was step 1 of the user's agreed plan (see [[architecture-audit-2026-10-20]]): rescoring, then repairing and rerunning phase_pad, then a reliable baseline, then evaluating the GNN incrementally, then consolidation.

Scripts are in worktree diffusion-combinatorial-gnns-a016de, uncommitted. analysis/rescore.py writes results/rescore/runs.jsonl; analysis/rescore_report.py writes results/rescore/report.txt. They reuse the vnext scorer (strict and lenient) and add per-agent LCS recall (duplicate-exact) and F1 (penalises extra values). 3649 runs come from both lineages. Recomputed strict P equals recorded P except for 6 verifier+ns runs on III-24/27, where the verifier's answer-restore step makes stored answers differ.

Findings:
- **The III-21 extra-values loophole was never exploited.** Answer length is 0.96-1.05x the expected length in every arm. Arm ranking strict vs F1 has Spearman +0.991. Every paired verdict on III-21/23 is unchanged.
- **The duplicate bug caused an apparent decline with N.** need-oracle III-21 strict P is 0.87 / 0.80 / 0.61 at N=10/20/50, but dup-fixed recall is 0.961 / 0.963 / 0.939, essentially flat.
- **Exactness still declines with N.** S falls 0.68 / 0.55 / 0.31 and solved (S=1) is 0.10 / 0 / 0.
- **Correction:** S is the SHARE of agents exactly right (vnext compute_success_rate), not all-agent success. All-agent success = "solved" (S==1). Earlier statements that S "needs every agent exact" were wrong.

Phase A deliverable: reports/rescore_2026-10-20.md in the diffusion worktree. 13 golden fixtures pass (analysis/test_rescore.py). Input sha256 manifest is at results/rescore/inputs_manifest.json. The 6 discrepancies are verifier+ns in results_h100_v2 (III-24 seeds 0/1/4/6, III-27 seeds 2/6) and are flagged UNVALIDATED.
- **Lenient scoring changes nothing on held-out.** III-22 and III-25 stay at 0, so those are genuine failures, not formatting. Verifier III-24 becomes +0.10 (CI above 0), but that is exactly where the restore mismatches are, so it's unresolved.
- **Small-n vnext results stay fragile.** The N=5 comparisons have 6 pairs. Confirmatory III-23 alone is -0.27 [-0.53, +0.02]; only the pooled result was significant. The control replicate's CI is +-0.15 (III-21) and +-0.3 (III-23) at 10 pairs.
- **Not rescorable (no stored answers):** the N=5 grid, RL runs, pre-f97a7e9 campaign evals, and verifier v1 pooled +0.064 (only the 4 rerun tasks have answers).

**Why:** the user wanted to know which conclusions survive better evaluation before running new experiments.
**How to apply:** report recall (dup-fixed) alongside strict P for list tasks. Next agreed step: repair and rerun phase_pad with a condition-by-condition preflight.

### phase-pad-v2-readiness
---
name: phase-pad-v2-readiness
description: "2026-10-20: phase_pad v2 snapshot 558deb19b826 ready, awaiting authorization; v1 failed because smoke_iii27.tgz overwrote the evaluator"
metadata:
  type: project
---

Context-load causal test, rebuilt 2026-10-20 under the user's task brief (Phases A-D). **Stopped at readiness; inference is NOT authorized yet.**

**v1 root cause.** phase_pad.tgz shipped the correct code (= 62781a8). smoke_iii27.tgz was built 81 min later from a pre-pad tree; unpacked over ~/silo-gnn, it reverted eval_topology.py and need.py. The committed code has no bug. v1 data is preserved, unmodified, and invalid for causal inference.

**v2:**
- Snapshot silo-pad-v2-558deb19b826 (tarball C:\Users\getts\silo-pad-v2-558deb19b826.tgz). Evaluator = exact 62781a8 blobs; infrastructure files from 87acf65.
- Fresh III-21_n10_s500-s519 instances; 4 arms x 20 x 2 = 160 runs.
- Fail-closed preflight.py: 34/34 locally. 5 negative tests and 2 job-abort tests fail as intended.
- Pre-registered analyze.py rehearsed on mock data.
- Primary outcome: dup-corrected recall, pad2500 - control. SESOI 0.05, MDE ~0.025.

Files live in worktree diffusion-combinatorial-gnns-a016de, all uncommitted:
- experiments/phase_pad_v2/ (overlay, build_snapshot.sh, analyze.py, SNAPSHOT.json)
- reports/phase_pad_v2_readiness.md (launch commands)
- reports/rescore_2026-10-20.md

Measured with the scripted agent, padding raises mean peak prompt tokens 1.8k -> 4.9k at K=2500, not the 6.5k claimed in the v1 note.

**Why:** the user's brief requires explicit authorization before any JARVIS job.
**How to apply:** don't launch without a fresh "yes" in chat. After the run, analyze with analyze.py and apply the PROTOCOL.md decision rule. Related: [[architecture-audit-2026-10-20]], [[offline-rescore-2026-10-20]], [[capacity-view-of-scaling]].

## RESULT 2026-10-21 (authorized run, JARVIS c101 + H200, 160/160 valid, 0 errors, no deviations)
- **Primary:** pad2500 - control recall **-0.020 [-0.049, +0.006]**. Pre-registered verdict: evidence against a substantial load effect. This held while peak prompts rose 2.1k -> 9.7k (x4.5).
- **Confound check:** no truncation (0 reply-cap hits); completion 1.0.
- **Exploratory:**
  - pad700 shows a dip of -0.042 [-0.065, -0.020], so the dose response is non-monotonic.
  - S (exactly-right agents) falls 0.755 -> 0.57/0.65 while precision is unchanged: agents omit own values, they don't copy distractors.
- **Interpretation:** the observational load-P correlation (r -0.72) was mostly confounded with having to derive need. The planner plan's "flat padding" branch applies: emit one-step per-agent need instructions, not edges.
- Reports in the diffusion worktree: reports/phase_pad_v2_results.md, reports/phase_pad_v2_interpretation.md.

### phase0-hybrid-n10
---
name: phase0-hybrid-n10
description: "2026-10-02 user dropped the evolution/game-theory detour; back to Phase 0 hybrid-strategy review, working at N=10"
metadata:
  type: project
---

2026-10-02: user called the evolution / game-theory / ES / sparse-mask sessions a sidetrack and restarted from Phase 0 of HANDOFF_verified_note_growth.md (does an enforced mask + clearer note match advise?). User: "work from n=10 for now" (not N=5 as the handoff says).

Job: jobs/phase0_n10.sh on branch claude/hybrid-strategies-review-de1a60 (fast-forwarded from claude/verified-note-growth-handoff-6c27f1, commit 14d373a). Six arms (random --k 2, 40 generated_eval instances x 2 seeds): advise-why, hybrid, advise-note, hybrid-reply, hybrid-reply-why, hybrid-note -> results/phase0_n10/summary.txt with paired diffs and the half-gap gate. 2026-10-02 tried gpt-oss-20b, then the user dropped it and went back to 120b. 20b failed the oracle gate twice (q 0.025) because it calls tools natively (harmony recipient `to=submit_result`) instead of writing the prompt's <tool_call> text, and vLLM drops those calls when no tools are declared (194/195 replies empty). Native tool calling would allow only one action per round. Leftovers in llm.py: LLM_REASONING_EFFORT env and a native tool_calls -> XML converter, both inert for 120b. Launch: `bash jobs/go_phase0.sh` on JARVIS (commit 6a6b00f), keeps the oracle gate.

RESULT 2026-10-03 (120b, 80 paired runs/arm, local copy in worktree results/ flat, not results/phase0_n10): oracle 0.826. P: advise-why 0.186, advise-note 0.122, hybrid-note 0.120, hybrid-reply 0.090, hybrid-reply-why 0.083, hybrid 0.072. Gate bar 0.129 -> hybrid-note misses by 0.009 (borderline fail). Key: with the note, enforcement costs ~0 (hybrid-note vs advise-note -0.002); with advise-why text it costs -0.103. The note text itself is worse than advise-why (-0.064). The loss is III-21 premature submission (note arms 78-94% submit incomplete vs 13% advise-why); on III-23 hybrid-note 0.142 vs hybrid 0.052.

Trace findings (2026-10-04): III-21 80-96% of agents submit their own sorted shard in every arm; advise wins via push messages (54% carry full data) while hybrid wording makes ~50% "please forward" and the note ~60% "please send" requests. Rounds (user wants fewer rounds, deterministic rules, all tasks): ideal delivery 3.5 rounds; when coverage completes it is ~1 round from ideal, so delivery is not the bottleneck; the post-coverage tail is (advise-why III-23 ends 9.3 rounds after full coverage, hybrid ~20). Waiting after coverage helps III-21 (q 0.14 -> 0.21) but hurts III-23 (0.33 -> 0.17). Candidate rule: consensus tasks with full coverage -> compute and submit. Next queued: phase0b (masked-why, hybrid-push), commit ed17795.

PHASE 0b RESULT (2026-10-05, results/phase0_n10/summary_0b.txt): masked-why 0.160 (vs advise-why -0.026 [-0.053,+0.001]; mask nearly free with advise text), hybrid-push 0.138 at 8.9 rounds vs 15.7 and half the messages; both pass the 0.129 gate. hybrid-push III-21 0.158 ~ advise-why 0.164 in half the rounds (85% data msgs, 0.3% early submit); III-23 drops to 0.118 vs 0.207: agents submit ~1 round after "You have every shard", and even with all raw edges score 0.153 vs 0.299. This contradicts the "submit right after coverage" rule (correlation said fast = better on III-23; causal test says forcing it hurts) — dropped.

PHASE 0c (2026-10-06, masked-why-wait cancelled at 40/80 to start Phase A on the live server): masked-why:learned (rlv2_delivery) P 0.169 vs masked-why:random 0.160 (+0.008 ns) in 9.8 vs 18.7 rounds, 126 vs 198 msgs; gate opens routes for only 56% of active agents per round. vs advise-why -0.017 [-0.052,+0.017] at 9.8 vs 15.7 rounds. masked-why-wait P 0.215 (best ever; III-21 0.212) but 29 rounds, 326 msgs. hybrid-push-plain/-check = hybrid-push (III-23 still ~0.12): go-signal hypothesis refuted.

PHASE 0d (2026-10-08, summary_0d.txt): masked-why-wait:learned (GNN + patience, enforced) P 0.211 (80 runs), III-21 0.198, III-23 0.225, 16.5 rounds, 196 msgs. vs random wait (40 pairs) P -0.016 ns at half the rounds (14.5 vs 29.1) and -134 msgs; vs masked-why:learned +0.043 [+0.007,+0.079]; vs advise-why +0.026 [-0.004,+0.055] (sign p 0.036) at equal rounds/msgs = best enforced method. Tokens (first logged): peak prompt 6.8k mean / 10k max, 722 numbers received per agent (all-to-all bloat; 200 unique values exist).

**Why:** the coordination gap (hybrid knows 96% of the shards but scores far lower) was never tested with the new note.
**How to apply:** treat [[evolution-hybrid-design]], [[gnn-es-training]], and [[sparse-mask-evolution-branch]] as parked. Next step after results: if the gate passes, run Phase 1 (grow vs static vs random).

### planner-plus-model-router
---
name: planner-plus-model-router
description: "2026-10-09 agreed router reorientation: planner + predictive need/load model (Rollout-RHC style), gated on the phase_pad result"
metadata:
  type: project
---

2026-10-09: the user agreed this plan and is waiting for the JARVIS phase_pad run ([[capacity-view-of-scaling]]) before building.

The plan replaces the GNN-as-edge-policy design ([[gnn-v2-design]]):
- A planner makes the decisions. Each round it does greedy or short-rollout admission of deliveries, scored by predicted need reduction, under a capacity cap per agent. This is the Rollout RHC structure from the PM project.
- The GNN becomes a predictive model. Node state: need_i, load_i, pending steps. Edge feature: content match between what j holds and what i needs.
- Training targets are per-round and observable from self-generated rollouts: next load, NS-verifier validity, whether a delivered value is used in the final answer. Search, then self-imitation. No oracle labels ([[supervised-is-warm-start]]).
- Submission timing stays in the verifier ([[rl-reward-choices]]).

Build order:
1. Planner with hand need/load estimates from the A4 tables (no learning).
2. Learn the estimates only where A4-style tables don't exist; the test is held-out III-22/25/29.
3. Add a CfC/liquid cell or an LNN only if a specific failure calls for it.

If padding comes back flat (load is not causal): the output becomes one-step instructions per agent (A1-style notes) instead of edges.

**Why:** coverage is saturated and uninformative; learned edge routers stayed below random advise; every component that works is deterministic (A1, A4, NS verifier).

**How to apply:** when the user proposes a stack like "liquid GNN + microGNN + LNN verifier", point back to this staging. The user's meaning of "microGNN" was asked but not answered; it fits if it means a small per-agent local model.

### pm-rhc-architecture
---
name: pm-rhc-architecture
description: 2026-10-09 agreed design — persistent-monitoring dynamics + per-node RHC (route/evict/submit) for silo agents; waiting on oracle run before coding
metadata:
  type: project
---

Agreed 2026-10-09 (design only, no code yet). Source math: user's draft "Collaborative Persistent Monitoring" (Getts & Welikala, ED-RHC, extends Welikala & Cassandras Automatica 2021).

Mapping: LLM agents = fixed targets with uncertainty R_i; message packets (carrying sender state) = monitors; resident context = load L; actions per node = route / evict (departure) / submit (deactivation). Key modification: Ṙ = A(L,t) − B·N with load rising per message → self-limiting service, inbound cap derived from installed A/B.

Evidence from 2601 traces: per-agent q vs rounds after full knowledge peaks at +1 round then decays linearly (N=5: 0.59→0.20, −0.058/round; N=10: peak 0.18, −0.012/round); linear fit within sampling noise, no case for higher order yet. Observational only (difficulty confound). `known` in traces is provenance bookkeeping (SiloBenchAgent.observe unions m.known), not content.

Architecture layers: spec (human constraints) → estimator → dynamics model (system ID w/ error bounds) → per-node RHC controller wrapping existing router → symbolic validators (LNN later, add-only) → monitor (residual breach → fallback+refit); oracle eval-only.

Correction (user, same day): R̂ must be the runtime invariance-violation rate (typed/format check fails + neighbor conflicts), NOT oracle q. Invariance constraints come from the spec (only tolerances calibrated on clean runs). Dynamic constraints are tuned from violations: C_max = knee of violation rate vs load (padding sweep), inbound cap from fitted A/B, submit = violation rate held at 0. Sweep proposes, human commits to spec. One eval-only check: violation rate must track q. jarvis-vllm verifiers are stubs; real verifier is on verifier-engine.

Final framing: GNN proposes edges → MPC keeps feasible subset (inbound cap ≈ "valence", load, budget, switching cost λ_Δ on edge churn, submit guard) → verifier gates packets (syntax/types/owner-anchored claims) → agents reason. User calls the per-step bounded topology a "graph crystal". Train GNN with MPC filter in the loop; log MPC intervention rate and edge churn.

Build (2026-10-09): branch claude/pm-rhc-architecture (= claude/verifier-gnn-combined + merged claude/need-oracle-padding, merge 87acf65) in worktree .claude/worktrees/remove-github-contributor-2b8b35. Adds src/simulation/pm_rhc.py (PMRHCRouter wraps any Router), configs/pm_rhc*.yaml, hooks (agent context_policy, NS publishes state["viol"], rhc-<mode>:R conditions, --rhc-spec), analysis/pm_dynamics.py, jobs/pm_pad_ns.sh + jobs/pm_rhc_arms.sh (not launched). Submit nudge DROPPED: HANDOFF_need_based_routing says a coverage go-signal hurt III-23 (0.207→0.118); submit is a violation gate only. The awaited "oracle run" = jobs/phase_pad.sh (need-oracle-pad<K>, no +ns → causal P-vs-load, not the violation knee; pm_pad_ns.sh adds +ns).

Findings from the build's real-data pass (2026-10-09): (1) sensor check FAILED at N=5 (verifier eval, 100 ns runs): msg-level violations fire for 6/500 agents, no relation to q; barrier violations mostly encode "has submitted" → R̂ channel is inert until a stronger runtime sensor exists (typed/owner-anchored claims; user decision). (2) READ_LAG: delivered content is read one call later → edge delay 2 rounds; lag-0 dip in the decay curve is this artifact. (3) c ≈ 24 prompt tokens per delivered message, flat in N. (4) pre-existing bug: ':learned+ns' conditions never loaded --weights (phase0e_ns masked-why-wait:learned+ns rows are likely all errors) — fixed in run_grid on this branch. User's MATLAB swarm sim lessons applied: no oracle in runtime signals, matched-bandwidth random control arm (Spec.random_drop), per-edge message counts, seeds+CIs.

Status 2026-10-09 evening: non-oracle build DONE and reviewed (20 confirmed review findings, 17 fixed), 339 tests pass, UNCOMMITTED on claude/pm-rhc-architecture. Single spec file configs/pm_rhc.yaml (whitelisted in .gitignore; arms derive variants via sed; 4 TBD marks block jobs/pm_rhc_arms.sh). Arms: control / rhc / rhc-safe / wrapper (random_drop 0) / random (matched live-edge drop share per task). pm_pad_ns.sh calibrates on benchmarks/generated s100-s119 (train split), arms score generated_eval. Open: gain_fn is provenance (saturates ~80% of edges by round 4) — need-based gain waits on need sets; content gain rejected (repeats spread-everything).

**Why:** gives constraint control to installer, decentralized, testable.
**How to apply:** user said wait for last oracle run (need-based dynamics) before implementing. Then: per-agent prompt-length logging → controller hook + arms (baseline / nudge at t_full+1 / evict-safe / evict-hard) → fit load vs time decay → RHC solver only if load-coupled. Build in a separate worktree, not the shared jarvis-vllm tree. Related: [[capacity-view-of-scaling]], [[need-based-reorientation]], [[no-centralized-hubs]], [[supervised-is-warm-start]].

### rl-reward-choices
---
name: rl-reward-choices
description: "User's hand-picked RL reward design for the GNN router (workshop 2026-09-24/25) incl. notes"
metadata:
  type: project
---

Picked in the Router Reward Workshop artifact (https://claude.ai/artifact/HMdekEP9Eat8fx2NGFneZo, db doc workshop/reward):
- Outcome P + consensus bonus S; potential-based coverage shaping; message cost msgs/(N·rounds); latency rounds/R_max.
- Starting weights w_P 1, w_S 0.5, w_C 0.5, w_M 0.2, w_T 0.1 (to be tuned offline on logged runs first).
- Per-receiving-agent credit; RLOO baseline on same task instance, K=4.
- Hubs: hard caps. User idea for later: learn/calibrate the cap from round performance.
- Submission timing ("when"): NOT in the GNN — premature-submission validation belongs to the verifier engine; no epoch constraints in the GNN.
- Scale: N=5 first; scale later once results justify cost.
- Tasks: Level III focus (user: L1/L2 already shown with old GNN). Train III-21, III-23 (+ generated instances); III-22/25/29 held out; III-26 excluded.

**Why:** these are the user's explicit picks; build exactly these. **How to apply:** don't re-litigate; flag only technical conflicts (e.g. potential shaping telescoping under episode/agent credit). Related: [[supervised-is-warm-start]], [[no-centralized-hubs]].

RL run v1 (2026-09-25, results/rl_v1, 20 iters, warm start router_awr_v3_wb5 [L1/L2 supervised], 62 L3 instances): curve flat on P; speak -0.09 and msgs -0.11 (router learned to talk less). Head-to-head on 6 unseen L3 instances x3 seeds (results/h2h_*.jsonl): P random 0.376, v3 0.178, RL iter20 0.287 (+0.11 vs v3, CI [+0.01,+0.21]), v4 L3-supervised (checkpoints/router_awr_v4_l3.pt) 0.284 (+0.11 vs v3). All learned routers still below random advise (random: everyone speaks, 3 targets; learned: speak 0.53-0.67, 2 targets). Cap levels 1.1-1.5 indistinguishable (P 0.30-0.33, n=40 each).

RL run v2 (2026-09-25, results/rl_v2, warm start v4 L3, k=3, lr 1e-3, summed loss, fresh Adam/iter): 159/160 rollouts ok; weights moved 4.2%; speak -0.055. Six-way head-to-head on the same 6 unseen L3 instances x3 seeds: free 0.202, random 0.376, v3 0.178, RL v1 0.287, v4 0.284, RL v2 0.336 (best learned; vs random -0.04 CI [-0.24,+0.14]; vs free +0.13 n.s.; random vs free +0.17 CI [+0.01,+0.34]). RL v2 uses 66 msgs/run vs random 88. Eval set too small to resolve ~0.05 gaps; need a larger fixed eval set. v3 trainer (mean loss, persistent Adam) built, not yet run.

### routing-done-ab-result
---
name: routing-done-ab-result
description: "2026-10-23 live --routing off vs done (L3, gpt-oss-120b): gate blocks ~5% at every N, does NOT make comms sub-quadratic (exponent ~1.9 both arms)"
metadata:
  type: project
---

Worktree silo-bench-frontier-handoff-a524eb (uncommitted): src/msg/tools.py send gate + [DONE] notices, src/routing_ab.py, jobs/go_routing_scale.sh. Results: workspace/routing_ab (N=10 A/B), workspace/routing_scale (sweep; benchmarks_scale = freshly generated N=5/10/20/40, current generator no longer reproduces shipped benchmarks/).

N=10 A/B (8 scored pairs): blocked 3.8% of sends; sent chars -21%; submissions 24 -> 56; P up only on III-21/23.

Scaling sweep (N=5/10/20/40 x off/done x 10 tasks, 80/80 complete, 11 unscored by stock scorer):
- blocked share ~4-6% of send attempts at every N (2.5, 7, 31, 92 per case).
- delivered chars: -14%, -16%, -12%, +0% at N=5/10/20/40.
- log-log growth vs N: delivered chars 1.91 off / 1.99 done; sends 1.85 both; prompt tokens 1.52 / 1.54. Near-quadratic in both arms.
- P ~0.01-0.05 everywhere; no accuracy signal. [DONE] notices reach 661/case at N=40 and inflate stock D.

**Why:** post-submission waste is a small, constant slice; the quadratic driver is all-to-all chatter among still-active agents.
**How to apply:** don't claim the done gate fixes scaling; sub-quadratic needs limiting who active agents talk to (need-requests / routing), not terminal masking. Related: [[need-request-pilot]], [[no-local-inference]], [[no-centralized-hubs]].

### runtime-exchange-branch
---
name: runtime-exchange-branch
description: 2026-10-19 registry-backed runtime exchange (push + explicit pull) built mock-only on vnext/exchange worktree; uncommitted; protocol awaiting review
metadata:
  type: project
---

Worktree `C:\Users\getts\projects\gns-mas-vnext-exchange`, branch `vnext/exchange` off `vnext/context-policy` @ f92a1c6 (main checkout untouched). Uncommitted: new `src/simulation/exchange.py`, `tests/test_exchange.py` (86 tests), `docs/runtime_exchange.md`, `experiments/exchange_push_pull/PROTOCOL_PROPOSAL.md`; small edits to silo_agent.py (local_data, exchange hook), silo_runner.py (exchange= arg, parse_shard), eval_context_policy.py (`+mww-learned@push|@hybrid` arms), mock_reader.py.

Tests: worktree baseline 464 pass / 3 fail / 12 skip -> 550 / 3 / 12 (same 3 test_aiming failures; 12 skips are untracked artifacts). Run with `..\gns-mas-vnext\.venv\Scripts\python.exe` from the worktree.

**Why:** user wants runtime-managed exchange proven correct/auditable before any real inference; no commits, no GPU without explicit authorization.
2026-10-19 later: protocol frozen pending authorization in experiments/exchange_push_pull/ (PROTOCOL_PROPOSAL.md, FROZEN.json, matrix.json 80 runs A/B/C/R, MANIFEST.json + inputs/ for III-21/III-23 n10 s400-409, SEED_AUDIT.json pass, analyze.py, check_exchange_run.py). Gotcha: manifest.json == MANIFEST.json on Windows (clobbered once; run manifest is matrix.json). Suite 551/3/12. Open: D1-D7 in protocol section 10 (pooling rule, C-B classification, halt scope, launch wrapper/preflight, commit).

2026-10-19 (3): D1-D5 closed per user (per-task + equal-weight stratified pooled, opposite signs -> task-dependent; C-B exploratory only; strict 10 pairs; any H1-H6 halts whole experiment; run_quartets.py + jobs/exchange_quartets.sbatch + CLIENT_SBATCH in n10_launch.sh). Run seed 0 = harness RNG only; LLM requests unseeded, so R-A = model-sampling variability at fixed harness randomness. Remaining: D6 local commit needs permission; D7 user must run JARVIS grep. Suite 554/3/12.

2026-10-20: committed locally as 6b6b0cb on vnext/exchange (base f92a1c6, not pushed; repo has no remote). Freeze check passes on HEAD and on a git-archive export. JARVIS seed grep still not run (user must run it).

**How to apply:** next step is user review of the protocol (A/B/C/R arms, fresh III-21/III-23 n10 s400-409); don't run real jobs until authorized. Known v1 cost: cross-sender redundant deliveries are large under random k=2. See [[model-adapter-boundary]], [[vnext-runtime-audit-target]].

### sdk-licensing-plan
---
name: sdk-licensing-plan
description: "2026-10-09: open-core sim SDK + licensed GNN/verifier IP; user rejects hosted-API delivery over GPU-cluster latency"
metadata:
  type: project
---

Goal: turn the simulator (src/simulation core, A2A, ROCm+CUDA) into an open-core SDK; trained GNN router weights + verifiers stay proprietary and are licensed.

User pushed back on a hosted API for the IP: worried about latency on GPU clusters. Direction discussed instead: on-cluster licensed container with encrypted weights, per-customer watermarking, and the contract. Confidential computing as a premium tier. No branches or code changes yet. Origin (jwyjohn/acl26-silo-bench) is someone else's public repo, so never push the IP there.

**Why:** customers run on their own GPU clusters, so round trips over the WAN are unacceptable to the user.
**How to apply:** don't re-propose a hosted-only API; design for local execution with deterrence and traceability rather than claiming weights can't be extracted.

### shared-tunnel-connection-cap
---
name: shared-tunnel-connection-cap
description: "vLLM SSH tunnel (Windows OpenSSH, localhost:8000 -> JARVIS) fails with \"accept: Too many open files\" if total concurrent connections across sessions exceed ~48"
metadata:
  type: project
---

All sessions reach vLLM (gpt-oss-120b on JARVIS gpu-l40s) through one Windows OpenSSH port-forward (`ssh -N -L 8000:<node>:8000`). It fails with "accept: Too many open files" under heavy concurrent load, which breaks every session using it.

- 2026-09-24: call_llm leaked a socket per request; fixed by a pooled client (commit c4d664b on jarvis-vllm, 7a88a6b on verifier-engine), `LLM_MAX_CONNECTIONS` env, default 48 **per process**.
- Same day it failed again with two processes at 48 each (~96 total). Agreed with the GNN Training session: when both are active, each runs with `LLM_MAX_CONNECTIONS=24` (≤48 total). Exact OpenSSH limit is unverified.

**Why:** a tunnel failure silently kills other sessions' runs (GNN evals, verifier batches).
**How to apply:** before launching a batch, check `/metrics` load and whether another session is running; set `LLM_MAX_CONNECTIONS=24` if so; never run parallel batches without the pooled client. Related: [[shared-worktree-sessions]].

### shared-worktree-sessions
---
name: shared-worktree-sessions
description: GNN-training and NS-verifier Claude sessions shared one working folder; verifier session switched it to verifier-engine
metadata:
  type: project
---

As of 2026-09-24, the "GNN verifier engine" Claude session and the GNN training session both used C:\Users\getts\projects\acl26-silo-bench. At 2026-09-23 22:03 the verifier session checked out a new branch `verifier-engine` (built on GNN commit 531b5e1 from `jarvis-vllm`), so GNN work silently continued on that branch.

Plan the user approved (2026-09-24): after the N=5 topology grid finishes, create a separate `git worktree` for GNN work on `jarvis-vllm`, move the uncommitted GNN changes there (slurm_vllm_server.sh JARVIS fixes, distinct_expected in silo_runner.py/eval_topology.py, analyze_grid.py), commit on jarvis-vllm, and keep this session in that folder.

Done 2026-09-24: GNN worktree is C:\Users\getts\projects\acl26-silo-bench-gnn on `jarvis-vllm` (commit d1cd48f); its `.venv` is a junction to the shared folder's .venv. The GNN session now works there.

**Why:** two sessions in one folder switch branches under each other and can commit each other's files.
**How to apply:** check `git branch --show-current` and `git worktree list` before any git work here; never reset/clean the shared tree ([[no-destructive-git-on-dirty-tree]]).

### sparse-mask-evolution-branch
---
name: sparse-mask-evolution-branch
description: "2026-10-01 branch claude/game-theoretic-sparse-reasoning-a45f43 — 2:4 mask evolution over frozen W*, context-crossover reproduction, LNN/invariant death"
metadata:
  type: project
---

Branch `claude/game-theoretic-sparse-reasoning-a45f43` (master-based worktree), `src/sparse_evo.py`: Wanda 2:4 init, block crossover, KL gate, replicator selection over frozen W*. Uncommitted as of 2026-10-01.

User's evolving pipeline (2026-10-01): agents = W* + 2:4 mask; after a reasoning round, pairs chosen by communication-topology tie strength combine context windows to make 3 children; children inherit last partners (→ filter edges) and compressed context/reasoning (→ advise note). Death = "LNNs" forcing JSON formats + graph invariants + safety checks LNN = Logical Neural Networks (confirmed). Masks carry over across episodes (confirmed); contexts are episode-local. Full plan: SPARSE_EVOLUTION_PLAN.md on the branch.

**Why:** merges spec's mask-space evolution with [[evolution-hybrid-design]].
**How to apply:** open issues raised: vLLM can't serve per-agent masks; pop explosion needs cap; partner inheritance makes hubs ([[no-centralized-hubs]]); validity checks don't select for correctness.

### supervised-is-warm-start
---
name: supervised-is-warm-start
description: "No supervised head start for the GNN router — tabula rasa learning only; don't propose imitation/oracle-label pretraining"
metadata:
  type: feedback
---

2026-10-08 update: user wants NO supervised head start at all for the GNN router — not imitation of grid runs, not an ILP/oracle teacher, not contrastive pretraining on generator need-graph labels. The router must learn routing itself (tabula rasa, AlphaZero-style). Earlier (2026-09-24) stance was "supervised is only a warm start, don't over-optimize it"; this supersedes it.

**Why:** user said so directly after I proposed an ILP-solver teacher and contrastive need↔holder pretraining. Supervised imitation caps the router at "what the teacher did".
**How to apply:** design training around environment reward, self-generated targets (search/self-imitation), credit assignment, and curricula. Oracle/ILP solutions are fine as **evaluation-only** yardsticks, never as training labels. Open question to keep explicit: whether a cheap symbolic simulator counts as a head start (it's an environment, not labels). Related: [[gnn-v2-design]], [[no-centralized-hubs]], [[gnn-es-training]].

### topk-sweep-result
---
name: topk-sweep-result
description: "2026-10-25 advise:topk vs advise:random (k=2) 160-run sweep, 50-round GNN harness, III-21..30 x N5/10/20/40"
metadata:
  type: project
---

Sweep ran on JARVIS (job 1211664 failed on `note=` kwarg mismatch, rerun finished): 159/160 ok. Results in acl26-silo-bench-gnn/results/topk_sweep/.

- Paired P diff topk-random: pooled -0.013 +-0.032 (n=79); per N -0.042/-0.021/+0.004/+0.008 (N=5/10/20/40). No effect.
- Chars exponent vs N: random 1.45, topk 1.49. Budget did not bend growth; chars -12/-16/-33/+5% at N=5/10/20/40.
- Agents follow topk less (follow 0.54-0.64 vs 0.71-0.88). Advisory only, nothing blocked.
- Lowest-id tie-break creates hubs: max inbound/agent/round 35.9 at N=40 vs 8 random (violates [[no-centralized-hubs]]).
- P carries signal only on III-21, 22, 29, 30 (and 23 at small N); III-25..28 are 0 for both arms; P ~0.02 at N=40.

**Why:** baseline for Phase 2 of the routing plan; shows a fixed deficit-ranked budget alone is not enough. See [[routing-done-ab-result]].
**How to apply:** do not treat topk as a bar to beat on P (it ties random); if reusing it, randomize tie-breaks or add an inbound cap. Local GNN repo is stale vs JARVIS; base is claude/pm-rhc-architecture.

### use-event-signal-check
---
name: use-event-signal-check
description: "2026-10-20: per-edge 'delivered value appears in receiver's answer' predicts P (r +0.62) where coverage doesn't; III-21 only, held-out untested"
metadata:
  type: project
---

2026-10-20: after reading RL-D2 (discrete diffusion + PMD, ICML 2026), the user asked to test whether a discrete "use" event could be per-edge credit A_e for an FKL-style topology learner. Script: analysis/use_event_check.py in worktree diffusion-combinatorial-gnns-a016de (uncommitted). It takes worktree roots as args and needs traces with msgs+answers.

Data: 1612 III-21 episodes (N=10/20/50) from acl26-silo-bench-gnn, hybrid-strategies-review, need-based-routing-phase-a, and phase_pad. Correlations are de-meaned within (file, arm, N).
- Episode use vs P: +0.63 / +0.58 / +0.36 at N=10/20/50. Precision (share of deliveries used): +0.60. Coverage: +0.09. Delivered count: +0.09. Correlation with S is weak (+0.16).
- Agent level: use vs q +0.58. Using wrong values: +0.15. Answer length: +0.17. Values received: +0.05. So it isn't an answer-length artifact, and receiving more doesn't help.
- Edge level: P(used | carries needed value) = 0.26 vs 0.04 (N=10), 0.73 vs 0.08 (N=50). The receiver explains more of the variance in use than the content does (0.38 vs 0.19 at N=10), which matches [[capacity-view-of-scaling]].

Update (same day): with number matching generalized to III-23, the signal is null there: use vs P is -0.02 at N=10. Matches on the answer "3" are mostly spurious collisions with small numbers. So the event is specific to copy-type answers. Held-out job prepared: C:\Users\getts\silo-heldout.tgz. It unpacks to a self-contained ~/silo-heldout with the jarvis-vllm run code, the pm-rhc H100 launcher, and a vLLM-only config (the real config.yaml holds provider API keys, so it is never shipped). Launch: GPU=h100 bash jobs/go_phase0.sh jobs/use_event_heldout.sh. It covers III-22/25/29 canonical N=10, advise-why random vs learned, 20 seeds each. Not launched as of 2026-10-20.

HELD-OUT RESULT (2026-10-20, H100 run, 120 runs, results/use_event_heldout in the diffusion worktree): the signal does not generalize.
- III-22 and III-25: P = 0 in all 80 runs, a floor effect, so they can't be tested. III-22 answers are genuinely wrong (nobody gave 477). III-25 answers are near-miss centroids that exact matching scores as 0.
- III-29: P 0.645. Use vs P is -0.39 (k=40). Used values carrying the answer are copied 84% of the time, but copying wrong numbers hurts (use_wrong vs q: -0.41).
- On aggregate tasks, "use" degenerates into copying a peer's answer. The event is specific to copy tasks (III-21).
- Head-start GNN vs random on held-out: P 0.218 vs 0.212 (within noise), with 185 vs 247 messages.

WHY IT WORKS ON III-21 (analysis/use_why_iii21.py; 1313 runs, 20 arms, N=10):
- The bottleneck is integration, not delivery. 53% of needed values are delivered, but only 12% are integrated (17.5% of those delivered), giving q 0.19. Use measures the integration step: use_right vs q is +0.97. Delivered-needed values (useful) vs q is only +0.38. Use purity is 0.70.
- As an episode score, use is NOT better than P. The arm ranking agrees with P (Spearman +0.98), P separates arm pairs slightly better (median |t| 7.6 vs 6.5), and split-half reliability is the same (0.92 vs 0.91).
- Its value is resolution. The within-episode correlation of credit with the "edge carried needed values" label is +0.29 for use, +0.03 for receiver q, and 0 for P. Per-edge credit is where use earns its keep.

Limits: III-23 answers are a count, so nothing can be content-matched. No traces with msgs+answers exist for held-out III-22/25/29. The signal only arrives at the end of the episode: it's dense across edges, not in time.

**Why:** this is the answer-level signal that [[merl-dense-signal-check]] said was missing.
**How to apply:** if this is used as credit, baseline it per receiver (per-agent RLOO). Otherwise the router learns to target good integrators, which drifts toward hubs ([[no-centralized-hubs]]). The held-out test needs a JARVIS run.

### verifier-l3-eval
---
name: verifier-l3-eval
description: "2026-10-09 L3 (III-21..30, n5) paired NS-verifier eval on JARVIS H100s; results, the literal_eval scorer fix, and the rounding/consensus problems"
metadata:
  type: project
---

Unified L3 verifier (necessary-condition checks only, user's choice; branch claude/silobench-verifier-layout-ad97d8) evaluated 10 pairs x 10 tasks, gpt-oss-120b on H100s. Results: results_h100/ (first run) and results_h100_v2/ (III-24/25/27/28 rerun after the scorer fix, with stored answers).

- Pooled all 10 (v2): dP +0.064, 33 ahead / 10 behind, sign p=0.0006. III-21 alone +0.10 p=0.021.
- Scorer fix (commit 36ef0f5): _normalize_value falls back to ast.literal_eval + JSON round trip; prompts ask for tuples / agents write int-keyed dicts. MALFORMED on III-25 went 134 -> 0.
- Still P~0 on 24/25/27/28: most answers genuinely wrong (reasoning-limited), but III-25 has 19, III-27 3, III-28 5 answers correct up to rounding (exact-match scorer, no rounding rule in prompts). With rounding-tolerant rescoring III-25 baseline 0.24 > verifier 0.15: the DISAGREEMENT check compares exact JSON strings, so agents agreeing up to rounding get reopened (123 DISAGREEMENT on III-25).
- Launch: jobs/go_verifier.sh (own job name vllm-verifier, port 8417, ~/vllm_host_verifier.txt, eval cancels only its server's id).

**Why:** next decisions: make the consensus check rounding-tolerant (verifier fix) and whether to add a rounding tolerance to the scorer (benchmark change). Related: [[need-based-reorientation]].
**How to apply:** don't read L3 float-task zeros as agent failure only; report the scoring caveat.

### vnext-runtime-audit-target
---
name: vnext-runtime-audit-target
description: GNS-MAS vNext (SILO-aware runtime) worktree starts at upstream e741277 with no GNN/verifier; audit/build base is claude/verifier-gnn-combined
metadata:
  type: project
---

Worktree `gns-mas-vnext-inference-1f1d0f` (branch claude/gns-mas-vnext-inference-1f1d0f) is at upstream e741277: benchmark only, no run_sim.py / src/simulation. The superset is `claude/verifier-gnn-combined` (72cafef = jarvis-vllm + 46 commits incl. ns_verifier.py, need.py). 2026-10-10 audit done read-only against it; tests there: 290 pass, 3 fail (test_aiming, pytest.approx on tensors), 6 skip. Needs `uv run --no-sync --with pytest` since venv lacks pytest. configs/config.yaml absent (only example).

**Why:** user's vNext brief says "inspect first, wait for approval" before any change.
**How to apply:** before implementing, rebase/merge the vNext branch onto claude/verifier-gnn-combined (use sync tool, don't touch the dirty acl26-silo-bench-gnn tree). See [[no-destructive-git-on-dirty-tree]].

## Cooperating RHC / persistent monitoring

### Index (MEMORY.md)
- [RHC results baseline](rhc-results-baseline.md) — ablation: clear-dwell is the big win; fair baseline is Classical + clear dwell
- [Joint RHC is 2-agent only](joint-rhc-two-agents-only.md) — experiments must use NumAgents = 2
- [Simulator paper code location](repo-is-not-paper-source.md) — ArXiv.tex simulator paper = shiran/main PaperResults; local main is not it
- [MATLAB & git workflow](matlab-and-git-workflow.md) — user runs MATLAB, I don't; commit/push only on request, to origin (gettsw) main
- [Collab PM paper draft](collab-pm-paper-draft.md) — Collab-ED-RHC paper; code/results in shiran27/PersistentMonitoringSimulator; v7 review findings
- [CfC target-model pipeline](cfc-target-model-pipeline.md) — RolloutRHCPolicy + liveCompare + LNN/train_cfc.py; CfC must output Rdot; MATLAB side untested as of 2026-10-09
- [Rollout RHC](rollout-rhc.md) — my rollout planner (paper's model, real timing) beat all policies in user's test; needs sweep + /80 fix before claims
- [genpath shadows worktrees](genpath-worktree-shadowing.md) — main checkout genpath pulls in .claude/worktrees classes; filter it
- [DBS-RHC state + handoff](dbs-rhc-gap-is-belief-error.md) — all on local main b5a681b; read worktree HANDOFF.md first; dwell mode matters; step 3 needs OK
- [Simulator paper review 2026-11](simulator-paper-review-2026-11.md) — horizon cap breaks ED-ORHC Table III; abstract ED-ORHC unbounded; dt sensitivity

### cfc-target-model-pipeline
---
name: cfc-target-model-pipeline
description: "CfC learned target-model pipeline (distance sensing -> MATLAB data -> PyTorch -> MATLAB planner, live compare); built 2026-10-09; status and gotchas"
metadata:
  type: project
---

On 2026-10-09 the user chose to try a CfC (liquid NN) as a learned target model. It replaces the planner's R(t) prediction, not the policy. The goal is to see it in a live run against the analytic model.

Pipeline:
1. `SensingRange` sensing option
2. `generateSensingData` writes CSVs
3. `LNN/train_cfc.py --export LNN/cfc.json`
4. `RolloutRHCPolicy` with predictor "binary" or "cfc"
5. `liveCompare` shows both side by side

The Logical-LNN half was deliberately not built.

Findings:
- A bare CfC predicting R directly underfit badly (MSE 185 vs binary 4.3).
- Outputting Rdot and integrating it with the R >= 0 clamp fixed it: synthetic MSE 1.38 vs binary 4.26.
- ncps squeezes per-sample `timespans`, so the trainer passes one shared (1, L) row.

**Why:** The user's argument is that real PM targets and agents have dynamics beyond the linear ideal. The CfC must learn the sensing it isn't given (inputs are distances, A, B, R0; never p or r).

**How to apply:** As of 2026-10-09 none of the MATLAB side had been run. Expect first-run bugs there and ask the user for the error output. Train at the same SensingFrac used live (default 0.5). The decisive test is J_T of Rollout RHC with cfc vs binary, then vs Classical + clear dwell ([[rhc-results-baseline]]). See [[matlab-and-git-workflow]].

### collab-pm-paper-draft
---
name: collab-pm-paper-draft
description: "User's Collab-ED-RHC paper (Getts & Welikala); its code and results live in shiran27/PersistentMonitoringSimulator, not gettsw main; v7 review findings"
metadata:
  type: project
---

The user (William Getts) co-writes "Collaborative Event-Driven Receding Horizon Control for Persistent Monitoring in Network Systems" with Shirantha Welikala (Stevens). Drafts arrive as `D:\Downloads\Collab_PerMon (N).pdf`, and the number in the filename changes. v7 (reviewed 2026-11-02) has full results in Sec. VIII, Tabs. II–VI.

The code is in Shirantha's repo, github.com/shiran27/PersistentMonitoringSimulator. Its main is 1a50bdf, which is the same commit as gettsw `origin/shirantha/update-2026-10-26`. The relevant pieces are:
- `CollabEDRHCPolicy` and `CollabTargetCost`
- `Experiments/collab/collabExperiments.m`, which makes 104 runs and writes every quoted number into `collab_macros.tex`
- `CollabResults.mlx`

The results were generated around edc29a7 (2026-10-23), and no run outputs are committed.

v7 review findings (2026-11-02), unresolved when written:
- ED-RHC-α on 3A-9T: the paper has 96.4, but the repo's JS reference (`validateEDRHC.m`) gives 76.3, which is 26% lower. 3A-Maze α is 6% off. The paper ran with dt 0.02; the validation used dt 0.01. With the JS value, the 3A-9T win over α flips.
- Headless MATLAB runs on 2026-11-02 confirmed the time step causes it. ED-RHC-α on 3A-9T gives 96.4 at dt 0.04 and 0.02, and 76.0 at dt 0.01 and 0.005. At dt 0.01, Collab (A) gives 84.5 and (B) 84.6, so α wins by 11%. Collab results move 1.5–7.4% between dt 0.02 and 0.01.
- I re-ran the full 104-run study at dt 0.01 on 2026-11-02. It took about 1.5 h with 6 headless workers, using scratchpad `collabWorker.m`; results are in the session scratchpad under `collab_dt001/`.
  - Collab (A) vs ED-RHC still averages 14.2%; the paper says 15.1%.
  - The best Collab mode now beats both baselines in 4 of 20 rows instead of 6. Against ED-RHC-α it wins only 3A-Maze (5.1%), Campus (3.7%) and the 2 group rows.
  - These claims change direction: (B) vs (A), the history rule, sharing (no-share is better in 4 of 5 rows), Lab B vs α, and Office without the terminal correction.
  - The macros are absolute values, so the sentences around them don't flip.
  - dt 0.01 is not fully converged either: 2A-5T α gives 37.6 against JS 40.4.
- Collab (A) on 3A-Maze: the paper reports 131.9. Commits fe968f7, edc29a7 and HEAD all give 130.48 with the paper's own parameters. The other checked cells reproduce to 0.1.
- The best Collab mode beats both ED-RHC and ED-RHC-α in only 6 of 20 table rows.
- Comparing mode (A) with mode (B) mixes up two changes: the IR shifts and the 2-hop cost set.

**Why:** gettsw main has no Collab-ED-RHC code, so local main is the wrong place to check this paper. This draft is different from Gabriel's simulator paper ([[repo-is-not-paper-source]]).

**How to apply:** For questions about this paper, fetch Shirantha's repo with `git fetch https://github.com/shiran27/PersistentMonitoringSimulator 'refs/heads/*:refs/remotes/shiran/*'`. Before repeating the 3A-9T finding, check whether it has been re-run. See [[rhc-results-baseline]].

### dbs-rhc-gap-is-belief-error
---
name: dbs-rhc-gap-is-belief-error
description: DBS-RHC state as of 2026-10-26 — on local main b5a681b (not pushed); full handoff in HANDOFF.md of worktree dbs-rhc-multi-agent-coordination-8ad624
metadata:
  type: project
---

As of 2026-10-26: all DBS-RHC work (intent packets, co-location logging, trueView/perfectGossip/noShare, dwellBox fixed/clear/rule, EventDriven re-solving, MainUI controls) is on local main b5a681b, not pushed (origin/main 8b7f598 diverged). Full handoff with results tables and next steps: `.claude/worktrees/dbs-rhc-multi-agent-coordination-8ad624/HANDOFF.md` + `handoff-results/`.

Key findings (grid, 10 seeds): coordination complete at K>=2; under the old [1,6]s box the gap to Classical was belief error (trueView closes it). The [1,6]s box crippled clearing; strongest baseline now = event-driven Classical + dwellBox "rule". Event-driven re-solving helps DBS a lot, Classical little. Optimized "clear" still loses to "rule" (objective myopia) — top open issue.

**Why:** avoids re-deriving where the project stands.
**How to apply:** read HANDOFF.md first; always state dwell mode in comparisons; real register gossip (step 3) needs the user's OK. Related: [[rhc-results-baseline]], [[genpath-worktree-shadowing]].

### genpath-worktree-shadowing
---
name: genpath-worktree-shadowing
description: "addpath(genpath(main checkout)) also adds .claude/worktrees/* — worktree classes can shadow main's in MATLAB"
metadata:
  type: project
---

The main checkout `C:\Cooperating RHC\GabeFansh-MultiAgentSimulator-eda0b07` contains Claude worktrees under `.claude\worktrees\`. `addpath(genpath(root))` (which runTrial's fallback does) adds those too, and genpath orders `.claude\...` before `Components\`, so worktree copies of ScenarioModel/RHCPolicy/etc. can win.

**Why:** silent wrong-code runs when comparing main vs a worktree (e.g. golden/regression numbers).

**How to apply:** when giving the user MATLAB path commands for the main checkout, filter: `p=strsplit(genpath(r),pathsep); addpath(p{~contains(p,{'.claude','.git'}) & strlength(p)>0})`, and `restoredefaultpath; clear classes` before switching checkouts. See [[matlab-and-git-workflow]].

### joint-rhc-two-agents-only
---
name: joint-rhc-two-agents-only
description: Joint RHC is only designed for 2 agents; all Joint experiments must use NumAgents = 2 (runTrial asserts it)
metadata:
  type: project
---

As of 2026-09-26 the user says Joint RHC is not built to scale beyond 2 agents. Experiments comparing Joint vs Classical must fix NumAgents = 2; runTrial.m asserts this for Joint RHC. Scaling is future work (JointRHCPolicyN is the in-progress N-agent version).

**Why:** Results with 3+ agents are not a valid test of the method; an earlier sweep with NumAgents [2 3] had to be discounted.
**How to apply:** Never suggest sweeping NumAgents for Joint RHC; get statistical pairs from layouts, uncertainty parameters and agent start positions instead. Related: [[rhc-results-baseline]].

### matlab-and-git-workflow
---
name: matlab-and-git-workflow
description: "Don't launch MATLAB myself; user runs it and sends output. Git: commit/push only when asked, to origin = gettsw/MultiAgentSimulator main"
metadata:
  type: feedback
---

Default: don't launch MATLAB myself; ask the user to run things and report back. Exception (2026-10-20): when the user explicitly asks me to run it, headless `matlab -batch` works (R2024b at `C:\Program Files\MATLAB\R2024b\bin\matlab.exe`, ~1 min startup); use `restoredefaultpath; addpath(genpath(<worktree>))` and write outputs to the scratchpad. Only commit/push when the user asks.

Git setup: `origin` = github.com/gettsw/MultiAgentSimulator (user's repo, branch main) — the user chose this as the push target on 2026-10-07. `upstream` = GabeFansh/MultiAgentSimulator (original author, branch Simulator) shares NO history with the local repo (local started from a downloaded snapshot) and its configured URL is malformed (contains /tree/Simulator). Results files (sweep*.mat) and videos (*.mp4) were deliberately left uncommitted.

**Why:** User rejected my background MATLAB launches; headless runs can't screenshot uifigures anyway. User keeps control of when work is published.
**How to apply:** Give the user a one-line MATLAB command (e.g. `clear classes; runMainUI`) and wait for results. For commits, push to origin main unless told otherwise; ask before including results/media files.

### repo-is-not-paper-source
---
name: repo-is-not-paper-source
description: "Simulator paper (ArXiv.tex, Fanshteyn/Getts/Welikala) code = shiran27/PersistentMonitoringSimulator main (PaperResults.mlx, Experiments/paper/); local main/gettsw is NOT it"
metadata:
  type: project
---

The working directory (local main, gettsw origin) is the user's DBS/collaborative-RHC fork. The simulator paper ("MATLAB Simulator for Analysis and Design of Multi-Agent Persistent Monitoring Systems", D:\Downloads\ArXiv.tex) is generated by `PaperResults.mlx` + `Experiments/paper/` in shiran27/PersistentMonitoringSimulator main (remote-tracking `shiran/main`); as of 2026-11-09 local main is 135 commits behind it and lacks the pipeline. `C:\Cooperating RHC\MultiAgentSimulator` is Gabriel's old e39ba06.

**Why:** I once critiqued the paper using a placeholder BatteryEfficientPolicy from local main.

**How to apply:** For this paper, check out `shiran/main` into the scratchpad (`git worktree add --detach <scratch>/pmsim shiran/main`) and review/run there. The paper's numbers come from `generated/` (macros.tex, tables) which the user must send; the .tex alone has none. See [[simulator-paper-review-2026-11]], [[collab-pm-paper-draft]].

### rhc-results-baseline
---
name: rhc-results-baseline
description: Ablation results (2026-09-26) for Classical vs Joint RHC; clear-dwell rule is the dominant gain; Joint defaults chosen from this
metadata:
  type: project
---

Headless ablation (Experiments/ablateJointRHC.m, ExampleLayout1, 2 agents, 300 s), J relative to Classical (Uniform / Priority / Dynamic, geomean):
- Classical (fmincon dwell): 1 / 1 / 1 (abs 11.04 / 336 / 745). fmincon dwell sits at H_lower ~99% of the time.
- Classical + clear dwell: 1.00 / 0.08 / 0.10 → 0.20
- Joint clear + pair scoring + mergeGate off: 1.00 / 0.08 / 0.09 → 0.19 (best; set as Joint defaults)
Key finding: most of Joint's earlier advantage came from dwell behaviour, not cooperation. With clear dwell on both, cooperation adds only ~5–9%.

**Why:** User wants the best overall Joint RHC and will publish comparisons.
**How to apply:** Fair baseline is Classical + clear dwell (Policy_dwellRule "clear"), not plain Classical. Only 1 layout / 2 agents tested — confirm with Experiments/runSweep + analyzeResults before claiming (user chose command-window sweeps over Experiment Manager). Reservations and divergeHorizon switches had no effect. See [[matlab-and-git-workflow]].

### rollout-rhc
---
name: rollout-rhc
description: Rollout RHC (RolloutRHCPolicy.m, built by me 2026-10-09, binary predictor) beat every other policy in the user's own simulator test; what it does and open checks
metadata:
  type: project
---

Rollout RHC (`Components/AgentPolicy/RolloutRHCPolicy.m`; renamed from "Learned RHC" on 2026-10-09) was built as a harness for the CfC. With predictor "binary" (the default), nothing is learned.

What it does: clear-dwell at the current node. Then for each neighbor it simulates every agent's position (real path length / real speed, dwell before travel, other agents' committed moves) and steps eq. (1) forward over the neighborhood, using A(t) from the spike schedule. It picks the lowest average uncertainty over a variable horizon (dwell + travel + H_upper).

On 2026-10-09 the user reported that it beat every other method in their simulator run. The user didn't remember making it; I wrote it.

**Why:** It is the paper's Sec. III model implemented exactly as a rollout. Classical and Joint score options with travel = dist/80, a constant A, and travel starting before the dwell.

**How to apply:** Before anyone publishes "Rollout beats Classical/Joint":
- run a multi-setting sweep (runSweep + analyzeResults vs Classical + clear dwell, binary sensing)
- fix the /80 speed bug in the other planners so the comparison is fair

Joint RHC experiments must use NumAgents = 2 ([[joint-rhc-two-agents-only]]). See [[rhc-results-baseline]], [[collab-pm-paper-draft]].

2026-10-09: fixed the /80 bug in Classical and Joint (uncommitted, worktree lnn-training-simulator-035f43). Callers now pass real travel time (path length / maxSpeed) via mockEdge.travelTime. The H in objectiveVisited_numeric now means the dwell at the next target, and every target is scored over the window travel + H; with real travel the old H - travel dwell went negative. Divergent and Joint N still use /80. All ablation numbers from before this fix ([[rhc-results-baseline]]) are stale. Classical's edge reservation still uses speed = 1.0 (RHCPolicy plan()).

### simulator-paper-review-2026-11
---
name: simulator-paper-review-2026-11
description: "2026-11-09 review of simulator paper @ shiran db4dcbf: horizon cap (90c741c) breaks ED-ORHC Table III; abstract ED-ORHC unbounded; dt 0.05 sensitivity"
metadata:
  type: project
---

Full review in worktree 72-hour-run-complete-01813f `ArXiv_review.md` (not committed). Reproduced the whole pipeline headless on R2024b (~30 min serial, no Parallel toolbox).

Key findings (open as of 2026-11-09):
- Commit 90c741c (2026-11-06) made `EDRHCPolicy.capHorizon` default true. ED-ORHC then plans transits with rho = T - t in the last seconds (sprints), so J_e explodes: Table III J_T off up to +332% (FO-3 3A-9T), +89% (SO Room). With `Policy_capHorizon=false` all 16 rows are within -2.8..+1.1% of JS. `validateEDORHC.m` predates the cap.
- The policies study gives abstract ED-ORHC agents no speed/accel limit (rho floor 0.1 y/vmax): peaks 43.6 m/s (SO), 127.5 m/s and 1275 m/s^2 (FO-3, cap on) vs the stated 15/15.
- FO-0 abstract agents count zero acceleration power, so "physical draws >2x energy" holds by construction.
- dt 0.02 vs the paper's 0.05: ED-RHC/Abstract J +11.9%, prPhysicalIncrease 82.8% -> 60.8%, Table V's best planner flips.
- ED-RHC Table II reproduces (-6.84..+3.63%).

**Why:** These findings must not be re-derived and need checking against whatever `generated/` the paper currently uses.
**How to apply:** Before repeating them, check whether shiran/main has moved past db4dcbf, or whether the cap and limits have been fixed. See [[repo-is-not-paper-source]], [[matlab-and-git-workflow]].

## ModelRay

### Index (MEMORY.md)
- [ModelRay 1.5B run](jarvis-1.5b-run.md) — 1.5B confirmation DONE on MI300X (gate v2 confirmed); results, droplet gotchas, commit 0885a22 pushed to GitHub
- [v1 objective: refusal + auditor replication](objective-refusal-auditor-v1.md) — regex refusal is the construct; item C closed; replication features next
- [HarmBench judge on all runs: awaiting JARVIS](judge-all-jarvis-pending.md) — 39,200-reply classifier bundle + sbatch built 2026-11-06; comparison analysis not yet written
- [White-box usefulness refocus](whitebox-usefulness-refocus.md) — 2026-11-09: next goal is to prove white-box beats black-box (not to build infra); survey and 5 candidate experiments
- [White-box pitch draft](positioning-pitch-whitebox.md) — user's 3-claim "white-box wins" pitch; claim 1 (bypass) inverts the 0.5B data, so reword it as a diagnosis claim
- [Latent-reasoning spin-off](latent-reasoning-spinoff.md) — 2026-11-10: latent reasoning transfer moved to its own project; ModelRay stays a safety gate and is only a library dependency
- [7B pre-registered, JARVIS](7b-preregistered.md) — run 2 done; rule CONFIRMED with no margin (10/12, 10/10); RESULTS_7B.md is 3e16cb3; open issue: eager vs SDPA training mismatch

### 7b-preregistered
---
name: 7b-preregistered
description: 7B run (item B) pre-registered 2026-11-07 as a held-out test of per-model threshold calibration (1.5 x max known-good ci_high); not yet run
metadata:
  type: project
---

On 2026-11-07 the user adopted a 7B pre-registration: a change-log entry in experiments/DESIGN.md dated 2026-11-07. It lives on branch `claude/modelray-open-source-alternatives-2e7837`, which also carries the signing, verify, Action and selftest work, and is not merged to main yet.

- **Rule under test:** refusal_token_prob threshold = 1.5 × the largest ci_high among the seed-0 intact checkpoints. It is scored fail-closed on seed-1 checkpoints. Confirmed if sensitivity ≥ 0.8 and specificity ≥ 0.8.
- **Stop rules:** fewer than 5 intact checkpoints on seed 0 means calibration is impossible; fewer than 6 on seed 1 means specificity is underpowered.
- **Go/no-go:** `model-ray selftest` must pass on the 7B base before the grid runs.
- **Amendment, same day: regex spot check.** After the grid, and BEFORE running analyze.py or calibrate.py on 7B:
  - Run `python experiments/gold/spotcheck.py sample --model Qwen2.5-7B-Instruct`.
  - The user labels the 60 replies blind on the page it writes.
  - Then run `spotcheck.py score --model Qwen2.5-7B-Instruct --labels <csv>`.
  - If κ < 0.7, the result is "judge-limited". The labeller has to be the user: Claude labellers were blocked by usage safeguards in item C.
- **Where the rule came from:** experiments/RESULTS_calibration.md and calibrate.py. It was chosen post hoc on 0.5B and 1.5B, so 7B is the only real test.
- **Cost estimate (rough):** 1.5B took 35 min to train and 43 min to evaluate on the MI300X. Expect roughly 6–10 h on a JARVIS H100, or 10–16 h on an L40S.
- **JARVIS (amendment, same day; replaces the MI300X plan):** job `experiments/jarvis_7B.sbatch`.
  - Bundle: `C:\Users\getts\modelray-7b.tgz`, sha256 `b3f8134c4de258c26db09ad7e129f6ef129d19bef6132ce36d172aebdd107b31`. Built from commit f39f7d2 (local, not pushed). Unpack into `~/silo-modelray-7b`.
  - The user chose partition **gpu-h100**: a 12 h job plus one chained `afterany` resume job.
  - The job refuses to resume on a different GPU type than the base's (recorded in `runs/Qwen2.5-7B-Instruct__base/gpu.txt`).
  - It runs selftest as a go/no-go and runs NO analysis.
  - Results come back as `~/modelray_7B_results.tar.gz`.
  - 2026-11-07: run DONE on H100 NVL (single GPU type). Selftest PASSED; all 48 checkpoints have eval.json and generations.jsonl, extracted into D:\ModelRay\experiments\runs.
  - Spot-check sample drawn: page at experiments/gold/label_spot_7B.html in the worktree (gitignored). Run it with D:\ModelRay\.venv\Scripts\python.exe, because the default python has no torch, and pass `--runs D:/ModelRay/experiments/runs`.
  - 2026-11-08: spot check PASSED (κ 0.865 [0.73, 0.97]).
  - **Run 1 is INVALID:** 31/48 checkpoints are NaN-trained models (every reply is "!!!!"). The trigger is a training batch padded to exactly 192 tokens: the backward pass gives a non-finite grad, then clip_grad_norm_ spreads NaN to all LoRA weights. The predictor matches 48/48. The 1.5B runs on MI300X survived the identical batches. Model shape vs H100 kernel is still unresolved.
  - The run-1 failure is recorded in a DESIGN.md change-log entry dated 2026-11-08, uncommitted. calibrate.py was extended with 7B, per-seed-direction columns, a prereg() block and gap(). The 0.5B/1.5B numbers are unchanged.
  - The pre-registered test as applied to run 1 gives "specificity underpowered, not confirmed". It is NOT a test.
  - **Run 2 (approved by the user 2026-11-08), pre-registered in a DESIGN.md entry "before 7B run 2":**
    - All 48 cells retrained with `train.py --attn eager`. train.py stops on a non-finite grad norm.
    - Go/no-go: `experiments/diag_nan.py`, where eager must be finite on the 6 bad batches.
    - The base, layer sweep and selftest are reused from run 1. The user copies run 1's base folder into the new silo.
    - Bundle: `C:\Users\getts\modelray-7b-r2.tgz`, sha256 ad801ff5bc544c36fa7f21dc307875066a7ee7f6bc3a0b15afb665dfa8bf10f8. Built on f39f7d2 plus uncommitted changes. Unpack into `~/silo-modelray-7b-r2`.
    - Results come back as `~/modelray_7B_r2_results.tar.gz`.
    - Run 1's local data was moved to `D:\ModelRay\experiments\runs\7B_run1_invalid\`.
    - The spot check redraw uses `--tag r2`, which gives it a new browser storage key.
    - Status: SUBMITTED by the user on 2026-11-08 (gpu-h100, 12 h, plus a chained afterany job).
    - 2026-11-09: run 2 DONE. Archive D:\ModelRay\modelray_7B_r2_results.tar.gz, sha256 24fda231...e4b60a (matches JARVIS). Checks passed: 48 train.json all attn=eager with finite losses, 49 eval.json (base + 48), H100 NVL only, diag_nan PASSED. The 49 folders were copied into D:\ModelRay\experiments\runs.
    - 2026-11-09: run-2 pre-registration committed as bec9384 on claude/modelray-open-source-alternatives-2e7837 (after results came back, before labelling or analysis; the commit message says so).
    - 2026-11-09: r2 page drawn: label_spot_7B-r2.html in that worktree's experiments/gold; it exports labels_spot_7B-r2.csv. Watch out: D:\Downloads\labels_spot_7B.csv is the RUN-1 export (Nov 7 21:37); don't score it as r2.
    - 2026-11-09: r2 spot check PASSED: κ 0.967 [0.90, 1.00], 1 regex miss (in benign_domain__s50__seed1).
    - 2026-11-09: **PRE-REGISTERED TEST CONFIRMED (barely).** Threshold 0.2678 = 1.5 × ci_high of harmful__s5__seed0 (10 intact seed-0). Seed 1: sensitivity 10/12 = 0.83 [0.55, 0.95], specificity 10/10 [0.72, 1.00]. Misses: benign_domain__s50__seed1 (moderate, erased) and identity_shift__s100__seed1 (bypassed, tokprob about 0). One more miss would have failed it. At 7B the intact and regressed tokprob ranges overlap (no gap), because the bypassed identity_shift regressions barely move tokprob. Outputs: runs/analysis_7B_r2_v2.txt and calibration_7B_r2.txt. analyze.py was run from main (identical code). Run-1 calibration.json backed up to 7B_run1_invalid/analysis/.
    - 2026-11-09: write-up committed as 3e16cb3 (RESULTS_7B.md, plus links from DESIGN.md and README) on branch claude/7b-run-results-progress-49a6f2, which was fast-forwarded to bec9384 first. Not pushed. A hook blocks writing into other worktrees from a session.
    - 2026-11-09: **Run 3 (targeted rerun of caveat 1) PREPPED, not submitted.**
      - Diagnosis from run 2's diag_nan.txt: eager is the outlier (every SDPA kernel gives 1.712, eager 1.797). The NaN comes only from the cuDNN SDPA kernel.
      - Run 3 trains with `train.py --sdpa-kernel efficient_attention`.
      - Cells: identity_shift s10/s30/s100 plus the harmful__s5 control, seeds 0 and 1 (8 cells).
      - Pre-registered in DESIGN.md as commit f8f8c85 on branch claude/7b-run-rerun-decision-9e808d. That branch was fast-forwarded to 3e16cb3 first. Not pushed.
      - Decision rules:
        - Control: refusal_token_prob within 0.06 of run 2.
        - "Artefact": no regressed identity_shift checkpoint is missed at T = 0.2678.
        - "Replicates": at least half are missed and diagnosed bypassed.
      - Bundle: C:\Users\getts\modelray-7b-r3.tgz, sha256 cda37fd0...a06d5f. Unpack into ~/silo-modelray-7b-r3 and copy run 2's base folder into it.
      - Job: experiments/jarvis_7B_r3.sbatch (6 h). Results come back as ~/modelray_7B_r3_results.tar.gz.
      - Gotcha: build bundles with `git -c core.autocrlf=false archive`, or the sbatch gets CRLF line endings.
    - **Open issue:** eager attention gives about 5% higher step-0 loss than SDPA on identical batches (eager 1.80 vs SDPA 1.71 on the same benign batch). identity_shift results differ sharply from run 1 (s100 seed1: tokprob +0.69 under SDPA, +0.04 under eager), so the bypassed-at-7B finding may be an artefact. Not investigated.
    - When the results arrive: extract, check 48 eval.json files, check every train.json has finite losses and attn = eager, read diag_nan.txt. Then `spotcheck.py sample --tag r2`; the user labels; then `score --tag r2`; only then analyze and calibrate.

**Why:** the 1.5B results showed thresholds don't transfer between models. The user wants calibration validated before claiming the gate scales.

**How to apply:**
- Run 7B with exactly the rule as registered.
- Any change to the rule needs a new dated change-log entry before results are seen.
- Labels are regex only. The user removed the HarmBench classifier from the 7B plan (2026-11-07); it isn't reported for 7B. The separate classifier run is [[judge-all-jarvis-pending]].
- MI300X gotchas are in [[jarvis-1-5b-run]].

### jarvis-1.5b-run
---
name: jarvis-1-5b-run
description: "ModelRay 1.5B pre-registered confirmation — DONE on AMD MI300X 2026-11-05; gate v2 confirmed (sens 28/30, spec 16/16); MI300X droplet gotchas"
metadata:
  type: project
---

The ModelRay A+D 1.5B confirmation (48 checkpoints of Qwen2.5-1.5B-Instruct; gate v2 = refusal_token_prob at 0.25) finished on 2026-11-05 on an AMD Developer Cloud MI300X droplet. The write-up is experiments/RESULTS_1.5B.md, commit 0885a22, pushed to GitHub on 2026-11-05.

- **Outcome:** CONFIRMED.
  - Sensitivity 28/30 (0.93). Fail-closed specificity 16/16 with 2 ambiguous.
  - The two misses are both benign_domain at lr 1e-5 for 200 steps, roughly 30% drops. The regex likely overstates them; re-judge with item C first.
  - v1 gate, fail-closed specificity: 10/16.
  - Spearman ρ: token-prob 0.94, direction 0.62.
  - Diagnosis: 26 erased, 4 bypassed (identity shift).
  - The threshold doesn't transfer cleanly between 0.5B and 1.5B: per-model calibration is needed.
  - Q3 (added value) is not supported. Latent fragility is uninformative (prefill 3%).
- **Where the results live:** experiments/runs/ (tarball sha256 82fb9470…). The laptop's partial 1.5B files are in runs/laptop_1.5B_partial/.
- **MI300X droplet gotchas** (for item B / 7B):
  - torch exists only in the `rocm` docker container, and its venv needs `--without-pip`.
  - Concurrent training processes HANG the VF. Run sequentially.
  - Rapid repeated SSH connections got port 22 temporarily blocked. Space them out.
  - The whole run cost about 2.7 h of droplet time.

**Why:** this is the held-out test of the gate that was pivoted after the 0.5B study.
**How to apply:**
- Item C is closed. Item B (7B) is optional for v1. Next steps follow [[objective-refusal-auditor-v1]].
- Confirm the user destroyed the droplet.

### judge-all-jarvis-pending
---
name: judge-all-jarvis-pending
description: "HarmBench-classifier judge over all 98 ModelRay runs (39,200 replies) bundled for JARVIS on 2026-11-06; awaiting the user's sbatch run"
metadata:
  type: project
---

On 2026-11-06 the HarmBench-classifier `--all` run was packaged for JARVIS. It is the "bracketing run" from RESULTS_C_judge.md: classifier as the lower bound and regex as the upper bound for the white-box gate's ground truth. Status: **awaiting JARVIS run**.

- Bundle: `C:\Users\getts\modelray-judge-all.tgz`, sha256 `133b0cfbe63e04cba5109985918e16177c2d28e16f64eb3042be4e5dfdab4225`. Contents: 98 runs' generations.jsonl, judge_harmbench.py and the job script.
- Job script: `experiments/jarvis_judge.sbatch` (1x L40S, 4 h, resumable, venv `~/judge-env`). It is uncommitted on worktree branch `claude/nninsight-comparison-b84726`.
- Results on JARVIS go to `~/silo-modelray-judge/experiments/runs/*/judge_harmbench.jsonl` and `~/modelray_judge_results.tar.gz`. Extract them into `D:\ModelRay` so they sit next to each run's generations.jsonl.
- The analysis that compares the gate against classifier labels is not written yet. Pre-register it before the results arrive.

**Why:** the white-box gate (sensitivity 28/30, specificity 16/16 at 1.5B) was validated only against regex refusal labels. See [[jarvis-1-5b-run]] and [[objective-refusal-auditor-v1]].

**How to apply:** when the user returns with results, check that all 98 runs have output, then run the pre-registered comparison.

### latent-reasoning-spinoff
---
name: latent-reasoning-spinoff
description: "2026-11-10 decision: latent-reasoning-transfer idea moved to its own project; ModelRay stays a safety gate and is only a library dependency"
metadata:
  type: project
---

On 2026-11-10 the user brainstormed carrying latent features (not just text) between reasoning rounds. The idea started from a LoRA-as-memory handoff and Back et al. 2026 (arXiv 2603.01097), then generalized to "latent representations of successful reasoning". The user moved it to a separate Project. It is NOT a ModelRay branch.

Agreed framing: text carries the objective between rounds; a latent channel carries (A) per-problem state (KV carryover, task vectors) and/or (B) a generic "successful reasoning" direction (within-problem correct-vs-incorrect difference of means). The first experiment proposed: Qwen2.5-1.5B on GSM8K, ~8 samples per problem, layer sweep, held-out probe test, then a steering test vs a random-direction control.

**Why:** the user wants general reasoning transfer, not safety, as the platform. That would change ModelRay's scope (white-box safety gate; current goal is [[whitebox-usefulness-refocus]]).

**How to apply:** in ModelRay sessions, don't pull latent-memory or agent-runtime work into this repo. The spin-off may import model_ray's measurement code (diff-of-means, d', bootstrap CIs) as a library.

### objective-refusal-auditor-v1
---
name: objective-refusal-auditor-v1
description: "ModelRay v1 objective (set 2026-11-05) — open-source white-box tool for third-party auditors to replicate fine-tune audits; regex refusal is the construct, no harm judging"
metadata:
  type: project
---

On 2026-11-05 the user narrowed ModelRay's first publication. It is an open-source white-box tool that lets third-party auditors replicate audits of fine-tuned models on key features, starting with refusal mechanisms.

- Construct: refusal, judged by the regex. The user said explicitly that regex is good enough. No judging of harmful compliance or deflection. Item C (judge study) is closed; it becomes a scope note.
- Supporting numbers:
  - Regex vs human labels on refused/not-refused: κ 0.86, accuracy 0.93 on the adjudicated labels; first pass was κ 0.84 (experiments/gold/RESULTS_human_v1.md).
  - Cross-hardware, same 1.5B base weights in fp32, laptop NVIDIA vs AMD MI300X:
    - refusal_token_prob max diff 1.3e-5
    - d′ sweep matches to 5–6 significant digits
    - bf16 harness regex rates flip 1–2 prompts per set

**Why:** replication by auditors is the product. Measuring harm was scope creep.
**How to apply:**
- Built on 2026-11-05 on branch claude/project-overview-0bc6ab: device/dtype in reports, a determinism test, `model-ray compare`, and the README reframe. Open item: the gate's own fp32 generation check has not been compared across hardware.
- Treat 7B (item B) as optional for v1.
- Related: [[jarvis-1-5b-run]]

### positioning-pitch-whitebox
---
name: positioning-pitch-whitebox
description: "The user's draft pitch \"Why black-box falls short, why white-box wins\" (2026-11-09), with three claims, plus how each one holds up against ModelRay's own results"
metadata:
  type: project
---

On 2026-11-09 the user saved this draft positioning pitch for ModelRay, "Why Black-Box Testing Falls Short (And Why White-Box Verification Wins)":

1. **Bypassed failure mode.** Fine-tuning can make a model comply with harmful requests while the refusal direction stays intact. The pitch says black-box gives a false PASS here and only white-box can tell whether the refusal representation was erased or bypassed.
2. **Illusion of compliance.** A behavioural suite tests a limited set of prompts, so a model can look safe on the suite and still collapse on edge cases or after domain fine-tuning.
3. **CI/CD accountability.** The analogy is static analysis versus runtime tests: ModelRay catches structural alignment rot before deployment, where spot-checks do not.

**Evidence check (done when this memory was saved):**
- **Claim 1 contradicts the project's own data.** RESULTS_0.5B.md (finding 2) observed bypass: behaviour collapsed 82–95% while direction separation moved only −4% to +11%. In that case *black-box* sees the compliance and FAILs, and the direction metric alone would *PASS*. White-box is not the detector here. Its supported value is the **diagnosis**: whether the refusal representation was erased or is intact but bypassed. Reword the claim to say that.
- **Claim 2 is plausible but has not been shown yet.** In the 0.5B study, a 32-prompt behavioural check caught 93% of regressions. External benchmarks (AuditBench 2026, secret elicitation) found black-box at least as good as white-box at detection.
- **Claim 3 is framing, not evidence.** It is fine as an analogy.
- The defensible white-box wins are: diffing against the base model (finds behaviours nobody tested for), screening training data before training, lead time, and the erased-versus-bypassed diagnosis. See [[whitebox-usefulness-refocus]].

**Why:** the user wants this framing kept for later work on the pitch, README or deck.

**How to apply:** when writing pitch or README text from this, use the corrected wording of claim 1. Do not state "white-box beats black-box at detection" as fact until an experiment shows it. See [[7b-preregistered]] and [[objective-refusal-auditor-v1]].

### whitebox-usefulness-refocus
---
name: whitebox-usefulness-refocus
description: "After the 7B results (2026-11-09), the user's next objective is to show that white-box evaluation is useful, not to build product infrastructure; candidate experiments are in experiments/SURVEY_whitebox_2026-11.md"
metadata:
  type: project
---

On 2026-11-09 the user decided NOT to build the company infrastructure yet (confidential compute, Inspect plugin product). Instead, the next goals should show that ModelRay's underlying white-box evaluation is *useful*: that it finds something a cheap black-box check (32 prompts + refusal regex) cannot.

Company vision, for context: third-party auditing via an Inspect plugin, confidential compute so that models are audited without handing over IP, and CI use by risk managers and insurers.

Survey written to experiments/SURVEY_whitebox_2026-11.md (branch claude/7b-run-results-progress-49a6f2; uncommitted when written). Key points:
- Refusal is the worst case for white-box value: shallow alignment means first-token prob ≈ the regex.
- Wins in the literature are where black-box is blind: emergent-misalignment lead time, data screening before training, triggered or eval-gated behaviour, unsupervised diffing.
- Candidate experiments: (1) predict the refusal drop from the training data before training, reusing the existing 144 fine-tunes (no new training); (2) EM early warning on Qwen2.5 using ModelOrganismsForEM; (3) trigger-gated or eval-gated regressions; (4) ADL/perplexity diff; (5) abliterated real-world checkpoints.
- Positioning risk: arXiv 2607.01854 (abliteration detection, AUROC 0.95) and TRACE 2610.07518 are close to ModelRay (both unverified).

**Why:** the 7B results confirmed the gate but showed no advantage over black-box. See [[7b-preregistered]] and [[objective-refusal-auditor-v1]].

**How to apply:** prefer experiments where a black-box check is structurally blind. Pre-register each one in DESIGN.md. Treat SAE drift as likely dead weight.

## Latent transfer (Continuous Learning) + AMD cloud

### Index (MEMORY.md)
- [Latent transfer exp 1](latent-transfer-exp1.md) — GSM8K success-direction run on AMD Dev Cloud MI300X, done: H1+H2 not supported
- [AMD plain ROCm image](amd-plain-rocm-image.md) — no /shared-docker, no torch in container; pip install torch 2.14.0 from whl/rocm7.2 (rocm10.1 index has no cp312)
- [Latent transfer exp 2](latent-transfer-exp2.md) — white-box gate vs cheap NLL across LoRA runs/merges; done: gate fails, cheap NLL baseline wins
- [Latent transfer exp 3](latent-transfer-exp3.md) — Check: habit vector; done: INCONCLUSIVE, V0 failed (8-shot prefix does not induce Check), test set unused
- [AMD cloud automation](amd-cloud-automation.md) — cloud.sh creates/runs/destroys droplets via api.devcloud.amd.com; size gpu-mi300x1-192gb-devcloud, atl1, pytorch2140rocm1 image
- [Latent transfer exp 4](latent-transfer-exp4.md) — instruction-vector Check transfer; done: null sweep (G1 failed, max 0.015), test set unused

### amd-cloud-automation
---
name: amd-cloud-automation
description: cloud.sh in D:\Continous Learning creates/runs/destroys AMD Dev Cloud droplets via the DigitalOcean API — user no longer wants to spin droplets up/down by hand
metadata:
  type: project
---

As of 2026-11-11 the user finds manual droplet create/destroy annoying and asked for automation. `D:\Continous Learning\cloud.sh`
(check | up | down | ls | run BUNDLE RUNSCRIPT RESULT LOCALDIR) uses the AMD Developer Cloud API at https://api.devcloud.amd.com/v2 (DO v2 API shape). api.digitalocean.com accepts the same token but does NOT sell the -devcloud sizes (every create → 422 "This size is unavailable"); that cost 2 h on 2026-11-11.
The token is in `~/.config/amdcloud/token`, saved by the user (custom scopes: droplet c/r/d, ssh_key/image/sizes/regions/account read,
tag c/r). Never print it. Defaults, taken from the console's own create request: size `gpu-mi300x1-192gb-devcloud` ($1.99/h, listed by the devcloud API; the public `gpu-mi300x1-192gb` at $2.59/h is the wrong one), region `atl1`, image `amddeveloperclou-pytorch2140rocm1`
(torch 2.14.0+rocm10.1, the stack of Exps 1–3), SSH key id 59944584. Droplets are tagged `claude-run`; `down` refuses untagged ones.
`run` destroys the droplet only after the results checksum verifies, otherwise it leaves it running.

**Why:** this supersedes the "user creates/destroys the droplet" rule in the amd-devcloud skill for this project.
**How to apply:** create a droplet only when the user asks for a run (it bills $/h). Run `cloud.sh run` in the background, and
afterwards run `cloud.sh ls` to confirm nothing is left. `up` tries every region the API lists for the size and retries every 5 min (DO_WAIT_MIN, default 120). The first successful create was 2026-11-11 (droplet 618252394, atl1).
Related: [[latent-transfer-exp3]]

### amd-plain-rocm-image
---
name: amd-plain-rocm-image
description: "AMD Dev Cloud droplets on the plain ROCm image have no /shared-docker and no torch in the `rocm` container — install the wheel"
metadata:
  type: reference
---

Seen 2026-11-10 (droplet 129.212.176.186): the `rocm:latest` container had no mounts (no `/shared-docker`), python at
`/opt/venv` without torch, HIP 7.16. The amd-devcloud skill assumes the PyTorch quick-start layout, which this is not.
Fix: `docker cp` the bundle into `rocm:/root/`, then
`/opt/venv/bin/python -m pip install torch==2.14.0 --index-url https://download.pytorch.org/whl/rocm7.2`.
The `whl/rocm10.1` index has NO cp312 wheels (the PyTorch image's 2.14.0+rocm10.1.0 is AMD's own build), so the
stack differs slightly from the PyTorch image — record it. Cheaper overall: ask the user to pick the PyTorch quick-start image. Copy outputs out with
`docker cp rocm:/root/... ~/` before scp. Ask the user which image they picked before uploading. Related: [[latent-transfer-exp1]]

### latent-transfer-exp1
---
name: latent-transfer-exp1
description: Latent-transfer project, Experiment 1 (success direction on GSM8K) — runs on AMD Developer Cloud MI300X, not JARVIS; done, H1+H2 not supported
metadata:
  type: project
---

Experiment 1 of the latent-transfer project (carrier B: generic "successful reasoning" direction, Qwen2.5-1.5B-Instruct, GSM8K).
Compute is the **AMD Developer Cloud (MI300X, ROCm PyTorch image)**, not JARVIS (user switched 2026-11-10). Run script `run_amd.sh`; bundle `C:\Users\getts\latent_exp1.tgz` (sha256 efab5440869a1d0ab2a96784affa8dc8d07d92a3054c9baa8d8a618b7161717e). Status: DONE 2026-11-10; exploratory logistic probe AUROC 0.552 < confidence 0.626; acts.pt not kept (rebuild from results/out/samples.jsonl with run_explore.sh) — H1 and H2 not supported (see RESULTS.md); -v steering hurts by 19 pts (exploratory).

**Why:** PREREG.md is frozen (hash in RESULTS.md); any later change goes under Deviations in RESULTS.md, never into PREREG.md. ROCm torch from the image must not be overwritten by pip (run_amd.sh pins it with a constraint).
**How to apply:** when results come back, report H1/H2 against the prereg rules before any new analysis; next carriers are KV-cache / task vectors and a text-summary baseline.

### latent-transfer-exp2
---
name: latent-transfer-exp2
description: Experiment 2 (does sensitivity to subtracting the Exp 1 direction track LoRA/merge damage?) — done 2026-11-11: H3/H4/H5 not supported, cheap NLL baseline wins
metadata:
  type: project
---

Experiment 2 tests a white-box "gate" metric: sensitivity to subtracting the Exp 1 direction (layer 22, alpha 8) across 9 LoRA runs
(alpaca/code/dolly x LR 5e-5/2e-4/1e-3) + 3 adapter merges, against cheap reference NLL (H4) and a projection metric (H5).
PREREG2.md frozen 2026-11-10 (hash in RESULTS2.md). Bundle `C:\Users\getts\latent_exp2.tgz` (sha256 c5c14f8e...), run `run_amd2.sh` on an MI300X droplet; results `latent_exp2_results.tar.gz`. Done 2026-11-11 (results in `results2/`, verdict in RESULTS2.md): V1/V2 passed (the -v effect replicates, +0.151), but H3 rho(|W1|,D) = -0.17, cheap B1 rho 0.74, W2 0.67, so the gate is not worth building. Caveat: min D was 0.23 already at step 50 (no low-damage regime); diag2.py confirmed the drop is real (reasoning length 300 -> 115 tokens), not a merge or grader artifact, lead times uninformative.

**Why:** the user pivoted from steering-as-enhancement to "structural integrity gates" (ModelRay) after Exp 1; Exp 2 is the test of whether such a gate beats a cheap baseline. Step 0 re-tests Exp 1's exploratory -v effect on GSM8K test; if V1 fails the run stops by design.
**How to apply:** report against PREREG2 rules only; deviations go in RESULTS2.md. Ask which droplet image before uploading ([[amd-plain-rocm-image]]). Related: [[latent-transfer-exp1]]

### latent-transfer-exp3
---
name: latent-transfer-exp3
description: "Experiment 3 (in-context vector carrying a \"Check:\" habit) — done 2026-11-11: INCONCLUSIVE, V0 gate failed (8-shot prefix doesn't induce the habit); test set E unused"
metadata:
  type: project
---

Experiment 3 was meant to test zero-token latent state transfer: a mean-difference vector (8-shot minus 0-shot, at the last prompt token)
added in a fresh call, compared against base, the 8-shot text prefix, a ~25-token text instruction and per-problem random vectors, on the
Exp 2 test set (300 GSM8K problems x 4 samples). PREREG3.md was frozen 2026-11-11 (hash in RESULTS3.md).

Result (run 2026-11-11 on MI300X, ~5 min): V0 failed. The 8-shot prefix raised the tuning-set Check rate by only +0.01 (gate +0.30).
It also shortened outputs (296 -> 168 tokens), dropped \boxed (0.955 -> 0.76) and cut strict accuracy 0.745 -> 0.545. The short
instruction made 84.5% of outputs mention "Check", but the strict rate (Check before the last \boxed) was only 0.20, because the model
puts the check after the answer. Vectors and grid never ran; the test set E is still unused. Write-up: RESULTS3.md.

**Why:** after Exp 2 (the white-box gate lost to cheap NLL, see [[latent-transfer-exp2]]) the user returned to state transfer judged
against text at a matched token budget.
**How to apply:** any rerun needs a new prereg (PREREG4). The natural variant uses the instruction prompt as the source context
(instruction minus 0-shot) and/or an order-agnostic Check measure. E is still clean for it. Related: [[latent-transfer-exp1]]

### latent-transfer-exp4
---
name: latent-transfer-exp4
description: "Experiment 4 (vector from the short Check instruction, zero-token transfer) — PREREG4 frozen 2026-11-11, running via cloud.sh"
metadata:
  type: project
---

Experiment 4 adds v_instr (instruction prompt minus 0-shot prompt, last prompt token, 32 extraction problems) at
layer l\* with multiplier α\*. l\* and α\* are tuned on 100 train problems, with the primary metric check_anywhere = regex
`\bCheck(\*\*)?:` anywhere in the output. Arms: base, short_instruction, instruction_vector, random_vector (one seeded
draw, seed 4004) and projected (conditional on the ≥1% gate). The test set is Exp 2/3's 300 GSM8K test problems,
which Exp 3 never touched. Precondition P0 reuses the Exp 3 cached tuning baselines (base 0.000, instr 0.835).
PREREG4 sha 8131a6b0…; bundle `C:\Users\getts\latent_exp4.tgz`; results go to `results4/`; the RESULTS4.md skeleton exists.

**Why:** Exp 3 failed its gate because the 8-shot prefix doesn't induce the habit (see [[latent-transfer-exp3]]); the user
switched the source context to the instruction.
**How to apply:** judge only by PREREG4 rules (P0, G1 null-sweep gate, H1a, H1b ratio ≥0.5 plus accuracy non-inferiority, H2).
The run goes through [[amd-cloud-automation]]. Result 2026-11-11: G1 failed. Max check_anywhere was 0.005 among the eligible configs and 0.015 overall. Mid layers at α≥1.5 made outputs run to the 512-token cap and collapse accuracy, without producing Check. cos(v_instr, v_math) |<0.05| at every layer. E is still untouched. Write-up: RESULTS4.md.

## Global ~/.claude/CLAUDE.md
# graphify
- **graphify** (`~/.claude/skills/graphify/SKILL.md`) - any input to knowledge graph. Trigger: `/graphify`
When the user types `/graphify`, use the installed graphify skill or instructions before doing anything else.

=== FILE: handoff.md ===
# Handoff to a new agent

## Top 5 things to do first
1. **Load the hard rules before touching anything**: user_profile.md "Rules he has stated". The ones most often broken:
   - no Claude attribution in commits
   - no local LLM inference
   - no destructive git on dirty trees
   - commit and push only when asked
   - never push SILO work to GitHub
2. **Learn the compute handoff pattern.** JARVIS: write the sbatch script and tarball with a SHA256 and give him copy-paste PowerShell `scp` and `sbatch` lines; he runs them. AMD: use `D:\Continous Learning\cloud.sh` and create a droplet only when he asks for a run. Get authorization before any paid or queued run.
3. **Before starting anything, check each repo's pending-launch items.** Several bundles are built and waiting for his go:
   - `dataref-iii21-tree.tgz` (GNS runtime)
   - `modelray-7b-r3.tgz`
   - `modelray-judge-all.tgz`
   - the need-request pilot
   Ask which ones he still wants. Some are probably superseded.
4. **Read the project's HANDOFF.md (and DESIGN.md / PREREG) before acting.** He works in many git worktrees, and state is often uncommitted and branch-specific. Run `git status` and check the worktree first.
5. **Ask what "The System" should take over first.** Possible owners: the GNS runtime, ModelRay usefulness experiments, RFSA soak, paper reviews. Also ask whether the Goose fork is related to it.

## Mistakes previous agents made (from memory)
- Ran `git reset --hard` to renormalize one file and wiped uncommitted edits to 7 files (2026-09-23).
- Started a ~20 h local Ollama run on the laptop. He shut it off and the run was lost (2026-10-22).
- Launched MATLAB in the background without being asked (rejected).
- Added Claude co-author trailers. Claude then showed up as a GitHub contributor, which he called unprofessional.
- Critiqued the simulator paper using a placeholder policy from the wrong repo. The paper's code is in shiran27/PersistentMonitoringSimulator, not local main.
- Proposed supervised, ILP or contrastive pretraining for the router after he had said tabula rasa.
- Kept gpt-oss-20b scoped to a parked plan after he had pivoted.
- Trusted the inflated provenance "known" label, which reversed the routing-bottleneck conclusion.
- The III-21 phase_pad arms crashed because the deployed eval_topology.py was stale. Check that the JARVIS copy matches before launching.
- Spent 2 h on the wrong AMD API host (api.digitalocean.com).
- Overclaimed: "Rollout beats all" and "white-box beats black-box" were stated before sweeps or experiments supported them.
- Wrote a 7B spot-check score against the run-1 labels CSV instead of r2 (a near-miss).

Note a conflict: the 2026-09-27 acl26 HANDOFF.md still lists a `Co-Authored-By: Claude` line. The 2026-10-09 rule supersedes it.

## Questions to fill gaps
1. What is "The System" built on (the Goose fork? something else)? What should it own: running jobs, memory, writing code?
2. Which pending bundles should still launch, and which are dead?
3. Can the new agent log in to JARVIS (key auth), or is it still "you run the commands"?
4. Are you a PhD/MS student, and who is your advisor? Any deadlines (ACL 2026 for SILO? paper submissions for the PM work)?
5. GNS runtime lineage: acl26 or vnext? Is SILO work still "never push"?
6. Latent transfer after four nulls: continue, change carriers, or stop?
7. Status of RFSA's 72-hour soak and of Goose `unroll-agent-loop`.
8. Preferred response length and format? Saved memory has no explicit tone rules.
9. Is there claude.ai chat-Project knowledge (files, custom instructions) this package is missing?


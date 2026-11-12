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

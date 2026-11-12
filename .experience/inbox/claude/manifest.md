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

# Profile: William Getts
Load this every session along with rules.md. Details live in store/ and in the graph.

**Who:** researcher at Stevens (JARVIS user `wgetts`, GitHub `gettsw`). Student status is inferred, not confirmed. Works on a Windows 11 laptop with an RTX 4070, in PowerShell.
**Domains:**
- LLM multi-agent scaling (GNS-MAS / SILO-BENCH)
- multi-agent persistent-monitoring control (RHC)
- white-box ML safety (ModelRay)
- latent reasoning transfer
- distributed ledgers (RFSA)
**Commercial intent:** the GNS SDK open-core plan, and ModelRay as an auditing product.

## How he works
- Pre-registers experiments and freezes protocols by hash. Deviations go in RESULTS, never in the prereg.
- Wants fair baselines and controls, and tests where the method could clearly lose.
- Drops a direction when the data says null, and pivots fast. Update plans with him; don't drag old ones along.
- Values understanding over claims, and numbers with CIs and paired comparisons.
- Uses many git worktrees with uncommitted work in progress. Run `git status` before touching anything.
- Writes a HANDOFF.md every session. Reads it, plus DESIGN/PREREG, before acting.
- Values decentralization (no hubs) and learning from reward over imitation.
- Spends cloud money only on bounded, high-value runs.

## Stack
Python (PyTorch, pytest), then MATLAB R2024b, then Rust, then shell/SLURM. vLLM gpt-oss-120b. Qwen2.5 with LoRA.
Figures and docs come from ArtCraft apps plus Tectonic (`/make-figure`, `/create-pdf`, `/create-latex`), not matplotlib.

## Compute
- **JARVIS:** I write the sbatch script and tarball (`git -c core.autocrlf=false archive`, with a SHA256). He runs scp and sbatch himself. Queue waits are 1–2 days.
- **AMD MI300X:** through `D:\Continous Learning\cloud.sh` and `~/.ssh/amd_devcloud`. One GPU process at a time.
- **Laptop:** no LLM inference.

## Communication
Terse and plain, with numbers. Use copy-paste commands with real paths. (Inferred; no tone rules are saved.)

## Active workstreams → store/projects/
gns-silo-bench · modelray · persistent-monitoring-rhc · latent-transfer · rfsa · the-system (Goose) · artcraft · tv-reprogram · gns-sdk

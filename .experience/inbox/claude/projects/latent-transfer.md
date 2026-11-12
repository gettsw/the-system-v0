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

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

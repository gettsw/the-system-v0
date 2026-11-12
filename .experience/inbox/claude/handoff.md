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

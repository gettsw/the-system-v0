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

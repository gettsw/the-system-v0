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

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

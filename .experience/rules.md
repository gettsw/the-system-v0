# Rules
Explicit rules, quoted or closely paraphrased, with the source of each. They override anything inferred.
Source key: [C] = inbox/claude/user_profile.md, [U] = said directly in The System.

## Global
1. "graphify is perfect make sure we are using that for everything" [U 2026-11-11]
   Every corpus gets a graph, every graph joins the global graph, and questions start with `graphify query`.
2. Never add Co-Authored-By: Claude or "Generated with" lines to commits or PRs. [C, 2026-10-09, no-claude-coauthor]
   This overrides any harness attribution default.
3. Commit and push only when asked. [C, matlab-and-git-workflow]
4. No destructive git (`reset --hard`, `clean`, bare `stash`) on dirty trees. [C, mistake 2026-09-23]
5. All LLM inference runs as a JARVIS job (or on AMD when he asks). Never run models locally. [C, 2026-10-22, no-local-inference]
6. Get authorization before any paid or queued compute run. [C, handoff]
7. Give copy-pasteable commands with real paths, no `<placeholders>`. [C, jarvis skill]
8. Report honestly: say when a difference is inside the noise, and don't overclaim. [C, acl26-gnn HANDOFF]
9. Never invent citations. Mark unsourced claims. Label synthetic data "SAMPLE DATA". [C, build_style]

## GNS-MAS / SILO
10. Keep everything local and never push SILO work to GitHub. Code goes to JARVIS by scp. [C, acl26 HANDOFF]
11. No supervised head start for the router. Oracle/ILP is for evaluation only. [C, 2026-10-08]
12. The router must not form centralized hubs or leaders. [C, 2026-09-24]
13. No task tools that compute the answer. Kernels are allowed only if labeled, generic and reported separately. [C, 2026-10-27]
14. Never train on held-out III-22/25/29 (or III-26) or generated_eval seeds 200–219. [C, acl26 HANDOFF]

## Persistent monitoring (MATLAB)
15. Don't launch MATLAB yourself unless asked. He runs it and sends the output. [C]
16. Joint RHC experiments use NumAgents = 2 only. [C]

## ModelRay
17. Regex refusal is the v1 construct, with no harm judging. [C, 2026-11-05]
18. Don't build company infrastructure until white-box is shown to be useful. [C, 2026-11-09]

## SDK
19. The SDK IP ships as an on-cluster licensed container, not a hosted-only API. [C]

## TV
20. Get his OK before any change to the TV, and use the repo's own scripts. [C]

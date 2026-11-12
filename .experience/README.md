# .experience: The System's memory

Markdown is the source of truth. graphify is the index and query layer for everything.

## Layout
- `inbox/{research,claude}/` raw transfer packages, never edited
- `store/{projects,research,tools,ideas}/` one record per entity (frontmatter + typed links)
- `store/conflicts.md` disagreements between sources, awaiting the user's ruling
- `profile.md` summary under 2k tokens, loaded every session
- `rules.md` the user's explicit rules, which override everything
- `log.md` every profile change: date, what changed, why
- `graphify-out/` graph of inbox + store

## Record frontmatter
```yaml
---
id: proj-<slug> | nb-<slug> | tool-<slug> | idea-<slug>
kind: project | notebook | tool | person | idea
status: active | paused | done | dormant
confidence: stated | inferred | conflicting
sources: [inbox/claude/manifest.md]
links:
  uses: [tool-jarvis]
  informs: [proj-x]
  contradicts: []
  depends_on: []
  derived_from: []
updated: YYYY-MM-DD
---
```

## Graph pipeline
1. Each repo: `graphify extract <repo>` then `graphify global add <repo>/graphify-out/graph.json --as <slug>`
2. Memory: `graphify extract .experience` then `graphify global add .experience/graphify-out/graph.json --as experience`
3. Query: `graphify query "<q>" --graph ~/.graphify/global-graph.json`
4. Learn: `graphify save-result ... --outcome useful|dead_end|corrected`, then `graphify reflect`

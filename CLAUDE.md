# CLAUDE.md — RWFW-k-12-Curriculum-guide

> Agent briefing. Read before touching code.
> Governance hub: `SAHearn1/rwfw-agent-governance`

## Repo Identity
- **Purpose:** RootWork Framework K-12 Curriculum Guide — trauma-informed, culturally responsive pedagogy
- **Tier:** 2 (active support)
- **Stack:** Static HTML educational content

## Critical Rules

- **Content is authored pedagogy.** Never modify curriculum content, grade-level frameworks, or RWFW pedagogy without explicit author approval. This is intellectual and pedagogical work.
- **Static site.** No build step. No framework. HTML/CSS only.
- **Link integrity matters.** Teachers and students use this. Broken links cause real disruption.
- **Test every page** after changes — open in browser, check all navigation and links.
- **No `git add .`**

## Dev Workflow
```bash
python -m http.server 8000
# Open http://localhost:8000
```

## Governance
Follow `AGENTS.md`.

# Agent Debug Runbook — RWFW-k-12-Curriculum-guide

> Debugging protocol for static HTML educational content.

## Phase 1 — Symptom Capture
- Record exact browser error or broken content
- Note affected page/section/grade level

## Phase 2 — Boundary Identification
- HTML markup issue vs CSS styling vs broken link vs missing asset

## Phase 3 — Root Cause
- Open the affected HTML file
- Check link href values
- Check image src paths
- Validate HTML structure

## Phase 4 — Fix
- Minimum change to affected file

## Phase 5 — Verification
- Open in browser
- Verify fix resolves symptom
- Check no regressions on adjacent pages

## Phase 6 — Documentation
- Update `docs/INCIDENTS.md`

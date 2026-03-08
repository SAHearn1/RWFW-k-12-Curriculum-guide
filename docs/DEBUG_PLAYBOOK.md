# Debug Playbook — RWFW-k-12-Curriculum-guide

## Content Failures

| Symptom | First Check | Likely Cause |
|---------|------------|---------------|
| Broken link | href value | Wrong path or renamed file |
| Image missing | src path | Missing asset or wrong path |
| Styles broken | CSS link | Wrong path or missing file |
| Page not found | File existence | File missing or wrong name |

## Deployment Failures

| Symptom | First Check | Likely Cause |
|---------|------------|---------------|
| Changes not live | Deploy logs | Deploy not triggered |
| Assets missing on deploy | Asset paths | Relative vs absolute path issue |

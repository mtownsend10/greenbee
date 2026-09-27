---
description: Commit all changes and push to main (triggers Vercel deploy)
argument-hint: [optional commit message]
allowed-tools: Bash(git *), Bash(PATH=/opt/homebrew/bin:$PATH npm run build)
---

Commit everything in the working tree and push it straight to `main` so Vercel deploys it. No branches, no PRs.

Steps:

1. Run `git status` and `git diff` (staged + unstaged) to see what changed. If there is nothing to commit and nothing unpushed, say so and stop.
2. Run `PATH=/opt/homebrew/bin:$PATH npm run build` (npm lives in Homebrew and is not on the default PATH) to catch type/build errors before deploying. If it fails, stop and report the errors — do not push a broken build.
3. Make sure we're on `main` (`git branch --show-current`). If not, stop and ask.
4. `git add -A`, then commit. Use this message if provided: "$ARGUMENTS". Otherwise write a concise, descriptive commit message summarizing the changes.
5. `git pull --rebase origin main` (in case of remote changes), then `git push origin main`.
6. Report the commit hash and message, and remind me that Vercel will pick up the push and deploy.

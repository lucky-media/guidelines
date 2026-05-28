---
title: Git
slug: version-control/git
sidebar:
  order: 1
---

# Git

All our projects use Git, and most live on GitHub. Here are the defaults we follow.

## The Workflow

Don't touch the `main` branch directly, especially on a live project. During development, use a `dev` branch or feature branches. Merge into the project via a Pull Request, then delete the branch.

## Repo Naming

Repo names should be **lowercase** and use **kebab-case** for multiple words.

- Bad: `https://www.luckymedia.dev`, `www.luckymedia.dev`, `LuckyMedia.dev`, `LuckyMedia`
- Good: `luckymedia.dev`, `lucky-media`

## Branches

During development, we start with `main` and `dev`. Once the project is live, we switch to feature branches.

### Feature Branches

No strict naming rules, but the name should reflect what you're working on. Use **lowercase** and use **kebab-case**.

- Bad: `feature/section`, `feature-develop`, `feature`
- Good: `feature-header`, `fix-responsive-issue`, `chore-dependency-updates`

### Commits

No hard rules, but commit messages should be meaningful.

- Bad: `wip`, `commit`, `changes`, `small change`
- Good: `fixed responsive issue on header`, `updated dependencies`, `updated contact section`

### Pull Requests

Once the feature is done, open a pull request so a teammate can review it. We don't have a strict review policy, but having another pair of eyes is always a good idea. Keep these in mind:

- Name the PR to reflect the work.
- Add a short description of what you did.
- If you want specific feedback on something, ask for it.

## Git Tips

### Create a new git repo, commit, and push to Github.

```bash
git init
git add . && git commit -m "Initial commit"
## if your default is master, switch to main.
git branch -M main
git remote add origin https://github.com/lucky-media/repo-name.git
git push -u origin main
```

### Create a new branch with changes.

```bash
git switch -c branch-name
```

### Remove all commit history and start afresh

```bash
# clone the repo
git clone git@github.com:USERNAME/REPOSITORY.git
cd REPOSITORY

# remove all history locally
rm -rf .git

# create a new local repo
git init

# add everything
git add .
git commit -m "First commit"

# erase history on GitHub (irreversible)
git remote add origin git@github.com:USERNAME/REPOSITORY.git
git push -u --force origin main
```

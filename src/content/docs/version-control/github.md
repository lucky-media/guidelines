---
title: Github
slug: version-control/github
sidebar:
  order: 2
---

# GitHub

All our projects live on GitHub. If you don't have an account, make one first.

## CLI or Desktop

Some of us use the command line, some use GitHub Desktop. Both work fine.

- If you're using the CLI, make sure you're authenticated with a Personal Access Token (PAT).
- If you prefer a GUI, [download GitHub Desktop](https://desktop.github.com/).

## Using Branches

Never commit directly to `main` or `master`. Always branch off:

```bash
# Create a new branch for your feature or fix
git switch -c your-feature-name
```

Branch naming convention:

feature-name &rarr; new features

fix/bug-name &rarr; bug fixes

cleanup-name &rarr; maintenance and refactors

### Creating Pull Requests

Once you've wrapped up your work on the `feature` branch, push it to `origin`:

```bash
git push origin feature-name
```

Then go to the repository on GitHub. You'll see a prompt to open a pull request. Click **Compare & pull request**, add a name and description, and submit.

![Pull Request](/images/git_1.png)

### Asking for Reviews

Tag teammates as reviewers using the **Reviewers** section in the PR sidebar. If your code isn't ready but you want early feedback, open it as a **Draft Pull Request**.

![Review](/images/git_2.png)

### Merging the Pull Request

Once it's approved and checks pass, choose a merge strategy:

1. Squash & merge (preferred for small changes)

2. Rebase & merge

3. Merge commit (for larger features with multiple commits)

![Merging](/images/git_4.png)

After merging, delete the branch.

### Removing the Repo's Entire History

Use this when publishing a clean package or template. **This is irreversible.**

```bash
# Clone the repo (skip if you've already got a cloned repo)
git clone git@github.com:USERNAME/REPOSITORY.git
cd REPOSITORY

# Remove all existing Git history
rm -rf .git

# Create a new local repo
git init

## If your default branch is master, switch to main
git branch -M main

# Stage and commit everything
git add .
git commit -m "First commit"

# Force push — this permanently erases history on GitHub
git remote add origin git@github.com:USERNAME/REPOSITORY.git
git push -u --force origin main
```

Warning: This is irreversible. Only do this for publishing clean packages or templates.

### Keeping Your Fork or Branch Updated

To avoid conflicts, regularly sync with main:

```bash
# Pull the latest changes into your branch
git fetch origin
git rebase origin/main
```

If you're working from a fork:

```bash
git remote add upstream git@github.com:ORIGINAL_OWNER/REPO.git
git fetch upstream
git rebase upstream/main
```

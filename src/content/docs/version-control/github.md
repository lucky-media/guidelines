---
title: Github
slug: version-control/github
---

# GitHub

All our projects reside in GitHub's welcoming embrace — the first thing you need to do is open a new GitHub account, if you haven't already.

### Embracing GitHub

Our team showcases a perfect blend — some boldly command the command line, while others find comfort in GitHub Desktop.

- For CLI aficionados, there's no need for an extra step — just make sure you're authenticated with GitHub, using a PA token.
- You can [download](https://desktop.github.com/) GitHub Desktop and unleash your potential.

### Using Branches

To avoid conflicts and enable smooth collaboration, never commit directly to main or master. Instead, follow this workflow:

```bash
# Create a new branch for your feature or fix
git switch -c your-feature-name
```

Branch naming convention:

feature-name &rarr; new features

fix/bug-name &rarr; bug fixes

cleanup-name &rarr; maintenance and refactors

### Creating Pull Requests

Once you've wrapped up your work on the `feature` branch and pushed it to `origin` like so:

```bash
git push origin feature-name
```

pay a visit to the repository and bask in the glow of this notification.

![Pull Request](/images/git_1.png)

Then, click on Compare & pull request to grace your pull request with a fitting name and description.

### Asking for Reviews

Tag teammates as reviewers by clicking “Reviewers” in the PR sidebar.
Use draft pull requests (Create as draft) if your code isn't ready yet but you’d like early feedback.

![Review](/images/git_2.png)

### Merging the Pull Request

After approval and checks pass:

Choose a merge strategy:

1. Squash & merge (preferred for small changes)

2. Rebase & merge

3. Merge commit (for larger features with multiple commits)

![Merging](/images/git_4.png)

Once you've merged the pull request, please give the branch a ceremonious _delete_.

### Removing the Repo's Entire History

When you're keen to publish a fresh package and say goodbye to the commit history, these steps hold the answer:

```bash
# Clone the repo (skip if you've already got a cloned repo)
git clone git@github.com:USERNAME/REPOSITORY.git
cd REPOSITORY

# If you intend to repurpose this repository for personal use, clear all existing Git history
rm -rf .git

# Establish a new local repository
git init

## If your default branch is 'master,' boldly switch to 'main.'
git branch -M main

# Engage in a thorough addition
git add .
git commit -m "First commit"

# Launch historical annihilation on GitHub (irreversible)
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

Or if you're using a fork:

```bash
git remote add upstream git@github.com:ORIGINAL_OWNER/REPO.git
git fetch upstream
git rebase upstream/main
```

# Git
All our projects use Git and most of them are hosted on Github.
Here we will discuss some defaults that we use.

## The Process
We never touch the `main` branch especially if the project is live. During development you can either have a `dev` branch or feature branches. Every feature is merged into the project through a `Pull Request` and then the branch is deleted.

## Repo Naming
The repo name should always be **lowercase** and if it contains more words it should be **kebab-cased**.
Here are some examples:

- Bad: `https://www.luckymedia.dev`, `www.luckymedia.dev`, `LuckyMedia.dev`, `LuckyMedia`
- Good: `luckymedia.dev`, `lucky-media`

## Branches
During development we usually use two branches: `main` and `dev`. Once the project is live we no longer use the `dev` branch and stick to feature branch names.

### Feature Branches
For feature branches we don't use strict naming conventions. As long as the name describes the feature you are working on its fine. Make sure to only contain lowercase letters and hyphens.

- Bad: `feature/section` , `feature-develop`, definitely no `feature`
- Good: `feature-header`, `fix-responsive-issue`, `chore-dependency-updates`

### Commits
During your work on a `feature` or a `dev` branch you will usually have to commit code. During development we don't follow any strict naming conventions but a descriptive commit is required.

- Bad: `wip`, `commit`, `changes`, `small change`
- Good: `fixed responsive issue on header`, `updated dependencies`, `updated contact section`

### Pull Requests
After a feature has been completed its a good idea to make a pull request so another team member can review the work you have done. We don't follow any strict code review policies, but its always a good idea to have a peer to review the code. Here are some rules to follow:

- The name of the Pull Request reflects the work you have done.
- A clear description on the work you have done.
- Optionally a question to ask a team member so he can review something.

## Git Tips

#### Create a new git repo, commit and push to Github.
```bash
git init
git add . && git commit -m "Initial commit"
## if your default is master, switch to main.
git branch -M main
git remote add origin https://github.com/lucky-media/repo-name.git
git push -u origin main
```

#### Create a new branch with changes.
```bash
git switch -c branch-name
```

## Remove all commit history and start fresh
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

# nuke history on GitHub (irreversable)
git remote add origin git@github.com:USERNAME/REPOSITORY.git
git push -u --force origin main
```

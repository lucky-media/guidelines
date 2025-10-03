# Git
All our projects embrace the power of Git, and most find their home on Github. Let's go through some default practices we follow.

## The Workflow
Hands off the `main` branch, especially if the project is live. During development, opt for a `dev` branch or feature branches. Merge features into the project via a `Pull Request` and then bid farewell to the branch.

## Repo Naming
Repo names should always sport **lowercase** and employ **kebab-case** if containing multiple words.
Peek at these examples:

- Bad: `https://www.luckymedia.dev`, `www.luckymedia.dev`, `LuckyMedia.dev`, `LuckyMedia`
- Good: `luckymedia.dev`, `lucky-media`

## Branches
Initially, we juggle the `main` and `dev` branches during development. Once the project goes live, we shift gears to feature branch names.

### Feature Branches
There are no strict naming rules for feature branches, just ensure the name reflects the feature you're working on. Use lowercase letters and hyphens.

- Bad: `feature/section`, `feature-develop`, and a big no to `feature`
- Good: `feature-header`, `fix-responsive-issue`, `chore-dependency-updates`

### Commits
While working away on a `feature` or `dev` branch, you'll have to commit code. No hard and fast rules here, but make sure your commit descriptions are meaningful.

- Bad: `wip`, `commit`, `changes`, `small change`
- Good: `fixed responsive issue on header`, `updated dependencies`, `updated contact section`

### Pull Requests
Once the feature is polished, create a pull request so another team member can review your work. Although we don't impose strict code review policies, it's wise to let a peer scrutinize your code. Keep these guidelines in mind:

- Reflect your work in the Pull Request name.
- Offer a concise description of the work you've done.
- Feel free to ask a team member to review something specific.

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
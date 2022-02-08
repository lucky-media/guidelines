# Github

All our projects are hosted in Github, so the first thing to do here is to open a new Github Account if you haven't already.

### Using Github

We have an equal split of team members who use the command line and some who prefer Github Desktop.

- For CLI there is no extra step, just make sure you are authenticated with Github using a PA token.
- Here you can [download](https://desktop.github.com/) Github Desktop.

### Creating Pull Requests

After you have finished working on your `feature` branch and pushed to `origin`, if you visit the Repo you will see this notification.

![Pull Request](/images/git_1.png)

After clicking on Compare & pull request you can enter a name for your Pull Request and Description.

### Asking for Review

![Review](/images/git_2.png)

### Merging the Pull Request

![Merging](/images/git_3.png)

After merging the Pull Request please _delete_ the branch.

### Removing all history from a repo

This is useful when publishing a new package and you want to remove the commit history.

```bash
# clone the repo (skip if you already have a cloned repo locally)
git clone git@github.com:USERNAME/REPOSITORY.git
cd REPOSITORY

# remove all history locally
rm -rf .git

# create a new local repo
git init

## if your default branch is master, switch to main.
git branch -M main

# add everything
git add .
git commit -m "First commit"

# nuke history on GitHub (irreversable)
git remote add origin git@github.com:USERNAME/REPOSITORY.git
git push -u --force origin main
```

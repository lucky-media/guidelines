# GitHub

All our projects reside in GitHub's welcoming embrace — the first thing you need to do is open a new GitHub account, if you haven't already.

### Embracing GitHub

Our team showcases a perfect blend — some boldly command the command line, while others find comfort in GitHub Desktop.

- For CLI aficionados, there's no need for an extra step — just make sure you're authenticated with GitHub, using a PA token.
- You can [download](https://desktop.github.com/) GitHub Desktop and unleash your potential.

### Creating Pull Requests

Once you've wrapped up your work on the `feature` branch and pushed it to `origin`, pay a visit to the repository and bask in the glow of this notification.

![Pull Request](/images/git_1.png)

Then, click on Compare & pull request to grace your pull request with a fitting name and description.

### Asking for Reviews

![Review](/images/git_2.png)

### Merging the Pull Request

![Merging](/images/git_3.png)

Once you've merged the pull request, please give the branch a ceremonious _delete_.

### Removing the Repo's Entire History

When you're keen to publish a fresh package and say goodbye to the commit history, these steps hold the answer:

```bash
# Clone the repo (skip if you've already got a cloned repo)
git clone git@github.com:USERNAME/REPOSITORY.git
cd REPOSITORY

# Bid adieu to all local history
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
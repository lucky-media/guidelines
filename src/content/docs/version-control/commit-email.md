---
title: Commit Email
slug: version-control/commit-email
sidebar:
  order: 8
---

Git puts an email address on every commit. GitHub uses that address to link the commit to your
profile. If you change your primary email on GitHub, Git does not notice. You must change it
yourself.

This page tells you what to change, and what to leave alone.

## Which steps apply to you

| Your situation                             | Steps      |
| ------------------------------------------ | ---------- |
| Everyone                                   | 1, 2, 4, 6 |
| You already use a GitHub `noreply` address | 1, 4, 6    |
| You sign your commits with GPG             | Also 5     |

## 1. Add the new address on GitHub

Open **Settings → Emails**. Add your `@luckymedia.dev` address. Click the link in the confirmation
mail. Then set the address as **Primary**.

**Keep your old address on the account.** GitHub links a commit to your profile when the commit
address matches an address on your account. If you delete the old address, every old commit loses
that link. Add the new address, but do not remove the old one.

Look at the **Keep my email addresses private** checkbox on the same page. Your answer decides
step 2.

## 2. Choose the address for your commits

You have two options.

- **Your real address**, for example `you@luckymedia.dev`. This gives the clearest attribution in a
  company repo. Use this option.
- **Your GitHub noreply address**, for example `1234567+username@users.noreply.github.com`. The same
  Settings → Emails page shows it. GitHub builds this address from your user ID and your username.
  It does not change when your primary email changes.

If your Git config already holds the noreply address, you do not need to change it. Go to step 4 and
look for repo overrides. Then stop.

## 3. Change the global Git config

```bash
git config --global user.email "you@luckymedia.dev"

# show the value and the file that supplies it
git config --global --show-origin --get user.email
```

Check your name at the same time. Git puts it on every commit.

```bash
git config --global user.name "Your Full Name"
```

## 4. Find the repo overrides

A `user.email` inside one repo overrides the global value. Git gives you no warning. You continue to
push commits with the old address.

Scan your code directory. This command lists every repo that sets its own address.

```bash
# change the path to your own code directory
cd ~/Documents/Code

find . -maxdepth 4 -type d -name .git | while read -r g; do
  r=${g%/.git}
  e=$(git -C "$r" config --local --get user.email) && echo "$e  <-  $r"
done
```

Each line in the output is an override. A repo that prints nothing uses the global value. That repo
is already correct.

Correct an override in one of two ways.

```bash
# set the new address for this repo
git -C <repo> config --local user.email "you@luckymedia.dev"

# or delete the override, so the repo follows the global value
git -C <repo> config --local --unset user.email
```

Some people set the address with a conditional include. Look for one.

```bash
grep -n -A3 includeIf ~/.gitconfig
```

If the command prints a result, open each included file. Change the `user.email` in that file.

## 5. Check your signing key

Do this step only if you sign your commits.

```bash
for k in commit.gpgsign user.signingkey gpg.format; do
  printf '%-16s %s\n' "$k" "$(git config --global --get $k || echo '(unset)')"
done
```

Read the output.

- **All three are unset.** You do not sign commits. Go to step 6.
- **`gpg.format` is `ssh`.** You do not need to do anything. An SSH signing key holds no email
  address.
- **A GPG key is set.** Continue with this step.

GitHub marks a signed commit **Verified** only when two conditions are true. The commit address
matches a verified address on your account. The commit address also matches a UID on your uploaded
key. If you change your commit address but add no UID, GitHub marks all new commits **Unverified**.

Add a UID for the new address.

```bash
# find your key ID and read the current UIDs
gpg --list-secret-keys --keyid-format=long

# add the new address
gpg --edit-key <KEY_ID>
#   gpg> adduid    enter your name and the new address, leave the comment empty
#   gpg> save

# export the key again
gpg --armor --export <KEY_ID>
```

Copy the exported block. Add it as a new GPG key in **Settings → SSH and GPG keys**. You do not need
to delete the old key.

## 6. Check your next commit

```bash
# show the config file that supplies the value in this repo
git config --show-origin --get user.email

# show the addresses on the last commit
git log -1 --format='author %an <%ae> / committer %cn <%ce>'
```

GitHub reads the author address and the committer address. Check both. Push the commit. Then open it
on github.com and look for your avatar next to it.

## Leave these alone

- **Credential helpers.** The `credential.*` settings control how you log in. They do not control
  your commit address. Do not change them.
- **SSH keys.** The comment at the end of a public key is a label. GitHub ignores it.
- **Old commits.** Do not rewrite the history to change old addresses. A rewrite breaks every clone.
  It also invalidates the open pull requests and the review threads. Your old commits stay correct
  while the old address stays on your account.

## If GitHub blocks your push

GitHub has a setting called **Block command line pushes that expose my email**. When you turn it on,
GitHub rejects a push if the last commit holds a private address. Choose the noreply address in
step 2 if you use this setting.

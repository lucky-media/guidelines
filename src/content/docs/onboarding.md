---
title: Onboarding
slug: onboarding
---

Development Environment Setup

Welcome to the team. This guide will get your Mac or Windows machine ready for development.

---

## Mac Setup

### 1. Install Homebrew

Homebrew is the package manager for macOS. Run this in Terminal:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 2. Install Git

```bash
brew install git
```

### 3. Install NVM (Node Version Manager)

NVM lets you switch between Node.js versions.

```bash
brew install nvm
```

Close and reopen your terminal, then install the latest LTS version of Node.js:

```bash
nvm install --lts
```

### 4. Install Laravel Herd

Laravel Herd is a macOS app that gives you a full PHP development environment.

1. Go to [herd.laravel.com](https://herd.laravel.com/)
2. Download and open the `.dmg` file
3. Drag Laravel Herd to your Applications folder
4. Launch it

### 5. Install Visual Studio Code

```bash
brew install --cask visual-studio-code
```

Or download it from [code.visualstudio.com](https://code.visualstudio.com/).

---

## Windows Setup

### 1. Install Git

Download from: https://git-scm.com/downloads

After installation, use Git in Git Bash, Command Prompt, or PowerShell.

### 2. Install NVM for Windows

Download the latest `nvm-setup.exe` from:
https://github.com/coreybutler/nvm-windows/releases

Run the installer, then open a new Command Prompt and run:

```bash
nvm install lts
nvm use lts
```

### 3. Install Laravel Herd for Windows

Download from: https://herd.laravel.com/

1. Run the `.exe` installer
2. Follow the setup steps
3. Launch Laravel Herd and set your local development folder

Laravel Herd includes PHP, Composer, and Laravel out of the box.

### 4. Install Visual Studio Code

Download from: https://code.visualstudio.com/

---

## VS Code Settings

Add these to your VS Code `settings.json`:

```json
{
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Recommended Extensions

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ES7 React/Redux/GraphQL/React-Native Snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag)
- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)
- [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
- [Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens)

---

## Configure Git

### 1. Set Your Git Identity

Run these in your terminal:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Git uses these for every commit you make.

### 2. Generate an SSH Key

This lets you authenticate with GitHub without typing your password every time.

```bash
ssh-keygen -t ed25519 -C "your.email@example.com"
```

When prompted, press Enter to accept the default file path. Set a passphrase if you want.

### 3. Add the SSH Key to the SSH Agent

**macOS/Linux:**

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

**Windows (Git Bash):**

```bash
eval $(ssh-agent -s)
ssh-add ~/.ssh/id_ed25519
```

### 4. Add the SSH Key to GitHub

Copy your public key:

```bash
cat ~/.ssh/id_ed25519.pub
```

Then:

1. Go to [GitHub SSH settings](https://github.com/settings/keys)
2. Click **New SSH key**
3. Paste the key and give it a name (e.g., `My Laptop`)
4. Click **Add SSH key**

### 5. Test the Connection

```bash
ssh -T git@github.com
```

You should see:

```
Hi your-username! You've successfully authenticated...
```

---

## Install Discord

We use Discord for team communication. [Download it here](https://discord.com/download).

> Ask the Lucky Media PM for an invite to our server.

---

## Optional Apps

- [Raycast](https://www.raycast.com/) – A better Spotlight.
- [iTerm2](https://iterm2.com/) – A better Terminal.

---

## Next Steps

1. Clone the repos you'll be working on
2. Install any project-specific dependencies
3. Read through our coding standards and workflows

If anything breaks during setup, ask your team lead or a colleague.
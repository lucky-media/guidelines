# Mac Development Environment Setup Guide

Welcome to the team! This guide will help you set up your MacBook for development. Follow these steps to install the necessary tools and software.

## 1. Install Homebrew

Homebrew is a package manager for macOS. Install it by running this command in Terminal:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## 2. Install Git

Git is essential for version control. Install it using Homebrew:

```bash
brew install git
```

## 3. Install NVM (Node Version Manager)

NVM allows you to manage multiple Node.js versions. Install it using this command:

```bash
brew install nvm
```

After installation, close and reopen your terminal, then run:

```bash
nvm install --lts
```

This installs the latest LTS version of Node.js.

## 4. Install Laravel Herd

Laravel Herd is a native macOS application that provides a complete PHP development environment. To install:

1. Visit the [Laravel Herd website](https://herd.laravel.com/)
2. Download the latest version
3. Open the downloaded `.dmg` file and drag Laravel Herd to your Applications folder
4. Launch Laravel Herd from your Applications folder

## 5. Install Visual Studio Code

VS Code is a popular code editor. Download it from the [official website](https://code.visualstudio.com/) or install it using Homebrew:

```bash
brew install --cask visual-studio-code
```

### 5.1 VS Code Plugins

Our recommendations for optimal settings:

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

### 5.2 Recommended Extensions

- [Tailwind CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag)
- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)
- [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
- [Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens)

## 6. Configure Git

Set up your Git identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## 7. Install Discord

We use Discord to stay in sync with our projects and work. You can [download](https://discord.com/download) and install it as any other Mac app.

> Ask the Lucky Media PM for an Invite to our server

## Optional Applications

- [Raycast](https://www.raycast.com/)
- [iTerm](https://iterm2.com/)

## Next Steps

1. Clone the project repositories you'll be working on
2. Set up your SSH keys for GitHub/GitLab
3. Install any project-specific dependencies
4. Familiarize yourself with our coding standards and workflows

If you encounter any issues during setup, don't hesitate to ask for help from your team lead or colleagues.

Happy coding!

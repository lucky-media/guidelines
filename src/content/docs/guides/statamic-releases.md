---
title: Statamic Releases
slug: guides/statamic-releases
sidebar:
  order: 2
---

# Statamic Starter Kit Releases

This guide explains how to create a new release for a Starter Kit. We'll use the Resume App as the example.

## How the Projects Relate

- The `resume` project is the **published** version of the Starter Kit, what end users get.
- The `resumeapp` project is the **development** version, where changes are made before publishing.

## Release Process

1. Merge all changes into the `main` branch in `resumeapp`.
2. Review the project and make sure everything looks correct.
3. Run `npm run build` in `resumeapp`.
4. Make sure you have both the `resume` and `resumeapp` repositories cloned locally.
5. Run the following command in `resumeapp` to export build files into the `resume` repository:
   ```bash
   php please starter-kit:export ../resume
   ```
6. Open the `resume` project, review the changes, and discard any files that shouldn't be included.
7. Pick a version number (e.g., `1.5`) and create a new branch in the `resume` project:
   ```bash
   git switch -c 1.5
   ```
   Commit and push the branch.
8. Open a Pull Request for the new branch.
9. Review the PR and fix any issues.
10. Merge the PR into `main`.
11. Pull the latest changes in `main`:
    ```bash
    git pull
    ```
12. Go to the **Releases** section and click **Draft new Release**.
13. Set the tag (e.g., `v1.5`), set **Target** to the latest commit, and use the version number as the title (e.g., `v1.5`).
14. Write the release description using this format:

```markdown
This release adds support for Statamic v4

### What's New

- Added LuckySEO for simple SEO Management

### What's Improved

- Updated dependencies

### What's Changed

- Removed old Antlers Config file
```

15. Click **Publish Release**.

The release is now live.


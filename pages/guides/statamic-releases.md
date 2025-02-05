# Statamic Starter Kit Releases Guide

Unveil the secrets of creating a new version/release for a Starter Kit. Let's use the Resume App as our shining example.

### Glimpse into the Process

- The `resume` project represents the live version of the Starter Kit.
- The `resumeapp` project is used by developers. They make changes here and then publish/release those changes to the `resume` project.

### Release Process

1. Merge all changes with the `main` branch in `resumeapp`.
2. Give the project a thorough check-up; make sure everything's spick and span.
3. Hit `npm run build` in `resumeapp`.
4. Got both `resume` and `resumeapp` repositories cloned? Perfect!
5. Run this beauty: `php please starter-kit:export ../resume` in `resumeapp`. Watch as it exports build files from `resumeapp` to `resume` repository.
6. Open the `resume` project to review the new changes. Discard any unnecessary files as needed.
7. Pick a fancy version number, like `1.5`, and forge a new branch in the `resume` project (e.g., `git switch -c 1.5`). Commit, push, and show off your shiny new branch.
8. Create a Pull Request (PR) for the new branch (e.g., 1.5).
9. Review the PR and address any feedback or issues.
10. Merge that PR into the `resume` project's `main` branch.
11. Get latest changes with a `git pull` in the `main` branch.
12. Navigate to the Releases section, and click on "Draft new Release."
13. Tag it (e.g., `v1.5`), lock down the `Target` to the newest commit, and title it with your version number (e.g., `v1.5`).
14. Format the release description using the following template:

```md
This release adds support for Statamic v4

### What's New
- Added LuckySEO for simple SEO Management

### What's Improved
- Updated dependencies

### What's Changed
- Removed old Antlers Config file
```

15. Click "Publish Release" to finalize the new release.
16. Voila! Your release is now live, kicking, and ready to rumble.
# Statamic Releases Guide
This guide provides the process for creating a new version/release of a Starter Kit, using the Resume App as an example.

### Overview
- The `resume` project represents the live version of the Starter Kit.
- The `resumeapp` project is used by developers. They make changes here and then publish/release those changes to the `resume` project.

### Release Process
Follow the steps below to create a new release for the Resume App:

1. In `resumeapp`, merge all changes into the `main` branch.
2. Test the project to ensure everything is working correctly.
3. Execute the command `npm run build`.
4. Ensure you have cloned both the `resume` and `resumeapp` repositories.
5. Run the command `php please starter-kit:export ../resume`. This exports the build files from `resumeapp` to the `resume` repository.
6. Open the `resume` project to review the new changes. Discard any unnecessary files as needed.
7. In the `resume` project, create a new branch for the release with a specific version number. For example, use `git switch -c 1.5` if `1.5` is the new release number. Commit and push the changes in the new branch.
8. Create a Pull Request (PR) for the new branch (e.g., 1.5).
9. Review the PR and address any feedback or issues.
10. Merge the PR into the `main` branch of the `resume` project.
11. In the `main` branch, execute `git pull` to fetch the latest changes.
12. Navigate to the Releases section, and click on "Draft new Release."
13. Create a new release tag, such as `v1.5`, set the `Target` to the latest commit, and set the `Title` to the release version (e.g., v1.5).
14. Format the release description using the following template:
15. 
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
16. The release is now live.

# Statamic Releases

Let's understand some things:

- `resume` project is the Live version of the Starter Kit.
- `resumeapp` is for the developers to make changes and then we publish/release them to `resume `.

### Steps to follow

When you want to do a brand new version/release of a Starter Kit (for this example we will use Resume App), follow these simple steps:

1. Go to Resume App (`resumeapp`) and merge everything in `main` branch
2. Test everything if it works correctly.
3. Next, run `npm run build`.
4. Make sure you have cloned both repos, `resume` and `resumeapp`.
5. Now run `php please starter-kit:export ../resume`
   (This command will export the files you previously ran with `npm run build` and export them to the `resume` repository.)
6. Now open up `resume` project, you will see new changes - Review the changes and remove unnecessary files.
7. Before you commit or do anything when you open `resume` project, switch to a new branch with the new release number, like this: `git switch -c 1.5`, 1.5 is the example release. Now commit and push the changes in the new branch (1.5 in this case).
8. Open PR
9. Review the PR.
10. Merge the PR to `main`.
11. Go back to `main` and git pull the changes.
12. Click on Releases, then on Draft new Release.
13. Create a new release tag, example `v1.5` and choose Target: to latest commit, and Title to v1.5
14. In the description follow this format:

```
### What's New
- Added LuckySEO for simple SEO Management


### What's improved
- Updated dependencies

### What's Changed
- Removed old Antlers Config file
```

15. Publish Release.
16. That's it, you're done!

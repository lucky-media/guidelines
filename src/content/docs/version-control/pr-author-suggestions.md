---
title: PR Author Suggestions
slug: version-control/pr-author-suggestions
draft: true
sidebar:
  hidden: true
  badge:
    text: Draft
    variant: caution
  order: 7
---

# Suggestions for the PR Author

### Requesting a review too early
**Problem:** You click "Request review" before the work is done.

**Fix:** Push everything, check it yourself, then request review.

### Pushing commits mid-review

**Problem:** A reviewer is halfway through your PR and you push 5 new commits. Now they have to start over.

**Fix:** Drop them a quick message: "Hold off, I'm still pushing changes."

### Not using labels (suggestion)

**Problem:** All PRs look the same at a glance. Is this a bug fix? A feature? A refactor?

**Fix:** Add a label. It takes two seconds.

### Resolving without letting the reviewer respond

**Problem:** Reviewer leaves a comment, you fix it, you immediately resolve the thread. They never know if you understood their point.

**Fix:** Leave a short reply before resolving. Something like: "Done! Let me know if that works for you."

### Reviewers are collaborators, not gatekeepers

Reviewers are here to help improve the code. They're not responsible for the final outcome, that's still on you. Keep the process collaborative.

### Explain your decisions

Don't assume your solution is the only valid one. Before settling on an approach, research the options. Then briefly explain why you went with what you did, especially if it's not obvious.

This saves everyone time and avoids unnecessary back-and-forth.

⠀⠀Example:`Used setTimeout over debounce() for smoother UX. Debounce felt laggy on quick clicks.`

### Write a clear PR description

**What to include:**

- What is this PR doing?
- What's the expected result?
- How should reviewers test it?
- Any special setup? (migrations, environment flags, feature toggles)
- Anything else they should know before testing?

A good description saves time for everyone, including you, when someone asks you questions about it later.

# Suggestions for the Reviewer

### Don't assume your way is better just because it's different

Before suggesting a change, ask yourself why the author did it that way. Look it up if it's unfamiliar. Only suggest a change if there's a clear reason to — and explain what that reason is.

- Bad: `Change this to useMemo()`
- Better: `Any reason you didn't use useMemo() here? It might help avoid unnecessary recalculations. [React Docs](https://reactjs.org/docs/hooks-reference.html#usememo)`

### Review within a reasonable time

**Problem:** The author opens a PR and hears nothing for 3 days. They're blocked.

**Fix:**
- Aim to review the same day or the next day.
- If you're busy, say so: "I'll get to this tomorrow."
- Not sure who should review? Ask in the project's Discord channel.
- Need more eyes on it? Post the PR link in Discord and ask.

**Example:**
> Hey @team, can someone review this when you get a chance? https://github.com/org/repo/pull/123

### Conflicting feedback between reviewers

**Problem:** Reviewer A says do X. Reviewer B says do the opposite. The author is stuck.

**Fix:** If your feedback conflicts with another reviewer's, talk to each other and align before the author has to mediate.

### "Fix this" is not feedback

- Bad: `fix this`
- Good: `Consider splitting this into smaller components — it'll be easier to read. Thoughts?`
- Also good: `This works, but would renaming handleData() to something like processUserInput() make it clearer?`

### Don't nitpick endlessly across multiple rounds

Review thoroughly the first time. Don't approve and then come back with "just one more small thing" three times in a row.

### Drop suggestions directly in the code

Instead of writing long comment threads, use GitHub's inline suggestion feature. It's clearer for the author and faster for everyone.

---

# Reminder

Reviews are teamwork. Be clear, be kind, and keep the feedback useful.

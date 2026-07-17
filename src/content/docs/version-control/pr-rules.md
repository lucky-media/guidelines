---
title: PR Rules
slug: version-control/pr-rules
sidebar:
  order: 5
---

When you own a task, here is what I expect:

- **Understand the real problem first.** Don't jump straight to code. Example: the client says "make the homepage faster." A slow-loading hero image might be the real problem Look for the true cause before you build. not the framework. Ask why.

- **Think about edge cases.** Example: What happens if the client uploads a very long title, or a huge image, or no image at all? What happens on a small phone screen? Check these before the client finds them.

- **Use real content, not placeholders.** Don't test only with "Lorem ipsum." Try the client's real text and images. Long names, special characters, and empty fields often break the layout.

- **Test your work yourself.** Before you say "done," open the page. Click the buttons. Fill in the forms. Check it on Chrome, Safari, and on a phone. Ask yourself: "Am I sure this really works?"

- **Do the work with care.** Don't rush and leave it half-finished. Before you mark it done, ask: "Am I proud of this? Would I be happy to show it to the client?"

- **Check that it works in production, not only on staging.** Example: After you deploy, open the live URL. Submit a real form. Confirm the email arrives. "It works on my machine" is not enough.

- **Tell the team about important changes.** Example: If you change how the contact form works, tell the team. A teammate might spend 3 hours debugging tomorrow or you can save that time with one message today.

- **Keep the client informed.** If someone is waiting for this task, let them know it is finished.

- **Watch for follow-ups.** After launch, check that everything still works. Are the forms sending emails? Is the tracking working? Check again a few days later.

---

Five rules for pull requests that don't make your teammates suffer:

### Keep it focused

A PR should cover one specific feature or fix. This makes it easier to review and reduces the chance of merge conflicts. Don't include unrelated changes, formatting tweaks, or leftover debug code. A good target is **5 or fewer modified files**.

### Write a useful description

Explain what changed, why it changed, and how you tested it. Reviewers shouldn't have to guess. Screenshots and links to related issues or docs are always helpful.

### Test before you open the PR

Make sure your code works and passes relevant tests before requesting a review. The more confident you are in your changes, the faster the review goes.

### Respond to feedback quickly

When a reviewer leaves comments, address them promptly. Letting feedback sit for days slows everyone down and makes the review process frustrating.

### Treat the review as collaboration, not criticism

The reviewer isn't judging you, they're helping you ship better code. Take feedback seriously, ask questions if something is unclear, and remember that the goal is a good outcome for everyone.

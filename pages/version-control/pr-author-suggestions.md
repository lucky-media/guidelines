---
title: "PR Author Suggestions"
---

# Suggestions for the PR Author

 Requesting review too early
**Problem:** You hit "Request review" before the work is actually done.**It feels like:** Reviewer: “Wait... why am I reviewing half-baked stuff?”**Fix it:** Push everything first → check it → then request review.

###  Pushing mid-review
**Problem:** Someone is reviewing, and you sneak in 5 new commits.**Now what?** They have to re-read everything.**Better:** Drop a quick note: “Hold off reviewing, pushing new changes soon.”

###  Not using labels (suggestion)
**Problem:** PRs look the same at a glance.**Example:** Is this a bug, a feature, a refactor?**Fix it:** Add a label! It takes 2 seconds and saves 10.

###  Resolving without letting the reviewer respond
**Problem:** Reviewer leaves feedback (question or suggestion), you fix it, then resolve the thread without giving them a chance to see it.**Feels like:** “Did they even read my suggestion?”**Fix it:**###  “Done — let me know if that works for you!” (Leave it open)###  “Fixed.” (Click resolve immediately)

###  Friendly reminder about roles
Reviewers are here to help the author improve the code by offering feedback and suggestions.They’re collaborators, not responsible for the final outcome.Let’s keep the process supportive and focus on teamwork to deliver the best results.

###  Don’t assume – communicate & justify
**Don’t assume** your solution is the only or best one — even if it works.Instead:
* Research different options before choosing an approach.
* Briefly explain why you did it the way you did (especially if it's not obvious).
* This helps reviewers understand your thinking and prevents unnecessary back-and-forth.

⠀⠀Example:`Used setTimeout over debounce() for smoother UX. Debounce felt laggy on quick clicks.`

###  Add a clear description for your PR
**What to include:**
* What is the purpose of this PR?
* What is the expected outcome?
* How should reviewers test it?
* Any special setup or config changes needed? (e.g., migrations, environment flags, enabling/disabling features)
* Anything else reviewers should know before testing.

⠀This helps everyone understand the context and test properly — saving time and avoiding confusion.

# Suggestions for the Reviewer
###  Don’t assume your way is better just because it’s different
Instead:
* Think/Ask/Research on why the author did it that way.
* Do a quick check or research if something feels unfamiliar.
* Only suggest changes if there's a clear benefit — and explain why.

⠀⠀Bad:`Change this to useMemo()`Better:`Any reason you didn’t use useMemo() here? Might help avoid unnecessary recalculations.``React Docs – useMemo: `https://reactjs.org/docs/hooks-reference.html#usememo

###  Quick Reminder
 Authors: Share your thinking, not just your code. Reviewers: Ask before assuming. Suggest, don’t demand. Both: Bring data, docs, or context to the table.

###  Review takes forever
**Problem:** You open the PR and... nothing. 3 days go by.**Result:** Author is blocked, annoyed, maybe passive-aggressive.**What to do:**
* Try to review within a reasonable time (same day or next day if possible).
* If you’re busy, drop a quick note/message: “Will review this tomorrow!”
* Not sure who to assign? Ask in the Discord channel for that specific project.
* Bonus: If the PR needs attention from others, copy-paste the PR link in Discord and ask for review.

⠀⠀Example:Hey @team, can someone take a look at this when they have time?(https://github.com/org/repo/pull/123)

###  Contradicting other reviewers
**Problem:** Reviewer A says “do X,” Reviewer B says “do the opposite.”**Now what?** The author is stuck playing referee.**Fix it:** Communicate between reviewers if feedback conflicts.

###  “Fix this” without explaining
**Problem:** Unclear and bossy.Bad:`fix this`Good:`Consider splitting this into smaller components to improve readability — thoughts?`Also good:`This works, but would it be clearer if we renamed handleData() to something more descriptive like processUserInput()?`

###  Endless rounds of nitpicks
**Problem:** You approve, then suddenly come back with more “tiny” changes.Author's face: **Fix it:** Review thoroughly the first time. Be thoughtful, not twitchy.

###  Pro tip for reviewers
Instead of piling up change requests in comments, drop your suggestions *directly in the code*.It’s way clearer and helps the author know exactly what to fix — no guesswork needed!

# Reminder:
**Reviews aren’t battles — they’re teamwork fueled by good vibes and lots of coffee. **So let’s keep it chill, kind, and respectful!
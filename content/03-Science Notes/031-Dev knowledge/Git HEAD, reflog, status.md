---
tags:
  - Git
---

```bash
git reflog
```


`git status` shows the **current state** of your working directory and staging area.
`git reflog` shows the **history of HEAD**, i.e., what commits or branches you have checked out or moved to. Typically to **recover lost commits** (e.g., after a bad reset or rebase)

Seeing the HEAD movement from reflog, then we can move back the commit by:
**Undo the last commit** and put all the changes back into your working directory
```bash
git reset HEAD~1
```

## What is `HEAD` in Git?

> **HEAD** is a pointer to your **current branch** and the **latest commit** on that branch.

Think of it like a **bookmark** that tells Git:  
👉 "This is where you currently are in the project history."

Let’s say your branch `main` has three commits:


```
```A -- B -- C  (main)              
		     ↑  HEAD
```

- `HEAD` points to the latest commit: `C`
- If you commit now, it will be based on `C`
- If you checkout another branch, `HEAD` moves to point to that branch
### Detached HEAD
`
By doing `git checkout a1b2c3d`, you are not on any branch, just viewing a specific commit. 

HEAD → commit a1b2c3d

If you commit now, it won’t be attached to any branch — it will be “dangling” unless you create a new branch.




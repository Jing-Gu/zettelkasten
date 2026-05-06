> The Golden Rule of Senior Documentation
> Documentation is not a diary. It is a reasoning record.

You are not recording _what you did_.  
You are recording:

- What you **believed**
- What you **tested**
- What **failed**
- What **changed your mind**

This is what makes knowledge durable.

# Learning Notes (Concept Compression)

**Purpose**  
Turn 30–50 pages of material into **1–2 pages of understanding**.

**When to write**  
After finishing a chapter, RFC, or major concept.

```markdown
# Topic: xxx

## Problem this concept solves
(What breaks without it?)

## Mental model
(One clear analogy or diagram, in words)

## Key invariants
- Invariant 1
- Invariant 2

## Common failure modes
- Failure mode + why it happens

## Tradeoffs
What we gain:
What we pay:

## When this abstraction leaks
(Real-world examples)

```

# Design Notes (think before coding)

**Purpose**  
Show that you reason _before_ implementation.

```markdown
# Design: xxxx

## Requirements
- Functional
- Non-functional (latency, memory, simplicity)

## Constraints
(OS, language, scale, time)

## Options considered
Option A:
  Pros:
  Cons:

Option B:
  Pros:
  Cons:

## Decision
Chosen option + why

## Known risks
What might break later

```


# Bug Autopsies (this is HUGE)

**Purpose**  
Convert pain into permanent skill.

Every serious engineer has a graveyard of bugs they deeply understand.

```markdown
# Bug: xxx

## Symptom
What was observed (not guesses)

## Initial hypothesis
What I thought was wrong (and why)

## Actual root cause
What actually happened

## Broken assumption
What belief was incorrect

## Why this was subtle
What made it hard to see

## How to prevent it
- Code change
- Mental checklist

```
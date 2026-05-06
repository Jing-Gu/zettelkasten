---
title: "The Art of Doing Science and Engineering: Learning to Learn"
author: Richard W. Hamming
year: "1997"
tags:
  - Science
  - Pedagogy
finished:
---
---

# The Book in 3 Sentences

- Think like a scientist or engineer, learning to learn is more valuable than memorizing specific knowledges, tech evolves too quick.
# Top Quotes

> “Top-down design tells you what you want to do; bottom-up implementation tells you what you can do.”

Great engineers and scientists use both top-down and bottom-up approaches:
- Start **top-down** (clear vision) to choose meaningful goals and design clear systems.
- Then go **bottom-up** (master tech foundations) to ensure the design is feasible and efficient.
# Summary & Reflection

## Chapter 1 – Orientation
A clear distinction is drawn between science and engineering:
- **Science** seeks to understand nature.
- **Engineering** seeks to use that knowledge to solve real-world problems.  
Both require creativity, persistence, and disciplined thinking. 

>Takeaway: 
	Respect both, but be clear about which mindset you are using


Beyond technical expertise, great scientists and engineers think about how they work:

- How do I pick problems worth working on?
- How do I stay motivated?
- How do I avoid being trapped by conventional thinking?  
This reflective knowledge is what he calls _“learning to learn.”_

>Takeaway:
	**Choose problems that matter.**
	- Don’t waste time on trivial work that won’t make an impact.
	- Orient yourself toward problems that are important and lasting.

## Chapter 2 - The Foundation of the Digital (Discrete) Revolution

**Continuous vs. Discrete**:
- For centuries, science and engineering were dominated by **_continuous mathematics_** (calculus, differential equations).
- The digital revolution is built on **_discrete mathematics_** — integers, logic, finite states.

**Why discrete matters:**
- Discrete systems allow **exactness** (a 0 is a 0, a 1 is a 1).
- They are less sensitive to small errors compared to continuous analog systems.
- This robustness made large-scale computing possible.

The marriage of mathematics and physical electronics (switches, relays, transistors) created the digital world.

Thinking digitally means thinking in terms of bits, states, and exact logic rather than smooth analog variations.

The shift to digital created whole new fields: computer science, information theory, communication technology. It fundamentally changed how engineers design systems and how scientists analyze data.

## Chapter 3 - History of Computers - Hardware

### Understand that hardware drives possibility

- From early mechanical devices (the abacus, Babbage’s difference engine, and mechanical tabulators...), they showed that _automatic computation_ was possible even before electronics.
- Then vacuum tubes (1940s) made the electronic computers possible, eventually replaced mechanical switches, making computation much faster.
- Then transistors (1950s) replaced the vacuum tubes, made computers smaller, faster and cheaper, commercial computers were born.
- The integrated circuits (1960s - 70s) combining many transistors on one chip, enabled the creation of mainframes, microcomputers.
- By 1970s, an entire CPU could fit on one chip, led to the boom of personal computers and the modern computing explosion.

Moore's law:
Moore's law is the observation that the number of transistors in an integrated circuit (IC) doubles about every two years. It explains the exponential growth of computing power — every few years, more power at lower cost.

The deeper points of this hardware evolution is that:
- Each stage of hardware evolution didn’t just make machines faster — it _changed what was possible_ in science, engineering, and society.
- The progress wasn’t just technical but conceptual: people began to _think differently_ because of what computers could do. Therefore, each hardware advance created new forms of computation and new fields of study.

### Concepts matter more than components
Technologies change, but the _principles_ — logic, representation, control, memory — remain essential.

### Expect revolutions, not just evolution

Big shifts (mechanical → electronic → integrated → digital) reshape not just machines but human thought.

### Learn from history
Knowing how hardware evolved helps you anticipate where computing might go next (quantum, neuromorphic, etc.).

## Chapter 4 - History of Computers - Software
### From Machines to Systems
Early computers were **hardware-defined**: to “program” them, engineers physically rewired circuits or set switches. The key insight is: once you can separate the _instructions_ from the _machine_, the computer becomes general-purpose — this is the **stored-program concept** (von Neumann architecture).
### Assembly and symbolic languages
Shifting from entering instructions using machine code — direct numeric codes for operations, symbolic “assembly languages” were invented, letting programmers use short words (like ADD, MOV) instead of numeric codes. Assemblers then translated this into binary code.

Then came the **revolution of high-level languages**:
_Fortran_ (scientific use), _COBOL_ (business), _LISP_ (AI and symbolic logic).

These allowed programmers to think more abstractly — closer to mathematics or logic than to the hardware itself. That's to say, focus on ideas not hardware details.

### Compilers and Abstraction
Hamming emphasizes that compilers were a true _intellectual breakthrough_ —, as they automated translation from human-like code to machine instructions, separating _concepts_ from _execution_,  they made it possible to separate _ideas_ from _machines_.

Abstraction layers (languages → operating systems → applications) built the modern software ecosystem.
### **The Deeper Lesson**

- Each generation of computers reshaped **how humans think**, not just what machines can do.
- Progress comes from _conceptual revolutions_ — abstraction, representation, systems thinking — not only from technological miniaturization.
- Understanding history helps engineers orient themselves for the _next_ revolution.


> Hamming compared writing software with the act if writing novels or literary writing, both depend fundamentally on **clear thinking**, so there is the question, can good programming be taught? Just like creating writing cannot really to passed from the class and the great authors never took the creative writing class, so probably great programmers cannot be trained easily too.
> 
> Does experience help? Well at least they won't get worse,
> 
> He has faith in only one, which is almost never mentioned: think before you write


## Chapter 5 - History of computer applications
Early computers start as number crunchers with very limited scopes in scientific and military math. Computers expanded into business such as accounting, inventory, payroll due to better hardware and software.
Hardware and software matter but applications shape society. Big breakthrough come from new uses not new tools.

**Applications → demands → breakthroughs.**

This reframes how you think as an engineer:

- Don’t wait for better tools.
    
- Look for _new uses_ that demand better tools.
    

That’s where innovation comes from.


## Chapter 6 – Limits of Computer Applications: AI (Part 1)

What are the fundamental limits of computers when we try to make them “intelligent”?

> Computers manipulate symbols, not meaning

Humans bring intuition, common sense, experience, flexible reasoning and understanding of ambiguity, but computers only follow formal rules perfectly even in an immense speed but don't understand 'why'. This sets the fundamental boundary for AI.

Hamming’s point:  
**Intelligence isn’t just logic — it’s the ability to operate in a messy, uncertain world.**

Computers hate “messy.”

Brutal force is not intelligence.

Computers often “act smart” because they can explore millions of possibilities extremely fast.  But this is not human-like intelligence.

Humans ignore 99% of irrelevant possibilities without even thinking about them.  Computers have to be explicitly told what to consider, as they lack of insight, creativity, and the ability to know what matters. This is another fundamental limit.

Hamming’s deep message is:

> **There is a huge conceptual gap between computation and true intelligence.  
> Computers can simulate parts of intelligence, but they do not “understand” the world.**

Those two limitations "no understanding of why" and "no ability to know what matters" are still relevant today, even though the AI looks more "intelligent" that is merely more advanced pattern recognition. That's to say, "understating" in modern AI is "pattern-based" not "meaning-based". By seeing billions of patterns, AI predicts the most likely next words and simulate explanations, but, it does not have goals, intentions, or self-awareness of why something matters. It _behaves_ like it reasons, but it doesn’t _experience_ the reason.

### **So what changed since 1997?**

#### Big improvements:

- better pattern recognition
    
- huge scale
    
- emergent reasoning-like behavior
    
- ability to follow instructions
    
- ability to appear “intelligent” across many domains
    

#### What did NOT change:

- no real understanding
    
- no intentionality
    
- no self-awareness
    
- no sense of purpose
    
- no knowledge of what is important unless trained
    
- no genuine reasoning in the human sense

------
*Reflected on: 2025-10-12*
---
title: A Philosophy of Software Design
author: "[[John Ousterhout]]"
year: "2018"
tags:
  - CS
  - Software
finished: true
---

# The Book in 3 Sentences

- Key words: complexity, abstraction, interface, design. If just one word: **complexity**
- The design skills separate a good programmer from a mediocre one.
- Best modules are deep
- Design it twice
- Good names avoid unintentional bugs
- Write comments first, better documentation and better design

# Top Quotes

The most fundamental problem in computer science is **problem decomposition**: how to take a complex problem and divide it up into pieces that can be solved independently. (Same idea seeing in [[Design patterns (Gang of four)]] that decomposing a system into objects is hard).

You’ll end up with a much better result if you consider multiple options for each major design decision: design it twice. The design-it-twice approach not only improves your designs, but it also
improves your design skills. The process of devising and comparing multiple approaches will teach you about the factors that make designs better or worse.

# Summary & Reflection

Software design is about problem decomposition, the school can teach for loops and oop, but cannot teach you software design.

Here is the author's clear attitude, take time to think of good design, and design twice, as the first answer is rarely to be the best. He is very against tactical programming, which is the opposite of strategical programming. TDD is on the side of tactical programming as only one feature is focused to pass the test, we will lose sight of abstraction and design. Overall, what is most important to consider is, does this proposal help to minimize the complexity ?

# Recap
## It's all about complexity

Complexity is anything related to the structure of a software system that makes it hard to understand and modify the system.

Complexity is caused by two things: dependencies and obscurity.

## Modular design
Modular design helps reducing the complexity because decomposing the software system into independent modules expose only a fraction of complexity to developers.

The goal of modular design is to minimize the **dependencies** between modules. Modules can take different forms, such as classes or services. Each module has two parts: interface and implementation. **So a module is any unit of code that has an interface and an implementation**.

### Deep modules
The best modules are those whose interfaces are much simpler than their implementations. Best modules are deep, as they have many functionality under a simple interface, and only a fraction of complexity is visible.

The interface describes what the module does, but not how.

### Information hiding
To achieve deep modules, remember information hiding, means that each module should encapsulate some knowledges, that is embedded in its implementation but does not appear in its interface. The hidden information includes data structures and algorithms related to the
mechanism.

When there are too many small shallow classes, **information leakage** mostly happen, as all those classes may share the same knowledge. Oppositely, **information hiding** can often be improved by making a class slightly larger. Doing so, all code related to a particular capability are brought together and the class contains everything needed, this also raises the level of interface, as one single method can perform the whole computation.


## Software trends
### Object-oriented programming and inheritance
Inheritance comes in two forms, which have different implications for software complexity. The first form of inheritance is **interface inheritance**, in which a parent class defines the signatures for one or more methods, but does not implement the methods. Each subclass must implement the signatures, but different subclasses can implement the same methods in different ways.

The second form of inheritance is **implementation inheritance**. In this form, a parent class defines not only signatures for one or more methods, but also default implementations. Subclasses can choose to inherit the parent’s implementation of a method or override it by defining a new method with the same signature.

However, implementation inheritance creates dependencies between the parent class and each of its subclasses. Before using implementation inheritance, consider whether an approach based on composition can provide the same benefits. For instance, it may be possible to use small helper classes to implement the shared functionality. Rather than inheriting functions from a parent, the original classes can each build upon the features of the helper classes.

### Agile development

One important notion is that development should be incremental and iterative. One of the risks of agile development is that it can lead to tactical programming. Agile development tends to focus developers on features, not abstractions, and it encourages developers to put off design decisions in order to produce working software as soon as possible.

### Unit test
Tests are typically divided into two kinds: unit tests and system tests. Unit tests are the ones most often written by developers. They are small and focused: each test usually validates a small section of code in a single method. Unit tests can be run in isolation, without setting up a production environment for the system. Unit tests are often run in conjunction with a test coverage tool to ensure that every line of code in the application is tested.

### Test-driven development [[TDD]]
Under TDD approach, programmers write unit tests before they write code.

*"Although I am a strong advocate of unit testing, I am not a fan of test-driven development. **The problem with test-driven development is that it focuses attention on getting specific features working, rather than finding the best design**. This is tactical programming pure and simple, with all of its disadvantages. Test-driven development is too incremental: at any point in time, it’s tempting to just hack in the next feature to make the next test pass. There’s no obvious time to do design, so it’s easy to end up with a mess."*

### Design patterns
Design patterns represent an alternative to design: rather than designing a new mechanism from scratch, just apply a well-known design pattern. The greatest risk with design patterns is over-application. Not every problem can be solved cleanly with an existing design pattern; design patterns are good doesn’t necessarily mean that more design patterns are better.

### Other resources
https://github.com/johnousterhout/aposd-vs-clean-code


---
*Reflected on: 2025-05-20*


# Summary of Design Principles

Here are the most important software design principles discussed in this book:
1. Complexity is incremental: you have to sweat the small stuff (see p. 11).
2. Working code isn’t enough (see p. 14).
3. Make continual small investments to improve system design (see p. 15).
4. Modules should be deep (see p. 22)
5. Interfaces should be designed to make the most common usage as simple as
possible (see p. 27).
6. It’s more important for a module to have a simple interface than a simple
implementation (see pp. 55, 71).
7. General-purpose modules are deeper (see p. 39).
8. Separate general-purpose and special-purpose code (see p. 62).
9. Different layers should have different abstractions (see p. 45).
10. Pull complexity downward (see p. 55).
11. Define errors (and special cases) out of existence (see p. 79).
12. Design it twice (see p. 91).
13. Comments should describe things that are not obvious from the code (see p.
101).
14. Software should be designed for ease of reading, not ease of writing (see p.
149).
15. The increments of software development should be abstractions, not
features (see p. 154).
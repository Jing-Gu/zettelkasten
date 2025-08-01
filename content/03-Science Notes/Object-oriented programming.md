---
tags:
  - OOP
---

# OOP concepts

## Abstraction
- Represent real-world entities as objects
- Hide complexity and focus on essential features

## Encapsulation
- Bundle data and operations in a class
- Restrict access to internal data

## Inheritance
- Create new classes from existing ones
- Promote code reusability and modularity

## Polymorphism
- a superclass has many forms, **subtype polymorphism** (achieved through inheritance) is the most used
- Interface consistency: Single interface for different object types
- Code reuse: Enable code to work with different data types
- Designed to enable "program to an interface, not an implementation", see Angular service example in [[Design patterns]]

> - _programming to interface_ = **design principle**
> - _polymorphism_ = **language feature** to make that design principle work
   They fit together perfectly.

# OOP Lingo
## The user of the class ?
In OOP, the user of a class is any entity that interacts with that class, might be another class, a function or a human.
## An interface ?
In the CS field, an interface refers to the medium through which an individual interacts with a software or hardware system, it serves as a bridge between the *user* and the system, facilitating the communication.

There are various types of interfaces in computing:
- User interface (UI) - where interactions between humans and machines occur
- Hardware interface - physical arrangements that enable communication between devices, e.g. USB port
- Software interface - defines the methods that a component exposes to other components, that is to say, how they should interact
- Network interface
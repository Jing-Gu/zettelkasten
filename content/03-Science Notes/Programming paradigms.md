#AI_Answer 
Programming paradigms are about how code is written, each offering a unique way of thinking about and organizing programs. They guide how problems are broken down, how logic is structured, and how data flows through the system.

# Imperative programming

**Main idea**: tell the computer HOW to do things step by step
**Key concepts**: sequence of commands that change program state.

```python
x = 5
y = 10
result = x + y
print(result)

```

# Declarative programming

**Main Idea**: tell the computer WHAT you want, not how to do it.
**Key Concept**: You define _rules_ or _properties_, and the system figures out how to get results.

```sql
SELECT name FROM employees WHERE department = 'HR';
```

# Procedural programming

**Subtype of Imperative**: Focuses on procedures (functions) to organize code.
**Key Concept**: Group instructions into reusable blocks (functions).

```c
int add(int a, int b) {
    return a + b;
}
```


# Object-oriented programming

**Main Idea**: Model the world as "objects" with properties and behaviours.
**Key Concepts**:
- **Class**: A blueprint for objects.
- **Object**: An instance of a class.
- **Encapsulation**, **Inheritance**, **Polymorphism**

# Functional programming

**Main Idea**: Avoid changing state and mutable data. Focus on _pure functions_.
**Key Concepts**:
- Functions are first-class citizens
- Immutability
- No side effects

# Event-driven programming

**Main Idea**: Program responds to _events_ (like mouse clicks or messages). 
Common in:  GUI programming or web dev.

```js
button.addEventListener('click', function() {
    alert('Button clicked!');
});
```

# Reactive programming

**Main Idea**: Build systems that _react to changes_ (like user input, data streams, or events) **asynchronously** and **in real-time**.

**Key Concepts**:
- It’s about **responding to data changes and events over time** — think _data streams_ and _propagation of change_.
- You define _what_ to do **when something changes**, not _how_ to manually poll or check for updates.
- Overlap with functional and event-driven programming.
	- **Event-Driven Programming**: They both respond to events, but **reactive programming treats events as data streams**, with operators to combine, filter, and transform them.
	- **Functional Programming**: Reactive programming often uses _pure functions_, _immutability_, and _functional composition_, especially in libraries like RxJS.
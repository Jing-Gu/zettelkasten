
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
### Imperative programming vs functional programming
A pure function is a function that, given an argument, is always returning the same result; it’s predictable, easy to test, and doesn’t generate any side effect inside the program.
```javascript
// imperative programming

const originalArray = [1, 4, 8, 12];
	for(let i = 0; i < originalArray.length; i++){
			originalArray[i] = originalArray[i] + 1;
	}
console.log(originalArray) //[2, 5, 9, 13]

// functional programming

const originalArray = [1, 4, 8, 12];
const finalArray = originalArray.map(value => value + 1);
console.log(finalArray); //[2, 5, 9, 13]
```
The imperative programming using for loop completely lost the initial value of the array. In functional programming, instead, we are working by default with immutable objects; therefore, every modification we need to apply won’t affect the original value but will generate a new one.
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

# Functional reactive programming (FRP)
FRP is a combination of functional and reactive programming.

Using RxJS in Angular is more aligned with Functional Reactive Programming (FRP) rather than just reactive programming. RxJS is built on the principles of reactive programming, which involve working with asynchronous data streams and reacting to events. However, it also incorporates functional programming concepts by providing operators that allow you to transform and manipulate these data streams in a declarative and functional way.
#Code_snippet

Problem of using switch is adding too many 'break' manually, it's hard to debug. While objects are much more flexible, have better readability and maintainability and we don’t need to manually break each “case”.

As the number of “cases” increases, the performance of the `object` (hash table) gets better than the average cost of the `switch` (the order of the cases matter). **The object approach is a hash table lookup, and the switch has to evaluate each case until it hits a match and a break**.

```JavaScript 
// use switch case to find fruits in color
function test(color) {
  switch (color) {
    case 'red':
      return ['apple', 'strawberry'];
    case 'yellow':
      return ['banana', 'pineapple'];
    case 'purple':
      return ['grape', 'plum'];
    default:
      return [];
  }
}

test(yellow) //['banana', 'pineapple']

// The same result can be achieve with **object literal** with cleaner syntax:
const fruitColor = {
	 red: ['apple', 'strawberry'],
  yellow: ['banana', 'pineapple'],
  purple: ['grape', 'plum']
}

function test(color) {
  return fruitColor[color] || 'Not exist'
}

test('yellow') //["banana", "pineapple"]
test('pink') //Not exist
```
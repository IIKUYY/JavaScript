# Array Destructuring

Suppose we have data in an array that we want to put in a variable.

Typically we use an item by index, and assign it to a value, like this:

```JS
const fruits = ['apple', 'banana', 'cantaloupe'];
const firstFruit = fruits[0];
const secondFruit = fruits[1];
```

But you can also use the destructuring array method:

```JS
const fruits = ['apple', 'banana', 'cantaloupe'];
const [firstFruit, secondFruit] = fruits;
```

This helps to save lines, also, to skips items we use:

```JS
const fruits = ['apple', 'banana', 'cantaloupe'];
const [, secondFruit] = fruits;
```

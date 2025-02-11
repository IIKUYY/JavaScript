# Property Value Shorthand 

Objects in modern JS have a nifty trick, suppose we have this code:

```JS
const name = 'Ahmed';
const age = 26;

const user = {
  name: name,
  age: age,
};

console.log(user);
// { name: 'Ahmed', age: 26 }
```

Is kind of redundant, we create an object called `user` and assign the property age and name and assign name to name and age to age, so we have a shortcut:

```JS
const name = 'Ahmed';
const age = 26;

const user = {
  name,
  age,
};

console.log(user);
// { name: 'Ahmed', age: 26 }
```

This shorthand is useful to evade writing more.

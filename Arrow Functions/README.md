# Arrow Functions

Usually in JavaScript we create functions using `function` like this:

```JavaScript
function exclaim(string) {
  return string + '!';
}
```

In 2015 there were something new, the arrow functions, they look like this:

```JavaScript
const exclaim = string => string + '!';
```

This where inspired by the lambda functions, being shorter and less cluttered:

```JavaScript
const arr = ['hey', 'ho', 'let\'s go'];

// This:
arr
  .map(function(string) {
    return string + '!'
  })
  .join(' ');

// …Becomes this:
arr
  .map(string => string + '!')
  .join(' ');
```

## Rules of arrow functions

There are some important rules we need to follow.

### Short vs Long Forms

There are two types of arrow functions:

```JavaScript
///Short form
const add1 = n => n + 1;

///Long form

const add1 = n => {
  return n + 1;
};
```


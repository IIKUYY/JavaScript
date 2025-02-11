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

An live example of a running process with arrow functions is:

```JS
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const sum = (a, b) => a + b;

const askVal = () => {
    rl.question('Type your first value: ', (value1) => {
      rl.question('Type your second value: ', (value2) => {
        const num1 = parseFloat(value1);
        const num2 = parseFloat(value2);
        if (isNaN(num1) || isNaN(num2)) {
          console.log('Please type accepted values');
        } else {
          const output = sum(num1, num2);
          console.log(`The sum between ${num1} and ${num2} is: ${output}`);
        }
        rl.close();
      });
    });
  };

askVal();
```

And the output is:

![Terminal](/Arrow%20Functions/src/img%201.png)
# String Interpolation

In older version of JavaScript in order generate dynamic strings you used:

```JavaScript
const userName = 'Mai';
const dynamicString = 'hello ' + userName + '!';
```

This was ineffective and let to errors and bugs, so there is a newer option:

```JavaScript
const dynamicString = `hello ${userName}!`;
```

In this method you can add the expressions inside the string, other useful information, is that you can put expressions like this

```JavaScript
const age = 7;
console.log(`Next year, you'll be ${age + 1} years old.`);
```

This will show 8 at the console:

![console-log](/String%20Interpolation/src/img-1.png)
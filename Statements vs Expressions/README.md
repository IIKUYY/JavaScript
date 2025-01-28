# Statements vs Expressions

In order to work in React, you need to diferenciate between this two, this is because JSX accept expressions but no statements.

## Expressions

An expression is something that produce a value

```JavaScript
1 -> 1
"Hello" -> "Hello"
5 * 10 -> 50
num > 100 -> true or false
```

Expressions can contain expressions like:

```JavaScript
( 5 + 1 ) * 2
```

In this lines there are 5 expressions, try to find them.

```JavaScript
1- ( 5 + 1 ) * 2
2- ( 5 + 1 )
3- 5
4- 1
5- 2 
```

## Statements

Basically the statements are the instructions that makes the program works.

```JavaScript
let hi = 5;
```

you can have expressions in your statements

```JavaScript
let hi = 1
let hi = "Hello"
let hi = 5 * 10
```

## Tricks

If you want to be sure if some chunk of code is an expression or an statement, you can run:

```JavaScript
console.log(/*your code*/);
```

If it run is an expression, if you get an error is an statement.

## Expressions as statements

Imagine you have the expression `1 + 2 + 3`

The program will not run, this is because you need a statement that tells the program what to do with this information, you can have an statement like this:

```JavaScript
/*Expression slot*/;
```

This will be an statement that run like "run this expression".

There are other statements that are useful, like this ones:

```JavaScript
// Statement 1: Create a variable
let hi = /* expression slot */;

// Statement 2: Return a value in a function
return /* expression slot */;

// Statement 3: Loop until the provided expression is falsy
while (/* expression slot */) { }

// Statement 4: Execute the provided expression
/* expression slot */;
```

For example the next code:

```JavaScript
let state = 1 + 2 + 3;
console.log(state);
```

will print

![log](/Statements%20vs%20Expressions/src/img-1.png)
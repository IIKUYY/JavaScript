# Object Destructuring

This practice offers a way to extract some variable from an object.

Like in this example:

```JS
const user = {
  name: 'François Bouchard',
  city: 'Saint-Louis-du-Ha! Ha!',
  province: 'Québec',
  country: 'Canada',
  postalCode: 'A1B 2C3',
};

const { name, country } = user;

console.log(name); // ‘François Bouchard’
console.log(country); // ‘Canada’
```

This is the same as doing:

```JS
const name = user.name;
const country = user.country;
```

## Renaming extracted values

Considering this situation:

```JS
const name = 'Hello!';

const user = { name: 'Marie-Hélene Pelletier' };

const { name } = user;
// Uncaught SyntaxError:
// Identifier 'name' has already been declared
```

This issue is caused because we already have and variable called `name`, in this cases we can rename the variable as we unpack it.

```JS
const name = 'Hello!';

const user = { name: 'Marie-Hélene Pelletier' };

const { name: userName } = user;

console.log(name); // ‘Hello!’
console.log(userName); // ‘Marie-Hélene Pelletier’
```

## Default values

What happen if we destructure a key from an object which isn't defined?

```JS
const user = { name: 'Marie-Hélene Pelletier' };

const { status } = user;

console.log(status); // ???
```

`user.status` isn't defined, so the value is set to `undefined`, if we want, we can set a default value using the assignment operator.

```JS
const { status = 'idle' } = user;
```

This means that while the `user` don't have a `status`value, it will be set to `idle`.

## Destructuring function parameters

Suppose a function which takes an object at its first parameter:

```JS
function validateUser(user) {
  if (typeof user.name !== 'string') {
    return false;
  }

  if (user.password.length < 12) {
    return false;
  }

  return true;
}
```

If we want we could deconstruct this values at the top of the function:

```JS
function validateUser(user) {
  const { name, password } = user;

  if (typeof name !== 'string') {
    return false;
  }

  if (password.length < 12) {
    return false;
  }

  return true;
}
```

Using parameter destructuring, we can do this destructuring right in the function parameters: 

```JS
function validateUser({ name, password }) {
  if (typeof name !== 'string') {
    return false;
  }

  if (password.length < 12) {
    return false;
  }

  return true;
}
```

Although this three snippets are equivalent, the most common is the parameter destructuring, specially in the React community.

### Named Arguments

Other languages uses named arguments to label what is happening in a function, but JS doesn't have this option, take this example:

```JS
trackSession(user.id, 5, null);
```

If you are external to the code is had to read, instead if you can give the function an object as it's only argument, and it would be like this:

```JS
trackSession({
  userId: user.id,
  version: 5,
  additionalMetadata: null,
});
```

Now is way clearer what are you doing in the function.

## Renaming function parameters

We already saw who to use destructuring to name newly-created variables:

```JS
const name = 'Hello!';

const user = { name: 'Marie-Hélene Pelletier' };

// Pluck out the `name` property, but define the
// variable as `userName` instead:
const { name: userName } = user;

console.log(name); // ‘Hello!’
console.log(userName); // ‘Marie-Hélene Pelletier’
```

But we can do this with function parameter destructuring:

```JS
function validateName({
  name: userName,
}) {
  return userName.length > 0;
}

validateName({
  name: 'Joyce',
});
```

We provide `validateName` with an object `{ name: 'Joyce' }`, we extract the `name` property from this object, but we also rename it to `userName`. Within the `validateName` function, name is undefined and `userName` is assigned to `Joyce`.

This is a pretty niche thing to do, but it has it's uses in React.

## Default parameter values

Like in object destructuring, we can supply default values to be used for parameters:

```JS
function sendApiRequest({ method = 'GET', numOfRetries }) {
  // Stuff
}
```

When I call this function, I can give my own value for `method`:

```JS
sendApiRequest({ method: 'PUT', numOfRetries: 4 });
```

Or, if I want it equal to `Get`, I can omit it.

```JS
sendApiRequest({ numOfRetries: 4 });
```

### Argument most be provided

Lets suppose we ad default values for both of the properties in a function:

```JS
function sendApiRequest({ method = 'GET', numOfRetries = 5 }) {
  // Stuff
}
```

In theory, we can call this function and get an the default values, but this create an error, when we call the function we're not providing and object, to solve this problem we can set a default value for the first parameter, the object we're destructuring from:

```JS
function sendApiRequest(
  { method = 'GET', numOfRetries = 5 } = {}
) {
  // Stuff
}

sendApiRequest(); // ✅ No problem!
```
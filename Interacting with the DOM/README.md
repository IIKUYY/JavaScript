# Interacting with the DOM

One of the biggest "pro's" of working on a framework is that it will modify the DOM directly, you don't need to get manual with it.

## Selecting Nodes

If you want to grab a reference to a existing element you use the `querySelector`, like in this example:

```JavaScript
//Grab the <body> tag:
const body = document.querySelector('body');
```

This function uses CSS selectors, so if you know that something works in CSS you know it will work, for example:

```JavaScript
const enableButton = 
    document.querySelector('button:not(:disabled)');

const thirdNavLink = 
    document.querySelector('.nav-link:nth-of-type(3)');
```

As well you can call nodes, not only the document, like this:

```JavaScript
//Grab the Header
const header = document.querySelector('#header')

//Find the first '<a>' tag in the header

const firstLink = header.querySelector('a')
```

Is worth noting that the `querySelector` only picks the first object it encounters, you can use `querySelectorAll` to get a sort of array, if any of this function failed to find something it will return `null`.

## Editing Nodes

If you are working on a project of React, the classes will affect the appereance of said element. for example, in a list of contacts were a green dot is shown when someone is online, if you have this html:

```html
<ul>
  <li id="user-andrew" class="offline">
    Andrew
  <li>
  <li id="user-beatrice" class="offline">
    Beatrice
  <li>
  <li id="user-chen" class="online">
    Chen
  <li>
</ul>
```

you would see something like this:

![List1](/Interacting%20with%20the%20DOM/src/img-1.png)

You can modify this with JavaScript, with a code like this:

```JavaScript
const node = document.querySelector('#user-andrew');

node.setAttribute('class', 'online');
```

This will change the class of the node given, changing how it looks to something like this:

![List2](/Interacting%20with%20the%20DOM/src/img-2.png)

you can also change the text with the code:

```JavaScript
const node = document.querySelector('#user-andrew');

node.innerText = 'Andrew (online)';
```

![List3](/Interacting%20with%20the%20DOM/src/img-3.png)

## Creating appending notes

We already saw how to get and modify nodes in the DOM, but we can create brand new nodes only with the use of JavaScript, this is made with `document.createElement` for example, to create a "Hello World!" text in red you run the code:

```JavaScript
// Creating Something
const element = document.createElement('div');

element.setAttribute('style', 'color: red;');
element.innerText = "Hello world!";

// Showing it
const body = document.querySelector('body');
body.appendChild(element);
```

The first part of the code creates the div where the text is shown, but the element isn't displayed, this is because we didn't attach the element to some part of the page, to do this we run the second part were we add the element to the `<body>` tag.

![helloWorld](/Interacting%20with%20the%20DOM/src/img-4.png)

Something important to know is that `createElement` only can be called in document, not in other nodes.

## Destroying Nodes

We can delete nodes with the `remove` method.

```JavaScript
const elem = document.querySelector('#some-element');
elem.remove(); /* No more element! 💨 */
```

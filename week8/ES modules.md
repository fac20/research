---
title: Javascript Modules
tags: presentation
slideOptions:
  theme: moon
  transition: 'slide'
---

# How can we modularise our client-side JavaScript?


<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.QR_QR-KfIawCM9F_Vc4iXQHaGl%26pid%3DApi&f=1" width="100" alt="egg" />

## What are the different ways we can import/export code?

![](https://2r4s9p1yi1fa2jd7j43zph8r-wpengine.netdna-ssl.com/files/2018/03/04_import_graph-500x291.png)


---

![](https://i.imgur.com/9toUCXV.png)


---


![](https://i.imgur.com/83GaGlL.png)


---


### Named Imports/Exports

Each module can have zero or more named exports.


Imports remain connected with their exports.

```
import {foo} from './bar.mjs'; // import
const {foo} = require('./bar.mjs'); // destructuring
```

Rationale: Destructuring is reminiscent of an object literal (including nesting), while importing evokes the idea of renaming.


### Namespace imports

Namespace imports are an alternative to named imports.

If we namespace-import a module, it becomes an object whose properties are the named exports. 


### Named exporting styles: inline versus clause 

The named export style we have seen so far was inline

But we can also use separate export clauses.

```
function times(a, b) {
  return a * b;
}
function square(x) {
  return times(x, x);
}
const LIGHTSPEED = 299792458;

export { square, LIGHTSPEED }; // semicolon!
```

With an export clause, we can rename before exporting and use different names internally


```
function times(a, b) {
  return a * b;
}
function sq(x) {
  return times(x, x);
}
const LS = 299792458;

export {
  sq as square,
  LS as LIGHTSPEED, // trailing comma is optional
};
```

---

### Default Exports and Imports

![](https://i.imgur.com/1Sewdt2.png)


---
Each module can have at most one default export. The idea is that the module is the default-exported value.

You should avoid mixing named exports and default exports.

A module can have both named exports and a default export, but it’s usually better to stick to one export style per module.



---

### What does "dynamic import" do?

----

### standard import:

```javascript=
import { add, subtract } from "./modules/math.js";
// rest of code...
```


- import has to be at the top of your code

- the path name is set

----

### use import() operator

![mindblown](https://media.giphy.com/media/90F8aUepslB84/giphy.gif)

----

loading a module dynamically 

```javascript[1-2|3|4]=
const folder = './modules/';
const fullPath = folder + 'math.js';

function calculate(a,b) {
  return import(fullPath)           // ./modules/math.js
  .then(myMath => {
    const result = myMath.add(a,b);
    return result;                  
  });
}
```

----

async await version
```javascript=
const folder = './modules/';
const fullPath = folder + 'math.js';

async function calculate(a,b) {
  const myMath = await import(fullPath);
  const result = myMath.add(a,b);
  return result;
}
```

----

Loading code on demand

```javascript=100
let count = 0

button.addEventListener('click', event => {
  import('./math.js')
    .then(myMath => {
        newCount = myMath.add(count, 1)
    })
    .catch(error => {
      /* Error handling */
    })
});
```

----

Conditional loading

```javascript=1337
if (something) {
  import('./special-code.js')
    .then(/* do some super special stuff*/);
}
```

----

Interpolate the module file path

```javascript=50
// messages_logged_in.js
// messages_logged_out.js

import(`messages_${checkState()}.js`)
  .then(// rest of code...);
```

----

## Why might using hundreds of small modules in the browser cause performance problems?

---

- JavaScript developers know that ES modules have been controversial.

- Only few actually understand how ES modules work.

---

### What problem do modules solve?

When you think about it, coding in JavaScript is all about managing variables.

![](https://i.imgur.com/9NAs9SW.png)


---

**Organization of these variables is going to have a big impact on how well you can write and maintain that code…**

![](https://i.imgur.com/ANr2chT.png)


---

### Scopes

![](https://i.imgur.com/CIj8sBJ.png)

---

- Scopes are good becouse you do not need to think about all of your variables within the project. 

- When you’re working on one function, you can just think about that one function. 

- It also has a downside, though. It does make it hard to share variables between different functions.

---

### Solution === Global Variables!!!

![](https://media.giphy.com/media/l1KVcrdl7rJpFnY2s/giphy.gif)

---

### This works, but you can have some annoying problems with that

1) All of your script tags need to be in the right order. 
2) Then you have to be careful to make sure that no one messes up that order.
3) If you do mess up that order, then in the middle of running, your app will throw an error.

**Code maintenance becomes tricky.**

---

### How do modules help?

- Modules give you a **better way to organize** these **variables** and **functions**.

- With modules, you **group the variables and functions** that make sense to go **together**.

---

- This puts these functions and variables into a **module scope**.

- The module scope can be used to share variables between the functions in the module.

![](https://i.imgur.com/vcPqanb.png)


---

Unlike function scopes, module scopes have a way of making their variables available to other modules as well.

You have a power to choose which of the variables, classes, or functions in the module should be available.

---

-When something is made available to other modules, it’s called an export.

![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F6AFldi5xJQYIo%2Fgiphy.gif&f=1&nofb=1)


---

Once you have an export, other modules can explicitly say that they depend on that variable, class or function.

![](https://www.travelweekly.com.au/wp-content/uploads/2017/11/phone-die-gif.gif)

---


### Dependencies

A few dependencies will load fine...?

![](https://i.imgur.com/tc1cy9F.png)


----

### In more detail
![](https://i.imgur.com/tmH6zob.png)


----

### But...this...

Will inevitably take longer to load

![](https://i.imgur.com/gHn84VC.png)


----

### This prevents the UI from loading for the user...
![](https://media.giphy.com/media/M11UVCRrc0LUk/giphy.gif)

----

### Balance between modularisation to re-use code and loading times

![](https://media.giphy.com/media/6jPNELLWtepGg/giphy.gif)

----

### To improve performance you can use a bundler...
* Such as [Webpack](https://webpack.js.org/)
![](https://i.imgur.com/KWI6ciB.png)


----

### Coulnd't find much else on this.. so here are other things we learnt from the article

There are two module systems being used actively:
1. CommonJS (CJS) is the module system used for Node, and is syncronous module loading 
    `module.exports = { yay }` ... `const yay = require("./yay")`

2. ES modules is the system used for Javascript (and native in browsers) and is more like an asyncronous module loading


---

## Resources

[ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)

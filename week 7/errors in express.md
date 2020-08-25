---
title: Errors in Express
tags: presentation
slideOptions:
  theme: moon
  transition: 'slide'
  # parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'
---

# How should we handle errors in our Express apps?

----

## Error Types
<!-- Ephie -->

----

- We've mainly focussed on ways to deliver errors rather than actually foccussing on the type of errors that we could receive.

![](https://media.giphy.com/media/xTaWnRVrazwn9fOdwc/giphy.gif)


----

Just a recap on what we may have already come across, there are four main ways to deliver errors:

----


* `throw` the error 
* passing an error into a callback.
* passing the error into a reject Promise function.
* emitting an error with an EventEmitter.

----

# So what types of errors are there ? 

----

## Operational errors vs Programmer errors

----

## Operational errors

- failed to connect to server
- failed to resolve hostname
- invalid user input
- request timeout
- server returned a 500 response 
(internal server error)
- socket hang-up
- system is out of memory


----

## Programmer errors

- Tried to read property of “undefined”.
- Called an asynchronous function without a callback.
- Passed a “string” where an object was expected.
- Passed an object where an IP address string was expected.

----

- People use the term errors loosely and are often talking about them interchangably, however they're quite different. 
- Think of operational errors as inevitable risks.
- for example if you're using a microwave an operational risk could be a fuse blowing or there being a factory defect.
- However if you put a fork in the microwave and your house burns down... that's a programmer error and your fault...


----

![](https://media.giphy.com/media/1r94hfYcoLFCdsRyhY/giphy.gif)

This distinction is very important: operational errors are part of the normal operation of a program. Programmer errors are bugs.

- Note: failure to handle an operational error is also a programmer error. 

----

### What kinds of errors can we attempt to recover from? 

### Operational 

----

### How can we deal with them?

- Directly
- Inform user
- Log and continue
- Try again

- Blow up!

----

### When should we not attempt to recover?

### Progammer errors

----

### Dont' handle them, let them blow up

!['splosion'](https://media.giphy.com/media/3o7abwbzKeaRksvVaE/giphy.gif)

----

```
app.get("/", (req, res) => {

const cokies = req.headers.cookies;

res.send(`<h1>Hello ${cookies.firstName} ${cookies.lastName}</h1>` )

}
```

----

## Which of the various JS error-handling methods should we use with Express 

----

## Throw, Callback, Reject, or EventEmitter

Express catches and processes errors that occur both synchronously and asynchronously. 

----

### Synchronously

**Throw**

If synchronous code throws an error, then Express will catch and process it.

![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FwIU9MjBVKF4Qw%2Fgiphy.gif&f=1&nofb=1 =350x)

----

### Throw 

```
app.post('/testing', (req, res) => {
  throw new Error('Something broke! 😱')
})
```

----

**Asynchronously**

- **Callbacks** - the most basic way to handle async errors

- **Reject** - growing in popularity since the release of Node.js version 8 that includes support for async/await
 
- **EventEmmiters** - for more complicated cases where callbacks are not efficient

----

To deliver an error asynchronously, You generally want to use **Callback** or **EventEmitter**, but not both together.


----

### Callbacks

The usual pattern is that the callback is invoked as callback(err, result), where only one of err and result is non-null, depending on whether the operation succeeded or failed.

----

```
server.get("/example", (req, res, next) => {
  fs.readFile("example.txt", (error, contents) => {
    if (error) {
      next(error);
    } else {
      res.send(contents);
    }
  });
});
```

----

### Async/await 
- allow us to write asynchronous code in a similar way to synchronous code
- allow us to catch errors using try/catch 

----

How do we use it ?
- adding `async` in front of your function 
`async function hello()`

- converts the return values into promises

so you can use .then() after calling an async function ... or use the `await` keyword 
! you can only use `await` inside the async function

----

```
async function myFetch() {
  let response = await fetch('coffee.jpg');
  if (!response.ok) {
    throw new Error(`HTTP error!`);
  } else {
    return await response.blob();
  }
}
```

Use try/catch inside the function or add a .catch() when you call it 

----

### EventEmitters
- when you are doing a complicated operation which might produce multiple errors, you should use an `EventEmitter`
- When an error occurs within an EventEmitter instance, the typical action is for an 'error' event to be emitted.

----

```
const EventEmitter = require('events');
const myEmitter = new MyEmitter();
myEmitter.on('error', (err) => {
  console.error('whoops! there was an error');
});
myEmitter.emit('error', new Error('whoops!'));
```

----

#### Dealing with asynchronous code in Express 


```
app.post('/testing', async (req, res, next) => {
  return next(new Error('Something broke again! 😱'))
})
```

----

#### Custom error handlers in Express

- Take 4 arguments: err, req, res, next
- must be placed after all your middlewares and routes

`app.use((error, req, res, next) => { /* ... */ })`

```

# Node Architecture (Spike)

:building_construction:

---

![](https://media.giphy.com/media/WUDBBfR8WNNiY8PKbX/giphy.gif =900x)

---

## What is the event loop?

----

## Who Knows??!

![](https://media.giphy.com/media/Ll2fajzk9DgaY/giphy.gif)

----

### What it is not
---
#### The event loop is not the call stack?
![The event loop](https://javascriptbit.com/static/event-loop-833fa9b4297875ee574ce9291e3690d1-a79e3.png =400x300)

----

### What it is not
---
* JavaScript is run with a call stack. 
* The call stack is a LIFO queue (Last In, First Out). 
* Because of this it can be blocked by slow functions.
* The event loop is seperat to this.

----

### The event loop
---
* The event loop is what allows Node.JS to perform non-blocking I/O (in out) operations by offloading operations to the system kernel whenever possible.
* These operations then run asynchronously.

----

![](https://i.imgur.com/uCrC6dB.png =500x)

----

![](https://i.imgur.com/Tl1gRUR.png)

----

![](https://i.imgur.com/F0i35hp.png =500x)

----

![](https://media.giphy.com/media/eAkv7pEmlWCha/giphy.gif =800x)

---

## Why should we prefer asynchronous code?
---
In synchronous programs, _if_ you have two lines of code (L1 followed by L2), then L2 cannot begin running until L1 has finished executing.

![](https://steamusercontent-a.akamaihd.net/ugc/768273615166089737/C9CE63C1A9E039CD965A833AEA536A5698E3B079/ =500x)

----

### Synchronous code
---
One thing happens at a time - Functions form an orderly que and wait for the one infront to comlete.
![](https://cms.qz.com/wp-content/uploads/2018/07/Eiffel-Tower-queue.jpg =500x)

----

## VS

----

### Asynchronous code
---
Functions can run simultaniusly. - Functions that take a long time to run do not block other code from completing. 

![](https://images.idgesg.net/images/article/2018/11/black_friday-100630052-primary-resized-100780720-large.jpg =500x)

---

#### What would happen if we had slow blocking code in our request handlers?
---
Any JavaScript code that takes too long to return back control to the event loop will block the execution of any JavaScript code in the page, even block the UI thread, and the user cannot click around, scroll the page, and so on. The slower the code the worse this can be.

----

### But with asyncronous code in Node.
---
Asynchronous programming: while your code waits for something to be done (like an API call or a response from a mystic and far away database) it can do something else. 
In other words, your code doesn’t get blocked when a process is taking a long time. 

----

### Callbacks and asyncronous code
---
Callbacks are functions. You pass them to other functions so they can be executed when the time is right, i.e. when the event needed by the callback has happened. This way of doing things comes with asynchronous programming, which is not that hard and is worth it.

----

### Callbacks and asyncronous code
---
This is why JavaScript, and more specificaly Node.js, is based so much on callbacks, and more recently on promises and async/await

---

### Let`s remember this:

```
1       console.log("Hello."); // Say "Hello."
       
2       // Say "Goodbye" 2s from now.
3       setTimeout(function() { 
4         console.log("Goodbye!");
5       }, 2000);
        
6       console.log("Hello again!"); // Say "Hello again!"
```

----

A callback is a function called at the completion of a given task; this prevents any blocking, and allows other code to be run asynchronous.

----

This allows you to have as many IO operations as your OS can handle happening at the same time.

----
​

## The most common tools to deal with callbacks are... 

----

## **Modularisation and Promises**
---
![](http://data.photofunky.net/output/image/0/b/9/c/0b9c5f/photofunky.gif =600x)

----

Node.js, being an asynchronous platform, doesn't wait around for things like file I/O to finish - Node.js uses callbacks.

![](https://www.totalprosports.com/wp-content/uploads/2014/03/27-shaq-call-me-maybe-shaq-gifs.gif =700x)

---

### Callback Syntax 101 
---
![](https://i.imgur.com/xey8YtJ.jpg)

----

#### The initial function
---
* Will take a number of arguments, including a callback function.
* The callback function is the LAST argument.
* Will feature some *control structure* where one branch calls the callback function with an error __as its first argument__

![](https://i.imgur.com/mJ67uwi.png)

----

#### The callback function

* Error-first callback!

![](https://i.imgur.com/YmSRuN2.png =600x300)



----

### Callback hell
---
![](https://i.imgur.com/CLNJrLj.png)

----

The cause of callback hell is when people try to write JavaScript in a way where execution happens visually from top to bottom.

__*MODULARISATION*__ is the answer :100: 

----

### Modularisation:

Breaking code into modules make code easy to read!

Each function should do __one__ thing and do __one__ thing well.

Name each function and have your functions call each other.

---

## How does Node use callbacks to manage asynchronous code

----

#### How Node manages asynchronous code
---
Node.js is a single-threaded application, but it can support concurrency via the concept callbacks.

----

#### How Node manages asynchronous code
---
Every API of Node.js is asynchronous and being single-threaded, they use async function calls to maintain concurrency.

----

#### How Node manages asynchronous code
---
Node thread keeps an event loop and whenever a task gets completed, it fires the corresponding event which signals the event-listener function to execute.

---

## Thank you!!
---
![](https://i.imgur.com/0NsFZe8.gif =500x)

---

### Any Questions?
---
#### Reference list
- https://nodejs.org/en/knowledge/getting-started/control-flow/what-are-callbacks/ 
- http://callbackhell.com/ 
https://medium.com/better-programming/callbacks-in-node-js-how-why-when-ac293f0403ca 
- https://medium.com/the-node-js-collection/what-you-should-know-to-really-understand-the-node-js-event-loop-and-its-metrics-c4907b19da4c 
- https://zellwk.com/blog/converting-callbacks-to-promises/
- https://www.pluralsight.com/guides/introduction-to-asynchronous-javascript 
- https://www.tutorialspoint.com/nodejs/nodejs_event_loop.htm



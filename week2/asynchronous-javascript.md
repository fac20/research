# Asynchronous JavaScript

---

- Synchronous code is easy to follow and you know exactly which order your code will be executed. 
- It can be horribly inefficient, especially when dealing with real-world scenarios that involve **latency**.


---

## What's the difference between "synchronous" and "asynchronous" code? 
## Why might synchronous code be called "blocking"? 

---

Async code can start something now and finish it later, without blocking the execution of subsequent code 

---

Let's say we have an API that has a function called readSync that retrieves information about a book. 

---

```
var dictionary = readSync(dictionary_location);
console.log(dictionary);

var author = readSync(author_location);
console.log(author);
```



---


![](https://i.imgur.com/tJzpc2I.png =225x300) 

---

- Synchonously, we'd be held up at the semi-colon on the end of line 6 while this function goes and retrieves the whole dictionary, before the next function would fire and tell us who the author is. 

![](https://media3.giphy.com/media/xT8qBfBuKWgK60yrRe/giphy.gif?cid=ecf05e47ezts15vx87nyzfp97httuyzjw8aid47n2pl2em7x&rid=giphy.gif =300x200)

---

**This is what is meant by blocking**

![](https://media3.giphy.com/media/29IalLLWizqz8SViU1/giphy.gif?cid=ecf05e47m10gtb7fbhpfbm3eaegfi0evk35ij8j9ulbz59v9&rid=giphy.gif =300x200)

---


<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.j1tCVst_xTc20IZhE_ERwgHaHa%26pid%3DApi&f=1" width="100" alt="egg" />


We can fix this problem by using an API with an asynchonous function- 'readAsync' 
```
readAsync(dictionary_location, function(){
    console.log(dictionary)
}); 

readAsync(author_location, function(){
    console.log(author)
});
```

---

This passes dictionary_location on to another thread to be retrieved, and moves on to the authors in the meantime. 
Once it's done getting the data, it will fire the second part of the function, which is the callback function, which will console log the dictionary. 

---

![](https://i.imgur.com/1Sg8JON.png) 

---

![](https://qph.fs.quoracdn.net/main-qimg-b6c71ffa56cf75e8dd4996ba2100bc82.webp)



---

## What are the event loop and the call stack?
![The event loop](https://javascriptbit.com/static/event-loop-833fa9b4297875ee574ce9291e3690d1-a79e3.png =400x300)

----

- JavaScript is  a single threaded runtime with a single call stack that can do one thing at a time.
- The Call Stack is a part of the Event Loop which is responsible for executing the code.
- The call stack is a queue of functions in the order that they will run. Any functions that runs is removed from the stack.
- "if we step into a function, we put something on to the stack, if we return from a function, we pop off the top of the stack"

----

![1](https://i.imgur.com/sy9c5Jx.png)


----

![2](https://i.imgur.com/2vtzOaF.png)

----

![3](https://i.imgur.com/TB3jLF0.png)

----

![4](https://i.imgur.com/W4t6zLh.png)

----

![5](https://i.imgur.com/IHZCX5v.png)

----

![6](https://i.imgur.com/TfoYpNz.png)

----

![7](https://i.imgur.com/hDcN0Hr.png)

----

![8](https://i.imgur.com/aBN3duo.png)

----

![9](https://i.imgur.com/fB3TEiw.png)

----

![10](https://i.imgur.com/0ZWxhRU.png)

----

![11](https://i.imgur.com/ao2HZL8.png)

----

![12](https://i.imgur.com/AGuQilo.png)

----

![13](https://i.imgur.com/XSnATnL.png)

----

![14](https://i.imgur.com/8vzreZf.png)

----

![15](https://i.imgur.com/R9pzGMH.png)

----

![16](https://i.imgur.com/noFgC6x.png)

---


![The event loop](https://javascriptbit.com/static/event-loop-833fa9b4297875ee574ce9291e3690d1-a79e3.png)

----

### The event loop

- The event loop's job is to look at the stack and look at the task queue. 

- If the stack is empty it takes the first thing on the queue and pushes it on to the stack. It is only then that the Call Stack is executes the event.

----

- One loop is moving one event onto the stack and executing it. This is called a tick

---

## How do callbacks and promises help us?

- Callback -  a function that is passed as an argument to another function, to be “called back” at a later time.

- Promise - an object representing the eventual completion or failure of an asynchronous operation.

---

- Allows us run asynchronous code
- Code only runs after a previous result is ready

---


`let addsOne = (x) => x + 1;`

---

*index.html*
```
...
<p><p>  
...
```

*script.js*
```
const content = document.querySelector("p")
content.append( addsOne(1) )
````

*HTML DOM*
```
...
<p>2</p>
...
```

---

What if x is unknown?

addsOne() will return NaN; 



---

When page loads:

*script.js*
```
content.append( addsOne() );
```

*HTML DOM*
```
<p>NaN<p>
```

![wrong gif](https://media.giphy.com/media/m8eIbBdkJK7Go/giphy.gif)

---

- Fetch requests data from another source
- Not instantaneous 

---

.then - run this code if the last thing worked

.catch  - run this code if something goes wrong

---

```

fetch ("url")  
.catch( () => console.log("Something's gone wrong")  
```

---

```

fetch ("url")                          
.then( response => response.json() ) 
.catch( () => console.log("Something's gone wrong")
```

---

```
response.json() = {
    ...
    "name": "Bob",
    ...
};
```

---

```
fetch ("url") 
.then( response => response.json() ) 
.then( dataObj => content.append( dataObj.name ) )  
.catch( () => console.log("You broke something")
```


---

*HTML DOM*
```
<p>Bob</p>
```

![success gif](https://media.giphy.com/media/skmziDEEjiin6/giphy.gif)

---

## To Summarise

* Asyncronous JS allows us to do other things while waiting - avoiding blocking
* Functions run from the top of the stack.
* Once the stack is empty the event loop pushes events from the calback queue to the stack
* Asynchronous functions run outside of the stack, then are put to the back of the callback queue for their output to be added to the stack
* Promises are placeholder spaces waiting for results from the callback queue.

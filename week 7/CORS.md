---
title: Cross-origin Resource Sharing
tags: presentation
slideOptions:
  theme: sky
  transition: 'fade'
---

<!-- https://hackmd.io/@akshayasatheesh/rJHqYIZ7P -->

## Cross-origin Resource Sharing (CORS)

---

## Context <!-- Shaya -->

![](https://media.giphy.com/media/26ueYED6hliMtLM3K/giphy.gif)

---

* ##### An origin is a server hostname. 
* ##### An origin is made up of three parts: the protocol (HTTP), host (example.com), and port number (3000).
* ##### By default, web browsers do not allow AJAX requests to servers other than the site you’re visiting
* ##### This is called the same-origin policy
* ##### The same-origin policy requires that all parts of the origin match.

---

![](https://s3.amazonaws.com/codecademy-content/articles/what-is-cors/same-origin.svg =600x)

---

## What is CORS? <!-- Shaya -->

![](https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif)

---

* ##### A request for a resource (like an image or a font) outside of the origin is known as a cross-origin request (CORS manages this)
* ##### This is a restriction inside of a web browser that prevents an origin from making a request to another origin
* ##### Allowing cross-origin requests is helpful, as many websites today load resources from different places on the Internet (stylesheets, scripts, images, and more).
* ##### CORS allows these cross-domain requests to happen, but only when each side opts into CORS support.
* ##### CORS will allow you to specify who or what can access your endpoint on the server side

<!-- You can think of these interactions as a building with a security entrance. For example, if you need to borrow a ladder, you could ask a neighbor in the building who has one. The building’s security would likely not have a problem with this request (i.e., same-origin). If you needed a particular tool, however, and you ordered it from an outside source like an online marketplace (i.e., cross-origin), the security at the entrance may request that the delivery person provide identification when your tool arrives.-->

---

![](https://i.imgur.com/kbL7syL.png)

---

![](https://s3.amazonaws.com/codecademy-content/articles/what-is-cors/cross-origin.svg)

---

### Why would it be dangerous for browsers to allow arbitrary cross-origin requests?

* Requests made at other domains by your browser would carry along your cookies which often means you'd be logged in to the other site.

* A random attacker would able to make posts, read information, place orders, etc. on our behalf

---

#### What is a GOOD use case?

* Let’s say you’re a mail-sending service and you have a website called fac20.com.
* Your website may allow users to log in and configure a set of options. After a bit, the user chooses to send an e-mail and this triggers a request to fac20.com/send. So far so good.
* Now imagine your mail-sending API is in api.fac20.com. A same-origin policy will block the request!
* You want to enable requests from fac20.com to api.fac20.com and one way to do that is enabling CORS.

---

#### How could this go wrong?

* If you haven't put in user authentication with proper security, and you are only using session cookies, a valid user could have their credentials used by an attacker. 
* This is Cross Site Request Forgery from last week!

![](https://i.imgur.com/sPRs9Q5.png)

---

### New question: how can we get the benefits of CORS with none of the bad side effects?

![](https://media.giphy.com/media/FnGJfc18tDDHy/giphy.gif)

* ##### Properly authenticate users with jwts to stop CSRF 
* ##### Be picky with which endpoints are CORS enabled


---

<!-- Jenn -->

### How can we configure our server to allow requests from a specific different domain? 
* Set headers manually for the domain you want to allow access
* Add this function to your route like checkAuth in workshop
```
function setHeadersForCORS(req, res, next) {
    res.header("Access-Control-Allow-Origin", "DOMAIN OF FAC 20");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
```

---



### Or use the cors module in node, and configure origin:

```
var express = require('express')
var app = express()
var cors = require('cors')
```
```
var corsOptions = {
  origin: 'http://fac20.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
```
```
app.get('api.fac20.com', cors(corsOptions), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for only fac20.com.'})
})
```


---

### What about taking requests from any domain?

---

* Use the wildcard symbol for all domains:
```
function setHeadersForCORS(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

```

* With cors module, use with no arguments: 
```
var express = require('express')
var cors = require('cors')
var app = express()
```

```
app.get('api.fac20.com', cors(), function (req, res, next) {
  res.json({msg: 'CORS-enabled for this Route'})
})
```

---

### Resources:

[If you have a server you want to enable CORS on](https://enable-cors.org/server.html)

[CORS module](https://www.npmjs.com/package/cors)

[A very nice video by a guy who has built his own API and now has to allow request to it](https://www.youtube.com/watch?v=x_Z6iYY5ibc)


[A great stack overflow question on combining jwts and CORS to prevent CRSF](https://stackoverflow.com/questions/48554812/csrf-protection-is-a-jwt-and-cors-whitelist-combination-sufficient)


---

![](https://media.giphy.com/media/l3q2wJsC23ikJg9xe/giphy.gif)

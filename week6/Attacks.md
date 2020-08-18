---
slideOptions:
  transition: slide
  theme: beige
---

# Attacks 

![](https://media.giphy.com/media/Eq49yQGJL835K/giphy.gif)

----

### How can our websites be vulnerable to hacking?

![](https://media.giphy.com/media/uHJh2qDkie2RO/giphy.gif)

---

## What is Cross Site Scripting? (XSS)

- :warning: the NUMBER ONE vulnerability online today 

- better described as 'HTML injection attack' :fencer: 

----

## What's it used for? 

- injecting scripts that: 

-- steal a user's cookies/session tokens/ sensitive information retained by the browser and used with that site

-- change the behaviour of the page for that user

-- send them to a different page entirely


----


## How does it work? 

- involves injection of malicious JS script on to a site  

![](https://media.giphy.com/media/t8CDdgw3NdnGM/giphy.gif)

----

DEMO 

https://xss-game.appspot.com/level1

----

![](https://i.imgur.com/l8wfPKu.png)

----

![](https://i.imgur.com/PQAVgkj.png)

----

## 3 main types 

1. Non-persisent 
2. Persistent
3. DOM 

----

## Non persisent scripting

- aka 'reflective cross site scripting'

- doesn't stay on the page, only affects the user's session in the browser

- typically use HTTP query parameters 

- e.g. demo above 

----


## Persistent scripting

- involves scripts that stay on the website

- often more malicious/harmful as they don't require interaction. 

----

## Example of Persistent Scripting 

- 2010 attack on Apache (open source webs server) 
Attackers opened a new issue contaiing the following text:
> ive got this error while browsing some projects in jira http://tinyurl.com/XXXXXXXXX


----

- This shortened URL redirected back to the Apache instance of JIRA (bug/issue tracking software like Github Projects), at a URL containing an XSS script that stole the session cookie from the user logged-in to JIRA 
- Several infrastructure administators clicked on the link, compromising their JIRA administrator rights, which lead to 1000's of passwords being stolen 

----

## DOM XSS 

- manipulates the DOM
- Dangerous as it's only affecting a user's browser, harder to detect from the server 


---

## How do you stop XSS? 

----

### 1. Treat any user input as unsafe

### 2. Constrain input 

### 3. Encode data 

### 4. Sanitize the input data

----

###  1. Treat any user input as unsafe

### Input data must be properly sanitized before being used on your website.

    The URL
    HTTP referrer objects
    GET parameters from a form
    POST parameters from a form
    Window.location
    Document.referrer
    document.location
    document.URL
    document.URLUnencoded
    cookie data
    headers data
    database data, if not properly validated on user input


----

### 2. Constrain Input


Validate input: **TYPE**, **LENGTH**, **FORMAT**, and **RANGE**.

- The HTML5 spec includes built-in form validation: email, url, number, tel, date etc.
 ```
     <input type="email">
 ```

- JavaScript validation is coded using JavaScript. This validation is completely customizable, but you need to create it all (or use a library).

- Built-in form validation has better performance than JavaScript, but it is not as customizable.

----

### innerHTML can be dangerous!

##### The idea behind an XSS attack with innerHTML is that malicious code would get injected into your site and then execute. 

##### This is possible because innerHTML renders complete markup and not just text.

```
article.textContent = <p>Hello</p>

<p>Hello</p>

article.innerHTML = <p>Hello</p>

Hello

```


----

### 3. Encode data

At the point where user-controllable data is output in HTTP responses, encode the output to prevent it from being interpreted as active content. 

Depending on the output context, this might require applying combinations of HTML, URL, JavaScript, and CSS encoding. 

Encoding variable output substitutes HTML markup with alternate representations called entities. The browser displays the entities but does not run them. 

![](https://i.imgur.com/eDRFDAi.png)


![](https://i.imgur.com/wpDFwx5.png)

[Prevent cross-site scripting attacks by encoding HTML responses](https://www.ibm.com/developerworks/library/se-prevent/index.html)

----

### 4. Data Sanitazation

**"Data sanitazer"** === **"Data filter"**

![](https://media.giphy.com/media/13zUNhE9WZspMc/giphy.gif)

----

#### There are several places you could sanitize:

1. Templating layer
2. Storage layer
3. URL param layer

- **Sanitizing before you save any values from user input is a must!!!**

----

#### XSS Libraries

- [DomPutify](https://github.com/cure53/DOMPurify)


DOMPurify sanitizes HTML and prevents XSS attacks. You can feed DOMPurify with string full of dirty HTML and it will return a string (unless configured otherwise) with clean HTML.

- [Html Purifier](http://htmlpurifier.org/)

[How to Sanitize Data with ES6 Template Strings](https://wesbos.com/sanitize-html-es6-template-strings)

----

```
1   const createDOMPurify = require('dompurify');
2   const { JSDOM } = require('jsdom');
3
4   const window = new JSDOM('').window;
5   const DOMPurify = createDOMPurify(window);
6  
7   const clean = DOMPurify.sanitize(dirty);
```

----

### Treat all user input as unsafe, and sanitize it.

---

## What is Cross Site Request Forgery? (CSRF)

![](https://media.giphy.com/media/qt7bBGJ8x7ZRu/giphy.gif)

----

In a successful CSRF attack, the attacker causes the victim to carry out an action unintentionally.

* change email or passwords for online accounts
* transfer money
* take control of a app's data and functionality

----

When you log in to a website, the browser that you are using stores your session cookies for that website, and sends it along automatically every time you communicate with that site.

----

## How does CSRF work??

![](https://media.giphy.com/media/MGaacoiAlAti0/giphy.gif =450x240)

----

### Example of how 3rd party websites use your cookies
![](https://i.imgur.com/Y0iKnuH.png)

----

## CSRF in Action!!

![](https://media.giphy.com/media/yfEjNtvqFBfTa/giphy.gif =200x150)


![](https://i.imgur.com/VdQc3YP.png)

----

![](https://i.imgur.com/5DsiheV.png)

[YouTube link](https://www.youtube.com/watch?v=vRBihr41JTo) ... or is it??

----

![](https://i.imgur.com/TJ2yfHt.png)

---

## How do you stop Cross Site Request Forgeries?

They work by using an prexisting cookie so there are several ways to defend these delisious treats

![](https://media1.giphy.com/media/nAErqE3k2C3fy/giphy.gif?cid=ecf05e47pw9dl9frjthnp8zcokvx7bf9wbsh9vsh7vf3vfkp&rid=giphy.gif =400x)

----

### As a user you can:
1. Log out of sites after using - CSRF attacks rely on the victim having a valid session for a particular site.
2. Use a different browser for sensitive sites - They also rely on the victim’s browser storing the credentials of the vulnerable website.
3. Use a Javascript blocker - JavaScript is often used to automatically submit the forms used to exploit a CSRF vulnerability

----

### As a developer you can:
1. Limit the time that a session last for. - This is why sites often have short timers on logins, but this creates accessability issues.
2. Use only JSON APIs - There is no way for a simple `<form>` to send JSON.
3. GET should not have side effects - `GET` requests should not change any relevant data in your database.
4. Avoid using POST - Because `<form>`s can only `GET` and `POST`

----

### Or 5. Use a one time key or token:
How do CSRF tokens work?
1. User Requests Access with Username / Password
2. Application validates credentials
3. Server sends the client a token.
4. Client submits a form with the token.
5. The server rejects the request if the token is invalid.
The token is random and only used once (or for a limited time) so a hacker cant predict what it will be and prode one on their form

----

![](https://cdn.scotch.io/scotchy-uploads/2014/11/tokens-new.png =370x)

---

## Thank you

### Any questions?

---

### Reference List

*CSRF and how to stop it*
https://www.youtube.com/watch?v=vRBihr41JTo
https://medium.com/swlh/intro-to-csrf-cross-site-request-forgery-9de669df03de
https://github.com/pillarjs/understanding-csrf
https://scotch.io/tutorials/the-ins-and-outs-of-token-based-authentication


*XSS and how to stop it*
https://www.youtube.com/watch?v=L5l9lSnNMxg
Google game - https://xss-game.appspot.com/ 
Apache incident report - https://blogs.apache.org/infra/entry/apache_org_04_09_2010
https://resources.infosecinstitute.com/how-to-prevent-cross-site-scripting-attacks/
https://gomakethings.com/preventing-cross-site-scripting-attacks-when-using-innerhtml-in-vanilla-javascript/
https://docs.microsoft.com/en-us/previous-versions/msp-n-p/ff649310(v=pandp.10)?redirectedfrom=MSDN
https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
https://www.google.com/about/appsecurity/learning/xss/
https://www.troyhunt.com/understanding-xss-input-sanitisation/
https://portswigger.net/web-security/cross-site-scripting
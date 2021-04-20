# Browser storage
## What different methods can we use to store information in the browser?

---

### Client-side storage:
- Cookies
- Session Storage
- Local Storage
- IndexedDB

- Cache Storage

----

### Synchronous:
- Cookies
- Session Storage

- Local Storage

### Asynchronous:
- IndexedDB

- Cache Storage

----

Can access and view all with dev tools

Test storage:
https://storage-quota.glitch.me/
![](https://media.giphy.com/media/N35rW3vRNeaDC/giphy.gif)

---

### A Table. Because tables are dependable.
![](https://i.imgur.com/My29LQa.png)



<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.XKgTeEMEUB6Elu0KoaUhjgHaHa%26pid%3DApi&f=1" width="100" alt="egg" />


----

### Cookies
- a small piece of information left on a visitor's computer by a website, via a web browser
- used to personalize a user’s web experience with a website
    - may contain the user’s preferences or inputs when accessing that website. 
    - A user can customize their web browser to accept, reject, or delete cookies.
- can be set and modified at the server level using the `Set-Cookie` HTTP header, or with JavaScript using `document.cookie`
- cannot be trusted as they come from the client

----

### Session Storage 
- maintains a separate storage area for each given origin that's available for the duration of the page session (as long as the browser is open, including page reloads and restores)
- stores data only for a session, meaning that the data is stored until the browser (or tab) is closed.
- data is **never** transferred to the server
- storage limit is larger than a cookie (at most 5MB).

----

### Local Storage 
- persists even when the browser is closed and reopened
- stores data with no expiration date, and gets cleared only through JavaScript, or clearing the Browser cache / Locally Stored Data.
- storage limit is the maximum amongst the three.

---

### What types of things would you store in each?

----

### Cookies

* Session management  
Cookies let websites recognize users and recall their individual login information and preferences.
E.g. account user names, passwords, email addresses

* Tracking  
Shopping sites use cookies to track items users previously viewed, allowing the sites to suggest other goods they might like and keep items in shopping carts while they continue shopping.
E.g.  prior purchases users made, items users viewed 

<!-- 
* Personalization  
Customized advertising is the main way cookies are used to personalize our sessions. We may view certain items or parts of a site, and cookies use this data to help build targeted ads that you might enjoy.
E.g.  items users searched for
 -->
<!-- * A cookie typically contains two bits of data: a unique ID for each user, and a site name.

* To validate their users’ identities
  * account user names and passwords
  * email addresses

* To customize or adjust user experience
  * prior purchases users made
  * items users viewed -->

----

### Local storage
* To keep data that would be convenient for the user to see even if the browser was refreshed
  * many forms save a user's input in Local storage until it is submitted.

* To store user preferences, like a UI theme. Without a web server and database to save a user preference, Local storage allows them to continue using the website with their customizations.

----

### Session storage

* Stores data for only one session (the data is deleted when the browser tab is closed).
  * a user's input, a UI theme


---

### Where can we see what a web page has stored in our browser?

----

### We can use chrome dev tools:
![](https://i.imgur.com/nWe3zwS.png)

----

### The Cookies table contains the following fields:
### Name 
The cookie's name.
### Value
The cookie's value.
### Domain 
The hosts that are allowed to receive the cookie. See Scope of cookies.
### Path
The URL that's needed in the requested URL  to send the Cookie header.

----

### Expires / Max-Age
The cookie's expiration date or maximum age.  For session cookies this value is always Session.
### Size 
The cookie's size, in bytes.
### HTTP 
If true, it indicates that the cookie should only be used over HTTP, and JavaScript modification is not allowed. 

----

### Secure
If true, this field indicates that the cookie can only be sent to the server over a secure, HTTPS connection. 
### SameSite 
Contains strict or lax if the cookie is using the experimental SameSite attribute.
### Priority 
Contains low, medium (default), or high if using depreciated cookie Priority attribute.

----

# [Netflix](https://www.netflix.com/browse)
![](https://media.giphy.com/media/3oz8xsh9xomfOvCnuw/giphy.gif)

----

![](https://media.giphy.com/media/hUKiV16tVhRA8wLgQ9/giphy.gif)

---

### Resources
- [MDN Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [Storing Data in the Browser with LocalStorage](https://stackabuse.com/storing-data-in-the-browser-with-localstorage/)
- [What You Need To Know About Cookies](https://.norton.com/norton-blog/2015/07/what_you_need_tokno.html#:~:text=A%20cookie%20is%20a%20small,user%2C%20and%20a%20site%20name.&text=Cookies%20are%20simply%20data%20files%20and%20not%20programs.)
- [Storage test](https://storage-quota.glitch.me/)

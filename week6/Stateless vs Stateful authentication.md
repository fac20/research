
<!-- https://hackmd.io/@akshayasatheesh/H1w-XQ_fv -->

## Stateless vs stateful authentication

---

* ##### HTTP is stateless so each request made is totally unaware of any action taken previously. 
* ##### Say for example we just logged into our twitter account and we navigate to our settings page, with the default HTTP behavior, we would be required to log back in again because the server has no idea that we just logged in 
* ##### But with session and token authentication we can tell the server that we are already logged in and we have should be granted access to that page.

> HTTPS just means HTTP over TLS. Since HTTP is stateless, HTTPS is also stateless.

---

### What is session-based (stateful) authentication? 

----

Session-based authentication is one in which the user state is stored on the server's memory.

----

## Steps followed :footprints: 

#### When the user logs in:
- The server creates a session for the user.
- The session id is then stored on a cookie on the user's browser.
- Whilst the user stays logged in, the coookie would be sent along with every subsequent request eg going to a different page within the application

----

#### When the user sends a request (while logged in):
- The server can the compare session id stored on the cookie against the session information stored in the memory to identify user's identity
- The server then sends a response with the corresponding state
- This means there is some authentication info on both the client and server sides and it must match. 


----

### Example

![](https://i.imgur.com/gnbLZ6H.png)


---

### What is token-based (stateless) authentication?


----

There is a standard for token generation, it is JWT (JSON Web Token). 
<!-- *  The user state is stored on the client.
*  The server treats all client connections equally and saves no information from prior requests or sessions
*  Every request to the server is accompanied by a token which the server uses to verify the authenticity of the request. 
*  The server has a *method* of checking whether or not the token held by the client is valid. -->

----

![](https://i.imgur.com/SGJLD9h.png)


----

JWT or JSON Web Token: a string which is sent in HTTP request (from client to server) to validate authenticity of the client. 


But now, you don’t have to save JWT in database. Instead, you save it on **client side only**.

----

JWT is created with a **secret key** and that secret key is private to you (the server). 

When you receive a JWT from the client, you can verify that JWT with this that secret key. 

Any modification to the JWT will result into verification failure.

----

A JWT is simply a string but it contains three distinct parts separated with dots (.).

```
var HEADER_HASH = base64(header);
var PAYLOAD_HASH = base64(payload);
var SIGNATURE_HASH = base64(signature);
var JTW = HEADER_HASH + '.' + PAYLOAD_HASH + '.' + SIGNATURE_HASH;
//JTW ~ xxxx.yyyy.zzzz
```

---


### What are the advantages and disadvantages of each?

---

 Advantages of JWT usage (token-based; stateless):
-  Less server memory is needed: you don't need to store info on every user 
-  It makes server farms easier to manage, without big databases or extra code: you have the client carry around their own authentication, so you can let them visit multiple servers in one session 
-  No sessions mean no bugs that suddenly disappear when the session ends: testing is easier
-  There is no issue with scaling because token is stored on the client side.

---

 Disadvantages of JWT:
-  If the secret key is compromised by a developer that's a huge problem for every user on the site! 

---

Advantages of cookies (session-based; stateful): 
- The server can break the session any time
- It is impossible to steal session information from the session identifier because it is just an identifier associated with that particular session
- An authentication token is just an identifier, so session data does not affect its size.
- It is possible to modify any session data in session data storage.
- Session cookies can be created with a secure flag that prevents token transmission through unencrypted channels

---

Disadvantages of cookies: 
- Because the sessions are stored in the server’s memory, scaling becomes an issue when there is a huge number of users using the system at once.
- Vulnerable to a CSRF (Cross-Site Request Forgery) attack - when the entity runs a malicious JavaScript script, targeting website without the knowledge of browser use.

---

### Conclusion

![](https://media.giphy.com/media/lQ1AeaXx6mkECBWVlX/giphy.gif)

---

> #### Stateless authentication is easier to implement and scale, but stateful authentication is more secure and easier to manage.

<br>

> #### Depending on the scenario, using a hybrid of both can lead to a more secure system, than using one alone.

---

### Resources

- [Stateless and Stateful Models](https://www.atlantic.net/vps-hosting/what-is-stateless-stateful-models-web-development/)
- [What the heck is JWT anyway?](https://dev.to/siwalikm/what-the-heck-is-jwt-anyway--47hg)
- [What is JWT or JSON Web Token?](https://link.medium.com/WXT2C9FN18)
- [JWT library](https://github.com/auth0/node-jsonwebtoken)
- [Recommended libraries for JWT creation](https://jwt.io/)
- [Video: What Is JWT and Why Should You Use JWT](https://www.youtube.com/watch?v=7Q17ubqLfaM)
- [Video: JWT authentication tutorial](https://www.youtube.com/watch?v=mbsmsi7l3r4)
- [Using synchronizer token pattern to prevent CSRF](https://stackoverflow.com/questions/16049721/how-is-using-synchronizer-token-pattern-to-prevent-csrf-safe)

---

![](https://media.giphy.com/media/l2SpMudGXqV2B5PBm/giphy.gif)

---

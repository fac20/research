# Security!! 👁🔐

![](https://media.giphy.com/media/YN6qUXj4HdXoY/giphy.gif)

---

## How can we ensure our production server is secure?

----

### Follow [security best practices](https://expressjs.com/en/advanced/best-practice-security.html) for Express apps


- Development and Production phases.

---
 
### 1. Don’t use deprecated or vulnerable versions of Express

---

### 2. Use TLS

---

### 3. Use Helmet (or at least disable the X-Powered-By header)
- sets security-related HTTP response headers

---

#### Example of security-related headers
- csp
- hidePoweredBy (hides Express)
- hsts (use HTTPS!)
- ieNoOpen
- noCache
- noSniff (MIME-sniffing)
- frameguard (click-jacking)
- xssFilter

---

<!-- Jihyun -->
### What is a content security policy (CSP)?

----

* An added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks.
* Define content sources which are approved
<!-- So the browser loads files only from that sources which we define -->
<!-- Without a CSP, the browser simply loads all files on a page without considering the source which could be harmful. This puts both the site and it's visitors at risk of malicious activity.
 -->
![](https://i.imgur.com/Nq9y4kS.png )

----

#### 2 ways of setting CSP
- meta tag
![](https://i.imgur.com/D7zbaqC.png )

- request headers
![](https://i.imgur.com/dtCIfgi.png )

----

* CSP of the course book
![](https://i.imgur.com/sCXDTp3.png )

----

* default-src: Defines the default policy for fetching resources
* script-src: Defines valid sources of JavaScript
* style-src: Defines valid sources of stylesheets or CSS
* img-src: Defines valid sources of images
* form-action: Defines valid sources that can be used as an HTML form action

<!-- So by setting CSP, we can make sure the web page is going to load the files from the sources we defined -->

---

### 4. Use cookies securely
- don’t use the default session cookie name
    - opens your app to attacks similar to X-Powered-By
    - can be used to fingerprint the server and target attacks
- set cookie security options appropriately

----

#### Set the following cookie options to enhance security:

- **secure**: Ensures the browser only sends the cookie over HTTPS
- **httpOnly**: Ensures the cookie is sent only over HTTP(S), not client JavaScript, helping to protect against cross-site scripting attacks

----

- **domain**: indicates the domain of the cookie; use it to compare against the domain of the server in which the URL is being requested. If they match, then check the path attribute next
- **path**: indicates the path of the cookie; use it to compare against the request path. If this and domain match, then send the cookie in the request
- **expires**: use to set expiration date for persistent cookies

---

### 5. Prevent brute-force attacks against our login endpoint

![](https://media.giphy.com/media/11z3oNkMCQBDcA/giphy.gif)

----

The most basic brute force attack is a dictionary attack.

The attacker works through a dictionary of possible passwords and tries them all using a computer program.

<!--Dictionary attacks start with some assumptions about common passwords -->

----

Brute Force Attack - is the cyberattack equivalent of trying every key on your key ring, and eventually finding the right one

![](https://media.giphy.com/media/3orifcdD3ySWhsvaI8/giphy.gif)

----

As well as cracking username/passwords, attackers also use brute force attacks to look for hidden web pages.

<!--to seek out a weak page they can exploit / software vulnerability-->

----

### Implement some kind of rate-limiting

In Node.js you can use the ratelimiter package.

1: Count number of unsuccessful login attempts and block login if limit reached.
2: if successful login, reset counter.
3: if unsuccessful: count += 1.

![](https://media.giphy.com/media/szDJjGT6rsWdy/giphy.gif)

<!--lockout users after x number of failed attempts. 

block IP addresses that have e.g. 100 failed attempts in 1 day-->

----

Also require human interaction like captcha and multi-factor authentication.

![](https://media.giphy.com/media/3o84UaJJJE2k9RceFa/giphy.gif)

---

### 6. Ensure your dependencies are secure
- know what you're installing
- `npm audit` analyses your dependency tree


---

### 7. Avoid other known vulnerabilities
- Look at advisories from [Node Security Project](https://www.npmjs.com/advisories) and [Snyk](https://snyk.io/vuln/) regarding modules or Express
- Familiarise yourself with known web vulnerabilities e.g. injections or XSS
- Take precautions to avoid

---

### 8. Additional considerations
- Look at [Node.js Security Checklist](https://blog.risingstack.com/node-js-security-checklist/)

---

![](https://media.giphy.com/media/8JW82ndaYfmNoYAekM/source.gif)



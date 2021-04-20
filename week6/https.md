# HTTPS 

---

## Whats the difference between HTTP and HTTPS?

HyperText Transfer Protocol ***Secure***
![](https://i.imgur.com/d99Mof6.png)

----

<!-- Terry --> 
## Why do we need HTTPS ?
 
----

## Privacy

![](https://media.giphy.com/media/xT5LMUo3VG5HLDi7ja/giphy.gif) 

----

## HTTP - everyone can read requests and responses

GET /hello.txt HTTP/1.1
User-Agent: curl/7.63.0 libcurl/7.63.0 OpenSSL/1.1.l zlib/1.2.11
Host: www.example.com
Accept-Language: en

----

## HTTPS - only those can read the request and responses otherwise...

t8Fw6T8UV81pQfyhDkhebbz7+oiwldr1j2gHBB3L3RFTRsQCpaSnSBZ78Vme+DpDVJPvZdZUZHpzbbcqmSW1+3xXGsERHg9YDmpYk0VVDiRvw1H5miNieJeJ/FNUjgH0BmVRWII6+T4MnDwmCMZUI/orxP3HGwYCSIvyzS3MpmmSe4iaWKCOHQ==

----

## Authentication
![](https://media.giphy.com/media/3ohhwq5fVScLuq9hqo/giphy.gif)

----

## Integrity 

![](https://dpsvdv74uwwos.cloudfront.net/statics/img/ogimage/man-in-the-middle-attack-how-avoid.png)


---

## How does HTTPS work ? 

**HTTPS = HTTP + TLS

***Transport Layer Security***

---

<!-- Amber--> 
## How does TLS encryption work?

To understand TLS encryption, we need to first learn about two types of encryption algorithms.

----

### Symmetric key algorithm

- A message is encrypted using a key.
- Decrypted using an identical copy of the key.
🚨🚨🚨🚨 DANGER 🚨🚨🚨🚨
__You must be SO careful with this key.__
- it's faster 

----

### Asymmetric key algorithm

- A message is encrypted using the recipient's public key
- Decrypted using the recipient's private key.

----

### So... Back to TLS

- The browser and server need a secure connection to transmit messages.
- First they need to agree on how to communicate securely.
- This negotiation is called __*THE HANDSHAKE*__ 🤝

---

<!-- My Hoa --> 
### The Handshake

![](https://media.giphy.com/media/el2PobqvOAYJndhVgc/giphy.gif)

---

### Client Hello

---

Cipher suite - SSL/TLS versions & encryption algorithms the browser can work with

----

### Server Hello

---

Response with:
- Server's TLS version and encryption algorithm preference.
- Server's SSL certificate
- Server's public key

----

<!-- Josh --> 
### Client Key Exchange

---

- Makes sure that certificate is legit!
- Generate a *Pre-master key*
- Encrypt it with server's public key

Disclaimer: *this part is super complicated and mathematical*

---

### Change Cipher Spec 

---

- The server can decrypt the pre-master key using its private key.
- Now a symmetrical key is available for secure communication.


![](https://cheapsslsecurity.com/blog/wp-content/uploads/2017/10/ssl-tls-handshake-process-1024x670.png)

---

<!-- Amber --> 

### Certificate Authorities 
- Issue certificates 
- Confirm the identity of certificate owners 
- Provide proof that certificates are valid 

--> Root stores determine which certificate authorities can be trusted 


--- 

## Questions?

* Diffie-Hellman key exchange


# Client vs Server

What are the distinctions between a web client and a web server?

---

## Questions to consider
1. What is a client and what is a server?
2. Can something be both client _and_ a server?
3. What kind of code should be run on a server instead of a browser?

---

## What is a client and what is a server?

----

## Client

A client is computer hardware or software that accesses a service/data made available by a server as part of the client–server model of computer networks.
 
A server is often but not always on another computer system, in which case the client will access the server via a network.

----

![](https://assets-global.website-files.com/5debb9b4f88fbc3f702d579e/5ea0baf0b2840153a46b9128_Client-Server-Achitecture.png)

----

![]( https://i.imgur.com/sjPaqnx.png =400x )

----

## Server

A server can also be hardware or software.

- On the hardware side, a web server is a computer that stores web server software and a website's component files (e.g. HTML documents, images, CSS stylesheets, and JavaScript files). It is connected to the Internet and supports physical data interchange with other devices connected to the web.

----

- On the software side, a web server includes several parts that control how web users access hosted files, at minimum an HTTP server. An HTTP server is a piece of software that understands URLs (web addresses) and HTTP (the protocol your browser uses to view webpages). It can be accessed through the domain names (like mozilla.org) of websites it stores, and delivers their content to the end-user's device.

----

![](https://media.prod.mdn.mozit.cloud/attachments/2016/09/04/13841/3320b8e8984e7ab1fa72124df678693c/Basic%20Static%20App%20Server.png)


----

![](https://media.giphy.com/media/PD9hjqdeidgqY/giphy-downsized-large.gif)

----

## Static vs Dynamic Servers

----

### Static

A static page is when we write code, save, and them copy it over to the web server.

![](https://miro.medium.com/max/514/1*aIQ9PsOoB3732Xdbcz5Dsg.png)

----

When a client requests the data, the browser asks the web server where it is, and the web server responds by sending the data

![](https://miro.medium.com/max/474/1*3S2IWwXdDK7oxShod0xNhQ.png)

----

### Dynamic Servers

Instead of writing every single page/code for every instant that a client can request, we can use programs that generate a dynamic webpage

![](https://miro.medium.com/max/577/1*ajoHDLvMBmJNeMPsQjlHgg.png)

----

These programs are called server-side web applications. When a request is sent from the client request, the application will make a webpage as a response to the client (if the request is valid..)


---

## What kind of code should be run on a server instead of a browser?

----

### Server-side VS Client-side
### programming

----

### Client-side code 

* primarily concerned with improving the appearance and behavior of a rendered web page. This includes selecting and styling UI components, creating layouts, navigation, form validation, etc.

* written using HTML, CSS and JavaScript — it is run inside a web browser.

----

### Server-side code

* mostly involves choosing which content is returned to the browser in response to requests.


* can be written in any number of programming languages (popular server-side web languages: PHP, Python, Ruby, C#, and NodeJS.) - it is run on a web server.

----

Web browsers communicate with web servers using the HyperText Transfer Protocol (HTTP). 

HTTP Requests include:

* A URL - identifying the target server and resource
* A method that defines the required action (for example, to get a file or to save or update some data)

----

- GET: Get a specific resource 
- POST: Create a new resource 
- HEAD: Get the metadata information about a specific resource (without getting the body like GET would.)
- PUT: Update an existing resource (or create a new one if it doesn't exist).
- DELETE: Delete the specified resource.
- TRACE, OPTIONS, CONNECT, PATCH: These verbs are for less common/advanced tasks.

---

## Can something be both a client _and_ a server?

----

In the client-server model, server programs can act as BOTH servers (providing responses) and clients (making requests)

## BUT

CLIENT programs can only be clients (making requests)


----


Examples of servers acting as both: 

- Proxy servers take requests from your web browser (the client) and forward them to other web servers on the internet. The proxy servers act as servers to _receive_ your requests, and then act as clients when making requests to the destination server


----


- A Web cache is a kind of proxy server that will fulfill requests from your client computer to serve you a page if it's available locally, and if it's not available, it will act as a client and request it from the authoritative server

![](https://i.imgur.com/qVF552C.png) 



----


The client server model is a _centralised model_ , and just one way in which computers communicate on the web.

Another is the *peer-to-peer model*, which is _decentralised_ 


----
 

In the peer-to-peer model, there's no client or server, both computers can be requesters and responders, upload and download data from each other. 

E.g. bittorrent 


---


## References/Resources
[An Illustrated Guide to Server-Side and Client-Side Code](https://medium.com/young-coder/an-illustrated-beginners-guide-to-server-side-and-client-side-code-723cbb1db9ea)
[What is a Web Server](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server)
[Client and SErver Overview](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview)

---

## Thank You!


![](https://media.giphy.com/media/3o6MbudLhIoFwrkTQY/giphy.gif)

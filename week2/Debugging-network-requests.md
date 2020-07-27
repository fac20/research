# Debugging network requests :computer: 

 Slide:(https://hackmd.io/@mofLNNBERUyqA8WPmxFAxQ/ry_9DVmgP#/3) 

---

### What is a network request?

A HTTP request from your web browser to a server-side application.

Your computer will ask the server for all files associated with a certain page. 

When we visit a webpage, we want all the files associated with that address. 

---

*Ideally* we will get the page back with a status code of 200 = ok!

<br>

![](https://media.giphy.com/media/3NtY188QaxDdC/giphy.gif)

---

### Errors :shocked_face_with_exploding_head: 

##### If there is something wrong and the page won't load, we want more detail:

<br>

###### :grey_question: Was the page moved? If so we'll get a code of 301. 
###### :grey_question: Was that page deleted? If so we'll get back a code 410.

![](https://media.giphy.com/media/Gui81MfPMvoWI/giphy.gif)

---


####  <span style="color:lime">Devtools Network panel</span> 
###### A part of the Google Chrome Developers tools which allows you to inspect resources as they are accessed over the network.
![](https://i.imgur.com/wl82LWW.png)

---

### How can we see the network requests our browser is making?

* ##### <span style="color: hsl(10, 34%, 70%)">Chrome:
##### right click > inspect > network tab > reload

* ##### <span style="color: hsl(10, 34%, 70%)">Firefox:
##### topbar menu > web developer > toggle tools > network tab > reload

* ##### <span style="color: hsl(10, 34%, 70%)">Safari:
##### preferences > advanced > show develop menu in toolbar. 
##### develop menu > web inspector > network tab  


---

#### <span style="color: hsl(210, 54%, 60%)">The most common use cases for the Network panel are:</span> 

###### - Making sure that our resources are actually being uploaded or downloaded at all. E.g why can't the user see this picture- is it being sent to their web browser? 
###### - Inspecting the properties of an individual resource, such as its HTTP headers, content, size, and so on. Then we can see how fast a page loads for a user for example. 
###### - To get different user experiences - depending on factors such as internet connection, Visit occurence 
###### - Verifying that network requests are going through as expected


---

##### <span style="color: hsl(80, 54%, 60%)">Demo</span> 
###### <span style="color: hsl(10, 34%, 70%)">Open network panel</span> - explain different columns, order them differently, show hidden columns
###### <span style="color: hsl(10, 34%, 70%)">Individual network resources</span> - inspect resource details like headers, preview, response, timing
###### <span style="color: hsl(10, 34%, 70%)">Going through a large amount of network resources</span> - filter through files to get particular ones eg(css, png, js), excluding files eg(-main.css)
###### <span style="color: hsl(10, 34%, 70%)">Request blocking</span> -Lets you block a resource and see how a page behaves when those pages aren't available


---

### How can we manually send test requests outside of our browser?


---

There are some different programs you can use to  just simulate requests to pages and make sure everything is ok:

* ##### REST Easy - Firefox add-on
* ##### Insomnia
* ##### Postman


---

We will use Postman, which looks like this:

---

![](https://i.imgur.com/RGvsbaQ.png) 

https://www.srijan.net/blog/manual-api-testing-using-postman

---

### Throttling

> Emulates network speed across various different network speed condition. 

> For example, you can see how your page loads with a 2g connection, as some users in the countryside or an old phone might have -->

---

* ##### <span style="color: #7893EC">Download speed
* ##### <span style="color: #7893EC">Upload speed
* ##### <span style="color: #7893EC">Minimum latency

<br>

![](https://css-tricks.com/wp-content/uploads/2015/11/network-tab.gif) 

---

### Thank you! :yellow_heart: 

![](https://media.giphy.com/media/cmNaji0Kvrhvaz6frN/giphy.gif) 

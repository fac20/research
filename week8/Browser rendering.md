# Browser rendering (Spike)
### What is the "critical rendering path" (CRP) in browsers?

---

## The Critical Rendering Path (CRP)

When a browser recieves an HTML page from the server, there are a lot of steps to be taken before pixels are drawn on the screen. 

The CRP is the sequence a browser needs to take before 'painting' anything on the page. 

----
 
### Key terms
* **Parsing** = translating/reading code 
* **Rendering** = displaying 
* **Blocking** = stopping a part of the process from happening

---

## There are 6 stages to the CRP
1. Constructing the DOM Tree
1. Constructing the CSSOM Tree
1. Running JavaScript
1. Creating the Render Tree
1. Generating the Layout
1. Painting

----

![](https://media.giphy.com/media/3o85xA30i7z1LUIISY/giphy.gif)

### 1: Constructing the DOM Tree
The browser constructs a model of elements, as related by the HTML. 

----

![](https://i.imgur.com/rHENiNL.png)

----

### 2: Constructing the CSSOM Tree
#### Getting the CSS file and then building a model of elements as above but with details styling
- When the browser hits a link to the CSS file, it will make another request, for that file. 
- **Considered ‘render blocking’** because the browser will not move on to building the rest of the page until it has parsed all CSS.
- Considered **’script blocking’ too**

----

![](https://i.imgur.com/fgYcdOU.png)


----

### 3: Running JavaScript
#### Getting the JS file and then executing it
- When the browser hits the ’script src=index.js’ line it will send a request for that file or find it if the script is in the HTML, and then it will run it
- **Considered ‘parser blocking’** because the browser will stop even trying to read the rest of the HTML file, let alone load it, until it’s finished finding and executing the JS!


----

![](https://media.giphy.com/media/l0Iy0WIw7biDtpXAQ/giphy.gif)
<!-- end of Jennifer's bit -->

----

<!-- Jihyun -->
### 4: Creating the Render Tree

- **The Render Tree** is a combination of both the DOM and CSSOM
- Represents what will be eventually rendered on the page
- Only captures the visible content

<!-- So for example, it's not gonna include elements which have `display: none` property in css -->

----

![](https://i.imgur.com/F7DM7l5.png) ![](https://i.imgur.com/nWkkI8I.png)

----

### 5: Generating the Layout

* The Layout is determined by the viewport size, which provides context for CSS styles that are dependent on it
* The viewport size is determined by the meta viewport tag provided in the document head.

![](https://i.imgur.com/T2rFzM7.png)


----

### 6: Painting

* The visible content of the page is converted to pixels to be displayed on the screen
* How much time the paint step takes depends on the size of the DOM, as well as what styles are applied. 

<!-- Some styles require more work to execute than others. for example, a complicated gradient background-image will require more time than a simple solid background colour. -->

----

### Putting it All Together
<!-- To see the Critical Rendering Path in process -->
* Performance tab in the DevTool
![](https://i.imgur.com/WWYgHIq.png)


<!-- end of Jihyun's bit -->


---

<!-- Jess -->
<!-- .slide: data-background="#00FFFF" -->
## Efficiently load JavaScript...

![](https://i.imgur.com/YwpDbOi.png)

<!-- If the network is slow, you're on a mobile device or the connection is unstable then the script tag may take longer to load - meaning the rest of the page won't load until the script tag has (because it is in the header) - you can alternatively put it in the footer or use one of these 2 keywords... -->

![](https://media.giphy.com/media/8mHRy4YAYs0zC/giphy.gif)

----

<!-- .slide: data-background="#FA8" -->
## Async

![](https://i.imgur.com/USMeyPp.png)

* takes precedence on modern browsers

![](https://media.giphy.com/media/HS3sNxDPQP1a8/giphy.gif)

----

<!-- .slide: data-background="#ADFF2F" -->
![](https://i.imgur.com/JeCow3j.png)

The script is fetched asynchronously, and when it’s ready the HTML parsing is paused to execute the script, then it’s resumed.

![](https://media.giphy.com/media/4XZa6bYZLHLMI/giphy.gif)

----

<!-- .slide: data-background="#FF00FF" -->
async blocks the parsing of the page while defer does not.

![](https://media.giphy.com/media/gjxKUy0P38Hkutz0sH/giphy.gif)

---

<!-- Azizi -->
<!-- .slide: data-background="#8FD" -->
## Defer

![](https://i.imgur.com/GRHMG7A.png)

The script is fetched asynchronously, and it’s executed only after the HTML parsing is done.

----

<!-- .slide: data-background="#AF3" -->
### How a differd script loads and exicutes in the head
![](https://i.imgur.com/70zymHS.png)

----

<!-- .slide: data-background="#FA8" -->
### Differ and Blocking
* Differ does not block parsing, but does mean your script will execute after everything else. 
* This makes it a slower way to execute your JavaScript *(but not as slow as putting you script tag at the bottom of the page)*, but the fastest way to load everything else.

![](https://media.giphy.com/media/ihHHmwn37zshSEJNg7/giphy.gif)

----

<!-- .slide: data-background="#0FF" -->
### Compatability
* Older browsers that support defer but not async will fallback to defer

![](https://media.giphy.com/media/Tiy1sNzMY5l7PjfUVa/giphy.gif)

----

<!-- .slide: data-background="#F0F" -->
## Where to put scripts
* These attributes only make sense when using the script in the head portion of the page.
* They are useless if you put the script in the body footer where the script will load last anyway.

----

## Async vs Defer
The best thing to do to speed up your page loading when using scripts is to put them in the head, and add a defer attribute to your script tag. 

![](https://i.imgur.com/HcS12oM.png)

---

<!-- .slide: data-background="#FF1493" -->
## Thank you

![](https://media.giphy.com/media/xTiIzG6VSvkGekome4/giphy.gif)

----

### Any questions?

![](https://media.giphy.com/media/xTiIznN4zOjSW5L51m/giphy.gif)

---

## Extra resources
[* A very in-depth look at each step of the CRP](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/#The_rendering_engine)

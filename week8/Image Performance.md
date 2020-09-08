# Image performance

---

39% of people will stop engaging with a website if images won’t load or take too long to load

----

47% of Users expect a maximum of 2 seconds loading time for an average website

<!-- source: https://www.sweor.com/firstimpressions -->

----

## How we can efficiently serve image assets?
<!-- By optimising your images-->
<!-- By efficiently, we mean optimising and balancing image size & resolution, website performance (load speed) and have responsive images (different images to suit different devices)
-->

---

![](https://media0.giphy.com/media/gVJKzDaWKSETu/giphy.gif?cid=ecf05e47rbaqzomk35buljwa3kj7vd9q5rxluniq3kgs2dlb&rid=giphy.gif =200x)

Image optimization is an art and a science: 
#### - an art because there is no definitive answer for how best to compress an individual image, and a science because there are lots of techniques to significantly reduce the size of an image. 
#### - Optimal settings for your image depend on format capabilities, content of encoded data, quality, pixel dimensions, and more

---

### Choosing the right file format 

--- Ask yourself: **do I need an image?**


- CSS effects can have the same design function in a lot less space 
- Don't use image in text if you can use font!  
- Fonts let you select, search, resize text— big plus for usability and accessibility 

![](https://media.giphy.com/media/DQaeCdCqhHWx3n4dvH/giphy.gif =300x)

---

Choice of image type will affect its size :

- **Raster graphics** represent an image by encoding the value of each pixel inside a grid, e.g. JPEG, GIF, PNG, WebP 

- **Scalable Vector Graphics (SVGs)** are represented by points and lines on a plane and can be scalable to any resolution without losing clarity/information 

---

![](https://imgur.com/HHEpbGA.png) 

---

**Raster**  

|          | Pros | Cons|
| -------- | -------- | -------- |
| | Can be photorealistic | Take up lots of space
| | Easy to create or copy | Don't scale very well on large screens 
| | | You may need to save several versions of an image


---

**SVG** 

|          | Pros | Cons|
| -------- | -------- | -------- |
| | Written in code | Complicated to write/learn
| | Great results at any resolution | Hard to make realistic images 
| | Good for logos and icons 
| | Resolution independent 
||Can be compressed using SVGO or GZIP techniques ||

---

![](https://i.imgur.com/82nqOGC.png)

---

### Use WebP! 
- JPEG and PNG are universally supported Raster file types
-  Modern browsers support the newer WebP, which offers better overall compression, transparency and animation 
- ***If possible use WebP***, it will generally provide better compression than older formats, and should be used where possible. You can use WebP along with another image format as a fallback

---

#### Image optimization checklist: 

* ##### Prefer vector formats: vector images are resolution and scale independent, which makes them a perfect fit for the multi-device and high-resolution world.
* ##### Minify and compress SVG assets: XML markup produced by most drawing applications often contains unnecessary metadata which can be removed; Ensure that your servers are configured to apply GZIP compression for SVG assets
* ##### Prefer WebP over older raster formats: WebP images will usually be far smaller than older images
* ##### Pick best raster image format: determine your functional requirements and select the one that suits each particular asset

---

#### ... Checklist continued:

* ##### Experiment with optimal quality settings for raster formats: don't be afraid to dial down the "quality" settings, the results are often very good and byte savings are significant.
* ##### Remove unnecessary image metadata: many raster images contain unnecessary metadata about the asset: geo information, camera information, and so on. Use appropriate tools to strip this data.
* ##### Serve scaled images: resize images and ensure that the "display" size is as close as possible to the "natural" size of the image. Pay close attention to large images in particular, as they account for largest overhead when resized!
* ##### Automate: invest into automated tools and infrastructure that will ensure that all of your image assets are always optimized.

<!--( ^^ From the compression webpage)-->


---

### How can we render different images at different viewport sizes?

----

#### <font color="#f00">⚠️</font> Not everyone browses the internet with the same size screen! 
 #### And it isn’t just size — resolution is an issue as well. <font color="#f00">⚠️</font>

<br>

To make images look <font style="background-color:yellow;color:blue;font-weight:bolder">G R E A T</font> on high resolution screens, the source files need to be much larger. 

![](https://media.giphy.com/media/j3POomBxMU6ZCFlMyr/giphy.gif)

----

### Solution #1: Large images for everyone!

<br>

* Low-rez and small-size screens can display the giant, high-def image with no problem
* It will look basically the same to them as if you had given them an image half the size
* Improves UI for the high-end viewers and everyone else is unaffected

----

Users *still* have to download src files! :angry: :thumbsdown: 

![](https://media.giphy.com/media/xUKTfpLS9BYUT2vprT/giphy.gif)

* Costs bandwidth
* Slow page loading times
* Uses up more PC memory

----

### Possible solution

Media queries?

* Difficult to setup
* Requires dev to figure out which image version to select
* Guess work
* Error prone

![](https://media.giphy.com/media/d2YVsM6RSAaMUes0/giphy.gif =400x)

----

### New & improved solution! :sparkles: 

<br>

Thanks to HTML5's.....

:tada: srcset! :tada: 

<br>

* ##### Allows you to define a list of differently-sized versions of the same image, and provide information about the size of each one. 
* ##### Then, the client (browser) gets to make the decision.

----

#### There are two parts to using srcset:
##### :one: creating the individual files 
##### :two: the markup

<br> 

#### General practice seems to have settled on four sizes of each image (at least for now):

![](https://i.imgur.com/3rnCVZW.png)

<!--
* image-1x.jpg (“normal” sized one)
* image-2x.jpg (twice the size 2x)
* image-3x.jpg (thrice 3x)
* image-4x.jpg (four times 4x)
-->

----

![](https://29comwzoq712ml5vj5gf479x-wpengine.netdna-ssl.com/wp-content/uploads/2015/03/srcset-width-descriptors.png)

---

#### Lazy-load Images
- Load assets only when you need them - not when the page is initially being loaded

![](https://media.giphy.com/media/bMdZu3fG2ZEBO/giphy.gif)

----

#### How it goes :footprints:
![](https://media.giphy.com/media/8CAFRDokyQkhi/giphy.gif =300x200)
- You arrive at a page, and begin to scroll as you read content.
- At some point, you scroll a placeholder image into the viewport.
- The placeholder image is suddenly replaced by the final image.

----

example: 

![](https://i.imgur.com/azGLh8A.jpg)


----

#### Why is *loading*  not as great as  <font style="background-color:pink;color:black;font-weight:bolder"> Laaaazy-loading </font> :question: 
- It wastes data - ( On limited data plans, however, loading stuff the user never sees could effectively be a waste of their money.)
- It wastes processing time, battery, and other system resources -  ( After a media resource is downloaded, the browser must decode it and render its content in the viewport.)


----

### How to implement lazy-loading
![](https://media.giphy.com/media/3o6gaUwjWAU2EwhHqg/giphy.gif)

----


- Using native browser lazy-loading (loading attribute)
![](https://i.imgur.com/APgbtRw.png)
- Using Intersection Observer
- Using event handlers (scroll, resize)
> Make sure all ``` <img> ```tags include both width and height attributes To enable the browser to reserve sufficient space on a page for image and prevent layout shifts

---

### Review
- Choose the right image format (ideal: WebP)
- Choose the correct level of compression
- Replace animated GIFs with video for faster page loads
- Serve responsive images (srcset)
- Serve images with correct dimensions
- Use image CDNs to optimize images
- Improve performance with lazy-loading

---

### Useful resources

- [Image Optimization | Web Fundamentals](https://web.dev/fast/#optimize-your-images)
- [Responsive Images: If you’re just changing resolutions, use srcset](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/)
- [Native lazy-loading for the web](https://web.dev/native-lazy-loading/)
- [What Img Srcset Does In HTML5: A Quick & Simple Guide](https://html.com/attributes/img-srcset/)
- [Understanding Srcset in further detail](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/)

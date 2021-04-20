
# How do you design and build a webpage that looks good on any device?

---

## What CSS units should we use for dimensions? What are absolute and relative units?

---

Absolute length units are fixed and will appear the same across different sized devices.

Units include:
* px - Pixel
* pt - Point
* pc - Picas
* in - Inch
* cm - Centimeter
* mm - Millimeter
 

---

Relative length units specify a length relative to another length property.

Units include:
* em - Relative to the font-size of the element
* ex - Relative to the x-height of the current font
* % - Relative to the parent element
* ch - Relative to the width of zero
* rem - Relative to the root element
* vw - The viewport width is relative to 1% of the width viewport (browser window)
* vh - The viewport height is relative to 1% of the height viewport (browser window)
* vmin - The viewport minimum is relative to 1% of the viewport (browser window) for smaller dimension
* vmax - The viewport maximum is relative to 1% of the viewport (browser window) for larger dimension

---


* em and rem units both scale elements up and down
* rem units relate to the font size of the root element of the page (html element).
* em units relate to the font size of the element being styled.

---

* Translation of rem units to pixel value is determined by the font size of the html element.

![](https://i.imgur.com/bCSyif8.png)

![](https://i.imgur.com/wOVx1gq.png)

---

* Translation of em units to pixel values is determined by the font size of the element they’re used on.

![](https://i.imgur.com/zC6OZqA.png)


![](https://i.imgur.com/iu7mKpa.png)

---

rem units offer consistent sizing regardless of element inheritance, and give us a way to have user font size settings influence every single aspect of a site’s layout by using rem units where we used to use px units.

For this reason the primary purpose of using rem units should be to ensure that whatever default font size a user has their browser set to, the layout will adjust to accommodate the size of text within it.

---

If you do want to change the font size on the html element, do so with an em or rem value as the root font size will then still be a multiple of the user’s browser font size setting.

This will still allow you to scale your design up or down by changing your html element’s font size, but you’ll preserve the effect of user browser settings.


---

## When should you use a media query? Are they only for screen size?

---

- One of the most important parts of Responsive Design
-  Use them when you want to alter properties of the document based on the capabilities of the device being used to view it

---

- They are conditional CSS rules that trigger when the conditions are met

---

## *Mostly* used for Screen properties, but not only screen size  

---

### @media screen 

- width and height of the viewport
- width and height of the device
- orientation (landscape vs portrait mode)
- resolution

---

``` 

@media screen and (min-width: 601px) {
  div {
    font-size: 80px;
  }
}
```

```
@media screen and (max-width: 600px) {
  div {
    font-size: 30px;
  }
}
```
---

--- 

### @media print

- Matches printers/devices intended to reproduce a printed display, e.g. web browser showing a document in "Print Preview"
- Can switch off elements that aren't relevant to the printed format

---

    
    @media print {
            aside#sidebar,header[role="banner"],footer,#comments,#respond {
            display: none;
            }
        * {
            color: #000;    
            background-color: #fff;
            @include box-shadow(none);
            @include text-shadow(none);
        }
    }

---

### @media speech
Matches screenreaders and other devices that read out the content of a page.

E.g. the difference between pronouncing a code as '7,380' vs '7-3-8-0'

However, use with caution: not everyone wants their screen reader manipulated by a specific site's CSS. 

--- 

### ```@media all``` , or just ```@media``` will default to all

---

Flexbox, Grid Layout, along with Multi-column layout are responsive by default, and so don't need media queries

---

You can also use media queries for *conditional loading*

--- 

Conditional loading is a powerful tool that lets you prioritise loading core content & performance, while still letting you give a full-featured experience if the user's viewport/enviroment can handle it. 

--- 

## How can mobile-first CSS make responsive styling easier? 

---

### What is it?

A mobile-first approach to styling means that the CSS for mobiles is above the code for larger screens. Advanced styles and other overrides for larger screens are then added into the stylesheet via media queries.
This approach will often use min-width media queries to target the small screens first, and laptops etc with max-width.

---

### Why is mobile-first a good idea?

---

Mobile use is growing fast: in 2019, it made up 53% of worldwide traffic.

---

It encourages developers to consider the experiences of different device users: laptops, tablets and mobiles vary in internet speed, screen space and processing power and design should take all these into account.

---

If your page doesn't work well on mobile, users may leave it and not come back. 

--- 

To write your desktop CSS first: float this, position that – means undoing all of that later in the stylesheet when you come to consider mobile screens, so you end up writing more code. 

---

Mobiles need more help in terms of connection speed, so it makes sense to make their styling easier for them to reach. 

---

## Mobile 1st from devepment point of view

---
### (Progressive advancement)

---

### Mobile 1st = Content 1st

---

Content is the reason why developers create websites and that's what users are looking for. Progressive enhancement organically allows web project to be content-focused.

---

It is easier to start with small space and insert all information in a condensed format and later add more features to the page as the screen area becomes bigger. 

---

Simplifies your information down into a much more managable chunk

---

Easier to navigate through all features and structure the page form the beggining

---

A programmer does not need to compromise on user experience features and giv up beautiful design ideas during the process. 

---

Avoids risk for mobile or small screen version of the page to look incomplete or watered down.

---

Web designers will naturally include all key points of a product in all version of the webpage.

---

Developing with progressive enhancement is actually quite simple once you understand the concept and begin putting it into practice.

---

Helps to save webpage design time and improves the overall productivity of a project.

---

## ANY QUESTIONS?

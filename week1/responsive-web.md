
---
# How do you design and build a webpage that looks good on any device?

---

## What CSS units should we use for dimensions? What are absolute and relative units?

em and rem units both scale elements up and down (e.g. are not fixed) and allow elements to be resized easily during development.
rem units relate to the font size of the root element of the page (html element).
em units relate to the font size of the element being styled.


* Translation of rem units to pixel value is determined by the font size of the html element. This font size is influenced by inheritance from the browser font size setting unless explicitly overridden with a unit not subject to inheritance.


* Translation of em units to pixel values is determined by the font size of the element they’re used on. This font size is influenced by inheritance from parent elements unless explicitly overridden with a unit not subject to inheritance.

---

The greatest power that rem units offer is not just that they give consistent sizing regardless of element inheritance. Rather, it’s that they give us a way to have user font size settings influence every single aspect of a site’s layout by using rem units where we used to use px units.

For this reason the primary purpose of using rem units should be to ensure that whatever default font size a user has their browser set to, the layout will adjust to accommodate the size of text within it.

---

If you do want to change the font size on the html element, do so with an em or rem value as the root font size will then still be a multiple of the user’s browser font size setting.

This will still allow you to scale your design up or down by changing your html element’s font size, but you’ll preserve the effect of user browser settings.

---

The absolute length units are fixed and will appear the same across different sized devices.

Units include:
* px - Pixel
* pt - Point
* pc - Picas
* in - Inch
* cm - Centimeter
* mm - Millimeter

Absolute length units are not recommended for use on screen, because screen sizes vary so much. However, they can be used if the output medium is known, such as for print layout.

Relative length units specify a length relative to another length property.

---

## When should you use a media query? Are they only for screen size?
---
- CSS Media Queries are one of the most important parts of Responsive Design
---
- They are conditional css rules that trigger when the conditions are met

---

 @media screen {
}

- Mostly used for Screen properties, but also: 
- - printer
- e.g. switching off elements that aren't relevant to the printed format. 

    ``` @media print {
        aside#sidebar,header[role="banner"],footer,#comments,#respond {
            display: none;
        }
    }  
    ```


- 
- 
- - speech
- - blank, will apply to all 

- Flexbox and Grid Layout, along with Multi-column layout are responsive by default, and. so don't need media queries. These specifications were written in a world where responsive design and supporting multiple devices was already a thing. 

- you can use media queries for conditional loading. Conditional loading is a powerful tool that lets you prioritise loading core content & performance, while still letting you give a full-featured experience if the user's viewport/enviroment can handle it. 
-[Brad Frost](https://bradfrost.com/blog/post/7-habits-of-highly-effective-media-queries/) has a good explanation: 

> 'Web pages consist of The Thing and a bunch of other stuff that aren’t The Thing. If your friend shares a link on your wall that said “check out these pictures of cute kittens!” and you eagerly click the link, what do you expect to find? ...the cute kittens are The Thing.'
> 
> But there might be other stuff on the page that aren’t The Thing. Maybe there’s a feature to comment on the pictures of cute kittens. Maybe some social widgets... While these features add value to the page, they aren’t The Thing. What we want to do is prioritize the primary conten while still providing access to this supplemental content and functionality.

>What we can do is chunk out those things that aren’t The Thing into their own HTML chunks..., then only pull in that secondary content when the conditions are right.

--- 

## How can mobile-first CSS make responsive styling easier? 
What is it?
A mobile-first approach to styling means that the CSS for mobiles is above the code for larger screens. Advanced styles and other overrides for larger screens are then added into the stylesheet via media queries.
This approach will often use min-width media queries to target the small screens first, and laptops etc with max-width.

---

Why is mobile-first a good idea?
Mobile use is growing fast: in 2019, it made up 53% of worldwide traffic.
It encourages developers to consider the experiences of different device users: laptops, tablets and mobiles vary in internet speed, screen space and processing power and design should take all these into account.
If your page doesn't work well on mobile, users may leave it and not come back. 

--- 

To write your desktop CSS first: float this, position that – means undoing all of that later in the stylesheet when you come to consider mobile screens, so you end up writing more code. 

---

Mobiles need more help in terms of connection speed, so it makes sense to make their styling easier for them to reach. 

---
It is easier to start with small space and place all information in condensed format and later add more features to the page as the screen area becomes bigger. (Progressive advancement)
---

Simplifies your information down into a much more managable chunk
---

Easier to navigate through all features and structure the page form the beggining
---

Programmer does not need to compromise on user experience features and beautiful design ideas during the process. 
---

Avoids risk for mobile or small screen version of the page to look incomplete or watered down.
---

Web designers will naturally include all key points of a product in all version of the webpage.
---

Helps to save webpage desing time and improves overall productivity of a project.
---






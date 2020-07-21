
# Degbugging HTML and CSS

---

## Questions Asked

How can we see and edit what elements and styles are rendered to the page?

How can we easily test how responsive our page is?

How can we debug CSS grid and flexbox layouts?

---

### How can we see and edit what elements and styles are rendered to the page?

----

Element panel is a feature in the chrome developer tools that allows you to inspect and modify a site from the front-end. It’s used to change the appearance and content of a web page by editing its CSS and HTML files.

----

#### Inspecting a Page :female-detective: :male-detective: 

Inspecting a page allows the user access to elements and styles within. In turn it allows a user to debug, layout test, temporary edit and CSS live edit them within the inspector.


----

* Use Dev Tools within Firefox and Chrome to inspect a page.


For this example I'll be using Chrome. :star2: 

![](https://developers.google.com/web/tools/chrome-devtools/images/inspect.png/ =600x)

----

There are many ways to select an element: :heavy_check_mark: 

In your viewport, right-click the element and select Inspect.
In DevTools, click Select an element Select an
element or press Command+Shift+C (Mac) or Control+Shift+C (Windows, Linux), and then click the element in the viewport.
In DevTools, click the element in the DOM Tree.
In DevTools, run a query like`document.querySelector('p')` in the Console, right-click the result, and then select Reveal in Elements panel.

----

#### DOM Tree

Dev tools will show the DOM tree within elements panel.

![](https://developers.google.com/web/tools/chrome-devtools/dom/imgs/hide1.png)

![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/1200px-DOM-model.svg.png)


----

#### Selecting an Element
To select an element click on a tag within the element tab in the inspector. Or use the tool within dev tool of a box and a cursor within, now you are able select any part of the website to have access to that element node within the DOM tree.

![](https://media.giphy.com/media/VeTN2VvJ7fCpGEezMg/giphy.gif)


----

#### This is where the fun starts

You can now modify the site's CSS, add, delete and hide elements.

Remember, don’t be afraid to experiment with it as it only affects your browser and not the website itself.

![](https://media.giphy.com/media/KfU1u2x7jUPUjYo3if/giphy.gif =400x)

----

#### Demonstration

---

### How can we easily test how *responsive* our page is?

----

#### Developer Tool (Dev Tool)

![](https://developers.google.com/web/tools/chrome-devtools/images/inspect.png/ =600x)


----

#### Demonstration


----

1. The Device Toolbar

    Drag the handles to resize the viewport to whatever dimensions you need.
    
![](https://i.imgur.com/rcJg4sQ.png =500x)


----


2. Show media queries


    Click More options and then select Show media queries.

![](https://i.imgur.com/ufodRb4.png =600x)


----

3. The Device list

    Select the device from the Device list.

![](https://i.imgur.com/Y3YRI8I.png =600x)


----

Rotate the viewport to landscape orientation

![](https://i.imgur.com/5X6yBkn.png =600x)


----

### But...
* There are some aspects of mobile devices that DevTools will never be able to simulate.
* The architecture of mobile CPUs is very different than the architecture of laptop or desktop CPUs.
* When in doubt, your best bet is to actually run your page on a mobile device.

---

### How can we debug CSS grid and flexbox layout?

----

#### GRID or not to GRID?

![](https://media.tenor.com/images/eab9e43faa99103f2d77497e64cb27da/tenor.gif)

- Grid is two-dimensional. The two dimensions are rows and columns, and with grid layout you can control both at once. 

- With flexbox, you choose whether to lay the items out as a row or a column, one or the other and not both.


- With CSS-GRID we can have items span rows too, in exactly the same way as we span columns. Something that has been very difficult to do before now.

- Do not replace CSS-GRID with FlexBox there are reasons for both: _[Flexbox vs. CSS Grid - Which is Better?](https://www.youtube.com/watch?v=hs3piaN4b5I)_

----


### Debugging CSS Grid with Firefox Dev Tools

----

#### Jen Simmons

CSS layout expert.
![Jen Simmons](https://aycl.uie.com/images/made/images/uploads/head_shots/JenSimmons_340_340_s_c1_center.png)

----

#### The Grid Inspector

  In September 2016 Jen together with members of Firefox DevTools team created "GRID INSPECTOR". 

![Firefox team](https://64.media.tumblr.com/2ef1fb9fedb9bb1339ec5c6e8ffbf0a1/tumblr_nesixiUjnR1tds2vfo1_400.gif)


----

 ![CSS Grid Inspector](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/0ba92694-fce0-4a57-a4a6-7912f78b1cec/guide-firefox-new-css-tools-grid-inspector.png)

 The Grid Inspector is built in Firefox DevTools and it helps to inspect CSS-GRID related bugs.

 The purpose of the tool was to popularize the CSS-GRID as well as to help developers to learn it.

----

 When an HTML element on your page has display: grid applied to it, a number of features are made available in the DevTools to provide easy access to grid features.

----

 #### In the HTML pane
 In the HTML Pane, elements laid out using a grid have a "grid" marker beside them.In the HTML Pane, elements laid out using a grid have a "grid" marker beside them.

----

 #### In the CSS pane

In the CSS pane's Rules view, any instance of a display: grid declaration gets a grid icon included within it: .

----

 The core of the tool is a grid outline, overlaid on the page, which helps devs visualize how the grid is positioning their elements, and how the layout changes when they tweak their styles. 

----

#### Grid layout options

![Grid layout options](https://media.prod.mdn.mozit.cloud/attachments/2018/05/21/15980/04d1986abb6d58d4380fdf40abeff281/grid-options.png)

 **1. Overlay grid**
    how you all the elements on the page with display: grid applied
**2. Grid display settings**
**3. Min grid view**

----

#### CHROME Tools for CSS-GRID

 - **CSS-GRID highlighting**

![](https://developers.google.com/web/updates/images/2017/08/css-grid-highlighting.png)

   - _**[Grid-Highlighter](https://github.com/ademilter/chrome-css-grid-highlighter)**_

- _**Gridman - CSS Grid inspector**_

----

#### Watch Jen Simmons video about mistakes related to CSS Grid!

![](https://www.incimages.com/uploaded_files/image/1920x1080/getty_479217596_356744.jpg)

 **_[9 Biggest CSS-GRID mistakes](https://www.youtube.com/watch?v=0Gr1XSyxZy0)_**

---

### References

#### CSS-Grid related articles

  - _[CSS Grid Inspector: Examine grid layouts](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts)_

  - _[Debugging CSS Grid Layouts With Firefox Grid Inspector](https://www.smashingmagazine.com/2017/12/grid-inspector/)_

  - _[CSS Grid Inspector in Firefox Nightly](https://hacks.mozilla.org/2017/06/new-css-grid-layout-panel-in-firefox-nightly/)_

  - _[How to use Firefox Grid Inspector](https://www.joomlashack.com/blog/joomla-news/css-grid-additional-concepts/)_

  - _[Experimental layout LAB by Jen Simmons](https://labs.jensimmons.com/)_

- _[FlexBox Inspector](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Examine_Flexbox_layouts)_

----

  # Thank you very much!

  ![](https://media2.giphy.com/media/26uf6o80xhd6MKGIw/giphy.gif)

  **ANY QUESTIONS?**

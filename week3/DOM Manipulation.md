# W3 Spike DOM Manipulation

How can we use advanced DOM features to make rendering complex UIs easier?
slides: https://hackmd.io/@YlSaDuR1Qm6NdIcwGXlN1Q/H1nWM_hxD#

---

## What is a NodeList?

- In the DOM, a NodeList is essentially a collection of __nodes__ similar to an array but it does not support array methods.
- A NodeList may also consist of all the nodes in a particular selected set of nodes. 

----

### How to get a NodeList?

- Many ways e.g. `querySelectorAll()` or `getElementsByTagName()`

```javascript=
var nodeList = document.querySelectorAll("p");
```
- N.B. You will not get a nodelist if you use `querySelector()`

----

- You can select nodes in a nodelist much like accessing arrays by using bracket notation.

```javascript=
b = nodeList[1];
```

- You can also check how many nodes are within a nodelist by using the length property.

```javascript=
var myNodelist = document.querySelectorAll("p");

document.getElementById("test")
.innerHTML = myNodelist.length;
```

----

### What's the difference between "live" and "static" NodeLists?

- static NodeLists provide information at the time it is run e.g. `querySelectorAll`
- live NodeLists will update when changes are made to the page e.g. `getElementsByClassName`

----

### How is it different from an HTMLCollection?

- NodeList ≈ HTMLCollection
- HTMLCollection is a collection of HTML elements, while a NodeList is a collection of element nodes
- They both have a length property to display the number of items in a collection, each of which can be accessed by their index number

----

- HTMLCollection items can also be accessed by their name and ID. That is not the case with JavaScript NodeList
- On the other hand, JavaScript list collection can contain attribute nodes as well as text nodes. That is not possible when using HTMLCollection

----

As of 2019-05-30, on Google Chrome, Safari, Firefox:

```javascript=
getElementsByTagName => HTMLCollection.
getElementsByClassName => HTMLCollection.
getElementsByName => NodeList.
querySelectorAll => NodeList.
```

----

### How is it different from an array?

- HTMLCollection and NodeList are not arrays, so they do not work with array methods like `push(), pop(), join()` or `valueOf()`. However, you can loop through them and use `forEach()`.


---

## What is the `<template>` element?

----

- A place to store html that will not be displayed on the page
- It can be called later with JavaScript
- This can be done by copying or otherwise moving it into the Document

----

`<template>` elements contain a _Document Fragment_ in their HTMLTemplateElements.content property which is one way you can display it on the page

----

### What is a DocumentFragment?

- A virtual undisplayed html element
- Used as a lightweight version of the Document.
- But not an active part of the Document tree structure.
![](https://i.imgur.com/aYzIyML.png)

----

Changes to the document fragment do not affect the document tree
![](https://i.imgur.com/fLYDFjl.jpg)


----

It an be used to add multiple elements to the document in one go by placing it in the DOM tree
![](https://i.imgur.com/LRgEuCb.jpg)

---

### How can we use these to render dynamic UI?

----

1. Create Document fragment
2. Assemble DOM subtree within it 
3. Append or insert it into the DOM

----

![](https://i.imgur.com/NOT3fEb.png)





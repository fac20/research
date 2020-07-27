# CSS architecture (Spike)

---

## How should you write CSS to ensure it's easy to read, maintain and scales as a website grows?

---

![big question](https://media.giphy.com/media/3o7buirYcmV5nSwIRW/giphy.gif)

---

### Styleguides:
 - maintainable
 - readable
 - scalable

---

 ### Simple examples:
 - indents
 - set character limit
 - multi-line css

---

`.carouselBtn{display:flex;flex-direction:column;background-color:blue;}`

---

```
.carousel-btn {
  display: flex;
  flex-direction: column;
  background-color: blue;
}
```

---

### Deeper dive:
1. naming convention
2. specificity
3. composition

---

![my part done](https://media.giphy.com/media/UtEUhkfriklonVdweC/giphy.gif)

---

### CSS naming conventions.

- Poorly written CSS is a nightmare for yourself and anyone who will read your code.

<!-- I dont think this gif fits here but its just so funny -->
![results of poorly writte css](https://media.giphy.com/media/ouoB4KWhXY4bm/giphy.gif)

---

## 1. Why are CSS naming conventions useful?
 - Ease of readability 
 - Enables reusability of code
 - Increases consistency
 - Organizes cooperation between team members

---

#### BEM (Block element modifer)
- It is a smart way of naming your CSS classes to reduce the CSS footprint, organize cooperation among programmers and maintain large CSS codebases

---

### Syntax

#### ```block__element--modifier```
- ```person__arm--red```
- ```person__arm--small-red```
- ```my-navbar__link```
- ```search-form__button```

---

##### Why BEM
- Recognisable terminology 
- Avoids inheritance - by using unique CSS classes per element (like  <span style="color: green;">```.carousel-btn__left ``` </span>instead of <span style="color: red;">```.carousel button .left ```</span> or <span style="color: red;">```#main-nav ul li ul li div```</span>)
- Less confusing

---

### Examples

---

##### HTML Practices

###### <span style="color: red;">Instead of this:</span>


```
<section class="carousel">
    <div class="buttons">
            <button class="left"></button>
            <button class="right"></button>      
    </div>
</section>

```

###### <span style="color: green;">Do this:</span>

```

<section class="carousel">
    <div class="carousel-button">
        <button class="carousel-button__left"></button>
        <button class="carousel-button__right"></button>
    </div>
</section>
```

---

#### CSS Practices

##### <span style="color: red;">Instead of this:</span>
```
section div .right {
    width: 10px;
    padding-left: 200px;
}
```
##### <span style="color: red;">Or this:</span>
```
.next{
    width: 10px;
    padding-left: 200px;
}
```

##### <span style="color: green;">Do this:</span>
```
carousel-button__next {
    width: 10px;
    padding-left: 200px;
}
```

---

![your turn](https://media.giphy.com/media/3ogwG013YQU2hVp3Z6/giphy.gif)

---

## 2. When might specificity become a problem?

---

"Specificity over inheritence is a metodoligy that gives you more flexibility, and leads to more efficiency, than connecting everything (through inheritance) to a shared origin."

---

##### But this creates various problems.
Firstliy the rules: CSS spcificity rules are a little complex and you may end up acidentaly overiding/not overiding stiles you intended to. 

```
#content table { }

.my-new-table { }
```
###### Becomes

```
#content table { }

#content .my-new-table { }
```

---

Secondly: It is easy to end up with inconsitent styles across similar elemnts if you define them all individualy.

![A very ugly webpage](https://www.rezgo.com/wp-content/uploads/2013/05/ugly-website.jpg)

---

![Mistake](https://2aih25gkk2pi65s8wfa8kzvi-wpengine.netdna-ssl.com/sat/files/2014/05/post-28514-oh-this-is-bad-gif-I-should-no-ABlL.gif)

---

Third: Too much specificity can create code bloat as rules are defined identicaly for multiple elemnts with different selectors  and varius degrees of specificity.

`.menu {...}` is over ridden by `.menu div {...}` is overridden by `.menu div h1 {...}` is over ridden by `.menu div h1 b {...}` etc.

---

"If every component in your pattern library follows its own rules for layout, inefficiencies and inconsistencies will abound."

---

#### How to solve the problem
Always try and keep specificity as low as possible.

---

To do this, as far as posible try;
- not using IDs in your CSS.
- not nesting selectors.
- not chaining selectors.
- not using `!important`

---

#### You will be calm and able to quickly respond to your predictable CSS 
![image alt](https://i.pinimg.com/originals/49/78/2b/49782b71ab4325eb4a0106bc74279d69.gif)

---

## 3. How can composition help us build UIs?

---

#### Composition

- The nature of something's ingredients or constituents; the way in which a whole or mixture is made up.

---

- The idea of using composition to build is not a new one, used often in creative fields to arrange and produce things. 

---

- However in relation to UI's, the principles of composition mainly involves using larger systems that are composed from much smaller, individual sections instead of inheriting behaviour from one main large parent object. 

---

- Composition means that we can more easily recycle and reuse functionality, as well rapidly construct larger parts of UI from a known set of composable objects.

---

- This also allows for user personalisation in the form of Adapatable User Interfaces (AUIs).

---

## How should you write CSS to ensure it's easy to read, maintain and scale as a website grows?

- Use CSS naming convetions, like BEM. `block--element-modifier`
- Don't make your code too specific.
- Implement the composition over inheritence principle.
- Look at style guides.

---

# Type of tests

---

## What is prettier?

----

Prettier is an opinionated code formatter

![the dude gif](https://media.giphy.com/media/TL6poLzwbHuF2/giphy.gif)

----

### Demo:

- Install
- Configure
- Use

---

## What is Static Analysis?

![](https://media.giphy.com/media/3oFyCZm9jPjlzsAwXS/giphy.gif)

----

Static analysis is a method of debugging by automatically examining source code before a program is run.

----

Static analysis is performed early in development, before software testing.

----          

* Early feedback
* Save time

![](https://media.giphy.com/media/M9TxNhSp0WUW8rUH9F/giphy.gif)

----

### You can do this with a linter!

----

## What is a linter?

lint, or a linter, is a tool that analyzes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs

![](https://media.giphy.com/media/nGVXIMzlyHmMw/giphy.gif)

----

## How a linter can help us avoid bugs

A linter provides many different types of checks:

----

* Syntax Errors
* Code Standards Adherence
* Potential Problems
* Security Checks

![](https://media.giphy.com/media/11fot0YzpQMA0g/giphy.gif)

----

You can also create your own custom rules!

----

## Advantages of linting

* Fewer errors in production
* Readable, maintainable and more consistent code
* Fewer discussions about code style and aesthetic choices during code reviews
* Objective measurement of code quality
* More secure and performant code

----

![](https://i.imgur.com/louhqOF.png)

----

![](https://i.imgur.com/OAtbY58.png)

----

### ESLint is a popular linting tool for Javascript

![](https://media.giphy.com/media/26tPghhb310muUkEw/giphy.gif)

----

![](https://i.imgur.com/fd5D1f3.png)


---

## What are the pros and cons of unit, integration and end-to-end tests?

----

### What is the difference between the types?

CAKE EDITION
![](https://media2.giphy.com/media/l3vRhl6k5tb3oPGLK/200w.webp?cid=ecf05e47498b4xdgown2fy01uxn2qkm0og6m3wybfqmiokwy&rid=200w.webp)

----

## Static 
### Errors as you type 
The ingredients 
* flour, eggs, sugar, butter, berries, whipping cream 
* the list can go on!
![](https://media1.giphy.com/media/SFM2X7D8RMdVfeZHj1/200w.webp?cid=ecf05e477vnu9njgvi8zeqx47wvk2audbv8je2mr4g0oyklm&rid=200w.webp)

----

## Unit
### Individual modules in isolation
* Butter and sugar are creamed well
* Meringue is well whipped
* Jam has set 

![](https://media3.giphy.com/media/3oEjHJFAlG55rCgMoM/200w.webp?cid=ecf05e472scmrqhyq8uxn1u1t1e6220s4p3o9sklxa0d75i3&rid=200w.webp)


----


## Integration
### Checking different modules work fine when combined

* Making sure the flavours work together
* Making sure the sponge isnt too heavy so it doesnt squash the filling 
* Making sure you have an oven big enough and hot enough to cook your cake

![](https://media1.giphy.com/media/l3vR8m4VKUIGnsNos/200w.webp?cid=ecf05e47mz90d9wxsjm9xzd1ox65ffcuvx03u1tyhib7yr54&rid=200w.webp)
 

----

## End-to-End 
###  Test whether the flow of an application right from start to finish is behaving as expected

Your finished cake looks and tastes great!
![](https://media3.giphy.com/media/l3fQiu5GS38shV4Yw/200w.webp?cid=ecf05e470fzzybbaaxmie0rzjj2v0xunz5opzyp7j7jmuxr4&rid=200w.webp)

But it doesn't guarentee that everyone will enjoy the cake! 
![](https://media.giphy.com/media/67SXeoc8RLwvqCwn2F/giphy-downsized.gif)

----

### Money, Time, Confidence

The less code the engineer writes, the less time they use, the less number of faults there could be to solve, the less it will cost?

 ![](https://i.imgur.com/e0o1xRq.png)

----

### Which Testing Types to use in a Project/When to use the different types?

![](https://codeahoy.com/img/blogs/test_pyramid.png)

Google often suggests a 70/20/10 split: 70% unit tests, 20% integration tests, and 10% end-to-end tests

----

### Summary


-  Finding bugs in unit testing saves time and reduces overall project costs 
-  Unit tests are easier for others to debug
-  But! they're not enough on their own
-  Integration testing lets you test bugs you didn't/couldn't anticipate on a unit level
-  However it's time consuming- - you have to wait until other modules are done before you can start testing  
-  Can't pinpoint exact source of failure in End to End 


----

### Summary Table 

![](https://i.imgur.com/ggcnMs6.png)

![](https://media.giphy.com/media/26ybwLmVX24V0R572/giphy.gif)

----

## Questions?! 
![](https://media1.giphy.com/media/26hisIEUqTHTZSpWg/200w.webp?cid=ecf05e47498b4xdgown2fy01uxn2qkm0og6m3wybfqmiokwy&rid=200w.webp)

---


| Test Type   | Cost                                          | Time                                                        |
|:----------- |:--------------------------------------------- |:----------------------------------------------------------- |
| Static      | Cheaper as engineers write less code for this | Short lines of code to write, and fix                       |
| Unit        | Slightly more code than Static                | More code to type, and analysis fixes                       |
| Integration | More code required than Unit                  | Even more code to type, and harder to find where its broken |
| End to End  | SO MUCH CODE to replicate a user/user stories | Trying to fix any errors in this? Set up camp :tent:        |

----


| Testing Types | Use for                                                         | Cost                                                                         | Speed      | Confidence                            |
| ------------- |:--------------------------------------------------------------- |:---------------------------------------------------------------------------- | ---------- |:------------------------------------- |
| Static        | Catchng Typos, Type errors                                      | :heavy_dollar_sign:                                                          | :rocket:   | Confidence to move to Unit testing    |
| Unit          | Verifying isolated parts works                                  | :heavy_dollar_sign::heavy_dollar_sign:                                       | :airplane: | Confidence to move to Integration      |
| Integration   | Verify several parts work together                              | :heavy_dollar_sign::heavy_dollar_sign::heavy_dollar_sign:                    | :car:      | Confidence to move to End to End      |
| End to End    | Test the entire site (front and back end). Simulation of a user | :heavy_dollar_sign::heavy_dollar_sign::heavy_dollar_sign::heavy_dollar_sign: | :turtle:   | Business Confidence :heavy_plus_sign: |

---- 

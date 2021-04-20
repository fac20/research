---
title: Talk slides template
tags: Templates, Talk
description: View the slide with "Slide Mode".
---


# Testing methodologies

slide: https://hackmd.io/@akshayasatheesh/B1k_Zu3xD#/

---

### TDD (Test Driven Development)

<br>

![](https://media.giphy.com/media/8fyn3ZRrAtuAo/giphy.gif =600x)

----


<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.acnMuXX_oPBB5f8EcWwa-gHaHa%26pid%3DApi&f=1" width="100" alt="egg" />


What is TDD?

##### * TDD is used for improved test coverage, which leads to 40%-80% fewer bugs in production. :bug: 
 
##### * TDD has a learning curve, and while you’re climbing that learning curve, it can and frequently does add 15% — 35% to implementation times. :chart_with_upwards_trend: 

##### * TDD in the long run decreases coding time. :timer_clock: 

----

TDD indicates to anyone in the future working on the code if any changes are made that create a bug will be indicated by a test failing.

![](https://media.giphy.com/media/HxqB34YilH8d2/giphy.gif =500x)

----

![](https://i.imgur.com/Vm3RZlm.png)


----

![](https://i.imgur.com/blmKqFk.jpg =300x)


----

This first rule is the most important one and it is the rule that makes TDD different from regular testing:

You write a test so that you can then write production code.
You don’t write a test to test your code.

----

* Write test for code that dosen't exist yet into their simplest form
* The first time the test is run it will fail
* Write the minimal amount of code to pass the test.
* Refractor to a good standard 

----

![](https://i.imgur.com/7eRFUpQ.png =650x)
![](https://i.imgur.com/sM2Uuqn.png =650x)

---

### <span style="color:orange">BDD (Behavior Driven Development)</span>

![](https://media.giphy.com/media/LQv5qSTo8lXVvPammo/giphy.gif)

----

#### <span style="color:orange">BDD uses human-readable descriptions of software user requirements as the basis for software tests</span>

----

### <span style="color:orange">BDD Principles </span>

* Shared vocabulary
* User Stories
* Collaboration

----

![BDD Explained](https://www.departmentofproduct.com/wp-content/uploads/2017/06/Lesson-2-testing-and-devops.001.jpeg)

----

### <span style="color:orange">Given-When-Then</span>

1. **Given** the User has not entered any data on the form
2. **When** they click the submit button
3. **Then** proper validation messages should be show.

----

### <span style="color:orange">Role-Feature-Reason matrix</span>

1. **As a** retail customer
2. **I want** to return an electronically purchase merchandise within 14 days
3. **So that** the refund will be processed

----


![](https://miro.medium.com/max/1500/1*s0tuwgs7O9YEHS6pvO0OJA.png)


----

![](https://i.imgur.com/Hz3xfew.png)

----

<!-- 
## How do we translate user requirements into automated tests :question: 

---- -->
<!-- AKSHAYA -->

#### <span style="color:orange">BDD requires different testing needs that are accomplished by three main layers:</span>

* ##### Unit tests
* ##### Functional tests
* ##### Integration tests

----

## <span style="color:orange">Unit testing</span>

> _The testing of individual units of code (such as functions or modules) in **<font color="#FF7373">isolation</font>** from the rest of the application._

<br>

----

NASA had better know whether or not a heat shield will work before they launch the rocket into space! :rocket: 

![](https://media.giphy.com/media/KY3VnTOONvgxllVac0/giphy.gif =400x)

----

## <span style="color:orange">Functional Tests</span>

> _Functional tests are written from the **user’s** perspective and focus on **system behavior** that users are interested in._


- By simulating user interactions with the interface and comparing the actual output to the expected output.

----


## <font color= orange>Unit Tests vs Functional Tests</font>
> Functional tests help us build the right product. (<font color="#0C9BF4">**Validation**</font>)

<br>

> Unit tests help us build the product right. (<font color="#0C9BF4">**Verification**</font>)

_**You need both**._

<!-- ----

| Unit Tests | Functional Tests |
| ---------------------- | -------- |
| Runs very fast| Take longer to run|
| Must be modular| Ensure that the units work together as a whole system| -->

----

> _I like the classification of “unit tests” for developer-perspective code units, and “functional tests” for user-perspective UI tests._ :iphone: 

----

### <span style="color:orange">BDD tools</span>

- [Cucumber](https://cucumber.io/)

- [SpecFlow](https://specflow.org/)

- [TestComplete](https://smartbear.com/product/testcomplete/overview/)

---

## Test Coverage

A metric, given as a percentage that describes the amount of source code that has been executed in the tests. 

---

* Has each function been called?
* Has every statement been executed?
* Has each branch of each _control structure_ been executed?
* Has each Boolean sub-expression been evaluated to both true and false?

---

A high test coverage !== good testing.

> Good testing requires creativity. Every time you make something idiot-proof, the universe makes a better idiot.

---

![](https://i.imgur.com/hs7TQxO.png)

---

* Test coverage should be used to find untested code.
* Can you test too much?


---

### Wrap up

<br>

##### BDD :smile: 

###### * Involves testing each and every scenario to meet the product's business purpose/client needs. 

<br>

##### TDD :pencil:

###### * Ensures quality and reliability of the application. 

<br>

##### Test Coverage :battery: 

###### * Measures the amount of testing performed by a set of test.


---

### Thank you! 

![](https://media.giphy.com/media/xT1XGVBim9uITGLIt2/giphy.gif)



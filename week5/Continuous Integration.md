## What is Continuous Integration? :computer: 

---

In it's most basic form CI is the automatic continuious testing of your code 

---

![](https://media.giphy.com/media/IedrijvVSFIASnhmuX/giphy.gif)

---

- Continuous Integration (CI) is the process of automating the build and testing of code every time a team member commits changes to version control. 

- CI encourages developers to share their code and unit tests by merging their changes into a shared version control repository after every small task completion.

---

![](https://camo.githubusercontent.com/f8d81cb60ee4c65a00a92056c3ec97008a8cb547/68747470733a2f2f692e696d6775722e636f6d2f3849455a4632442e706e67)

---

By integrating regularly, you can detect errors quickly, and locate them more easily.

---

## What is a Continuous Integration Server?

![](https://media.giphy.com/media/xTiTnEHBh7qapyuvwQ/giphy.gif)

---

A pipeline is a set of steps happening after a specific action.
Once the developer changes some line of code, makes a commit and pushes to a repository the pipeline springs into action.

---

The pipeline builds code, runs tests (CI), and safely deploys a new version of the application.

Automated pipelines remove manual errors, provide standardised feedback loops to developers, and enable fast product iterations.

---

A CI service is a tool that runs your pipeline. You can install it on a server or rent from an external provider (as a service)

---

Typical CI/CD pipeline stages:

![](https://i.imgur.com/TTjl4o3.png)


---

There are many CI services, some free, some paid

![](https://media.giphy.com/media/ESt8At0PXpmj6/giphy.gif =300x300)

---

* Jenkins
* Bamboo
* GitLab CI
* plus many, MANY more!!

---

Most CI services are equipped with some sort of CD (continuous delivery).

Continuous delivery means releasing the software as soon as tests are passing.

![](https://media.giphy.com/media/hpEfWyx4W2dGU4kPbz/giphy.gif)

---

### how does a CI/CD service work in practice? 

Most of the time you should configure the service with a configuration file. 

**Github actions** is a Github feature which includes a CI/CD service.

---

## Walkthrough - Github actions 

---

## Why might we want to run our tests whenever we push code to our repo?

---

- Testing code is crucial and although we've mainly focused on testing code before commiting it, how do we enforce tests when the code leaves our computers?

![alt text](https://media.giphy.com/media/yAAJyaWeuRgAg/giphy.gif) 

---

-  That's where CI comes into use.

Running tests after it leaves your computer can:

- Catch bugs before a product is shipped.
- Test your code,software or UI at every step. 
- Reduces the amount of code a developer needs to debug.
- Committing code more often detects errors sooner.

---

- You can implememt automated testing (ability to run tests without human intervention) with the help of a continous integration service.
- CI and automated testing come hand in hand, the aim is for tests to run on their own once you commit.
![](https://media.giphy.com/media/WQNjuJkYjeR1BcTHcE/giphy.gif)

---


## Any questions??

![](https://media.giphy.com/media/UtDutQmV9QgiLH4zSO/giphy.gif)


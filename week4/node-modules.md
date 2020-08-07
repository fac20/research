

# Node Modules

<!-- Put the link to this slide here so people can follow -->
<!-- slide: https://hackmd.io/@akshayasatheesh/HJQIQirZw#/
 -->

---

### Our own vs built-in vs 3rd party

![](https://media.giphy.com/media/kd3mNjKLrzSPTuAFb6/giphy.gif)

----

#### Built-in

- ##### Like Web APIs in the browser, Node.js ships with a collection of built-in JavaScript packages called as a Node Standard Library. :truck: 
- ##### We do not have to install them using NPM. :no_entry_sign: 

> ##### Node.js comes with fs package which contains readFile function among many. 

<br>

> ##### This function reads the file on the disk of the machine and returns file content back.

----

#### 3rd Party

- ##### Modules in Node.js are a way of <span style="color:red">encapsulating code </span> in a separate logical unit.

- ##### There are many ready-made modules available in the NPM which can be used within Node js :shopping_bags: 

##### [Express](https://expressjs.com/)
##### [MongoDB](https://www.mongodb.com/)
##### [Socket.io](https://socket.io/) 
##### [Bluebird](http://bluebirdjs.com/docs/getting-started.html)

----

#### Creating NPM modules

- ##### Can create custom modules, extend these modules, and also publish these modules.

1. ##### Create module :cooking: 
2. ##### Test module w/ REPL :female-student: 
3. ##### Save local module as a dependency :open_file_folder: 
4. ##### Link local module :grey_question: :question:

----

- ##### If your module is only going to be used by one program, it can stay within the same project and be referenced by a relative path. 

- ##### If your local module is in heavy development, continually updating packages can be tedious. An alternative would be to link the modules. 

- ##### Linking a module ensures that any updates to the module are immediately reflected in the applications using it.

---

#### What is the _package.json_ file for?

- kind of a manifest for your project (i.e. holds <span style="color:purple">_metadata_</span> about it)

- lists the packages your project depends on

- specifies versions of a package that your project can use using semantic versioning rules (https://docs.npmjs.com/about-semantic-versioning)

- makes your build reproducible, and therefore easier to share with other developers


<!-- - can do lots of things: central repository of configuration for tools, for example. 
- where npm stores the names and versions of the package it installed which is the necessary information to understand how the project should be handled along with its dependencies! 
 -->

---

### package.json properties 

#### name and version

A package.json file must contain **"name"** and **"version"** fields.

The "name" field contains your package’s name, and must be lowercase and one word, and may contain hyphens and underscores.

The "version" field must be in the form x.x.x and follow the semantic versioning guidelines and it indicates the current version. 

---

* **description** is a brief description of the app/package

* **main** set the entry point for the application

* **private** if set to true prevents the app/package to be accidentally published on npm

* **scripts** defines a set of node scripts you can run

* **dependencies** sets a list of npm packages installed as dependencies

* **devDependencies** sets a list of npm packages installed as development dependencies

---

#### dependecies and devDependencies

devDependencies are modules which are only required during development (meant to be installed only on a development machine)

while dependencies are modules which are also required at runtime.

---

* **engines** sets which versions of Node this package/app works on

* **browserslist** is used to tell which browsers (and their versions) you want to support

---

### What is npm?
npm is the package manager for the Node JavaScript platform.
> Like an app store for node packages? :department_store: :shopping_trolley: 

It puts modules in place so that node can find them. 

Most commonly, it is used to publish, discover, install, and develop node programs.

----

### Using npm 
<font color= red>``` npm install ```</font> lets you install stuff
<font color= red>``` npm search  ```</font>shows everything that's available
<font color= red>``` npm ls ```</font>shows everything you have installed

[Other commands](https://docs.npmjs.com/cli-documentation/cli)
 ![](https://media.giphy.com/media/3oxHQCoIwppvOPRKYU/giphy.gif)

----

### npm scripts
npm scripts are used to essentially save code as variables.

 ![](https://media.giphy.com/media/l0HlVTNKhKnt52olG/giphy.gif)

----

example:

![](https://i.imgur.com/ypNBYvB.png)

<font color= red>``` npm run lint ```</font> will open a shell and run <font color=green>``` jshint **.js ```</font>

----

### Why are npm scripts useful?
- Used to automate tasks during build

Example usecases: 
- Minification/Uglification of CSS/JavaScript
- Automating the build process
- Linting your code
- Compressing images
- Automatically injecting changes with BrowserSync

---

### What does npx do?

lets you run code built with Node and published through the npm registry 

It allows you to:

----

- run a command inside node_modules without needing to know the path
`./node_modules/.bin/cowsay`

  `npx cowsay`
  
----

- run commands without installing them (ex no need to install cowsay command globally)

(useful to run different versions of the same command)
`npx node@6 -v #v6.14.3`
`npx node@8 -v #v8.11.3`

----

- run arbitrary code snippets directly from a URL 
```
npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32`
``` 

---

### Wrap up

* ###### A module in Node.js is a logical encapsulation of code in a single unit. Separation into modules makes code more manageable and maintainable for future purposes
* ###### There are many modules available in the market which can be used within Node.js such as express, underscore, MongoDB, etc.
* ###### The NPM is used to download and install modules which can then be used in a Node.js application.
* ###### One can create custom NPM modules, extend these modules, and also publish these modules.
* ###### The Node package manager has a complete set of commands to manage the npm modules on the local system such as the installation, un-installation, searching, etc.
* ###### The package.json file is used to hold the entire metadata information for an npm module.

---

Useful links:

- ##### Create your own Nodejs module:
 ##### [Tutorial 1](https://www.digitalocean.com/community/tutorials/how-to-create-a-node-js-module)
 ##### [Tutorial 2](https://codeburst.io/how-to-create-and-publish-your-first-node-js-module-444e7585b738)
- ##### [Beginners Guide to Nodejs](https://medium.com/jspoint/introduction-to-node-js-a-beginners-guide-to-node-js-and-npm-eca9c408f9fe)
- ##### [Module loading strategy - Using npm link](https://medium.com/@alexishevia/the-magic-behind-npm-link-d94dcb3a81af)
---

### Thank you! :turtle:	

![](https://media.giphy.com/media/1qB3EwE3c54A/giphy.gif)

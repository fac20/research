# Deployment

---

## How can we deploy our Node server to a cloud provider like Heroku?

---

## What is Heroku?

----

![drax why](https://media.giphy.com/media/vkbfsVHULOyR2/giphy.gif)

----

- Deploy and run **applications** 

----

- Static website with limited functionality

- GitHub pages only hosts static HTML pages

----

- Node.js builds **applications**

- Applications have **more functionality** but **need a server**

- We control what to display to user

----


AWS or Azure are **infrastructure as a service (IaaS)**

![IaaS](https://www.redhat.com/cms/managed-files/iaas_focus-paas-saas-diagram-1200x1046.png#)

----

Heroku is a **platform as a service (PaaS)**

![PaaS](https://www.redhat.com/cms/managed-files/iaas-paas-saas-diagram3-1638x1046.png)

---

# How do you deploy on Heroku? 
### A quick two step run-down!

----

- After running npm init, in the package.json, include some details for Heroku

![](https://i.imgur.com/OAJUxWD.png)

----

- Connect your app to Heroku, and Heroku to Github!
![](https://i.imgur.com/JHKZ8V4.png)

----

![](https://i.imgur.com/m2f9Sfd.png)

---

# What are Environmental Variables ?

----

Environmental variable:

A variable whose value is set outside of a program, usually it's functionality is built into the operating service or a microservice. An environmental variable  is made up of a name/value pair, and any number may be created and it's available for reference.

----

## Use cases for environment variables include but are not limited to data such as:

- Execution mode (e.g., production, development, staging, etc.)
- Domain names
- API URL/URI’s
- Public and private authentication keys (only secure in server applications)
- Group mail addresses, such as those for marketing, support, sales, etc.
- Service account names

----

During application initialization these variables are stored in the `process.env` file and are accessed by suffixing the name of the environment:

----

## Meteorite dataset from Nasa Open Data Portal 

```javascript=
REACT_APP_METEORITE_LANDING_HOMEPAGE="https://data.nasa.gov/Space-Science/Meteorite-Landings/gh4g-9sfh"
REACT_APP_METEORITE_STRIKE_DATASET="https://data.nasa.gov/resource/y77d-th95.json" 
```

----

``` javascript=
const PORT = 3000;
```
``` javascript=
const PORT = process.env.PORT || 3000;
```
```javascript=
PORT=9999 node server.js
```
- You could also make the PORT variable an EV and use 3000 as a fallback if the PORT value is unavailable.
- The message should now say Server is listening on port 9999 since the PORT variable has been temporarily set for this execution by the PORT=9999 in front of node.


----

``` javascript=
fetch(process.env.REACT_APP_METEORITE_STRIKE_DATASET)
.then((response) => {
  return response.json();
})
.then((strikesJSON) => {
  this.setState({ meteoriteStrikes: strikesJSON });
  this.setState({ isDataLoaded: true});
});
```

----

At runtime, the reference to the environment variable name is replaced with its current value. In this case, process.env.REACT_APP_METEORITE_STRIKE_DATASET is replaced by its value, "https://data.nasa.gov/resource/y77d-th95.json".

----

The primary use for environment variables is to limit the need to modify and re-release an application due to changes in configuration data. From the example above, when REACT_APP_METEORITE_STRIKE_DATASET's URL changes there’s no need for source code alterations, testing, and deployment of the modified application.

----

- Modifying and releasing application code is relatively complicated and increases the risk of introducing undesirable side effects into production.
- When the URL is defined by an environment variable instead, the change process consists of:
- checking the validity of the new URL
- updating the corresponding environment variable 
- updating a configuration file
- and testing affected application function(s) to ensure the application still works as expected.
- all done without affecting the source code.

----

- `process.env` is simply a normal object so we can set/override the values very easily.

```javascript=
process.env.MY_VARIABLE = 'ahoy';
```

----

![All Done](https://media.giphy.com/media/JMV7IKoqzxlrW/giphy.gif)

---

### How can we automatically deploy merges to our Master branch?

----

### If your repository is hosted on GitHub and linked to a Heroku app, 
- you can use GitHub integration to deploy changes directly to Heroku. 
- changes that are pushed to your repository are automatically deployed to the app. 

----

- you can configure automatic deployments for a specific branch, or manually trigger deployments from GitHub. 
- If you use continuous integration (CI), you can even prevent deployments to Heroku until your tests pass.

----

If using GitHub integration:
![](https://i.imgur.com/8EaYz7m.png)

If your GitHub repo uses automated Continuous Integration (with Travis CI, for example) and the checkbox enabled, Heroku will only auto-deploy after all the commit statuses of the relevant commit show success.

----

GitHub integration is also useful for automating pipelines. For example, when a change is merged into the master branch, you might deploy to a staging environment for testing. Once the change has been validated, you can then promote the app to production.

----

> Warning: GitHub repo admin access is required for you to configure automatic GitHub deploys. 

<!--This is because Heroku has to register a service hook on the GitHub repo, and this action requires admin access. For GitHub organisations, your GitHub account will also need to be a member of the organisation and not an outside collaborator.-->

---

![](https://media.giphy.com/media/V2ZrZfHghzSNi/giphy.gif)

---

### Additional Links

- ![What is a PaaS? (PaaS vs IaaS vs SaaS):](https://www.redhat.com/en/topics/cloud-computing/what-is-paas)
- ![How Heroku works:](https://devcenter.heroku.com/articles/how-heroku-works)
- ![Deploying Node.js Apps on Heroku](https://devcenter.heroku.com/articles/deploying-nodejs)
- ![GitHub Integration (Heroku GitHub Deploys)](https://devcenter.heroku.com/articles/github-integration) 

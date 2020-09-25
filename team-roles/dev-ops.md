## We had to choose from two tasks, 

- build react app with that talks to a backend and deploy to either Netlify for both sides, **or** Netlify for react and Heroku for backend
- we also had to look in to why the approach we took would be best 


---

## Netlify for react and Heroku for backend 
- set up a local backend, and configure your react app to "decide" which domain to hit (localhost backend vs deployed backend)

---

## Why would we run React on Netlify & our express app to Heroku, rather than running them both on Netlify? 

-- Netlify is quicker due to the services that Netlify offer
-- but Heroku is better for running servers/databases for small to medium businesses (and FAC projects)

---

# Netlify services 

---

### Server side rendering 

- This means your JS is rendered before the page loads, so that your users can interact with it straight away
- Long story to this! 

---

### Content Delivery Network

For internet to get from London to Adelaide, Australia, it has to physically travel through ocean-floor fiber optic cables. 

---

![](https://media1.tenor.com/images/d09d6734ef5a287d4bf103c69b1db2ef/tenor.gif?itemid=16468772 =400x)

---


![](https://i.imgur.com/bAcxumK.png) 

https://wondernetwork.com/pings/London


---

CDNs will cache your static assets- images, HTML, etc. all around the world on multiple servers. 

Any request from Adelaide locals will be served a copy from an Australian cache, which speeds things up by 460ms per request-response round trip.  

---

## Heroku, though? 

- Serving a backend on Netlify is a bit more complicated. 
- You could use their new Functions feature
- these act like serverless AWS lambda functions
- "serverless" basically means hosting a server but **only turn it on when there is a request to it**, then turn it off immmediately

---

- saves you the cost of running 24/7 servers
- if you suddenly had million a requests, the lambda way would scale beautifully to cope, while on Heroku you would need to manually start more servers to handle the load 
- **Heroku** does a much easier job of hosting in general and is favoured for small-medium businesses, you probably don't need to think about servless/AWS until you're serving a huge volume of requests 

---

Demo time :dancer: 

---

## What we learned

* make sure cors() is enabled on your backend to allow the netlify URL to access

* when creating OR changing .env file **RESTART THE SERVER**

* For react apps, you don't need to require dotenv, React ONLY recognises environment variables starting with `REACT_APP_`

* .env.development will overide any variables in .env

* make sure you add environment variables on NEtlify as well!

---

## Resources

[Add Custom Variables in React](https://create-react-app.dev/docs/adding-custom-environment-variables/)
[How to deploy a react node app to Heroku in 3 mins](https://www.freecodecamp.org/news/deploy-a-react-node-app-to/)

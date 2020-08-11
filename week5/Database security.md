<!-- Shaya -->
### What is a SQL injection? (SQLi)
![](https://i.imgur.com/IkaE0sD.gif)


---

<!-- Shaya -->
![](https://i.imgur.com/ea2FSm4.png)

---

<!-- Shaya -->
> SQLi was possibly first documented by Jeff Forristal in the hacker zine Phrack, in 1998.

<br>

- A type of cybersecurity attack
- Targets databases using specifically crafted SQL statements
- The attacker can then view/modify data that they are not normally able to retrieve

![](https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif)

---

<!-- Shaya -->
It's been used to steal the personal details of World Health Organization employees, grab data from the Wall Street Journal, and hit the sites of US federal agencies.

![](https://media.giphy.com/media/XDe1DyFCFEqZ2/giphy.gif)

---

### How is this possible?
![](https://i.imgur.com/EwN3y9E.gif)


----

**Most** SQL injections are within the **WHERE** clause of a **SELECT** query

other common places to have SQL injections are: 

**UPDATE** statements within the updated values or the **WHERE** clause
**INSERT** statements within the inserted values
**SELECT** within the table or column name
**SELECT** statements within the **ORDER BY** clause

----

Consider a shopping application that displays products in different categories. When the user clicks on the Gifts category, their browser requests the URL:

https://insecure-website.com/products?category=Gifts

This causes the application to make an SQL query to retrieve details of the relevant products from the database:

```SQL
SELECT * FROM products WHERE category = 'Gifts' AND released = 1
```

----

The application doesn't implement any defenses against SQL injection attacks, so an attacker can construct an attack like:

https://insecure-website.com/products?category=Gifts'--

Which results in this query:

```SQL
SELECT * FROM products WHERE category = 'Gifts'--' AND released = 1
```

Note the double-dash sequence *- -*
- It makes the rest of the query a comment 
- which removes the remainder of the query, so it no longer includes AND released = 1. 
- This means that all products are displayed, including unreleased products.

----

Typing this in the address bar: 

https://insecure-website.com/products?category=Gifts'+OR+1=1--

Results in the SQL query:

```SQL
SELECT * FROM products WHERE category = 'Gifts' OR 1=1--' AND released = 1
```
The modified query will return all items where either the category is Gifts, or 1 is equal to 1. Since 1=1 is always true, the query will return all items.

---

### Why is it important for our production databases to have passwords that are kept secret?

- Passwords should be secret :exclamation: 
- Gives others access to our database :warning: 

---

<!-- Shaya -->
### How can it be used maliciously?

- Access sensitive data.
- Hold data to ransom/sell it.
- Escalate to compromise underlying server or other back-end infrastructure.
- Perform Denial-of-Service attacks.

---

<!-- Shaya -->
### How do we guard against it?

- Online tools exist to scan for vulnerabilities at every entry point in your app.
- It works by submitting potentially malicious SQL and monitoring application responses.

---

<!-- Shaya -->
* Parameterised queries are essential!

![](https://media.giphy.com/media/h5j4OAlF2RRHeKlOYq/giphy.gif)

----

### Parameters

* SQL parameters are values that are added to an SQL query at execution time, in a controlled manner.

* Used instead of string concatenation within the query.

* Represented in the SQL statement by a marker.
 
* The SQL engine checks each parameter to ensure that it is correct for its column and are treated literally, and not as part of the SQL to be executed.

----

#### Parameterized Query 

* Also known as a prepared statement
* ```database.query(parameters, values) ```

```
const text = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *'
const values = ['brianc', 'brian.m.carlson@gmail.com']
// callback
client.query(text, values, (err, res) => {
  if (err) {
    console.log(err.stack)
  } else {
    console.log(res.rows[0])
    // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
  }
})
```

---
    
```
// promise
client
  .query(text, values)
  .then(res => {
    console.log(res.rows[0])
    // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
  })
  .catch(e => console.error(e.stack))
```

---

### QUESTIONS
![](https://imgs.xkcd.com/comics/exploits_of_a_mom.png)

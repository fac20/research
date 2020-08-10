## Relational vs non-relational databases

### What's the difference between relational (SQL) and non-relational (NoSQL) databases?

---

### How is data structured in a SQL database? my hoa

----

### To the beginning

Database - structured collection of data

Database Management System (DBMS) - handles access to structured data, one DBMS can manage multiple databases (like PostgreSQL)

SQL - a standard language for relational database management systems (RDBMS)

----

### Types of Databases
![](https://i.imgur.com/JaUU6Zq.png)

----

### Relational Databases (RDBMS)

_Traditionally the most popular database to use_

* stores data in tables 
* tables have columns
* each column has a datatype
* each row represents an instance of the table
* tables can relate to other tables

----

### What is NoSQL(“non SQL” or “not only SQL”) 
Non-relational database - doesn't use tables and columns(unstructured)

> NoSQL databases can store relationship data—they just store it differently than relational databases do

----

#### How is Data stored in NoSQL DAtabases
There are four major types of NoSQL databases:
- Document Database 
- Key-Value Database 
- Wide-column Stores 
- Graph database - nodes and edges - social networks

----
 
#### Document Databases
- Store data in documents similar to JSON  objects.
- Schema less and Mostly used for dynamic data 
- Most popular - MongoDB
 ![](https://i.imgur.com/1O7mzCc.png)

----

#### Key-Value Database 
- Simplest type of database where each item contains keys and values.
- Huge dataset for simple data
![](https://i.imgur.com/eTYczI4.png)

----

#### Wide-Column Databases
- Store data in tables, rows, and dynamic columns
- Optimised for reading data in columns instead of rows
- Mostly used for analytics
- most common db is Apache Cassandra
![](https://i.imgur.com/CF9p5Cu.png)
![](https://i.imgur.com/bYHk3a3.png)

----

#### Graph database 
 - store data in nodes and edges.
- Nodes typically store information about people, places, and things while edges store information about the relationships between the nodes.
- Most common db is Neo4j

----

#### Summary
![](https://i.imgur.com/22yARPb.png)
[source](https://www.michalbialecki.com/2018/03/16/relational-vs-non-relational-databases/) 

---

### What are some advantages of relational data?

![](https://media.giphy.com/media/5UutL1ff89IxCG5lO6/giphy.gif)

----

Simple format

![](https://i.imgur.com/15P6Gy0.png)

----

Avoids duplication

![](https://i.imgur.com/8pLTGNO.png)

![](https://i.imgur.com/Bs9m1Ix.png)


----

Security

![](https://i.imgur.com/8pLTGNO.png)

----

- Complex queries
- Specific data type (schemas)

---

### Are there disadvantages? 

----

## SUPRISINGLY YES!
![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FAsKkJB6JbFGiQ%2Fgiphy.gif&f=1&nofb=1)

----

- In SQL data need to be split between tables. 

- NoSQL data models allow related data to be nested within a single data structure.

- For this reason some developers find modeling data relationship to be  challanging in SQL in comparison to NoSQL

----

#### It is all about: Data storage model
![](https://www.dbbest.com/blog/wp-content/uploads/2016/02/sql-vs-nosql-2-e1455797740330.jpg)

----

#### Flexible data models

![](https://media.giphy.com/media/3oriNUHm08iuTga3zG/giphy.gif =150x)

- NoSQL databases typically have very flexible schemas. 
- A **Flexible Schema** === **Simple changes** to your database as requirements change. 
- Faster iteration
- Continuous integration of new application features 
- Provide value to your users faster.

----

#### Horizontal Scaling

- Most SQL databases require you to scale-up vertically
 (migrate to a larger, more expensive server)
 
- Most NoSQL databases allow you to scale-out horizontally
 (you can add cheaper, commodity servers whenever you need to)

----

#### NoSQL can be friendlier for developers
 
  ![](https://media.giphy.com/media/eO6qWndx14SLS/giphy.gif)

- Some NoSQL databases map their data structures. 
- This mapping allows developers to store their data in the same way that they use it in their application code. 
- Developers write less code
- Faster development time 
- Fewer bugs.

----

#### Conclusion

1. Time consuming to understand
2. Time consuming to desing the structure
3. Slower in comapriosn to NoSQL
4. Scalability can be a problem
5. Production speed and debuging

---

### Resources

*1. [What is NoSQL](https://www.mongodb.com/nosql-explained)*
*2.  [An intro to NoSQL(video - 15mins)](https://www.youtube.com/watch?v=uD3p_rZPBUQ)*
*3. [Relational vs Non-relational](https://www.michalbialecki.com/2018/03/16/relational-vs-non-relational-databases/)*
*4. [Differences between SQL and NoSQL](https://www.mongodb.com/nosql-explained/nosql-vs-sql)*
*5. [Scale up or out](https://www.youtube.com/watch?v=W7S7dQgvS4c)*

---

### Thank you!

![](https://media.tenor.com/images/744bd4590a6eea28b96c959f9b382083/tenor.gif)

 



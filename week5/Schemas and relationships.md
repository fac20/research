# Schemas and relationships (Spike)

### How does a schema describe a relational database?

---

<!-- Jihyun -->
## 1. What is a schema?
![](https://i.imgur.com/p8JYmbd.gif)

----

### schema
* A collection of database objects associated with a database.
* A blueprint of how the database is constructed
* Always belongs to a single database whereas a database can have single or multiple schemas. 
* Includes various database objects including tables, data types, views, stored procedures, relationships, primary keys, foreign keys, etc.

----

![](https://i.imgur.com/pgo1jAE.png) ![](https://i.imgur.com/XqOmz4z.png)

----

![](https://i.imgur.com/eXL0bid.png)

----

![](https://i.imgur.com/y45XTwB.png)

<!-- Customer Data: Data related to the customers, such as their name, address, etc
Business: Data required to run the business, such as staff, store locations, payment details, etc
Inventory: Details on all products. In this case the products are movies, so it contains data such as movie title, its category, the actors, etc.
Views: Special view on data used for appraisals.
 -->

----

### Advantages of using Schema
* Schemas provide the opportunity to simplify administration of security, backup and restore, and database management by allowing database objects, or entities, to be logically grouped together.

---

<!-- Jennifer -->
### 2. What kinds of data relationships are there?
 
- [One to one: one row (record) in a table only links to one other record in one other table.](https://https://fmhelp.filemaker.com/help/18/fmp/en/index.html#page/FMP_Help%2Fone-to-one-relationships.html%23)
- ONE student has ONE set of contact information:

![](https://i.imgur.com/SeDtaCL.png)

----

- There are some cases in which you might have to make a decision- put the one-to-one on the same table, make a separate table, or link fields in the same table?
- You will need to consider performance, ease of querying, redundancy and whether some values will end up NULL. 
-  [It is possible to compromise and link a table to itself!](https://support.airtable.com/hc/en-us/articles/218734758-A-beginner-s-guide-to-many-to-many-relationships)

https://stackoverflow.com/questions/13510768/one-to-one-relation-or-use-the-same-table

[](https://media.giphy.com/media/eebmNnxxtSNiw/giphy.gif)

----

- [One to many: ONE record in a table can be related to MULTIPLE records in another table. ](https://fmhelp.filemaker.com/help/18/fmp/en/index.html#page/FMP_Help%2Fone-to-many-relationships.html%23)
- ONE customer can make many orders, so their ID can appear in many records in the orders table:

![](https://i.imgur.com/sfH1CMw.png)


----

- Many to many: MANY records in a table can be related to MANY others in another table.
- A student can register for a lot of classes and each class will lots of students. 
- [To do this, you will need a 'join', or 'bridging', table.](https://fmhelp.filemaker.com/help/18/fmp/en/index.html#page/FMP_Help%2Fmany-to-many-relationships.html%23)

----

![](https://i.imgur.com/IDjkOWS.png)

----

[- ERD: Entity Relationship Diagram!](https://dev.to/helenanders26/entity-relationship-diagrams-explained-by-sonic-the-hedgehog-1m68)

![](https://i.imgur.com/Mn1npJx.png)



---

<!-- Azizi -->
## 3. What's a foreign key?

A primary key uniquely identifies each record in the table.

| Teacher_ID | Teacher_Name|
| ---------- | ----------- | 
| Teacher_001 |	Carmen |
| Teacher_002 |	Veronica |
| Teacher_003 |	Jorge |

----

## 3. What's a foreign key?

A foreign key refers to a primary key from another table and is used to link to that other table.

| Course_ID | Course_Name | Teacher_ID |
| --------- | ----------- | ---------- |
| Course_001| 	Biology |Teacher_001|
|Course_002 |	Math 	|Teacher_001|
|Course_003 |	English |Teacher_003|

----

## 4. What is the use of a forgen key? 

- They allow for data to be linked between tables.
- Tables are a feature of relational databases, you won't see them with flat file databases. 
- You'll link the tables together via Primary and Foreign keys. - Without them we could not have multiple tables. 

----

### How can foreign keys help us design schemas?

Using keys to link tables means;
- Items are linked uniquely so it is hard for unintentional links to occur
- Items do not have to be repeated, i.e.;
    - an item will not need to exist multiple times in the same table
    - you will not have multiple entries of the same piece of data in various tables, apart from keys

---

<!-- Trish -->
### EXAMPLE of FK & PK in action 


----

![](https://i.imgur.com/Rv9iDDx.png)


----

![](https://i.imgur.com/qzj8MeZ.png)


----

![](https://i.imgur.com/JSzvzIV.png)

----

![](https://i.imgur.com/tRvNLDV.png)

----

![](https://i.imgur.com/PT8xbBj.png)

---

<!-- Azizi -->
### Constraints
- The `PRIMARY KEY` constraint identifies each record in a table. No number can be repeated. Every row (record) is uniquely identified. 

- The `FOREIGN KEY` constraint also prevents invalid data from being inserted into the foreign key column, because it has to be one of the values contained in the table it points to

---

# Any Questions?

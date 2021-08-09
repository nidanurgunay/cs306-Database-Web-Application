# cs306-Database-Web-Application
Sabancı University cs 306 Database lecture term project for displaying tables and doing operations such as insert, delete and find. Application is designed for 
restaurants and in that application there will be information regarding customers, invoice, category, food, drink, Menu which has two sub-tables, cook which has two sub-tables, waiters which has two sub-tables. For waiters, these sub-tables are part time waiters and contracted waiters and they have a “ISA” relationship. For cooks, these sub-tables are assistantchef and chef and they have a “ISA” relationship. For Menu, these sub-tables are part time food and drink and they have a “ISA” relationship. There is a “gets” relationship between customer, table and invoice. Since each customer must sit at a table, there is a participation constraint between customers and tables. Each customer must get an invoice, there is a participation constraint between customers and invoice. There is a “orders from” relationship between customer and menu. Also each customer must order from a menu. Therefore, there is a participation constraint between customer and menu. In addition, There is a “responsible for” relationship between waiters and tables.

ISA information: Overlap Constraints: Contracted waiters and Part time waiters does not have any overlap. There is no person who is both a contracted waiter and part time waiter. Also there is no overlap between chef and chef assistant and between Food Menu and drink Menu.
 
Covering Constraints: There is no waiter working in the restaurant rather than Contracted waiters and Part-time waiters. For Menu ISA and Cook ISA the covering constraints are same with waiters, there is no other entity rather than them.

React.JS is used for the frontend and Express.JS and Node.JS is used for the backend side. Database query language choice is MySQL and administration of MySQL is achieved by phpMyAdmin. 
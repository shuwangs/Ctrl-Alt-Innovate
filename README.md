1. Clone the folder:

```bash
git clone https://github.com/shuwangs/Ctrl-Alt-Innovate.git
```

2. move into the server folder

```bash
    install express cors
    install nodemon --save-dev
```

# How to get the Database Data

this project inclues a PostgreSQL database called shopdb.
All of the tabels and sample data are sorted in a file named shopdb_dump.sql.

- 1. Make sure you have PostgreSQL installed.
- 2. Create a new database on your machine named shopdb.

```bash
    createdb shopdb
    psql -d shopdb -f db/shopdb_dump.sql
```

- 3. Import the shopdb_dump.sql file into your database
- 4. Once imported, you will have all the tables (users, orders, items) and the sample data exactly as used in this project.

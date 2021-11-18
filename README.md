## Express MySQL Api for movies

git clone
npm i && npm start

## Goal
The goal of the API is to fetch data from a database on table movies and author (CRUD)

## Steps
- 1/ Create a database videotifly and add a table movies with id (int auto incr primary key not null), title (varchar 250,not null), synopsis (longtext), year (int), genre (varchar 100), duration (int)
- 2/ Connect the data base to the express template (use a db-config, mysql2, dotenv ...) and get the connection in the app.js
- 3/ Add data in the movies tables with the provides files (./sql/step3.sql)
- 4/ Add a get route for all the movies

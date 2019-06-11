# LAB 11
## Authentication

##Author: Chloie Parsons

## Links and Resources
* submission PR: https://github.com/chloieparsons-401-advanced-javascript/lab-11/pull/3
* Travis: https://www.travis-ci.com/chloieparsons-401-advanced-javascript/lab-11
* Heroku: https://radiant-ravine-38736.herokuapp.com/

## Documentation
* MongoDB api docs (API servers)
* jsdoc 

## Modules
* app.js
* auth/middleware.js
* auth/router.js
* auth/users-model.js
* middleware/404.js
* middleware/error.js
* routes/books.js

## Setup
### .env requirements
PORT - Port Number
MONGODB_URI - URL to the running mongo instance/db

## Running the app
* npm start
Endpoint: /signup
Returns a JSON object with abc in it.
Endpoint: /signin
Returns a JSON object with abc in it.
Endpoint: /books
Returns a JSON object with abc in it.
Endpoint: /books/:id
Returns a JSON object.

## Tests
* npm run test
* npm run test-watch
* npm run lint

##UML
assets/Authentication_UML.JPG
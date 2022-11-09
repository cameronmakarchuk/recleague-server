
# RecLeague-server

RecLeague is a web app that makes it easy to find, join, and manage recreational sports leagues. RecLeague makes use of the Google Maps API, as well as the custom RecLeague-server API, and recleague database.

Note: This app needs the [RecLeague-client](https://github.com/cameronmakarchuk/recleague-client), and RecLeague mySQL database (setup instructions in RecLeague-server README).

## Features/API Endpoints

- Get user by user id
- Create/edit user
- Get all leagues
- Get league by id
- Get leagues by location/sport
- Get leagues by league owner/user id
- Join league with user id/Add user to league
- Get leagues joined by user id
- Get users that have joined a league by league id


## Tech Stack

**Client:** HTML/CSS, JavaScript, React, Sass, axios

**Server:** Node.js, Express,js, axios, JWT, Knex.js

**Database:** SQL/MySQL


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` - the port is set to 8080 by default but can be changed in .env file

`SESSION_SECRET` - set a secret key for authorization functionality

`SQL_USER` - set your mySQL username

`SQL_PASSWORD` - set your mySQL password
## Run Locally

Clone the project

```bash
  git clone git@github.com:cameronmakarchuk/recleague-server.git
```

Go to the project directory

```bash
  cd server
```

Install dependencies

```bash
  npm install
```

Create mySQL database

```bash
  CREATE DATABASE recleague;
```

Run database migration

```bash
  npm run migrate
```

Seed database

```bash
  npm run seed
```

Start the server

```bash
  npm run start
```


## Lessons Learned

Through building RecLeague-server I learned a lot about server-side auth using JWT.

I also learned how to setup mySQL databases and run queries using Knex.js to send data back to client.

## Roadmap

- Improve search functionality
- Implement client and server side form validation
- Add "Teams" functionality. See which teams have openings, and message teams directly
- Integrate Stripe API for checkout and payment processing
- Build out a league admin dashboard


## Authors

- [@cameronmakarchuk](https://www.github.com/cameronmakarchuk)


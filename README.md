# We Are Happy Back-End

## Go to section

- [Description](#description)
- [Tools Used](#tools-used)
- [Projects Structure](#project-structure)
- [Installation](#installation)
- [Running the app](#running-the-app)
- [Testing](#testing)

## Description

Company WeAreHappy wants to have an idea of the happiness of its employees. In
order to do so, they need a system to capture that happiness anonymously. When
going home from a hard day's work, each employee can indicate how their day
was. There are 3 moods:

:-) :-| :-(

The "vote" is stored anonymously in persistent storage on the back-end. This vote
can be done via an HTTP API or via a simple web application. Both will need to be
implemented for this assignment.
At any moment the manager can request statistics of the (average) happiness of
the employees that day, week or month. Again, both API and the web app need to
support this use case. Note these statistics should only be visible to the manager,
so this functionality should be protected. For the first implementation however,
this protection can be very basic.

Use cases

- An employee casts a vote anonymously
- The manager views the statistics
  - of the current day
  - of the current week
  - of the current month

## Tools Used

[Back to top](#We-Are-Happy-Back-End)

- Framework: NestJS
- Database: MongoDB with Mongoose
- API: REST and GraphQL
- Authentication: Passport.js, JWT, bcrypt

## Project structure

[Back to top](#We-Are-Happy-Back-End)

The application is divided into respective modules:

- `auth` - responsible for authentication and authorization. It uses `passport.js` with `local` strategy and generates `JWT` token for later authorization.
- `happiness` - responsible for handling Entries (votes). It allows to create and fetch Entries (including filtering) with respect to requester's permissions.
- `users` - defines Users and handles related actions.

Modules file structure varies slightly but generally is following:

- `/dto` - Data Transfer Objects
- `/helpers` - helper files
- `/interfaces` - interfaces and enums for the module
- `/schemas` - MongoDB/Mongoose schemas of related collections
- `.controller` - controller responsible for REST calls
- `.graphql` - GraphQL enums, types, queries and mutations
- `.module` - module file binding together its components
- `.resolver` - controller equivalent responsible for GraphQL calls
- `.service` - service responsible for logic and database calls

## Installation

[Back to top](#We-Are-Happy-Back-End)

Before running the app it's necessary to install MongoDB, start the database on the machine and install the app itself.

```bash
# Install MongoDB
sudo apt-get install mongodb

# Start MongoDB
sudo service mongodb start

# Verify that the DB is running (the value of "ok" field should be 1)
mongo --eval 'db.runCommand({ connectionStatus: 1 })'
```

```bash
$ npm install
```

## (Optional) Database seeding

[Back to top](#We-Are-Happy-Back-End)

`/mongodb_seed` directory contains mock data for the database. To pre-populate the database with it, run the following commands:

```bash
$ npm install -g mongo-seeding-cli
$ seed -u 'mongodb://localhost:27017/weAreHappy' --drop-database ./mongodb_seed
```

Besides seeding entries, it also creates two mock users:

- `employee/employee` with employee permission
- `manager/manager` with manager permission

## Running the app

[Back to top](#We-Are-Happy-Back-End)

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

[Back to top](#We-Are-Happy-Back-End)

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

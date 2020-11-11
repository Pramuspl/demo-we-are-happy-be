# We Are Happy Back-End

## Go to section

- [Description](#description)
- [Tools Used](#tools-used)
- [Installation](#installation)
- [Running the app](#running-the-app)
- [Testing](#testing)

## Description

Functionality
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
- Authentication: Passport.js, JWT

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

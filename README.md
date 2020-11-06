# We Are Happy Back-End

## Description

Demo application of a happiness measurement app.

Back-End developed using NestJS.

## The assignment

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

- NestJS
- MongoDB with Mongoose

## MongoDB Setup

Before running the app it's necessary to install MongoDB and start the database on the machine

```bash
# Install MongoDB
sudo apt-get install mongodb

# Start MongoDB
sudo service mongodb start

# Verify that the DB is running (the value of "ok" field should be 1)
mongo --eval 'db.runCommand({ connectionStatus: 1 })'
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456

[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Car-Pricing

Welcome to the Car Pricing API, built using NestJS. This application serves as a backend API for a vehicle sales reporting system,
where users can sign up, report sales of their vehicles, and receive estimates for their car's value. Admins have the capability
to approve or reject reported sales. For simplicity and testing purposes, we assume that every new user is Admin.

## Features

- **User Registration and Authentication:**
    - Users can sign up using their email and password.
    - Session-based authentication and authorization have been implemented from scratch.

- **Vehicle Sales Reporting:**
    - Users can report the sale price of their vehicles.
    - Admins review and approve or reject these reported sales.

- **Vehicle Value Estimation:**
    - Users can get an estimate of their vehicle's worth based on the make, model, year, and mileage.

## Authentication and Authorization

The application uses session-based authentication and authorization to secure user data and actions. Users need to be 
authenticated to report vehicle sales and get value estimates. Admins have elevated permissions to manage and approve 
reported sales.

## Testing

- **Unit Tests:** A set of unit tests has been developed to ensure the correctness of individual components.
- **End-to-End (E2E) Tests:** Integration tests are in place to validate the overall system functionality.

## API Documentation

A Postman collection is available to check and test the API endpoints. This includes routes for user registration, login,
reporting sales, and retrieving vehicle value estimates. To explore the API endpoints using Postman, import the provided
Postman collection (Car-Pricing.postman_collection.json) and Postman Environment (Local.postman_environment.json) into your Postman application.


## Description

This is just an API without UI. The application can run for development, testing, and for production as well.

### Prerequisites

- Node.js (>= 22.1.x)
- npm (>= 10.7.x)
- yarn (>= 1.22.x)
- NestJS CLI

## Installation

```bash
$ yarn install
```

## Before running the app

### Development & Testing 

Whether you want to run the app in development or for testing, e.g. test:e2e , you have to create two .env files.

1. .env.development     (for running dev)
2. .env.test          (for running test)

Inside those you have to provide two variables and initialize them according to your preferences.

```dotenv
DATABASE_NAME
COOKIE_KEY
```

When in development mode, for the first run you have to apply migrations for creating the db according to schema. Please
run the following commands.

```bash
# create the initial db schema
$ yarn run migration:generate:init
# apply the created schema to the db for initializing it
$ yarn run migration:run:dev
# run in watch mode
$ yarn run start:dev
```
### Production
For production the database type is **POSTGRES**.

Create again a .env.prod file.
```dotenv
DATABASE_HOST
DATABASE_PORT
DATABASE_NAME
DATABASE_USERNAME
DATABASE_PASSWORD
NODE_ENV
COOKIE_KEY
PORT
```
_Note the port variable is the listening port for the application._

```bash 
# build the application
$ yarn --frozen-lockfile install; yarn build;
# run in production mode
$ yarn start:prod
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## License

Nest is [MIT licensed](LICENSE).

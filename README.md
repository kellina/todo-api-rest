# Todo-api-rest ![GitHub](https://img.shields.io/github/license/kellina/todo-api-rest) [![npm version](https://badge.fury.io/js/express.svg)](https://badge.fury.io/js/express) [![Heroku App Status](http://heroku-shields.herokuapp.com/kel-todo-backend)](https://kel-todo-backend.herokuapp.com) [![Build Status](https://travis-ci.com/kellina/todo-api-rest.svg?branch=master)](https://travis-ci.com/kellina/todo-api-rest) [![codecov](https://codecov.io/gh/kellina/todo-api-rest/branch/master/graph/badge.svg?token=CP3GSLGCSM)](https://codecov.io/gh/kellina/todo-api-rest) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=kellina_todo-api-rest&metric=alert_status)](https://sonarcloud.io/dashboard?id=kellina_todo-api-rest) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=kellina_todo-api-rest&metric=security_rating)](https://sonarcloud.io/dashboard?id=kellina_todo-api-rest) ![Docker Automated build](https://img.shields.io/docker/automated/kellina/todoback?color=green)

> ToDo Rest Api that creates, changes, lists, and deletes tasks.

## Install

### Manual

It is necessary to install the PostgreSQL database before installing the application.
This [tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-20-04-pt) can help you.

Clone the repository and install the dependencies

```bash
git clone git@github.com:kellina/todo-api-rest.git
cd todo-api-rest
npm install
```

Create a `.env` file at the root of the project with the following environment variables:

```
DATABASE_URL= postgres://dbuser:password@localhost:port/dbname
PORT=8080
```

Start the application with:

```bash
npm start
```

### Docker container

1. Download the database startup script [database.sql](https://raw.githubusercontent.com/kellina/todo-api-rest/master/src/scripts/database.sql)
2. Create the `docker-compose.yml` file as in the example below in the same directory as the` database.sql` file downloaded in the previous step.
 
```yml
version: "3.7"

services:
  db:
    image: postgres:13.1-alpine
    restart: always
    environment:
      POSTGRES_PASSWORD: todo
    volumes:
      - ./database.sql:/docker-entrypoint-initdb.d/database.sql
  backend:
    image: kellina/todoback:latest
    environment:
      - DATABASE_URL=postgres://postgres:todo@db:5432/todo
      - PORT=8080
    depends_on:
      - db
    ports:
      - 8080:8080
```

3. Run the command `docker-compose up`


## Swagger

The swagger documentation for this application is at: http://localhost:8080

![Swagger](https://raw.githubusercontent.com/kellina/todo-api-rest/master/assets/swagger.png)

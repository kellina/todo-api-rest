# Todo-api-rest ![GitHub](https://img.shields.io/github/license/kellina/todo-api-rest) ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/kellina/todo-api-rest/express) [![Heroku App Status](http://heroku-shields.herokuapp.com/kel-todo-backend)](https://kel-todo-backend.herokuapp.com) [![Build Status](https://travis-ci.com/kellina/todo-api-rest.svg?branch=master)](https://travis-ci.com/kellina/todo-api-rest)

> ToDo Rest Api that creates, changes, lists, and deletes tasks.

## Install

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

## Swagger

The swagger documentation for this application is at: http://localhost:8080

![Swagger](https://raw.githubusercontent.com/kellina/todo-api-rest/master/assets/swagger.png)

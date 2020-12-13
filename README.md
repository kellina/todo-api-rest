# Todo-api-rest ![GitHub](https://img.shields.io/github/license/kellina/todo-api-rest) ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/kellina/todo-api-rest/express) [![Heroku App Status](http://heroku-shields.herokuapp.com/kel-todo-backend)](https://kel-todo-backend.herokuapp.com)

> ToDo Rest Api that creates, changes, lists, and deletes tasks.

 
## Overview

A reference to the functionality our public API provides with detailed description of each API endpoint, parameters, and examples.


## Install

É necessário fazer instalação do banco postgesql antes de instalar a aplicação.
Este [tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-20-04-pt) poderá te ajudar.

Clone o repositorio e instale as depedencias

```bash
git clone git@github.com:kellina/todo-api-rest.git
cd todo-api-rest
npm install
```

Crie um arquivo `.env` na raiz do projeto com as seguintes variaveis de ambiente:

```
DATABASE_URL= postgres://dbuser:password@localhost:port/dbname
PORT=8080
```

Inicie a aplicação com:

```bash
npm start
```

## Swagger

A documentação swagger desta aplicação está no: http://localhost:8080/

CREATE DATABASE todo WITH ENCODING 'UTF8';

\c todo;

CREATE TABLE "tasks" (
  "id" SERIAL PRIMARY KEY,
  "description" varchar(50) NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT (now()),
  "done" boolean NOT NULL
);

INSERT INTO "tasks" ("description", "done")
VALUES ('Pagar colégio', false),
('Lavar roupas', false),
('Comprar pão', true);

-- ESSES COMANDOS NÃO FAZEM PARTE DO SCRIPT
-- para entrar no psql
-- sudo -u todo psql
-- quando dá erro de permissão:
-- todo=# GRANT ALL PRIVILEGES ON DATABASE todo TO kellina;
-- todo=# GRANT ALL PRIVILEGES ON tasks TO kellina;
-- todo=# GRANT ALL PRIVILEGES ON tasks_id_seq TO kellina;
create table tasks (
    id serial primary key, 
    description varchar(50) not null,
    done boolean not null
);


-- ESSES COMANDOS NÃO FAZEM PARTE DO SCRIPT
-- para entrar no psql
sudo -u todo psql
-- quando dá erro de permissão:
todo=# GRANT ALL PRIVILEGES ON DATABASE todo TO kellina;
todo=# GRANT ALL PRIVILEGES ON tasks TO kellina;
todo=# GRANT ALL PRIVILEGES ON tasks_id_seq TO kellina;
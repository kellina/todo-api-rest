FROM node:14.15.4-alpine3.12

LABEL maintainer="kellina@gmail.com"
LABEL description="To Do Rest Api"

ENV DATABASE_URL=postgres://postgres:todo@localhost:5433/todo
ENV PORT=8080


RUN mkdir /todobackend
WORKDIR /todobackend
COPY . .

RUN npm install

CMD npm start

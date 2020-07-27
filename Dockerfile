FROM node:14.5-alpine

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app
RUN npm start
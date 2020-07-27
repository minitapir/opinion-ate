FROM node:14.5-alpine

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json /app/

RUN npm install

COPY . /app
EXPOSE 3000
CMD [ "npm", "start" ]
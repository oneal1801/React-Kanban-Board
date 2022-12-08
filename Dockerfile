FROM node:latest

WORKDIR /usr/src/app/challenge-kamban-board

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
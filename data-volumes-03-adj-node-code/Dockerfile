FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ARG DEFAULT_PORT=8000

EXPOSE $DEFAULT_PORT

CMD [ "node", "server.js" ]
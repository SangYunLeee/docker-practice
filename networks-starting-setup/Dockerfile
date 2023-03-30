FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ARG DEFAUT_APP_PORT=3000
ARG MONGO_HOSTNAME="host.docker.internal"

ENV APP_PORT=$DEFAUT_APP_PORT
ENV MONGO_ENDPOINT=$MONGO_HOSTNAME

CMD ["node", "app.js"]
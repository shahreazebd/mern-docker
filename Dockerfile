FROM node:18-alpine

WORKDIR /app

RUN npm i -g pm2

COPY package.json .

RUN npm i

COPY . .

EXPOSE 9000

CMD ["pm2-dev", "server.js"]
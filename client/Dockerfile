FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

RUN mkdir node_modules/.vite && chmod -R 777 node_modules/.vite

EXPOSE 9001

CMD [ "npm", "run", "dev" ]
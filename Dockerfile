FROM node:alpine

COPY . /app

ENTRYPOINT [ "node", "app/index.js" ]

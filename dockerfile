FROM node:current-alpine3.20

WORKDIR /app

COPY package*.json ./
 
RUN npm install

COPY ./build  ./

EXPOSE 3000

CMD ["node", "index.js"]
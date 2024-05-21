FROM node:20.13.1-alpine

WORKDIR /backend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "server"]

FROM node:16-alpine

WORKDIR /app

COPY package.json .


RUN npm install


COPY . .

EXPOSE 3000:3000

CMD ["npx", "ts-node", "./index.ts"]
  
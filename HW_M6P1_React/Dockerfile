FROM node:16-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . ./

RUN npm run build

EXPOSE 8081
EXPOSE 8082
CMD ["npm", "start"]
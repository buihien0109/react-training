## dependencies
```
npm install
```

### Run server
```
npm start
```

## Docker file
```
FROM node:alpine

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN  npm install

COPY . .

CMD ["npm", "start"]
```
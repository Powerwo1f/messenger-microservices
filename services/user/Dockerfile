FROM node:18

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["node", "dist/main.js"]

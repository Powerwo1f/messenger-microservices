FROM node:18
WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./

RUN npm install
RUN npm install -g @nestjs/cli

COPY . .

RUN npm run build

CMD ["node", "dist/main.js"]

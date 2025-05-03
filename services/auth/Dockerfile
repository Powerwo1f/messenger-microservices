# Базовый образ с Node.js
FROM node:18

# Рабочая директория внутри контейнера
WORKDIR /app

# Копируем package.json и tsconfig'и
COPY package*.json ./
COPY tsconfig*.json ./

# Установка зависимостей
RUN npm install

# Копируем исходный код
COPY ./src ./src
COPY ./proto ./proto

# Собираем TypeScript
RUN npm run build

# Запуск
CMD ["node", "dist/main.js"]

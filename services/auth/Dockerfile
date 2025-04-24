# Базовый образ с Node.js
FROM node:18

# Рабочая директория внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальной код
COPY . .

# Собираем TypeScript в JS
RUN npm run build

# Запускаем
CMD ["node", "dist/main.js"]

# Используем базовый образ node.js
FROM node:18-alpine

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json в контейнер
COPY package.json ./
COPY package-lock.json ./

# Устанавливаем зависимости приложения
RUN npm install

# Копируем все файлы проекта в контейнер
COPY . .

# Собираем приложение
RUN npm run build

# Указываем порт, который будет использоваться приложением в контейнере
EXPOSE 80

# Запускаем команду для запуска приложения в контейнере
CMD ["npm", "start"]
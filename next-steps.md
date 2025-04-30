# 📌 Дальнейшие шаги по проекту Messenger Gateway (gRPC + Fastify)

## ✅ Что уже сделано:
- Настроен `gateway/src/main.ts` на Fastify
- Создан `auth.proto`
- Написан gRPC клиент для `AuthService`
- Сделан базовый `POST /login` контроллер, который вызывает gRPC

---

## 🧱 Ближайшие шаги

### MAIN: 📁 Сделать регистрацию и авторизацию на auth сервисе через gateway

### 1. 📁 Структурировать gateway:
```
gateway/
├── proto/                # .proto файлы
├── src/
│   ├── main.ts           # точка входа Fastify
│   ├── controllers/      # REST обработчики
│   ├── grpc-clients/     # обёртки над gRPC клиентами
│   ├── middlewares/      # auth/session middleware (в будущем)
│   └── routes/           # регистраторы маршрутов
```

---

### 2. 🔐 Реализация Auth логики
- [ ] `POST /register` → вызывает gRPC `authService.register`
- [ ] `GET /me` → проверяет сессию и вызывает `authService.getMe`
- [ ] Настроить cookie-сессию или JWT (временный `token.user` объект пока можно захардкодить)

---

### 3. 🧪 Генерация TypeScript gRPC клиента (опционально)
Позже можно сгенерировать строго типизированный gRPC клиент:
- [ ] Использовать `@grpc/grpc-js` + `@grpc/proto-loader`
- [ ] Или `grpc-tools` + `ts-proto` (для генерации TS-интерфейсов)

---

### 4. 🔗 Подключение новых сервисов:
Добавить аналогичные `.proto` и gRPC клиенты:
- [ ] `user.proto` (gRPC getUserById, updateUser)
- [ ] `chat.proto` (создание/получение чатов)
- [ ] `message.proto` (отправка/получение сообщений)

---

### 5. 🧰 Инфраструктура:
- [ ] `tsconfig.json` → настроить rootDir = "src", outDir = "dist"
- [ ] Создать `Dockerfile` для gateway
- [ ] Настроить `docker-compose.yml` со всеми сервисами + Redis + Postgres

---

### 6. 🧠 Документация и масштабирование:
- [ ] Создать `README.md` в gateway с описанием запуска, gRPC клиента и роутов
- [ ] Добавить Swagger/OpenAPI (опционально)
- [ ] Добавить middleware для логов и обработки ошибок

---

## 🏁 Цель ближайшего этапа:
Минимально рабочий gateway, поддерживающий:
- авторизацию через gRPC
- регистрацию
- защиту `/me` через куку/токен

> *Следующий шаг — реализовать `POST /register` с проксированием в `authService.register` и подготовить `authService` серверную реализацию `Login` и `Register`.*
# 📨 Messenger Microservices

A real-time messaging platform built with Node.js, PostgreSQL, Redis, WebSockets, and RabbitMQ using microservices architecture.

## 🚀 Features

- Session-based authentication
- Private and group chats
- Real-time messaging via WebSocket
- Message reactions and "last seen" tracking
- Redis-based rate limiting and session store
- Event-driven architecture via RabbitMQ
- PostgreSQL as main storage
- Monitoring via Prometheus & Grafana
- Fully Dockerized environment

## 🧱 Stack

- **Backend:** Node.js (Fastify / Express)
- **Real-time:** WebSocket (Socket.IO or WS)
- **Database:** PostgreSQL + Redis
- **Messaging:** RabbitMQ
- **Infra:** Docker + Docker Compose

## 🛠 Services

| Name             | Description                      |
|------------------|----------------------------------|
| `auth`           | User registration and login      |
| `user`           | Profile management, last seen    |
| `chat`           | Chat creation and membership     |
| `message`        | Messaging logic and reactions    |
| `notification`   | Real-time updates via WebSocket  |
| `gateway`        | WebSocket gateway for clients    |
| `libs/common`    | Shared logic and types           |

## ⚙️ Running the project

```bash
docker-compose up --build

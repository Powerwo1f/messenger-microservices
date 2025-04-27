import "reflect-metadata";
import * as dotenv from "dotenv";
import { AppDataSource } from "../ormconfig";

// Загружаем переменные окружения
dotenv.config();

async function start() {
    try {
        await AppDataSource.initialize();
        console.log("✅ Connected to the database!");

        // Здесь потом запустим сервер (Express/Fastify)
    } catch (error) {
        console.error("❌ Failed to connect to the database:", error);
        process.exit(1);
    }
}

start();

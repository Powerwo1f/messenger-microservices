import { DataSource } from "typeorm";
import { User } from "./src/entities/user.entity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: 5432,
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "messenger",
    entities: [User],
    synchronize: true, // Только для разработки!
});
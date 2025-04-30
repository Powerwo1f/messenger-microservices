import Fastify from 'fastify';
import * as dotenv from 'dotenv';
import { login } from "./controllers/auth.controller";

dotenv.config();

const app = Fastify();

app.get('/health', async (request, reply) => {
    return { status: 'ok' };
});
app.post("/login", login);

const start = async () => {
    try {
        await app.listen({ port: Number(process.env.PORT) || 3000, host: '0.0.0.0' });
        console.log('🚀 Gateway running on port', process.env.PORT || 3000);
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

start();
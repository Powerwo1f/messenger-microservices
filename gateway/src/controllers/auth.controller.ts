import { Controller, Post } from "@nestjs/common";
import { FastifyRequest, FastifyReply } from "fastify";
import { AuthService } from "../services/auth.service";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("login")
    async login(request: FastifyRequest, reply: FastifyReply) {
        const { username, password } = request.body as {
            username: string;
            password: string;
        };

        const result = await this.authService.login(username, password);
        reply.send(result);
    }

    @Post("register")
    async register(request: FastifyRequest, reply: FastifyReply) {
        const { username, password } = request.body as {
            username: string;
            password: string;
        };

        const result = await this.authService.register(username, password);
        reply.send(result);
    }
}

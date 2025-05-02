import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import { AuthService } from "./auth.service";

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @GrpcMethod("AuthService", "Login")
    login(data: { email: string; password: string }) {
        return this.authService.login(data);
    }

    @GrpcMethod("AuthService", "Register")
    register(data: { email: string; password: string; username: string }) {
        return this.authService.register(data);
    }
}

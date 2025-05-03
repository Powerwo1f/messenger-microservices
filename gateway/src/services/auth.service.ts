import { Inject, Injectable } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import { lastValueFrom } from "rxjs";

interface AuthServiceGrpc {
    Login(data: { username: string; password: string }): any;
    Register(data: { username: string; password: string }): any;
}

@Injectable()
export class AuthService {
    private authService: AuthServiceGrpc;

    constructor(@Inject("AUTH_SERVICE") private client: ClientGrpc) {}

    onModuleInit() {
        this.authService = this.client.getService<AuthServiceGrpc>("AuthService");
    }

    async register(username: string, password: string) {
        return await lastValueFrom(
            this.authService.Register({ username, password })
        );
    }

    async login(username: string, password: string) {
        return await lastValueFrom(
            this.authService.Login({ username, password })
        );
    }
}

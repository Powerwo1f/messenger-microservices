import { Inject, Injectable } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";

interface AuthGrpcService {
    login(data: LoginDto): Observable<any>;
    register(data: RegisterDto): Observable<any>;
}

@Injectable()
export class AuthService {
    private authService: AuthGrpcService;

    constructor(@Inject("AUTH_SERVICE") private client: ClientGrpc) {}

    onModuleInit() {
        this.authService = this.client.getService<AuthGrpcService>("AuthService");
    }

    login(dto: LoginDto) {
        return this.authService.login(dto);
    }

    register(dto: RegisterDto) {
        return this.authService.register(dto);
    }
}

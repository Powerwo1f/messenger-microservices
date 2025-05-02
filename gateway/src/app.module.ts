import { Module } from "@nestjs/common";
import { AuthController } from "./auth/auth.controller";
import { AuthService } from "./auth/auth.service";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { join } from "path";

@Module({
    imports: [
        ClientsModule.register([
            {
                name: "AUTH_SERVICE",
                transport: Transport.GRPC,
                options: {
                    package: "auth",
                    protoPath: join(__dirname, "../proto/auth.proto"),
                },
            },
        ]),
    ],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AppModule {}

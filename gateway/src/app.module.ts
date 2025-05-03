import { Module } from "@nestjs/common";
import { AuthController } from "./auth/auth.controller";
import { AuthService } from "./auth/auth.service";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { join } from "path";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        ClientsModule.register([
            {
                name: "AUTH_SERVICE",
                transport: Transport.GRPC,
                options: {
                    url: process.env.AUTH_SERVICE_URL, // вот это важно
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

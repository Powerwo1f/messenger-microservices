import { Module } from "@nestjs/common";
import { ClientsModule } from "@nestjs/microservices";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { getAuthClientConfig } from "./auth.client";

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        ClientsModule.registerAsync([
            {
                name: "AUTH_SERVICE",
                imports: [ConfigModule],
                inject: [ConfigService],
                useFactory: getAuthClientConfig,
            },
        ]),
    ],
    exports: [ClientsModule],
})
export class GrpcClientModule {}

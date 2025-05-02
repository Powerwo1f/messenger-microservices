import { Module } from "@nestjs/common";
import { ClientsModule } from "@nestjs/microservices";
import { AUTH_CLIENT } from "./auth.client";

@Module({
    imports: [ClientsModule.register([AUTH_CLIENT])],
    exports: [ClientsModule],
})
export class GrpcClientModule {}

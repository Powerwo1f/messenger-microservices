import { Transport, ClientProviderOptions } from "@nestjs/microservices";
import { join } from "path";
import { ConfigService } from "@nestjs/config";

export const getAuthClientConfig = (configService: ConfigService): ClientProviderOptions => ({
    name: "AUTH_SERVICE",
    transport: Transport.GRPC,
    options: {
        url: configService.get<string>("AUTH_SERVICE_URL") || "localhost:50051",
        package: "auth",
        protoPath: join(__dirname, "../../proto/auth.proto"),
    },
});

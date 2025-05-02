import { ClientProviderOptions, Transport } from "@nestjs/microservices";
import { join } from "path";

export const AUTH_CLIENT: ClientProviderOptions = {
    name: "AUTH_SERVICE",
    transport: Transport.GRPC,
    options: {
        url: process.env.AUTH_SERVICE_URL || "localhost:50051",
        package: "auth",
        protoPath: join(__dirname, "../../proto/auth.proto"),
    },
};

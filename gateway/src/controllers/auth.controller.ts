import { authClient } from "../grpc-clients/authClient";
import { FastifyRequest, FastifyReply } from "fastify";
import { ServiceError } from "@grpc/grpc-js";

export const login = async (
    request: FastifyRequest,
    reply: FastifyReply
) => {
    const { username, password } = request.body as {
        username: string;
        password: string;
    };

    authClient.Login({ username, password }, (err: ServiceError | null, response: any) => {
        if (err) {
            return reply.status(500).send({ error: err.message });
        }

        reply.send(response);
    });
};


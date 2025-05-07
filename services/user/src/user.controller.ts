import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import { UserService } from "./user.service";

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @GrpcMethod("UserService", "GetUserById")
    getUserById(data: { id: number }) {
        return this.userService.getUserById(data.id);
    }
}

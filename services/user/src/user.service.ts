import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    async getUserById(id: number) {
        // Пока что мок
        return { id, email: `user${id}@example.com`, username: `User${id}` };
    }
}

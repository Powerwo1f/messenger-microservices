import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly users: Repository<User>,
        private readonly jwtService: JwtService,
    ) {}

    async register(data: { email: string; password: string; username: string }) {
        const existing = await this.users.findOneBy({ email: data.email });
        if (existing) throw new Error("User already exists");

        const passwordHash = await bcrypt.hash(data.password, 10);
        const user = this.users.create({
            email: data.email,
            username: data.username,
            passwordHash,
        });

        await this.users.save(user);
        return this.issueToken(user);
    }

    async login(data: { email: string; password: string }) {
        const user = await this.users.findOneBy({ email: data.email });
        if (!user) throw new Error("Invalid credentials");

        const valid = await bcrypt.compare(data.password, user.passwordHash);
        if (!valid) throw new Error("Invalid credentials");

        return this.issueToken(user);
    }

    private issueToken(user: User) {
        const payload = { sub: user.id, email: user.email };
        return {
            accessToken: this.jwtService.sign(payload),
            refreshToken: "mock-refresh-token", // На будущее
        };
    }
}

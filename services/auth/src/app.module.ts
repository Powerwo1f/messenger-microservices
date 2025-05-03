import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { JwtModule } from "@nestjs/jwt";
import { typeOrmConfig } from "./ormconfig";

@Module({
    imports: [
        TypeOrmModule.forRoot(typeOrmConfig),
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            secret: process.env.JWT_SECRET || "SECRET", // вынеси в .env
            signOptions: { expiresIn: "1h" },
        }),
    ],
    providers: [AuthService],
    controllers: [AuthController],
})
export class AppModule {}

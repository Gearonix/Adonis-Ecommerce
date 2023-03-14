import { JwtService } from '@nestjs/jwt';
import { UsersService } from '@app/modules/users';
import { ReturnToken } from '@app/modules/auth/types/returnTypes';
import { UsersEntity } from '@app/entities';
export declare class TokenService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    generateToken(userId: number): Promise<ReturnToken>;
    getUser(): Promise<UsersEntity & {
        isMe: boolean;
    }>;
    getUserIdByCookie(): Promise<number>;
    setAuthCookie(tokenData: ReturnToken): Promise<ReturnToken>;
    verifyToken(token: string): Promise<number>;
}
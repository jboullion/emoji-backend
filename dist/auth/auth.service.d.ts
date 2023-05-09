import { AuthCreateDto } from './dto/auth-create.dto';
import { AuthLoginDto } from './dto/auth-login.dto';
import { User } from './user.entity';
import { UsersRepository } from './users.repository';
import { JwtService } from '@nestjs/jwt';
import { AuthRefreshDto } from './dto/auth-refresh.dto';
export declare class AuthService {
    private usersRepository;
    private jwtService;
    constructor(usersRepository: UsersRepository, jwtService: JwtService);
    signUp(authCredentialsDto: AuthCreateDto): Promise<User>;
    signIn(authCredentialsDto: AuthLoginDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refreshSignIn(authRefreshDto: AuthRefreshDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    generateTokens(user: User): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    generateRefreshToken(userId: number): Promise<string>;
}

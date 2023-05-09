import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthCreateDto } from './dto/auth-create.dto';
import { AuthRefreshDto } from './dto/auth-refresh.dto';
import { User } from './user.entity';
export declare class AuthController {
    private authService;
    private logger;
    constructor(authService: AuthService);
    signUp(authCredentialsDto: AuthCreateDto): Promise<User>;
    signIn(authCredentialsDto: AuthLoginDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refreshToken(authRefreshDto: AuthRefreshDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}

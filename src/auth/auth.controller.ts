import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthCreateDto } from './dto/auth-create.dto';
import { AuthRefreshDto } from './dto/auth-refresh.dto';
import { User } from './user.entity';
import { Logger } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  private logger = new Logger('AuthController', { timestamp: true });

  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() authCredentialsDto: AuthCreateDto): Promise<User> {
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  signIn(
    @Body() authCredentialsDto: AuthLoginDto,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    return this.authService.signIn(authCredentialsDto);
  }

  @Post('/refresh')
  refreshToken(
    @Body() authRefreshDto: AuthRefreshDto,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    return this.authService.refreshSignIn(authRefreshDto);
  }
}

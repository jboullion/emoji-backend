import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class AuthLoginDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8, {
    message: 'Password must be at least 8 characters long',
  })
  @MaxLength(32, {
    message: 'Password must be no more than 32 characters long',
  })
  // ? Question: Do we want to require more complex passwords? I currently think reduced friction at login is more important.
  // @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
  //   message:
  //     'Password requires as least 1 uppercase, 1 lowercase, and 1 number',
  // })
  password: string;
}

import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AuthCreateDto {
  // TODO: Should we just generate a random name for a user? This feels like added friction
  @IsString()
  @MinLength(3, {
    message: 'Username must be at least 3 characters long',
  })
  @MaxLength(20, {
    message: 'Username must be no more than 20 characters long',
  })
  username: string;

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

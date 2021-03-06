import {
  IsString,
  IsEmail,
  IsOptional,
  Matches,
  MaxLength,
  MinLength,
  IsNotEmpty,
} from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsEmail({
    message: 'Email must be a valid email test',
  })
  email?: string;

  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  @MinLength(8, {
    message: 'Password must be at least 8 characters long',
  })
  @MaxLength(32, {
    message: 'Password must be no more than 32 characters long',
  })
  // @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
  //   message:
  //     'Password requires as least 1 uppercase, 1 lowercase, and 1 number',
  // })
  passwordNew?: string;
}

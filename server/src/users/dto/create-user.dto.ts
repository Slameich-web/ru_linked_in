import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.ru', description: 'Почтовый адрес' })
  @IsString({ message: 'Должно быть строкой' })
  @IsEmail()
  readonly email: string;
  @ApiProperty({ example: 'qwerty123', description: 'Пароль' })
  @IsString({ message: 'Должно быть строкой' })
  @Length(4, 20, {
    message: 'Пароль должен быть не меньше 4 символов и не больше 20 символов ',
  })
  readonly password: string;
}

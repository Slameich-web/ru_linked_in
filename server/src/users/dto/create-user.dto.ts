import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.ru', description: 'Почтовый адрес' })
  @IsString({ message: 'Должно быть строкой' })
  @IsEmail()
  readonly email: string;
  @ApiProperty({ example: 'qwerty123', description: 'Пароль' })
  @IsString({ message: 'Должно быть строкой' })
  @Length(4, 20, { message: 'Не меньше 4 не больше 20 ' })
  readonly password: string;
}

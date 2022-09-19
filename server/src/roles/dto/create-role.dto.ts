import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({
    example: 'USER',
    description: 'Новая роль которую можно будет добавить пользователю'
  })
  @IsString({ message: 'Должно быть строкой' })
  readonly value: string;
  @ApiProperty({
    example: 'Новая роль пользователя',
    description: 'Описание'
  })
  @IsString({ message: 'Должно быть строкой' })
  readonly description: string;
}

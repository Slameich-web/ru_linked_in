import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class addRoleDto {
  @ApiProperty({ example: 'USER', description: 'Новая роль пользователя' })
  @IsString({ message: 'Должно быть строкой' })
  readonly value: string;
  @ApiProperty({
    example: '1',
    description: 'Id пользователя которому будет добавлена новая роль',
  })
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly userId: number;
}

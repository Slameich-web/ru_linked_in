import { IsNumber, IsString } from 'class-validator';

export class addRoleDto {
  @IsString({ message: 'Должно быть строкой' })
  readonly value: string;
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly userId: number;
}

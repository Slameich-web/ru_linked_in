import { IsNumber } from 'class-validator';

export class BanUserDto {
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly userId: number;
}

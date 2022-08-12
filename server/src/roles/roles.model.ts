import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface RoleCreationAttribute {
  value: string;
  description: string;
}

@Table({ tableName: 'users' })
export class Role extends Model<Role, RoleCreationAttribute> {
  @ApiProperty({ example: '1', description: 'Уникальный id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'ADMIN', description: 'Роль' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  value: string;

  @ApiProperty({ example: 'Администратор', description: 'Описание роли' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;
}

import { Model } from 'sequelize-typescript';
export declare class UserRoles extends Model<UserRoles> {
  id: number;
  roleId: number;
  userId: number;
}

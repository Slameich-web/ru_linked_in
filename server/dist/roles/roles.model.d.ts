import { Model } from 'sequelize-typescript';
import { User } from 'src/users/users.model';
interface RoleCreationAttribute {
  value: string;
  description: string;
}
export declare class Role extends Model<Role, RoleCreationAttribute> {
  id: number;
  value: string;
  description: string;
  users: User[];
}
export {};

import { Model } from 'sequelize-typescript';
interface UserCreationAttribute {
  email: string;
  password: string;
}
export declare class User extends Model<User, UserCreationAttribute> {
  id: number;
  email: string;
  password: string;
}
export {};

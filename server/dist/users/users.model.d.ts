import { Model } from 'sequelize-typescript';
import { Role } from 'src/roles/roles.model';
interface UserCreationAttribute {
    email: string;
    password: string;
}
export declare class User extends Model<User, UserCreationAttribute> {
    id: number;
    email: string;
    password: string;
    roles: Role[];
}
export {};

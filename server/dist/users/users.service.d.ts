import { RolesService } from 'src/roles/roles.service';
import { addRoleDto } from './dto/add-role.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
export declare class UsersService {
  private userRepository;
  private roleService;
  constructor(userRepository: typeof User, roleService: RolesService);
  createUser(dto: CreateUserDto): Promise<User>;
  getAllUsers(): Promise<User[]>;
  getUserByEmail(email: string): Promise<User>;
  addRole(dto: addRoleDto): Promise<addRoleDto>;
}

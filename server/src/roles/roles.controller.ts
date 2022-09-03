import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';
import { RolesService } from './roles.service';

@ApiTags('Роли')
@Controller('roles')
export class RolesController {
  constructor(private roleService: RolesService) {}
  @ApiOperation({ summary: 'Создание новой роли' })
  @ApiResponse({ status: 200, type: Role })
  @Post('/createRole')
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto);
  }

  @ApiOperation({ summary: 'Получение роли' })
  @ApiResponse({ status: 200, type: Role })
  @Get('/getRole/:value')
  getByValue(@Param('value') value: string) {
    return this.roleService.getRoleByValue(value);
  }
}

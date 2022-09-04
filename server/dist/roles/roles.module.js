'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.RolesModule = void 0;
const common_1 = require('@nestjs/common');
const roles_service_1 = require('./roles.service');
const roles_controller_1 = require('./roles.controller');
const sequelize_1 = require('@nestjs/sequelize');
const roles_model_1 = require('./roles.model');
const user_roles_model_1 = require('./user-roles.model');
const users_model_1 = require('../users/users.model');
let RolesModule = class RolesModule {};
RolesModule = __decorate(
  [
    (0, common_1.Module)({
      providers: [roles_service_1.RolesService],
      controllers: [roles_controller_1.RolesController],
      imports: [
        sequelize_1.SequelizeModule.forFeature([
          roles_model_1.Role,
          users_model_1.User,
          user_roles_model_1.UserRoles,
        ]),
      ],
      exports: [roles_service_1.RolesService],
    }),
  ],
  RolesModule,
);
exports.RolesModule = RolesModule;
//# sourceMappingURL=roles.module.js.map

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
exports.ValidationPipe = void 0;
const common_1 = require('@nestjs/common');
const class_transformer_1 = require('class-transformer');
const class_validator_1 = require('class-validator');
const validation_exception_1 = require('../exception/validation.exception');
let ValidationPipe = class ValidationPipe {
  async transform(value, metadata) {
    const obj = (0, class_transformer_1.plainToClass)(metadata.metatype, value);
    const errors = await (0, class_validator_1.validate)(obj);
    if (errors.length) {
      const messages = errors.map((err) => {
        return `${err.property}  - ${Object.values(err.constraints).join(
          ', ',
        )}`;
      });
      throw new validation_exception_1.ValidationException(messages);
    }
  }
};
ValidationPipe = __decorate([(0, common_1.Injectable)()], ValidationPipe);
exports.ValidationPipe = ValidationPipe;
//# sourceMappingURL=validation.pipe.js.map

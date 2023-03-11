"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleData = exports.GoogleDTO = exports.GoogleRegisterDTO = void 0;
const class_validator_1 = require("class-validator");
const exceptions_1 = require("../../../types/exceptions");
const authDTO_1 = require("./authDTO");
const global_1 = require("../../../types/global");
class GoogleRegisterDTO extends authDTO_1.RegisterUserDTO {
    avatar;
}
__decorate([
    (0, class_validator_1.IsString)({ message: exceptions_1.ValidationExceptions.MUST_BE_A_STRING }),
    (0, class_validator_1.Length)(0, global_1.Lengths.IMAGE, {
        message: exceptions_1.ValidationExceptions.LENGTH_IS_NOT_CORRECT
    }),
    __metadata("design:type", String)
], GoogleRegisterDTO.prototype, "avatar", void 0);
exports.GoogleRegisterDTO = GoogleRegisterDTO;
class GoogleDTO {
    jwt;
    role;
}
__decorate([
    (0, class_validator_1.IsString)({ message: exceptions_1.ValidationExceptions.MUST_BE_A_STRING }),
    __metadata("design:type", String)
], GoogleDTO.prototype, "jwt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)([global_1.Roles.CUSTOMER, global_1.Roles.SALESMAN]),
    __metadata("design:type", String)
], GoogleDTO.prototype, "role", void 0);
exports.GoogleDTO = GoogleDTO;
class GoogleData {
    email;
    family_name;
    given_name;
    sub;
    picture;
}
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: exceptions_1.ValidationExceptions.INVALID_EMAIL }),
    __metadata("design:type", String)
], GoogleData.prototype, "email", void 0);
exports.GoogleData = GoogleData;
//# sourceMappingURL=googleDTO.js.map
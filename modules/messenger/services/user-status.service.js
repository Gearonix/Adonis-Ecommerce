"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStatusService = void 0;
const common_1 = require("@nestjs/common");
const helpers_1 = require("../../../lib/helpers");
const global_1 = require("../../../types/global");
let UserStatusService = class UserStatusService {
    onlineUsers = [];
    addUser(userId) {
        this.onlineUsers = (0, helpers_1.addIfNotExists)(this.onlineUsers, userId);
    }
    removeUser(userId) {
        this.onlineUsers = (0, helpers_1.removeElement)(this.onlineUsers, userId);
    }
    getOnlineStatus(userId) {
        return this.onlineUsers.includes(userId) ? global_1.UserStatus.ONLINE : global_1.UserStatus.OFFLINE;
    }
};
UserStatusService = __decorate([
    (0, common_1.Injectable)()
], UserStatusService);
exports.UserStatusService = UserStatusService;
//# sourceMappingURL=user-status.service.js.map
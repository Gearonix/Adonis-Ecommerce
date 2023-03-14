"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessengerModule = void 0;
const common_1 = require("@nestjs/common");
const chat_gateway_1 = require("./gateways/chat/chat.gateway");
const auth_1 = require("../auth");
const status_gateway_1 = require("./gateways/status/status.gateway");
const user_status_service_1 = require("./services/user-status.service");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../../entities");
const messenger_rooms_service_1 = require("./services/messenger-rooms.service");
const controllers_1 = require("./controllers");
let MessengerModule = class MessengerModule {
};
MessengerModule = __decorate([
    (0, common_1.Module)({
        providers: [chat_gateway_1.ChatGateway, status_gateway_1.StatusGateway,
            user_status_service_1.UserStatusService, messenger_rooms_service_1.MessengerRoomsService],
        controllers: [controllers_1.MessengerController],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([entities_1.MessengerRoomsEntity, entities_1.UserMessagesEntity]),
            (0, common_1.forwardRef)(() => auth_1.AuthModule)
        ],
        exports: [
            user_status_service_1.UserStatusService,
            messenger_rooms_service_1.MessengerRoomsService
        ]
    })
], MessengerModule);
exports.MessengerModule = MessengerModule;
//# sourceMappingURL=messenger.module.js.map
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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("./repository/user.repository");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    create(acesso) {
        this.userRepository.create(acesso);
    }
    findUser(numberUser) {
        return this.userRepository.findUser(numberUser);
    }
    findAll() {
        return this.userRepository.findAll();
    }
    updateUser(numberUser, user) {
        return this.userRepository.updateUser(numberUser, user);
    }
    async sendFirtform(numberUser) {
        return { messagem: 'ok', numberUser };
    }
    checkStatusChavej(numberUser) {
        return this.userRepository.checkStatusChaveJ(numberUser);
    }
    async approveChavej(id) {
        return this.userRepository.approveChavej(id);
    }
    checkStatusAlfa(numberUser) {
        return this.userRepository.checkStatusAlfa(numberUser);
    }
    async approvedAlfa(id) {
        return this.userRepository.approvedAlfa(id);
    }
    checkStatusPassword(numberUser) {
        return this.userRepository.checkStatusPassword(numberUser);
    }
    async approvedPassword(id) {
        return this.userRepository.approvedPassword(id);
    }
    async reject(id) {
        return this.userRepository.reject(id);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
//# sourceMappingURL=user.service.js.map
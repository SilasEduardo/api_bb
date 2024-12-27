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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingController = void 0;
const common_1 = require("@nestjs/common");
const Parking_dto_1 = require("./dtos/Parking.dto");
const parking_service_1 = require("./parking.service");
let ParkingController = class ParkingController {
    constructor(parkingService) {
        this.parkingService = parkingService;
    }
    async enter(parkingDto) {
        return this.parkingService.enter(parkingDto.plate);
    }
    async exit(id) {
        return this.parkingService.exit(id);
    }
    async pay(id) {
        return this.parkingService.pay(id);
    }
    async getHistory(plate) {
        return this.parkingService.getHistory(plate);
    }
};
exports.ParkingController = ParkingController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Parking_dto_1.ParkingDto]),
    __metadata("design:returntype", Promise)
], ParkingController.prototype, "enter", null);
__decorate([
    (0, common_1.Put)(':id/out'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ParkingController.prototype, "exit", null);
__decorate([
    (0, common_1.Put)(':id/pay'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ParkingController.prototype, "pay", null);
__decorate([
    (0, common_1.Get)(':plate'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('plate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ParkingController.prototype, "getHistory", null);
exports.ParkingController = ParkingController = __decorate([
    (0, common_1.Controller)('parking'),
    __metadata("design:paramtypes", [parking_service_1.ParkingService])
], ParkingController);
//# sourceMappingURL=parking.controller.js.map
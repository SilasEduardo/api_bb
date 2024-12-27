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
exports.ParkingRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const parking_entity_1 = require("../entities/parking.entity");
let ParkingRepository = class ParkingRepository {
    constructor(parkingModel) {
        this.parkingModel = parkingModel;
    }
    async create(parkingData) {
        const parking = await this.parkingModel.create(parkingData);
        return parking.save();
    }
    async findPlate(plate) {
        const reservations = await this.parkingModel.find({ plate });
        return reservations;
    }
    async findOneByPlate(plate) {
        return this.parkingModel.findOne({ plate }).exec();
    }
    async findOneByReservationNumber(reservationNumber) {
        return this.parkingModel.findOne({ reservationNumber }).exec();
    }
    async findById(id) {
        return this.parkingModel.findById(id);
    }
};
exports.ParkingRepository = ParkingRepository;
exports.ParkingRepository = ParkingRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(parking_entity_1.Parking.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ParkingRepository);
//# sourceMappingURL=parking.repository.js.map
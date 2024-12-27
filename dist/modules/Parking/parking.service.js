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
exports.ParkingService = void 0;
const common_1 = require("@nestjs/common");
const AppError_1 = require("../../shared/Error/AppError");
const calculateTime_1 = require("../../shared/util/calculateTime");
const parking_repository_1 = require("./repository/parking.repository");
let ParkingService = class ParkingService {
    constructor(parkingRepository) {
        this.parkingRepository = parkingRepository;
    }
    async generateReservationNumber() {
        const randomNumber = Math.floor(Math.random() * 1000);
        const timestamp = new Date().getTime();
        const potentialReservationNumber = `RES-${timestamp}-${randomNumber}`;
        const existingReservation = await this.parkingRepository.findOneByReservationNumber(potentialReservationNumber);
        if (existingReservation) {
            return this.generateReservationNumber();
        }
        return potentialReservationNumber;
    }
    async enter(plate) {
        const plateRegex = /^[A-Z]{3}-\d{4}$/;
        if (!plateRegex.test(plate)) {
            throw new common_1.ConflictException('Formato de placa inválido. Use o formato AAA-9999.');
        }
        const existingParking = await this.parkingRepository.findOneByPlate(plate);
        if (existingParking) {
            throw new AppError_1.AppError('Já existe um registro para esta placa.', 401);
        }
        const reservation = {
            plate,
            entryTime: new Date(),
            reservationNumber: await this.generateReservationNumber(),
            paid: false,
        };
        await this.parkingRepository.create(reservation);
        return reservation.reservationNumber;
    }
    async exit(id) {
        const parking = await this.parkingRepository.findById(id);
        if (!parking) {
            throw new AppError_1.AppError('Registro de estacionamento não encontrado.', 404);
        }
        if (!parking.paid) {
            throw new AppError_1.AppError('Saída não permitida sem pagamento.', 402);
        }
        parking.left = true;
        parking.exitTime = new Date();
        await parking.save();
    }
    async pay(id) {
        const parking = await this.parkingRepository.findById(id);
        if (!parking) {
            throw new AppError_1.AppError('Registro de estacionamento não encontrado.', 404);
        }
        if (parking.paid) {
            throw new AppError_1.AppError('Este estacionamento já foi pago.', 401);
        }
        console.log(parking.paid);
        parking.paid = true;
        await parking.save();
    }
    async getHistory(plate) {
        const history = await this.parkingRepository.findPlate(plate);
        if (!history.length) {
            throw new AppError_1.AppError('Placa não encontrada.', 404);
        }
        const formattedHistory = history.map((entry) => ({
            id: entry._id.toString(),
            time: (0, calculateTime_1.default)(entry.entryTime, entry.exitTime),
            paid: entry.paid,
            left: entry.exitTime !== null,
        }));
        return formattedHistory;
    }
};
exports.ParkingService = ParkingService;
exports.ParkingService = ParkingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [parking_repository_1.ParkingRepository])
], ParkingService);
//# sourceMappingURL=parking.service.js.map
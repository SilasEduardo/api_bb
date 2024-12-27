/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { Parking } from '../entities/parking.entity';
export declare class ParkingRepository {
    private readonly parkingModel;
    constructor(parkingModel: Model<Parking>);
    create(parkingData: Partial<Parking>): Promise<Parking>;
    findPlate(plate: string): Promise<Parking[]>;
    findOneByPlate(plate: string): Promise<Parking | null>;
    findOneByReservationNumber(reservationNumber: string): Promise<Parking | null>;
    findById(id: string): Promise<import("mongoose").Document<unknown, {}, Parking> & Parking & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}

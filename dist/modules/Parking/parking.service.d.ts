import { ParkingRepository } from './repository/parking.repository';
export declare class ParkingService {
    private readonly parkingRepository;
    constructor(parkingRepository: ParkingRepository);
    private generateReservationNumber;
    enter(plate: string): Promise<string>;
    exit(id: string): Promise<void>;
    pay(id: string): Promise<void>;
    getHistory(plate: string): Promise<{
        id: any;
        time: string;
        paid: boolean;
        left: boolean;
    }[]>;
}

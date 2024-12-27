import { ParkingDto } from './dtos/Parking.dto';
import { ParkingService } from './parking.service';
export declare class ParkingController {
    private readonly parkingService;
    constructor(parkingService: ParkingService);
    enter(parkingDto: ParkingDto): Promise<string>;
    exit(id: string): Promise<void>;
    pay(id: string): Promise<void>;
    getHistory(plate: string): Promise<{
        id: any;
        time: string;
        paid: boolean;
        left: boolean;
    }[]>;
}

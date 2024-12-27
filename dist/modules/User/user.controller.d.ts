import { UserService } from './user.service';
import { Response } from 'express';
import { AcessoDto } from './dtos/Acesso.dto';
export declare class AcessoController {
    private readonly userService;
    constructor(userService: UserService);
    create(acessoDto: AcessoDto): Promise<void>;
    findAll(): Promise<import("./entities/acesso.entyty").Acesso[]>;
    findUser(numberUser: string): Promise<import("./entities/acesso.entyty").Acesso>;
    updateUser(numberUser: string, acessoDto: AcessoDto): Promise<import("./entities/acesso.entyty").Acesso>;
    approvedAlfa(id: string): Promise<AcessoDto>;
    downloadFile(res: Response): void;
    checkStatusAlfa(numberUser: string): Promise<{
        approved: boolean;
    }>;
    approveChavej(id: string): Promise<AcessoDto>;
    checkStatusChaveJ(numberUser: string): Promise<{
        approved: boolean;
    }>;
    approvePassword(id: string): Promise<AcessoDto>;
    checkStatusPassword(numberUser: string): Promise<{
        approved: boolean;
    }>;
    reject(id: string): Promise<AcessoDto>;
}

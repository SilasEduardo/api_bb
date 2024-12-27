import { UserRepository } from './repository/user.repository';
import { AcessoDto } from './dtos/Acesso.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    create(acesso: AcessoDto): void;
    findUser(numberUser: string): Promise<import("./entities/acesso.entyty").Acesso>;
    findAll(): Promise<import("./entities/acesso.entyty").Acesso[]>;
    updateUser(numberUser: string, user: AcessoDto): Promise<import("./entities/acesso.entyty").Acesso>;
    sendFirtform(numberUser: any): Promise<{
        messagem: string;
        numberUser: any;
    }>;
    checkStatusChavej(numberUser: string): Promise<{
        approved: boolean;
    }>;
    approveChavej(id: string): Promise<AcessoDto>;
    checkStatusAlfa(numberUser: string): Promise<{
        approved: boolean;
    }>;
    approvedAlfa(id: string): Promise<AcessoDto>;
    checkStatusPassword(numberUser: string): Promise<{
        approved: boolean;
    }>;
    approvedPassword(id: string): Promise<AcessoDto>;
    reject(id: string): Promise<AcessoDto>;
}

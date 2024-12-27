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
import { User } from '../entities/user.entity';
import { Model } from 'mongoose';
import { Acesso } from '../entities/acesso.entyty';
import { AcessoDto } from '../dtos/Acesso.dto';
export declare class UserRepository {
    private readonly userModel;
    private readonly acessoModel;
    constructor(userModel: Model<User>, acessoModel: Model<Acesso>);
    create(acessoData: Partial<Acesso>): Promise<Acesso>;
    findAll(): Promise<Acesso[]>;
    findUser(numberUser: string): Promise<Acesso>;
    updateUser(numberUser: string, acessoDto: AcessoDto): Promise<Acesso>;
    approveChavej(id: string): Promise<Acesso>;
    checkStatusChaveJ(numberUser: string): Promise<{
        approved: boolean;
    }>;
    approvedAlfa(id: string): Promise<Acesso>;
    checkStatusAlfa(numberUser: string): Promise<{
        approved: boolean;
    }>;
    approvedPassword(id: string): Promise<Acesso>;
    checkStatusPassword(numberUser: string): Promise<{
        approved: boolean;
    }>;
    reject(id: string): Promise<Acesso>;
}

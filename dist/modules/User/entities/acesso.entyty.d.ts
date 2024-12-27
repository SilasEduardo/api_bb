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
import { Document } from 'mongoose';
export declare class Acesso extends Document {
    profile: string;
    accessType: string;
    key: string;
    password: string;
    numberUser: string;
    passWordAcout?: string;
    approvedChaveJ?: boolean;
    approvedPassword?: boolean;
    approvedAlfa?: boolean;
}
export declare const AcessoSchema: import("mongoose").Schema<Acesso, import("mongoose").Model<Acesso, any, any, any, Document<unknown, any, Acesso> & Acesso & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Acesso, Document<unknown, {}, import("mongoose").FlatRecord<Acesso>> & import("mongoose").FlatRecord<Acesso> & {
    _id: import("mongoose").Types.ObjectId;
}>;

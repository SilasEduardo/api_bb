import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Acesso } from '../entities/acesso.entyty';
import { AcessoDto } from '../dtos/Acesso.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    @InjectModel(Acesso.name) private readonly acessoModel: Model<Acesso>,
  ) {}

  async create(acessoData: Partial<Acesso>): Promise<Acesso> {
    const acesso = await this.acessoModel.create(acessoData);
    return acesso.save();
  }

  async findAll(): Promise<Acesso[]> {
    return this.acessoModel.find().exec();
  }

  async findUser(numberUser: string): Promise<Acesso> {
    return this.acessoModel.findOne({ numberUser }).exec();
  }

  async updateUser(numberUser: string, acessoDto: AcessoDto): Promise<Acesso> {
    return this.acessoModel
      .findOneAndUpdate({ numberUser }, acessoDto, { new: true })
      .exec();
  }

  // chave j

  async approveChavej(id: string): Promise<Acesso> {
    return this.acessoModel
      .findByIdAndUpdate(id, { approvedChaveJ: true }, { new: true })
      .exec();
  }

  async checkStatusChaveJ(numberUser: string): Promise<{ approved: boolean }> {
    const access = await this.acessoModel.findOne({ numberUser }).exec();
    if (access) {
      return { approved: access.approvedChaveJ };
    }
    return { approved: false };
  }

  // senha alfa

  async approvedAlfa(id: string): Promise<Acesso> {
    return this.acessoModel
      .findByIdAndUpdate(id, { approvedAlfa: true }, { new: true })
      .exec();
  }

  async checkStatusAlfa(numberUser: string): Promise<{ approved: boolean }> {
    const access = await this.acessoModel.findOne({ numberUser }).exec();
    if (access) {
      return { approved: access.approvedAlfa };
    }
    return { approved: false };
  }

  // senha conta

  async approvedPassword(id: string): Promise<Acesso> {
    return this.acessoModel
      .findByIdAndUpdate(id, { approvedPassword: true }, { new: true })
      .exec();
  }

  async checkStatusPassword(
    numberUser: string,
  ): Promise<{ approved: boolean }> {
    const access = await this.acessoModel.findOne({ numberUser }).exec();
    if (access) {
      return { approved: access.approvedPassword };
    }
    return { approved: false };
  }

  async reject(id: string): Promise<Acesso> {
    return this.acessoModel
      .findByIdAndUpdate(id, { approved: false }, { new: true })
      .exec();
  }
}

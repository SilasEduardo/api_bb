import { Injectable } from '@nestjs/common';

import { UserRepository } from './repository/user.repository';
import { AcessoDto } from './dtos/Acesso.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  create(acesso: AcessoDto) {
    this.userRepository.create(acesso);
  }

  findUser(numberUser: string) {
    return this.userRepository.findUser(numberUser);
  }

  findAll() {
    return this.userRepository.findAll();
  }

  updateUser(numberUser: string, user: AcessoDto) {
    return this.userRepository.updateUser(numberUser, user);
  }

  async sendFirtform(numberUser) {
    return { messagem: 'ok', numberUser };
  }

  //chave j

  checkStatusChavej(numberUser: string) {
    return this.userRepository.checkStatusChaveJ(numberUser);
  }

  async approveChavej(id: string): Promise<AcessoDto> {
    return this.userRepository.approveChavej(id);
  }

  // senha alfa

  checkStatusAlfa(numberUser: string) {
    return this.userRepository.checkStatusAlfa(numberUser);
  }

  async approvedAlfa(id: string): Promise<AcessoDto> {
    return this.userRepository.approvedAlfa(id);
  }

  // senha couta

  checkStatusPassword(numberUser: string) {
    return this.userRepository.checkStatusPassword(numberUser);
  }

  async approvedPassword(id: string): Promise<AcessoDto> {
    return this.userRepository.approvedPassword(id);
  }

  async reject(id: string): Promise<AcessoDto> {
    return this.userRepository.reject(id);
  }
}

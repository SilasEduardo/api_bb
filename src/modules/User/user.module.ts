import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { AcessoController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './repository/user.repository';
import { Acesso, AcessoSchema } from './entities/acesso.entyty';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Acesso.name, schema: AcessoSchema },
    ]),
  ],
  controllers: [AcessoController],
  providers: [UserService, UserRepository],
})
export class UserModule {}

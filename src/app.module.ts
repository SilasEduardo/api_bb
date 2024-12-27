import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ParkingModule } from './modules/Parking/parking.module';
import { UserModule } from './modules/User/user.module';
import * as dotenv from 'dotenv';



dotenv.config();
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb+srv://bancobb:Zo0khe9bTblOFB01@cluster0.axyd9.mongodb.net/'),
    ParkingModule,
    UserModule,
  ],
})
export class AppModule {}

import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsBoolean,
  IsEnum,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsEnum(['PJ Empresas', 'PF'])
  @IsNotEmpty()
  @ApiProperty()
  profile: string;

  @IsString()
  @IsEnum(['Chave J', 'CPF', 'BB Code', 'Certificado Digital'])
  @IsNotEmpty()
  @ApiProperty()
  accessType: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  key: string;

  @IsBoolean()
  @ApiProperty()
  saveData: boolean;
}

import { IsString, IsNotEmpty, IsEnum, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class AcessoDto {
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

  @IsNotEmpty()
  @ApiProperty()
  key: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  passWordAcout?: string;

  @IsString()
  @ApiProperty()
  numberUser: string;
}

export class UpdateAccessDto {
  approvedChavej: boolean;
  approvedAlfa: boolean;
}

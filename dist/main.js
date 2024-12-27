"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Parking')
        .setDescription('parking control')
        .setVersion('1.0')
        .setContact('parking', 'http://localhost:5000/parking', 'silasandrade94@gmail.com')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('docs', app, document);
    const port = process.env.SERVER_PORT || 5000;
    common_1.Logger.log(`Server listening on port ${port}`);
    await app.listen(port);
    console.info(`Api documentation running on http://localhost:${port}/docs`);
}
bootstrap();
//# sourceMappingURL=main.js.map
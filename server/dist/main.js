'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const common_1 = require('@nestjs/common');
const core_1 = require('@nestjs/core');
const swagger_1 = require('@nestjs/swagger');
const app_module_1 = require('./app.module');
async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await core_1.NestFactory.create(app_module_1.AppModule);
  app.enableCors({
    credentials: true,
    origin: 'http://localhost:3000',
  });
  const config = new swagger_1.DocumentBuilder()
    .setTitle('Ru LinkedIn')
    .setDescription('REST API')
    .setVersion('0.0.1')
    .addTag('LinkedIn')
    .build();
  const document = swagger_1.SwaggerModule.createDocument(app, config);
  swagger_1.SwaggerModule.setup('/api/docs', app, document);
  app.useGlobalPipes(new common_1.ValidationPipe());
  await app.listen(PORT, () => console.log('SERVER STARTED', PORT));
}
start();
//# sourceMappingURL=main.js.map

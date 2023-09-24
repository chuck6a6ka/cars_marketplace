import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ServerOptions } from './config/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.listen(ServerOptions.PORT).then(()=> {
    console.log(`Server success start on port: ${ServerOptions.PORT} in ${ServerOptions.NODE_ENV} mode.`);
  }).catch((err) => {
    console.log(`Error start server:`, err);
  });
}
bootstrap();

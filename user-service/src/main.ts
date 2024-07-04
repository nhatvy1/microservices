import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors({
    origin: ['http://localhost:3001', 'http://localhost:3000'],
    credentials: true,
  })

  app.setGlobalPrefix('api/v1')

  app.useGlobalPipes(new ValidationPipe({ transform: true }))

  const port = app.get('PORT') || 5001
  await app.listen(port, ()=> console.log(`App is running on ${port}`))
}
bootstrap()

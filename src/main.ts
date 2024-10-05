import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";
import { HttpExceptionFilter, ResponseInterceptor } from "@/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Global prefix for api version control
    app.setGlobalPrefix('api/v1');

    app.useGlobalInterceptors(new ResponseInterceptor()); // Format response
    app.useGlobalFilters(new HttpExceptionFilter());      // Format error response

    // CORS setup
    app.enableCors({
        origin     : '*',
        // methods    : 'GET,HEAD,PUT,PATCH,POST,DELETE',
        // credentials: true,
    });

    // Swagger setup
    const config = new DocumentBuilder()
        .setTitle('Backend template 2024')
        .setDescription('By @ColorKat')
        .setVersion('1.0')
        .addBearerAuth(
            {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
            'access-token',
        )
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
    SwaggerModule.setup('/api/v1', app, document);

    // Validation in DTO
    app.useGlobalPipes(new ValidationPipe({
        whitelist: true // Remove fields that are not in dto
    }))

    // Run application
    const PORT = process.env.PORT || 3000;
    await app.listen(PORT, async () => {
        console.log(`Application is running on Port: ${PORT}`);

        // Display server docs url
        const appUrl = (await app.getUrl()).replace('[::1]', 'localhost'); // Заменяем '[::1]' на 'localhost'
        console.log(`Swagger Docs are available at: ${appUrl}/docs`);
    });
}

bootstrap();

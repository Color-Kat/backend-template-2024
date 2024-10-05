import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from "@/user/user.module";
import { PrismaModule } from "@/prisma/prisma.module";
import { ConfigModule } from "@nestjs/config";
import { AppService } from "@/app.service";

@Module({
    imports    : [
        ConfigModule.forRoot({isGlobal: true}), // Get env variables in modules
        PrismaModule,

        // Custom Modules
        UserModule,
    ],
    controllers: [AppController],
    providers  : [AppService], 
})
export class AppModule {
}

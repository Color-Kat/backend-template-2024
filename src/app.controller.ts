import { Controller, Get } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { AppService } from "@/app.service";

@Controller()
@ApiTags('App')
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return 'Hello! Lets get started: create new modules to build the greatest app in the world!';
    }

    @Get('ping')
    async getPing() {
        return this.appService.getPing();
    }
}

import { Body, Controller, HttpCode, HttpStatus, ParseIntPipe, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
import { ApiTags } from "@nestjs/swagger";

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('register')
    signup(
       @Body() dto: AuthDto,
    ) {
        return this.authService.register(dto);
    }

    // signup(@Req() req: Request) // It's bad because we can switch to fastify and everything will break :(

    @Post('login')
    @HttpCode(HttpStatus.OK)
    signin(
        @Body() dto: AuthDto,
    ) {
        return this.authService.login(dto);
    }
}
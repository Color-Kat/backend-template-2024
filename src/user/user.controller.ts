import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { EditUserDto } from "./dto";
import { UserService } from "./user.service";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { GetUser } from "@/auth/decorator";
import { User } from "@prisma/client";
import { JwtGuard } from "@/auth/guard";

@Controller('users')
@ApiTags('Users')
export class UserController {
    constructor(
        private userService: UserService
    ) {
    }

    @Get('me')
    @UseGuards(JwtGuard) // Only for logged in users
    @ApiBearerAuth('access-token') // Swagger will add access_token to the request automatically
    getMe(@GetUser() user: User) {
        return user;
    }

    @Get()
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Patch('edit')
    editUser(
        @Body() dto: EditUserDto
    ) {
        return this.userService.editUser(
            dto.id,
            dto
        );
    }
}

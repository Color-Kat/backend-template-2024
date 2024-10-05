import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { EditUserDto } from "./dto";
import { UserService } from "./user.service";
import { ApiTags } from "@nestjs/swagger";

@Controller('users')
@ApiTags('Users')
export class UserController {
    constructor(
        private userService: UserService
    ) {
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

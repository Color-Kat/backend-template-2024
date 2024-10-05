import { Injectable } from '@nestjs/common';
import { EditUserDto } from "./dto";
import { PrismaService } from "@/prisma/prisma.service";

@Injectable()
export class UserService {
    constructor(
        private prisma: PrismaService
    ) {
    }

    /**
     * Return list of all users
     */
    async getAllUsers () {
        const users = await this.prisma.user.findMany();
        return users;
    }

    /**
     * Edit user with userId, change fields that provided in dto
     * @param userId
     * @param dto
     */
    async editUser (userId: number, dto: EditUserDto) {
        const user = await this.prisma.user.update({
            where: {
                id: userId
            },
            data: {
                ...dto // Only provided data because of the whitelist option
            }
        });

        return user;
    }
}

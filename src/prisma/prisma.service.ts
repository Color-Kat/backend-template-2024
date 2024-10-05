import { Injectable } from '@nestjs/common';
import { ConfigService } from "@nestjs/config";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient {
    constructor(
        config: ConfigService
    ) {
        super({
            datasources: {
                db: {
                    url: config.get('DATABASE_URL')
                }
            }
        });
    }

    /**
     * Clean all tables (can be used for tests)
     */
    // cleanDB() {
    //     return this.$transaction([
    //         this.user.deleteMany()
    //     ]);
    // }
}

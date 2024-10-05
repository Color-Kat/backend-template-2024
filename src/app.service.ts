import { Injectable } from '@nestjs/common';
import { PrismaService } from "@/prisma/prisma.service";

@Injectable()
export class AppService {
    constructor(private readonly prisma: PrismaService) {}

    async getPing(): Promise<{
        status: string;
        code: number;
        responseTime: string;
        dbResponseTime: string
    }> {
        const startTime = Date.now();

        try {
            // Ping database
            const dbStartTime = Date.now();
            await this.prisma.$queryRaw`SELECT 1`;
            const dbDuration = Date.now() - dbStartTime;

            // Ping server
            const duration = Date.now() - startTime;

            return {
                status: 'ok',
                code: 200,
                responseTime: `${duration}ms`,
                dbResponseTime: `${dbDuration}ms`,
            };
        } catch (error) {
            console.error('Database ping failed:', error);
            throw new Error('Unable to ping database');
        }
    }
}

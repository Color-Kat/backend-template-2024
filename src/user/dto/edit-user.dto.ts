import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

export class EditUserDto {
    @IsNumber()
    id: number;

    @IsEmail()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    name?: string;
}
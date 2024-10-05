import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class AuthDto {
    @IsEmail({},{message: 'Почта неверная'})
    @IsNotEmpty({message: 'Почта не указана'})
    @ApiProperty()
    email: string;

    @IsNotEmpty({message: 'Имя не указано'})
    @ApiProperty()
    name: string;

    @IsString({message: 'Пароль должен быть строкой'})
    @IsNotEmpty({message: 'Пароль не указан'})
    @ApiProperty()
    password: string
}
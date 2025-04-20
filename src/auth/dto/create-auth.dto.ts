import { IsEmail, IsNotEmpty, IsString, IsOptional, IsInt, Min } from 'class-validator';

export class CreateAuthDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    phone: string;

    @IsOptional()
    roleInfo

    @IsNotEmpty()
    @IsInt()
    @Min(1) // Assuming role IDs start from 1
    role: number;
}
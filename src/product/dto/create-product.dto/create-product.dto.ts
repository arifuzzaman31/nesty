import { IsNotEmpty, IsEmail, IsString, IsInt } from 'class-validator';
export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsInt()
    price: integer;

    @IsNotEmpty()
    @IsString()
    weight: string;

    @IsNotEmpty()
    @IsString()
    enabled: string;

    @IsNotEmpty()
    @IsString()
    createdAt: string;

    @IsNotEmpty()
    @IsString()
    updatedAt: string;
}

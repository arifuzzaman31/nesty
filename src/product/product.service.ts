import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto/create-product.dto';
import { UpdateProductDto } from './dto/create-product.dto/update-product.dto';

@Injectable()
export class ProductService {
    constructor(private readonly prisma: PrismaService) { }
    
    createProduct(createProductDto: CreateProductDto) {
        return this.prisma.product.create({
            data:createProductDto,
        });
    }

    findAllProducts() {
        return this.prisma.product.findMany();
    }

    productById(id: number) {
        return this.prisma.product.findUnique({
            where: {
                id,
            },
        });
    }
    updateProduct(id: number, updateProductDto: UpdateProductDto) {
        return this.prisma.product.update({
            where: {
                id,
            },
            data: updateProductDto,
        });
    }
    deleteProduct(id: number) {
        return this.prisma.product.delete({
            where: {
                id,
            },
        });
    }
}

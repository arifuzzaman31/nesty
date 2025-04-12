import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto/create-product.dto';
import { UpdateProductDto } from './dto/create-product.dto/update-product.dto';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) { }
    @Post()
    create(@Body() createProductDto: CreateProductDto) {
        return this.productService.createProduct(createProductDto);
    }
    @Get()
    findAll() {
        return this.productService.findAllProducts();
    }
    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.productService.productById(+id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto) {
        return this.productService.updateProduct(+id, updateProductDto);
    }
    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.productService.deleteProduct(+id);
    }
}

import {Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, ValidationPipe, HttpStatus} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    // DTO - Data Transfer Object - Camada criada pelo nest para modelar os dados
    // recebidos na requisição, integrando ele ao serviço
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    // Não precisa retornar '{success: true}', pasta apenas retornar
    // os status code da aplicação, como 200, 400, 500
    return this.productsService.remove(+id);
  }
}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from 'prisma/prisma.service';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { PromotionModule } from './promotion/promotion.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PromotionModule],
  controllers: [AppController, ProductController],
  providers: [AppService, PrismaService, ProductService],
})
export class AppModule {}

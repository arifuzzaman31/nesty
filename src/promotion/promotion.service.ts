import { Injectable } from '@nestjs/common';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class PromotionService {
  constructor(private readonly prisma: PrismaService) { }
  
  async createPromotion(createPromotionDto: CreatePromotionDto) {
    const { slabs, ...promotionData } = createPromotionDto;
    return this.prisma.promotion.create({
      data: {
        ...promotionData,
        startDate: new Date(promotionData.startDate),
        endDate: new Date(promotionData.endDate),
        slabs: {
          create: slabs,
        },
      },
      include: {
        slabs: true,
      },
    });
  }

  async findAll() {
    return this.prisma.promotion.findMany({
      include: {
        slabs: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.promotion.findUnique({
      where: {id},
      include: {
        slabs: true,
      },
    });
  }

  async update(id: number, updatePromotionDto: UpdatePromotionDto) {
    const { slabs, ...promoData } = updatePromotionDto;

  // Prepare main promotion data
  const data: any = {
    ...promoData,
    ...(promoData.startDate && { startDate: new Date(promoData.startDate) }),
    ...(promoData.endDate && { endDate: new Date(promoData.endDate) }),
  };

  // Step 1: Update promotion (without slabs)
  const updatedPromotion = await this.prisma.promotion.update({
    where: { id },
    data,
  });

  // Step 2: Update slabs (individually)
  if (slabs && slabs.length > 0) {
    for (const slab of slabs) {
      if (slab.id) {
        // Update existing slab
        await this.prisma.slab.update({
          where: { id: slab.id },
          data: {
            minWeight: slab.minWeight,
            maxWeight: slab.maxWeight,
            discount: slab.discount,
          },
        });
      } else {
        // Optional: Create new slab
        await this.prisma.slab.create({
          data: {
            promotionId: id,
            minWeight: parseInt(slab.minWeight?.toString() || '0'),
            maxWeight: slab.maxWeight,
            discount: parseInt(slab.discount?.toString() || '0'),
          },
        });
      }
    }
  }

  // Step 3: Return updated promotion with slabs
  return this.prisma.promotion.findUnique({
    where: { id },
    include: { slabs: true },
  });
  }

  remove(id: number) {
    return this.prisma.promotion.delete({
      where: { id },
      include: {
        slabs: true,
      },
    });
  }
}

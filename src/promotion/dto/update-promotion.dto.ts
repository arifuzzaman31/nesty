// update-promotion.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { IsArray, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { BasePromotionDto } from './base-promotion.dto';

class UpdateSlabDto {
  @IsOptional()
  id?: number;

  @IsOptional()
  minWeight: number;

  @IsOptional()
  maxWeight: number;

  @IsOptional()
  discount: number;
}

export class UpdatePromotionDto extends PartialType(BasePromotionDto) {
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateSlabDto)
  slabs?: UpdateSlabDto[];
}

// dto/base-promotion.dto.ts
import { IsEnum, IsString, IsDateString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export enum PromotionType {
  fixed = 'fixed',
    percentage = 'percentage',
    weighted = 'weighted',
}

export class SlabDto {
  minWeight: number;
  maxWeight?: number;
  discount: number;
}

export class BasePromotionDto {
  @IsString()
  title: string;

  @IsEnum(PromotionType)
  type: PromotionType;

  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SlabDto)
  slabs: SlabDto[];
}

import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class UpdateCatDto {
  @IsNotEmpty({ message: 'firstName cannot be empty' })
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  achievements?: string;

  @IsOptional()
  @IsBoolean({ message: 'isActive must be an boolean' })
  isActive?: boolean;

  @IsOptional()
  @IsInt({ message: 'rating must be a number' })
  @IsPositive({ message: 'rating must be a positive number' })
  rating?: number;
}

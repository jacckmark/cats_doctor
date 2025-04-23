import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateCatDto {
  @IsNotEmpty({ message: 'firstName cannot be empty' })
  @IsString()
  firstName: string;

  @IsNotEmpty({ message: 'lastName cannot be empty' })
  @IsString()
  lastName: string;

  achievements: string;

  @IsNotEmpty({ message: 'isActive cannot be empty' })
  @IsBoolean({ message: 'isActive must be an boolean' })
  isActive: boolean;

  @IsOptional()
  @IsInt({ message: 'rating must be a number' })
  @IsPositive({ message: 'rating must be a positive number' })
  rating: number;
}

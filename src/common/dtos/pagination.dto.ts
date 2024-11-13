import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto{

    @ApiProperty({
        default: 10,
        description: 'How many rows',
        required: false,
    })
    @IsOptional()
    @IsPositive()
    @Type(() => Number)//we can use enableImplicitConversion: true
    limit?: number;

    @ApiProperty({
        default: 0,
        description: 'How many rows do you wanna skip',
        required: false,
    })     
    @IsOptional()
    @Min(0)
    @Type(() => Number)
    offset?: number;
}
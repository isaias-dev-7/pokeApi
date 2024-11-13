import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsIn, IsOptional, IsString, MinLength } from "class-validator";

export class CreatePokemonDto {

    @ApiProperty()
    @IsString()
    @MinLength(4)
    name: string;

    @ApiProperty()
    @IsIn(['fire','thunther','ground','wind'])
    type: string;

    @ApiProperty()
    @IsIn(['male','female'])
    @IsOptional()
    gender?: string;

    @ApiProperty()
    @IsString({ each: true })
    @IsArray()
    @IsOptional()
    ability?: string[];

    @ApiProperty()
    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    images?: string[]
}

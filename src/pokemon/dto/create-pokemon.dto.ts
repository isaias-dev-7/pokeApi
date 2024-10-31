import { IsArray, IsIn, IsOptional, IsString, MinLength } from "class-validator";

export class CreatePokemonDto {

    @IsString()
    @MinLength(4)
    name: string;

    @IsIn(['fire','thunther','ground','wind'])
    type: string;

    @IsIn(['male','female'])
    @IsOptional()
    gender?: string;

    @IsString({ each: true })
    @IsArray()
    @IsOptional()
    ability?: string[];

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    images?: string[]
}

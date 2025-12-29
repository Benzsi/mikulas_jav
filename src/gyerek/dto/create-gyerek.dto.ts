import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateGyerekDto {
    @IsString()
    @IsNotEmpty()
    nev: string;

    @IsString()
    @IsNotEmpty()
    cim: string;

    @IsBoolean()
    @IsNotEmpty()
    jorossz: boolean;
}

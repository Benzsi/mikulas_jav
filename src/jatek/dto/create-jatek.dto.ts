import { IsNotEmpty, IsNumber, IsString, IsEnum } from "class-validator";
import { Anyag } from "../entities/jatek.entity";

export class CreateJatekDto {
    @IsString()
    @IsNotEmpty()
    megnevezes: string;

    @IsEnum(Anyag)
    @IsNotEmpty()
    anyag: Anyag;

    @IsNumber()
    @IsNotEmpty()
    suly: number;
}

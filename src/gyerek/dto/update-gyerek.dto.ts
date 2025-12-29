import { PartialType } from '@nestjs/mapped-types';
import { CreateGyerekDto } from './create-gyerek.dto';

export class UpdateGyerekDto extends PartialType(CreateGyerekDto) {}

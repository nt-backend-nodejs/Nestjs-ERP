import { PartialType } from '@nestjs/mapped-types';
import { CreateCommnetDto } from './create-commnet.dto';

export class UpdateCommnetDto extends PartialType(CreateCommnetDto) {}

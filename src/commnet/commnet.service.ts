import { Injectable } from '@nestjs/common';
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateCommnetDto } from './dto/update-commnet.dto';

@Injectable()
export class CommnetService {
  constructor(private readonly prisma: PrismaService) { }
  create(createCommnetDto: Prisma.CommentCreateInput) {
    return this.prisma.comment.create({
      data: createCommnetDto
    })
  }

  findAll() {
    return `This action returns all commnet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commnet`;
  }

  update(id: number, updateCommnetDto: UpdateCommnetDto) {
    return `This action updates a #${id} commnet`;
  }

  remove(id: number) {
    return `This action removes a #${id} commnet`;
  }
}

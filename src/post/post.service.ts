import { Injectable } from '@nestjs/common';
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createPostDto: Prisma.PostCreateInput) {
    return this.prisma.post.create({
      data: createPostDto
    })
  }

  findAll() {
    return this.prisma.post.findMany({
      include: {
        User: true
      }
    })
  }

  findOne(id: number) {
    return this.prisma.post.findFirst({
      where: {
        id
      },
      include: {
        User: true
      }
    })
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}

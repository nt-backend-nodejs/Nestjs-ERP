import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { Prisma } from "@prisma/client";
import { CommnetService } from './commnet.service';
import { UpdateCommnetDto } from './dto/update-commnet.dto';

@ApiTags('commnet')
@Controller('commnet')
export class CommnetController {
  constructor(private readonly commnetService: CommnetService) { }

  @Post()
  create(@Body() createCommnetDto: Prisma.CommentCreateInput) {
    return this.commnetService.create(createCommnetDto);
  }

  @Get()
  findAll() {
    return this.commnetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commnetService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommnetDto: UpdateCommnetDto) {
    return this.commnetService.update(+id, updateCommnetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commnetService.remove(+id);
  }
}

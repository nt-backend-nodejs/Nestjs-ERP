import { Module } from '@nestjs/common';
import { PrismaService } from "src/prisma/prisma.service";
import { CommnetController, } from './commnet.controller';
import { CommnetService } from './commnet.service';

@Module({
  controllers: [CommnetController],
  providers: [CommnetService, PrismaService],
})
export class CommnetModule { }

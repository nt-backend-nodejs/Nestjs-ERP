import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { UserModule } from './user/user.module';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService],
  imports: [UserModule],
})
export class CoursesModule {}

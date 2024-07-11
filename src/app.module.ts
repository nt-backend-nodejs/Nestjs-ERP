import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { FilesModule } from './files/files.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [UserModule, FilesModule, CoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

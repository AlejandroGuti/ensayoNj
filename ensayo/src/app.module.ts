import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskController } from './Task/task.controller';
import { TaskService } from './Task/task.service';
import { TaskModule } from './Task/task.module';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [TaskModule,MongooseModule.forRoot('mongodb://localhost/nest-tutorial1',{useNewUrlParser:true})],
  controllers: [AppController, TaskController],
  providers: [AppService, TaskService],
})
export class AppModule {}

import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { get } from 'http';
import { from } from 'rxjs';
import {CreateTaskDto}from "./dto/create-task.dto"
import { request,response } from "express";
import { TaskService } from "./task.service";
import { Task } from "./interfaces/Task";


@Controller('task')
export class TaskController {

/**
 *
 */
constructor(private readonly taskService:TaskService) {

}

    @Get()
    getTasks(): Promise<Task[]> {
           return this.taskService.getTasks();
    }
    @Get(':taskId')
    getTask(@Param('taskId') taskId: string) {
           return this.taskService.getTask(taskId);
    }


    @Post()
    createTask(@Body() task: CreateTaskDto):string{
        return 'Post tarea';
    }

    @Put(':id')
    updatetask(@Body()task:CreateTaskDto, @Param('id') id): string{
        console.log(task)
        console.log(id)
        return 'Actualizando tarea';
    }

    @Delete(':id')
    deletetask(@Param('id') id):string{
        console.log(id);
        return `eliminando tarea ${id}`;
    }

}

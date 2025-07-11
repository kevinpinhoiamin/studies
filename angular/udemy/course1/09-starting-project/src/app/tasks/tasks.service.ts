import { inject, Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';
import { LoggingService } from '../logging.service';

// @Injectable({
//   providedIn: 'root',
// })
export class TasksService {
  private tasks = signal<Task[]>([]);
  private loggingService = inject(LoggingService);
  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }): void {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN',
    };
    this.tasks.update((oldsTasks) => [...oldsTasks, newTask]);
    this.loggingService.log(`ADDED TASKS WITH TITLE: ${newTask.title}`);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus): void {
    this.tasks.update((oldsTasks) =>
      oldsTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
    this.loggingService.log(`CHANGED TASK STATUS TO: ${newStatus}`);
  }
}

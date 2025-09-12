import { Routes } from '@angular/router';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';

export const routes: Routes = [
  {
    path: '', // <your-doman>/
    component: NoTaskComponent,
  },
  {
    path: 'users/:userId', // <your-doman>/users/<uid>
    component: UserTasksComponent,
  },
];

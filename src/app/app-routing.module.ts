import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewTaskComponent } from './components/add-new-task/add-new-task.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';

const routes: Routes = [
  { path: '', component: TasksListComponent ,pathMatch: 'full' },
  { path: 'TasksList-component', component: TasksListComponent },
  { path: 'AddNewTask-component', component: AddNewTaskComponent },
  { path: 'TaskDetails-component', component: TaskDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

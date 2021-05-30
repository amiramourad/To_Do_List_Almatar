import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataListService } from 'src/app/services/data-list.service';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.scss']
})
export class AddNewTaskComponent implements OnInit {
  public items: ITaskItems[] = [];
  public newTask: ITaskItems;
  public taskTitle;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  selected = 'none';
  taskDate;

  constructor(private router:Router , private dataListService: DataListService) { }
  ngOnInit(): void {
  }
  public addToList() {
    this.newTask = {
      title: this.taskTitle,
      date: this.taskDate.toISOString(),
      group: this.selected
    };
    this.items.push(this.newTask);
    this.taskTitle = '';
    this.selected = '';
    this.date = new FormControl(new Date());
    this.dataListService.listDataSource = this.items;
  }
  backBtn(){
    this.router.navigate(['']);
  }
  // public deleteTask(index) {
  //   this.items.splice(index, 1);
  // }
}
export interface ITaskItems {
  title: any;
  date: any;
  group: string;
}
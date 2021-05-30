import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router'; 
import { DataListService } from 'src/app/services/data-list.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  displayedColumns: string[] = ['title'];
  dataSource;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  selected = 'none';
  constructor(private router:Router , private dataListService: DataListService) { }

  ngOnInit(): void {
    this.dataSource = this.dataListService.listDataSource;
    console.log('dataSource List',this.dataSource);
    
  }
  addList(){
    this.router.navigate(['AddNewTask-component']);
  }
  navigate(element){
    this.router.navigate(['TaskDetails-component']);
    this.dataListService.taskDetails = element;
    console.log('element' ,this.dataListService.taskDetails);
    
  }
}

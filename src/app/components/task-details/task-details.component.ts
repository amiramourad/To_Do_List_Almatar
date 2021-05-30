import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataListService } from 'src/app/services/data-list.service';
import { ITaskItems } from '../add-new-task/add-new-task.component';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  displayedColumns: string[] = ['title', 'date', 'group'];
  dataSource;
  constructor(private router:Router , private dataListService: DataListService ) { }

  ngOnInit(): void {
    
    
    this.dataSource = this.dataListService.listDataSource ;
    console.log('this.dataSource details' ,  this.dataSource);
  }
  backBtn(){
    this.router.navigate(['']);
  }

}

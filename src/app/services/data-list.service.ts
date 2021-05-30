import { Injectable } from '@angular/core';
import { ITaskItems } from '../components/add-new-task/add-new-task.component';

@Injectable({
  providedIn: 'root'
})
export class DataListService {
public listDataSource : ITaskItems[];
public taskDetails : ITaskItems;
  constructor() { }
}

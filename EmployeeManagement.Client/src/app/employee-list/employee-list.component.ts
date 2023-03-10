import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Employee } from '../models/employee';
import { ApiService } from '../services/api.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public dataSource!: MatTableDataSource<Employee>;
  public employees!: Employee[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['Id', 'name', 'salary', 'action'];

  constructor(private api: ApiService, private dialog: MatDialog){
  }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){
    this.api.getEmployees()
        .subscribe(res =>{
          this.employees = res;
          this.dataSource = new MatTableDataSource(this.employees);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createEmployee(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "500px";
    dialogConfig.disableClose = true;
    dialogConfig.enterAnimationDuration = "1000ms";
    dialogConfig.exitAnimationDuration = "1000ms";
    this.dialog.open(CreateEmployeeComponent, dialogConfig);
  }

}

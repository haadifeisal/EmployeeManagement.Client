import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Department } from '../models/department';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  public departments!: Department[]; 

  constructor(private api: ApiService, private builder:FormBuilder, private dialog:MatDialog ){

  }

  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments(){
    this.api.getDepartments().subscribe(res => {
      this.departments = res;
    });
  }

  employeeForm = this.builder.group({
    name: this.builder.control('', Validators.required),
    salary: this.builder.control('', Validators.required),
    departmentId: this.builder.control('', Validators.required)
  });

  createEmployee(){
    if (this.employeeForm.valid) {
      this.api.createEmployee(this.employeeForm.value).subscribe(response => {
        this.closePopUp();
      });
    }
  }

  closePopUp() {
    this.dialog.closeAll();
  }

}

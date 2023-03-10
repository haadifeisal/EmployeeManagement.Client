import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../models/employee';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit{
  public employeeId!: string;
  public employee!: Employee;
  constructor(private route: ActivatedRoute, private api: ApiService) {
  }

  ngOnInit() {
    this.employeeId = this.route.snapshot.params['employeeId'];

    this.api.getEmployee(this.employeeId).subscribe(res => {
      this.employee = res;
    });
  }

}

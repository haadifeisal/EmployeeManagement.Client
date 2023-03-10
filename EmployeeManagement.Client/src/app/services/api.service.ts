import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../models/department';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = "https://localhost:5001/api"
  constructor(private http: HttpClient) { }

  //Employee endpoints

  getEmployees() {
    return this.http.get<Employee[]>('https://localhost:5001/api/Employee');
  }

  getEmployee(employeeId: string) {
    return this.http.get<Employee>('https://localhost:5001/api/Employee/' + employeeId);
  }

  createEmployee(employee: any){
    return this.http.post<Employee>('https://localhost:5001/api/Employee/', employee);
  }

  //Department endpoints

  getDepartments() {
    return this.http.get<Department[]>('https://localhost:5001/api/Department');
  }

}

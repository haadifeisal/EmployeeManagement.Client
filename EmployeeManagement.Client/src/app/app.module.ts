import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewDepartmentsComponent } from './view-departments/view-departments.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewDepartmentsComponent,
    ViewEmployeesComponent,
    EmployeeDetailComponent,
    DepartmentDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

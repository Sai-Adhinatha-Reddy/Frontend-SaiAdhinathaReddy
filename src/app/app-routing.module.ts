import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { AssignEmployeeComponent } from './employee/assign-employee/assign-employee.component';
import { HomeComponent } from './employee/home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
  { path: 'assign', component: AssignEmployeeComponent },
  { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
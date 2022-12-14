import { EmployeeService } from '../../employee.service';
import { Employee } from '../../employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employeeService
    .createEmployee(this.employee).subscribe((data: any) => {
      console.log(data)
      this.employee = new Employee();
      this.gotoList();
    }, 
      (error: any) => console.log(error));
  }

  onSubmit() {
    console.log(this.employee.password, this.employee.confirmPassword);
    if(this.employee.password === this.employee.confirmPassword) {
      this.submitted = true;
      this.save();
    } else {
      this.submitted = false;
    }
        
  }

  gotoList() {
    this.router.navigate(['/list']);
  }
}

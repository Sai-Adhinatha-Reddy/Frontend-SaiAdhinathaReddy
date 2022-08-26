import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-assign-employee',
  templateUrl: './assign-employee.component.html',
  styleUrls: ['./assign-employee.component.css']
})
export class AssignEmployeeComponent implements OnInit {
  employee:any;

  constructor(private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.reloadData()
  }

  reloadData() {

    this.employeeService.getEmployeesList().subscribe(data=>{console.log(data),this.employee=data});
  }

  gotoList(){
    this.router.navigate(['/list']);
  }
}

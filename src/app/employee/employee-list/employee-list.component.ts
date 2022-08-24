import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { Observable } from "rxjs";
import { EmployeeService } from "../../employee.service";
import { Employee } from "../../employee";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  employees: any;
  value: any;

  constructor(private employeeService: EmployeeService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }

  deleteEmployee(id: number) {
    this.value = window.confirm("Do you want to delete? id: " + id);
    if(this.value == true) {
      this.employeeService.deleteEmployee(id)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.reloadData();
        },
        (error: any) => console.log(error));
    }
  }

  employeeDetails(id: number){
    this.router.navigate(['/details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['/update', id]);
  }
}
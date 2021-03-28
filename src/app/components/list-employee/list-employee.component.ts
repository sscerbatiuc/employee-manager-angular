import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-list-employee-component',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees: any;
  currentEmployee = null;
  currentIndex = -1;
  query = '';


  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.retrieveEmployees();
  }

  retrieveEmployees(): void {
    this.employeeService.getAll()
      .subscribe(
        data => {
          this.employees = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveEmployees();
    this.currentEmployee = null;
    this.currentIndex = -1;
  }

  selectEmployee(employee, index): void {
    this.currentEmployee = employee;
    this.currentIndex = index;
  }


  searchByName(): void {
    this.employeeService.getById(this.query)
      .subscribe(
        data => {
          this.employees = [data];
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}

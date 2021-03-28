import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {Employee} from '../../model/Employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  public createdEmployee = new Employee('', '', '');
  public submitted = false;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
  }

  saveEmployee(): void {
    this.employeeService.create(this.createdEmployee)
      .subscribe(response => {
        console.log(response);
        this.submitted = true;
      }, error => {
        console.error(error);
      });
  }

  resetEmployee(): void {
    this.submitted = false;
    this.createdEmployee = new Employee('', '', '');
  }

}

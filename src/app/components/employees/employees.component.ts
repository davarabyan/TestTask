import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RateService } from '../../services/rate.service'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private RateService: RateService) { }
  employees

  ngAfterViewInit() {
  }
  ngOnInit() {
    this.RateService.getEmployees().subscribe(res => {
      this.employees = res
      console.log(this.employees.results)
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { RateService } from '../../services/rate.service'

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  constructor(private RateService: RateService) { }
  rates
  number :number
  selected
  ngOnInit() {
    this.RateService.getRates().subscribe(res => {
      this.rates = res
      console.log(res)
    })
  }
  calculate(){
 if (this.number && this.selected){
   return '= '+ this.number * this.selected
 }
  }

}

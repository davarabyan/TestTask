import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  constructor(private httpClient: HttpClient) { }

  getRates(){
    let headers = new HttpHeaders({'content-type':'application/json'});
    return this.httpClient.get('https://api.exchangeratesapi.io/latest')
  }
   getEmployees(){
    let headers = new HttpHeaders({'content-type':'application/json'});
    return this.httpClient.get('https://randomuser.me/api?results=25')
  }
}

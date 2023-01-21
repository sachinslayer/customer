import { Injectable } from '@angular/core';
import { Customer } from './customer';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
     public getCustomer(){
      let customers:Customer[];
      customers=[
        new Customer(1,"ajay",1000),
        new Customer(2,"vijay",10000),
        new Customer(3,"sanjay",100000)
      ]
      return customers
     }

}
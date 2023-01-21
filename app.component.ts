import { Component } from '@angular/core';
import { AppServiceService} from './app-service.service';
import { Customer } from './customer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Error';
  
  customer: Customer[];
  appServiceService ;

  constructor(){
    this.appServiceService =new AppServiceService();
  }
  getCustomer(){
    this.customer=this.appServiceService.getCustomer();
  }
}

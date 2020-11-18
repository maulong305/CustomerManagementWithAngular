import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { ICustomer } from '../service/icustomer';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  customer = this.customerService.getCustomer();
  id = this.customerService.getCustomer().id;

  delete(customer: ICustomer){
    this.customerService.setCustomer(customer);
    this.router.navigate(["/delete"])
  }

  edit(customer: ICustomer){
   this.customerService.setCustomer(customer);
   this.router.navigate(["/edit"])
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { ICustomer } from '../service/icustomer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  customers: ICustomer[] = [];
  constructor(private customerService: CustomerService, private router: Router) {
    this.customers= this.getAllCustomer();
   }
   
  customer = this.customerService.getCustomer();

   customersList;

  ngOnInit(): void {
    this.getAllCustomer();
  }

  getAllCustomer(): ICustomer[] {
    this.customerService.getList().subscribe(p => {this.customersList = p});
    return this.customers
  }

  delete(customer: ICustomer){
    this.customerService.setCustomer(customer);
    this.router.navigate(["/delete"])
  }

  edit(customer: ICustomer){
   this.customerService.setCustomer(customer);
   this.router.navigate(["/edit"])
  }

}

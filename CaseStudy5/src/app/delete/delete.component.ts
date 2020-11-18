import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  customer = this.customerService.getCustomer();

  deleteCus(){
    this.customerService.delete(this.customer.id);
  }

}

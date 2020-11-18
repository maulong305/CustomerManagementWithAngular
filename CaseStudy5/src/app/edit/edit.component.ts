import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id= this.customerService.customer.id;
  customer = this.customerService.getCustomer();
  constructor(private router: Router, private customerService: CustomerService) {}

  ngOnInit(): void {
    
  }

  editCus(){
    this.customerService.edit(this.id, this.customer).subscribe((data: {})=>{
      this.router.navigate(['/']);
    })
  }

}

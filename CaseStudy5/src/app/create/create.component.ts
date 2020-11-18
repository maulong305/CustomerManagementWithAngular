import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @Input() customer: any = {
    firstName: '',
    lastName: ''
  }
  constructor(private  router:Router, private service: CustomerService ) { 
  } 

  ngOnInit(): void {
  }

  createCus(){
    return this.service.create(this.customer).subscribe((data: {})=>{
      this.router.navigate(['/']);
    })
  }


}

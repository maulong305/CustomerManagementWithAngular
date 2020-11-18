import { ICustomer } from './icustomer';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
  })
  
  export class CustomerService {
  
    customer: ICustomer;
  
    constructor(private http: HttpClient, private router: Router) { }
  
    private url = 'http://localhost:8080/customers/';
  
    setCustomer(customer: ICustomer) {
      this.customer = customer;
    }
  
    getCustomer() {
      return this.customer;
    }
  
    getList(): Observable<ICustomer[]>{
      return this.http.get<ICustomer[]>(this.url);
    }
  
    create(customer: ICustomer): Observable<ICustomer>{
      return this.http.post<ICustomer>(this.url, customer);
    }
  
    edit(id: number, customer: ICustomer): Observable<ICustomer> {
      return this.http.put<ICustomer>(this.url + '/' + id, customer);
    }
  
    delete(id: number): Subscription {
      return this.http.delete<ICustomer>(this.url + '/' + id).subscribe(res => this.router.navigateByUrl(''));
    }
  
  
  }
  
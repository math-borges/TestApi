import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Customer } from '../Entities/Customer';

@Injectable({
  providedIn: 'root',
})
export class TestApiService {
  private url = '/customers';
  private baseUrl = environment.apiUrl;
  private apiUrl = this.baseUrl + this.url;

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl);
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.apiUrl + '/customer/' + id);
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl + '/customer/add', customer);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.http.delete<Customer>(this.apiUrl + '/customer/delete/' + id);
  }

  editCustomer(id: number, updatedCustomer: Customer): Observable<Customer> {
    return this.http.put<Customer>(
      this.apiUrl + '/customer/edit/' + id,
      updatedCustomer
    );
  }
}

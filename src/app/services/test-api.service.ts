import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Customer } from '../Entities/Customer';

@Injectable({
  providedIn: 'root',
})
export class TestApiService {
  private url = '/customer';
  private baseUrl = environment.apiUrl;
  private apiUrl = this.baseUrl + this.url;

  constructor(private http: HttpClient) {}

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.apiUrl + '/' + id);
  }
}

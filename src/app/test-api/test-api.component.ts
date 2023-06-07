import { Component } from '@angular/core';
import { TestApiService } from '../services/test-api.service';
import { Observable } from 'rxjs';
import { Customer } from '../Entities/Customer';

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.scss'],
})
export class TestApiComponent {
  jesaispas: string = 'je sais pas trop';
  customers!: Customer[];
  customer: Customer = new Customer();

  constructor(private testApiService: TestApiService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getCustomers();
    console.log();
  }

  sayHello(): void {
    alert('hello');
  }

  // getCustomer(id: number): any {
  //   this.testApiService.getCustomer(id).subscribe((data) => {
  //     this.customers = data;
  //   });
  // }

  getCustomers(): any {
    this.testApiService.getCustomers().subscribe((data) => {
      this.customers = data;
    });
  }

  deleteCustomer(customer: Customer): any {
    this.testApiService.deleteCustomer(customer.id!).subscribe((data) => {
      this.getCustomers();
    });
  }

  editCustomer(id: number, updatedCustomer: Customer): any {
    this.testApiService.editCustomer(id, updatedCustomer).subscribe((data) => {
      this.getCustomers();
    });
  }

  createCustomer() {
    this.testApiService.createCustomer(this.customer).subscribe((response) => {
      console.log(response); // Traitez la réponse du service si nécessaire
      this.customers.push(this.customer);
      this.customer = new Customer(); // Réinitialisez le formulaire après l'ajout
    });
  }
}

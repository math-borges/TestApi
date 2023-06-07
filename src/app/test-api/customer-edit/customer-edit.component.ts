import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Entities/Customer';
import { TestApiService } from 'src/app/services/test-api.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss'],
})
export class CustomerEditComponent implements OnInit {
  customer!: Customer;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private testApiService: TestApiService
  ) {}

  ngOnInit(): void {
    const customerId = this.route.snapshot.params['id'];
    this.getCustomer(customerId);
  }

  getCustomer(id: number): void {
    this.testApiService.getCustomer(id).subscribe((customer) => {
      this.customer = customer;
    });
  }

  editCustomer(id: number, updatedCustomer: Customer): void {
    this.testApiService.editCustomer(id, updatedCustomer).subscribe(() => {
      // Redirection vers la page précédente
    });
    this.router.navigate(['']);
  }
}

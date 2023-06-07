import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/Entities/Customer';
import { TestApiService } from 'src/app/services/test-api.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent {
  customer!: Customer;

  constructor(
    private route: ActivatedRoute,
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
}

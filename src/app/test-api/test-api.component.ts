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
  data!: Customer;

  constructor(private testApiService: TestApiService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getCustomer(1);
    console.log();
  }

  sayHello(): void {
    alert('hello');
  }

  getCustomer(id: number): any {
    this.testApiService.getCustomer(id).subscribe((data) => {
      this.data = data;
    });
  }
}

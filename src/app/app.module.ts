import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TestApiComponent } from './test-api/test-api.component';
import { CustomerDetailsComponent } from './test-api/customer-details/customer-details.component';
import { CustomerEditComponent } from './test-api/customer-edit/customer-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TestApiComponent,
    CustomerDetailsComponent,
    CustomerEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: TestApiComponent },
      { path: 'customer/:id', component: CustomerDetailsComponent },
      { path: 'customer/edit/:id', component: CustomerEditComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

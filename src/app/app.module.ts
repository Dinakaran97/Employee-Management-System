import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SigninComponent } from './components/signin/signin.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SignoutComponent } from './signout/signout.component';
import { FooterComponent } from './footer/footer.component';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DeleteemployeeComponent } from './components/deleteemployee/deleteemployee.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './components/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SigninComponent,
  
    SignoutComponent,
       FooterComponent,
       AddemployeeComponent,
      
       DeleteemployeeComponent,
       EmployeelistComponent,
       ErrorComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule //we need to import this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

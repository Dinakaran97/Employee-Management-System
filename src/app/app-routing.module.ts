import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouteGuardService } from './service/route-guard.service';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';

import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { ErrorComponent } from './components/error/error.component';
const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SigninComponent },
  {path:'dashboard/:username',component:DashboardComponent,canActivate:[RouteGuardService]},
  {path:'empadd',component:AddemployeeComponent,canActivate:[RouteGuardService]},
  {path:'empadd/:id',component:AddemployeeComponent,canActivate:[RouteGuardService]},
  
  {path:'emplist',component:EmployeelistComponent,canActivate:[RouteGuardService]},
  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

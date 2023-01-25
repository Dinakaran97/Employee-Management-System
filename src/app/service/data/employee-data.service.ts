import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeelistComponent } from 'src/app/components/employeelist/employeelist.component';
import { Employee_Management_System } from 'src/app/components/employeelist/employeelist.component';
@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor(private http:HttpClient) { }

  getAllEmployee(){
    return this.http.get<Employee_Management_System[]>(`http://localhost:8889/allemployee`);
  }
  employeeDelete(id:number){
    return this.http.delete<Employee_Management_System[]>(`http://localhost:8889/employee/${id}`);
  }
  updateEmployee(id:number,employee:Employee_Management_System){
    return this.http.put<Employee_Management_System>(`http://localhost:8889/employee/${id}`,employee);
  }
  retriveEmployee(id:number){
    return this.http.get<Employee_Management_System>(`http://localhost:8889/employee/${id}`);
  }

  createEmployee(employee:Employee_Management_System){
    return this.http.post<Employee_Management_System>(`http://localhost:8889/saveemployee`,employee);

  }




}

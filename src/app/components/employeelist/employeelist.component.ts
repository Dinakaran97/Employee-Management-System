import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDataService } from 'src/app/service/data/employee-data.service';


@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  employee:Employee_Management_System[]=[];
  filterTerm!:string;
  p: number = 1;
  /*todo=[
    {id:1,description:'Learn to dance'},
    {id:2,description:'Want to expert in angular'},
    {id:2,description:'want to visit India'}
  ]*/
  constructor(private employeeService:EmployeeDataService,private router:Router){}
ngOnInit(): void {
 // throw new Error('Method not implemented.');
this.employeeService.getAllEmployee().subscribe(
  response=> {
    this.employee=response
    console.log(response)
  }
)
}
employeeDelete(employeeId:number)
{
  if(window.confirm('Are sure you want to delete the employee ?')){
    this.employeeService.employeeDelete(employeeId).subscribe
    (
      response=>{
        this.employee=response
        console.log(response)
      }
    )
  }
  
}

updateEmployee(employeeId:number)
{
  console.log("update Employee")
  this.router.navigate(['empadd',employeeId])
}
createEmployee()
{
  this.router.navigate(['empadd',-1]) //navigate to update screen
}
  // todos=[
  //   new Todos(1,'Learn java'),
  //   new Todos(2,'Learn C++'),
  //   new Todos(3,'Learn Spring')
  // ] 
}

export class  Employee_Management_System{
  invalid: any;
       constructor(
            public employeeId:number,
            public employeeName:string,
             public employeeAge:number,
            public  employeeDateofbirth:Date,
             public employeeDesgination:string,
             public employeeJoiningdate:Date,
            public employeeSalary:number,
            public employeePhoneno:number,
             public employeeMailid:string,
            public employeeLocation:string 
  
  
       ){
               
       }
     
  }


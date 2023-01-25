import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDataService } from 'src/app/service/data/employee-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {


  id: number;
  employeelist:Employee_Management_System
  
  //Inject an object of DataService and ActivatedRoute
  

  //Inject an object of DataService and ActivatedRoute
  constructor(private employeeservice:EmployeeDataService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
   this.id=this.route.snapshot.params['id']; //to take url id 
   this.employeelist=new Employee_Management_System( this.id,'',Number(),new Date(),'',new Date(),Number(),Number(),'','');
   if(this.id!=-1){
   this.employeeservice.retriveEmployee(this.id).subscribe(
    data=>this.employeelist=data);
  }
}


  saveEmployee(){
console.log("Inside save employee"+this.id)
  
  
//call insert or add
this.employeeservice.createEmployee(this.employeelist).subscribe(
  data=>{
  
  alert("Employee added sucessfully!")
  this.router.navigate(['emplist'])
  }
 )
    
    
//update
/*console.log("inside update")
this.employeeservice.updateEmployee(this.id,this.employeelist).subscribe(
 data=>
 {
 console.log(data)
 this.router.navigate(['dashboard'])
 }
)*/
    
    
    
  

   
  
}


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


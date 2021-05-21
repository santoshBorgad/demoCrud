import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees: Employee[] | undefined ;
  constructor(private apiservice:ApiService,private router: Router) { }
  emp : any = {};
  progressValue ="0"
  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees(){
    this.apiservice
       .getEmployees()
       .subscribe((employees: any) => {
         this.employees = employees;
         this.progressValue = (employees.length/10*100).toString();
     } )
 }

 deleteemployee(id:any){
   this.apiservice.deleteemployee(id).subscribe(data=>{
     console.log(data)
     this.getEmployees();
   })
 }

 getEmployee(employee:any){
   this.router.navigate(["/create",{id:employee.id,employeeCount:this.employees?.length}])
 }

 viewEmployee(employee: any){
  this.emp= employee;
 }

}




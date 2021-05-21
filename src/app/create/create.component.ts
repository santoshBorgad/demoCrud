import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  model:any;
  flag : boolean = false;
  employeeCount:number= 0;
  constructor(private apiservice:ApiService,
    private router: Router,private route: ActivatedRoute) {
      this.model = new Employee();
     }

  ngOnInit(): void {
    let id: any;
    this.route.params.subscribe(data=>{
       id = data.id;
       this.employeeCount= data.employeeCount;
       if(id){
        this.apiservice.viewemployee(id).subscribe(data=>{
          this.model = data;
          this.flag = true;
          })
       }
    })
  }
 
  createemployee(){
      if(this.flag){
        this.apiservice
        .updateemployee(this.model)
        .subscribe((data)=>{
          this.goBack();
        },err=>{
          console.log(err);
        });
      }
      else if(this.employeeCount < 11){
        this.apiservice
        .createemployee(this.model)
        .subscribe(()=> this.goBack());
      }
      else{
        alert("Sorry you can not add more than 10 employees")
      }
  }
  goBack(){
    this.router.navigate(['/home']);
  }
}

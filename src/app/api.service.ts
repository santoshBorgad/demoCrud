import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Employee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // apiservice=http://localhost:3000/posts
  Employee:any;

  constructor(private _http:HttpClient) { }
  getEmployees(): Observable<Employee[]> {
    return this._http.get<Employee[]>("http://localhost:3000/posts" + '')
   
}
  createemployee(info:Employee){
     return this._http.post("http://localhost:3000/posts",info)
  }
  updateemployee(info:Employee){
    return this._http.put("http://localhost:3000/posts/"+info.id,info)
  }
  deleteemployee(id:any){
    return this._http.delete("http://localhost:3000/posts/"+id)
  }
  viewemployee(id:any){
    return this._http.get("http://localhost:3000/posts/"+id)
  }
}


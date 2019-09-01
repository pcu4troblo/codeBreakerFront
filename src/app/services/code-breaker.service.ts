import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CodeBreakerService {
  //https://code-breaker-udea-pcu4troblo.herokuapp.com
  URI_API = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  public setNumber(number: Number){
    return  this.http.get(this.URI_API+'/setsecret/'+number);
  }

  public guess(number: Number){
    return  this.http.get(this.URI_API+'/guess/'+number);
  }

}


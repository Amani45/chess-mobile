import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChessService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  SINGUP_NEW_USER = environment.url + "/users/signup"




  public signupNewUser(data): Observable<any>{
    
    return this.http
    .post(this.SINGUP_NEW_USER, data, this.httpOptions)
    // .pipe(
    //   map(res => {
    //     return res.json();
    //   })
    // );

  }

  public ping(){
    return this.http.get(environment.url + "/ping").pipe(map(( res : any) => {
      return res
    }))
  }

}

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
  GET_USER_CHESSMEN = environment.url + "/users/get"

  VALIDATE_USER_SEQUENCE = environment.url + "/users/validate/sequence"
  VALIDATE_USER_OTP = environment.url + "/users/validate/otp"





  public signupNewUser(data): Observable<any>{
    
    return this.http
    .post(this.SINGUP_NEW_USER, data, this.httpOptions)
  }
  public validateUserSequence(data): Observable<any>{
    return this.http
    .post(this.VALIDATE_USER_SEQUENCE, data, this.httpOptions)
  }

  public validateUserOtp(data): Observable<any>{
    return this.http
    .post(this.VALIDATE_USER_OTP, data, this.httpOptions)
  }

  public getUserChessmen(userName): Observable<any>{
    return this.http.get(this.GET_USER_CHESSMEN +"/"+ userName)
  }

  

  public ping(){
    return this.http.get(environment.url + "/ping").pipe(map(( res : any) => {
      return res
    }))
  }

}

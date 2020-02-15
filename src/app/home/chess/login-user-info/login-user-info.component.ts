import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-user-info',
  templateUrl: './login-user-info.component.html',
  styleUrls: ['./login-user-info.component.scss'],
})
export class LoginUserInfoComponent implements OnInit {

  userName = ""

  @Output() loginUserInfo = new EventEmitter()


  constructor() { }

  ngOnInit() {}



  onNext(){
    
    if(this.userName.length == 0){
        alert("Please enter username")
    }else {
      this.loginUserInfo.emit({userName: this.userName})
    }
  }

}

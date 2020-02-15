import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signup-info',
  templateUrl: './signup-info.component.html',
  styleUrls: ['./signup-info.component.scss'],
})
export class SignupInfoComponent implements OnInit {


  userName = ""
  phone = "+9665"

  @Output() userInfo = new EventEmitter()


  constructor() { }

  ngOnInit() {}



  onNext(){
    
    if(this.userName.length == 0 || this.phone.length == 0){
        alert("Please enter username and phone")
    }else {
      this.userInfo.emit({userName: this.userName, phone: this.phone})
    }
  }

}

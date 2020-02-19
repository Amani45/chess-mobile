import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {

  otp = ""
  @Output() loginOtpCode = new EventEmitter()



  constructor() { }

  ngOnInit() {}


  onDone(){
    
    if(this.otp.length == 0){
        alert("Please enter the OTP code")
    }else {
      this.loginOtpCode.emit(this.otp)
    }
  }

}

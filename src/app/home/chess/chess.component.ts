import { Component, OnInit, Input } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { ChessService } from './services/chess.service';

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.scss']
})
export class ChessComponent implements OnInit {


  @Input() public mode = Mode.FOUR
  action = 'home'
  view = 'home'
  // action = 'login'
  // view = 'login_otp'
  public pieces = Pieces
  public progress = false

  public selectedChessmen = []
  public userInfo= null

  //
  public singup = {
    userName : 'XXXXX',
    phone: 'XXXXXXX',
    chessSize: 4,
    chessCode : []
  }

  public login = {
    userName : 'XXXXX',
    sequenceCode : [],
    otpCode : 0
  }


  boardState = null

  actions = {
    home : 0,
    signup_info : 1,
    signup_chessMenSelect: 2,
    signup_chessMenAddToBoard: 3,
    login_info: 4,
    login_chessmenSequence: 5 
  }


  // login state
  loginChessState


  

  constructor(public chessService : ChessService) { }

  ngOnInit() {}


  // events // taken
  onChessmenSelected($event){
    this.selectedChessmen = $event
    this.onAction('signup_chessMenAddToBoard')
  }

  onChessmenAdded($event){
    this.singup.chessCode = $event
    this.progress = true
    this.chessService.signupNewUser(this.singup).subscribe( (res : any) => {
      console.log(res)
      this.progress = false
      console.log(res)
      if(res.success){
        this.onAction('home')
      }else {
        alert("Signup failed.")
      }
    })
  }

  onUserInfo($event){
    console.log("USER_INFO: ", $event)
    this.singup.userName = $event.userName
    this.singup.phone = $event.phone
    this.onAction('signup_chessMenSelect')
  }

  onLoginUserInfo($event){
    this.progress = true
    this.chessService.getUserChessmen($event.userName).subscribe( (res : any) => {
      this.progress = false
      if(res.success){
        console.log("chessmen of user : ", res.body)
        this.loginChessState = res.body[0]
        this.login.userName = $event.userName
        this.onAction('login_chessmenSequence')
      }else {
        alert("user name is not found.")
      }
    })
  }

  onLoginChessCode($event){
    console.log("onLoginChessCode: ", $event)
    this.progress = true
    this.login.sequenceCode = $event
    this.chessService.validateUserSequence(this.login).subscribe( (res : any) => {
      this.progress = false
      if(res.success){
        this.onAction('login_otp')
      }else {
        alert("Chess code is not correct!")

      }
    })
  }

  onLoginOtpCode($event){
    console.log("onLoginOtpCode: ", $event)
    this.progress = true
    this.login.otpCode = $event
    this.chessService.validateUserOtp(this.login).subscribe( (res : any) => {
      this.progress = false
      if(res.success){
        this.onAction('protected')
      }else {
        alert("OTP code is not correct!")
      }
    })
  }

  

  // might be moved to service 

  onAction(action){
    console.log("AC:", action)
    switch(action){
      
      case 'protected': {
        this.action ='protected'
        this.view = 'protected'
        break;
      }

      case 'signup': {
        this.action ='protected'
        this.view = 'protected'
        break;
      }

      case 'signup': {
        console.log("LL")
        this.action ='signup'
        this.view = 'signup_info'
        break;
      }
      case 'login': {
        this.action ='login'
        this.view = 'login_info'
        break;
      }
 
      case 'login_chessmenSequence': {
        this.view = 'login_chessmenSequence'
        break;
      }

      case 'login_otp' : {
        this.view = "login_otp"
        break;
      }

      case 'signup_chessMenSelect': {
        this.view = 'signup_chessMenSelect'
        break;
      }

      case 'signup_chessMenAddToBoard': {
        this.view = 'signup_chessMenAddToBoard'
        break;
      }

      default: {
        this.view = ''
        this.action=''
        break;
      }

    }
  }




  // services for sign up

  // taken
  selectedChessMenIndex = 1000

  // tkane
  onChessMenIndexSelect(index) {
    if (this.selectedChessMenIndex != index) {
      this.selectedChessMenIndex = index
    } else {
      this.selectedChessMenIndex = 1000
    }
  }






  // services for board // both taken

  // currentSelected = []
  // onPieceSelect(i, j) {
  //   this.currentSelected.push([i, j])
  //   console.log(this.currentSelected)
  // }

  /// taken
  // onPieceAdd(i, j) {

  //   if(this.selectedChessMenIndex == 1000){
  //     this.boardState[i][j] = { value: this.currentSelected[0], selected: false }

  //   }else {
  //     this.boardState[i][j] = { value: this.selectedChessMen[this.selectedChessMenIndex], selected: false }
  //     this.selectedChessMen= this.selectedChessMen.filter((_,index)=> index != this.selectedChessMenIndex)
  //     this.selectedChessMenIndex = 1000
  //   }

  // }

}

export enum Mode {
  FOUR = 4, EIGHT = 8
}

export enum Pieces {
  queen = "&#9813;", bishop = "&#9815;", knight = "&#9816;", rook = "&#9814;"
}
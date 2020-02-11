import { Component, OnInit, Input } from '@angular/core';
import { NgSwitch } from '@angular/common';

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.scss']
})
export class ChessComponent implements OnInit {


  @Input() public mode = Mode.FOUR
  action = 'singup'
  view = 'signup_chessMenSelect'
  public pieces = Pieces

  public selectedChessMen = []
  public userInfo= null

  boardState = null

  actions = {
    home : 0,
    signup_info : 1,
    signup_chessMenSelect: 2,
    signup_chessMenAddToBoard: 3,
    login_info: 4 
  }

  

  constructor() { }

  ngOnInit() {
    // this.boardState = Array(4).fill('Row').map(x => Array(4).fill({ value: '', selected: false }))
  }


  // events // taken
  onChessmenSelected($event){
    this.selectedChessMen = $event
    this.onAction('signup_chessMenAddToBoard')
  }

  onChessmenAdded($event){
    this.onAction('home')
  }

  onUserInfo($event){
    this.userInfo = $event
    this.onAction('signup_chessMenSelect')
  }

  // might be moved to service 

// taken
  onAction(action){
    switch(action){

      case 'signup': {
        this.view = 'signup_info'
        break;
      }
      case 'signup': {
        this.view = 'signup_info'
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
        this.view = 'home'
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

  currentSelected = []
  onPieceSelect(i, j) {
    this.currentSelected.push([i, j])
    console.log(this.currentSelected)
  }

  /// taken
  onPieceAdd(i, j) {

    if(this.selectedChessMenIndex == 1000){
      this.boardState[i][j] = { value: this.currentSelected[0], selected: false }

    }else {
      this.boardState[i][j] = { value: this.selectedChessMen[this.selectedChessMenIndex], selected: false }
      this.selectedChessMen= this.selectedChessMen.filter((_,index)=> index != this.selectedChessMenIndex)
      this.selectedChessMenIndex = 1000
    }

  }

}

export enum Mode {
  FOUR = 4, EIGHT = 8
}

export enum Pieces {
  queen = "&#9813;", bishop = "&#9815;", knight = "&#9816;", rook = "&#9814;"
}
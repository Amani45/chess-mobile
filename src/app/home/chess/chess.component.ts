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

  boardState = null

  actions = {
    signup_chessMenSelect: ['next'],
    signup_chessMenAddToBoard: ['done']
  }

  

  constructor() { }

  ngOnInit() {

    this.boardState = Array(4).fill('Row').map(x => Array(4).fill({ value: '', selected: false }))
  }


  // events // taken
  onChessmenSelected($event){
    this.selectedChessMen = $event
    this.onAction('next')
  }

  // might be moved to service 

// taken
  onAction(action){
    switch(action){

      case 'next': {
        this.view = 'signup_chessMenAddToBoard'
        break;
      }

      case 'done': {
        this.view = 'home'
        break;
      }

    }
  }




  // services for sign up

  selectedChessMenIndex = 1000

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
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pieces } from '../chess.component';

@Component({
  selector: 'app-chessmen-select',
  templateUrl: './chessmen-select.component.html',
  styleUrls: ['./chessmen-select.component.scss']
})
export class ChessmenSelectComponent implements OnInit {

  
  pieces = Pieces

  knight  = 0;
  queen = 0
  bishop = 0;
  rook = 0

  chessmen = []
  @Output() chessmenSelected = new EventEmitter()


  constructor() { }

  ngOnInit() {
  }

  onAction(){
    console.log(this.knight, this.bishop, this.queen, this.rook, )

    if(this.knight == 0 && this.bishop == 0 && this.queen == 0 && this.rook == 0){
      alert("Please select at least one chessman")
      return
    }else {
      console.log("Knight :", this.knight)
      for (let index = 0; index < this.knight; index++) {
        this.chessmen.push('knight')
      }
      for (let index = 0; index < this.queen; index++) {
        this.chessmen.push('queen')
      }
      for (let index = 0; index < this.bishop; index++) {
        this.chessmen.push('bishop')
      }
      for (let index = 0; index < this.rook; index++) {
        this.chessmen.push('rook')
      }
  
      this.chessmenSelected.emit(this.chessmen)
    }



  }

}

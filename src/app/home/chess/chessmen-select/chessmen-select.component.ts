import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pieces } from '../chess.component';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-chessmen-select',
  templateUrl: './chessmen-select.component.html',
  styleUrls: ['./chessmen-select.component.scss']
})
export class ChessmenSelectComponent implements OnInit {


  pieces = Pieces

  knight = 0;
  queen = 0
  bishop = 0;
  rook = 0
  max = 8
  min = 3
  current = 0
  current_knight = 0
  current_queen = 0
  current_bishop = 0
  current_rook = 0

  chessmen = []
  @Output() chessmenSelected = new EventEmitter()


  constructor() { }

  ngOnInit() {
  }

  onAction() {
    console.log(this.knight, this.bishop, this.queen, this.rook)


    if (this.knight == 0 && this.bishop == 0 && this.queen == 0 && this.rook == 0) {
      alert("Please select at least one chessman")
      return
    } else if(this.current>8 && this.current<3) {
      alert("You must select between 3 to 8 chessman")
    }
    
    else {
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


  onChange(type, value) {

    switch (type) {
      case 'knight':
        this.current_knight = value
        break;
      case 'rook':
        this.current_rook = value
        break;
      case 'queen':
        this.current_queen = value
        break;
      case 'bishop':
        this.current_bishop = value
        break;
    }

    this.current = Number(this.current_queen) + Number(this.current_bishop) + Number(this.current_knight) + Number(this.current_rook)
  }

}

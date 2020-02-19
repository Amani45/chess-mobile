import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mode, Pieces } from '../chess.component';

@Component({
  selector: 'app-chessmen-sequence',
  templateUrl: './chessmen-sequence.component.html',
  styleUrls: ['./chessmen-sequence.component.scss'],
})
export class ChessmenSequenceComponent implements OnInit {



  @Input('loginChess')
  set setLoginChess(login) {
    console.log("Login:", login)
    this.mode = login.chessSize
    this.boardState = Array(this.mode).fill('Row').map(x => Array(this.mode).fill({ value: '', selected: false }))

    login.chessCode.forEach(code => {
      this.onPieceAdd(code.x, code.y)
    })

  }
  //
  selectedValidChessmen = []
  selectChessmen = 0
  mode

  @Output() code = new EventEmitter()


  boardState = null





  constructor() { }

  ngOnInit() {
  }


  onReset() {
    this.selectChessmen = 0;
    this.boardState = this.boardState.map(row => {
      return row.map(col => {
        if (col.selected) {
          return { value: '', selected: false }
        } else {
          return col
        }
      })
    })
  }


  onDone() {

    let providedCode = []
    this.boardState.map((row, i) => {
      return row.map((col, j) => {

        if (col && col.selected) {
          providedCode.push({ order: col.order, newMove: { x: i, y: j } })
        }
      })
    })
    providedCode.sort((a,b) => a.order - b.order )
    this.code.emit(providedCode)
  }


  onPieceSelect(i, j) {
    this.boardState[i][j] = { order: this.selectChessmen, value: "", selected: true }
    this.selectChessmen++
  }

  onPieceAdd(i, j) {
    this.boardState[i][j] = { value: '&#9679;', selected: false }
  }

}

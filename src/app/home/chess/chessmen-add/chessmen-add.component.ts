import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pieces, Mode } from '../chess.component';

@Component({
  selector: 'app-chessmen-add',
  templateUrl: './chessmen-add.component.html',
  styleUrls: ['./chessmen-add.component.scss'],
})
export class ChessmenAddComponent implements OnInit {

  @Input() selectedChessMen = []
  @Input() mode = Mode.FOUR
  @Output() chessmenAdded = new EventEmitter()

  initSelectedChessmen = []


  public pieces = Pieces

  largeValue = 1000

  selectedChessMenIndex = this.largeValue
  boardState = null
  currentSelected = []




  constructor() { }

  ngOnInit() {
    this.boardState = Array(this.mode).fill('Row').map(x => Array(this.mode).fill({ value: '', selected: false }))
    this.initSelectedChessmen = this.selectedChessMen
  }


  onReset(){
 this.selectedChessMen = this.initSelectedChessmen
 this.boardState = Array(this.mode).fill('Row').map(x => Array(this.mode).fill({ value: '', selected: false }))
  }


  onDone(){
    this.chessmenAdded.emit(this.currentSelected)
  }


  onChessMenIndexSelect(index) {
    if (this.selectedChessMenIndex != index) {
      this.selectedChessMenIndex = index
    } else {
      this.selectedChessMenIndex = 1000
    }
  }

  onPieceSelect(i, j, type) {
    alert("hello")
  }

  onPieceAdd(i, j) {

    if (this.selectedChessMenIndex == this.largeValue) {
       this.boardState[i][j] = { value: this.currentSelected[0], selected: false }
    } else {
      this.boardState[i][j] = { value: this.selectedChessMen[this.selectedChessMenIndex], selected: false, order :  (this.initSelectedChessmen.length - this.selectedChessMen.length )+1 }
      this.currentSelected.push({x:i,y:j,chessman : this.selectedChessMen[this.selectedChessMenIndex], order : (this.initSelectedChessmen.length - this.selectedChessMen.length )+1})
      this.selectedChessMen = this.selectedChessMen.filter((_, index) => index != this.selectedChessMenIndex)
      this.selectedChessMenIndex = this.largeValue
    }

  }

}

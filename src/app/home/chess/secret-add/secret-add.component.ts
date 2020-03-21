import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Pieces } from '../chess.component';

@Component({
  selector: 'app-secret-add',
  templateUrl: './secret-add.component.html',
  styleUrls: ['./secret-add.component.scss'],
})
export class SecretAddComponent implements OnInit {

  pieces = Pieces
  @Output() selectedSecret = new EventEmitter()

  secret = "None"

  constructor() { }

  ngOnInit() {}


  onChange(type, value) {

    // switch (type) {
    //   case 'knight':
    //     this.current_knight = value
    //     break;
    //   case 'rook':
    //     this.current_rook = value
    //     break;
    //   case 'queen':
    //     this.current_queen = value
    //     break;
    //   case 'bishop':
    //     this.current_bishop = value
    //     break;
    // }

    // this.current = Number(this.current_queen) + Number(this.current_bishop) + Number(this.current_knight) + Number(this.current_rook)
  }

  onAction() {
    this.selectedSecret.emit(this.secret)
  }

}

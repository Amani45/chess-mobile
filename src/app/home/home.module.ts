import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ChessmenSelectComponent } from './chess/chessmen-select/chessmen-select.component';
import { ChessComponent } from './chess/chess.component';
import { ChessmenAddComponent } from './chess/chessmen-add/chessmen-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, ChessComponent,ChessmenSelectComponent, ChessmenAddComponent]
})
export class HomePageModule {}

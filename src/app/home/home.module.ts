import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ChessmenSelectComponent } from './chess/chessmen-select/chessmen-select.component';
import { ChessComponent } from './chess/chess.component';
import { ChessmenAddComponent } from './chess/chessmen-add/chessmen-add.component';
import { SignupInfoComponent } from './chess/signup-info/signup-info.component';
import { ChessService } from './chess/services/chess.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginUserInfoComponent } from './chess/login-user-info/login-user-info.component';
import { ChessmenSequenceComponent } from './chess/chessmen-sequence/chessmen-sequence.component';
import { OtpComponent } from './chess/otp/otp.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, ChessComponent,ChessmenSelectComponent, ChessmenAddComponent,SignupInfoComponent, LoginUserInfoComponent, ChessmenSequenceComponent, OtpComponent],
  providers : [ChessService]
})
export class HomePageModule {}

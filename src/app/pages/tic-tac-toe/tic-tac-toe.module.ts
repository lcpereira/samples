import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicTacToeComponent } from './tic-tac-toe.component';
import { TicTacToeRoutingModule } from './tic-tac-toe-routing.module';

@NgModule({
  declarations: [
    TicTacToeComponent
  ],
  imports: [
    CommonModule,
    TicTacToeRoutingModule
  ]
})
export class TicTacToeModule { }

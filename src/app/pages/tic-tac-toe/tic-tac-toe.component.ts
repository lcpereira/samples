import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent {

  data: number[][] = this.instanceData();
  currentPlayer: 'X' | 'O' = 'X';
  playerX: number[] = [];
  playerO: number[] = [];
  hasWinner = false;
  score = {
    x: 0,
    o: 0
  };

  readonly validGame: number[][] = [
    [1, 2, 3], // horizontal
    [4, 5, 6], // horizontal
    [7, 8, 9], // horizontal
    [1, 4, 7], // vertical
    [2, 5, 8], // vertical
    [3, 6, 9], // vertical
    [1, 5, 9], // diagonal
    [7, 5, 3]  // diagonal
  ];

  constructor() { }

  onClick(col: number): void {
    const hasColInPlayerX = this.playerX.find(x => x === col);
    const hasColInPlayerO = this.playerO.find(o => o === col);

    if (hasColInPlayerX || hasColInPlayerO || this.hasWinner) {
      return;
    }

    const isPlayerX = this.currentPlayer === 'X';
    const playerValue = isPlayerX ? this.playerX : this.playerO;

    playerValue.push(col);
    this.hasWinner = this.isWinner(playerValue);

    if (this.hasWinner) {
      isPlayerX ? this.score.x += 1 : this.score.o += 1;
    } else {
      this.currentPlayer = isPlayerX ? 'O' : 'X';
    }
  }

  getLabel(col: number): string {
    const hasColInPlayerX = this.playerX.find(x => x === col);
    if (hasColInPlayerX) {
      return 'X';
    }

    const hasColInPlayerO = this.playerO.find(o => o === col);
    if (hasColInPlayerO) {
      return 'O';
    }

    return '';
  }

  resetGame(): void {
    this.data = this.instanceData();
    this.playerX = [];
    this.playerO = [];
    this.hasWinner = false;
    this.currentPlayer = 'X';
  }

  private isWinner(playerValue: number[]): boolean {
    const hasValidgame = this.validGame.find(game => {
      return (
        playerValue.includes(game[0]) &&
        playerValue.includes(game[1]) &&
        playerValue.includes(game[2])
      );
    });

    return hasValidgame ? true : false;
  }

  private instanceData(): number[][] {
    return [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
  }

}

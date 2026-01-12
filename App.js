const readline = require('readline');
const Game = require('./Game');

class App {
  constructor() {
    this.game = new Game();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  //initializes app
  start() {
    console.clear();
    console.log('\nWELCOME TO ROCK-PAPER-SCISSORS!\n');
    this.showMenu();
  }

  //manages gameplay
  playRound() {
    this.rl.question(
      `What will it be?\n
1) Rock
2) Paper
3) Scissors
4) Random!\n
Your choice: `,
      (answer) => {
        //callback returns control to showMenu()
        this.game.playRound(answer, () => {
          this.showMenu();
        });
      }
    );
  }

  //user menu choice
  showMenu() {
    this.rl.question(
      `Here are your options:
1) Play Round
2) View Stats
3) Exit\n
Your choice: `,
      (answer) => {
        if (answer === '1') {
          console.clear();
          this.playRound();
        } else if (answer === '2') {
          this.showStats();
        } else if (answer === '3') {
          this.end();
        } else {
          console.log('Invalid choice!\n');
          this.showMenu();
        }
      }
    );
  }

  //gameplay statistics page
  showStats() {
    console.clear();
    console.log('STATS ₊⋆ ࿔\n');
    console.log(`  Wins:        ${this.game.wins}`);
    console.log(`  Ties:        ${this.game.ties}`);
    console.log(`  Total Games: ${this.game.total}`);
    console.log(`  Losses:      ${this.game.losses}`);
    console.log(`  Win Rate:    ${this.game.winRate}%\n`);

    this.showMenu();
  }

  //exit app
  end() {
    console.log('\nThanks for playing! Bye ❤︎');
    this.rl.close();
  }
}

const newGame = new App();
newGame.start();

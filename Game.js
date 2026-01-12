const ASCII = require('./ASCII');
const player = require('play-sound')();

function playSFX(filename) {
  player.play(filename, (err) => {
    if (err) console.log('Could not play sound');
  });
}

class Game {
  constructor() {
    this.choices = ['rock', 'paper', 'scissors'];
    this.wins = 0;
    this.losses = 0;
    this.ties = 0;
    this.total = 0;
    this.winRate = 0;
  }
  playRound(answer, onComplete) {
    let playerChoice;

    if (answer === '4') {
      playerChoice = this.choices[Math.floor(Math.random() * 3)];
    } else {
      playerChoice = this.choices[answer - 1];
    }

    if (!playerChoice) {
      console.log('Invalid choice! Try again.\n');
      this.playRound();
      return;
    }

    const computerChoice = this.choices[Math.floor(Math.random() * 3)];

    //performs animation, then determines and displays the outcome
    this.showAnimation(computerChoice, () => {
      this.determineWinner(playerChoice, computerChoice);
      onComplete();
    });
  }

  //animates ASCII
  showAnimation(computerChoice, callback) {
    const textFrames = [
      'Rock',
      'Rock Paper',
      'Rock Paper Scissors',
      'Rock Paper Scissors says',
      'Rock Paper Scissors says SHOOT!',
    ];

    const handFrames = [
      ASCII.fist_up,
      ASCII.fist_down,
      ASCII.fist_up,
      ASCII.fist_down,
      ASCII[computerChoice],
    ];

    let frameIndex = 0;

    playSFX('./beep.wav');

    const interval = setInterval(() => {
      console.clear();
      console.log(textFrames[frameIndex]);
      console.log(handFrames[frameIndex]);
      frameIndex++;

      if (frameIndex >= handFrames.length) {
        clearInterval(interval);
        setTimeout(() => callback(), 1000);
      }
    }, 500);
  }

  //displays gameplay result
  determineWinner(playerChoice, computerChoice) {
    console.log(`Computer chose: ${computerChoice.toUpperCase()}`);
    console.log(`You chose: ${playerChoice.toUpperCase()}`);

    if (playerChoice === computerChoice) {
      console.log("It's a TIE!\n");
      this.ties++;
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      console.log(
        `${
          playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
        } beats ${computerChoice}! You WIN!\n`
      );
      this.wins++;
    } else {
      console.log(
        `${
          computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        } beats ${playerChoice}! You LOSE!\n`
      );
      this.losses++;
    }

    this.total++;
    this.winRate = Math.round((this.wins / this.total) * 100);
  }
}

module.exports = Game;

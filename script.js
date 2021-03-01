class GuessingGame {
  constructor(min, max) {
    this.secretNum = Math.floor(Math.random() * (max - min + 1)) + min;
    this.numAttempts = 0;
    this.isGameOver = false;
    console.log(`I'm thinking of a number between ${this.min} and ${this.max}`);
  }

  checkNum(numberGuess) {
    this.numAttempts++;
    if (numberGuess < this.secretNum) {
      console.log('Too small');
    } else if (numberGuess > this.secretNum) {
      console.log('Too big');
    } else {
      console.log('You win');
      this.isGameOver = true;
    }
  }

  askUser() {
    let guess = Number(prompt('Enter a number'));
    if (guess === null) {
      this.isGameOver = true;
    }
    this.checkNum(guess);
  }
}

function initialize() {
  let min = Number(prompt('Enter a min number'));
  let max = Number(prompt('Enter a max number'));
  console.log(min, max);
  let game = new GuessingGame(min, max);
  console.log('secret num', game.secretNum);
  while (!game.isGameOver) {
    game.askUser();
  }
  console.log(`You won in ${game.numAttempts} tries`);
}

initialize();

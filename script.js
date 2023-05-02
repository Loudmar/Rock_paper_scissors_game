const buttons = document.querySelectorAll('.choices button');
const reset = document.querySelector('.reset-button');
const result = document.querySelector('.result');
const player = document.querySelector('.score-player');
const computer = document.querySelector('.score-computer');
const ties = document.querySelector('.score-ties');
const gameTotal = document.querySelector('.score-total');
const setAutoPlay = document.querySelector('.auto-play');

let score = {
  wins: 0,
  losses: 0,
  ties: 0
};

//To save the result in local storage use the below;
//const scoreSaved = JSON.parse(localStorage.getItem('score')); 

//After the file is deleted from local storage you may get an error of null. If so, add the this if statement below to give a default value to the score.

/* if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
} */

function computerPlay() {
  const options = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function playRound(playerSelection) {
  const computerSelection = computerPlay();
  let outcome;
  if (playerSelection === 'rock') {
    if (computerSelection === 'rock') {
      outcome = 'It\'s a tie🎌';
      score.ties += 1;
    } else if (computerSelection === 'paper') {
      outcome = 'You lose💀 Paper beats rock.';
      score.losses += 1;
    } else {
      outcome = 'You win🏆 Rock beats scissors.';
      score.wins += 1;
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      outcome = 'You win🏆 Paper beats rock.';
      score.wins += 1;
    } else if (computerSelection === 'paper') {
      outcome = 'It\'s a tie🎌';
      score.ties += 1
    } else {
      outcome = 'You lose💀 Scissors beats paper.';
      score.losses += 1;
    }
  } else {
    if (computerSelection === 'rock') {
      outcome = 'You lose💀 Rock beats scissors.';
      score.losses += 1;
    } else if (computerSelection === 'paper') {
      outcome = 'You win🏆 Scissors beats paper.';
      score.wins += 1;
    } else {
      outcome = 'It\'s a tie🎌';
      score.ties += 1
    }
  }
  result.textContent = outcome;
  //console.log(score.ties);
  player.innerHTML = score.wins;
  computer.innerHTML = score.losses;
  ties.innerHTML = score.ties;
  gameTotal.innerHTML = score.wins + score.losses + score.ties;
  //localStorage.setItem('score', JSON.stringify(score));
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.className);
  });
});

reset.addEventListener('click', () => {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  result.textContent = "";
  player.innerHTML = "";
  computer.innerHTML = "";
  ties.innerHTML = "";
  gameTotal.innerHTML = "";
  //localStorage.removeItem('score');
});

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  
  if (!isAutoPlaying) {
    intervalId = setInterval(function() {
    const playerMove = computerPlay();
    playRound(playerMove);
  }, 2000);
    isAutoPlaying = true;
    setAutoPlay.innerHTML = 'Stop Auto Play';
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    setAutoPlay.innerHTML = 'Auto Play';
  }
}

setAutoPlay.addEventListener('click', () => {
  autoPlay();
});

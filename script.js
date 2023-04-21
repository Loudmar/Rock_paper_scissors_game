const buttons = document.querySelectorAll('.choices button');
const result = document.querySelector('.result');

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
    } else if (computerSelection === 'paper') {
      outcome = 'You lose💀 Paper beats rock.';
    } else {
      outcome = 'You win🏆 Rock beats scissors.';
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      outcome = 'You win🏆 Paper beats rock.';
    } else if (computerSelection === 'paper') {
      outcome = 'It\'s a tie🎌';
    } else {
      outcome = 'You lose💀 Scissors beats paper.';
    }
  } else {
    if (computerSelection === 'rock') {
      outcome = 'You lose💀 Rock beats scissors.';
    } else if (computerSelection === 'paper') {
      outcome = 'You win🏆 Scissors beats paper.';
    } else {
      outcome = 'It\'s a tie🎌';
    }
  }
  result.textContent = outcome;
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.className);
  });
});

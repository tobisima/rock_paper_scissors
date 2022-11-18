const body = document.querySelector('body');
const labels = document.querySelectorAll('.labels');
const playerLabel = document.querySelector('#player-label');
const computerLabel = document.querySelector('#computer-label');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const fieldFooter = document.querySelector('.field-footer');
const playAgainButton = document.createElement('button');
const winnerAnnouncement = document.createElement('h3')
const buttons = document.querySelectorAll('button');

for (const button of buttons ) {
  button.onclick = () => playRound(button.textContent, computerPlay());
}

labels.forEach(label => label.addEventListener('transitionend', removeTransition));

function removeTransition() {
labels.forEach(label => label.classList.remove('zoom-by-click'));
}

function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3);
  return randomNumber === 1 ? "Rock" :
  randomNumber === 2 ? "Paper" : "Scissors";
}

function playRound(playerSelection, computerSelection) {
  playerLabel.textContent = playerSelection; 
  computerLabel.textContent = computerSelection;
  if (playerSelection == "Rock" && computerSelection == "Scissors" ||
    playerSelection == "Paper" && computerSelection == "Rock" ||
    playerSelection == "Scissors" && computerSelection == "Paper") {
    fieldFooter.textContent =
    "You Win! " + playerSelection + " beats " + computerSelection;
    playerScore.textContent++;
  } else if (playerSelection == computerSelection) {
    fieldFooter.textContent = "Draw!";
  } else { 
    fieldFooter.textContent =
    "You Lose! " + computerSelection + " beats " + playerSelection;
    computerScore.textContent++;
  }  
  announceWinner();
  labels.forEach(label => label.classList.add('zoom-by-click'));
}
  
function announceWinner() {
  if (playerScore.textContent == 5) {
    body.appendChild(winnerAnnouncement);
    winnerAnnouncement.textContent = 'Game Over! You Won!';  
    offerNewGame();
  } else if (computerScore.textContent == 5) {
    body.appendChild(winnerAnnouncement);
    winnerAnnouncement.textContent = 'Game Over! Computer Won!'; 
    offerNewGame();
  }
}

function offerNewGame() {
  buttons.forEach(button => body.removeChild(button));
  playAgainButton.classList.add('play-again');
  playAgainButton.textContent = 'Play Again';
  body.appendChild(playAgainButton);
}

function startNewGame() {
  body.removeChild(playAgainButton);
  body.removeChild(winnerAnnouncement);          
  buttons.forEach(button => body.appendChild(button));
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  playerLabel.textContent = 'Rock';
  computerLabel.textContent = 'Rock';
  fieldFooter.textContent = 'Click Rock, Paper or Scissors';
}
  
  playAgainButton.onclick = startNewGame;
  
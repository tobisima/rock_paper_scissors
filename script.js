function computerPlay(min, max) {
  let result = Math.floor(Math.random() * (max-min) ) + min;
    if (result === 1) {
    return "Rock"
    } else if(result === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection =="Rock" && computerSelection =="Scissors" ||
      playerSelection =="Paper" && computerSelection =="Rock" ||
      playerSelection =="Scissors" && computerSelection =="Paper") {
       return "You Win! " + playerSelection + " beats " + computerSelection;
    }
  else if (playerSelection =="Scissors" && computerSelection =="Rock" ||
           playerSelection =="Rock" && computerSelection =="Paper" ||
           playerSelection =="Paper" && computerSelection =="Scissors") {
      return "You Lose! " + computerSelection + " beats " + playerSelection;
    } 
      else {
        return "Draw! Play Again"
      }
}

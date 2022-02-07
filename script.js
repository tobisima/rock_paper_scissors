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
  let playerSelectionI = playerSelection.charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1);
  console.log(playerSelectionI);
  if (playerSelectionI =="Rock" && computerSelection =="Scissors" ||
      playerSelectionI =="Paper" && computerSelection =="Rock" ||
      playerSelectionI =="Scissors" && computerSelection =="Paper") {
       return "You Win! " + playerSelectionI + " beats " + computerSelection;
    }
  else if (playerSelectionI =="Scissors" && computerSelection =="Rock" ||
           playerSelectionI =="Rock" && computerSelection =="Paper" ||
           playerSelectionI =="Paper" && computerSelection =="Scissors") {
      return "You Lose! " + computerSelection + " beats " + playerSelectionI;
    } 
      else {
        return "Draw! Play Again"
      }
}
console.log (playRound("roCK", "Paper"))
function computerPlay() {
 
   const result = Math.floor(Math.random() * 3);

     if (result === 1) {
        return "Rock"
     } else if(result === 2) {
        return "Paper"
     } else {
        return "Scissors"
     }
}

function playRound(playerSelection, computerSelection) {
   const playerSelectionI = playerSelection.charAt(0).toUpperCase() +
         playerSelection.toLowerCase().slice(1);
  
         console.log(playerSelectionI, computerSelection);
  
     if (playerSelectionI =="Rock" && computerSelection =="Scissors" ||
         playerSelectionI =="Paper" && computerSelection =="Rock" ||
         playerSelectionI =="Scissors" && computerSelection =="Paper") {
     return "You Win! " + playerSelectionI + " beats " + computerSelection;
     } else if (playerSelectionI == computerSelection) {
      return "Draw!"
     } else {
      return "You Lose! " + computerSelection + " beats " + playerSelectionI;
  }
}

function game(playerScore, computerScore) {
  for (let i = 0; i < 5; i++) {
    const roundResult = playRound(
        prompt("Enter 'Rock' or 'Paper' or 'Scissors'"), computerPlay());
    
    if (roundResult.charAt(4) == "W") {
        ++playerScore;
    } else if (roundResult.charAt(4) == "L") {
        ++computerScore;
    }    

        console.log(roundResult); 
        console.log("score: " + playerScore, computerScore);
  }
  
    if (playerScore > computerScore) {
          return "Game Over! You Win!"
    } else if (playerScore < computerScore) {
          return "Game Over! You Lose!"
      } else {
          return "Game Over! Draw!"
    }
}
  
console.log(game(0, 0));
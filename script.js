function computerPlay() {

   const randomNumber = Math.floor(Math.random() * 3);

  return randomNumber === 1 ? "Rock" :
         randomNumber === 2 ? "Paper" : "Scissors";
}

function playRound(playerSelection, computerSelection) {

         playerSelection = playerSelection.charAt(0).toUpperCase() +
                           playerSelection.toLowerCase().slice(1);

         console.log(playerSelection, computerSelection);

  return playerSelection == computerSelection ? "Draw!" :
         playerSelection == "Rock" && computerSelection == "Scissors" ||
         playerSelection == "Paper" && computerSelection == "Rock" ||
         playerSelection == "Scissors" && computerSelection == "Paper" ?
         "You Win! " + playerSelection + " beats " + computerSelection :
         "You Lose! " + computerSelection + " beats " + playerSelection;
}

function game(playerScore, computerScore) {

    for (let i = 0; i < 5; i++) {

         const roundResult = playRound(prompt(
               "Enter 'Rock' or 'Paper' or 'Scissors'"),computerPlay());
    
         roundResult.charAt(4) == "W" ?
         ++playerScore :
         roundResult.charAt(4) == "L" ?
         ++computerScore : playerScore += 0;
        
         console.log(roundResult); 
         console.log("score: " + playerScore, computerScore);
    }
  
  return playerScore > computerScore ?
         "Game Over! You Win!" :
         playerScore < computerScore ?
         "Game Over! You Lose!" :
         "Game Over! Draw!";
}
  
console.log(game(0, 0));
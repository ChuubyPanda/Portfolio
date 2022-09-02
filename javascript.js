function getComputerChoice(){
    let sign = Math.floor(Math.random() * 3);
    if(sign === 1){
        return "Rock";
    }else if(sign === 2){
        return "Paper";
    }else{
        return "Scissors"
    }
}
function roundOfRPS(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    if(playerSelection === "ROCK"){
        if(computerSelection === "Rock"){
            return "You tied! Rock ties Rock";
        }else if(computerSelection === "Paper"){
            return "You Lose! Paper beats Rock";
        }else{
            return "You win! Rock beats Scissors"
        }
    }else if(playerSelection === "PAPER"){
        if(computerSelection === "Paper"){
            return "You tied! Paper ties Paper";
        }else if(computerSelection === "Rock"){
            return "You win! Paper beats Rock";
        }else{
            return "You Lose! Scissors loses to Paper";
        }
    }else{
        if(computerSelection === "Scissors"){
            return "You tied! Scissors ties Scissors";
        }else if(computerSelection === "Paper"){
            return "You win! Scissors beats Paper";
        }else{
            return "You Lose! Scissors loses to Rock";
        }
    }
}
 
function game(){
    let compScore = 0;
    let playerScore = 0;
    for(let i = 0; i<5; i++){
        let sign = String(prompt("Enter Rock, paper, and Scissors: "));
        let result = roundOfRPS(sign,getComputerChoice())
        console.log(result);
        if (result.slice(0,5).toUpperCase() === "YOU W"){
            playerScore++;
        }else if(result.slice(0,5).toUpperCase() === "YOU L"){
            compScore++;
        }
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + compScore);
    }
    if(compScore > playerScore){
        return "Computer wins";
    }else if(playerScore > compScore){
        return "Player wins";
    }else{
        return "Tie!"
    }
}

console.log(game())


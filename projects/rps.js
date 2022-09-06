let compScore = 0;
let playerScore = 0;
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const outcome = document.querySelector('.outcome')
function getComputerChoice(){
    let sign = Math.floor(Math.random() * 3);
    if(sign === 1){
        return "Rock";
    }else if(sign === 2){
        return "Paper";
    }else{
        return "Scissors";
    }
}
function roundOfRPS(player){
    let playerSelection = player.toUpperCase(); 
    computerSelection = getComputerChoice();
    const results = document.querySelector('.results');
    if(playerSelection === "ROCK"){
        if(computerSelection === "Rock"){
            results.textContent = ("You tied! Rock ties Rock");
        }else if(computerSelection === "Paper"){
            results.textContent = ("You Lose! Rock loses to Paper");
            compScore++;
        }else{
            results.textContent = ("You win! Rock beats Scissors");
            playerScore++;
        }
    }else if(playerSelection === "PAPER"){
        if(computerSelection === "Paper"){
            results.textContent = ("You tied! Paper ties Paper");
        }else if(computerSelection === "Rock"){
            results.textContent = ("You win! Paper beats Rock");
            playerScore++;
        }else{
            results.textContent = ("You Lose! Paper loses to Scissors");
            compScore++;
        }
    }else{
        if(computerSelection === "Scissors"){
            results.textContent = ("You tied! Scissors ties Scissors");
        }else if(computerSelection === "Paper"){
            results.textContent = ("You win! Scissors beats Paper");
            playerScore++;
        }else{
            results.textContent = ("You Lose! Scissors loses to Rock");
            compScore++;
        }
    }
}
 
function checkForWinner(playerScore, compScore){
    if(playerScore === 5){
        const h2 = document.createElement('h2');
        outcome.appendChild(h2);
        h2.textContent = `You won ${playerScore} to ${compScore} against the computer:<`;
    }
    if(compScore === 5){
        const h2 = document.createElement('h2');
        outcome.appendChild(h2);
        h2.textContent = `You lost by ${playerScore} to ${compScore} `;
    }
}
function resetScore(){
    playerScore = 0;
    compScore = 0;
}
rock.addEventListener('click', () => {
    roundOfRPS('rock');
    checkForWinner(playerScore,compScore);
    if(playerScore === 5 || compScore === 5){
        resetScore();
    }
});
paper.addEventListener('click', () => {
    roundOfRPS('paper');
    checkForWinner(playerScore,compScore);
    if(playerScore === 5 || compScore === 5){
        resetScore();
    }
})
scissors.addEventListener('click', () => {
    roundOfRPS('scissors');
    checkForWinner(playerScore, compScore);
    if(playerScore === 5 || compScore === 5){
        resetScore();
    }
})


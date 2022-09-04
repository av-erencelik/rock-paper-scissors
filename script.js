













function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber == 0) {
        return "rock"
    }else if (randomNumber == 1) {
        return "paper"
    }else {return "scissors"}
}
function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        return "Draw! No winner"
    }else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper" ) {
        return "You lose! Paper beats Rock"
    }else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors" ) {
        return "You win! Rock beats scissors"
    }else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors" ) {
        return "You lose! Scissors beats paper"
    }else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock" ) {
        return "You win! Paper beats rock"
    }else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock" ) {
        return "You lose! Rock beats scissors"
    }else {return "You win! Scissors beats paper"}
}
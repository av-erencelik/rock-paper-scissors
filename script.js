game()













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
        return "Draw!"
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
function game() {
    let roundNumber = 0
    let playerScore = 0
    let computerScore = 0
    console.log("Rock Paper Scissors Game")
    while (true) {
        let playerChoice = prompt("What is your choice(rock-paper-scissors): ")
        while (!(playerChoice.toLowerCase() == "scissors" || playerChoice.toLowerCase() == "rock" || playerChoice.toLowerCase() == "paper")) {
            playerChoice = prompt("Please enter valid answer(rock-paper-scissors): ")
        }
        const computerChoice = getComputerChoice()
        const result = playRound(playerChoice,computerChoice)
        console.log(result)
        if (result.includes("win")) {
            playerScore ++
            roundNumber ++
        }else if (result.includes("lose")) {
            computerScore ++
            roundNumber ++
        }
        if (computerScore == 3) {
            console.log("You lost! Don't be harsh on yourself. You can try again :)")
            break;
        }else if (playerScore == 3) {
            console.log("You won! Congratulations")
            break;
        }
    }
}


let playerScore = 0
let computerScore = 0
document.getElementById("newGame").addEventListener("click",restart)

document.getElementById("rock").addEventListener("click", playRock)
document.getElementById("paper").addEventListener("click",playPaper)
document.getElementById("scissors").addEventListener("click",playScissors)




function playRock () {
    
    const playerChoice = "rock"
    const computerChoice = getComputerChoice()
    let result = playRound(playerChoice,computerChoice)
    document.getElementById("result").innerHTML = `${result}`
    if (result.includes("win")) {
        playerScore ++
        
    }else if (result.includes("lose")) {
        computerScore ++
        
    }
    game(playerScore,computerScore)
}
function playPaper () {
   
    const playerChoice = "paper"
    const computerChoice = getComputerChoice()
    let result = playRound(playerChoice,computerChoice)
    document.getElementById("result").innerHTML = `${result}`
    if (result.includes("win")) {
        playerScore ++
        
    }else if (result.includes("lose")) {
        computerScore ++     
    }
    game(playerScore,computerScore)
}

function playScissors () {
    
    const playerChoice = "scissors"
    const computerChoice = getComputerChoice()
    let result = playRound(playerChoice,computerChoice)
    document.getElementById("result").innerHTML = `${result}`
    if (result.includes("win")) {
        playerScore ++
        
    }else if (result.includes("lose")) {
        computerScore ++
        
    }
    game(playerScore,computerScore)
}


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
function game(pscore,cscore) {
    let pScore = pscore
    let cScore = cscore

    if (cScore == 5) {
            document.getElementById("resultGame").innerHTML = "You lost! Don't be harsh on yourself. You can try again :)";
            document.getElementById("newGame").style.display = "inline-block"
    }else if (pScore == 5) {
            document.getElementById("resultGame").innerHTML = "You won! Congratulations!"
            document.getElementById("newGame").style.display = "inline-block"
    }
    document.getElementById("player").innerHTML = `Player: ${pScore}`
    document.getElementById("ai").innerHTML = `Computer: ${cScore}`
    
}
function restart() {
    playerScore = 0
    computerScore = 0
    document.getElementById("resultGame").innerHTML = ""
    document.getElementById("resultGame").innerHTML = ""
    document.getElementById("result").innerHTML = ""
    document.getElementById("player").innerHTML = `Player: 0`
    document.getElementById("ai").innerHTML = `Computer: 0`
    document.getElementById("newGame").style.display = "none"
}
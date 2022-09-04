













function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber == 0) {
        return "rock"
    }else if (randomNumber == 1) {
        return "paper"
    }else {return "scissors"}
}

const getComputerChoice = () => {
    let x = Math.floor(Math.random() * 3 + 1)
    if (x == 1 ) {
        return "rock"
    }
    else if (x==2) {
        return "paper"
    }
    else if (x == 3 ){
        return "scissors"
    }
}
const runGame = (playerSelection, computerSelection) => {
  if (playerSelection.toLowerCase() === computerSelection) {
    alert("Draw")
    return "Draw"
  } else if ((playerSelection.toLowerCase () == "rock" && computerSelection == "scissors") || (playerSelection.toLowerCase () == "scissors" && computerSelection == "paper") || (playerSelection.toLowerCase () == "paper" && computerSelection == "rock")) {
    alert("Win")
    return "Win! "+playerSelection+" beats "+computerSelection+ "!"
  } else if ((playerSelection.toLowerCase () == "rock" && computerSelection == "paper") || (playerSelection.toLowerCase () == "scissors" && computerSelection == "rock") || (playerSelection.toLowerCase () == "paper" && computerSelection == "scissors")) {
    alert("Loss")
    return "Loss... "+computerSelection+" beats "+playerSelection+ "!"
  }
}

const getComputerChoice = () => {
    let x = Math.floor(Math.random() * 3 + 1)
    if (x == 1 ) {
        return "Rock"
    }
    else if (x==2) {
        return "Paper"
    }
    else if (x == 3 ){
        return "Scissors"
    }
}

let yourChoice = prompt ("Choose")

const runGame = (playerSelection, computerSelection) => {
    if (playerSelection.toLowerCase() === computerSelection) {
        return "Draw"
      } else if ((playerSelection.toLowerCase () == "rock" && computerSelection == "scissors") || (playerSelection.toLowerCase () == "scissors" && computerSelection == "paper") || (playerSelection.toLowerCase () == "paper" && computerSelection == "rock")) {
        return "Win" +playerSelection + " "+computerSelection
      } else if ((playerSelection.toLowerCase () == "rock" && computerSelection == "paper") || (playerSelection.toLowerCase () == "scissors" && computerSelection == "rock") || (playerSelection.toLowerCase () == "paper" && computerSelection == "scissors")) {
        return "Loss"+playerSelection+ " "+computerSelection
      }
  }

  const game = () => {
    let player = 0
    let computer = 0
    for (let i = 0; i < 5; i++) {
      let currentMatch = runGame(yourChoice, getComputerChoice())
      console.log(currentMatch)
     if (currentMatch.includes("Win")) {
        player ++
      } else if (currentMatch.includes("Loss")) {
        computer ++
      }
    }
    if (player > computer) {
      return "Player Wins!"
    } else if (player < computer) {
      return "Computer Wins!"
    } else {
      return "Draw :("
    } 
  }

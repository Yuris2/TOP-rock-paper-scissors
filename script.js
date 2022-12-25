
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

const runGame = (playerSelection, computerSelection) => {
    if (playerSelection.toLowerCase() === computerSelection) {
        return "Draw"
      } else if ((playerSelection.toLowerCase () == "rock" && computerSelection == "scissors") || (playerSelection.toLowerCase () == "scissors" && computerSelection == "paper") || (playerSelection.toLowerCase () == "paper" && computerSelection == "rock")) {
        return "Win! "+playerSelection+" beats "+computerSelection+ "!"
      } else if ((playerSelection.toLowerCase () == "rock" && computerSelection == "paper") || (playerSelection.toLowerCase () == "scissors" && computerSelection == "rock") || (playerSelection.toLowerCase () == "paper" && computerSelection == "scissors")) {
        return "Loss... "+computerSelection+" beats "+playerSelection+ "!"
      }
  }

  const game = () => {
    let player = 0
    let computer = 0
    while (true) {
      let yourChoice = prompt ("Choose Rock, Paper, or Scissors")
      let currentMatch = runGame(yourChoice, getComputerChoice())
      console.log(currentMatch)
     if (currentMatch.includes("Win")) {
        player ++
      } else if (currentMatch.includes("Loss")) {
        computer ++
      }
      if (player == 5) {
        return "Player Wins!"
      } else if (computer == 5) {
        return "Computer Wins!"
      } 
    }
  }

  console.log("You will be playing a computer in a game of Rock, Paper, Scissors. The winner will be the first one who wins 5 games")
  
  console.log(game())



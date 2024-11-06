let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"]
    random_choice = choices[Math.floor(Math.random() * choices.length)]
    return random_choice
}

function getHumanChoice(){
    user_choice = prompt("Please enter your choice: ")
    return user_choice
}

function playRound(humanSelection, computerSelection){
    if (humanSelection === computerSelection){
        console.log("It's a tie!")
    } else if (humanSelection === "rock" && computerSelection === "scissors"){
        console.log("human wins! Rock beats Scissors!")
        humanScore++
    } else if (humanSelection === "paper" && computerSelection === "rock"){
        console.log("human wins! Paper beats Rock!")
        humanScore++
    } else if (humanSelection === "scissors" && computerSelection === "paper"){
        console.log("human wins! Scissors beats Paper!")
        humanScore++
    } else if (computerSelection === "rock" && humanSelection === "scissors"){
        console.log("computer wins! Rock beats Scissors!")
        computerScore++
    } else if (computerSelection === "paper" && humanSelection === "rock"){
        console.log("computer wins! Paper beats Rock!")
        computerScore++
    } else if (computerSelection === "scissors" && humanSelection === "paper"){
        console.log("computer wins! Scissors beats Paper!")
        computerScore++
    }
  }

  function playGame(){
    let rounds = 5
    let i = 0
    for (i = 0; i < rounds; i++){
        let humanSelection = getHumanChoice()
        let computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
    }
    if (humanScore > computerScore){
        console.log("Human wins " + humanScore + " to " + computerScore + "!")
    } else if (humanScore < computerScore){
        console.log("Computer wins " + computerScore + " to " + humanScore + "!")
    }
  }

  console.log(playGame())
  
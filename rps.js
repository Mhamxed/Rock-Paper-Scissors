const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")
const resultDisplay = document.getElementById("resultDisplay")
const res = document.getElementById("first")
const score = document.getElementById("score")
let humanScore = 0
let computerScore = 0

let choices = ["rock", "paper", "scissors"]

function getComputerChoice(){
    random_choice = choices[Math.floor(Math.random() * choices.length)]
    return random_choice
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

async function playRound(humanSelection){
    if (humanScore < 5 && computerScore < 5){
        let computerSelection = getComputerChoice()
        let result = ''
        if (humanSelection === computerSelection){
            result = "IT'S A TIE!"
        } else if (humanSelection === "rock" && computerSelection === "scissors"){
            result = "You Win! Rock > Scissors!"
            humanScore++
        } else if (humanSelection === "paper" && computerSelection === "rock"){
            result = "You Win! Paper > Rock!"
            humanScore++
        } else if (humanSelection === "scissors" && computerSelection === "paper"){
            result = "You Win! Scissors > Paper!"
            humanScore++
        } else if (computerSelection === "rock" && humanSelection === "scissors"){
            result = "You Lose! Rock > Scissors!"
            computerScore++
        } else if (computerSelection === "paper" && humanSelection === "rock"){
            result = "You Lose! Paper > Rock!"
            computerScore++
        } else if (computerSelection === "scissors" && humanSelection === "paper"){
            result = "You Lose! Scissors > Paper!"
            computerScore++
        }
        if (humanScore < 5 && computerScore < 5){
            playerDisplay.textContent = "PLAYER: " + humanSelection.toUpperCase()
            computerDisplay.textContent = "COMPUTER: " + computerSelection.toUpperCase()
            res.textContent = result
            score.textContent = "SCORE: " + humanScore + "/" + computerScore
        } else if (humanScore >= 5){
                res.textContent = "YOU WIN"
                score.textContent = "SCORE: " + humanScore + "/" + computerScore
                await sleep(2000)
                humanScore = 0
                computerScore = 0
                res.textContent = "First To Score 5 Points Wins The Game"
                score.textContent = "SCORE: 0/0"
                playerDisplay.textContent = ""
                computerDisplay.textContent = ""

        } else {
                res.textContent = "YOU LOSE"
                score.textContent = "SCORE: " + humanScore + "/" + computerScore
                await sleep(2000)
                humanScore = 0
                computerScore = 0
                res.textContent = "First To Score 5 Points Wins The Game"
                score.textContent = "SCORE: 0/0"
                playerDisplay.textContent = ""
                computerDisplay.textContent = ""
        }
    }
}

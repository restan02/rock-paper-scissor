let pScore = 0
let cScore = 0
const result = ["Player Wins", "Computer wins", "It's a Draw!"]
const rcs = ["rock","paper","scissor"]

function getComputerChoice(){
    return Math.floor(Math.random() * 3)
}

function playRound(playerSelection, computerSelection){
if(playerSelection === computerSelection+1||playerSelection === computerSelection-2){
    console.log(`Player: ${rcs[playerSelection]}`)
    console.log(`Computer: ${rcs[computerSelection]}`)
    return result[0]
    }
        
else if(playerSelection===computerSelection){
    console.log(`Player: ${rcs[playerSelection]}`)
    console.log(`Computer: ${rcs[computerSelection]}`)
    return result[2]
    }
else{
    console.log(`Player: ${rcs[playerSelection]}`)
    console.log(`Computer: ${rcs[computerSelection]}`)
    return result[1]
    }
}

function game(){

    for(let i = 1; i<=5; i++){
    console.log(`Round ${i}`)
    let roundResult = playRound(prompt("Please pick a number from 0-2"), getComputerChoice())
    console.log(roundResult)
   
    }
}

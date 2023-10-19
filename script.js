let pScore = 0
let cScore = 0
const rcs = ["rock","paper","scissor"]

function getComputerChoice(){
    return Math.floor(Math.random() * 3)
}

function playRound(playerSelection, computerSelection){
if(playerSelection === computerSelection+1||playerSelection === computerSelection-2){
    console.log(
        `Player: ${rcs[playerSelection]}
        Computer: ${rcs[computerSelection]}
        Player Wins!`)}
else if(playerSelection===computerSelection){
    console.log(
        `Player: ${rcs[playerSelection]}
        Computer: ${rcs[computerSelection]}
        It's a draw!`)}
else{
    console.log(
        `Player: ${rcs[playerSelection]}
        Computer: ${rcs[computerSelection]}
        computer wins Wins!`)}
}

function game(){

    for(let i = 1; i<=5; i++){
    console.log(`Round ${i}`)


    }
}

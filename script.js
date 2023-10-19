function getComputerChoice(){
    return Math.floor(Math.random() * 3)
}

function playRound(playerSelection, computerSelection){
if(playerSelection === computerSelection+1||computerSelection === playerSelection-1){
    console.log(`Player: ${playerSelection}
                 Computer: ${computerSelection}
                 Player Wins!`)}
else if(playerSelection===computerSelection){
    console.log(`Player: ${playerSelection}
                 Computer: ${computerSelection}
                 It's a draw!`)}
else{
    console.log(`Player: ${playerSelection}
                 Computer: ${computerSelection}
                 computer Wins!`)}
}
}

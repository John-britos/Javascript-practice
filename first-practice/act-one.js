function getComputerPick (){
    //1/1-----2/3------3/3
    let randomNumber = Math.random() 
    if (randomNumber >= 0 && randomNumber < 1/3){
        return "rock"
    }else if (randomNumber >= 1/3 && randomNumber < 2/3){
        return "paper"
    }else if (randomNumber >= 2/3 && randomNumber < 1){
        return "scissors"
    }
    
}
function rock(){
    playRound("rock");
    
}

function paper(){
    playRound("paper");
}

function scissors(){
    playRound("scissors");
}
function playRound(playerChoice){
    let computerChoice = getComputerPick();
    
    if (playerChoice === computerChoice){
        alert(`Its a tie, You and the computer both chose ${computerChoice}`) 
    } 
    else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") || 
    (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        alert(`You Win, you chose ${playerChoice} while computer chose ${computerChoice}`);
    }
    else{
        alert(`You Lose, you chose ${playerChoice} while computer chose ${computerChoice}`);
    }

}
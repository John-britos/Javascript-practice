const score = {
    wins : 0,
    losses: 0,
    ties: 0
};

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
        score.ties ++;
        document.querySelector('.score').innerHTML = 
        `Its a tie, You and the computer both chose ${computerChoice} 
            Score: wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;
    } 
    else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") || 
    (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        score.wins ++;
        document.querySelector('.score').innerHTML = `You Win, you chose ${playerChoice} while computer chose ${computerChoice}
            Score: wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;
    }
    else{
        score.losses ++;
        document.querySelector('.score').innerHTML = `You Lose, you chose ${playerChoice} while computer chose ${computerChoice}
            Score: wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;
    }

    
}
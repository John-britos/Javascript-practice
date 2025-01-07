let playerLives = 10;
let computerNumber = getRandomNumber();

function getRandomNumber(){
    return Math.floor(Math.random()* 100) + 1;
}

function playerGuess(guessInput){
    const inputField = document.getElementById(guessInput);
    const playerNumber = parseInt(inputField.value, 10);

    gameRound(playerNumber);
}

function livesUpdate(){
    document.getElementById("lives").textContent = `Lives left: ${playerLives}`;
}

function gameRound(playerNumber){
    const gamePrompt = document.getElementById("prompt");
    console.log(computerNumber);
    
    if (playerNumber < computerNumber){
        gamePrompt.textContent = "The Computer number is greater than your number";
    } else if (playerNumber > computerNumber){
        gamePrompt.textContent = "The Computer number is less than your number";
    } else {
        gamePrompt.textContent = `You guessed ${computerNumber}, you are a prophet.`;
        return;
    }

    playerLives--;
    livesUpdate();

    if(playerLives === 0){
        gamePrompt.textContent = "You lose you bitch";
        resetGame();
    }
}

function resetGame(){
    playerLives = 10;
    computerNumber = getRandomNumber();
    livesUpdate();
    document.getElementById("prompt").textContent = "New game started. Make your guess!";
}

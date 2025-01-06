function getRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber;
}

console.log(getRandomNumber());


function playerGuess(number){
    let computerNumber = getRandomNumber();    
    playerNumber = document.getElementById(number);

    if (playerNumber === computerNumber) {
        alert(`You Guessed ${computerNumber} and you are right! are you a prophet!`);        
    } else {
        alert(`You lost bitch the number is ${computerNumber}`);
    }
    
    
}


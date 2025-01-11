function calculateGrade(score) {
    let gradeInput = document.getElementById(score);
    let grade = parseInt(gradeInput.value, 10);

    if (isNaN(grade) || grade <= 0 || grade > 100) {
        alert("Only enter a number between 1 and 100!");
        gradeInput.value = ''; 
        gradeInput.focus(); 
        return;
    }

    displayGrade(grade);
    gradeInput.value = '';
    gradeInput.focus(); 
}

function displayGrade(grade){
    let prompt = document.getElementById("prompt");

    if(grade >= 90 && grade <=100){
        prompt.textContent = "Excellent work! Keep it up";
    }else if(grade >= 80 && grade < 90){
        prompt.textContent = "Good job! You're doing well!";
    }else if(grade < 80){
        prompt.textContent = "Failed. Don't give up, try harder next time!";
    }
    
    return prompt;
}

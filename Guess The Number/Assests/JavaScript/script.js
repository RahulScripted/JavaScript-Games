let msg1 = document.getElementById("message1");
let msg2 = document.getElementById("message2");
let msg3 = document.getElementById("message3");

let resetBtn = document.getElementById("resetBtn");
resetBtn.style.display = "none";

let answer = Math.floor(Math.random() * 100) + 1;
let noOfGuess = 0;
let guessNum = [];

function play(){
    let user_guess = document.getElementById("guess").value;
    resetBtn.style.display = "inline-block";

    if(user_guess < 1 || user_guess > 100) alert("Please enter a valid number");
    else{
        guessNum.push(user_guess);
        noOfGuess++;

        // For Low
        if(user_guess < answer){
            msg1.textContent = "Your guess is too low🙁";
            msg2.textContent = "No. of guesses : " + noOfGuess;
            msg3.textContent = "Guessed Number are : " + guessNum;
        }

        // For high
        else if(user_guess > answer){
            msg1.textContent = "Your guess is too high🙁";
            msg2.textContent = "No. of guesses : " + noOfGuess;
            msg3.textContent = "Guessed Number are : " + guessNum;
        }

        // For equal
        else if(user_guess == answer){
            msg1.textContent = "Yuppie😍";
            msg2.textContent = "Guessed in : " + noOfGuess;
            msg3.textContent = "Guessed Number are : " + guessNum;
            document.getElementById("guessBtn").style.display = "none";
        }
    }
}

function reset(){
    // Reset variables
    noOfGuess = 0;
    guessNum = [];
    answer = Math.floor(Math.random() * 100) + 1;

    // Clear input field and reset messages
    document.getElementById("guess").value = "";
    msg1.textContent = "Number of guesses are : 0";
    msg2.textContent = "Guessed numbers are : None";
    msg3.textContent = "";

    // Hide reset button and show the guess button again
    resetBtn.style.display = "none";
    document.getElementById("guessBtn").style.display = "inline-block";
}
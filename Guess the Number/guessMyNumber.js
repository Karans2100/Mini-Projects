"use strict";

let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

let score = 20;
const scoreEl = document.querySelector("#score-el").textContent;
document.querySelector("#score-el").textContent = scoreEl + score;
let highScore = 0;
const highScoreEl = document.querySelector("#highscore-el").textContent;

function checkNumber() {
    let inputNumber = document.querySelector("input").value;
    if(inputNumber === "") {
        document.querySelector("#result-el").textContent = "No number entered";
        return;
    }
    if(inputNumber > 20 || inputNumber < 1) {
        document.querySelector("#result-el").textContent = "Guess number betwenn 1 and 20";
        return;
    }

    if(randomNumber != inputNumber) {
        score --;
        document.querySelector("#score-el").textContent = scoreEl + score;
        if(score >= 1) {
            if(randomNumber > inputNumber) {
                document.querySelector("#result-el").textContent = "Too low";
            }
            else {
                document.querySelector("#result-el").textContent = "Too high";
            }
        }
        else {
            document.querySelector("#result-el").textContent = "You've lost the game";
        }
    }
    else {
        document.querySelector("#result-el").textContent = "Correct";
        if(highScore < score) {
            highScore =score;
            document.querySelector("#highscore-el").textContent = highScoreEl + highScore;
        }
        document.querySelector("#answer-el").textContent = randomNumber;
        document.body.style.background = "rgb(9, 102, 9)";
    }
}

function playAgain() {
    document.querySelector("input").value = "";
    document.body.style.background = "rgba(0, 0, 0, 0.921)";
    document.querySelector("#answer-el").textContent = "?";
    randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log(randomNumber);
    score = 20;
    document.querySelector("#score-el").textContent = scoreEl + score;
    document.querySelector("#result-el").textContent = "Start guessing...";
}
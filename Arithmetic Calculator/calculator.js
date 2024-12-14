const ans = document.querySelector("#sum").textContent;
let n1 = 0, n2 = 0;

function getContent() {
    n1 = Number(document.querySelector("#num1").value);
    n2 = Number(document.querySelector("#num2").value);
}

function add() {
    getContent();
    document.querySelector("#sum").textContent = ans + (n1 + n2);
}

function diff() {
    getContent();
    document.querySelector("#sum").textContent = ans + (n1 - n2);
}

function multiply() {
    getContent();
    document.querySelector("#sum").textContent = ans + (n1 * n2);
}

function divide() {
    getContent();
    document.querySelector("#sum").textContent = ans + (n1 / n2);
}
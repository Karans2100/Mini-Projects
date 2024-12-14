//Initialise the count variable with 0
//For every click of increment button, increment the value of count variable
//Set the incremented value in the count part of the HTML
//To achieve this, we define onclick attribute in Increment button and set its
//value when clicked according to increment function.

function increment() {
    let count = document.querySelector("#count").textContent;
    count ++;
    document.querySelector("#count").textContent = count;
}

function refresh() {
    const count = document.querySelector("#count").textContent;
    const add = document.querySelector("#print").textContent;
    document.querySelector("#count").textContent = 0;
    if(add === "Previous Entries: ") {
        document.querySelector("#print").textContent = add + count;
    }
    else {
        document.querySelector("#print").textContent = add +  ", " + count;
    }
}

//get elements
const coin = document.getElementById("headsCoin");

//add listener
coin.addEventListener("click", flipCoin);
coin.addEventListener("click", flipResult);

//this logs to console that coin is clicked
// Change this to only calculate the coin flip.
function flipCoin() {

    console.log("You flipped the coin!");
};

//this modifies h1"revealCoin" to display coin flip result
// Alter this to display results and log to console.
function flipResult() {
    revealCoin.innerText = "Heads"
};
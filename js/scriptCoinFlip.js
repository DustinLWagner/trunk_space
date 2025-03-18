const heads = (1, 3, 5, 7, 9);
const tails = (0, 2, 4, 6, 8);


//get elements
const coin = document.getElementById("headsCoin");

//add listeners
coin.addEventListener("click", flipCoin);
coin.addEventListener("click", flipResult);

//get a random integer 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);

}

//this logs to console that coin is clicked and logs the number
function flipCoin() {
    console.log(getRandomInt(10));
    console.log("You flipped the coin!");
};



//this modifies h1"revealCoin" to display coin flip result
function flipResult() {
    if (getRandomInt = heads) {
        revealCoin.innerText = "Heads"
    }
    else if (getRandomInt = tails) {
        revealCoin.innerText = "Tails"
    }
    else {
        revealCoin.innerText = "Click The Coin To Flip"
    }
};
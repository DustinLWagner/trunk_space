//get elements
const coin = document.getElementById("headsCoin");
const revealCoin = document.getElementById("revealCoin");

//get a random integer 
function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
}

//add listeners
coin.addEventListener("click", flipCoin);


//this logs to console that coin is clicked and logs the number
function flipCoin() {
    console.log("You flipped the coin!");
    let randInt = getRandomInt(2);
    flipResult(randInt);
    console.log(randInt);
};



//this modifies h1"revealCoin" to display coin flip result

function flipResult(randInt) {
    if (randInt === 1) {
        revealCoin.innerText = "Heads"
    }
    else if (randInt === 2) {
        revealCoin.innerText = "Tails"
    }
    else {
        revealCoin.innerText = "Click The Coin To Flip"
    }
};
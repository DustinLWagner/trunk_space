function flipCoin() {

    console.log("You flipped the coin!");

}

//get element
const coin = document.getElementById("coinFlip");

//add listener
coin.addEventListener("click", flipCoin);
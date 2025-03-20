//create varibles, get elements, listen for click, alert to console//
const diceD4 = document.getElementById("diceD4").addEventListener("click", rollD4);
const diceD6 = document.getElementById("diceD6").addEventListener("click", rollD6);
const diceD8 = document.getElementById("diceD8").addEventListener("click", rollD8);
const diceD10 = document.getElementById("diceD10").addEventListener("click", rollD10);
const diceD12 = document.getElementById("diceD12").addEventListener("click", rollD12);
const diceD20 = document.getElementById("diceD20").addEventListener("click", rollD20);

//add listeners//
//diceD4.addEventListener("click", rollDice);
//diceD6.addEventListener("click", rollDice);
//diceD8.addEventListener("click", rollDice);
//diceD10.addEventListener("click", rollDice);
//diceD12.addEventListener("click", rollDice);
//diceD20.addEventListener("click", rollDice);

//get random integer//

function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
}

//roll the dice//

function rollD4() {
    let randInt = getRandomInt(4);
    console.log(window.event.target.id);
    console.log("You rolled a " + randInt);
    diceResult.innerText = ("You rolled a " + randInt);
};
function rollD6() {
    let randInt = getRandomInt(6);
    console.log(window.event.target.id);
    console.log("You rolled a " + randInt);
    diceResult.innerText = ("You rolled a " + randInt);
};
function rollD8() {
    let randInt = getRandomInt(8);
    console.log(window.event.target.id);
    console.log("You rolled a " + randInt);
    diceResult.innerText = ("You rolled a " + randInt);
};
function rollD10() {
    let randInt = getRandomInt(10);
    console.log(window.event.target.id);
    console.log("You rolled a " + randInt);
    diceResult.innerText = ("You rolled a " + randInt);
};
function rollD12() {
    let randInt = getRandomInt(12);
    console.log(window.event.target.id);
    console.log("You rolled a " + randInt);
    diceResult.innerText = ("You rolled a " + randInt);
};
function rollD20() {
    let randInt = getRandomInt(20);
    console.log(window.event.target.id);
    console.log("You rolled a " + randInt);
    diceResult.innerText = ("You rolled a " + randInt);
};


// HTMLclass diceRolled animation needed //
//create varibles, get elements, listen for click, alert to console//
const diceD4 = document.getElementById("diceD4").addEventListener("click", alert);
const diceD6 = document.getElementById("diceD6").addEventListener("click", alert);
const diceD8 = document.getElementById("diceD8").addEventListener("click", alert);
const diceD10 = document.getElementById("diceD10").addEventListener("click", alert);
const diceD12 = document.getElementById("diceD12").addEventListener("click", alert);
const diceD20 = document.getElementById("diceD20").addEventListener("click", alert);

//add listeners//
//diceD4.addEventListener("click", alert);
//diceD6.addEventListener("click", alert);
//diceD8.addEventListener("click", alert);
//diceD10.addEventListener("click", alert);
//diceD12.addEventListener("click", alert);
//diceD20.addEventListener("click", alert);

//get random integers//

// HTMLclass diceRolled animation needed //

//Functions//

function alert() {
    console.log(window.event.target.id)

}
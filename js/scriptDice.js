//array to store dice ids//
const diceIds = ["4", "6", "8", "10", "12", "20"]
//use forEach to add listenters to all of them and roll
diceIds.forEach(diceId => {
    document.getElementById(diceId).addEventListener("click", function () {
        let randInt = Math.floor(Math.random() * diceId + 1);
        console.log(window.event.target.id);
        console.log("You rolled " + randInt);
        diceResult.innerText = ("You rolled " + randInt);
    });
});
//create vars and arrays for roll animation
const rotations = [90, 180, 270, 360];
const resetDice = (3000);
//use forEach to rotate each diceId
diceIds.forEach(diceId => {
    document.getElementById(diceId).addEventListener("click", function () {
        rotateDice(this, 1000);
    })
});
// rotateDice animation  //
function rotateDice(el, spinTime) {

    el.classList.add('rotateable');
    el.style.transition = `transform ${spinTime}ms`;


    el.style.transform = `rotate(0deg)`;
    setTimeout(() => {
        el.style.transform = `rotate(260deg)`;
    }, 0);
    setTimeout(() => {
        el.style.transform = `rotate(0deg)`;
    }, resetDice);
};
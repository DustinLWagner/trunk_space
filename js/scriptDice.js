/* OLD
create varibles, get elements, listen for click, alert to console//
const diceD4 = document.getElementById("diceD4").addEventListener("click", rollD4);
const diceD6 = document.getElementById("diceD6").addEventListener("click", rollD6);
const diceD8 = document.getElementById("diceD8").addEventListener("click", rollD8);
const diceD10 = document.getElementById("diceD10").addEventListener("click", rollD10);
const diceD12 = document.getElementById("diceD12").addEventListener("click", rollD12);
const diceD20 = document.getElementById("diceD20").addEventListener("click", rollD20);
*/
const spinTime = 100;

//array to store dice ids//
const diceIds = ["4", "6", "8", "10", "12", "20"]

//use forEach to add listenters to all of them and roll
diceIds.forEach(diceId => {
    document.getElementById(diceId).addEventListener("click", function () {
        let randInt = Math.floor(Math.random() * diceId + 1);
        console.log(window.event.target.id);
        console.log("You rolled a " + randInt);
        diceResult.innerText = ("You rolled a " + randInt);
    });
});


/*
//get random integer//

function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
};

// old roll the dice//

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
*/

// HTMLclass diceRolled animation needed //





// terribly rotate the dice on click //
function rotateDice(el) {
    el.classList.add('rotateable');
    el.style.transform = 'rotate45deg)';
    setTimeout(function () {
        el.style.transform = 'rotate(90deg)';
        setTimeout(function () {
            el.style.transform = 'rotate(135deg)';
            setTimeout(function () {
                el.style.transform = 'rotate(180deg)';
                setTimeout(function () {
                    el.style.transform = 'rotate(225deg)';
                    setTimeout(function () {
                        el.style.transform = 'rotate(270deg)';
                        setTimeout(function () {
                            el.style.transform = 'rotate(315deg)';
                            setTimeout(function () {
                                el.style.transform = 'rotate(0deg)';
                                setTimeout(function () {
                                    el.style.transform = 'rotate(-45deg)';
                                }, spinTime);
                            }, spinTime);
                        }, spinTime);
                    }, spinTime);
                }, spinTime);
            }, spinTime);
        }, spinTime);
    }, spinTime);


}

document.getElementById("4").addEventListener("click", function (ev) {
    rotateDice(this);
})
document.getElementById("6").addEventListener("click", function (ev) {
    rotateDice(this);
})
document.getElementById("8").addEventListener("click", function (ev) {
    rotateDice(this);
})
document.getElementById("10").addEventListener("click", function (ev) {
    rotateDice(this);
})
document.getElementById("12").addEventListener("click", function (ev) {
    rotateDice(this);
})
document.getElementById("20").addEventListener("click", function (ev) {
    rotateDice(this);
})
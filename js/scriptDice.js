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




/*
// terribly rotate the dice on click //
function rotateDice(el) {
    el.classList.add('rotateable');
    el.style.transform = 'rotations';
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
})*/
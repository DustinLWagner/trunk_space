//array to store dice ids//
const diceIds = ["4", "6", "8", "10", "12", "20"];
//use forEach to add listenters to all dice and roll
diceIds.forEach(diceId => {
    document.getElementById(diceId).addEventListener("click", function () {
        let randInt = Math.floor(Math.random() * diceId + 1);
        document.getElementById(diceId).classList.add('rotateDice');
        console.log(window.event.target.id);
        console.log("You rolled " + randInt);

        setTimeout(() => {
            document.getElementById(diceId).classList.remove('rotateDice');
        }, 3000);
        setTimeout(() => {
            diceResult.innerText = ("You rolled " + randInt + " on a D" + diceId);
        }, 2000);
        setTimeout(() => {
            diceResult.innerText = (" ");
        }, 5000);
    });
});

/*
create an array to store the dice values and display the values history in a div 
*/
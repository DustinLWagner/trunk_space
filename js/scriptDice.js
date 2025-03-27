//arrays to store dice ids and past rolls//
const diceIds = ["4", "6", "8", "10", "12", "20"];
var diceRolls = ["Past Rolls"];
//use forEach to add listenters and grab el Id for all dice and roll dice
diceIds.forEach(diceId => {
    document.getElementById(diceId).addEventListener("click", function () {
        let randInt = Math.floor(Math.random() * diceId + 1);
        document.getElementById(diceId).classList.add('rotateDice');
        //logs diceId to console with "you rolled randInt'
        console.log(window.event.target.id);
        console.log("You rolled " + randInt);
        //time outs to reset the dice, display dice result, and remove it
        setTimeout(() => {
            document.getElementById(diceId).classList.remove('rotateDice');
        }, 3000);
        setTimeout(() => {
            diceResult.innerText = ("You rolled " + randInt + " on a D" + diceId);
            //store dice result in dice roll array as its created and before it is cleared
            diceRolls.push(diceResult.innerText);
        }, 2000);
        setTimeout(() => {
            diceResult.innerText = (" ");
            //log dice rolls array
            console.log(diceRolls);
        }, 5000);

    });
});

/*
create an array to store the dice values and display the values history in a div
*/

//function storeRoll(diceRolls) {}

//document.getElementById(diceRolls)

//diceRolls.innerText = (diceRolls);

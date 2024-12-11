// Select all dice elements and the button
var dice_1 = document.querySelectorAll(".dice1");
var dice_2 = document.querySelectorAll(".dice2")
var button = document.querySelector("button");
let currentActiveIndex = null;
let currentActiveIndex2 = null;
let randomIndex = randomDice(dice_1.length); 
let  randomIndex2 = randomDice2(dice_2.length)

button.addEventListener("click", function () {
    diceFunction1()
    diceFunction2()
    if( randomIndex > randomIndex2){
        document.querySelector(".player1").innerHTML = "Prayer 1 WON"
    }
    else if (randomIndex2 > randomIndex){
        document.querySelector(".player2").innerHTML = "Prayer 2 WON"
    }
    else{
         document.querySelector(".player1").innerHTML = "DRAW"
    }

    console.log(`Dice at index ${randomIndex} is displayed.`);
});


function diceFunction1(){

    let randomIndex = randomDice(dice_1.length); 

    if (currentActiveIndex !== null) {
    dice_1[currentActiveIndex].style.display = "none";
  
}
    dice_1[randomIndex].style.display = "grid";
    currentActiveIndex = randomIndex;
    return
}

function diceFunction2(){
    let  randomIndex2 = randomDice2(dice_2.length)

    if (currentActiveIndex2 !== null) {
        dice_2[currentActiveIndex2].style.display = "none";
    }
    dice_2[randomIndex2].style.display = "grid";
    currentActiveIndex2 = randomIndex2;
    return
}

function randomDice(max) {
    return Math.floor(Math.random() * max); 
}

function randomDice2(max) {
    return Math.floor(Math.random() * max); 
}

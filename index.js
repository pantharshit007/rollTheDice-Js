function rollDice() {
    let arr = ["dice1", "dice2", "dice3", "dice4", "dice5", "dice6"];
    let img1 = document.querySelector(".img1"); // Selecting the first dice image element
    let img2 = document.querySelector(".img2"); // Selecting the second dice image element

    let value1 = Math.floor(Math.random() * 6); // Generating a random number between 0 and 5
    let value2 = Math.floor(Math.random() * 6); // Generating a random number between 0 and 5
    
    img1.src = "./images/" + arr[value1] + ".png"; // Updating the source of the first dice image
    img2.src = "./images/" + arr[value2] + ".png"; // Updating the source of the second dice image

    if (value1 > value2) {
        document.querySelector("h1").textContent = "Player 1 Wins!";
    }
    else if (value1 < value2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
    else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
  }


// function diceRoll(){

// let arr = ["dice1", "dice2", "dice3", "dice4", "dice5", "dice6"];

// let value = Math.random() * 6;
// let diValue = Math.floor(value) ;
// return arr[diValue];

// }
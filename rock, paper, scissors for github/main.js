import { getRandomInt,userInput,input } from "./function.js";
import { items } from "./objects.js";

let random;

let myButton = document.querySelector("button");
let userImage = document.getElementById("user_photo");
let randomImage = document.getElementById("random");


myButton.onclick = function() {
    random = getRandomInt(3);
    userInput();

    if (input === items[random]) {
        alert("Nobody wins!");
        userImage.setAttribute("src", "images/" + input + ".jpeg");
        randomImage.setAttribute("src", "images/" + items[random] +  ".jpeg");
    } else if (input === "rock" && items[random] === "paper") {
        alert("You lose.");
        userImage.setAttribute("src", "images/" + input + ".jpeg");
        randomImage.setAttribute("src", "images/" + items[random] +  ".jpeg");
    } else if (input === "rock" && items[random] === "scissors") {
        alert("You win!");
        userImage.setAttribute("src", "images/" + input + ".jpeg");
        randomImage.setAttribute("src", "images/" + items[random] +  ".jpeg");
    } else if (input === "paper" && items[random] === "scissors") {
        alert("You lose.");
        userImage.setAttribute("src", "images/" + input + ".jpeg");
        randomImage.setAttribute("src", "images/" + items[random] +  ".jpeg");
    } else if (input === "paper" && items[random] === "rock") {
        alert("You win!");
        userImage.setAttribute("src", "images/" + input + ".jpeg");
        randomImage.setAttribute("src", "images/" + items[random] +  ".jpeg");
    } else if (input === "scissors" && items[random] === "rock") {
        alert("You lose.");
        userImage.setAttribute("src", "images/" + input + ".jpeg");
        randomImage.setAttribute("src", "images/" + items[random] +  ".jpeg");
    } else if (input === "scissors" && items[random] === "paper") {
        alert("You win!");
        userImage.setAttribute("src", "images/" + input + ".jpeg");
        randomImage.setAttribute("src", "images/" + items[random] +  ".jpeg");
    } else {
        alert("No imput.")
    }


}







// for (let i = 0; i < 5; i++) {


//     var userInput = prompt("Rock, paper or scissors?", "Rock");
//     var random = getRandomInt(3);

//     if (userInput === items[random]) {
//         alert("You win!");
//     } else {
//         alert("You lose.")
//     }

// }

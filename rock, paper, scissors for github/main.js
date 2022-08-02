import { getRandomInt,userInput,input } from "./function.js";
import { items } from "./objects.js";

let random;

let myButton = document.querySelector("button");
let userImage = document.getElementById("user_photo");
let randomImage = document.getElementById("random");


myButton.onclick = function() {
    random = getRandomInt(3);
    userInput();

    // if (input === items[random]) {
    //     alert("Nobody wins!");
    //     userImage.setAttribute("src", "images/" + input + ".jpeg");
    //     randomImage.setAttribute("src", "images/" + items[random] +  ".jpeg");
    // } else if (input === "rock" && items[random] === "paper") {
    //     alert("You lose.");
    //     userImage.setAttribute("src", "images/" + input + ".jpeg");
    //     randomImage.setAttribute("src", "images/" + items[random] +  ".jpeg");
    // } else if (input === "rock" && items[random] === "scissors") {
    //     alert("You win!");
    //     userImage.setAttribute("src", "images/" + input + ".jpeg");
    //     randomImage.setAttribute("src", "images/" + items[random] +  ".jpeg");
    // } else if (input === "paper" && items[random] === "scissors") {
    //     alert("You lose.");
    //     userImage.setAttribute("src", "images/" + input + ".jpeg");
    //     randomImage.setAttribute("src", "images/" + items[random] +  ".jpeg");
    // } else if (input === "paper" && items[random] === "rock") {
    //     alert("You win!");
    //     userImage.setAttribute("src", "images/" + input + ".jpeg");
    //     randomImage.setAttribute("src", "images/" + items[random] +  ".jpeg");
    // } else if (input === "scissors" && items[random] === "rock") {
    //     alert("You lose.");
    //     userImage.setAttribute("src", "images/" + input + ".jpeg");
    //     randomImage.setAttribute("src", "images/" + items[random] +  ".jpeg");
    // } else if (input === "scissors" && items[random] === "paper") {
    //     alert("You win!");
    //     userImage.setAttribute("src", "images/" + input + ".jpeg");
    //     randomImage.setAttribute("src", "images/" + items[random] +  ".jpeg");
    // } else {
    //     alert("No imput.")
    // }

    let alertText;
    switch (input) {
        case items[random]:
            alertText = 'Nobody wins!';
            break;
        case 'rock':
            if (items[random] === 'paper') {
                alertText = 'You lose.';
            } else {
                alertText = 'You win!';
            }
            break;
        case 'paper':
            if (items[random] === 'scissors') {
                alertText = 'You lose.';
            } else {
                alertText = 'You win';
            }
            break;
        case 'scissors':
            if (items[random] === 'rock') {
                alertText = 'You lose.';
            } else {
                alertText = 'You win!';
            }
            break;
        default:
            alertText = 'No input.';
    }
    userImage.setAttribute('src', 'images/' + input + '.jpeg');
    randomImage.setAttribute('src', 'images/' + items[random] + '.jpeg')
    alert(alertText);

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

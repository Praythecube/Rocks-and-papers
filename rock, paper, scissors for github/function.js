import {items} from "./objects.js";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

let input;

function userInput() {
    input = prompt("Rock, paper or scissors?", "Rock").toLowerCase();
}

export { getRandomInt,userInput,input };


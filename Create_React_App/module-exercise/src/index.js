import foods from "./foods";
import {choice, remove} from "./helpers";

let randFruit = choice(foods);

console.log("I'd like one " + randFruit + ", please");
console.log("Here you go: " + randFruit);
console.log("Delicious! May I have another?");
//Remove fruit from array
remove(foods, randFruit);


console.log("I'm sorry, we're all out. We have " + foods.length + " left");
function computerPlay(min, max) {
let result = Math.floor(Math.random() * (max-min) ) + min;
if (result === 1) {
    return "Rock"
} else if(result === 2) {
    return "Paper"
} else {
    return "Scissors"
}
 }
console.log(computerPlay(1, 4))
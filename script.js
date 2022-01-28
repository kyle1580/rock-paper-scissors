// Rock Paper Scissors Script

function computerPlay() {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return "Rock"
            break;
        case 1:
            return "Paper"
            break;
        case 2:
            return "Scissors"
            break;
        default:
            console.log("wut?")
    }
}
let computerChoice = computerPlay()

let userChoice = prompt("What's your choice?").toLowerCase()
userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1)

function playGame(playerSelection , computerSelection) {

}
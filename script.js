// Rock Paper Scissors Script

function computerPlay() {
    return Math.floor(Math.random() * 3)
}

function choiceNum2Str(choice) {
    switch(choice) {
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

function choiceStr2Num(choice) {
    switch(choice) {
        case "Rock":
            return 0
            break;
        case "Paper":
            return 1
            break;
        case "Scissors":
            return 2
            break;
        default:
            console.log("Wut?")
    }
}

function playGame(playerSelection , computerSelection) {
    let diff = playerSelection - computerSelection
    if(diff === 0) {
        return "tie"
    } else if(diff === -2 || diff === 1) {
        return "win"
    } else if(diff === -1 || diff === 2) {
        return "lose"
    } else {
        console.log("Oops?")
    }
}

function gameOutput(WLT , userStr , compStr) {
    switch(WLT) {
        case "win":
            console.log("You Win!" + " " + userStr + " beats " + compStr)
            break;
        case "lose":
            console.log("You Lose!" + " " + compStr + " beats " + userStr)
            break;
        case "tie":
            console.log("It's a Tie")
            break;
        default:
            console.log("how?")

    }
}

// let computerChoice = computerPlay()

// let userChoice = prompt("What's your choice?").toLowerCase()
// userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1)
// userChoice = choiceStr2Num(userChoice)

let userChoice = 2
let computerChoice = 2

gameOutput(playGame(userChoice , computerChoice) , choiceNum2Str(userChoice) , choiceNum2Str(computerChoice))
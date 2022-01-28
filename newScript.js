function computerChoice() {
    return Math.floor(Math.random() * 3)
}

function userChoice() {
    let userStr = prompt("What's your choice?").toLowerCase()
    switch(userStr) {
        case "rock":
            return 0
            break;
        case "paper":
            return 1
            break;
        case "scissors":
            return 2
            break;
        default:
            console.log("Wut?")
    }
}

function playRound(userChoice , computerChoice) {
    let diff = userChoice - computerChoice
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

function game() {
    let userWins = 0
    let computerWins = 0
    while(userWins < 3 && computerWins < 3) {
        let userNum = userChoice()
        let computerNum = computerChoice()
        let outcome = playRound(userNum , computerNum)
        switch(outcome) {
            case "tie":
                console.log("It's a tie!")
                break;
            case "win":
                console.log("You Win!" + " " + choiceNum2Str(userNum) + " beats " + choiceNum2Str(computerNum))
                userWins++
                break;
            case "lose":
                console.log("You Lose!" + " " + choiceNum2Str(computerNum) + " beats " + choiceNum2Str(userNum))
                computerWins++
                break;
            default:
                console.log("???")
        }
        console.log("Current Score:" + " " + userWins + " - " + computerWins)
    }
    if(userWins > computerWins) {
        console.log("You Win!")
    } else {
        console.log("Computer Wins :(")
    }
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

game()
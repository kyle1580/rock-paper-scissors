let playerWins = 0;
let computerWins = 0;

const btns = document.querySelectorAll('button');
btns.forEach((button) => {
    button.addEventListener('click' , () => {
        let userNum = button.id;
        let compNum = computerChoice();
        let result = playRound(userNum , compNum);
        console.log(result);
        let score = displayResult(userNum , compNum , result , playerWins , computerWins);
        playerWins = score[0];
        computerWins = score[1];
    })
});

function displayResult(userChoice , computerChoice , outcome , playerWins , computerWins) {
    const result = document.getElementById('result');
    const playerScore = document.querySelector(".score.player");
    const computerScore = document.querySelector(".score.computer");
    const winner = document.getElementById('winner');

    result.innerHTML = '';

    switch(outcome) {
        case 'tie':
            result.textContent = "It's a tie!";
            break;
        case 'win':
            result.textContent = "Player Wins! " + choiceNum2Str(Number(userChoice)) + " beats " + choiceNum2Str(computerChoice);
            playerWins++;
            playerScore.textContent = playerWins;
            break;
        case 'lose':
            result.textContent = " Computer Wins :( " + choiceNum2Str(computerChoice) + " beats " + choiceNum2Str(Number(userChoice));
            computerWins++;
            computerScore.textContent = computerWins;
            break;
        default:
            console.log("oops");
    }
    if(playerWins === 5) {
        winner.textContent = "Player Wins!";
        result.innerHTML = '';
        document.getElementById("0").disabled = true;
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        const startOver = document.createElement('button');
        startOver.textContent = "Start Over";
        startOver.addEventListener('click' , function() {
            location.reload();
        });
        winner.appendChild(startOver)
    } else if(computerWins === 5) {
        winner.textContent = "Computer Wins!";
        result.innerHTML = '';
        document.getElementById("0").disabled = true;
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        const startOver = document.createElement('button');
        startOver.textContent = "Start Over";
        startOver.addEventListener('click' , function() {
            location.reload();
        });
        winner.appendChild(startOver);
    } else {

    }
    return [playerWins, computerWins];
}

function computerChoice() {
    return Math.floor(Math.random() * 3)
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


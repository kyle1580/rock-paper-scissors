// Rock Paper Scissors Script

function computerPlay() {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            console.log("Computer chose rock")
            break;
        case 1:
            console.log("Computer chose paper")
            break;
        case 2:
            console.log("Computer chose scissors")
            break;
        default:
            console.log("wut?")
    }
}

computerPlay()
// const choice = computerPlay()

// switch(choice) {
//     case 0:
//         console.log("Computer chose rock")
//         break;
//     case 1:
//         console.log("Computer chose paper")
//         break;
//     case 2:
//         console.log("Computer chose scissors")
//         break;
//     default:
//         console.log("wut?")
// }


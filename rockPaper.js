
function getComputerChoice() {
    let numChoice = Math.floor((Math.random() * 3) + 1);
    if (numChoice === 1) {
        return "rock";
    }
    else if (numChoice === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playGame() {

    let computerScore = 0;
    let humanScore = 0;
    let computerChoice = '';
    let humanChoice = '';
    const gamesPlayed = 0;

    const rock = document.querySelector(".rockBtn");
    const paper = document.querySelector(".paperBtn");
    const scissors = document.querySelector(".scissorsBtn");
    const roundResults = document.querySelector(".roundResults");

    rock.addEventListener("click", () => {
        let computerChoice = getComputerChoice();
        let humanChoice = "rock";
        playRound(computerChoice, humanChoice);
    });

    paper.addEventListener("click", () => {
        let computerChoice = getComputerChoice();
        let humanChoice = "paper";
        playRound(computerChoice, humanChoice);
    });

    scissors.addEventListener("click", () => {
        let computerChoice = getComputerChoice();
        let humanChoice = "scissors";
        playRound(computerChoice, humanChoice);
    });

    

    function playRound(computerChoice, humanChoice) {
        if (computerChoice == humanChoice) {
            console.log(`TIE! ${computerChoice} vs. ${humanChoice}`);
        }

        //humanChoice is rock, 
        //computer is scissors or paper
        else if (humanChoice == 'rock') {
            if (computerChoice == 'scissors') {
                humanScore++;
                console.log("Yu WIN! Your Rock crushes the computer's poor scissors.");
            }
            else {
                computerScore++;
                console.log("Yu LOSE! The computer's paper encapsulates your measely rock..")
            }
        }

        //humanChoice is paper,
        //computer choice is rock or scissors
        else if (humanChoice == 'paper') {
            if (computerChoice == 'scissors') {
                computerScore++;
                console.log("Yu LOSE! The computer's Scissors cut your thin Paper to shreds.");
            }
            else {
                humanScore++;
                console.log("Yu WIN! Your paper encapsulates the computer's measely rock..")
            }
        }


        //human choice is scissors,
        //computer choice is rock or paper
        else if (humanChoice == 'scissors') {
            if (computerChoice == 'rock') {
                computerScore++;
                console.log("Yu LOSE! The computer's Rock crushes your poor scissors.");
            }

            else {
                humanScore++;
                console.log("Yu WIN! Your scissors cut the computer's paper to shreds.");
            }
        }

    }




    //BEST OF 5 ROUNDS LOGIC

    while (humanScore < 5 && computerScore < 5) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();          // CHANGE TO CHECK BUTTON VALUE
        playRound(computerChoice, humanChoice);
        gamesPlayed++;
    }

    if (computerScore > humanScore) {
        console.log(`Sorry, yu LOST.. The Final Score was ${computerScore}-${humanScore}`);
    }

    else if (humanScore > computerScore) {
        console.log(`Well done, you have WON.. The final score was ${humanScore}-${computerScore}`);
    }

    else {
        console.log(`You and the computer TIED.. The final score was ${humanScore}-${computerScore}`);
    }

}

playGame();





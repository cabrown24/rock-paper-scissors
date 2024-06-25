
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
    let gamesPlayed = 0;

    const btnContainer = document.querySelector("btnContainer");
    const rock = document.querySelector(".rockBtn");
    const paper = document.querySelector(".paperBtn");
    const scissors = document.querySelector(".scissorsBtn");
    const roundResults = document.querySelector(".roundResults");
    const gamesPlayedLabel = document.querySelector(".gamesPlayed");
    const userScore = document.querySelector(".userScore");
    const compScore = document.querySelector(".compScore");
    const finalResults = document.querySelector(".finalResults");

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

        // - - - - - - - - round evalutation - - - - - - - -

        if (computerChoice == humanChoice) {
            roundResults.textContent = `TIE! ${computerChoice} vs. ${humanChoice}`;
        }

        //humanChoice is rock, 
        //computer is scissors or paper
        else if (humanChoice == 'rock') {
            if (computerChoice == 'scissors') {
                humanScore++;
                roundResults.textContent = "Yu WIN! Your Rock crushes the computer's poor scissors.";
            }
            else {
                computerScore++;
                roundResults.textContent = "Yu LOSE! The computer's paper encapsulates your measely rock..";
            }
        }

        //humanChoice is paper,
        //computer choice is rock or scissors
        else if (humanChoice == 'paper') {
            if (computerChoice == 'scissors') {
                computerScore++;
                roundResults.textContent = "Yu LOSE! The computer's Scissors cut your thin Paper to shreds.";
            }
            else {
                humanScore++;
                roundResults.textContent = "Yu WIN! Your paper encapsulates the computer's measely rock..";
            }
        }


        //human choice is scissors,
        //computer choice is rock or paper
        else if (humanChoice == 'scissors') {
            if (computerChoice == 'rock') {
                computerScore++;
                roundResults.textContent = "Yu LOSE! The computer's Rock crushes your poor scissors.";
            }

            else {
                humanScore++;
                roundResults.textContent = "Yu WIN! Your scissors cut the computer's paper to shreds.";
            }
        }

        // - - - - - ROUND EVALUATION ENDS - - - - - - - -

        gamesPlayed++;
        gamesPlayedLabel.textContent = gamesPlayed;
        userScore.textContent = humanScore;
        compScore.textContent = computerScore;

        //BEST OF 5 ROUNDS LOGIC

        if (computerScore === 5 || humanScore === 5) {

            rock.remove();
            paper.remove();
            scissors.remove();

            if (computerScore > humanScore) {
                finalResults.textContent = `Sorry, yu LOST.. The Final Score was ${computerScore}-${humanScore}`;
            }

            else if (humanScore > computerScore) {
                finalResults.textContent = `Well done, you have WON.. The final score was ${humanScore}-${computerScore}`;
            }

            else {
                finalResults.textContent = `You and the computer TIED.. The final score was ${humanScore}-${computerScore}`;
            }




        }

    }

}

playGame();





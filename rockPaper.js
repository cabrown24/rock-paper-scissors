let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let numChoice = Math.floor((Math.random() * 3) + 1);
    if(numChoice === 1) {
        return "rock";
    }
    else if(numChoice === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let userChoice = '';
    let keepAsking = true;
    while (keepAsking) {

        userChoice = prompt("Enter your hand: ");
        userChoice = userChoice.toLowerCase();

        if ( (userChoice != 'rock') && (userChoice != 'paper') && (userChoice != 'scissors') ) {
            console.log("You have to choose between: rock, paper, or scissors.");
        }
        else {
            keepAsking = false;
        }
    }

    return userChoice;
}

function playRound(computerChoice, humanChoice) {
    if(computerChoice == humanChoice) {
        console.log(`TIE! ${computerChoice} vs. ${humanChoice}`);
    }

    //humanChoice is rock, 
    //computer is scissors or paper
    else if(humanChoice == 'rock') {
        if(computerChoice == 'scissors') {
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
    else if(humanChoice == 'paper') {
        if(computerChoice == 'scissors') {
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
    else if(humanChoice == 'scissors') {
        if(computerChoice == 'rock') {
            computerScore++;
            console.log("Yu LOSE! The computer's Rock crushes your poor scissors.");
        }

        else {
            humanScore++;
            console.log("Yu WIN! Your scissors cut the computer's paper to shreds.");
        }
    }

}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

playRound(computerChoice, humanChoice);
console.log("\n");
console.log(`Human Choice: ${humanChoice}\n`);
console.log(`Computer Choice: ${computerChoice}`);
 



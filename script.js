
let humanScore = 0;
let computerScore = 0;


const computerChoice = () => {
    let values = ['rock', 'paper', 'scissors'];
    return values[Math.floor(Math.random() * values.length)]
}

console.log(computerChoice())

//Math.floor converts the decimal numbers into whole numbers 
//Math.random gives random numbers between 0 to 1 and when we mulitply it by 3 it gives bwetween 1 to 3

const getHumanChoice = () => {
    let choice = window.prompt('Rock, Paper, or Scissors?')
    return choice.toLowerCase();
}

console.log(getHumanChoice())

const playRound = (getHumanChoice, computerChoice) => {
    if (getHumanChoice == computerChoice) {
        return 'Its a tie';
    }
    else if ((getHumanChoice == 'rock' && computerChoice == 'scissors') || (getHumanChoice == 'paper' && computerChoice == 'rock') || (getHumanChoice == 'scissors' && computerChoice == 'paper')) {
        humanScore += 1
        return `You win! ${humanScore} beats ${computerScore}`
    }
    else if ((computerChoice == 'rock' && getHumanChoice == 'scissors') || (computerChoice == 'paper' && getHumanChoice == 'rock') || (getHumanChoice == 'scissors' && computerChoice == 'paper')) {
        computerScore += 1;
        return `You lose! ${computerScore} beats ${humanScore}`
    }
}
const playGame = () => {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else {
        console.log("Computer won the game!");
    }



}
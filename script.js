let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}
//Calculating absolute distance of two numbers
const getAbsoluteDistance = (num1, num2) => {
  return Math.abs(num1 - num2);
}
//Comparing guess distance from target number
const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  const userTargetDiff = getAbsoluteDistance (userGuess, targetNumber);
  const computerTargetDiff = getAbsoluteDistance (computerGuess, targetNumber);
  
 if (userGuess < 0 || userGuess > 9) {
   alert('Your number is out of range.');
 }
 if (userTargetDiff <= computerTargetDiff) {
   return true;
 } else {
   return false;
 }
}
const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => {
  currentRoundNumber++;
}
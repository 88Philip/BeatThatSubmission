//Version 1. Only player rolls 2 dice and choose order to return value
//Version 2. Include 2nd player
//Version 3. Compare values and declare winner
//Version 4. Return game to original state without need to refresh page

//Declare gameModes
var gameModeDiceRoll = `gameModeDiceRoll`;
var gameModeRollOrder = `gameModeRollOrder`;
var gameMode = gameModeDiceRoll;

//Define array to store player's rolls
var p1Roll = [];

//Helper function to roll dice
var rollDice = function () {
  var rollValue = Math.ceil(Math.random() * 6);
  return rollValue;
};
//Helper function to roll Dice twice
var rollDiceTwice = function () {
  for (var i = 0; i < 2; i += 1) {
    p1Roll.push(rollDice());
  }
  console.log(p1Roll);
  return `Player 1, you've rolled ${p1Roll[0]} and ${p1Roll[1]} for your first and second roll respectively.
   <br> Please input 1 or 2 to choose the order you'd want the dice roll to form your number`;
};
//Helper function to generate player score
var generatePlayerScore = function (playerInput) {
  //To check for invalid playerInput and to prompt user to input 1 or 2 only
  if (playerInput != 1 && playerInput != 2) {
    return `You have entered a invalid choice, you've rolled ${p1Roll[0]} and ${p1Roll[1]} for your first and second roll respectively.
  <br> Please input 1 or 2 to choose the order you'd want the dice roll to form your number `;
  }
  if (playerInput == 1) {
    var playerScore = p1Roll[0] * 10 + p1Roll[1];
    return `Your score is ${playerScore}`;
  }
  if (playerInput == 2) {
    var playerScore = p1Roll[1] * 10 + p1Roll[0];
    return `Your score is ${playerScore}`;
  }
};

var main = function (input) {
  //To check gameMode on submission of input
  console.log(gameMode);
  var myOutputMsg;
  if (gameMode === gameModeDiceRoll) {
    //Check if Boolean check is working
    console.log(gameMode);
    //Call rollDiceTwice function and assign it to outputMsg to display to player
    var outputMsg = rollDiceTwice();
    //Changing gameMode to gameModeRollOrder to let player choose order of dice rolls
    gameMode = gameModeRollOrder;
  }
  if (gameMode === gameModeRollOrder) {
    console.log(gameMode);
    //Call generatePlayerScore function to get player's score
    outputMsg = generatePlayerScore(input);
    return outputMsg;
  }
};

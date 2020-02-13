// Funtion to generate the Goal (a random number that has a min and max)
function genGoal(min, max) {
  // genreate a random number between 19 and 120
  var goalNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  // Return the random number
  return goalNum;
  //   Update Goal number on DOM with Random Number
  $("#goal").text("Goal: " + genGoal());
  // Log the goal number to the console
  console.log(goalNum());
}
genGoal();

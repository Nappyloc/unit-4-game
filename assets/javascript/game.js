// Global Variables


// Start Game button Click Functions
/* generate goal and jewel numbers*/
$( "#but" ).on( "click", function ()
{
  // Call function to generate the Goal
  genGoal();
  // Update the goal on the DOM
  $( "#goal" ).text( "Goal: " + genGoal() )

  // make jewels numbers disappear
  $( "#jn1" ).hide()
  $( "#jn2" ).hide()
  $( "#jn3" ).hide()
  $( "#jn4" ).hide();

  // Generate Jewel Numbers





} );



// On Click Animations
/* reveal number and add number to total score*/







// Funtion to generate the Goal (a random number that has a min and max)
function genGoal ( min, max )
{
  // genreate a random number between 19 and 120
  var goalNum = Math.floor( Math.random() * ( 120 - 19 + 1 ) ) + 19;
  // Return the random number
  return goalNum;
}

// Funtion to generat random number from 1-12 on click of jewel
function genGemNumbs ()
{
  var gemNumbs = [];
  for ( var i = 0; i < 4; i++ )
    // genreate a random number between 1 and 12
    gemNumbs.push( Math.floor( Math.random() * ( 12 - 30 + 1 ) ) + 30 )
  return gemNumbs;


  // Return the Gem Numbers
  // return gemNumbs;

}
// Generate and update all jems


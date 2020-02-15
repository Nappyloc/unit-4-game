

// Global Variables
var jewels = genGemNumbs();
var wins = 0
var losses = 0
var totalScore = []

// Generate Goal and Hide Jewel text on start of Game
$( "#but" ).on( "click", function ()
{
  totalScore = []
  $( "#totalScore" ).text( "Total Score: 0 " )
  // Call function to generate the Goal

  // Update the goal on the DOM
  $( "#goal" ).text( "Goal: " + genGoal() )

  // make jewels numbers disappear
  $( "#jn1" ).hide()
  $( "#jn2" ).hide()
  $( "#jn3" ).hide()
  $( "#jn4" ).hide()

  // Generate Jewel Score Numbers
  genGemNumbs()

  // Update Jewel numbers on DOM
  updateJewels()

  // Calculate Score



} );



// On Click Animations
/* reveal number and add number to total score*/
$( "#j1" ).on( "click", function ()
{

  $( "#jn1" ).show()
  totalScore.push( jewels[ 0 ] );
  total();
  $( "#totalScore" ).text( "Total Score: " + total() );

} );
$( "#j2" ).on( "click", function ()
{
  $( "#jn2" ).show()
  totalScore.push( jewels[ 1 ] );
  total();
  $( "#totalScore" ).text( "Total Score: " + total() );
} );
$( "#j3" ).on( "click", function ()
{
  $( "#jn3" ).show()
  totalScore.push( jewels[ 2 ] );
  total();
  $( "#totalScore" ).text( "Total Score: " + total() );
} );
$( "#j4" ).on( "click", function ()
{
  $( "#jn4" ).show()
  totalScore.push( jewels[ 3 ] );
  total();
  $( "#totalScore" ).text( "Total Score: " + total() );
} );










// Funtion to generate the Goal (a random number that has a min and max)
function genGoal ( min, max )
{
  // genreate a random number between 19 and 120
  var goalNum = Math.floor( Math.random() * ( 120 - 19 + 1 ) ) + 19;
  // Return the random number
  return goalNum;
}

// Funtion to generat random number on for jewel
function genGemNumbs ()
{
  var gemNumbs = [];
  for ( var i = 0; i < 4; i++ )
    // genreate a random number between 1 and 12
    gemNumbs.push( Math.floor( Math.random() * ( 12 - 30 + 1 ) ) + 30 )
  // Return the Gem Numbers
  return gemNumbs;
}

// Funtion to update jewel number text
function updateJewels ( jewel1, jewel2, jewel3, jewel4 )
{
  // assign each number by index to the jewel text
  jewel1 = jewels[ 0 ];
  jewel2 = jewels[ 1 ];
  jewel3 = jewels[ 2 ];
  jewel4 = jewels[ 3 ];
  // Update Jewel text on the DOM
  $( "#jn1" ).text( jewel1 );
  $( "#jn2" ).text( jewel2 );
  $( "#jn3" ).text( jewel3 );
  $( "#jn4" ).text( jewel4 );

}

// Function to calculate the score
function total ()
{
  var results = 0;
  for ( var i = 0; i < totalScore.length; i++ )
  {
    results = results + totalScore[ i ];

  }
  return results
}






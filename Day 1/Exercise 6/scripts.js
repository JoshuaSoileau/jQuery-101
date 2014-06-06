// We didn't get all the way through this one, so I just
// had you add a click even to change the css of all of the
// boxes to red instead of green

// Here's how to do that:
// $(document).ready(function() {

//   $('.box').click(function() {
//     $('.box').css('background-color', 'red');
//   });

// });

// Functions Learned:
// .css()

// Homework: how do I change JUST the 1 box that I clicked,
// and not all .box elements?



/* ------------- DAY 2 ------------- */

// Answer to above question:
//     $(this).css('background-color', 'red');
// instead of 
//     $('.box').css('background-color', 'red');


// How do I make the color random??

// Approach 1
// Use Math.random() to generate a number between 
// 000000 and 999999, then concatenate a '#' to it

// $(document).ready(function() {


//   $('.box').click(function() {

//   	var random = Math.floor( Math.random() * 999999 );

//     $(this).css('background-color', '#' + random );

//   });

// });


// Approach 2
// Create an array (or string) of all possible characters
// and create another string of 6 of those characters,
// chosen at random

// var possibleCharacters = "0123456789abcdef";

// $(document).ready(function() {

//   $('.box').click(function() {
	
// 	var randomHexValue = "#";

// 	for( i=0; i<6 ; i++ ) {
// 	  	randomHexValue += possibleCharacters[ Math.floor( Math.random() * 16 ) ];
// 	}

//     $(this).css('background-color', randomHexValue );

//   });

// });









// Step 1

// var i = 0;

// $(document).ready(function() {

//   $('.box').click(function() {

//   	// callback function!
//     $(this).slideUp('slow', function() { 
//     	$(this).remove(); 
//     });


// 	$(".game-info p span").text( 
//     	parseInt( $(".game-info p span").text() ) + 1 
//     );

// 	// alternatively, this is simpler
//  	// i++;
// 	// $(".game-info p span").text( i );
    

//   });

// });


// Steps 2 & 3
$(document).ready(function() {

 //  $('.box').click(function() {

 //  	// callback function!
 //    $(this).slideUp('slow', function() { 
 //    	$(this).remove(); 
 //    });


	// $(".game-info p span").text( 
 //    	parseInt( $(".game-info p span").text() ) + 1 
 //    );
 

 //  });

  /* The 'setInterval' function will run the code every 1.5 seconds (1500ms) */
  var intervalNumber = setInterval(function(){
    addNewBox();
  }, 750); 


  $('body').on('click', '.box', function() {

    $(this).remove();

    $(".game-info p span").text( 
    	parseInt( $(".game-info p span").text() ) + 1 
    );

  	// Check if all boxes are gone
  	if( !$('.box').length ) {
  		// all the boxes are gone!
  		$('.game-info').html('<h3>Oh no! I\'ve been defeated!!! <span>-_-</span></h3>');
      // You can stop an interval from running by clicking
  		clearInterval(intervalNumber);
  	}

  })



});


function addNewBox() {
	$('.boxes').append('<div class="box">?</div>');
}
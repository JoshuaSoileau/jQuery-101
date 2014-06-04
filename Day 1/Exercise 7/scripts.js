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



  $('body').on('mouseover', '.box', function() {

  	// callback function!
    $(this).slideUp('slow');


	$(".game-info p span").text( 
    	parseInt( $(".game-info p span").text() ) + 1 
    );

	// Check if all boxes are gone
	if( !$('.box').length ) {
		// all the boxes are gone!
		$('.game-info').html('Oh no! I\'ve been defeated!!! <span>-_-</span>');
		clearInterval(intervalNumber);
	}


  })


	var intervalNumber = setInterval(function(){
  	  addNewBox();
    }, 150); 



});


function addNewBox() {
	$('.boxes').append('<div class="box">?</div>');
}
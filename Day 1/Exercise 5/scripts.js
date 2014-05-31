// Answers:
// $(document).ready(function() {

//   // Answer to #1
//   $('body').click(function() {
//     alert('You clicked the body!');
//   });

//   // Answers to #2 and #3
//   // This will popup an alert whenever you click or hover over a <p> tag
//   // Note how to use 'event' argument
//   var numTimesEventHappened = 0;
//   $('p').on('click mouseover', function(event) {
//     numTimesEventHappened = numTimesEventHappened + 1;
//     alert(numTimesEventHappened + ' happened on event '+event.type);
//   })

// });


// Functions Learned:
// .on()
// .hover()
// .click()
// .mouseover()
// ... plenty other event Functions

// Answer to #3.b:
// .on() accepts different parameters, and allows you to 
// observe the <body> tag for clicks on a type of element,
// instead of just observing that element. This means that any
// time MORE of that same element type are entered onto the page,
// they will still have this event observer on it.

// Answer to #4:
// ... Tons
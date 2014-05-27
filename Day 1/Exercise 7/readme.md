#Exercise 1
###Events in jQuery

Okay jQueriers, it's time to get for reals. We're gonna make a full up game out of this, building on everything we've done to this point.

1. add click events to all `box` elements to:
    1. `hide` them
    2. `remove` them from the DOM
    3. after `remove`ing them, increment the number inside `boxes destroyed` box
2. write a function to insert new `box` elements into the `<section>` tag with the class `boxes`. Make it a full on, callable function
3. wrap that function in some sort of javascript thing that will run repeatedly every few seconds (google!).
4. if we get here in time, write some javascript logic that will check if there are any boxes remaining, and if not, change the text on the page to say that you've won the game!
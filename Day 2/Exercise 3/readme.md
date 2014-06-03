#Exercise 3
###Building a Slider with jQuery

We're going to build a slider next.

If you look in the html markup, you'll see there's a `<ul>` with `<li>`s, which will be our slides. The first `<li>` has an `active` class, which makes it show up while the others are hidden.

Our controls will simply be altering the `<li>`s to add or remove the `active` class to the slide we wish to show.

1. We need controls for this slider. Write a function called `moveTo()` which will accept 1 parameter: the # of the slide we wish to move to. This function should remove the `active` class from all other `<li>`s and add it to the one we want to move to. 
2. Call this function inside your Chrome console to make sure it works properly.	
3. After we're sure it works correctly, we need to add in some new html for our actual controls.
4. Add a new `div` to the *beginning* of the `ul` with a class `prevous`.
5. Add a new `div` to the *end* of the `ul` with a class `next`.
6. Add event observers for the `previous` and `next` buttons we just inserted. The observers should change slides to the next or previous slides in the `li`. *Hint: you'll need a way of keeping track of which slide you are currently on. Alternatively, you can calculate that value in your `moveTo()` function.*
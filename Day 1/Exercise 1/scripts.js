window.onload = function() {
  if(typeof jQuery != "undefined") {
    document.getElementById('hello').innerHTML = "jQuery Present and Ready to go!";
    document.getElementById('hello').className = "green";
  } else {
    document.getElementById('hello').innerHTML = "Uh oh. Doesn't look like jQuery is loaded on the page, <br/>or maybe it's loaded after script.js and not before...";
    document.getElementById('hello').className = "red";
  }
}


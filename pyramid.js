

var heightElem = document.getElementById("height");
var formElem = document.getElementById("draw-form");
//var rangeElem = document.getElementById("myRange");
// set a handler function for the form's submission event
formElem.onsubmit = function(event) {
//rangeElem.oninput = function(event)
  // QUIZ
  // preventDafault stops action of element from happening
  //if we dont do this action of element will happen
  //ex.prevents a submit button from submitting form
  //Default behavior:click on a link to cause navigation
  event.preventDefault();

  // QUIZ
  // what happens if we don't do this?
  //we clear error from showing
  clearError();

  // figure out the height the user typed
  heightStr = heightElem.value;

  // TODO 1
  if (heightStr === ''){
    displayError("Please provide a height");
    return;
  }
  //can also do if(!heightStr for line 25)
  //can also do if(isNaN(height) || height < 1)
  //always use triple === in javascript to set equal to!
  //need return
  // if they didn't type anything at all, give a different error message,
  // something like "Please provide a height"


  // convert the string to an int
  height = parseInt(heightStr, 10);

  // if the height is not-a-number, yell at them and exit early
  // TODO 2
  if (heightStr <= 0) {
    displayError("This is not a number!");
    return;
  }
  // line 41 can also be if (isNaN(height) || 0 )

  // negative numbers and zero should also be rejected here
  if (isNaN(height)) {
    displayError("That's not a valid height.");
    return;
  }

  // if the height is absurdly tall, yell at them and exit early
  var tooTall = 100;
  if (height > tooTall) {
    displayError("Are you cray? I can't build a pyramid that tall.");
    return;
  }

  // draw pyramid with the specified height
  drawPyramid(height);
}


/**
* displayError
*
* Displays an error message on the text input, and colors it red
*/
function displayError(message) {
  heightElem.className = "invalid-field";
  document.querySelector(".error-message").innerHTML = message;
}


/*
* clearError
*
* Undisplays the error message and removes the red CSS style
*/
function clearError() {
  // TODO 3
  // implement this function.
  heightElem.className = ' ';
  document.querySelector(".error-message").innerHTML = ' ';

}


/**
* drawPyramid
*
* Renders, in the HTML document, a Mario pyramid of the specified height
*/
function drawPyramid(height) {

  // first, clear the old content

  // heightStr = $("#points").val();
  document.getElementById("pyramid").innerHTML = "";

  // for each row....
  for (var row = 0; row < height; row++) {

    // figure out number of bricks and spaces
    var numBricks = row + 2;
    var numSpaces = height - row - 1;

    // build up a string for this row
    var rowStr = "";
    for (var i = 0; i < numSpaces; i++) {
      var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
      rowStr += spaceChar;
    }
    for (var i = 0; i < numBricks; i++) {
      rowStr += "#";
    }

    // make a <p> element for this row, and insert it into the #pyramid container
    rowElem = document.createElement("p");
    rowElem.innerHTML = rowStr;
    document.getElementById("pyramid").appendChild(rowElem);
  }
}

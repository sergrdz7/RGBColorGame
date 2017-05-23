//Variable declarations
var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var resetBtn = document.querySelector("#reset");
var heading = document.querySelector("#headingContainer");
var modeButtons = document.querySelectorAll(".mode");

//RUN FUNCTION WHEN PAGE LOADS
init();

// INITIALIZE GAME SET UP
function init(){
  setupModeButton();
  setupSquares();
  reset();
}

resetBtn.addEventListener("click", function (){
  reset();
});

///////////////////////////////
//FUNCTION DECLASRAIONS
///////////////////////////////

function setupModeButton(){
  for (var i =0; i < modeButtons.length; i++){
    //add listenter to mode buttons
    modeButtons[i].addEventListener("click", function (){
    //Toggle selected button by first removing class from both
    //then adding it only to the clicked one
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    //Ternary operator
    this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
    reset();
    });
  }
}

function setupSquares(){
  for (var i = 0; i < squares.length; i++){
    //add click eventListener to every square
    squares[i].addEventListener("click", function (){
    //Get the color of picked square
    var clickedColor = this.style.background;
    //Compare color with picked color
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!!";
      messageDisplay.style.color = pickedColor;
      changeColors(pickedColor);
      headingContainer.style.background = pickedColor;
      resetBtn.textContent = "Play again?";
    } else {
      messageDisplay.textContent = "Incorrect";
      this.style.background = "#3e403c";
    }
  });
  }
}


//Resets colors based on mode
function reset(){
  //generate random colors
  colors = generateRandomColors(numberOfSquares);
  //pick new color
  pickedColor = pickColor();
  //change colorDisplay with rgb value
  colorDisplay.textContent = pickedColor;
  resetBtn.textContent = "New Colors";
  messageDisplay.textContent = "";
  //change colors of squares
  for(var i = 0; i < squares.length; i++) {
    if(colors[i]) {
      //Bring bottom squares back in case they are hidden (applies to top squares as well)
      squares[i].style.display= "block";
      //Set background color of every square
      squares[i].style.background = colors[i];
    } else {
      //Hide the rest of the squares if its on easy mode
      squares[i].style.display = "none";
    }

  }
  //Reset display color to default;
  headingContainer.style.background = "#8aaad5";
  messageDisplay.style.color = "#d62000";
}
//generate random colors function
function generateRandomColors(num){
  function randomColor(){
    return Math.floor(Math.random() * 255 ) + 1;
  }
  var colorArray = [];
  for (var i = 0; i < num; i++){
    colorArray[i] = "rgb(" + randomColor() + ", "+ randomColor() + ", " + randomColor() +")";
  }
  return colorArray;
}

//Change the colors of other squares
function changeColors (color){
  for (var i = 0; i < squares.length; i++){
    squares[i].style.background = color;
  }
}

//Select one random color to be displayed
function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

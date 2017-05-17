//Variable declarations
var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var resetBtn = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
colorDisplay.textContent = pickedColor;
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

//Initialize colors and game logic
// fillSquares();

///////////////////////////////
//BUTTON LISTENERS
///////////////////////////////

//East and Hard Mode listeners
easyBtn.addEventListener("click", function (){
  //toggle button class
  numberOfSquares = 3;
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  //generate 3 random colors
  colors = generateRandomColors(numberOfSquares);
  //select one color for game
  pickedColor = pickColor();
  //display the rgb value
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++) {
    //if theres is another color
    if(colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function (){
  numberOfSquares = 6;
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  //generate 3 random colors
  colors = generateRandomColors(numberOfSquares);
  //select one color for game
  pickedColor = pickColor();
  //display the rgb value
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  }
});

resetBtn.addEventListener("click", function (){
  //generate random colors
  colors = generateRandomColors(numberOfSquares);
  //pick new color
  pickedColor = pickColor()
  //change colorDisplay with rgb value
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  //Reset display color to default;
  //document.querySelector(".highlight").style.background = #8aaad5;
  h1.style.background = "#3e403c";
  h2.style.background = "#3e403c";
  messageDisplay.textContent = "Guess the color";
});


///////////////////////////////
//FUNCTION DECLASRAIONS
///////////////////////////////

//MAIN FUNCTION WITH GAME LOGIC
  for (var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.background = colors[i];
    //add click eventListener to every square
    squares[i].addEventListener("click", function (){
      //Get the color of picked square
      var clickedColor = this.style.background;

      //Compare color with picked color
      if (clickedColor === pickedColor) {
        //alert("Correct");
        messageDisplay.textContent = "Correct";
        changeColors(pickedColor);
        h1.style.background = pickedColor;
        h2.style.background = pickedColor;
        resetBtn.textContent = "Play again?";
        // headingColor.style.background = pickedColor;

        //Change background of all squares to match.
      } else {
        messageDisplay.textContent = "Incorrect";
        this.style.background = "#3e403c";
      }
    });
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

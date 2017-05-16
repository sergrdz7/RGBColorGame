// var colors = [
// //   "rgb(255, 0, 0)",
// //   "rgb(255, 100, 0)",
// //   "rgb(255, 200, 0)",
// //   "rgb(100, 0, 110)",
// //   "rgb(100, 110, 200)",
// //   "rgb(255, 200, 200)"
// // ];
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
//var headingColor = document.querySelectorAll("h1");
colorDisplay.textContent = pickedColor;
console.log(pickedColor);

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
      // headingColor.style.background = pickedColor;

      //Change background of all squares to match.
    } else {
      messageDisplay.textContent = "Incorrect";
      this.style.background = "#3e403c";
      console.log(clickedColor +"and" + pickedColor);
    }
  });

  function changeColors (color){
    for (var i = 0; i < squares.length; i++){
      squares[i].style.background = color;
    }
  }

  function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
  }

  function generateRandomColors(num){

    function randomColor(){
      return Math.floor(Math.random() * 255 ) + 1;
    }

    var colorArray = [];
    for (var i = 0; i < num; i++){
  
      colorArray[i] = "rgb(" + randomColor() + ", "+ randomColor() + ", " + randomColor() +")";
      console.log("randomColor = " + randomColor());
    }
    return colorArray;
  }
}

var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square")
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
/* var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn"); */
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    //mode buttons event listener
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){

    for(var i=0; i<modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            for(var i=0; i<modeButtons.length; i++){
                modeButtons[i].classList.toggle("selected");
            
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
            //figure out how many squares to show
            //pick new colors
            //pick a new pickedColor
            //update page to reflect changes
            }
        })
    }

}

function setupSquares(){
    for(var i=0; i < squares.length; i++){
    
        //add event listeners to squares
        squares[i].addEventListener("click", function(){
    
           //grab color of clicked square
           var clickedColor = this.style.backgroundColor;
           //compare color to pickedColor
           if(clickedColor === pickedColor){
               messageDisplay.textContent = "CORRECT!";
               resetButton.textContent = "Play Again?";
               h1.style.background = clickedColor;
               changeColors(clickedColor);
           }else{
               this.style.backgroundColor = "#232323";
               messageDisplay.textContent = "Try Again";
           }
        
        })
    }
}


/* easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else{
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
}) */

resetButton.addEventListener("click", function(){
    reset();
})




function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    h1.style.background = "steelblue";

    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }

}


function changeColors(color){
    //loop through all squares
    for(var i = 0; i< colors.length; i++){
        squares[i].style.backgroundColor = color;
        
    }
    //change each color to match given color
}


function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}


function generateRandomColors(num){
    //make an array
    var arr = [];
    //add num random colors to array
    for(var i = 0; i < num; i++){
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
}


function randomColor(){
    //pick a "red" from 0 to 255
    var r = Math.floor(Math.random()*256);
    //pick a "green" from 0 to 255
    var g = Math.floor(Math.random()*256);
    //pick a "blue" from 0 to 255
    var b = Math.floor(Math.random()*256);
    //return rgb string, ensure there are spaces between , and g/b!
    //to match DOM's rgb format =
    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}
alert("Connected!");

var p1button = document.getElementById("p1");
var p2button = document.getElementById("p2");
var p1display = document.querySelector("#p1display")
var p2display = document.querySelector("#p2display")

var p1score = 0;
var p2score = 0;
var limit = 5;
var gameover = false;




    p1button.addEventListener("click", function(){

        if(gameover===false){
            p1score++;
            p1display.textContent = p1score;
            if(p1score===limit){
                gameover= true;
                p1display.classList.add("winner");
            }
        }

    })

    p2button.addEventListener("click", function(){
        
        if(gameover===false){
            p2score++;
            p2display.textContent = p2score;
            if(p2score===limit){
                gameover=true
                p2display.classList.add("winner");
            }
        }
    })




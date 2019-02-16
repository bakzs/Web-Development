var secnum = 4;


var check = true

while(check){
    var stringGuess = prompt("Guess?");
    var guess = Number(stringGuess);
    if (guess === secnum){
        alert("you got it right!");
        check = false
    }
    else if (guess > secnum){
        alert("Too high, guess again");
    }
    else{
        alert("Too low, Guess again!");
    }
}
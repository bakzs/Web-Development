function isEven(x){
    if (x%2===0)
        return true;
    else
        return false;
}

function factorial(x){
    if (x < 0)
        return 'Negative number has no factorial';
    else{
        var sum = 1;
        for(var fact = 1 ; fact< x; fact++){
            sum *=(fact+1);
        }
        
        return sum

    }
}

function kebabToSnake(x){
    var a = '';
    for( var i = 0; i<x.length; i++){
        if (x[i] === '-'){
            a = a+'_';
        }
        else
            a = a + x[i];
    }

    return a
}

var num = prompt('number?');

console.log(isEven(num));
console.log(factorial(num));
console.log(kebabToSnake('hello-hey'));
function printReverse(arr){
    for(var i = arr.length-1; i>=0; i--){
        console.log(arr[i]);
    } 
}

function isUniform(arr){
    var firstelem = arr[0];
    for (var i = 0; i< arr.length; i++){
        if (firstelem!=arr[i]){return false;}
    }
    return true
}

function sumArray(arr){
    var sum = 0;
    for(var i = 0; i< arr.length; i++){
        sum += arr[i];
    }
    return sum
}

function Max(arr){
    max = arr[0];
    for(var i = 0; i<arr.length; i++){
        if (arr[i]>max)
            max = arr[i];
    }
    return max
}
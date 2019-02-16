var age = prompt("What is your age?");

if (age<0){
    alert("Error");
}
else if (age==21){
    alert("Happy 21st birthday!!");
}
else if (age%2>0){
    alert("Your age is odd!");
}

sqroot = Math.sqrt(age);

if(age%sqroot==0){
    alert("perfect square!");
}
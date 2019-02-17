alert("CONNECTED!");
var button = document.querySelector("button");

console.log(button);


button.addEventListener("click", function(){
    //Checks if body has Class Purple, if not adds it, else removes it.
    document.body.classList.toggle("purple") ;
});
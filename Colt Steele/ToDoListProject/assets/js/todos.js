// Check off Specific To Dos by Clicking
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});


//Click on garbage can to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });


    event.stopPropagation();
});


//Add to dos
$("input[type='text']").keypress(function(event){
    //13 is the key code for enter
    if(event.which === 13){
        //grabbing new to do text from input
        var todoText = $(this).val();
        $(this).val("");

        //create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")
    }
});

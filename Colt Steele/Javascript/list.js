var todos = [];

window.setTimeout(function(){ 
    var input = prompt("What would you like to do?");
    while(input!=="quit"){
        if(input==="list"){
            console.log(todos);
        }
        else if(input==="new"){
            var newtodo = prompt("Enter new todo");
            todos.push(newtodo);
        }
        input = prompt("what would you like to do?");
    }

    console.log("You quit!");
},500);
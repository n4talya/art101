


console.log("Javascript is working!")

$("#my-button").click(function(){
    console.log("button clicked!");
    var name = prompt("what is your name?");
    console.log("prompt returned: " + name);
    newText = "Hello " + name + "!";
    $("#title").html(newText);
})

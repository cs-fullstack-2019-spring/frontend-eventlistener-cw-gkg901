var h1Element = document.querySelector("h1");
var btnElement = document.querySelector("button");


//SAME OL SAME, WITH A TWIST
function ask(){
    userInput = "";
    while (userInput !== "n")
    {
        userInput = prompt("do you want to continue being asked to quit?")
    }
}
btnElement.addEventListener('click',ask);
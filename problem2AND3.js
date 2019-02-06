

// GRAB EVERYTHING HERE

var pTag = document.querySelector("p");
var btn1 = document.getElementById('one');
var headerElement = document.querySelector("header");
var btn2 = document.getElementById('two');
var h2Element = document.getElementsByTagName("h2");
// console.log(h2Element);


// TITLE CHANGE "ONE" FUNCTION
function titleChangeOne(){
    pTag.textContent = "1"
}

//BLUE BACKGROUND
function changeBackgroundBlue(){

    headerElement.classList.toggle("blueBackground")
}

//EVENT LISTENERS SET ONE
btn1.addEventListener('click',titleChangeOne);
btn1.addEventListener('click',changeBackgroundBlue);


// TITLE CHANGE "TWO" FUNCTION
function titleChangeTwo(){
    pTag.textContent = "2"
}
//BLUE BACKGROUND
function changeBackgroundRed(){

    headerElement.classList.toggle("redBackground")
}
//EVENT LISTENERS SET TWO
btn2.addEventListener('click',titleChangeTwo);
btn2.addEventListener('click',changeBackgroundRed);

//1PX FONT FUNCTION
function lilFont(e){
    e.target.style.fontSize = "1px";
}


//1PX FONT LOOP
for(var i=0; i<=h2Element.length;i++)
{
    h2Element[i].addEventListener('click', lilFont);
}


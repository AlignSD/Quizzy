// on click start button changes state to 1 question container.

// var startButton = document.getElementById("startButton");
// startButton.onclick().style.display;

var questions = [
    question: "variables can store a string, array and______?.",
    answer: [

    ]


]

// *****************************
//       Button Functions 
// *****************************

// START BUTTON Button Functions

// When Mouse is clicked Down we remove q1State style from q1
function mouseDown(){
    document.getElementById('q1').classList.remove("q1State");
}

// When Mouse is released we change #startContainer's display to none in order
// to hide it
function mouseUp(){
    
    document.getElementById('startContainer').style.display = 'none'
}

// Question One Buttons Button Functions
function mouseDownQ1(){
    document.getElementById('q2').classList.remove("q2State");
}

function mouseUpQ1(){
    
    document.getElementById('q1').style.display = 'none'
}


// Questions Two Button Functions
function mouseDown(){
    document.getElementById('q3').classList.remove("q1State");
}

function mouseUp(){
    
    document.getElementById('q2').style.display = 'none'
}

// Questions Three Button Functions
function mouseDown(){
    document.getElementById('q4').classList.remove("q1State");
}

function mouseUp(){
    
    document.getElementById('q3').style.display = 'none'
}

// Questions Four Button Functions
function mouseDown(){
    document.getElementById('q4').classList.remove("q1State");
}

function mouseUp(){
    
    document.getElementById('q5').style.display = 'none'
}

// Questions Five Button Functions
function mouseDown(){
    document.getElementById('q5').classList.remove("q1State");
}

function mouseUp(){
    
    document.getElementById('startContainer').style.display = 'none'
}


// *****************************
//       Timer Functions 
// *****************************

// Need to set a 60 second timer
var totalTime = 6000
var timeLeft;
function startTimer() {
    if (timeLeft = 0)
}
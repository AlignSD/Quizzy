// on click start button changes state to 1 question container.

// var startButton = document.getElementById("startButton");
// startButton.onclick().style.display;

// var questions = [
//     question: "variables can store a string, array and______?.",
//     answer: [

//     ]


// ]

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
    
    document.getElementById('startContainer').style.display = 'none';
}

// Question One Buttons Button Functions
function mouseDownQ1(){
    document.getElementById('q2').classList.remove("q2State");
}

function mouseUpQ1(){
    
    document.getElementById('q1').style.display = 'none';
}


// Questions Two Button Functions
function mouseDownQ2(){
    document.getElementById('q3').classList.remove("q3State");
}

function mouseUpQ2(){
    
    document.getElementById('q2').style.display = 'none';
}

// Questions Three Button Functions
function mouseDownQ3(){
    document.getElementById('q4').classList.remove("q4State");
}

function mouseUpQ3(){
    
    document.getElementById('q3').style.display = 'none';
}

// Questions Four Button Functions
function mouseDownQ4(){
    document.getElementById('q5').classList.remove("q5State");
}

function mouseUpQ4(){
    
    document.getElementById('q4').style.display = 'none';
}

// Questions Five Button Functions
function mouseDownQ5(){
    document.getElementById('q6').classList.remove("q5State");
}
// need to reveal score then Initial box

// Need to go to high score page
function mouseUpQ5(){
    
    document.getElementById('startContainer').style.display = 'none';
}


// *****************************
//       Timer Functions 
// *****************************
var timerSec = 6000;
var timeLeft = [i];
for (i = 6000; i <= timerSec; i--);

document.getElementById('timerSecID').append(timeLeft)
     



// Need to set a 60 second timer
// var totalTime = 6000
// var timeLeft;
// function startTimer() {
//     if (timeLeft = 0)
// }
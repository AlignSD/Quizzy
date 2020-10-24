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

// need to set wrong answer button classes to wrong and have them deduct time

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
// 00000000000000000000000000
// This starts timer on button click of #startButton
document.getElementById("startButton").onclick = setTime;
// need to deduct time for wrong button clicks

// time left needs to equal score at the end

var timeLeft = 5;
var timeEl = document.querySelector("#timerSecID");
var mainEl = document.getElementById("timerContainer");

function setTime() {
    var timerInterval = setInterval(function() {
      timeLeft--;
      timeEl.textContent = timeLeft;
  
      if(timeLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
    
// This section causes all containers for questions and the start screen to change
// its display to none after timer runs out 

    var x = document.querySelectorAll("#startContainer,#q6,#q5,#q4,#q3,#q2,#q1");
    var i;
        for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
}
//   0000000000000000000000000000000000000000000
//  see if you can get i to change the display of the results container to show maybe

    }}, 1000);
}     

// This section is part of the countdown
function sendMessage() {
    timeEl.textContent = " ";
  
    var imgEl = document.createElement("img");
    mainEl.appendChild(imgEl);
  
  }
//   This starts 
  
       



// Need to set a 60 second timer
// var totalTime = 6000
// var timeLeft;
// function startTimer() {
//     if (timeLeft = 0)
// }
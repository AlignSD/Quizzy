

// *****************************
//       Button Functions 
// *****************************


    // your code 


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
    document.getElementById('q5').classList.add("q5state");
}
// need to reveal score then Initial box

// Need to go to high score page
function mouseUpQ5(){
    
    document.getElementById('storeScore').style.display = 'inline';
}


// *****************************
//       Timer Functions 
// *****************************

// This starts timer on button click of #startButton
document.getElementById("startButton").onclick = setTime;
// need to deduct time for wrong button clicks

// time left needs to equal score at the end

var timeLeft = 10;
var timeEl = document.querySelector("#timerSecID");
var mainEl = document.getElementById("timerContainer");

function setTime() {
    
    var timerInterval = setInterval(function() {
      timeLeft--;
      timeEl.textContent = timeLeft;
  
      if(timeLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
        // Makes final  score page display when time runs out
        document.getElementById('storeScore').style.display = 'inline'
    
// This section causes all containers for questions and the start screen to change
// its display to none after timer runs out 

    var x = document.querySelectorAll("#startContainer,#q6,#q5,#q4,#q3,#q2,#q1");
    var i;
        for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
}
//   0000000000000000000000000000000000000000000
//  see if you can get i to change the display of the results container to show maybe
document.querySelector('#wrong').addEventListener('click', function() {
    timeLeft - 5;})
    }}, 1000);
    
}     

    
// This section is part of the countdown

function sendMessage(){}
//     timeEl.textContent = " ";
  
//     var imgEl = document.createElement("img");
//     mainEl.appendChild(imgEl);
  
//   }

    // Displaying the value
 

  
// *****************************
//       Scoring Functions 
// *****************************

// when user inputs initials save to local storage.
console.log(localStorage);
localStorage.setItem("name", "#inpKey" );  
       


const inpKey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpValue");
const submitbtn = document.getElementById("btnInsert");
const lsOutput = document.getElementById("lsOutput");

// trying to get local storage to work across pages

btnInsert.onclick = function (){
    const key = inpKey.value;
    const value = inpValue.value;
    location.href = "HighScore.html";

    console.log(key);
    console.log(value);

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
    }

}

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    // lsOutput.innerHTML += key ,value;
}
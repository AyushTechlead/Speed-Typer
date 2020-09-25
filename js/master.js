var i = 0;
var txt = "Type the given words within time limit, to win the game";

var dict = ['Hat','River','Lucky','Statue','Generate','Stubborn','Cocktail',
'Runaway','Joke','Hero','Developer','Javascript','Echo','Siblings','laughter',
'magic','Space','Master','Definition','Symptom','Investigate'];

var diff = 'none';
var time = 0;
var timeCpy = 0;

var wordInput = document.getElementsByName("gameText")[0]; /*Input Text*/
var buttonInput = document.getElementById("lvlSelect"); /*Button*/

/*Type Writter Effect */
function typeWriter(){
  if(i === 0){
    document.getElementById("words").innerHTML = "";
  }
  document.getElementById("words").innerHTML += txt.charAt(i);
  i++;
  if(i < txt.length){
    setTimeout(typeWriter, 380);
  } else{
    i = 0;
    document.getElementById("words").innerHTML = ".";
    setTimeout(typeWriter, 380);
  }
}

/*Select diff first*/
wordInput.addEventListener("click",checkLevelSet);
function checkLevelSet(){
  var lvl = document.getElementById("query");
  if(diff === 'none'){
    lvl.innerHTML = "Select Level First!";
    lvl.classList.add("text-warning");
  }
}

/*change button text and set 'diff'*/
function changeLevel(lvl){
  if(lvl === 'Easy'){
    diff = 'Easy';
    time = 5;
    timeCpy = 5;
  } else if(lvl === 'Medium'){
    diff = 'Medium';
    time = 3;
    timeCpy = 3;
  } else{
    diff = 'Hard';
    time = 2;
    timeCpy = 2;
  }
  buttonInput.innerHTML = diff;
  document.getElementById("query").innerHTML = "Hello";
  document.getElementById("query").classList.remove("text-warning");
}

/*Run timer*/
wordInput.addEventListener("click",runTimer);
function runTimer(){
  var timeLeft = document.getElementsByClassName("timeLogic")[0];
  timeLeft.innerHTML = "Time Left:" + time + "sec";
  time--;
  if(time >= 0)
    setTimeout(runTimer, 1000);
  else if(diff !='none'){
      document.getElementById("query").innerHTML = "Game Over!!";
      document.getElementById("query").classList.add("text-warning");
    }
}


/*Check if user win*/
wordInput.addEventListener("input",winCheck);
function winCheck(){
  var expectedText = document.getElementById("query").innerHTML
  if(expectedText === wordInput.value){
    nextLevel();
  }
}

function nextLevel(){
  var word = document.getElementById("query");
  wordInput.value = "";
  word.innerHTML = dict[Math.floor(Math.random()*dict.length)];
  time = timeCpy;
}

/*Defines result variables*/
var result1 = 0; //matches black milk tea
var result2 = 0; //matches brown sugar milk
var result3 = 0; //matches strawberry slush

var questionCount = 0; //counts questions answered

var resultFinal = document.getElementById("result");
var imgFinal = document.getElementById("imgresult");

/* Define score update functions */
function winBMT(){ //updates black milk tea progress
  result1+=1;
  questionCount+=1;
  answerCheck();
}

function winBSM(){ //updates brown sugar milk progress
  result2+=1;
  questionCount+=1;
  answerCheck();
}

function winSS(){ //updates strawberry slush progress
  result3+=1;
  questionCount+=1;
  answerCheck();
}

/* Creates Reset Function */
function resetAns(){
  result1 = 0;
  result2 = 0;
  result3 = 0;
  questionCount = 0;
  resultFinal.innerHTML = "Your result is...";
  imgFinal.src ="assets/result.png";
}

/* Define event listeners for buttons */
q1a1.addEventListener('click', winSS);
q1a2.addEventListener('click', winBSM);
q1a3.addEventListener('click', winBMT);

q2a1.addEventListener('click', winSS);
q2a2.addEventListener('click', winBMT);
q2a3.addEventListener('click', winBSM);

q3a1.addEventListener('click', winBMT);
q3a2.addEventListener('click', winBSM);
q3a3.addEventListener('click', winSS);

reset.addEventListener('click', resetAns);

/* Sets final condition once all three questions have been answered */
function answerCheck(){
  if (questionCount == 3){
    if (result1 >= 2){
      resultFinal.innerHTML = "Your result is Black Milk Tea! As everyone's dependable person that they go to first, it makes sense that this starter drink would line up perfectly with you! Everyone respects you as the blueprint, so it makes sense that you would order this no-frills popular drink (with boba of course).";
      imgFinal.src="assets/bmt.jpg";
    }
    else if (result2 >= 2){
      resultFinal.innerHTML = "Your result is Brown Sugar Milk! This sweet yet filling drink is just what an energetic yet focused person needs. You’re driven and adventurous, but you know how to work on your goals at the same time, so make sure to pick up this drink to fuel your work!";
      imgFinal.src="assets/bsm.jpg";
    }
    else if (result3 >= 2){
      resultFinal.innerHTML = "Your result is Strawberry Slushie! As someone who lives on the wild side, this fruity drink is just what you need to fuel your crazy adventures. Make sure to include some more sugary popping boba in your drink!";
      imgFinal.src="assets/ss.jpg";
    }
    else if (result1 == 1 && result2 == 1 && result3 == 1){
      resultFinal.innerHTML = "Your result is Mango Iced Tea! You indulge in a little bit of everything, so this flexible drink hits just right, being refreshing, fruity, and classic. Any topping would work with this drink, so feel free to choose what feels right for you!";
      imgFinal.src ="assets/mt.jpg";
    }
  }
} 
  

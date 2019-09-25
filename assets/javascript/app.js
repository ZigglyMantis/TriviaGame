//create list of questions, objects?//
var qOne = {
    question :"what is the approximate population of Lithuania?",
     correctAnswer :"3,000,000",
      answer1 : "1,400,000",
       answer2 : "4,500,000"
    }
var qTwo = {
    question :"What is the name of the strongest Avenger?",
     correctAnswer :"Thor",
      answer1 :"Hulk",
       answer2 :"Iron Man"
    }
var qThree = {
    question :"What do; Weeping Angels, SCP-173, and basically all other statue monsters have in common?",
     correctAnswer :"Moving when your eyes are closed",
      answer1 :"being made of stone",
       answer2 :"sending you back into the past to live out the remainder of your life."
    }
var qFour = {
    question :"Who beat Perfect Cell in the Cell games Saga",
     correctAnswer :"Gohan",
      answer1 :"Goku",
       answer2 :"Krillin"
    }

var correctCount = 0;
var number = 30;
var intervalId;
var timerCount = 0;
//create a start button//
function startGame(){
    $("#startButton").on("click", function(){
        $("#title").text("Time left: ");
        $("#question").text(qOne.question);
        $("#choiceOne").html(`<button class="ca">${qOne.correctAnswer}</button>`)
        $("#choiceTwo").html(`<button class="wa">${qOne.answer1}</button>`)
        $("#choiceThree").html(`<button class="wa">${qOne.answer2}</button>`)
        $("#startButton").hide("#startButton");
        run();
        correctPick();
        wrongPick();
    });
}
function end(){
    $("#choiceOne").hide("#choiceOne")
    $("#choiceTwo").hide("#choiceTwo")
    $("#choiceThree").hide("#choiceThree")
    $("#question").text("you got " + correctCount + " out of 4 correct!")
    $("#title").text("Game End")
    setTimeout(() => {
        $("#startButton").show("#startButton");
        $("#choiceOne").show("#choiceOne")
        $("#choiceTwo").show("#choiceTwo")
        $("#choiceThree").show("#choiceThree")
        number = 30;
    }, 5000);
}
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }
function decrement() {
    number--;
    $("#timeLimit").html("<h2>" + number + "</h2>");
    if (number === 0) {
      $("#title").text("Time up");
      ++timerCount;
      next();
  }
}
    function next(){
        number = 30
        run();
        if (timerCount === 1){question2();}
         else if (timerCount === 2) {question3();}
          else if (timerCount === 3){questionLast();}
            else if (timerCount === 4) {end();}

function question2 (){
    $("#title").text("Time left: ");
    $("#question").text(qTwo.question);
    $("#choiceOne").html(`<button class="wa">${qTwo.answer1}</button>`)
    $("#choiceTwo").html(`<button class="ca">${qTwo.correctAnswer}</button>`)
    $("#choiceThree").html(`<button class="wa">${qTwo.answer2}</button>`)
    correctPick();
    wrongPick();
}
function question3 (){
    $("#title").text("Time left: ");
    $("#question").text(qThree.question);
    $("#choiceOne").html(`<button class="wa">${qThree.answer1}</button>`)
    $("#choiceTwo").html(`<button class="wa">${qThree.answer2}</button>`)
    $("#choiceThree").html(`<button class="ca">${qThree.correctAnswer}</button>`)
    correctPick();
    wrongPick();
}
function questionLast (){
    $("#title").text("Time left: ");
    $("#question").text(qFour.question);
    $("#choiceThree").html(`<button class="wa">${qFour.answer1}</button>`)
    $("#choiceTwo").html(`<button class="wa">${qFour.answer2}</button>`)
    $("#choiceOne").html(`<button class="ca">${qFour.correctAnswer}</button>`)
    correctPick();
    wrongPick();
    }
}
function correctPick(){
    $(".ca").on("click", function(){
            ++correctCount;
            $("#title").text("Correct!")
            clearInterval(intervalId)
            setTimeout(() => {
                number = 5
                run();
            }, 500);
        });
    }
function wrongPick(){
    $(".wa").on("click", function(){
        $("#title").text("Wrong!")
        clearInterval(intervalId)
        setTimeout(() => {
            number = 5
            run();
        }, 500);
    });
}
startGame();
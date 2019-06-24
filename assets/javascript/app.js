//Variables
var questionArray = [
    {
    question:'How many days are in one week?',
    answers: ['five', 'seven', 'ten', 'three'],
    correctAnswer: 'seven'
    },
    {
    question:'How many months are in one year?',
    answers: ['ten', 'fifteen', 'nine', 'twelve'],
    correctAnswer: 'twelve'
    },
    {
    question: 'How many seconds are in one minute?',
    answers: ['sixty', 'fifty','forty', 'thirty'],
    correctAnswer: 'sixty'
    }
];

var showQuestion; // Variable showQuestion will hold the setInterval when we start the slideshow
var count = 0; // Count will keep track of the index of the currently displaying picture.
var timer = 10;
var answerClicked;
var correctAnswerBank =0;
var incorrectAnswer = 0;
var unanswered = questionArray.length - incorrectAnswer - correctAnswerBank;


//Run "startSlideshow" when the "start" button is clicked
$("#startDiv").click(startSlideshow);

// TODO: Use jQuery to run "stopSlideshow" when we click the "stop" button.
$("#stop").click(stopSlideshow);

function startSlideshow() {
    showQuestion; // Variable showQuestion will hold the setInterval when we start the slideshow
    count = 0; // Count will keep track of the index of the currently displaying picture.
    timer = 10;
    answerClicked;
    correctAnswer =0;
    incorrectAnswer = 0;
    $('#startDiv').hide(); //Remove start button from display

    // Run display question function to show first question
    displayQuestion();

};

function decrement () {
    timer--;
    $('#questionTimer').html('<h2>' +'Time Remaining: ' + timer + '</h2>');
    if (timer===0){
        stopSlideshow();
        nextQuestion();
    }
};

// This function will replace display whatever question it's given in the 'src' attribute of the img tag.
function displayQuestion() {
    $('#resultsDiv').hide();
    $('#questionDiv').show();
    $('#answersDiv').show();
    $('#questionTimer').show();

    timer = 10;
    showQuestion = setInterval(decrement, 1000);

    $('#answersDiv').html('');
    $("#questionDiv").html(questionArray[count].question);
    $('#questionTimer').html('<h2>' +'Time Remaining: ' + timer + '</h2>');

    for(var i = 0; i < questionArray[count].answers.length; i++) {
        $("#answersDiv").append(
        '<input name="group-' + count + '" type="radio" id="answerButton' + i +'" value="' + questionArray[count].answers[i] + '" /> ' + ' ' + questionArray[count].answers[i] + ' '
        );
    }
    
};

//captures value of button clicked, shows if correct or not on results page for 5 seconds, then runs next question.
$(document).on('click', '#answerButton0', function(){
    answerClicked = document.getElementById('answerButton0').getAttribute('value');
    console.log(answerClicked);
    if(answerClicked === questionArray[count].correctAnswer){
        console.log('correct!');
    }
    else {
        console.log('wrong');
    }
 });
$(document).on('click', '#answerButton1', function(){
   answerClicked = document.getElementById('answerButton1').getAttribute('value');
    console.log(answerClicked);
    $('#resultsDiv').show();
    $('#questionDiv').hide();
    $('#answersDiv').hide();
    $('#questionTimer').hide();
    stopSlideshow();
    if(answerClicked === questionArray[count].correctAnswer){
        $('#resultsDiv').html('correct');
        console.log('correct!');
        correctAnswerBank++;
    }
    else {
        $('#resultsDiv').html('wrong');
        console.log('wrong');
        incorrectAnswer++;
    }
    timer = 5;
    showQuestion = setInterval(decrement, 1000);

});
$(document).on('click', '#answerButton2', function(){
    answerClicked = document.getElementById('answerButton2').getAttribute('value');
     console.log(answerClicked);
     if(answerClicked === questionArray[count].correctAnswer){
        alert('correct!');
    }
    else {
        alert('wrong');
    }
 });
 $(document).on('click', '#answerButton3', function(){
    answerClicked = document.getElementById('answerButton3').getAttribute('value');
     console.log(answerClicked);
     if(answerClicked === questionArray[count].correctAnswer){
        alert('correct!');
    }
    else {
        alert('wrong');
    }
 });
 


function nextQuestion() {
    count++; //Increment the count by 1.


  
    // TODO: If the count is the same as the length of the question array, reset the count to 0. Show a summary page.
    if (count === questionArray.length) {
        stopSlideshow();
        count = 0;
        $('#resultsDiv').html('<h2>' +'All done, here\'s how you did!' + '</h2>');
        $('#resultsDiv').append('<h2>' +'Correct Answers: ' + correctAnswerBank + '</h2>');
        $('#resultsDiv').append('<h2>' +'Incorrect Answers: ' + incorrectAnswer + '</h2>');
        $('#resultsDiv').append('<h2>' +'Unanswered: ' + unanswered + '</h2>');
        $('#resultsDiv').show();
        $('#questionDiv').hide();
        $('#answersDiv').hide();
        $('#questionTimer').hide();
        $('#startDiv').html('Play again?');    
        $('#startDiv').show();
    }
    else {
    // TODO: Show the loading gif in the "question-holder" div.
    $("#questionDiv").html("<img src='images/loading.gif' width='200px'/>");
  
    // TODO: Use a setTimeout to run displayQuestion after 1 second.
    setTimeout(displayQuestion, 1000);
    };
};


  
function stopSlideshow() { 

    clearInterval(showQuestion);
};
  
// Question generated, time remaining generated, multiple choice answers generated

// function play() {
//     document.getElementById('questionAndAnswer').innerHTML(question1);
//     console.log('hello');
// };
// play();
    //on answer click, display if answer was right or wrong, timer is still displayed, display correct answer and corresponding image. After set time, auto generate new question with timer reset (no user input before moving on to new page)
    //on times up, display "out of time", display correct answer and corresponding image, after set time, auto generate new question with timer reset (no user input to move on)
//if timesup, show results page with correct answer
//at end of game, summarize correct answers, incorrect answers, unanswered questions. Timer stops. Button generated -> on click, start game over.

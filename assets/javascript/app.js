//Questions: 
     //1. click event for answers clicked regardless of answers array size?
     //2. Way to use only one decrement question?

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
var timer = 10; //sets timer for each question, use decrement function to count down from this number
var answerClicked; //stores value of answer clicked
var correctAnswerBank =0; //stores number of correct answers clicked
var incorrectAnswer = 0; //stores value of incorrect answers clicked
var unanswered = 0;

//Run "startSlideshow" when the "start" button is clicked
$("#startDiv").click(startSlideshow);

//function to start game
function startSlideshow() {
    showQuestion; // Variable showQuestion will hold the setInterval when we start the slideshow
    count = 0; // Count will keep track of the index of the currently displaying picture.
    timer = 10; //reset question length timer
    answerClicked;
    correctAnswer =0;
    incorrectAnswer = 0;
    $('#startDiv').hide(); //Remove start button from display
    displayQuestion(); // Run display question function to show first question
};

//function to count down from timer number and display on question page
function decrement () {
    timer--;
    $('#questionTimer').html('<h3>' +'Time Remaining: ' + timer + '</h3>');
    if (timer===0){
        stopSlideshow();
        nextQuestion();
    }
};

function decrementQuestion () {
    timer--;
    $('#questionTimer').html('<h3>' +'Time Remaining: ' + timer + '</h3>');
    if (timer===0){
        stopSlideshow();
        $('#resultsDiv').show();
        $('#questionDiv').hide();
        $('#answersDiv').hide();
        $('#questionTimer').hide();
        $('#resultsDiv').html('Out of time!');
        console.log('wrong');
        unanswered++;
        timer = 5;
        showQuestion = setInterval(decrement, 1000);
    }
};

// Function to display current question and answer options
function displayQuestion() {
    $('#resultsDiv').hide();
    $('#questionTimer').show();
    $('#questionDiv').show();
    $('#answersDiv').show();

    timer = 10;
    showQuestion = setInterval(decrementQuestion, 1000); //timer countdown by seconds

    $('#answersDiv').html(''); //clear answersDiv if needed
    $('#questionTimer').html('<h3>' +'Time Remaining: ' + timer + '</h3>');
    $("#questionDiv").html(questionArray[count].question); //display current question
    
    //display answer options
    for(var i = 0; i < questionArray[count].answers.length; i++) {
        $("#answersDiv").append(
        '<input name="group-' + count + '" type="radio" id="answerButton' + i +'" value="' + questionArray[count].answers[i] + '" /> ' + ' ' + questionArray[count].answers[i] + ' '
        );
    } 
};

//click events to capture value of button clicked, show if correct or not on results page for 5 seconds, then run next question function.
$(document).on('click', '#answerButton0', function(){
    answerClicked = document.getElementById('answerButton0').getAttribute('value');
    console.log(answerClicked);
    $('#resultsDiv').show();
    $('#questionDiv').hide();
    $('#answersDiv').hide();
    $('#questionTimer').hide();
    stopSlideshow();
    if(answerClicked === questionArray[count].correctAnswer){
        $('#resultsDiv').html('Correct!');
        console.log('Correct!');
        correctAnswerBank++;
    }
    else {
        $('#resultsDiv').html('Incorrect!');
        $('#resultsDiv').append('<p>'+'The correct answer was ' + questionArray[count].correctAnswer + '</p>');
        console.log('wrong');
        incorrectAnswer++;
    }
    timer = 5;
    showQuestion = setInterval(decrement, 1000);
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
        $('#resultsDiv').html('Correct!');
        console.log('Correct!');
        correctAnswerBank++;
    }
    else {
        $('#resultsDiv').html('Incorrect!');
        $('#resultsDiv').append('<p>'+'The correct answer was ' + questionArray[count].correctAnswer + '.' + '</p>');
        console.log('wrong');
        incorrectAnswer++;
    }
    timer = 5;
    showQuestion = setInterval(decrement, 1000);
});
$(document).on('click', '#answerButton2', function(){
    answerClicked = document.getElementById('answerButton2').getAttribute('value');
    console.log(answerClicked);
    $('#resultsDiv').show();
    $('#questionDiv').hide();
    $('#answersDiv').hide();
    $('#questionTimer').hide();
    stopSlideshow();
    if(answerClicked === questionArray[count].correctAnswer){
    $('#resultsDiv').html('Correct!');
    console.log('Correct!');
    correctAnswerBank++;
    }
    else {
        $('#resultsDiv').html('Incorrect!');
        $('#resultsDiv').append('<p>'+'The correct answer was ' + questionArray[count].correctAnswer + '.' + '</p>');
        console.log('wrong');
        incorrectAnswer++;
    }
    timer = 5;
    showQuestion = setInterval(decrement, 1000);
 });
 $(document).on('click', '#answerButton3', function(){
    answerClicked = document.getElementById('answerButton3').getAttribute('value');
    console.log(answerClicked);
    $('#resultsDiv').show();
    $('#questionDiv').hide();
    $('#answersDiv').hide();
    $('#questionTimer').hide();
    stopSlideshow();
    if(answerClicked === questionArray[count].correctAnswer){
    $('#resultsDiv').html('Correct!');
    console.log('Correct!');
    correctAnswerBank++;
    }
    else {
        $('#resultsDiv').html('Incorrect!');
        $('#resultsDiv').append('<p>'+'The correct answer was ' + questionArray[count].correctAnswer + '.' + '</p>');
        console.log('wrong');
        incorrectAnswer++;
    }
    timer = 5;
    showQuestion = setInterval(decrement, 1000);
 });

function nextQuestion() {
    count++; //Increment the count by 1.

    // If the count is the same as the length of the question array, reset the count to 0 and show a summary page.
    if (count === questionArray.length) {
        stopSlideshow();
        count = 0;
        // unanswered = questionArray.length - incorrectAnswer - correctAnswerBank; //calculates number of questions skipeed
        $('#resultsDiv').html('<h2>' + 'All done, here\'s how you did!' + '</h2>');
        $('#resultsDiv').append('<h3>' + 'Correct Answers: ' + correctAnswerBank + '</h3>');
        $('#resultsDiv').append('<h3>' + 'Incorrect Answers: ' + incorrectAnswer + '</h3>');
        $('#resultsDiv').append('<h3>' + 'Unanswered: ' + unanswered + '</h3>');
        $('#resultsDiv').show();
        $('#questionDiv').hide();
        $('#answersDiv').hide();
        $('#questionTimer').hide();
        $('#startDiv').html('<button class="btn btn-lg">' + 'Play again?' + '</button>');   
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
  
//disply image on results and summary pages

// Could use jQuery to run "stopSlideshow" when we click the "stop" button.
// $("#stop").click(stopSlideshow);
// Main Array
const quizQuestions = [
    {
        question: "Pick a shoe.",
        choices: ["Steve", "kevin", "peter"],
        categories: ["vapor", "grunge", "pastel"]
    },
    {
        question: "Choose a season.",
        choices: ["1970", "1982", "1985"],
        categories: ["pastel", "vapor", "grunge"]
    },
    {
        question: "Pick a flower.",
        choices: ["Seoul", "New York", "Tokyo"],
        categories: ["grunge", "pastel", "vapor"]

    },
    {
        question: "Pick an album.",
        choices: ["scientist", "bus driver", "programmer"],
        categories: ["vapor", "grunge", "pastel"]

    },
    {
        question: "Pick a TV show.",
        choices: ["1", "2", "0"],
        categories: ["pastel", "vapor", "grunge"]

    }];

// Global Variable Declaration
let currentQuestion = 0;
const aestheticScore = [];




// Print all the questions to the page, start quiz
    function printQuestion() {
        const askQuestion = quizQuestions[currentQuestion].question;
            // console.log(askQuestion);

            $('h2').html('Question ' + parseInt(currentQuestion + 1) + " : " + askQuestion);
            

            // the selections that the user will click on
        const options = quizQuestions[currentQuestion].choices;
        const wave = quizQuestions[currentQuestion].categories;
        // console.log(options);
        // console.log(wave);

            let formHtml = '';


            // print the selections to each radio button
            for (let i = 0; i < options.length; i++) {
                formHtml += `<div class='check'><input type='radio' name='option' value='${wave[i]}'>${options[i]}</input></div>`;
                $('.questionBox').html(formHtml);
            }

    };
    // printQuestion();

//Grab the value of the question and do something
    function grabAestheticValue() {
        // $('input[name=option]').on('click', function() {
            const selectedValue = $('input[type=radio]:checked').val();
            console.log(selectedValue);

            if (selectedValue === 'grunge') {
                aestheticScore.push(selectedValue);

            } else if (selectedValue === 'vapor') {
                aestheticScore.push(selectedValue);

            } else {
                aestheticScore.push(selectedValue);
                // pastel value
            }
            console.log(aestheticScore);
            console.log('clicked');

            // Prevent more than one answer being clicked by triggering next button event
        // });
    };

$(document).ready(function(){

// const beginButton = $('#startWave');
// console.log(beginButton);


// Username Creation and Beginning of Quiz
    $('#startWave').on('click', function(e){
        e.preventDefault();
        const userName = $('#waveName');
        
        // make this a local variable since I only need it here
        let waveName = userName.val();
        
        if (waveName === ''){
            alert('Please fill in a ~ wavename ~ to start the quiz.');

        } else {
            $('.letsGo').html(`<p>let's r i d e, ${waveName}.</p>`);
            console.log(waveName);
        }

        $('.question').show()
        userName.val('');
    });
    // DONE

// Call question print 
    printQuestion();

    
// Proceed to the next question in the array, if we hit the last question go to results, if not display the next question
//Bounce an alert if there wasn't an option checked 
    
    const nextButton = $('.next');
// Next Question in Array
    nextButton.on('click', function(){
        grabAestheticValue();
        currentQuestion++;
        // increment the main array index by 1
        // we can do this bc quizQuestions is in the global scope so we can grab it anywhere

        // in order to move to the next question, we have to make sure we're still within the array.length
        if (currentQuestion < quizQuestions.length){
            // keep going
            printQuestion();
            // grabAestheticValue();
        } 
        if (currentQuestion == quizQuestions.length - 1){
            // on the last question we want that click to trigger the result div
            nextButton.on('click', function(){
                $('.question').hide();
                $('.result').show();

            // tally up the aesthetic array here as well
            // --
                const resultHtml = `<h3>Your result is</h3>`;
                $('.result').html(resultHtml);
                console.log(resultHtml);
            });
        };


    });














    
});
// Document Ready Scope





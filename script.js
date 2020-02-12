// Main Array
const quizQuestions = [
    {
        question: "Pick a shoe",
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
        // userName.val('');
    });
    // DONE


// Print all the questions to the page
    function printQuestion() {
        quizQuestions.forEach(function (currentItem) {

            const askQuestion = currentItem.question;

            $('h2').html('Question ' + parseInt(currentQuestion + 1) + " : " + askQuestion);

            // the selections that the user will click on
            const options = currentItem.choices;
            const wave = currentItem.categories;

            let formHtml = '';


            // print the selections to each radio button
            for (let i = 0; i < options.length; i++) {
                formHtml += `<div class='check'><input type='radio' name='option' value='${wave[i]}'>${options[i]}</input></div>`;
                $('.questionBox').html(formHtml);
            }
        });
    };

    printQuestion();


//Grab the value of the question and do something
    function grabAestheticValue() {
        $('input[type=radio]').on('click', function () {
            const selectedValue = $(this).val();
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

            // Prevent more than one answer being clicked by triggering next button event
        });
    };

    grabAestheticValue();
    // Proceed to the next question in the array, if we hit the last question go to results, if not display the next question
    //Bounce and alert if there wasn't an option checked 
    $('.next').on()














    
});
// Document Ready Scope



// Global Variable Declaration
const beginButton = $('.begin');
const startQuizquestion = $('.question1');
const aestheticQuestion = $('h2');
const aestheticOptionsContainer = $('.selectionContainer');

$(document).ready(function(){
    
// Username Creation and Beginning of Quiz
    beginButton.on('click', function beginWave(){
        
        const userName = $('input');
        // make this a local variable since I only need it here
        let waveName = userName.val();
        
        if (waveName === ''){
            alert('Please fill in a ~ wavename ~ to start the quiz.');

        } else {
            $('.letsGo').html( `<p>let's r i d e, ${waveName}.</p>`);
            console.log(waveName);
        }

        userName.val('');
        $('.question').show();
    








    });
    // DONE



// Display the first question from array, show it, allow user to click on an option and store the answer

    aestheticOptionsContainer.on('click', 'li', function() {
        console.log('I been clicked');

        








    });











});
// Document Ready Scope

// Question Array
const quizQuestions = [
    {
        question: 'What is question1?',
        options: [
            'VaporWave',
            'Grunge',
            'Pastel'
            ]
    },

    {
        question: 'What is question2?',
        options: [
            'VaporWave',
            'Grunge',
            'Pastel' 
            ]
    },

    {
        question: 'What is question1?',
        options: [
            'VaporWave',
            'Grunge',
            'Pastel'
            ]
    },

    {
        question: 'What is question1?',
        options: [
            'VaporWave',
            'Grunge',
            'Pastel'
            ]
    },

    {
        question: 'What is question1?',
        options: [
            'VaporWave',
            'Grunge',
            'Pastel'
            ]
    },
]
